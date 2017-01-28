import request from "./request";
import Sessions from "./Sessions";

export default class Instrument {

    constructor(data) {
        for (let key of [
            "instrumentID",
            "name",
            "exchangeID",
            "instrumentTypeID",
            "orderSizeMax",
            "orderSizeMin",
            "orderSizeStep",
            "rateAsk",
            "rateBid",
            "ratePrecision",
            "symbol",
            "tradeStatus",
            "urlImage",
            "urlInvestor",
            "chaikinPgr",
            "priorClose",
            "marketState",
        ]) {
            this[key] = data[key];
        }
    }

    static get TRADE_STATUSES() { return {
        INACTIVE: "0",
        ACTIVE: "1",
        CLOSED: "2"
    } }

    static getBySymbol(symbol, cb) {
        let symbols = symbol;
        if (typeof symbol === "string") symbols = [symbol];

        request({
            method: "GET",
            endpoint: `/instruments?symbol=${symbols.join(',')}`,
            sessionKey: Sessions.getAny(),
        }, (data) => {
            data = data.map(ins => new Instrument(ins));
            cb && cb(null, typeof symbol === "string" ? data[0] : data);
        }, err => cb && cb(err));
    }

    static getByID(id, includeFundamentals = true, cb) {
        request({
            method: "GET",
            endpoint: `/instruments/${id}${includeFundamentals ? '?options=F' : ''}`,
            sessionKey: Sessions.getAny(),
        }, (data) => {
            cb && cb(null, new Instrument(data));
        }, err => cb && cb(err));
    }

    static getAll(tradeStatus, cb) {
        if (!cb) {
            cb = tradeStatus;
            tradeStatus = "-1";
        }

        request({
            method: "GET",
            endpoint: `/instruments?tradeStatus=${tradeStatus}`,
            sessionKey: Sessions.getAny(),
        }, (data) => {
            cb && cb(null, data.map(ins => new Instrument(ins)));
        }, err => cb && cb(err));
    }

}
