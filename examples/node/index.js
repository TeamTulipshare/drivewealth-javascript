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

User.login("e75", "eeeeeee75").then(user => {
	console.log(`Welcome Mr. ${user.lastName}`);

	user.getAccounts().then(accounts => {
		accounts[0].getBlotter(Account.BLOTTER_TYPES.CASH, (err, cash) => {
			console.log(`Nice, you have $${cash.cashAvailableForTrade} of buying power.`);
		});

		accounts[0].getPerformance("1w").then(performance => {
			const pl = performance[performance.length - 1].equity - performance[0].equity;
			console.log(`Your 1-week P/L is $${Math.round(pl * 100) / 100}`);
		});

		accounts[0].getFundingMethods({}).then(methods => {
			console.log(`There are ${methods.length} funding methods for you to choose from.`);
		});

		accounts[0].getTransactions(new Date(2010, 0, 1), new Date()).then(transactions => {
			console.log(`Your account has had ${transactions.length} transactions.`);
		});
	});

	Instrument.getBySymbol("AAPL").then(instrument => {
		console.log(`${instrument.name} closed yesterday at ${instrument.priorClose}`);

		instrument.getChartData(Instrument.CHART_COMPRESSIONS.HOUR, 10).then(chartData => {
			console.log(`There are ${chartData.length} data points for hourly bars for the last 10 trading days.`);
		});

		instrument.getQuote().then(quote => {
			console.log(`Current bid price for AAPL is $${quote.bid}.`);
		});
	});

	Instrument.search({ symbol: "AA" }).then(instruments => {
		console.log(`There are ${instruments.length} instruments with "AA" in their symbol.`);
	});
});
