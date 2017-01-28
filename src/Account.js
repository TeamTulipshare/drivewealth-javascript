import request from "./request";
import Sessions from "./Sessions";

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

    static get BLOTTER_TYPES() { return {
        CASH: "cash",
        ORDERS: "orders",
        TRANSACTIONS: "transactions",
        POSITIONS: "positions",
        ALL: null,
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

}
