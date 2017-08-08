import { Funding } from "../lib/drivewealth";

describe("Funding", () => {
	test("return an array of subscription options", async () => {
		const [plan] = await Funding.getSubscriptionPlans(user.userID);

		expect(plan).toHaveProperty("amount");
	});
});
