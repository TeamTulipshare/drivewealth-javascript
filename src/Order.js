/* @flow */
import request from "./request";
import Sessions from "./Sessions";

import type { CommissionSchedule } from "./Account";
import type Instrument from "./Instrument";

const SEC_FEE_RATE = 0.0000231;
const SEC_FEE_MIN = 0.01;
const SEC_FEE_MAX = Number.POSITIVE_INFINITY;
const TAF_FEE_RATE = 0.000119;
const TAF_FEE_MIN = 0.01;
const TAF_FEE_MAX = 5.95;

export type OrderParentDetails = {
	accountID: string,
	accountNo: string,
	userID: string,
	accountType: string,
};
export type NewOrder = {
	instrument: Instrument | string,
	side: string,
	qty?: number,
	amountCash?: number,
	comment?: string,
	autoStop?: number,
	price?: number,
};
export type NewCartOrder = {
	instrument: Instrument | string,
	qty?: number,
	amountCash?: number,
	referenceID: string,
	comment?: string,
	autoStop?: number,
};

/**
 * @class Order
 * @description An order created for an Account. Use the constructor if you have a flat JSON object that you would like to access instance methods on.
 * @param {object} data - See response at http://developer.drivewealth.com/docs/get_market
 */
export default class Order {
	orderID: string;
	accountID: string;
	userID: string;
	cumQty: number;
	accountNo: string;
	comment: string;
	commission: number;
	createdByID: string;
	createdWhen: string;
	executedWhen: string;
	grossTradeAmt: number;
	instrumentID: string;
	leavesQty: string;
	orderNo: string;
	orderQty: number;
	side: string;
	autoStop: ?number;
	symbol: string;
	rejectionReason: ?string;
	status: string;
	type: number;
	price: ?number;
	effectivePrice: ?number;

	constructor(data: Object) {
		Object.assign(this, data);
		this.rejectionReason = data.ordRejReason;
		this.status = data.ordStatus;
		this.type = data.ordType || data.orderType;
		this.price = data.stopPrice || data.limitPrice || data.price;
	}

	/**
	 * @name SIDES
	 * @memberof Order
	 * @constant
	 * @property {string} BUY
	 * @property {string} SELL
	 */
	static SIDES: {[side: string]: string} = {
		BUY: "B",
		SELL: "S",
	};

	/**
	 * @name TYPES
	 * @memberof Order
	 * @constant
	 * @property {string} MARKET
	 * @property {string} LIMIT
	 * @property {string} STOP
	 */
	static TYPES: {[type: string]: string} = {
		MARKET: "1",
		LIMIT: "2",
		STOP: "3",
	};

	/**
	 * @name STATUSES
	 * @memberof Order
	 * @constant
	 * @property {string} NEW
	 * @property {string} PARTIAL_FILL
	 * @property {string} FILL
	 * @property {string} CANCELED
	 * @property {string} REJECTED
	 */
	static STATUSES: {[status: string]: string} = {
		NEW: "0",
		PARTIAL_FILL: "1",
		FILL: "2",
		CANCELED: "4",
		REJECTED: "8",
	};

	/**
	 * @instance
	 */
	cancel(): Promise<void> {
		return Order.cancel(this.orderID);
	}

	/**
	 * @static
	 */
	static cancel(orderID: string): Promise<void> {
		return request({
			method: "DELETE",
			endpoint: `/orders/${orderID}`,
			sessionKey: Sessions.getAny(),
		}).then(() => undefined);
	}

	/**
	 * @static
	 */
	static getByID(orderID: string): Promise<Order> {
		return request({
			method: "GET",
			endpoint: `/orders/${orderID}`,
			sessionKey: Sessions.getAny(),
		}).then(({ body }) => new Order(body));
	}

	/**
	 * @param {string} type
	 * @param {Object} parentInfo
	 * @param {Object} options
	 * @return If waitForFill is true, an Order will be returned. Otherwise, an orderID will be returned.
	 */
	static create(
		type: string,
		{
			accountID,
			accountNo,
			userID,
			accountType,
		}: OrderParentDetails,
		{
			order: {
				instrument,
				side,
				qty,
				amountCash,
				comment,
				autoStop,
				price,
			},
			waitForFill = true,
			fillRetryInterval = 1000,
			fillMaxRetries = 10,
		}: {
			order: NewOrder,
			waitForFill?: boolean,
			fillRetryInterval?: number,
			fillMaxRetries?: number,
		},
	): Promise<string | Order> {
		if (amountCash && qty) {
			throw new Error("\"qty\" and \"amountCash\" are mutually exclusive.");
		}

		if (type !== Order.TYPES.MARKET) {
			fillMaxRetries = 2;

			if (!price) {
				throw new Error("Limit and stop orders require a \"price.\"");
			}

			if (autoStop) {
				throw new Error("\"autoStop\" is only allowed for market orders.");
			}
		}

		return request({
			method: "POST",
			endpoint: "/orders",
			sessionKey: Sessions.get(userID),
			body: {
				instrumentID: instrument.instrumentID || instrument.id || instrument,
				accountID,
				accountNo,
				userID,
				accountType,
				ordType: type,
				side,
				orderQty: qty || undefined,
				amountCash: amountCash || undefined,
				comment,
				autoStop,
				price: type === Order.TYPES.STOP ? price : undefined,
				limitPrice: type === Order.TYPES.LIMIT ? price : undefined,
			},
		}).then(({ body }) => {
			if (!waitForFill) return body.orderID;

			return new Promise((resolve, reject) => {
				let retries = fillMaxRetries;
				const checkStatus = () => {
					retries -= 1;
					Order.getByID(body.orderID).then(order => {
						if (order.rejectionReason !== undefined) {
							return reject(order.rejectionReason);
						}

						const isFilled = order.status !== Order.STATUSES.NEW &&
							order.status !== Order.STATUSES.PARTIAL_FILL;

						if (retries <= 0 || isFilled) {
							return resolve(order);
						}
						setTimeout(checkStatus, fillRetryInterval);
					}, error => {
						if (error.body.code === 404 && retries > 0) {
							return setTimeout(checkStatus, fillRetryInterval);
						}
						return reject(error);
					});
				};
				setTimeout(checkStatus, fillRetryInterval);
			});
		});
	}

	/**
	 * @param {Object} parentInfo
	 * @param {Object} options
	 * @return {Promise<Object.<string, Object>>} An object will be resolved with each key set to a referenceID passed with an order.
	 */
	static createCart(
		{
			accountID,
			accountNo,
			userID,
			accountType,
		}: OrderParentDetails,
		{
			orders,
			waitForFill = true,
			fillRetryInterval = 500,
			fillMaxRetries = 10,
		}: {
			orders: Array<NewCartOrder>,
			waitForFill?: boolean,
			fillRetryInterval?: number,
			fillMaxRetries?: number,
		},
	): Promise<{[referenceID: string]: Object}> {
		return request({
			method: "POST",
			endpoint: "/orders",
			sessionKey: Sessions.get(userID),
			body: orders.map(order => ({
				instrumentID: order.instrument.instrumentID
					|| order.instrument.id || order.instrument,
				accountID,
				accountNo,
				userID,
				accountType,
				ordType: Order.TYPES.MARKET,
				side: Order.SIDES.BUY,
				orderQty: order.qty ? order.qty : undefined,
				amountCash: order.amountCash ? order.amountCash : undefined,
				comment: order.comment,
				autoStop: order.autoStop,
			})),
		}).then(({ body }) => {
			let orderResults = body;
			const ordersMap = orderResults.reduce(
				(acc, next, idx) => Object.assign({}, acc, {
					[orders[idx].referenceID]: next,
				}),
				{},
			);

			if (!waitForFill) return ordersMap;

			return new Promise((resolve, reject) => {
				let retries = fillMaxRetries;
				orderResults = orderResults.map((order, idx) => Object.assign({}, order, {
					referenceID: orders[idx].referenceID,
				}));
				const checkStatus = () => {
					if (retries <= 0) return resolve(orderResults);
					retries -= 1;

					Promise.all(
						orderResults.map(order => new Promise((resolve, reject) => {
							Order.getByID(order.orderID, userID, (error, statusDetails) => {
								if (error) return resolve();
								ordersMap[order.referenceID] = statusDetails;
								resolve();
							});
						})),
					).then(() => {
						let shouldRetry = false;
						for (const reference in ordersMap) {
							const thisStatus = ordersMap[reference].status;
							if (!thisStatus
								|| thisStatus === Order.STATUSES.NEW
								|| thisStatus === Order.STATUSES.PARTIAL_FILL
							) {
								shouldRetry = true;
								break;
							}
						}
						if (shouldRetry) {
							setTimeout(checkStatus, fillRetryInterval);
						} else {
							return resolve(ordersMap);
						}
					});
				};
				setTimeout(checkStatus, fillRetryInterval);
			});
		});
	}

	/**
	 * @static
	 */
	static estimateCommission(
		orders: Array<{
			side: string,
			qty: number,
			marketPrice: number,
			referenceID: string,
		}>,
		commissionSchedule: CommissionSchedule,
	): {
		total: number,
		multipleOrderDelta: number,
		byOrder: {[referenceID: string]: {
			total: number,
			commission: number,
			fees: {
				sec: number,
				taf: number,
			},
		}}
	} {
		orders = Array.isArray(orders) ? orders : [orders];
		let total = 0;
		let totalFeesOnly = 0;
		let basketPrice;

		const { basketSchedule } = commissionSchedule;
		if (basketSchedule && basketSchedule.schedule) {
			for (const scheduleItem of basketSchedule.schedule) {
				if (scheduleItem.basketSize === orders.length) {
					basketPrice = scheduleItem.basketPrice;
					break;
				}
			}
		}

		const byOrder = {};
		for (const order of orders) {
			const { qty, marketPrice, side, referenceID } = order;

			let orderPrice = qty < 1
				? commissionSchedule.fractionalRate
				: commissionSchedule.baseRate;
			orderPrice += (
				{
					NEAREST: Math.round,
					CEIL: Math.ceil,
					FLOOR: Math.floor,
				}[commissionSchedule.shareAmountRounding](
					Math.max(0, qty - commissionSchedule.baseShares),
				) * commissionSchedule.excessRate
			);

			let secFee = 0;
			let tafFee = 0;
			if (commissionSchedule.passThroughFees && side === Order.SIDES.SELL) {
				tafFee = qty * marketPrice * TAF_FEE_RATE;
				tafFee = Math.min(TAF_FEE_MAX, tafFee);
				tafFee = Math.max(TAF_FEE_MIN, tafFee);

				if (qty >= 1) {
					secFee = Math.floor(qty) * marketPrice * SEC_FEE_RATE;
					secFee = Math.min(SEC_FEE_MAX, secFee);
					secFee = Math.max(SEC_FEE_MIN, secFee);
				}
			}

			const orderTotal = orderPrice + secFee + tafFee;
			total += orderTotal;
			totalFeesOnly += secFee + tafFee;

			byOrder[referenceID] = {
				total: orderTotal,
				commission: orderPrice,
				fees: {
					sec: secFee,
					taf: tafFee,
				},
			};
		}

		return {
			total: basketPrice ? (basketPrice + totalFeesOnly) : total,
			multipleOrderDelta: basketPrice ? (basketPrice - total) : 0,
			byOrder,
		};
	}
}
