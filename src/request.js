import { Config, HOSTS } from "./Config";
import { DriveWealthError, DriveWealthSessionError } from "./Error";

export default function request({
    method = "GET",
    endpoint,
    sessionKey,
    body,
    addlHeaders = {},
    host = HOSTS.API,
}, onSuccess, onError) {
    let headers = {
        Accept: "application/json"
    };
    if (method === "POST" || method === "PUT" || method === "PATCH") {
        headers["Content-Type"] = "application/json";
    }
    if (sessionKey) {
        headers["x-mysolomeo-session-key"] = sessionKey;
    }
    for (let header in addlHeaders) {
        headers[header] = addlHeaders[header];
    }

    endpoint = Config.env[host] + endpoint;

    if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);

    Config.httpImpl(method, endpoint, headers, body, (statusCode, resHeaders, resBody) => {
        const contentType = resHeaders["Content-Type"] || resHeaders["content-type"] || "";
        if (resBody && contentType.indexOf("application/json") !== -1) {
            resBody = JSON.parse(resBody);
        }

        if (String(statusCode)[0] === "2" || String(statusCode)[0] === "3") {
            onSuccess(resBody, statusCode, resHeaders);
        } else {
            let error, errorMessage;
            if (resBody) {
                errorMessage = resBody.message || JSON.stringify(resBody);
            }
            error = statusCode == 401 ? new DriveWealthSessionError(errorMessage) : new DriveWealthError(errorMessage);
            onError(error, resBody, statusCode, resHeaders);
        }
    });
}
