class Sessions {
    constructor() {
        this._keys = {};
        this._mainUser = null;
    }

    save(userID, sessionKey) {
        this._keys[userID] = sessionKey;
        if (!this._mainUser) this._mainUser = userID;
    }

    get(userID) {
        return this._keys[userID];
    }

    getAny() {
        return this._keys[this._mainUser];
    }

    remove(userID) {
        delete this._keys[userID];
    }
}

export const sessions = new Sessions();
export default sessions;
