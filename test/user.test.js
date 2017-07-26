const User = require("../lib/drivewealth").User;

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

describe("Credit cards", () => {
	test("list all credit cards", async () => {
		expect(await user.listCreditCards()).toBeDefined();
	});

	test("static list all credit cards", async () => {
		expect(await User.listCreditCards(user.userID)).toBeDefined();
	});

	test("add and remove a credit card", async () => {
		const { cardID } = await user.addCreditCard("tok_visa");

		expect(cardID).toBeDefined();

		expect(await user.removeCreditCard(cardID)).toBeUndefined();
	});

	test("static add and remove a credit card", async () => {
		const { cardID } = await User.addCreditCard(user.userID, "tok_visa");

		expect(cardID).toBeDefined();

		expect(await User.removeCreditCard(user.userID, cardID)).toBeUndefined();
	});
});
