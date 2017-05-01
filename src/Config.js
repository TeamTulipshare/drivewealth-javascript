export const Config = {
    env: null,
    httpImpl: null,
    appTypeID: null,
    appVersion: null,
    wlpID: null,
    referralCode: null,
};

export const HOSTS = {
    API: "api",
    APPS: "apps",
    REPORTS: "reports"
};

export const ENVIRONMENTS = {
    UAT: {
        [HOSTS.API]: "http://api.drivewealth.io/v1",
        [HOSTS.APPS]: "http://apps.drivewealth.io",
        [HOSTS.REPORTS]: "http://reports.drivewealth.io",
    },
    PROD: {
        [HOSTS.API]: "https://api.drivewealth.net/v1",
        [HOSTS.APPS]: "https://apps.drivewealth.com",
        [HOSTS.REPORTS]: "https://reports.drivewealth.com",
    },
};

export function setup({
    env,
    httpImpl,
    appTypeID,
    appVersion,
    wlpID = "DW",
    referralCode,
}) {
    Config.env = env;
    Config.httpImpl = httpImpl;
    Config.appTypeID = appTypeID;
    Config.appVersion = appVersion;
    Config.wlpID = wlpID;
    Config.referralCode = referralCode;
}
