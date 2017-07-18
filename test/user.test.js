import P from "bluebird";
import { assert } from "chai";

import drivewealth from "../lib/drivewealth";
const { User, Account } = P.promisifyAll(drivewealth);

const SECONDS = 1000;
window.jasmine.DEFAULT_TIMEOUT_INTERVAL = SECONDS * 1000;

let user;

beforeAll(() => {
	
	drivewealth.setup({
		env: drivewealth.ENVIRONMENTS.UAT,
		httpImpl: require("../lib/httpImpls/request.js"),
		appTypeID: "2000",
		appVersion: "1.0",
	});
	
	return User.loginAsync("timurt", "passw0rd")
	.then(loggedInUser => {
		
		expect(loggedInUser).toHaveProperty("userID");
		
		user = loggedInUser;
	})
	.catch(expectNull);
});

// remove .skip and increase the DEFAULT_TIMEOUT_INTERVAL to test
describe.skip("Credit cards", () => {
	
	test("should list all credit cards (static)", () => {
		
		return User.listCreditCardsAsync(user.userID)
		.then(creditCards => {
			assert(Array.isArray(creditCards));
		})
		.catch(expectNull);
	});
	
	test("should add a new credit card", () => {
		
		return user.addCreditCardAsync("tok_visa")
		.catch(expectNull);
	});
	
	test("should add a new credit card (static)", () => {
		
		return User.addCreditCardAsync(user.userID, "tok_visa")
		.catch(expectNull);
	});
	
	test("should remove a credit card", () => {
		
		return User.listCreditCardsAsync()
		.then(creditCards => User.removeCreditCardAsync(creditCards[0].cardID))
		.catch(expectNull);
	});
});

describe("Account", () => {
	
	let account;
	
	beforeAll(() => {
		
		return user.getAccountsAsync()
		.then(accounts => {
			
			assert(Array.isArray(accounts));
			
			account = accounts[0];
		})
		.catch(expectNull);
	});
	
	test("should return the blotter", () => {
		
		return account.getBlotterAsync()
		.then(blotter => {
			
			expect(blotter).toHaveProperty("accountID");
			expect(blotter).toHaveProperty("accountNo");
			expect(blotter).toHaveProperty("cash");
			expect(blotter).toHaveProperty("equity");
			expect(blotter).toHaveProperty("transactions");
		})
		.catch(expectNull);
	});
	
	test("should return the cash section of the blotter", () => {
		
		return account.getBlotterAsync(Account.BLOTTER_TYPES.CASH)
		.then(cash => {
			expect(cash).toHaveProperty("cashAvailableForTrade");
		})
		.catch(expectNull);
	});
	
	test("should return formatted order objects", () => {
		
		return account.getBlotterAsync(Account.BLOTTER_TYPES.ORDERS)
		.then(orders => {
			
			assert(Array.isArray(orders));
			
			if (orders.length > 0) {
				
				const order = orders[0];
				
				expect(order).toHaveProperty("price");
				expect(order).toHaveProperty("type");
			}
		})
		.catch(expectNull);
	});
});

const expectNull = err => {
	expect(err).toBeNull();
};
