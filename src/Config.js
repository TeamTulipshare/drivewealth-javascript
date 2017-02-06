export const Config = {
    env: null,
    httpImpl: null,
    appTypeID: null,
    appVersion: null,
};

export const ENVIRONMENTS = {
    UAT: {
        api: "http://api.drivewealth.io/v1",
        apps: "http://apps.drivewealth.io/",
        reports: "http://reports.drivewealth.io/",
    },
    PROD: {
        api: "https://api.drivewealth.net/v1",
        apps: "https://apps.drivewealth.com/",
        reports: "https://reports.drivewealth.com",
    },
};

export function setup({
    env,
    httpImpl,
    appTypeID,
    appVersion,
    wlpID = "DW",
}) {
    Config.env = env;
    Config.httpImpl = httpImpl;
    Config.appTypeID = appTypeID;
    Config.appVersion = appVersion;
    Config.wlpID = wlpID;
}
