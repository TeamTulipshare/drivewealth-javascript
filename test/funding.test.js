import P from "bluebird";

const Funding = P.promisifyAll(require("../lib/drivewealth").Funding);

let user;

beforeAll(async () => {
	user = await require("./setup").default;
});

test("return an array of subscription options", async () => {
	expect(await Funding.getPricingAsync(user.userID)).toBeDefined();
});
