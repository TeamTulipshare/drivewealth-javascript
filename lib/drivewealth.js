/*!
 * 
 * 	drivewealth-javascript - JavaScript bindings for the DriveWealth API
 * 	Author: John Shammas
 * 	Version: v1.0.0
 * 	Url: https://github.com/drivewealth/drivewealth-javascript
 * 	License(s): ISC
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["drivewealth"] = factory();
	else
		root["drivewealth"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Account = __webpack_require__(1);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	var _Instrument = __webpack_require__(5);
	
	var _Instrument2 = _interopRequireDefault(_Instrument);
	
	var _User = __webpack_require__(6);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _Config = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    ENVIRONMENTS: _Config.ENVIRONMENTS,
	
	    Account: _Account2.default,
	    Instrument: _Instrument2.default,
	    User: _User2.default,
	
	    setup: _Config.setup
	};
	module.exports = exports["default"];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(4);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Account = function () {
	    function Account(data) {
	        _classCallCheck(this, Account);
	
	        var _arr = ["accountID", "userID", "accountNo", "accountType", "currencyID", "ibID", "margin", "nickname", "openedWhen", "patternDayTrades", "status", "tradingType"];
	
	        for (var _i = 0; _i < _arr.length; _i++) {
	            var key = _arr[_i];
	            this[key] = data[key];
	        }
	    }
	
	    _createClass(Account, [{
	        key: "getBlotter",
	        value: function getBlotter(type, cb) {
	            if (type && !cb) {
	                cb = type;
	                type = null;
	            }
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + this.userID + "/accountSummary/" + this.accountID + (type ? '/' + type : ""),
	                sessionKey: _Sessions2.default.get(this.userID)
	            }, function (data) {
	                cb && cb(null, type ? data[type] : data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	
	        // getPerformance(startDate, endDate, cb)
	        // getPerformance(period, cb)
	        // getPerformance(cb)
	
	    }, {
	        key: "getPerformance",
	        value: function getPerformance() {
	            var queryString = "";
	            var cb = void 0;
	            if (arguments.length === 3) {
	                cb = arguments[2];
	
	                var _arguments = Array.prototype.slice.call(arguments),
	                    startDate = _arguments[0],
	                    endDate = _arguments[1];
	
	                queryString += "/dateRange?";
	                queryString += "startDate=" + startDate.getFullYear() + (startDate.getMonth() + 1) + startDate.getDate();
	                queryString += "&endDate=" + startDate.getFullYear() + (startDate.getMonth() + 1) + startDate.getDate();
	            } else if (arguments.length === 2) {
	                cb = arguments[1];
	                queryString += "/history?period=" + arguments[0];
	            } else {
	                cb = arguments[0];
	            }
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + this.userID + "/accountPerformance/" + this.accountID + queryString,
	                sessionKey: _Sessions2.default.get(this.userID)
	            }, function (data) {
	                cb && cb(null, data.performance);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }], [{
	        key: "getListForUserID",
	        value: function getListForUserID(userID, cb) {
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + userID + "/accounts",
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data.map(function (account) {
	                    return new Account(account);
	                }));
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "BLOTTER_TYPES",
	        get: function get() {
	            return {
	                CASH: "cash",
	                ORDERS: "orders",
	                TRANSACTIONS: "transactions",
	                POSITIONS: "positions",
	                ALL: null
	            };
	        }
	    }]);
	
	    return Account;
	}();
	
	exports.default = Account;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = request;
	
	var _Config = __webpack_require__(3);
	
	function request(_ref, onSuccess, onError) {
	    var _ref$method = _ref.method,
	        method = _ref$method === undefined ? "GET" : _ref$method,
	        endpoint = _ref.endpoint,
	        sessionKey = _ref.sessionKey,
	        body = _ref.body,
	        _ref$addlHeaders = _ref.addlHeaders,
	        addlHeaders = _ref$addlHeaders === undefined ? {} : _ref$addlHeaders;
	
	    var headers = {
	        Accept: "application/json"
	    };
	    if (method === "POST" || method === "PUT" || method === "PATCH") {
	        headers["Content-Type"] = "application/json";
	    }
	    if (sessionKey) {
	        headers["x-mysolomeo-session-key"] = sessionKey;
	    }
	    for (var header in addlHeaders) {
	        headers[header] = addlHeaders[header];
	    }
	
	    endpoint = _Config.Config.env + endpoint;
	
	    if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);
	
	    _Config.Config.httpImpl(method, endpoint, headers, body, function (statusCode, resHeaders, resBody) {
	        if ((resHeaders["Content-Type"] === "application/json" || resHeaders["content-type"] === "application/json") && resBody) {
	            resBody = JSON.parse(resBody);
	        }
	
	        if (String(statusCode)[0] === "2" || String(statusCode)[0] === "3") {
	            onSuccess(resBody, resHeaders);
	        } else {
	            onError(resBody, resHeaders);
	        }
	    });
	}
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setup = setup;
	var Config = exports.Config = {
	    env: null,
	    httpImpl: null,
	    appTypeID: null,
	    appVersion: null
	};
	
	var ENVIRONMENTS = exports.ENVIRONMENTS = {
	    UAT: "http://api.drivewealth.io/v1",
	    PROD: "https://api.drivewealth.net/v1"
	};
	
	function setup(_ref) {
	    var env = _ref.env,
	        httpImpl = _ref.httpImpl,
	        appTypeID = _ref.appTypeID,
	        appVersion = _ref.appVersion;
	
	    Config.env = env;
	    Config.httpImpl = httpImpl;
	    Config.appTypeID = appTypeID;
	    Config.appVersion = appVersion;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Sessions = function () {
	    function Sessions() {
	        _classCallCheck(this, Sessions);
	
	        this._keys = {};
	        this._mainUser = null;
	    }
	
	    _createClass(Sessions, [{
	        key: "save",
	        value: function save(userID, sessionKey) {
	            this._keys[userID] = sessionKey;
	            if (!this._mainUser) this._mainUser = userID;
	        }
	    }, {
	        key: "get",
	        value: function get(userID) {
	            return this._keys[userID];
	        }
	    }, {
	        key: "getAny",
	        value: function getAny() {
	            return this._keys[this._mainUser];
	        }
	    }]);
	
	    return Sessions;
	}();
	
	var sessions = exports.sessions = new Sessions();
	exports.default = sessions;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(4);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Instrument = function () {
	    function Instrument(data) {
	        _classCallCheck(this, Instrument);
	
	        var _arr = ["instrumentID", "name", "exchangeID", "instrumentTypeID", "orderSizeMax", "orderSizeMin", "orderSizeStep", "rateAsk", "rateBid", "ratePrecision", "symbol", "tradeStatus", "urlImage", "urlInvestor", "chaikinPgr", "priorClose", "marketState", "fundamentalDataModel"];
	
	        for (var _i = 0; _i < _arr.length; _i++) {
	            var key = _arr[_i];
	            this[key] = data[key];
	        }
	    }
	
	    _createClass(Instrument, null, [{
	        key: "getBySymbol",
	        value: function getBySymbol(symbol, cb) {
	            var symbols = symbol;
	            if (typeof symbol === "string") symbols = [symbol];
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/instruments?symbol=" + symbols.join(','),
	                sessionKey: _Sessions2.default.getAny()
	            }, function (data) {
	                data = data.map(function (ins) {
	                    return new Instrument(ins);
	                });
	                cb && cb(null, typeof symbol === "string" ? data[0] : data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getByID",
	        value: function getByID(id) {
	            var includeFundamentals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	            var cb = arguments[2];
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/instruments/" + id + (includeFundamentals ? '?options=F' : ''),
	                sessionKey: _Sessions2.default.getAny()
	            }, function (data) {
	                cb && cb(null, new Instrument(data));
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getAll",
	        value: function getAll(tradeStatus, cb) {
	            if (!cb) {
	                cb = tradeStatus;
	                tradeStatus = "-1";
	            }
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/instruments?tradeStatus=" + tradeStatus,
	                sessionKey: _Sessions2.default.getAny()
	            }, function (data) {
	                cb && cb(null, data.map(function (ins) {
	                    return new Instrument(ins);
	                }));
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "search",
	        value: function search(criteria, cb) {
	            var queryString = "?";
	            if (criteria.symbol) queryString += "symbol=" + criteria.symbol + "&";
	            if (criteria.name) queryString += "name=" + criteria.name + "&";
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/instruments" + queryString,
	                sessionKey: _Sessions2.default.getAny()
	            }, function (data) {
	                cb && cb(null, data.map(function (ins) {
	                    return new Instrument(ins);
	                }));
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getQuote",
	        value: function getQuote(symbol, cb) {
	            var userPassedOneSymbol = false;
	            if (!Array.isArray(symbol)) {
	                userPassedOneSymbol = true;
	                symbol = [symbol];
	            }
	            symbol = symbol.map(function (sym) {
	                return sym instanceof Instrument ? sym.symbol : sym;
	            });
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/quotes?symbols=" + symbol.join(","),
	                sessionKey: _Sessions2.default.getAny(),
	                addlHeaders: {
	                    "Accept": "text/plain"
	                }
	            }, function (data) {
	                var obj = {};
	                data = data.split("|").slice(10);
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var rawQuote = _step.value;
	
	                        var parsedQuote = rawQuote.split(",");
	                        obj[parsedQuote[0]] = {
	                            bid: parsedQuote[1],
	                            ask: parsedQuote[2]
	                        };
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                if (userPassedOneSymbol) obj = obj[symbol[0]];
	                cb && cb(null, obj);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "TRADE_STATUSES",
	        get: function get() {
	            return {
	                INACTIVE: "0",
	                ACTIVE: "1",
	                CLOSED: "2"
	            };
	        }
	    }]);
	
	    return Instrument;
	}();
	
	exports.default = Instrument;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Config = __webpack_require__(3);
	
	var _Sessions = __webpack_require__(4);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Account = __webpack_require__(1);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function () {
	    function User(data) {
	        _classCallCheck(this, User);
	
	        var _arr = ["countryID", "emailAddress", "firstName", "languageID", "lastName", "phoneNumber", "referralCode", "userID", "username", "wlpID", "status", "usCitizen", "lastLoginWhen", "citizenship"];
	
	        for (var _i = 0; _i < _arr.length; _i++) {
	            var key = _arr[_i];
	            this[key] = data[key];
	        }
	    }
	
	    _createClass(User, [{
	        key: "getAccounts",
	        value: function getAccounts(cb) {
	            _Account2.default.getListForUserID(this.userID, cb);
	        }
	    }], [{
	        key: "getByUserID",
	        value: function getByUserID(userID, cb) {
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + userID,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, new User(data));
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "login",
	        value: function login(username, password, cb) {
	            (0, _request2.default)({
	                method: "POST",
	                endpoint: "/userSessions",
	                body: {
	                    username: username,
	                    password: password,
	                    appTypeID: _Config.Config.appTypeID,
	                    appVersion: _Config.Config.appVersion,
	                    languageID: "en_US",
	                    osType: "unknown",
	                    osVersion: "unknown",
	                    scrRes: "unknown",
	                    ipAddress: "unknown"
	                }
	            }, function (data) {
	                _Sessions2.default.save(data.userID, data.sessionKey);
	                User.getByUserID(data.userID, function (err, user) {
	                    if (err) return cb && cb(err);
	                    cb && cb(null, user);
	                });
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }]);
	
	    return User;
	}();
	
	exports.default = User;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMmFlNjU0Nzg5MWRhOGM5YmU3MSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkluc3RydW1lbnQiLCJVc2VyIiwic2V0dXAiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsIm1hcCIsImFjY291bnQiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwicmVxdWVzdCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJib2R5IiwiYWRkbEhlYWRlcnMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0dHBJbXBsIiwic3RhdHVzQ29kZSIsInJlc0hlYWRlcnMiLCJyZXNCb2R5IiwicGFyc2UiLCJTdHJpbmciLCJDb25maWciLCJhcHBUeXBlSUQiLCJhcHBWZXJzaW9uIiwiVUFUIiwiUFJPRCIsIlNlc3Npb25zIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsInN5bWJvbCIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaWQiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsIm5hbWUiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwiQXJyYXkiLCJpc0FycmF5Iiwic3ltIiwib2JqIiwic3BsaXQiLCJzbGljZSIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJJTkFDVElWRSIsIkFDVElWRSIsIkNMT1NFRCIsImdldExpc3RGb3JVc2VySUQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OzttQkFFZTtBQUNYQSx1Q0FEVzs7QUFHWEMsK0JBSFc7QUFJWEMscUNBSlc7QUFLWEMseUJBTFc7O0FBT1hDO0FBUFcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUJILE87QUFFakIsc0JBQVlJLElBQVosRUFBa0I7QUFBQTs7QUFBQSxvQkFDRSxDQUNaLFdBRFksRUFFWixRQUZZLEVBR1osV0FIWSxFQUlaLGFBSlksRUFLWixZQUxZLEVBTVosTUFOWSxFQU9aLFFBUFksRUFRWixVQVJZLEVBU1osWUFU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SSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyYWU2NTQ3ODkxZGE4YzliZTcxIiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IHsgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBJbnN0cnVtZW50LFxuICAgIFVzZXIsXG5cbiAgICBzZXR1cFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiYWNjb3VudFR5cGVcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lJRFwiLFxuICAgICAgICAgICAgXCJpYklEXCIsXG4gICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiLFxuICAgICAgICAgICAgXCJvcGVuZWRXaGVuXCIsXG4gICAgICAgICAgICBcInBhdHRlcm5EYXlUcmFkZXNcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInRyYWRpbmdUeXBlXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcbiAgICAgICAgaWYgKHR5cGUgJiYgIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHR5cGU7XG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZSA/IGRhdGFbdHlwZV0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcbiAgICAvLyBnZXRQZXJmb3JtYW5jZShjYilcbiAgICBnZXRQZXJmb3JtYW5jZSgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGNiO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICBjb25zdCBbIHN0YXJ0RGF0ZSwgZW5kRGF0ZSBdID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7c3RhcnREYXRlLmdldE1vbnRoKCkgKyAxfSR7c3RhcnREYXRlLmdldERhdGUoKX1gO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gIGAmZW5kRGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7c3RhcnREYXRlLmdldE1vbnRoKCkgKyAxfSR7c3RhcnREYXRlLmdldERhdGUoKX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1swXX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke3RoaXMuYWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBDQVNIOiBcImNhc2hcIixcbiAgICAgICAgT1JERVJTOiBcIm9yZGVyc1wiLFxuICAgICAgICBUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcbiAgICAgICAgQUxMOiBudWxsLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnYgKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGlmICggKHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKVxuICAgICAgICAgICAgJiYgcmVzQm9keSkge1xuICAgICAgICAgICAgcmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzQm9keSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVycm9yKHJlc0JvZHksIHJlc0hlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsImV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gICAgZW52OiBudWxsLFxuICAgIGh0dHBJbXBsOiBudWxsLFxuICAgIGFwcFR5cGVJRDogbnVsbCxcbiAgICBhcHBWZXJzaW9uOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgIFBST0Q6IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYWluVXNlcikgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIlxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2w9JHtzeW1ib2xzLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGRhdGFbMF0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKGlkLCBpbmNsdWRlRnVuZGFtZW50YWxzID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/ICc/b3B0aW9ucz1GJyA6ICcnfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBJbnN0cnVtZW50KGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXMsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHJhZGVTdGF0dXM7XG4gICAgICAgICAgICB0cmFkZVN0YXR1cyA9IFwiLTFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlYXJjaChjcml0ZXJpYSwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogcGFyc2VkUXVvdGVbMV0sXG4gICAgICAgICAgICAgICAgICAgIGFzazogcGFyc2VkUXVvdGVbMl0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyUGFzc2VkT25lU3ltYm9sKSBvYmogPSBvYmpbc3ltYm9sWzBdXTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG9iaik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImNvdW50cnlJRFwiLFxuICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIixcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCIsXG4gICAgICAgICAgICBcImxhbmd1YWdlSURcIixcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwicmVmZXJyYWxDb2RlXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJ3bHBJRFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidXNDaXRpemVuXCIsXG4gICAgICAgICAgICBcImxhc3RMb2dpbldoZW5cIixcbiAgICAgICAgICAgIFwiY2l0aXplbnNoaXBcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWNjb3VudHMoY2IpIHtcbiAgICAgICAgQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklELCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBVc2VyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG4gICAgICAgICAgICAgICAgYXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuICAgICAgICAgICAgICAgIG9zVHlwZTogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBzY3JSZXM6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGlwQWRkcmVzczogXCJ1bmtub3duXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnNhdmUoZGF0YS51c2VySUQsIGRhdGEuc2Vzc2lvbktleSk7XG4gICAgICAgICAgICBVc2VyLmdldEJ5VXNlcklEKGRhdGEudXNlcklELCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9