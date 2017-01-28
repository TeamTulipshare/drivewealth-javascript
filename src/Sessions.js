class Sessions {
    constructor() {
        this._keys = {};
    }

    save(userID, sessionKey) {
        this._keys[userID] = sessionKey;
    }

    get(userID) {
        return this._keys[userID];
    }
}

export const sessions = new Sessions();
export default sessions;
