import request from "./request";
import Sessions from "./Sessions";

const SEC_FEE_RATE = 0.0000231;
const SEC_FEE_MIN = 0.01;
const SEC_FEE_MAX = Number.POSITIVE_INFINITY;
const TAF_FEE_RATE = 0.000119;
const TAF_FEE_MIN = 0.01;
const TAF_FEE_MAX = 5.95;

export default class Order {

	constructor(data) {
		for (let key of [
			"orderID",
			"accountID",
			"userID",
			"cumQty",
			"accountNo",
			"comment",
			"commission",
			"createdByID",
			"createdWhen",
			"executedWhen",
			"grossTradeAmt",
			"instrumentID",
			"leavesQty",
			"orderNo",
			"orderQty",
			"side",
			"autoStop",
		]) {
			this[key] = data[key];
		}
		this.rejectionReason = data.ordRejReason;
		this.status = data.ordStatus;
		this.type = data.ordType;
		this.price = data.stopPrice || data.limitPrice || data.price;
	}

	cancel(cb) {
		request({
			method: "DELETE",
			endpoint: `/orders/${this.orderID}`,
			sessionKey: Sessions.get(this.userID),
		}, () => {
			cb && cb(null);
		}, err => cb && cb(err));
	}

	static cancel(orderID, userID, cb) {
		request({
			method: "DELETE",
			endpoint: `/orders/${orderID}`,
			sessionKey: Sessions.get(userID),
		}, () => {
			cb && cb(null);
		}, err => cb && cb(err));
	}

	static get SIDES() { return {
		BUY: "B",
		SELL: "S",
	} };

	static get TYPES() { return {
		MARKET: "1",
		LIMIT: "2",
		STOP: "3",
	} };

	static get STATUSES() { return {
		NEW: "0",
		PARTIAL_FILL: "1",
		FILL: "2",
		CANCELED: "4",
		REJECTED: "8",
	} }

	static getByID(orderID, userID, cb) {
		request({
			method: "GET",
			endpoint: `/orders/${orderID}`,
			sessionKey: Sessions.get(userID),
		}, (data) => {
			cb && cb(null, new Order(data));
		}, err => cb && cb(err));
	}

	static create(type, {
		accountID,
		accountNo,
		userID,
		accountType,
	}, {
		instrument,
		side,
		qty,
		amountCash,
		comment,
		autoStop,
		price,
		waitForFill = true,
		fillRetryInterval = 500,
	}, cb) {
		if (amountCash && qty) throw new Error(`"qty" and "amountCash" are mutually exclusive.`);
		if (type !== Order.TYPES.MARKET && !price) throw new Error(`Limit and stop orders require a "price."`);
		if (type !== Order.TYPES.MARKET && autoStop) throw new Error(`"autoStop" is only allowed for market orders.`);

		request({
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
				orderQty: qty ? qty : undefined,
				amountCash: amountCash ? amountCash : undefined,
				comment,
				autoStop,
				price: type === Order.TYPES.STOP ? price : undefined,
				limitPrice: type === Order.TYPES.LIMIT ? price : undefined,
			},
		}, (data) => {

			let fillMaxRetries = type === Order.TYPES.MARKET ? 10 : 1;

			if (!waitForFill) return cb && cb(null, data.orderID);

			let poll, retries = fillMaxRetries;
			const checkStatus = () => {
				fillMaxRetries--;
				Order.getByID(data.orderID, userID, (err, order) => {
					if (err) return cb && cb(err);
					if (fillMaxRetries <= 0) return cb && cb(null, order);

					if (order.status !== Order.STATUSES.NEW && order.status !== Order.STATUSES.PARTIAL_FILL) {
						return cb && cb(null, order);
					} else {
						setTimeout(checkStatus, fillRetryInterval);
					}
				});
			};
			setTimeout(checkStatus, fillRetryInterval);
		}, err => cb && cb(err));
	}

	// each order is:
	// { side, qty, marketPrice, referenceID }
	// commission schedule is:
	// { baseRate, baseShares, excessRate, fractionalRate, shareAmountRounding, subscription, basketSchedule, passThroughFees }
	static estimateCommission(orders, commissionSchedule) {
		orders = Array.isArray(orders) ? orders : [orders];
		let total = 0;
		let totalFeesOnly = 0;
		let basketPrice = undefined;

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
					Math.max(0, qty - commissionSchedule.baseShares)
				) * commissionSchedule.excessRate
			);

			let secFee = 0, tafFee = 0;
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
