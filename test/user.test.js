import { User } from "../lib/drivewealth";

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

test("getAccounts", async () => {
	expect(Array.isArray(await user.getAccounts())).toBeTruthy();
});

describe("Settings", () => {
	const key = "watchList";

	beforeEach(() => user.setSetting(key, " "));

	test("getSettings", async () => {
		expect(await user.getSettings()).toBeDefined();
	});

	test("setSetting", async () => {
		expect(await user.setSetting(key, "value")).toBeUndefined();
	});

	test("unsetSetting", async () => {
		expect(await user.unsetSetting(key)).toBeUndefined();
	});

	test("Change a setting", async () => {
		const value = JSON.stringify(["AAPL", "GOOG"]);

		expect(await user.setSetting(key, value)).toBeUndefined();

		expect(await user.getSettings(key)).toBe(value);
	});

	test("Remove a setting", () => {
		expect.assertions(2);

		return user.unsetSetting(key)
		.then(res => {
			expect(res).toBeUndefined();
		})
		.then(() => user.getSettings(key))
		.catch(e => {
			expect(e).toBeDefined();
		});
	});
});

describe("Credit Cards", () => {
	let cardID;

	beforeAll(async () => {
		const [card] = await user.getCreditCards();

		cardID = card.cardID;
	});

	test("getCreditCards", async () => {
		expect(Array.isArray(
			await user.getCreditCards(),
		)).toBeTruthy();
	});

	test("addCreditCard", async () => {
		expect(await user.addCreditCard("tok_visa")).toBeDefined();
	});

	test("removeCreditCard", async () => {
		expect(await user.removeCreditCard(cardID)).toBeUndefined();
	});
});

