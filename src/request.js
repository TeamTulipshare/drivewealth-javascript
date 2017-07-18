import { Config, HOSTS } from "./Config";
import { DriveWealthError, DriveWealthSessionError } from "./Error";

/**
 * @function request
 * @description Normally, it is unnecessary to use this function and this is for internal use only. Call request() if you need to make a custom API call that is not covered by another function.
 * @param {object} options
 * @param {string} options.method
 * @param {string} options.endpoint
 * @param {string} options.sessionKey
 * @param {string} options.body
 * @param {Object.<string, string>} options.addlHeaders
 * @param {string} options.host - One of Config.HOSTS
 * @returns {Promise.<{body: string, statusCode: number, headers: Object<string, string>}>}
 */
export default function request({
	method = "GET",
	endpoint,
	sessionKey,
	body,
	addlHeaders = {},
	host = HOSTS.API,
}) {
	const headers = {
		Accept: "application/json",
	};
	if (method === "POST" || method === "PUT" || method === "PATCH") {
		headers["Content-Type"] = "application/json";
	}
	if (sessionKey) {
		headers["x-mysolomeo-session-key"] = sessionKey;
	}
	for (const header in addlHeaders) {
		headers[header] = addlHeaders[header];
	}

	endpoint = Config.env[host] + endpoint;

	if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);

	return new Promise((resolve, reject) => {
		Config.httpImpl(method, endpoint, headers, body, (statusCode, resHeaders, resBody) => {
			const contentType = resHeaders["Content-Type"] || resHeaders["content-type"] || "";
			if (resBody && contentType.indexOf("application/json") !== -1) {
				try {
					resBody = JSON.parse(resBody);
				} catch (err) {
					// resBody will remain as is
				}
			}

			if (String(statusCode)[0] === "2" || String(statusCode)[0] === "3") {
				resolve({
					body: resBody,
					statusCode,
					headers: resHeaders,
				});
			} else {
				let errorMessage;
				if (resBody) {
					errorMessage = resBody.message || JSON.stringify(resBody);
				}
				const error = statusCode === 401
					? new DriveWealthSessionError(errorMessage, resBody, statusCode, resHeaders)
					: new DriveWealthError(errorMessage, resBody, statusCode, resHeaders);
				reject(error);
			}
		});
	});
}
