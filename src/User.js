import request from "./request";

export default class User {

    static login(username, password, {
        appTypeID = "2000",
        appVersion = "0.0",
    } = {}) {
        request({
            method: "POST",
            endpoint: "/userSessions",
            body: {
                username,
                password,
                appTypeID,
                appVersion,
                languageID: "en_US",
                osType: "unknown",
                osVersion: "unknown",
                scrRes: "unknown",
                ipAddress: "unknown"
            }
        }, (data) => {
            console.log(data);
        }, (err) => {
            console.log(err);
        })
    }

}
