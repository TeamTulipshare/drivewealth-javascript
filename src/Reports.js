import request from "./request";
import { Config, HOSTS } from "./Config";
import Sessions from "./Sessions";

export default class Reports {

    static getTransactions(userID, accountNo, startDate, endDate, cb) {
        const queryString =
            `?sessionKey=${Sessions.get(userID)}`
            + `&ReportName=FinTrans`
            + `&ReportFormat=JSON`
            + `&AccountNumber=${accountNo}`
            + `&DateStart=${startDate.toISOString()}`
            + `&DateEnd=${endDate.toISOString()}`
            + `&wlpID=${Config.wlpID}`
            + `&LanguageID=en_US`;

        request({
            method: "POST",
            host: HOSTS.REPORTS,
            endpoint: `/DriveWealth${queryString}`,
            sessionKey: Sessions.get(userID),
            body: {},
        }, (data) => {
            cb && cb(null, data.transaction);
        }, err => cb && cb(err));
    }

    static getPlacedOrders(userID, accountNo, startDate, endDate, cb) {
        const queryString =
            `?sessionKey=${Sessions.get(userID)}`
            + `&ReportName=OrderTrans`
            + `&ReportFormat=JSON`
            + `&AccountNumber=${accountNo}`
            + `&DateStart=${startDate.toISOString()}`
            + `&DateEnd=${endDate.toISOString()}`
            + `&wlpID=${Config.wlpID}`
            + `&LanguageID=en_US`;

        request({
            method: "POST",
            host: HOSTS.REPORTS,
            endpoint: `/DriveWealth${queryString}`,
            sessionKey: Sessions.get(userID),
            body: {},
        }, (data) => {
            cb && cb(null, data.transaction);
        }, err => cb && cb(err));
    }

    static getStatements(userID, accountID, startDate, endDate, cb) {
        const queryString =
            `?accountID=${accountID}`
            + `&dateStart=${startDate.toISOString()}`
            + `&dateEnd=${endDate.toISOString()}`
            + `&type=02`;

        request({
            method: "GET",
            endpoint: `/statements${queryString}`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

    static getTradeConfirms(userID, accountID, startDate, endDate, cb) {
        const queryString =
            `?accountID=${accountID}`
            + `&dateStart=${startDate.toISOString()}`
            + `&dateEnd=${endDate.toISOString()}`
            + `&type=01`;

        request({
            method: "GET",
            endpoint: `/statements${queryString}`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

    static getTaxDocuments(userID, accountID, startDate, endDate, cb) {
        const queryString =
            `?accountID=${accountID}`
            + `&dateStart=${startDate.toISOString()}`
            + `&dateEnd=${endDate.toISOString()}`
            + `&type=03`;

        request({
            method: "GET",
            endpoint: `/statements${queryString}`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

    static generateDownloadURL(userID, accountID, fileKey, cb) {
        request({
            method: "GET",
            endpoint: `/statements/${accountID}/${fileKey}`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data.url);
        }, err => cb && cb(err));
    }

    static getSupportedCountries(cb) {
        request({
            method: "GET",
            endpoint: `/countries`,
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

}
