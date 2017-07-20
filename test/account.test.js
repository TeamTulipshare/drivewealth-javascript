import P from "bluebird";

const Account = P.promisifyAll(require("../lib/drivewealth").Account);

let account, user;

beforeAll(async () => {

	user = await require("./setup").default;

	const accounts = await user.getAccountsAsync();

	account = P.promisifyAll(accounts[0]);
});

test("return the blotter", async () => {

	const blotter = await account.getBlotterAsync();

	expect(blotter).toHaveProperty("cash");
	expect(blotter).toHaveProperty("equity");
	expect(blotter).toHaveProperty("transactions");
});

test("should return the cash section of the blotter", async () => {
	expect(
		await account.getBlotterAsync(Account.BLOTTER_TYPES.CASH)
	).toHaveProperty("cashAvailableForTrade");
});

test("should return formatted order objects", async () => {

	const orders = await account.getBlotterAsync(Account.BLOTTER_TYPES.ORDERS);

	expect(Array.isArray(orders)).toBeTruthy();

	if (orders.length > 0) {

		const [order] = orders;

		expect(order).toHaveProperty("price");
		expect(order).toHaveProperty("type");
	}
});

describe("subscriptions", () => {

	const planID = "drivewealth.subscription.quarterly";
	let paymentID;

	beforeAll(async () => {

		const { cardID } = await user.addCreditCardAsync("tok_visa");

		paymentID = cardID;
	});

	afterAll(async () => {

		const cards = await user.listCreditCardsAsync();

		cards.map(({ cardID }) => user.removeCreditCardAsync(cardID));
	});

	test.skip("add a subscription with an existing credit card", async () => {
		expect(await account.addSubscriptionAsync({ planID, paymentID })).toBeDefined();
	});

	test.skip("static add a subscription to an account", async () => {
		expect(
			await Account.addSubscriptionAsync({
				userID: user.userID,
				accountID: account.accountID,
				planID,
				paymentID,
			}),
		).toBeDefined();
	});
});
