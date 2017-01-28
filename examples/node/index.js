const drivewealth = require("../../lib/drivewealth.js");
const { User, Instrument, Account } = drivewealth;
// when installed via npm, the above line would be simply:
// const drivewealth = require("drivewealth");

drivewealth.setup({
    env: drivewealth.ENVIRONMENTS.UAT,
    httpImpl: require("../../lib/httpImpls/request.js"),
    appTypeID: "2000",
    appVersion: "1.0",
});

User.login("e75", "eeeeeee75", (err, user) => {
    console.log(`Welcome Mr. ${user.lastName}`);

    user.getAccounts((err, accounts) => {
        accounts[0].getBlotter(Account.BLOTTER_TYPES.CASH, (err, cash) => {
            console.log(`Nice, you have $${cash.cashAvailableForTrade} of buying power.`);

            Instrument.getBySymbol("AAPL", (err, instrument) => {
                console.log(`${instrument.name} closed yesterday at ${instrument.priorClose}`);
            });

            Instrument.getAll((err, instruments) => {
                console.log(`There are ${instruments.length} total instruments.`);
            });

            Instrument.search({ symbol: "AA" }, (err, instruments) => {
                console.log(`There are ${instruments.length} instruments with "AA" in their symbol.`);
            });
        });
    });
});
