import assert from "assert";
import { Account } from "../lib/drivewealth";

describe("Account", () => {
	let account;

	beforeAll(async () => {
		[account] = await user.getAccounts();
	});

	test("return the blotter", async () => {
		expect(Object.keys(
			await account.getBlotter(),
		)).toEqual(
			expect.arrayContaining([
				"cash",
				"equity",
				"transactions",
			]),
		);
	});

	test("should return the cash section of the blotter", async () => {
		expect(
			await account.getBlotter(Account.BLOTTER_TYPES.CASH),
		).toHaveProperty("cashAvailableForTrade");
	});

	test("should return formatted order objects", async () => {
		const orders = await account.getBlotter(Account.BLOTTER_TYPES.ORDERS);

		assert(Array.isArray(orders));

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

		afterAll(() => user.removeCreditCard(paymentID));

		test("get an account's subscription", async () => {
			expect(await account.getSubscription()).toBeDefined();
		});

		test.skip("add a subscription to an account", async () => {
			expect(await account.addSubscription({ planID, paymentID })).toBeDefined();
		});

		test("update subscription settings", async () => {
			expect(await account.updateSubscription({ planID, paymentID })).toBeDefined();
		});

		test("cancel a subscription", async () => {
			expect(await account.cancelSubscription()).toBeDefined();
		});
	});
});
