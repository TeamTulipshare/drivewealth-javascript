import { User } from "../lib/drivewealth";

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

describe("Credit cards", () => {
	test("get a user's credit cards", async () => {
		expect(await user.getCreditCards()).toBeDefined();
	});

	test("static get credit cards", async () => {
		expect(await User.getCreditCards(user.userID)).toBeDefined();
	});

	test("add and remove a user's credit card", async () => {
		const { cardID } = await user.addCreditCard("tok_visa");

		expect(cardID).toBeDefined();

		expect(await user.removeCreditCard(cardID)).toBeUndefined();
	});

	test("static add and remove credit card", async () => {
		const { cardID } = await User.addCreditCard(user.userID, "tok_visa");

		expect(cardID).toBeDefined();

		expect(await User.removeCreditCard(user.userID, cardID)).toBeUndefined();
	});

	test("credit cards list should be empty", async () => {
		expect(await user.getCreditCards()).toBe(expect.arrayContaining([]));
	})
});
