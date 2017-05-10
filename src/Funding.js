import request from "./request";
import Sessions from "./Sessions";
import { Config, HOSTS } from "./Config";

export default class Funding {

    static get ALLOWED_TYPES() { return {
        DEPOSIT: "DEPOSIT",
        WITHDRAW: "WITHDRAW",
        DEPOSIT_AND_WITHDRAW: "DEPOSIT_AND_WITHDRAW",
    } }

    static getFundingMethods({
        userID,
        accountID,
        language,
        minAmount,
        maxAmount,
        amount,
        filters = {},
    } = {}, cb) {
        if (amount && (minAmount || maxAmount)) throw new Error(`"amount" is not compatible with "minAmount" or "maxAmount."`);

        let queryString = `partner=${Config.appsPartnerID}&userID=${userID}&accountID=${accountID}`;
        if (language) queryString += `&language=${language}`;
        if (minAmount) queryString += `&minAmount=${minAmount}`;
        if (maxAmount) queryString += `&maxAmount=${maxAmount}`;
        if (amount) queryString += `&amount=${amount}`;
        if (filters.name) queryString += `&filter[name]=${filters.name}`;
        if (filters.country) queryString += `&filter[country]=${filters.country}`;
        if (filters.currency) queryString += `&filter[currency]=${filters.currency}`;
        if (filters.allowed) queryString += `&filter[allowed]=${filters.allowed}`;

        request({
            method: "GET",
            host: HOSTS.APPS,
            endpoint: `/funding/methods?${queryString}`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

    static getPastDeposits(userID, cb) {
        request({
            endpoint: `/funding/status`,
            sessionKey: Sessions.get(userID),
        }, (data) => {
            cb && cb(null, data.data);
        }, err => cb && cb(err));
    }

}
