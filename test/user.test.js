const drivewealth = require("../lib/drivewealth");
const { User, Account } = drivewealth;

const { expect, assert } = require("chai");

describe("User", function () {

	before(function () {

		drivewealth.setup({
			env: drivewealth.ENVIRONMENTS.UAT,
			httpImpl: require("../lib/httpImpls/request.js"),
			appTypeID: "2000",
			appVersion: "1.0",
		});
	});

	it("should log in the correct user", function (done) {

		const username = "timur";

		User.login(username, "password123", function (err, user) {

			expect(err).to.equal(null);
			expect(user.username).to.equal(username);
			done();
		});
	});

	describe("Account", function () {

		let loggedInUser;

		before(function (done) {

			User.login("timur", "password123", function (err, user) {

				loggedInUser = user;
				done();
			});
		});

		it("should return an array of accounts", function (done) {

			loggedInUser.getAccounts(function (err, accounts) {

				expect(err).to.equal(null);
				assert(Array.isArray(accounts));
				done();
			});
		});

		describe("Blotter", function () {

			let selectedAccount;

			before(function (done) {

				loggedInUser.getAccounts(function (err, accounts) {

					selectedAccount = accounts[0];
					done();
				});
			});

			it("should return the blotter", function (done) {

				selectedAccount.getBlotter(function (err, blotter) {

					expect(err).to.equal(null);

					expect(blotter).to.have.keys(
						"accountID",
						"accountNo",
						"cash",
						"equity",
						"lastUpdated",
						"margin",
						"orders",
						"tradingType",
						"transactions",
					);

					done();
				});
			});

			it("should return the cash section of the blotter", function (done) {

				selectedAccount.getBlotter(Account.BLOTTER_TYPES.CASH, function (err, cash) {

					expect(err).to.equal(null);

					expect(cash).to.include.keys("cashAvailableForTrade");

					done();
				});
			});

			it("should return formatted order objects", function (done) {

				selectedAccount.getBlotter(Account.BLOTTER_TYPES.ORDERS, function (err, orders) {

					expect(err).to.equal(null);

					assert(Array.isArray(orders));

					expect(orders[0]).to.include.keys("price", "type");

					done();
				});
			});
		});
	});
});
