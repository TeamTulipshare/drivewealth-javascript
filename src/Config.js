/**
 * @namespace Config
 */
export const Config = {
	env: null,
	httpImpl: null,
	appTypeID: null,
	appVersion: null,
	wlpID: null,
	appsPartnerID: null,
	referralCode: null,
};

/**
 * Servers to send a request to
 * @name HOSTS
 * @property {string} API
 * @property {string} APPS
 * @property {string} REPORTS
 * @memberof Config
 * @constant
 */
export const HOSTS = {
	API: "api",
	APPS: "apps",
	REPORTS: "reports",
};

/**
 * Servers to send a request to
 * @name ENVIRONMENTS
 * @property {object} UAT
 * @property {object} PROD
 * @memberof Config
 * @constant
 */
export const ENVIRONMENTS = {
	UAT: {
		[HOSTS.API]: "http://api.drivewealth.io/v1",
		[HOSTS.APPS]: "http://apps.drivewealth.io",
		[HOSTS.REPORTS]: "http://reports.drivewealth.io",
	},
	PROD: {
		[HOSTS.API]: "https://api.drivewealth.net/v1",
		[HOSTS.APPS]: "https://apps.drivewealth.com",
		[HOSTS.REPORTS]: "https://reports.drivewealth.net",
	},
};

export function setup({
	env,
	httpImpl,
	appTypeID,
	appVersion,
	wlpID = "DW",
	appsPartnerID,
	referralCode,
}) {
	Config.env = env;
	Config.httpImpl = httpImpl;
	Config.appTypeID = appTypeID;
	Config.appVersion = appVersion;
	Config.wlpID = wlpID;
	Config.appsPartnerID = appsPartnerID || wlpID;
	Config.referralCode = referralCode;
}
