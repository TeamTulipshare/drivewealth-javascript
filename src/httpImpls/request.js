const request = require("request");

module.exports = function (method, endpoint, headers, body, cb) {
    request({
        method: method,
        uri: endpoint,
        headers: headers,
        body: body,
    }, function (error, response, body) {
        cb(response ? response.statusCode : -1, response ? response.headers : {}, body || error);
    });
}
