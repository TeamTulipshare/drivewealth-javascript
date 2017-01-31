export const Config = {
    env: null,
    httpImpl: null,
    appTypeID: null,
    appVersion: null,
};

export const ENVIRONMENTS = {
    UAT: "http://api.drivewealth.io/v1",
    PROD: "https://api.drivewealth.net/v1",
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
