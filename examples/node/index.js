const drivewealth = require("../../lib/drivewealth.js");
// when installed via npm, the above line would be simply:
// const drivewealth = require("drivewealth");

drivewealth.setup({
    env: drivewealth.ENVIRONMENTS.UAT,
    httpImpl: require("../../lib/httpImpls/request.js"),
    appTypeID: "2000",
    appVersion: "1.0",
});

drivewealth.User.login("e75", "eeeeeee75", (err, user) => {
    console.log(user);

    user.getAccounts((err, accounts) => {
        console.log(accounts);
    });
});
