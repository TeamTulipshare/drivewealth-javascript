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
			"addressLine1",
			"addressLine2",
			"city",
			"stateProvince",
			"zipPostalCode",
        ]) {
            this[key] = data[key];
        }
        
        this.fullName = data.firstName + " " + data.lastName;
	}

    getAccounts(cb) {
        return Account.getListForUserID(this.userID, cb);
    }

	uploadDocument(file, type, cb) {
        return User.uploadDocument(this.userID, file, type, cb);
    }

    // getSettings(userID, cb)
    // getSettings(userID, key, cb)
	static getSettings(userID, key, cb) {
    	if (!cb) {
			// callback becomes second arg when it's undefined
			_getAllSettings(userID, key);
		} else {
			_getSettings(userID, key, cb)
		}
    }

	// getSettings(key, cb)
	// getSettings(cb)
    getSettings() {
    	const [ key, cb ] = arguments;

		if (arguments.length === 1) {
			// callback becomes second arg when it's undefined
			_getAllSettings(this.userID, key);
		} else {
			_getSettings(this.userID, key, cb);
		}
	}

	static setSetting(userID, key, value, cb) {
    	_setSetting(userID, key, value, cb);
	}

    setSetting(key, value, cb) {
    	_setSetting(this.userID, key, value, cb);
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

    getStatus(cb) {
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
	}, cb) {
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
		}, data => {
			cb && cb(null, data);
		}, err => cb && cb(err));
	}

	static get DOCUMENT_TYPES() { return {
        PHOTO_ID: "Picture ID",
		PROOF_OF_ADDRESS: "Proof of address",
		PHOTO_ID_WITH_PROOF_OF_ADDRESS: "Picture ID_Proof of address",
    } }

	static uploadDocument(userID, file, type, cb) {
		const body = new FormData();
		body.append("token", userID);
		body.append("documentType", type);
		body.append("documentImage", file);

		return request({
			method: "POST",
			endpoint: `/documents`,
			sessionKey: Sessions.get(userID),
			addlHeaders: {
				"Content-Type": "multipart/form-data",
			},
			body,
		}, data => {
			cb && cb(null, data);
		}, err => cb && cb(err));
	}
	
	listCreditCards(cb) {
    	return _listCreditCards(this.userID, cb);
	}
	
	static listCreditCards(userID, cb) {
    	return _listCreditCards(userID, cb);
	}
	
	addCreditCard(cardToken, cb) {
		return _addCreditCard(this.userID, cardToken, cb);
	}
	
	static addCreditCard(userID, cardToken, cb) {
		return _addCreditCard(userID, cardToken, cb);
	}
	
	removeCreditCard(cardID, cb) {
 		return _removeCreditCard(this.userID, cardID, cb);
	}
	
	static removeCreditCard(userID, cardID, cb) {
		return _removeCreditCard(userID, cardID, cb);
	}
}

function _listCreditCards(userID, cb) {
	return request({
		method: "GET",
		endpoint: `/users/${userID}/credit-cards`,
		sessionKey: Sessions.get(userID)
	}, data => {
		cb && cb(null, data);
	}, err => cb && cb(err));
}

function _addCreditCard(userID, cardToken, cb) {
	return request({
		method: "POST",
		endpoint: `/users/${userID}/credit-cards`,
		sessionKey: Sessions.get(userID),
		body: { cardToken }
	}, data => {
		cb && cb(null, data);
	}, err => cb && cb(err));
}

function _removeCreditCard(userID, cardID, cb) {
	return request({
		method: "DELETE",
		endpoint: `/users/${userID}/credit-cards/${cardID}`,
		sessionKey: Sessions.get(userID)
	}, data => {
		cb && cb(null, data);
	}, err => cb && cb(err));
}

function _getSettings (userID, key, cb) {
	request({
		method: "GET",
		endpoint: `/users/${userID}/settings/${key}`,
		sessionKey: Sessions.get(userID),
	}, (data) => {
		cb && cb(null, data.value);
	}, err => cb && cb(err));
}

function _getAllSettings (userID, cb) {
	request({
		method: "GET",
		endpoint: `/users/${userID}/settings`,
		sessionKey: Sessions.get(userID),
	}, (data) => {
		let formattedData = {};
		for (let setting of data) {
			formattedData[setting.key] = setting.value;
		}
		cb && cb(null, formattedData);
	}, err => cb && cb(err));
}

function _setSetting (userID, key, value, cb) {
	request({
		method: "POST",
		endpoint: `/users/${userID}/settings`,
		sessionKey: Sessions.get(userID),
		body: {
			key, value,
		},
	}, () => {
		cb && cb(null);
	}, err => cb && cb(err));
}
