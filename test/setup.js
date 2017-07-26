import { User, setup, ENVIRONMENTS } from "../lib/drivewealth";

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

	return User.login("timurt", "passw0rd")
		.then(loggedInUser => {
			expect(loggedInUser).toHaveProperty("userID");
			user = loggedInUser;
			return loggedInUser;
		})
		.catch(console.error);
})();
