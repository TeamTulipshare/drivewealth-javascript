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
    console.log(`Welcome Mr. ${user.lastName}`);

    user.getAccounts((err, accounts) => {
        accounts[0].getBlotter(drivewealth.Account.BLOTTER_TYPES.CASH, (err, cash) => {
            console.log(`Nice, you have $${cash.cashAvailableForTrade} of buying power.`);

            drivewealth.Instrument.getBySymbol("AAPL", (err, instrument) => {
                console.log(`${instrument.name} will probably perform well!`);
            });
        });
    });
});
