import { Funding } from "../lib/drivewealth";

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

test("return an array of subscription options", async () => {
	const [plan] = await Funding.getSubscriptionPlans(user.userID);

	expect(plan).toHaveProperty("amount");
});
