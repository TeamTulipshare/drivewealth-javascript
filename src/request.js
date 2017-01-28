import { Config } from "./Config";

export default function request({
    method = "GET",
    endpoint,
    sessionKey,
    body,
    addlHeaders = {},
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

    endpoint = Config.env + endpoint;

    if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);

    Config.httpImpl(method, endpoint, headers, body, (statusCode, resHeaders, resBody) => {
        if (resHeaders["Content-Type"] === "application/json" && resBody) {
            resBody = JSON.parse(resBody);
        }

        if (String(statusCode)[0] === "2" || String(statusCode)[0] === "3") {
            onSuccess(resBody, resHeaders);
        } else {
            onError(resBody, resHeaders);
        }
    });
}
