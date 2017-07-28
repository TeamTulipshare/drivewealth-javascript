import { User, setup, ENVIRONMENTS } from "../lib/drivewealth";

const SECONDS = 15;

// cache the user across tests
let user = null;

/*
  Setup for single user and return the current user
 */
export default (() => {
	if (user !== null) {
		return Promise.resolve(user);
	}
	setup({
		env: ENVIRONMENTS.UAT,
		httpImpl: require("../lib/httpImpls/request.js"),
		appTypeID: "2000",
		appVersion: "1.0",
	});

	return User.login(
		process.env.username || "timurt",
		process.env.password || "passw0rd",
	)
		.then(loggedInUser => {
			window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * SECONDS;
			expect(loggedInUser).toHaveProperty("userID");
			user = loggedInUser;
			return loggedInUser;
		})
		.catch(console.error);
})();
