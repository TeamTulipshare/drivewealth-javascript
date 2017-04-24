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

    getStatus() {
        request({
            method: "GET",
            endpoint: `/users/${this.userID}/status`,
            sessionKey: Sessions.get(this.userID)
        }, (data) => {
            cb && cb(null, data);
        }, err => cb && cb(err));
    }

    logout() {
        request({
            method: "DELETE",
            endpoint: `/userSessions/${Sessions.get(this.userID)}`,
            sessionKey: Sessions.get(this.userID),
        }, () => {
            Sessions.remove(this.userID);
            cb && cb(null);
        }, err => cb && cb(err));
    }

    static get STATUSES() { return {
        PENDING: 1,
        APPROVED: 2,
        REJECTED: 3,
        REVOKED: 4,
        CLOSED: 5,
    } }

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

    static isUsernameAvailable(username, cb) {
        request({
            method: "GET",
            endpoint: `/users?username=${username}`,
        }, () => {
            cb && cb(null, false);
        }, (err, statusCode) => {
            if (statusCode === 404) return cb && cb(null, true);
            cb && cb(err);
        });
    }

    static create({
        username,
        password,
        firstName,
        lastName,
        email,
        languageID,
        referralCode = Config.referralCode,
        utmCampaign,
        utmContent,
        utmMedium,
        utmSource,
        utmTerm,
    }, loginAutomatically = true, cb) {
        if (!cb) {
            cb = loginAutomatically;
            loginAutomatically = true;
        }

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
            if (loginAutomatically) {
                return User.login(username, password, cb);
            } else {
                cb && cb(null, data);
            }
        }, err => cb && cb(err));
    }

	static update({
		userID,
		addressLine1,
		addressLine2,
		city,
		countryID,
		email,
		firstName,
		lastName,
		languageID,
		phoneHome,
		phoneWork,
		phone,
		stateProvince,
		zipPostalCode
	}) {
		return request({
			method: "PUT",
			endpoint: `/users/${userID}`,
			sessionKey: Sessions.get(userID),
			body: {
				addressLine1,
				addressLine2,
				city,
				countryID,
				emailAddress1: email,
				firstName,
				lastName,
				languageID,
				phoneHome,
				phoneWork,
				phoneMobile: phone,
				stateProvince,
				zipPostalCode
			},
		});
	}
}
