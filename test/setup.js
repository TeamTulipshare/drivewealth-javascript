import P from "bluebird";

import drivewealth from "../lib/drivewealth";

const { User } = P.promisifyAll(drivewealth);

// cache the user across tests
let user = null;

/*
  Setup for single user and return the current user
 */
export default (function () {

	if (user !== null) {
		return P.resolve(user);
	} else {

		drivewealth.setup({
			env: drivewealth.ENVIRONMENTS.UAT,
			httpImpl: require("../lib/httpImpls/request.js"),
			appTypeID: "2000",
			appVersion: "1.0",
		});

		return User.loginAsync("timurt", "passw0rd")
		.then(loggedInUser => {

			expect(loggedInUser).toHaveProperty("userID");

			user = P.promisifyAll(loggedInUser);

			return user;
		})
		.catch(console.error);
	}
})();
