import { User } from "../lib/drivewealth";

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

describe("Credit cards", () => {
	describe("instance", () => {
		test("get", async () => {
			expect(await user.getCreditCards()).toBeDefined();
		});

		test("add", async () => {
			expect(await user.addCreditCard("tok_visa")).toHaveProperty("cardID");
		});

		test("remove", async () => {
			const [card] = await user.getCreditCards();

			expect(await user.removeCreditCard(card.cardID)).toBeUndefined();
		});

		test("credit cards were removed", async () => {
			expect(await user.getCreditCards()).toEqual([]);
		});
	});

	describe("static", () => {
		test("get", async () => {
			expect(await User.getCreditCards(user.userID)).toBeDefined();
		});

		test("add", async () => {
			expect(await User.addCreditCard(user.userID, "tok_visa")).toHaveProperty("cardID");
		});

		test("remove", async () => {
			const [card] = await User.getCreditCards(user.userID);

			expect(await User.removeCreditCard(user.userID, card.cardID)).toBeUndefined();
		});

		test("credit cards were removed", async () => {
			expect(await User.getCreditCards(user.userID)).toEqual([]);
		});
	});
});
