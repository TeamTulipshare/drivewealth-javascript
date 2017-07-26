import P from "bluebird";

const User = P.promisifyAll(require("../lib/drivewealth").User);

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

describe("Credit cards", () => {

	test("list all credit cards", async () => {
		expect(await user.listCreditCardsAsync()).toBeDefined();
	});

	test("static list all credit cards", async () => {
		expect(await User.listCreditCardsAsync(user.userID)).toBeDefined();
	});

	test("add a new credit card", async () => {
		expect(await user.addCreditCardAsync("tok_visa")).toBeDefined();
	});

	test("static add a new credit card", async () => {
		expect(
			await User.addCreditCardAsync(user.userID, "tok_visa"),
		).toBeDefined();
	});

	test("remove a credit card", () => {
		return user.listCreditCardsAsync()
		.then(cards => user.removeCreditCardAsync(cards[0].cardID));
	});

	test("static remove a credit card", () => {
		return User.listCreditCardsAsync(user.userID)
		.then(cards => User.removeCreditCardAsync(user.userID, cards[0].cardID));
	});
});
