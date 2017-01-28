export const Config = {
    env: null,
    httpImpl: null,
};

export const ENVIRONMENTS = {
    UAT: "http://api.drivewealth.io/v1",
    PROD: "https://api.drivewealth.net/v1",
};

export function setup({
    env,
    httpImpl,
}) {
    Config.env = env;
    Config.httpImpl = httpImpl;
}
