import { Order } from "../lib/drivewealth";

let user;
let account;

beforeAll(async () => {
	user = await require("./setup").default;

	[account] = await user.getAccounts();
});

describe("Create Order", () => {
	afterEach(async () => {
		const [acc] = await user.getAccounts();

		const [order] = acc.orders;

		if (order) {
			await Order.cancel(order.orderID);
		}
	});

	describe("Market", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.MARKET,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						amountCash: 500,
					},
				},
			)).toHaveProperty("createdWhen");
		});

		test("Sell", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.MARKET,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.SELL,
						amountCash: 100,
					},
				},
			)).toHaveProperty("createdWhen");
		});
	});

	describe("Limit", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.LIMIT,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						price: 100,
						qty: 1,
					},
				},
			)).toHaveProperty("createdWhen");
		});

		test("Sell", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.LIMIT,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.SELL,
						price: 100,
						qty: 1,
					},
				},
			)).toHaveProperty("createdWhen");
		});
	});

	describe("Stop", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.STOP,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						price: 200,
						qty: 1,
					},
				},
			)).toHaveProperty("createdWhen");
		});

		test("Buy error", () => {
			const { accountID, accountNo, accountType, userID } = account;

			return Order.create(
				Order.TYPES.STOP,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						price: 100,
						qty: 1,
					},
				},
			).catch(e => {
				expect(e).toBeDefined();
			});
		});

		test("Sell", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(await Order.create(
				Order.TYPES.STOP,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.SELL,
						price: 100,
						qty: 1,
					},
				},
			)).toHaveProperty("createdWhen");
		});
	});
});
