import { Order } from "../lib/drivewealth";

let user;
let account; // has ~800k+ bp
let account2; // has ~2k bp

beforeAll(async () => {
	user = await require("./setup").default;

	[account, account2] = await user.getAccounts();
});

describe("Create Order", () => {
	afterEach(async () => {
		const [acc1, acc2] = await user.getAccounts();

		const orders = [].concat(acc1.orders).concat(acc2.orders);

		await orders.map(order => Order.cancel(order.orderID));
	});

	describe("Market", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(
				await Order.create(
					Order.TYPES.MARKET,
					{ accountID, accountNo, accountType, userID },
					{
						order: {
							instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
							side: Order.SIDES.BUY,
							amountCash: 500,
						},
					},
				),
			).toHaveProperty("createdWhen");
		});

		test("Sell", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(
				await Order.create(
					Order.TYPES.MARKET,
					{ accountID, accountNo, accountType, userID },
					{
						order: {
							instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
							side: Order.SIDES.SELL,
							amountCash: 100,
						},
					},
				),
			).toHaveProperty("createdWhen");
		});

		test("Insufficient funds error", async () => {
			expect.assertions(1);

			const { accountID, accountNo, accountType, userID } = account2;

			return Order.create(
				Order.TYPES.MARKET,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						amountCash: 5000,
					},
				},
			).catch(e => {
				expect(e).toBeDefined();
			});
		});
	});

	describe("Limit", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(
				await Order.create(
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
				),
			).toHaveProperty("createdWhen");
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

		test("Insufficient funds error", () => {
			expect.assertions(1);

			const { accountID, accountNo, accountType, userID } = account2;

			return Order.create(
				Order.TYPES.LIMIT,
				{ accountID, accountNo, accountType, userID },
				{
					order: {
						instrument: "4312a85c-b50d-4adb-93ba-cc7973243a53",
						side: Order.SIDES.BUY,
						price: 5000,
						qty: 1,
					},
				},
			).catch(e => {
				expect(e).toBeDefined();
			});
		});
	});

	describe("Stop", () => {
		test("Buy", async () => {
			const { accountID, accountNo, accountType, userID } = account;

			expect(
				await Order.create(
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
				),
			).toHaveProperty("createdWhen");
		});

		test("Price too close to nbbo error", () => {
			expect.assertions(1);

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

			expect(
				await Order.create(
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
				),
			).toHaveProperty("createdWhen");
		});
	});
});
