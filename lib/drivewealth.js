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
	
	        var _arr = ["instrumentID", "name", "exchangeID", "instrumentTypeID", "orderSizeMax", "orderSizeMin", "orderSizeStep", "rateAsk", "rateBid", "ratePrecision", "symbol", "tradeStatus", "urlImage", "urlInvestor", "chaikinPgr", "priorClose", "marketState"];
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhYzAzZTgwYjc1MTllYjc3NDczNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkluc3RydW1lbnQiLCJVc2VyIiwic2V0dXAiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwibWFwIiwiYWNjb3VudCIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJyZXF1ZXN0Iiwib25TdWNjZXNzIiwib25FcnJvciIsImJvZHkiLCJhZGRsSGVhZGVycyIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJwYXJzZSIsIlN0cmluZyIsIkNvbmZpZyIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJVQVQiLCJQUk9EIiwiU2Vzc2lvbnMiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwic3ltYm9sIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpZCIsImluY2x1ZGVGdW5kYW1lbnRhbHMiLCJ0cmFkZVN0YXR1cyIsImdldExpc3RGb3JVc2VySUQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OzttQkFFZTtBQUNYQSx1Q0FEVzs7QUFHWEMsK0JBSFc7QUFJWEMscUNBSlc7QUFLWEMseUJBTFc7O0FBT1hDO0FBUFcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUJILE87QUFFakIsc0JBQVlJLElBQVosRUFBa0I7QUFBQTs7QUFBQSxvQkFDRSxDQUNaLFdBRFksRUFFWixRQUZZLEVBR1osV0FIWSxFQUlaLGFBSlksRUFLWixZQUxZLEVBTVosTUFOWSxFQU9aLFFBUFksRUFRWixVQVJZLEVBU1osWUFUWSxFQVVaLGtCQVZZLEVBV1osUUFYWSxFQVlaLGFBWlksQ0FERjs7QUFDZCxrREFhRztBQWJFLGlCQUFJQyxjQUFKO0FBY0Qsa0JBQUtBLEdBQUwsSUFBWUQsS0FBS0MsR0FBTCxDQUFaO0FBQ0g7QUFDSjs7OztvQ0FFVUMsSSxFQUFNQyxFLEVBQUk7QUFDakIsaUJBQUlELFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNiQSxzQkFBS0QsSUFBTDtBQUNBQSx3QkFBTyxJQUFQO0FBQ0g7O0FBRUQsb0NBQVE7QUFDSkUseUJBQVEsS0FESjtBQUVKQyx1Q0FBb0Is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QUFTMkQsSUFBVCxDQUFOO0FBQ0gsa0JBSEQ7QUFJSCxjQXBCRCxFQW9CRztBQUFBLHdCQUFPM0QsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FwQkg7QUFxQkg7Ozs7OzttQkEzRGdCWixJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWMwM2U4MGI3NTE5ZWI3NzQ3MzQiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgeyBzZXR1cCwgRU5WSVJPTk1FTlRTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBFTlZJUk9OTUVOVFMsXG5cbiAgICBBY2NvdW50LFxuICAgIEluc3RydW1lbnQsXG4gICAgVXNlcixcblxuICAgIHNldHVwXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJhY2NvdW50SURcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcImFjY291bnROb1wiLFxuICAgICAgICAgICAgXCJhY2NvdW50VHlwZVwiLFxuICAgICAgICAgICAgXCJjdXJyZW5jeUlEXCIsXG4gICAgICAgICAgICBcImliSURcIixcbiAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCIsXG4gICAgICAgICAgICBcIm9wZW5lZFdoZW5cIixcbiAgICAgICAgICAgIFwicGF0dGVybkRheVRyYWRlc1wiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidHJhZGluZ1R5cGVcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QmxvdHRlcih0eXBlLCBjYikge1xuICAgICAgICBpZiAodHlwZSAmJiAhY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHlwZTtcbiAgICAgICAgICAgIHR5cGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50U3VtbWFyeS8ke3RoaXMuYWNjb3VudElEfSR7dHlwZSA/ICcvJyArIHR5cGUgOiBcIlwifWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlID8gZGF0YVt0eXBlXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBDQVNIOiBcImNhc2hcIixcbiAgICAgICAgT1JERVJTOiBcIm9yZGVyc1wiLFxuICAgICAgICBUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcbiAgICAgICAgQUxMOiBudWxsLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnYgKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGlmICggKHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKVxuICAgICAgICAgICAgJiYgcmVzQm9keSkge1xuICAgICAgICAgICAgcmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzQm9keSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkVycm9yKHJlc0JvZHksIHJlc0hlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsImV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gICAgZW52OiBudWxsLFxuICAgIGh0dHBJbXBsOiBudWxsLFxuICAgIGFwcFR5cGVJRDogbnVsbCxcbiAgICBhcHBWZXJzaW9uOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgIFBST0Q6IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYWluVXNlcikgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9sPSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=