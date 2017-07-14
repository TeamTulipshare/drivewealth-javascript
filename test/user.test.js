const drivewealth = require("../lib/drivewealth");
const { User, Account } = drivewealth;

const { expect, assert } = require("chai");

describe("User", function () {
	
	let loggedInUser;
	const username = "timur";
	
	before(function (done) {
		
		drivewealth.setup({
			env: drivewealth.ENVIRONMENTS.UAT,
			httpImpl: require("../lib/httpImpls/request.js"),
			appTypeID: "2000",
			appVersion: "1.0",
		});
		
		User.login(username, "password123", function (err, user) {
			
			loggedInUser = user;
			
			done();
		});
	});
	
	it("should log in the correct user", function () {
		
		expect(loggedInUser.username).to.equal(username);
	});
	
	it("should have the required fields", function () {
		
		expect(loggedInUser).to.have.keys(
			"countryID",
			"emailAddress",
			"firstName",
			"languageID",
			"lastName",
			"phoneNumber",
			"referralCode",
			"userID",
			"username",
			"wlpID",
			"status",
			"usCitizen",
			"lastLoginWhen",
			"citizenship",
			"fullName",
			"addressLine1",
			"addressLine2",
			"city",
			"stateProvince",
			"zipPostalCode",
		);
	});
	
	it("should have a full name", function () {
		
		const fullName = loggedInUser.firstName + " " + loggedInUser.lastName;
		
		expect(loggedInUser.fullName).to.equal(fullName);
	});
	
	describe("Account", function () {
		
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
					
					if (orders.length > 0) {
						expect(orders[0]).to.include.keys("price", "type");
					}
					
					done();
				});
			});
		});
	});
});
