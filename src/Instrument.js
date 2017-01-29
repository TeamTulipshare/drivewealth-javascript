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
            "fundamentalDataModel",
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

    static search(criteria, cb) {
        let queryString = "?";
        if (criteria.symbol) queryString += `symbol=${criteria.symbol}&`;
        if (criteria.name) queryString += `name=${criteria.name}&`;

        request({
            method: "GET",
            endpoint: `/instruments${queryString}`,
            sessionKey: Sessions.getAny(),
        }, (data) => {
            cb && cb(null, data.map(ins => new Instrument(ins)));
        }, err => cb && cb(err));
    }

    static getQuote(symbol, cb) {
        let userPassedOneSymbol = false;
        if (!Array.isArray(symbol)) {
            userPassedOneSymbol = true;
            symbol = [symbol];
        }
        symbol = symbol.map(sym => {
            return sym instanceof Instrument ? sym.symbol : sym;
        });

        request({
            method: "GET",
            endpoint: `/quotes?symbols=${symbol.join(",")}`,
            sessionKey: Sessions.getAny(),
            addlHeaders: {
                "Accept": "text/plain"
            }
        }, (data) => {
            let obj = {};
            data = data.split("|").slice(10);
            for (let rawQuote of data) {
                const parsedQuote = rawQuote.split(",");
                obj[parsedQuote[0]] = {
                    bid: parsedQuote[1],
                    ask: parsedQuote[2],
                };
            }
            if (userPassedOneSymbol) obj = obj[symbol[0]];
            cb && cb(null, obj);
        }, err => cb && cb(err));
    }

}
