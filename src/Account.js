import request from "./request";
import Sessions from "./Sessions";

export default class Account {

    constructor(data) {
        for (let key of [
            "accountID",
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
