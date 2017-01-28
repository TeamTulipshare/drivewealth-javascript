const drivewealth = require("../../lib/drivewealth.js");
// when installed via npm, the above line would be simply:
// const drivewealth = require("drivewealth");

drivewealth.setup({
    env: drivewealth.ENVIRONMENTS.UAT,
    httpImpl: require("../../lib/httpImpls/request.js"),
});

drivewealth.User.login("e75", "eeeeeee75")
