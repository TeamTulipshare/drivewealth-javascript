/* @flow */
import request from "./request";
import { Config, HOSTS } from "./Config";
import Sessions from "./Sessions";

/**
 * @class Reports
 * @description Static class for retrieving account reports.
 */
export default class Reports {
	/**
	 * @static
	 */
	static getTransactions(
		userID: string,
		accountNo: string,
		startDate: Date,
		endDate: Date,
	): Promise<Array<Object>> {
		const queryString =
			`?sessionKey=${Sessions.get(userID)}`
			+ "&ReportName=FinTrans"
			+ "&ReportFormat=JSON"
			+ `&AccountNumber=${accountNo}`
			+ `&DateStart=${startDate.toISOString()}`
			+ `&DateEnd=${endDate.toISOString()}`
			+ `&wlpID=${Config.wlpID}`
			+ "&LanguageID=en_US";

		return request({
			method: "POST",
			host: HOSTS.REPORTS,
			endpoint: `/DriveWealth${queryString}`,
			sessionKey: Sessions.get(userID),
			body: {},
		}).then(({ body }) => body.transaction || []);
	}

	/**
	 * @static
	 */
	static getPlacedOrders(
		userID: string,
		accountNo: string,
		startDate: Date,
		endDate: Date,
	): Promise<Array<Object>> {
		const queryString =
			`?sessionKey=${Sessions.get(userID)}`
			+ "&ReportName=OrderTrans"
			+ "&ReportFormat=JSON"
			+ `&AccountNumber=${accountNo}`
			+ `&DateStart=${startDate.toISOString()}`
			+ `&DateEnd=${endDate.toISOString()}`
			+ `&wlpID=${Config.wlpID}`
			+ "&LanguageID=en_US";

		return request({
			method: "POST",
			host: HOSTS.REPORTS,
			endpoint: `/DriveWealth${queryString}`,
			sessionKey: Sessions.get(userID),
			body: {},
		}).then(({ body }) => body.transaction || []);
	}

	/**
	 * @static
	 */
	static getStatements(
		userID: string,
		accountID: string,
		startDate: Date,
		endDate: Date,
	): Promise<Array<Object>> {
		const queryString =
			`?accountID=${accountID}`
			+ `&dateStart=${startDate.toISOString()}`
			+ `&dateEnd=${endDate.toISOString()}`
			+ "&type=02";

		return request({
			method: "GET",
			endpoint: `/statements${queryString}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body || []);
	}

	/**
	 * @static
	 */
	static getTradeConfirms(
		userID: string,
		accountID: string,
		startDate: Date,
		endDate: Date,
	): Promise<Array<Object>> {
		const queryString =
			`?accountID=${accountID}`
			+ `&dateStart=${startDate.toISOString()}`
			+ `&dateEnd=${endDate.toISOString()}`
			+ "&type=01";

		return request({
			method: "GET",
			endpoint: `/statements${queryString}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body || []);
	}

	/**
	 * @static
	 */
	static getTaxDocuments(
		userID: string,
		accountID: string,
		startDate: Date,
		endDate: Date,
	): Promise<Array<Object>> {
		const queryString =
			`?accountID=${accountID}`
			+ `&dateStart=${startDate.toISOString()}`
			+ `&dateEnd=${endDate.toISOString()}`
			+ "&type=03";

		return request({
			method: "GET",
			endpoint: `/statements${queryString}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body || []);
	}

	/**
	 * @static
	 */
	static generateDownloadURL(
		userID: string,
		accountID: string,
		fileKey: string,
	): Promise<string> {
		return request({
			method: "GET",
			endpoint: `/statements/${accountID}/${fileKey}`,
			sessionKey: Sessions.get(userID),
		}).then(({ body }) => body.url);
	}

	/**
	 * @static
	 */
	static getSupportedCountries(cb) {
		return request({
			method: "GET",
			endpoint: "/countries",
		}).then(({ body }) => body || []);
	}

}
