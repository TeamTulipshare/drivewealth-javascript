import request from "./request";
import { Config } from "./Config";
import Sessions from "./Sessions";
import Account from "./Account";

export default class User {

    constructor(data) {
        for (let key of [
            "countryID",
            "emailAddress",
            "firstName",
            "languageID",
            "lastName",
            "phoneNumber",
            "referralCode",
            "userID",
            "username",
            "wlpID",
            "status",
            "usCitizen",
            "lastLoginWhen",
            "citizenship",
        ]) {
            this[key] = data[key];
        }
    }

    getAccounts(cb) {
        Account.getListForUserID(this.userID, cb);
    }

    static getByUserID(userID, cb) {
        request({
            method: "GET",
            endpoint: `/users/${userID}`,
            sessionKey: Sessions.get(userID)
        }, (data) => {
            cb && cb(null, new User(data));
        }, err => cb && cb(err));
    }

    static login(username, password, cb) {
        request({
            method: "POST",
            endpoint: "/userSessions",
            body: {
                username,
                password,
                appTypeID: Config.appTypeID,
                appVersion: Config.appVersion,
                languageID: "en_US",
                osType: "unknown",
                osVersion: "unknown",
                scrRes: "unknown",
                ipAddress: "unknown"
            }
        }, (data) => {
            Sessions.save(data.userID, data.sessionKey);
            User.getByUserID(data.userID, (err, user) => {
                if (err) return cb && cb(err);
                cb && cb(null, user);
            });
        }, err => cb && cb(err));
    }

    static create({
        username,
        password,
        firstName,
        lastName,
        email,
        languageID,
        referralCode,
        utmCampaign,
        utmContent,
        utmMedium,
        utmSource,
        utmTerm,
    }, cb) {
        request({
            method: "POST",
            endpoint: "/signups/live",
            body: {
                username,
                password,
                firstName,
                lastName,
                emailAddress1: email,
                languageID,
                wlpID: Config.wlpID,
                referralCode,
                utmCampaign,
                utmContent,
                utmMedium,
                utmSource,
                utmTerm,
            },
        }, (data) => {
            return User.login(username, password, cb);
        }, err => cb && cb(err));
    }

}
