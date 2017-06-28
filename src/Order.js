import request from "./request";
import Sessions from "./Sessions";

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
        fillMaxRetries = 10,
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
            if (type !== Order.TYPES.MARKET || !waitForFill) return cb && cb(null, data.orderID);

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

}
