const Account = require("../lib/drivewealth").Account;

let account;
let user;

beforeAll(async () => {
	user = await require("./setup").default;

	const accounts = await user.getAccounts();

	account = accounts[0];
});

test("return the blotter", async () => {
	const blotter = await account.getBlotter();

	expect(blotter).toHaveProperty("cash");
	expect(blotter).toHaveProperty("equity");
	expect(blotter).toHaveProperty("transactions");
});

test("should return the cash section of the blotter", async () => {
	expect(
		await account.getBlotter(Account.BLOTTER_TYPES.CASH),
	).toHaveProperty("cashAvailableForTrade");
});

test("should return formatted order objects", async () => {
	const orders = await account.getBlotter(Account.BLOTTER_TYPES.ORDERS);

	expect(Array.isArray(orders)).toBeTruthy();

	if (orders.length > 0) {
		const [order] = orders;
		expect(order).toHaveProperty("type");
	}
});

describe("subscriptions", () => {
	const planID = "drivewealth.subscription.quarterly";
	let paymentID;

	beforeAll(async () => {
		const { cardID } = await user.addCreditCard("tok_visa");

		paymentID = cardID;
	});

	afterAll(async () => {
		const cards = await user.listCreditCards();

		cards.map(({ cardID }) => user.removeCreditCard(cardID));
	});

	test("get an account's subscription", async () => {
		expect(
			await account.getSubscription(),
		).toBeDefined();
	});

	test("static get an account's subscription", async () => {
		expect(
			await Account.getSubscription({
				userID: user.userID,
				accountID: account.accountID,
			}),
		).toBeDefined();
	});

	test.skip("add a subscription to an account", async () => {
		expect(
			await account.addSubscription({
				planID,
				paymentID,
			}),
		).toBeDefined();
	});

	test.skip("static add a subscription to an account", async () => {
		expect(
			await Account.addSubscription({
				userID: user.userID,
				accountID: account.accountID,
				planID,
				paymentID,
			}),
		).toBeDefined();
	});

	test("update subscription settings", async () => {
		expect(
			await account.updateSubscription({ planID, paymentID }),
		).toBeDefined();
	});

	test("static update subscription settings", async () => {
		expect(
			await Account.updateSubscription({
				userID: user.userID,
				accountID: account.accountID,
				planID,
				paymentID,
			}),
		).toBeDefined();
	});

	test("cancel a subscription", async () => {
		expect(await account.cancelSubscription()).toBeDefined();
	});

	test("static cancel a subscription", async () => {
		expect(
			await Account.cancelSubscription({
				userID: user.userID,
				accountID: account.accountID,
			}),
		).toBeDefined();
	});
});
