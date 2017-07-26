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

	test("add a new credit card", async () => {
		expect(await user.addCreditCard("tok_visa")).toBeDefined();
	});

	test("static add a new credit card", async () => {
		expect(
			await User.addCreditCard(user.userID, "tok_visa"),
		).toBeDefined();
	});

	test("remove a credit card", () =>
		user.listCreditCards()
			.then(cards => user.removeCreditCard(cards[0].cardID)),
	);

	test("static remove a credit card", () =>
		User.listCreditCards(user.userID)
			.then(cards => User.removeCreditCard(user.userID, cards[0].cardID)),
	);
});
