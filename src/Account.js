/* @flow */
import request from "./request";
import Sessions from "./Sessions";
import Order from "./Order";
import Funding from "./Funding";
import Reports from "./Reports";

import type { OrderParentDetails } from "./Order";

export type CommissionSchedule = {
	baseRate: number,
	baseShares: number,
	excessRate: number,
	fractionalRate: number,
	shareAmountRounding: number,
	subscription: boolean,
	basketSchedule: {
		baseShares: number,
		excessRate: number,
		schedule: Array<{
			basketSize: number,
			basketPrice: number,
		}>,
	},
	passThroughFees: boolean,
};

/**
 * @class Account
 * @description An account belonging to a User. Use the constructor if you have a flat JSON object that you would like to access instance methods on.
 * @param {object} data - See response at http://developer.drivewealth.com/docs/accounts_get
 */
export default class Account {
	accountID: string;
	accountNo: string;
	userID: string;
	accountType: string;
	currencyID: string;
	ibID: string;
	margin: string;
	nickname: string;
	openedWhen: string;
	patternDayTrades: string;
	status: string;
	tradingType: string;
	accountMgmtType: string;
	commissionSchedule: CommissionSchedule;

	constructor(data: Object) {
		Object.assign(this, data);
	}

	/**
	 * @name BLOTTER_TYPES
	 * @memberof Account
	 * @constant
	 * @property {string} CASH
	 * @property {string} ORDERS
	 * @property {string} TRANSACTIONS
	 * @property {string} POSITIONS
	 * @property {string} ALL
	 */
	static BLOTTER_TYPES: {[type: string]: ?string} = {
		CASH: "cash",
		ORDERS: "orders",
		TRANSACTIONS: "transactions",
		POSITIONS: "positions",
		ALL: null,
	};

	/**
	 * @name STATUSES
	 * @memberof Account
	 * @constant
	 * @property {number} PENDING
	 * @property {number} OPEN
	 * @property {number} OPEN_NO_NEW_TRADES
	 * @property {number} CLOSED
	 */
	static STATUSES: {[status: string]: number} = {
		PENDING: 1,
		OPEN: 2,
		OPEN_NO_NEW_TRADES: 3,
		CLOSED: 9,
	};

	/**
	 * @name TYPES
	 * @memberof Account
	 * @constant
	 * @property {number} PRACTICE
	 * @property {number} LIVE
	 */
	static TYPES: {[type: string]: number} = {
		PRACTICE: 1,
		LIVE: 2,
	};

	/**
	 * @instance
	 */
	getBlotter(type: ?string = null): Promise<Object> {
		return Account.getBlotter(this.userID, this.accountID, type);
	}

	/**
	 * @static
	 */
	static getBlotter(userID: string, accountID: string, type: ?string = null): Promise<Object> {
		return request({
			method: "GET",
			endpoint: `/users/${userID}/accountSummary/`
				+ `${accountID}${type ? "/" + type : ""}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => {
			if (body.orders) {
				body.orders = body.orders.map((order) => new Order(order));
			}
			return type ? body[type] : body;
		});
	}

	/**
	 * @param {Date} startDate
	 * @param {Date} endDate
	 */
	/**
	  * @param {string} period
	  */
	/**
	  * @description Get today's performance
	  */
	getPerformance(): Promise<Object> {
		return Account.getPerformance(this.userID, this.accountID, ...arguments);
	}

	/**
	 * @param {Date} startDate
	 * @param {Date} endDate
	 */
	/**
	  * @param {string} period
	  */
	/**
	  * @description Get today's performance
	  */
	static getPerformance(userID: string, accountID: string): Promise<Object> {
		let queryString = "";
		if (arguments.length === 4) {
			const startDate = arguments[2];
			const endDate = arguments[3];
			queryString += "/dateRange?";
			queryString += `startDate=${startDate.getFullYear()}${("0" + (startDate.getMonth() + 1)).slice(-2)}${("0" + startDate.getDate()).slice(-2)}`;
			queryString += `&endDate=${endDate.getFullYear()}${("0" + (endDate.getMonth() + 1)).slice(-2)}${("0" + endDate.getDate()).slice(-2)}`;
		} else if (arguments.length === 3) {
			queryString += `/history?period=${arguments[2]}`;
		}

		return request({
			method: "GET",
			endpoint: `/users/${userID}/accountPerformance/${accountID}${queryString}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body.performance);
	}

	/**
	 * @instance
	 */
	placeOrder(type: string, data: Object): Promise<string | Object> {
		const parentDetails: OrderParentDetails = {
			accountID: this.accountID,
			accountNo: this.accountNo,
			accountType: this.accountType,
			userID: this.userID,
		};

		return Order.create(type, parentDetails, data);
	}

	/**
	 * @instance
	 */
	getFundingMethods(options: Object = {}): Promise<Array<Object>> {
		options.userID = this.userID;
		options.accountID = this.accountID;
		return Funding.getFundingMethods(options);
	}

	/**
	 * @instance
	 */
	getTransactions(startDate: Date, endDate: Date): Promise<Array<Object>> {
		return Reports.getTransactions(this.userID, this.accountNo, startDate, endDate);
	}

	/**
	 * @instance
	 */
	getPlacedOrders(startDate: Date, endDate: Date): Promise<Array<Object>> {
		return Reports.getPlacedOrders(this.userID, this.accountNo, startDate, endDate);
	}

	/**
	 * @instance
	 */
	getStatements(startDate: Date, endDate: Date): Promise<Array<Object>> {
		return Reports.getStatements(this.userID, this.accountID, startDate, endDate);
	}

	/**
	 * @instance
	 */
	getTaxDocuments(startDate: Date, endDate: Date): Promise<Array<Object>> {
		return Reports.getTaxDocuments(this.userID, this.accountID, startDate, endDate);
	}

	/**
	 * @instance
	 */
	getTradeConfirms(startDate: Date, endDate: Date): Promise<Array<Object>> {
		return Reports.getTradeConfirms(this.userID, this.accountID, startDate, endDate);
	}

	/**
	 * @instance
	 */
	generateDownloadURL(fileKey: string): Promise<Array<Object>> {
		return Reports.generateDownloadURL(this.userID, this.accountID, fileKey);
	}

	/**
	 * @static
	 */
	static getListForUserID(userID: string): Promise<Array<Account>> {
		return request({
			method: "GET",
			endpoint: `/users/${userID}/accounts`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body.map(account => new Account(account)));
	}

	/**
	 * @static
	 */
	static create(userID: string, type: string, data: Object) {
		if (type === Account.TYPES.PRACTICE) {
			data = {
				userID,
				responseType: "full",
				tranAmount: data,
			};
		}

		return request({
			method: "POST",
			endpoint: type === Account.TYPES.PRACTICE
				? "/signups/practice"
				: "/signups/live",
			sessionKey: Sessions.get(userID),
			body: data,
		}).then(({ body }) => body);
	}
}
