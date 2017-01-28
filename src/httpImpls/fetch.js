export default function (method, endpoint, headers, body, cb) {
    fetch(endpoint, {
        method: method,
        headers: headers,
        body: body,
    })
    .then(response => {
        response.text().then(text => {
            let resHeaders = {};
            for (let pair of response.headers.entries()) {
                resHeaders[pair[0]] = pair[1];
            }
            cb(response.status, resHeaders, text);
        });
    }, error => {
        cb(-1, {}, error.toString());
    });
}
