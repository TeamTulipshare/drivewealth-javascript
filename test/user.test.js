import assert from "assert";
import { User } from "../lib/drivewealth";

describe("User", () => {
	test("getAccounts", async () => {
		assert(Array.isArray(
			await user.getAccounts(),
		));
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

	test("getStatus", async () => {
		expect(Object.keys(
			await user.getStatus(),
		))
		.toEqual(
			expect.arrayContaining([
				"accountStatus",
				"addressProofStatus",
				"idStatus",
				"kycStatus",
			]),
		);
	});

	test("logout");

	test("get", async () => {
		expect(await user.get()).toBeDefined();
	});

	test("login");

	test("isUsernameAvailable", async () => {
		expect(await User.isUsernameAvailable(user.username)).toBe(false);
		expect(await User.isUsernameAvailable(Math.random().toString())).toBe(true);
	});

	test("create");

	test("update", async () => {
		const city = Math.random().toString();

		expect(await user.update({ city })).toBeUndefined();

		const updatedUser = await user.get();

		expect(updatedUser.city).toBe(city);
	});

	test("uploadDocument");

	test("getCreditCards", async () => {
		assert(Array.isArray(
			await user.getCreditCards(),
		));
	});

	test("addCreditCard", async () => {
		expect(await user.addCreditCard("tok_visa")).toBeDefined();
	});

	test("removeCreditCard", async () => {
		const [card] = await user.getCreditCards();

		expect(
			await user.removeCreditCard(card.cardID),
		).toBeUndefined();
	});
});
