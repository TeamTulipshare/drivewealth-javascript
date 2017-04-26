import request from "./request";
import Sessions from "./Sessions";
import Order from "./Order";
import Funding from "./Funding";
import Reports from "./Reports";

export default class Account {

    constructor(data) {
        for (let key of [
            "accountID",
            "userID",
            "accountNo",
            "accountType",
            "currencyID",
            "ibID",
            "margin",
            "nickname",
            "openedWhen",
            "patternDayTrades",
            "status",
            "tradingType",
            "accountMgmtType",
        ]) {
            this[key] = data[key];
        }
    }

    getBlotter(type, cb) {
        if (type && !cb) {
            cb = type;
            type = null;
        }

        request({
            method: "GET",
            endpoint: `/users/${this.userID}/accountSummary/${this.accountID}${type ? '/' + type : ""}`,
            sessionKey: Sessions.get(this.userID)
        }, (data) => {
            cb && cb(null, type ? data[type] : data);
        }, err => cb && cb(err));
    }

    // getPerformance(startDate, endDate, cb)
    // getPerformance(period, cb)
    // getPerformance(cb)
    getPerformance() {
        let queryString = "";
        let cb;
        if (arguments.length === 3) {
            cb = arguments[2];
            const [ startDate, endDate ] = arguments;
            queryString += "/dateRange?";
            queryString += `startDate=${startDate.getFullYear()}${startDate.getMonth() + 1}${startDate.getDate()}`;
            queryString +=  `&endDate=${startDate.getFullYear()}${startDate.getMonth() + 1}${startDate.getDate()}`;
        } else if (arguments.length === 2) {
            cb = arguments[1];
            queryString += `/history?period=${arguments[0]}`;
        } else {
            cb = arguments[0];
        }

        request({
            method: "GET",
            endpoint: `/users/${this.userID}/accountPerformance/${this.accountID}${queryString}`,
            sessionKey: Sessions.get(this.userID)
        }, (data) => {
            cb && cb(null, data.performance);
        }, err => cb && cb(err));
    }

    placeOrder(type, data, cb) {
        const parentDetails = {
            accountID: this.accountID,
            accountNo: this.accountNo,
            accountType: this.accountType,
            userID: this.userID,
        };

        return Order.create(type, parentDetails, data, cb);
    }

    getFundingMethods(data = {}, cb) {
        data.userID = this.userID;
        data.accountID = this.accountID;
        return Funding.getFundingMethods(data, cb);
    }

    getTransactions(startDate, endDate, cb) {
        return Reports.getTransactions(this.userID, this.accountNo, startDate, endDate, cb);
    }

    getPlacedOrders(startDate, endDate, cb) {
        return Reports.getPlacedOrders(this.userID, this.accountNo, startDate, endDate, cb);
    }

    getStatements(startDate, endDate, cb) {
        return Reports.getStatements(this.userID, this.accountID, startDate, endDate, cb);
    }

    getTaxDocuments(startDate, endDate, cb) {
        return Reports.getTaxDocuments(this.userID, this.accountID, startDate, endDate, cb);
    }

    getTradeConfirms(startDate, endDate, cb) {
        return Reports.getTradeConfirms(this.userID, this.accountID, startDate, endDate, cb);
    }

    generateDownloadURL(fileKey, cb) {
        return Reports.generateDownloadURL(this.userID, this.accountID, fileKey, cb);
    }

    static get BLOTTER_TYPES() { return {
        CASH: "cash",
        ORDERS: "orders",
        TRANSACTIONS: "transactions",
        POSITIONS: "positions",
        ALL: null,
    } };

    static get STATUSES() { return {
        PENDING: 1,
        OPEN: 2,
        OPEN_NO_NEW_TRADES: 3,
        CLOSED: 9,
    } };

    static get TYPES() { return {
        PRACTICE: 1,
        LIVE: 2,
    } };

    static getListForUserID(userID, cb) {
        request({
            method: "GET",
            endpoint: `/users/${userID}/accounts`,
            sessionKey: Sessions.get(userID)
        }, (data) => {
            cb && cb(null, data.map(account => new Account(account)));
        }, err => cb && cb(err));
    }

    static create(userID, type, data, cb) {
        if (type === Account.TYPES.PRACTICE) {
            data = {
                userID,
                responseType: "full",
                tranAmount: data,
            };
        }

        request({
            method: "POST",
            endpoint: type === Account.TYPES.PRACTICE
                ? `/signups/practice`
                : `/signups/live`,
            sessionKey: Sessions.get(userID),
            body: data,
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

}
