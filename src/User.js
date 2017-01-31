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

    // getSettings(key, cb)
    // getSettings(cb)
    getSettings() {
        if (arguments.length === 1) {
            this.getAllSettings(arguments[0]);
        }
        let cb = arguments[1];

        request({
            method: "GET",
            endpoint: `/users/${this.userID}/settings/${arguments[0]}`,
            sessionKey: Sessions.get(this.userID)
        }, (data) => {
            cb && cb(null, data.value);
        }, err => cb && cb(err));
    }

    getAllSettings(cb) {
        request({
            method: "GET",
            endpoint: `/users/${this.userID}/settings`,
            sessionKey: Sessions.get(this.userID)
        }, (data) => {
            let formattedData = {};
            for (let setting of data) {
                formattedData[setting.key] = setting.value;
            }
            cb && cb(null, formattedData);
        }, err => cb && cb(err));
    }

    setSetting(key, value, cb) {
        request({
            method: "POST",
            endpoint: `/users/${this.userID}/settings`,
            sessionKey: Sessions.get(this.userID),
            body: {
                key, value
            }
        }, () => {
            cb && cb(null);
        }, err => cb && cb(err));
    }

    unsetSetting(key, cb) {
        request({
            method: "DELETE",
            endpoint: `/users/${this.userID}/settings/${key}`,
            sessionKey: Sessions.get(this.userID),
        }, () => {
            cb && cb(null);
        }, err => cb && cb(err));
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
