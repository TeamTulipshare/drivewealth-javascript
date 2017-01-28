export default function (method, endpoint, headers, body, cb) {
    fetch(endpoint, {
        endpoint: endpoint,
        headers: headers,
        body: body,
    })
    .then(response => {
        response.text().then(text => {
            cb(response.status, response.headers, text);
        });
    }, error => {
        // TODO:
    });
}
