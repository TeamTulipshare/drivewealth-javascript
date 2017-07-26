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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Account = __webpack_require__(1);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	var _Error = __webpack_require__(4);
	
	var _Error2 = _interopRequireDefault(_Error);
	
	var _Funding = __webpack_require__(8);
	
	var _Funding2 = _interopRequireDefault(_Funding);
	
	var _Instrument = __webpack_require__(10);
	
	var _Instrument2 = _interopRequireDefault(_Instrument);
	
	var _Order = __webpack_require__(7);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _Reports = __webpack_require__(9);
	
	var _Reports2 = _interopRequireDefault(_Reports);
	
	var _User = __webpack_require__(11);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Config = __webpack_require__(3);
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		ENVIRONMENTS: _Config.ENVIRONMENTS,
		HOSTS: _Config.HOSTS,
	
		Account: _Account2.default,
		Config: _Config.Config,
		Error: _Error2.default,
		Funding: _Funding2.default,
		Instrument: _Instrument2.default,
		Order: _Order2.default,
		Reports: _Reports2.default,
		User: _User2.default,
		Sessions: _Sessions2.default,
	
		setup: _Config.setup,
		request: _request2.default
	};
	module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Order = __webpack_require__(7);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _Funding = __webpack_require__(8);
	
	var _Funding2 = _interopRequireDefault(_Funding);
	
	var _Reports = __webpack_require__(9);
	
	var _Reports2 = _interopRequireDefault(_Reports);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Account = function () {
		function Account(data) {
			_classCallCheck(this, Account);
	
			var _arr = ["accountID", "userID", "accountNo", "accountType", "currencyID", "ibID", "margin", "nickname", "openedWhen", "patternDayTrades", "status", "tradingType", "accountMgmtType", "commissionSchedule"];
	
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
	
					if (data.orders) {
						data.orders = data.orders.map(function (order) {
							return new _Order2.default(order);
						});
					}
	
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
					queryString += "startDate=" + startDate.getFullYear() + ("0" + (startDate.getMonth() + 1)).slice(-2) + ("0" + startDate.getDate()).slice(-2);
					queryString += "&endDate=" + endDate.getFullYear() + ("0" + (endDate.getMonth() + 1)).slice(-2) + ("0" + endDate.getDate()).slice(-2);
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
		}, {
			key: "placeOrder",
			value: function placeOrder(type, data, cb) {
				var parentDetails = {
					accountID: this.accountID,
					accountNo: this.accountNo,
					accountType: this.accountType,
					userID: this.userID
				};
	
				return _Order2.default.create(type, parentDetails, data, cb);
			}
		}, {
			key: "getFundingMethods",
			value: function getFundingMethods() {
				var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var cb = arguments[1];
	
				data.userID = this.userID;
				data.accountID = this.accountID;
				return _Funding2.default.getFundingMethods(data, cb);
			}
		}, {
			key: "getTransactions",
			value: function getTransactions(startDate, endDate, cb) {
				return _Reports2.default.getTransactions(this.userID, this.accountNo, startDate, endDate, cb);
			}
		}, {
			key: "getPlacedOrders",
			value: function getPlacedOrders(startDate, endDate, cb) {
				return _Reports2.default.getPlacedOrders(this.userID, this.accountNo, startDate, endDate, cb);
			}
		}, {
			key: "getStatements",
			value: function getStatements(startDate, endDate, cb) {
				return _Reports2.default.getStatements(this.userID, this.accountID, startDate, endDate, cb);
			}
		}, {
			key: "getTaxDocuments",
			value: function getTaxDocuments(startDate, endDate, cb) {
				return _Reports2.default.getTaxDocuments(this.userID, this.accountID, startDate, endDate, cb);
			}
		}, {
			key: "getTradeConfirms",
			value: function getTradeConfirms(startDate, endDate, cb) {
				return _Reports2.default.getTradeConfirms(this.userID, this.accountID, startDate, endDate, cb);
			}
		}, {
			key: "generateDownloadURL",
			value: function generateDownloadURL(fileKey, cb) {
				return _Reports2.default.generateDownloadURL(this.userID, this.accountID, fileKey, cb);
			}
		}, {
			key: "extractIDs",
			value: function extractIDs(options) {
				return Object.assign({}, options, {
					userID: this.userID,
					accountID: this.accountID
				});
			}
		}, {
			key: "addSubscription",
			value: function addSubscription(options, cb) {
				Account.addSubscription(this.extractIDs(options), cb);
			}
		}, {
			key: "updateSubscription",
			value: function updateSubscription(options, cb) {
				Account.updateSubscription(this.extractIDs(options), cb);
			}
		}, {
			key: "cancelSubscription",
			value: function cancelSubscription(cb) {
				Account.cancelSubscription(this.extractIDs(), cb);
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
			key: "create",
			value: function create(userID, type, data, cb) {
				if (type === Account.TYPES.PRACTICE) {
					data = {
						userID: userID,
						responseType: "full",
						tranAmount: data
					};
				}
	
				(0, _request2.default)({
					method: "POST",
					endpoint: type === Account.TYPES.PRACTICE ? "/signups/practice" : "/signups/live",
					sessionKey: _Sessions2.default.get(userID),
					body: data
				}, function (data) {
					cb && cb(null, data);
				}, function (err) {
					return cb && cb(err);
				});
			}
		}, {
			key: "changeSubscription",
			value: function changeSubscription(method, _ref, cb) {
				var userID = _ref.userID,
				    accountID = _ref.accountID,
				    planID = _ref.planID,
				    paymentID = _ref.paymentID;
	
	
				var params = {
					method: method,
					endpoint: "/users/" + userID + "/accounts/" + accountID + "/subscriptions",
					sessionKey: _Sessions2.default.get(userID),
					body: method !== "DELETE" && _defineProperty({
						planID: planID
					}, paymentID.startsWith("card") ? "cardID" : "bankAccountID", paymentID)
				};
	
				(0, _request2.default)(Object.keys(params).filter(function (key) {
					return params[key];
				}).reduce(function (x, y) {
					return Object.assign({}, x, _defineProperty({}, y, params[y]));
				}, {}), function (data) {
					cb && cb(null, data);
				}, function (err) {
					cb && cb(err);
				});
			}
		}, {
			key: "addSubscription",
			value: function addSubscription(options, cb) {
				Account.changeSubscription("POST", options, cb);
			}
		}, {
			key: "updateSubscription",
			value: function updateSubscription(options, cb) {
				Account.changeSubscription("PUT", options, cb);
			}
		}, {
			key: "cancelSubscription",
			value: function cancelSubscription(options, cb) {
				Account.changeSubscription("DELETE", options, cb);
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
		}, {
			key: "STATUSES",
			get: function get() {
				return {
					PENDING: 1,
					OPEN: 2,
					OPEN_NO_NEW_TRADES: 3,
					CLOSED: 9
				};
			}
		}, {
			key: "TYPES",
			get: function get() {
				return {
					PRACTICE: 1,
					LIVE: 2
				};
			}
		}]);
	
		return Account;
	}();
	
	exports.default = Account;
	module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = request;
	
	var _Config = __webpack_require__(3);
	
	var _Error = __webpack_require__(4);
	
	function request(_ref, onSuccess, onError) {
	    var _ref$method = _ref.method,
	        method = _ref$method === undefined ? "GET" : _ref$method,
	        endpoint = _ref.endpoint,
	        sessionKey = _ref.sessionKey,
	        body = _ref.body,
	        _ref$addlHeaders = _ref.addlHeaders,
	        addlHeaders = _ref$addlHeaders === undefined ? {} : _ref$addlHeaders,
	        _ref$host = _ref.host,
	        host = _ref$host === undefined ? _Config.HOSTS.API : _ref$host;
	
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
	
	    endpoint = _Config.Config.env[host] + endpoint;
	
	    if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);
	
	    _Config.Config.httpImpl(method, endpoint, headers, body, function (statusCode, resHeaders, resBody) {
	        var contentType = resHeaders["Content-Type"] || resHeaders["content-type"] || "";
	        if (resBody && contentType.indexOf("application/json") !== -1) {
	            try {
	                resBody = JSON.parse(resBody);
	            } catch (err) {
	                // resBody will remain as is
	            }
	        }
	
	        if (String(statusCode)[0] === "2" || String(statusCode)[0] === "3") {
	            onSuccess(resBody, statusCode, resHeaders);
	        } else {
	            var error = void 0,
	                errorMessage = void 0;
	            if (resBody) {
	                errorMessage = resBody.message || JSON.stringify(resBody);
	            }
	            error = statusCode == 401 ? new _Error.DriveWealthSessionError(errorMessage) : new _Error.DriveWealthError(errorMessage);
	            onError(error, resBody, statusCode, resHeaders);
	        }
	    });
	}
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UAT, _PROD;
	
	exports.setup = setup;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Config = exports.Config = {
	    env: null,
	    httpImpl: null,
	    appTypeID: null,
	    appVersion: null,
	    wlpID: null,
	    appsPartnerID: null,
	    referralCode: null
	};
	
	var HOSTS = exports.HOSTS = {
	    API: "api",
	    APPS: "apps",
	    REPORTS: "reports"
	};
	
	var ENVIRONMENTS = exports.ENVIRONMENTS = {
	    UAT: (_UAT = {}, _defineProperty(_UAT, HOSTS.API, "http://api.drivewealth.io/v1"), _defineProperty(_UAT, HOSTS.APPS, "http://apps.drivewealth.io"), _defineProperty(_UAT, HOSTS.REPORTS, "http://reports.drivewealth.io"), _UAT),
	    PROD: (_PROD = {}, _defineProperty(_PROD, HOSTS.API, "https://api.drivewealth.net/v1"), _defineProperty(_PROD, HOSTS.APPS, "https://apps.drivewealth.com"), _defineProperty(_PROD, HOSTS.REPORTS, "https://reports.drivewealth.net"), _PROD)
	};
	
	function setup(_ref) {
	    var env = _ref.env,
	        httpImpl = _ref.httpImpl,
	        appTypeID = _ref.appTypeID,
	        appVersion = _ref.appVersion,
	        _ref$wlpID = _ref.wlpID,
	        wlpID = _ref$wlpID === undefined ? "DW" : _ref$wlpID,
	        appsPartnerID = _ref.appsPartnerID,
	        referralCode = _ref.referralCode;
	
	    Config.env = env;
	    Config.httpImpl = httpImpl;
	    Config.appTypeID = appTypeID;
	    Config.appVersion = appVersion;
	    Config.wlpID = wlpID;
	    Config.appsPartnerID = appsPartnerID || wlpID;
	    Config.referralCode = referralCode;
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DriveWealthSessionError = exports.DriveWealthError = undefined;
	
	var _extendableErrorClass = __webpack_require__(5);
	
	var _extendableErrorClass2 = _interopRequireDefault(_extendableErrorClass);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DriveWealthError = exports.DriveWealthError = function (_ExtendableError) {
	    _inherits(DriveWealthError, _ExtendableError);
	
	    function DriveWealthError() {
	        _classCallCheck(this, DriveWealthError);
	
	        return _possibleConstructorReturn(this, (DriveWealthError.__proto__ || Object.getPrototypeOf(DriveWealthError)).apply(this, arguments));
	    }
	
	    return DriveWealthError;
	}(_extendableErrorClass2.default);
	
	var DriveWealthSessionError = exports.DriveWealthSessionError = function (_ExtendableError2) {
	    _inherits(DriveWealthSessionError, _ExtendableError2);
	
	    function DriveWealthSessionError() {
	        _classCallCheck(this, DriveWealthSessionError);
	
	        return _possibleConstructorReturn(this, (DriveWealthSessionError.__proto__ || Object.getPrototypeOf(DriveWealthSessionError)).apply(this, arguments));
	    }
	
	    return DriveWealthSessionError;
	}(_extendableErrorClass2.default);
	
	exports.default = {
	    DriveWealthError: DriveWealthError,
	    DriveWealthSessionError: DriveWealthSessionError
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
	    function ExtendableBuiltin() {
	        var instance = Reflect.construct(cls, Array.from(arguments));
	        Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	        return instance;
	    }
	
	    ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	        constructor: {
	            value: cls,
	            enumerable: false,
	            writable: true,
	            configurable: true
	        }
	    });
	
	    if (Object.setPrototypeOf) {
	        Object.setPrototypeOf(ExtendableBuiltin, cls);
	    } else {
	        ExtendableBuiltin.__proto__ = cls;
	    }
	
	    return ExtendableBuiltin;
	}
	
	var ExtendableError = function (_extendableBuiltin2) {
	    _inherits(ExtendableError, _extendableBuiltin2);
	
	    function ExtendableError(message) {
	        _classCallCheck(this, ExtendableError);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ExtendableError).call(this, message));
	
	        _this.name = _this.constructor.name;
	        _this.message = message;
	        if (typeof Error.captureStackTrace === 'function') {
	            Error.captureStackTrace(_this, _this.constructor);
	        } else {
	            _this.stack = new Error(message).stack;
	        }
	        return _this;
	    }
	
	    return ExtendableError;
	}(_extendableBuiltin(Error));
	
	module.exports = ExtendableError;
	


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
	            this._mainUser = userID;
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
	    }, {
	        key: "remove",
	        value: function remove(userID) {
	            delete this._keys[userID];
	        }
	    }]);
	
	    return Sessions;
	}();
	
	var sessions = exports.sessions = new Sessions();
	exports.default = sessions;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SEC_FEE_RATE = 0.0000231;
	var SEC_FEE_MIN = 0.01;
	var SEC_FEE_MAX = Number.POSITIVE_INFINITY;
	var TAF_FEE_RATE = 0.000119;
	var TAF_FEE_MIN = 0.01;
	var TAF_FEE_MAX = 5.95;
	
	var Order = function () {
		function Order(data) {
			_classCallCheck(this, Order);
	
			var _arr = ["orderID", "accountID", "userID", "cumQty", "accountNo", "comment", "commission", "createdByID", "createdWhen", "executedWhen", "grossTradeAmt", "instrumentID", "leavesQty", "orderNo", "orderQty", "side", "autoStop", "symbol", "effectivePrice"];
	
			for (var _i = 0; _i < _arr.length; _i++) {
				var key = _arr[_i];
				this[key] = data[key];
			}
			this.rejectionReason = data.ordRejReason;
			this.status = data.ordStatus;
			this.type = data.ordType || data.orderType;
			this.price = data.stopPrice || data.limitPrice || data.price;
		}
	
		_createClass(Order, [{
			key: "cancel",
			value: function cancel(cb) {
				(0, _request2.default)({
					method: "DELETE",
					endpoint: "/orders/" + this.orderID,
					sessionKey: _Sessions2.default.get(this.userID)
				}, function () {
					cb && cb(null);
				}, function (err) {
					return cb && cb(err);
				});
			}
		}], [{
			key: "cancel",
			value: function cancel(orderID, userID, cb) {
				(0, _request2.default)({
					method: "DELETE",
					endpoint: "/orders/" + orderID,
					sessionKey: _Sessions2.default.get(userID)
				}, function () {
					cb && cb(null);
				}, function (err) {
					return cb && cb(err);
				});
			}
		}, {
			key: "getByID",
			value: function getByID(orderID, userID, cb) {
				(0, _request2.default)({
					method: "GET",
					endpoint: "/orders/" + orderID,
					sessionKey: _Sessions2.default.get(userID)
				}, function (data) {
					cb && cb(null, new Order(data));
				}, function (err) {
					return cb && cb(err);
				});
			}
		}, {
			key: "create",
			value: function create(type, _ref, _ref2, cb) {
				var accountID = _ref.accountID,
				    accountNo = _ref.accountNo,
				    userID = _ref.userID,
				    accountType = _ref.accountType;
				var instrument = _ref2.instrument,
				    side = _ref2.side,
				    qty = _ref2.qty,
				    amountCash = _ref2.amountCash,
				    comment = _ref2.comment,
				    autoStop = _ref2.autoStop,
				    price = _ref2.price,
				    _ref2$waitForFill = _ref2.waitForFill,
				    waitForFill = _ref2$waitForFill === undefined ? true : _ref2$waitForFill,
				    _ref2$fillRetryInterv = _ref2.fillRetryInterval,
				    fillRetryInterval = _ref2$fillRetryInterv === undefined ? 1000 : _ref2$fillRetryInterv,
				    _ref2$fillMaxRetries = _ref2.fillMaxRetries,
				    fillMaxRetries = _ref2$fillMaxRetries === undefined ? 10 : _ref2$fillMaxRetries;
	
				if (amountCash && qty) throw new Error("\"qty\" and \"amountCash\" are mutually exclusive.");
				if (type !== Order.TYPES.MARKET && !price) throw new Error("Limit and stop orders require a \"price.\"");
				if (type !== Order.TYPES.MARKET && autoStop) throw new Error("\"autoStop\" is only allowed for market orders.");
	
				(0, _request2.default)({
					method: "POST",
					endpoint: "/orders",
					sessionKey: _Sessions2.default.get(userID),
					body: {
						instrumentID: instrument.instrumentID || instrument.id || instrument,
						accountID: accountID,
						accountNo: accountNo,
						userID: userID,
						accountType: accountType,
						ordType: type,
						side: side,
						orderQty: qty ? qty : undefined,
						amountCash: amountCash ? amountCash : undefined,
						comment: comment,
						autoStop: autoStop,
						price: type === Order.TYPES.STOP ? price : undefined,
						limitPrice: type === Order.TYPES.LIMIT ? price : undefined
					}
				}, function (data) {
					if (type !== Order.TYPES.MARKET) fillMaxRetries = 1;
					if (!waitForFill) return cb && cb(null, data.orderID);
	
					var retries = fillMaxRetries;
					var checkStatus = function checkStatus() {
						retries--;
						Order.getByID(data.orderID, userID, function (err, order) {
							if (err) return cb && cb(err);
							if (retries <= 0) return cb && cb(null, order);
	
							if (order.status !== Order.STATUSES.NEW && order.status !== Order.STATUSES.PARTIAL_FILL) {
								return cb && cb(null, order);
							} else {
								setTimeout(checkStatus, fillRetryInterval);
							}
						});
					};
					setTimeout(checkStatus, fillRetryInterval);
				}, function (err) {
					return cb && cb(err);
				});
			}
		}, {
			key: "createCart",
			value: function createCart(_ref3, _ref4, cb) {
				var accountID = _ref3.accountID,
				    accountNo = _ref3.accountNo,
				    userID = _ref3.userID,
				    accountType = _ref3.accountType;
				var orders = _ref4.orders,
				    _ref4$waitForFill = _ref4.waitForFill,
				    waitForFill = _ref4$waitForFill === undefined ? true : _ref4$waitForFill,
				    _ref4$fillRetryInterv = _ref4.fillRetryInterval,
				    fillRetryInterval = _ref4$fillRetryInterv === undefined ? 500 : _ref4$fillRetryInterv,
				    _ref4$fillMaxRetries = _ref4.fillMaxRetries,
				    fillMaxRetries = _ref4$fillMaxRetries === undefined ? 10 : _ref4$fillMaxRetries;
	
				(0, _request2.default)({
					method: "POST",
					endpoint: "/orders",
					sessionKey: _Sessions2.default.get(userID),
					body: orders.map(function (order) {
						return {
							instrumentID: order.instrument.instrumentID || order.instrument.id || order.instrument,
							accountID: accountID,
							accountNo: accountNo,
							userID: userID,
							accountType: accountType,
							ordType: Order.TYPES.MARKET,
							side: Order.SIDES.BUY,
							orderQty: order.qty ? order.qty : undefined,
							amountCash: order.amountCash ? order.amountCash : undefined,
							comment: order.comment,
							autoStop: order.autoStop
						};
					})
				}, function (orderResults) {
					var ordersMap = orderResults.reduce(function (acc, next, idx) {
						return Object.assign({}, acc, _defineProperty({}, orders[idx].referenceID, next));
					}, {});
	
					if (!waitForFill) return cb && cb(null, ordersMap);
	
					var filledOrders = [];
					var retries = fillMaxRetries;
					orderResults = orderResults.map(function (order, idx) {
						return Object.assign({}, order, {
							referenceID: orders[idx].referenceID
						});
					});
					var checkStatus = function checkStatus() {
						if (retries <= 0) return cb && cb(null, orderResults);
						retries--;
	
						Promise.all(orderResults.map(function (order) {
							return new Promise(function (resolve, reject) {
								Order.getByID(order.orderID, userID, function (error, statusDetails) {
									if (error) return resolve();
									ordersMap[order.referenceID] = statusDetails;
									resolve();
								});
							});
						})).then(function () {
							var shouldRetry = false;
							for (var reference in ordersMap) {
								var thisStatus = ordersMap[reference].status;
								if (!thisStatus || thisStatus === Order.STATUSES.NEW || thisStatus === Order.STATUSES.PARTIAL_FILL) {
									shouldRetry = true;
									break;
								}
							}
							if (shouldRetry) {
								setTimeout(checkStatus, fillRetryInterval);
							} else {
								return cb && cb(null, ordersMap);
							}
						});
					};
					setTimeout(checkStatus, fillRetryInterval);
				}, function (err) {
					return cb && cb(err);
				});
			}
	
			// each order is:
			// { side, qty, marketPrice, referenceID }
			// commission schedule is:
			// { baseRate, baseShares, excessRate, fractionalRate, shareAmountRounding, subscription, basketSchedule, passThroughFees }
	
		}, {
			key: "estimateCommission",
			value: function estimateCommission(orders, commissionSchedule) {
				orders = Array.isArray(orders) ? orders : [orders];
				var total = 0;
				var totalFeesOnly = 0;
				var basketPrice = undefined;
	
				var basketSchedule = commissionSchedule.basketSchedule;
	
				if (basketSchedule && basketSchedule.schedule) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = basketSchedule.schedule[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var scheduleItem = _step.value;
	
							if (scheduleItem.basketSize === orders.length) {
								basketPrice = scheduleItem.basketPrice;
								break;
							}
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
				}
	
				var byOrder = {};
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;
	
				try {
					for (var _iterator2 = orders[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var order = _step2.value;
						var qty = order.qty,
						    marketPrice = order.marketPrice,
						    side = order.side,
						    referenceID = order.referenceID;
	
	
						var orderPrice = qty < 1 ? commissionSchedule.fractionalRate : commissionSchedule.baseRate;
						orderPrice += {
							NEAREST: Math.round,
							CEIL: Math.ceil,
							FLOOR: Math.floor
						}[commissionSchedule.shareAmountRounding](Math.max(0, qty - commissionSchedule.baseShares)) * commissionSchedule.excessRate;
	
						var secFee = 0,
						    tafFee = 0;
						if (commissionSchedule.passThroughFees && side === Order.SIDES.SELL) {
							tafFee = qty * marketPrice * TAF_FEE_RATE;
							tafFee = Math.min(TAF_FEE_MAX, tafFee);
							tafFee = Math.max(TAF_FEE_MIN, tafFee);
	
							if (qty >= 1) {
								secFee = Math.floor(qty) * marketPrice * SEC_FEE_RATE;
								secFee = Math.min(SEC_FEE_MAX, secFee);
								secFee = Math.max(SEC_FEE_MIN, secFee);
							}
						}
	
						var orderTotal = orderPrice + secFee + tafFee;
						total += orderTotal;
						totalFeesOnly += secFee + tafFee;
	
						byOrder[referenceID] = {
							total: orderTotal,
							commission: orderPrice,
							fees: {
								sec: secFee,
								taf: tafFee
							}
						};
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
	
				return {
					total: basketPrice ? basketPrice + totalFeesOnly : total,
					multipleOrderDelta: basketPrice ? basketPrice - total : 0,
					byOrder: byOrder
				};
			}
		}, {
			key: "SIDES",
			get: function get() {
				return {
					BUY: "B",
					SELL: "S"
				};
			}
		}, {
			key: "TYPES",
			get: function get() {
				return {
					MARKET: "1",
					LIMIT: "2",
					STOP: "3"
				};
			}
		}, {
			key: "STATUSES",
			get: function get() {
				return {
					NEW: "0",
					PARTIAL_FILL: "1",
					FILL: "2",
					CANCELED: "4",
					REJECTED: "8"
				};
			}
		}]);
	
		return Order;
	}();
	
	exports.default = Order;
	module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Config = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Funding = function () {
	    function Funding() {
	        _classCallCheck(this, Funding);
	    }
	
	    _createClass(Funding, null, [{
	        key: "getFundingMethods",
	        value: function getFundingMethods() {
	            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                userID = _ref.userID,
	                accountID = _ref.accountID,
	                language = _ref.language,
	                minAmount = _ref.minAmount,
	                maxAmount = _ref.maxAmount,
	                amount = _ref.amount,
	                _ref$filters = _ref.filters,
	                filters = _ref$filters === undefined ? {} : _ref$filters;
	
	            var cb = arguments[1];
	
	            if (amount && (minAmount || maxAmount)) throw new Error("\"amount\" is not compatible with \"minAmount\" or \"maxAmount.\"");
	
	            var queryString = "partner=" + _Config.Config.appsPartnerID + "&userID=" + userID + "&accountID=" + accountID;
	            if (language) queryString += "&language=" + language;
	            if (minAmount) queryString += "&minAmount=" + minAmount;
	            if (maxAmount) queryString += "&maxAmount=" + maxAmount;
	            if (amount) queryString += "&amount=" + amount;
	            if (filters.name) queryString += "&filter[name]=" + filters.name;
	            if (filters.country) queryString += "&filter[country]=" + filters.country;
	            if (filters.currency) queryString += "&filter[currency]=" + filters.currency;
	            if (filters.allowed) queryString += "&filter[allowed]=" + filters.allowed;
	
	            (0, _request2.default)({
	                method: "GET",
	                host: _Config.HOSTS.APPS,
	                endpoint: "/funding/methods?" + queryString,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getPastDeposits",
	        value: function getPastDeposits(userID, cb) {
	            (0, _request2.default)({
	                endpoint: "/funding/status",
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data.data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getPricing",
	        value: function getPricing(userID, cb) {
	            return (0, _request2.default)({
	                endpoint: "/funding/ach/subscription-plans",
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                var pricing = data.data.map(function (pricing) {
	                    return [].concat(pricing).sort(function (x, y) {
	                        return x.amount - y.amount;
	                    }).map(function (price) {
	                        return Object.assign({}, price, { amount: Number(price.amount / 100) });
	                    });
	                })[0];
	
	                cb && cb(null, pricing);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "ALLOWED_TYPES",
	        get: function get() {
	            return {
	                DEPOSIT: "DEPOSIT",
	                WITHDRAW: "WITHDRAW",
	                DEPOSIT_AND_WITHDRAW: "DEPOSIT_AND_WITHDRAW"
	            };
	        }
	    }]);
	
	    return Funding;
	}();
	
	exports.default = Funding;
	module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Config = __webpack_require__(3);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Reports = function () {
	    function Reports() {
	        _classCallCheck(this, Reports);
	    }
	
	    _createClass(Reports, null, [{
	        key: "getTransactions",
	        value: function getTransactions(userID, accountNo, startDate, endDate, cb) {
	            var queryString = "?sessionKey=" + _Sessions2.default.get(userID) + "&ReportName=FinTrans" + "&ReportFormat=JSON" + ("&AccountNumber=" + accountNo) + ("&DateStart=" + startDate.toISOString()) + ("&DateEnd=" + endDate.toISOString()) + ("&wlpID=" + _Config.Config.wlpID) + "&LanguageID=en_US";
	
	            (0, _request2.default)({
	                method: "POST",
	                host: _Config.HOSTS.REPORTS,
	                endpoint: "/DriveWealth" + queryString,
	                sessionKey: _Sessions2.default.get(userID),
	                body: {}
	            }, function (data) {
	                cb && cb(null, data.transaction || []);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getPlacedOrders",
	        value: function getPlacedOrders(userID, accountNo, startDate, endDate, cb) {
	            var queryString = "?sessionKey=" + _Sessions2.default.get(userID) + "&ReportName=OrderTrans" + "&ReportFormat=JSON" + ("&AccountNumber=" + accountNo) + ("&DateStart=" + startDate.toISOString()) + ("&DateEnd=" + endDate.toISOString()) + ("&wlpID=" + _Config.Config.wlpID) + "&LanguageID=en_US";
	
	            (0, _request2.default)({
	                method: "POST",
	                host: _Config.HOSTS.REPORTS,
	                endpoint: "/DriveWealth" + queryString,
	                sessionKey: _Sessions2.default.get(userID),
	                body: {}
	            }, function (data) {
	                cb && cb(null, data.transaction);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getStatements",
	        value: function getStatements(userID, accountID, startDate, endDate, cb) {
	            var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=02";
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/statements" + queryString,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getTradeConfirms",
	        value: function getTradeConfirms(userID, accountID, startDate, endDate, cb) {
	            var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=01";
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/statements" + queryString,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getTaxDocuments",
	        value: function getTaxDocuments(userID, accountID, startDate, endDate, cb) {
	            var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=03";
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/statements" + queryString,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "generateDownloadURL",
	        value: function generateDownloadURL(userID, accountID, fileKey, cb) {
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/statements/" + accountID + "/" + fileKey,
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                cb && cb(null, data.url);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getSupportedCountries",
	        value: function getSupportedCountries(cb) {
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/countries"
	            }, function (data) {
	                cb && cb(null, data);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }]);
	
	    return Reports;
	}();
	
	exports.default = Reports;
	module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Sessions = __webpack_require__(6);
	
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
	
	    _createClass(Instrument, [{
	        key: "getQuote",
	        value: function getQuote(cb) {
	            return Instrument.getQuote(this.symbol, cb);
	        }
	    }, {
	        key: "getChartData",
	        value: function getChartData() {
	            if (arguments.length === 4) {
	                return Instrument.getChartData(this.instrumentID, arguments[0], arguments[1], arguments[2], arguments[3]);
	            } else {
	                return Instrument.getChartData(this.instrumentID, arguments[0], arguments[1], arguments[2]);
	            }
	        }
	    }], [{
	        key: "getBySymbol",
	        value: function getBySymbol(symbol, cb) {
	            var symbols = symbol;
	            if (typeof symbol === "string") symbols = [symbol];
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/instruments?symbols=" + symbols.join(','),
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
	                            bid: Number(parsedQuote[1]),
	                            ask: Number(parsedQuote[2])
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
	        key: "getChartData",
	        value: function getChartData(instrumentID, compression) {
	            var cb = void 0,
	                timeParams = void 0;
	            if (arguments.length === 5) {
	                var dateStart = arguments[2].toISOString().replace(/\.\d{3}/, "");
	                var dateEnd = arguments[3].toISOString().replace(/\.\d{3}/, "");
	                timeParams = "dateStart=" + dateStart + "&dateEnd=" + dateEnd;
	                cb = arguments[4];
	            } else {
	                timeParams = "tradingDays=" + arguments[2];
	                cb = arguments[3];
	            }
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/bars?instrumentID=" + instrumentID + "&compression=" + compression + "&" + timeParams,
	                sessionKey: _Sessions2.default.getAny()
	            }, function (data) {
	                cb && cb(null, data.data.split("|"));
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
	    }, {
	        key: "CHART_COMPRESSIONS",
	        get: function get() {
	            return {
	                DAY: 0,
	                MINUTE_1: 1,
	                MINUTE_5: 4,
	                MINUTE_30: 8,
	                HOUR: 9,
	                WEEK: 10
	            };
	        }
	    }]);
	
	    return Instrument;
	}();
	
	exports.default = Instrument;
	module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _Config = __webpack_require__(3);
	
	var _Sessions = __webpack_require__(6);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Account = __webpack_require__(1);
	
	var _Account2 = _interopRequireDefault(_Account);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function () {
	  function User(data) {
	    _classCallCheck(this, User);
	
	    var _arr = ["countryID", "emailAddress", "firstName", "languageID", "lastName", "phoneNumber", "referralCode", "userID", "username", "wlpID", "status", "usCitizen", "lastLoginWhen", "citizenship", "addressLine1", "addressLine2", "city", "stateProvince", "zipPostalCode"];
	
	    for (var _i = 0; _i < _arr.length; _i++) {
	      var key = _arr[_i];
	      this[key] = data[key];
	    }
	
	    this.fullName = data.firstName + " " + data.lastName;
	  }
	
	  _createClass(User, [{
	    key: "getAccounts",
	    value: function getAccounts(cb) {
	      return _Account2.default.getListForUserID(this.userID, cb);
	    }
	  }, {
	    key: "uploadDocument",
	    value: function uploadDocument(file, type, cb) {
	      return User.uploadDocument(this.userID, file, type, cb);
	    }
	
	    // getSettings(userID, cb)
	    // getSettings(userID, key, cb)
	
	  }, {
	    key: "getSettings",
	
	
	    // getSettings(key, cb)
	    // getSettings(cb)
	    value: function getSettings() {
	      var _arguments = Array.prototype.slice.call(arguments),
	          key = _arguments[0],
	          cb = _arguments[1];
	
	      if (arguments.length === 1) {
	        // callback becomes second arg when it's undefined
	        _getAllSettings(this.userID, key);
	      } else {
	        _getSettings(this.userID, key, cb);
	      }
	    }
	  }, {
	    key: "setSetting",
	    value: function setSetting(key, value, cb) {
	      _setSetting(this.userID, key, value, cb);
	    }
	  }, {
	    key: "unsetSetting",
	    value: function unsetSetting(key, cb) {
	      (0, _request2.default)({
	        method: "DELETE",
	        endpoint: "/users/" + this.userID + "/settings/" + key,
	        sessionKey: _Sessions2.default.get(this.userID)
	      }, function () {
	        cb && cb(null);
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "getStatus",
	    value: function getStatus(cb) {
	      (0, _request2.default)({
	        method: "GET",
	        endpoint: "/users/" + this.userID + "/status",
	        sessionKey: _Sessions2.default.get(this.userID)
	      }, function (data) {
	        cb && cb(null, data);
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "logout",
	    value: function logout() {
	      var _this = this;
	
	      (0, _request2.default)({
	        method: "DELETE",
	        endpoint: "/userSessions/" + _Sessions2.default.get(this.userID),
	        sessionKey: _Sessions2.default.get(this.userID)
	      }, function () {
	        _Sessions2.default.remove(_this.userID);
	        cb && cb(null);
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "listCreditCards",
	    value: function listCreditCards(cb) {
	      return _listCreditCards(this.userID, cb);
	    }
	  }, {
	    key: "addCreditCard",
	    value: function addCreditCard(cardToken, cb) {
	      return _addCreditCard(this.userID, cardToken, cb);
	    }
	  }, {
	    key: "removeCreditCard",
	    value: function removeCreditCard(cardID, cb) {
	      return _removeCreditCard(this.userID, cardID, cb);
	    }
	  }], [{
	    key: "getSettings",
	    value: function getSettings(userID, key, cb) {
	      if (!cb) {
	        // callback becomes second arg when it's undefined
	        _getAllSettings(userID, key);
	      } else {
	        _getSettings(userID, key, cb);
	      }
	    }
	  }, {
	    key: "setSetting",
	    value: function setSetting(userID, key, value, cb) {
	      _setSetting(userID, key, value, cb);
	    }
	  }, {
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
	  }, {
	    key: "isUsernameAvailable",
	    value: function isUsernameAvailable(username, cb) {
	      (0, _request2.default)({
	        method: "GET",
	        endpoint: "/users?username=" + username
	      }, function () {
	        cb && cb(null, false);
	      }, function (err, statusCode) {
	        if (statusCode === 404) return cb && cb(null, true);
	        cb && cb(err);
	      });
	    }
	  }, {
	    key: "create",
	    value: function create(_ref) {
	      var username = _ref.username,
	          password = _ref.password,
	          firstName = _ref.firstName,
	          lastName = _ref.lastName,
	          email = _ref.email,
	          languageID = _ref.languageID,
	          _ref$referralCode = _ref.referralCode,
	          referralCode = _ref$referralCode === undefined ? _Config.Config.referralCode : _ref$referralCode,
	          utmCampaign = _ref.utmCampaign,
	          utmContent = _ref.utmContent,
	          utmMedium = _ref.utmMedium,
	          utmSource = _ref.utmSource,
	          utmTerm = _ref.utmTerm;
	      var loginAutomatically = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var cb = arguments[2];
	
	      if (!cb) {
	        cb = loginAutomatically;
	        loginAutomatically = true;
	      }
	
	      (0, _request2.default)({
	        method: "POST",
	        endpoint: "/signups/live",
	        body: {
	          username: username,
	          password: password,
	          firstName: firstName,
	          lastName: lastName,
	          emailAddress1: email,
	          languageID: languageID,
	          wlpID: _Config.Config.wlpID,
	          referralCode: referralCode,
	          utmCampaign: utmCampaign,
	          utmContent: utmContent,
	          utmMedium: utmMedium,
	          utmSource: utmSource,
	          utmTerm: utmTerm
	        }
	      }, function (data) {
	        if (loginAutomatically) {
	          return User.login(username, password, cb);
	        } else {
	          cb && cb(null, data);
	        }
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "update",
	    value: function update(_ref2, cb) {
	      var userID = _ref2.userID,
	          addressLine1 = _ref2.addressLine1,
	          addressLine2 = _ref2.addressLine2,
	          city = _ref2.city,
	          countryID = _ref2.countryID,
	          email = _ref2.email,
	          firstName = _ref2.firstName,
	          lastName = _ref2.lastName,
	          languageID = _ref2.languageID,
	          phoneHome = _ref2.phoneHome,
	          phoneWork = _ref2.phoneWork,
	          phone = _ref2.phone,
	          stateProvince = _ref2.stateProvince,
	          zipPostalCode = _ref2.zipPostalCode;
	
	      return (0, _request2.default)({
	        method: "PUT",
	        endpoint: "/users/" + userID,
	        sessionKey: _Sessions2.default.get(userID),
	        body: {
	          addressLine1: addressLine1,
	          addressLine2: addressLine2,
	          city: city,
	          countryID: countryID,
	          emailAddress1: email,
	          firstName: firstName,
	          lastName: lastName,
	          languageID: languageID,
	          phoneHome: phoneHome,
	          phoneWork: phoneWork,
	          phoneMobile: phone,
	          stateProvince: stateProvince,
	          zipPostalCode: zipPostalCode
	        }
	      }, function (data) {
	        cb && cb(null, data);
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "uploadDocument",
	    value: function uploadDocument(userID, file, type, cb) {
	      var body = new FormData();
	      body.append("token", userID);
	      body.append("documentType", type);
	      body.append("documentImage", file);
	
	      return (0, _request2.default)({
	        method: "POST",
	        endpoint: "/documents",
	        sessionKey: _Sessions2.default.get(userID),
	        addlHeaders: {
	          "Content-Type": "multipart/form-data"
	        },
	        body: body
	      }, function (data) {
	        cb && cb(null, data);
	      }, function (err) {
	        return cb && cb(err);
	      });
	    }
	  }, {
	    key: "listCreditCards",
	    value: function listCreditCards(userID, cb) {
	      return _listCreditCards(userID, cb);
	    }
	  }, {
	    key: "addCreditCard",
	    value: function addCreditCard(userID, cardToken, cb) {
	      return _addCreditCard(userID, cardToken, cb);
	    }
	  }, {
	    key: "removeCreditCard",
	    value: function removeCreditCard(userID, cardID, cb) {
	      return _removeCreditCard(userID, cardID, cb);
	    }
	  }, {
	    key: "STATUSES",
	    get: function get() {
	      return {
	        PENDING: 1,
	        APPROVED: 2,
	        REJECTED: 3,
	        REVOKED: 4,
	        CLOSED: 5
	      };
	    }
	  }, {
	    key: "DOCUMENT_TYPES",
	    get: function get() {
	      return {
	        PHOTO_ID: "Picture ID",
	        PROOF_OF_ADDRESS: "Proof of address",
	        PHOTO_ID_WITH_PROOF_OF_ADDRESS: "Picture ID_Proof of address"
	      };
	    }
	  }]);
	
	  return User;
	}();
	
	exports.default = User;
	
	
	function _listCreditCards(userID, cb) {
	  return (0, _request2.default)({
	    method: "GET",
	    endpoint: "/users/" + userID + "/credit-cards",
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _addCreditCard(userID, cardToken, cb) {
	  return (0, _request2.default)({
	    method: "POST",
	    endpoint: "/users/" + userID + "/credit-cards",
	    sessionKey: _Sessions2.default.get(userID),
	    body: { cardToken: cardToken }
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _removeCreditCard(userID, cardID, cb) {
	  return (0, _request2.default)({
	    method: "DELETE",
	    endpoint: "/users/" + userID + "/credit-cards/" + cardID,
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _getSettings(userID, key, cb) {
	  (0, _request2.default)({
	    method: "GET",
	    endpoint: "/users/" + userID + "/settings/" + key,
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data.value);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _getAllSettings(userID, cb) {
	  (0, _request2.default)({
	    method: "GET",
	    endpoint: "/users/" + userID + "/settings",
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    var formattedData = {};
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var setting = _step.value;
	
	        formattedData[setting.key] = setting.value;
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
	
	    cb && cb(null, formattedData);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _setSetting(userID, key, value, cb) {
	  (0, _request2.default)({
	    method: "POST",
	    endpoint: "/users/" + userID + "/settings",
	    sessionKey: _Sessions2.default.get(userID),
	    body: {
	      key: key, value: value
	    }
	  }, function () {
	    cb && cb(null);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYWQ0MjU1YjJlYmYyMjJlOGYzNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJrZXkiLCJ0eXBlIiwiY2IiLCJtZXRob2QiLCJlbmRwb2ludCIsInVzZXJJRCIsImFjY291bnRJRCIsInNlc3Npb25LZXkiLCJnZXQiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsImVyciIsInF1ZXJ5U3RyaW5nIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJzbGljZSIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwiZ2V0VHJhbnNhY3Rpb25zIiwiZ2V0UGxhY2VkT3JkZXJzIiwiZ2V0U3RhdGVtZW50cyIsImdldFRheERvY3VtZW50cyIsImdldFRyYWRlQ29uZmlybXMiLCJmaWxlS2V5IiwiZ2VuZXJhdGVEb3dubG9hZFVSTCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJhZGRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsInBsYW5JRCIsInBheW1lbnRJRCIsInBhcmFtcyIsInN0YXJ0c1dpdGgiLCJrZXlzIiwiZmlsdGVyIiwicmVkdWNlIiwieCIsInkiLCJjaGFuZ2VTdWJzY3JpcHRpb24iLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiUEVORElORyIsIk9QRU4iLCJPUEVOX05PX05FV19UUkFERVMiLCJDTE9TRUQiLCJMSVZFIiwib25TdWNjZXNzIiwib25FcnJvciIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsImFjYyIsIm5leHQiLCJpZHgiLCJyZWZlcmVuY2VJRCIsImZpbGxlZE9yZGVycyIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzRGV0YWlscyIsInRoZW4iLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJwcmljaW5nIiwiY29uY2F0Iiwic29ydCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldExpc3RGb3JVc2VySUQiLCJmaWxlIiwidXBsb2FkRG9jdW1lbnQiLCJfZ2V0QWxsU2V0dGluZ3MiLCJfZ2V0U2V0dGluZ3MiLCJ2YWx1ZSIsIl9zZXRTZXR0aW5nIiwicmVtb3ZlIiwiX2xpc3RDcmVkaXRDYXJkcyIsImNhcmRUb2tlbiIsIl9hZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwiX3JlbW92ZUNyZWRpdENhcmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O21C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LFdBQU1BLEdBQUcsSUFBSCxDQUFOO0FBQ0EsSUFURCxFQVNHO0FBQUEsWUFBT0EsTUFBTUEsR0FBR1UsR0FBSCxDQUFiO0FBQUEsSUFUSDtBQVVBIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmFkNDI1NWIyZWJmMjIyZThmMzYiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImFjY291bnRUeXBlXCIsXG5cdFx0XHRcImN1cnJlbmN5SURcIixcblx0XHRcdFwiaWJJRFwiLFxuXHRcdFx0XCJtYXJnaW5cIixcblx0XHRcdFwibmlja25hbWVcIixcblx0XHRcdFwib3BlbmVkV2hlblwiLFxuXHRcdFx0XCJwYXR0ZXJuRGF5VHJhZGVzXCIsXG5cdFx0XHRcInN0YXR1c1wiLFxuXHRcdFx0XCJ0cmFkaW5nVHlwZVwiLFxuXHRcdFx0XCJhY2NvdW50TWdtdFR5cGVcIixcblx0XHRcdFwiY29tbWlzc2lvblNjaGVkdWxlXCIsXG5cdFx0XSkge1xuXHRcdFx0dGhpc1trZXldID0gZGF0YVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcblx0XHRpZiAodHlwZSAmJiAhY2IpIHtcblx0XHRcdGNiID0gdHlwZTtcblx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cblx0XHRcdGlmIChkYXRhLm9yZGVycykge1xuXHRcdFx0XHRkYXRhLm9yZGVycyA9IGRhdGEub3JkZXJzLm1hcChmdW5jdGlvbiAob3JkZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE9yZGVyKG9yZGVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZ2V0UGVyZm9ybWFuY2Uoc3RhcnREYXRlLCBlbmREYXRlLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UoY2IpXG5cdGdldFBlcmZvcm1hbmNlKCkge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0bGV0IGNiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IFsgc3RhcnREYXRlLCBlbmREYXRlIF0gPSBhcmd1bWVudHM7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSAgYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMF07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuXHRcdGRhdGEudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0ZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXksIGNiKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9IH07XG5cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRCwgdHlwZSwgZGF0YSwgY2IpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IGAvc2lnbnVwcy9wcmFjdGljZWBcblx0XHRcdFx0OiBgL3NpZ251cHMvbGl2ZWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjaGFuZ2VTdWJzY3JpcHRpb24gKG1ldGhvZCwge1xuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50SUQsXG5cdFx0cGxhbklELFxuXHRcdHBheW1lbnRJRCxcblx0fSwgY2IpIHtcblxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG1ldGhvZCAhPT0gXCJERUxFVEVcIiAmJiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdHJlcXVlc3QoXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpXG5cdFx0XHQuZmlsdGVyKGtleSA9PiBwYXJhbXNba2V5XSlcblx0XHRcdC5yZWR1Y2UoKHgsIHkpID0+IE9iamVjdC5hc3NpZ24oe30sIHgsIHsgW3ldOiBwYXJhbXNbeV0gfSksIHt9KSxcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4ge1xuXHRcdFx0XHRjYiAmJiBjYihlcnIpO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbiAob3B0aW9ucywgY2IpIHtcblx0XHRBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucywgY2IpO1xuXHR9XG5cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbiAob3B0aW9ucywgY2IpIHtcblx0XHRBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zLCBjYik7XG5cdH1cblxuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMsIGNiKTtcblx0fVxuXG5cdGV4dHJhY3RJRHMgKG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0fSk7XG5cdH1cblxuXHRhZGRTdWJzY3JpcHRpb24gKG9wdGlvbnMsIGNiKSB7XG5cdFx0QWNjb3VudC5hZGRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpLCBjYik7XG5cdH1cblxuXHR1cGRhdGVTdWJzY3JpcHRpb24gKG9wdGlvbnMsIGNiKSB7XG5cdFx0QWNjb3VudC51cGRhdGVTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpLCBjYik7XG5cdH1cblxuXHRjYW5jZWxTdWJzY3JpcHRpb24gKGNiKSB7XG5cdFx0QWNjb3VudC5jYW5jZWxTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCksIGNiKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsImltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbiAgICBob3N0ID0gSE9TVFMuQVBJLFxufSwgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uS2V5KSB7XG4gICAgICAgIGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuICAgIH1cblxuICAgIGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG4gICAgaWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcbiAgICAgICAgaWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yLCBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAocmVzQm9keSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZSA9PSA0MDEgPyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlKSA6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICB3bHBJRDogbnVsbCxcbiAgICBhcHBzUGFydG5lcklEOiBudWxsLFxuICAgIHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcbiAgICBBUEk6IFwiYXBpXCIsXG4gICAgQVBQUzogXCJhcHBzXCIsXG4gICAgUkVQT1JUUzogXCJyZXBvcnRzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG4gICAgVUFUOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcbiAgICBlbnYsXG4gICAgaHR0cEltcGwsXG4gICAgYXBwVHlwZUlELFxuICAgIGFwcFZlcnNpb24sXG4gICAgd2xwSUQgPSBcIkRXXCIsXG4gICAgYXBwc1BhcnRuZXJJRCxcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG4gICAgQ29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBEcml2ZVdlYWx0aEVycm9yLFxuICAgIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5jb25zdCBTRUNfRkVFX1JBVEUgPSAwLjAwMDAyMzE7XG5jb25zdCBTRUNfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBTRUNfRkVFX01BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbmNvbnN0IFRBRl9GRUVfUkFURSA9IDAuMDAwMTE5O1xuY29uc3QgVEFGX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgVEFGX0ZFRV9NQVggPSA1Ljk1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcIm9yZGVySURcIixcblx0XHRcdFwiYWNjb3VudElEXCIsXG5cdFx0XHRcInVzZXJJRFwiLFxuXHRcdFx0XCJjdW1RdHlcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImNvbW1lbnRcIixcblx0XHRcdFwiY29tbWlzc2lvblwiLFxuXHRcdFx0XCJjcmVhdGVkQnlJRFwiLFxuXHRcdFx0XCJjcmVhdGVkV2hlblwiLFxuXHRcdFx0XCJleGVjdXRlZFdoZW5cIixcblx0XHRcdFwiZ3Jvc3NUcmFkZUFtdFwiLFxuXHRcdFx0XCJpbnN0cnVtZW50SURcIixcblx0XHRcdFwibGVhdmVzUXR5XCIsXG5cdFx0XHRcIm9yZGVyTm9cIixcblx0XHRcdFwib3JkZXJRdHlcIixcblx0XHRcdFwic2lkZVwiLFxuXHRcdFx0XCJhdXRvU3RvcFwiLFxuXHRcdFx0XCJzeW1ib2xcIixcblx0XHRcdFwiZWZmZWN0aXZlUHJpY2VcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGUgfHwgZGF0YS5vcmRlclR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0Y2FuY2VsKGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHt0aGlzLm9yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNhbmNlbChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IFNJREVTKCkgeyByZXR1cm4ge1xuXHRcdEJVWTogXCJCXCIsXG5cdFx0U0VMTDogXCJTXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuXHRcdE1BUktFVDogXCIxXCIsXG5cdFx0TElNSVQ6IFwiMlwiLFxuXHRcdFNUT1A6IFwiM1wiLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fSB9XG5cblx0c3RhdGljIGdldEJ5SUQob3JkZXJJRCwgdXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIG5ldyBPcmRlcihkYXRhKSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSh0eXBlLCB7XG5cdFx0YWNjb3VudElELFxuXHRcdGFjY291bnRObyxcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudFR5cGUsXG5cdH0sIHtcblx0XHRpbnN0cnVtZW50LFxuXHRcdHNpZGUsXG5cdFx0cXR5LFxuXHRcdGFtb3VudENhc2gsXG5cdFx0Y29tbWVudCxcblx0XHRhdXRvU3RvcCxcblx0XHRwcmljZSxcblx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSAxMDAwLFxuXHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdH0sIGNiKSB7XG5cdFx0aWYgKGFtb3VudENhc2ggJiYgcXR5KSB0aHJvdyBuZXcgRXJyb3IoYFwicXR5XCIgYW5kIFwiYW1vdW50Q2FzaFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuYCk7XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiAhcHJpY2UpIHRocm93IG5ldyBFcnJvcihgTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcInByaWNlLlwiYCk7XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiBhdXRvU3RvcCkgdGhyb3cgbmV3IEVycm9yKGBcImF1dG9TdG9wXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLmApO1xuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSA/IHF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogYW1vdW50Q2FzaCA/IGFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0fSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCkgZmlsbE1heFJldHJpZXMgPSAxO1xuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIGRhdGEub3JkZXJJRCk7XG5cblx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0cmV0cmllcy0tO1xuXHRcdFx0XHRPcmRlci5nZXRCeUlEKGRhdGEub3JkZXJJRCwgdXNlcklELCAoZXJyLCBvcmRlcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG5cblx0XHRcdFx0XHRpZiAob3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVcgJiYgb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTEwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlQ2FydCh7XG5cdFx0YWNjb3VudElELFxuXHRcdGFjY291bnRObyxcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudFR5cGUsXG5cdH0sIHtcblx0XHRvcmRlcnMsXG5cdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuXHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdH0sIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgb3JkZXIuaW5zdHJ1bWVudC5pZCB8fCBvcmRlci5pbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogT3JkZXIuVFlQRVMuTUFSS0VULFxuXHRcdFx0XHRzaWRlOiBPcmRlci5TSURFUy5CVVksXG5cdFx0XHRcdG9yZGVyUXR5OiBvcmRlci5xdHkgPyBvcmRlci5xdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IG9yZGVyLmFtb3VudENhc2ggPyBvcmRlci5hbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50OiBvcmRlci5jb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcDogb3JkZXIuYXV0b1N0b3AsXG5cdFx0XHR9KSksXG5cdFx0fSwgKG9yZGVyUmVzdWx0cykgPT4ge1xuXHRcdFx0Y29uc3Qgb3JkZXJzTWFwID0gb3JkZXJSZXN1bHRzLnJlZHVjZShcblx0XHRcdFx0KGFjYywgbmV4dCwgaWR4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFx0W29yZGVyc1tpZHhdLnJlZmVyZW5jZUlEXTogbmV4dCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0e30sXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXJzTWFwKTtcblxuXHRcdFx0Y29uc3QgZmlsbGVkT3JkZXJzID0gW107XG5cdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0b3JkZXJSZXN1bHRzID0gb3JkZXJSZXN1bHRzLm1hcCgob3JkZXIsIGlkeCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXIsIHtcblx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0fSkpO1xuXHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlclJlc3VsdHMpO1xuXHRcdFx0XHRyZXRyaWVzLS07XG5cblx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0b3JkZXJSZXN1bHRzLm1hcChvcmRlciA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKG9yZGVyLm9yZGVySUQsIHVzZXJJRCwgKGVycm9yLCBzdGF0dXNEZXRhaWxzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IHN0YXR1c0RldGFpbHM7XG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pKVxuXHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBzaG91bGRSZXRyeSA9IGZhbHNlO1xuXHRcdFx0XHRcdGZvciAobGV0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRoaXNTdGF0dXMgPSBvcmRlcnNNYXBbcmVmZXJlbmNlXS5zdGF0dXM7XG5cdFx0XHRcdFx0XHRpZiAoIXRoaXNTdGF0dXNcblx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdHx8IHRoaXNTdGF0dXMgPT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzaG91bGRSZXRyeSkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXJzTWFwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHQvLyBlYWNoIG9yZGVyIGlzOlxuXHQvLyB7IHNpZGUsIHF0eSwgbWFya2V0UHJpY2UsIHJlZmVyZW5jZUlEIH1cblx0Ly8gY29tbWlzc2lvbiBzY2hlZHVsZSBpczpcblx0Ly8geyBiYXNlUmF0ZSwgYmFzZVNoYXJlcywgZXhjZXNzUmF0ZSwgZnJhY3Rpb25hbFJhdGUsIHNoYXJlQW1vdW50Um91bmRpbmcsIHN1YnNjcmlwdGlvbiwgYmFza2V0U2NoZWR1bGUsIHBhc3NUaHJvdWdoRmVlcyB9XG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24ob3JkZXJzLCBjb21taXNzaW9uU2NoZWR1bGUpIHtcblx0XHRvcmRlcnMgPSBBcnJheS5pc0FycmF5KG9yZGVycykgPyBvcmRlcnMgOiBbb3JkZXJzXTtcblx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdGxldCB0b3RhbEZlZXNPbmx5ID0gMDtcblx0XHRsZXQgYmFza2V0UHJpY2UgPSB1bmRlZmluZWQ7XG5cblx0XHRjb25zdCB7IGJhc2tldFNjaGVkdWxlIH0gPSBjb21taXNzaW9uU2NoZWR1bGU7XG5cdFx0aWYgKGJhc2tldFNjaGVkdWxlICYmIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHNjaGVkdWxlSXRlbSBvZiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0XHRpZiAoc2NoZWR1bGVJdGVtLmJhc2tldFNpemUgPT09IG9yZGVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHRiYXNrZXRQcmljZSA9IHNjaGVkdWxlSXRlbS5iYXNrZXRQcmljZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGJ5T3JkZXIgPSB7fTtcblx0XHRmb3IgKGNvbnN0IG9yZGVyIG9mIG9yZGVycykge1xuXHRcdFx0Y29uc3QgeyBxdHksIG1hcmtldFByaWNlLCBzaWRlLCByZWZlcmVuY2VJRCB9ID0gb3JkZXI7XG5cblx0XHRcdGxldCBvcmRlclByaWNlID0gcXR5IDwgMVxuXHRcdFx0XHQ/IGNvbW1pc3Npb25TY2hlZHVsZS5mcmFjdGlvbmFsUmF0ZVxuXHRcdFx0XHQ6IGNvbW1pc3Npb25TY2hlZHVsZS5iYXNlUmF0ZTtcblx0XHRcdG9yZGVyUHJpY2UgKz0gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0TkVBUkVTVDogTWF0aC5yb3VuZCxcblx0XHRcdFx0XHRDRUlMOiBNYXRoLmNlaWwsXG5cdFx0XHRcdFx0RkxPT1I6IE1hdGguZmxvb3IsXG5cdFx0XHRcdH1bY29tbWlzc2lvblNjaGVkdWxlLnNoYXJlQW1vdW50Um91bmRpbmddKFxuXHRcdFx0XHRcdE1hdGgubWF4KDAsIHF0eSAtIGNvbW1pc3Npb25TY2hlZHVsZS5iYXNlU2hhcmVzKVxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwLCB0YWZGZWUgPSAwO1xuXHRcdFx0aWYgKGNvbW1pc3Npb25TY2hlZHVsZS5wYXNzVGhyb3VnaEZlZXMgJiYgc2lkZSA9PT0gT3JkZXIuU0lERVMuU0VMTCkge1xuXHRcdFx0XHR0YWZGZWUgPSBxdHkgKiBtYXJrZXRQcmljZSAqIFRBRl9GRUVfUkFURTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5taW4oVEFGX0ZFRV9NQVgsIHRhZkZlZSk7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWF4KFRBRl9GRUVfTUlOLCB0YWZGZWUpO1xuXG5cdFx0XHRcdGlmIChxdHkgPj0gMSkge1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGguZmxvb3IocXR5KSAqIG1hcmtldFByaWNlICogU0VDX0ZFRV9SQVRFO1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGgubWluKFNFQ19GRUVfTUFYLCBzZWNGZWUpO1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGgubWF4KFNFQ19GRUVfTUlOLCBzZWNGZWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9yZGVyVG90YWwgPSBvcmRlclByaWNlICsgc2VjRmVlICsgdGFmRmVlO1xuXHRcdFx0dG90YWwgKz0gb3JkZXJUb3RhbDtcblx0XHRcdHRvdGFsRmVlc09ubHkgKz0gc2VjRmVlICsgdGFmRmVlO1xuXG5cdFx0XHRieU9yZGVyW3JlZmVyZW5jZUlEXSA9IHtcblx0XHRcdFx0dG90YWw6IG9yZGVyVG90YWwsXG5cdFx0XHRcdGNvbW1pc3Npb246IG9yZGVyUHJpY2UsXG5cdFx0XHRcdGZlZXM6IHtcblx0XHRcdFx0XHRzZWM6IHNlY0ZlZSxcblx0XHRcdFx0XHR0YWY6IHRhZkZlZSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvdGFsOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSArIHRvdGFsRmVlc09ubHkpIDogdG90YWwsXG5cdFx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlIC0gdG90YWwpIDogMCxcblx0XHRcdGJ5T3JkZXIsXG5cdFx0fTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09yZGVyLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXG4gICAgc3RhdGljIGdldCBBTExPV0VEX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBERVBPU0lUOiBcIkRFUE9TSVRcIixcbiAgICAgICAgV0lUSERSQVc6IFwiV0lUSERSQVdcIixcbiAgICAgICAgREVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgbWluQW1vdW50LFxuICAgICAgICBtYXhBbW91bnQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZmlsdGVycyA9IHt9LFxuICAgIH0gPSB7fSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudCAmJiAobWluQW1vdW50IHx8IG1heEFtb3VudCkpIHRocm93IG5ldyBFcnJvcihgXCJhbW91bnRcIiBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFwibWluQW1vdW50XCIgb3IgXCJtYXhBbW91bnQuXCJgKTtcblxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBgcGFydG5lcj0ke0NvbmZpZy5hcHBzUGFydG5lcklEfSZ1c2VySUQ9JHt1c2VySUR9JmFjY291bnRJRD0ke2FjY291bnRJRH1gO1xuICAgICAgICBpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuICAgICAgICBpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuICAgICAgICBpZiAobWF4QW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1heEFtb3VudD0ke21heEFtb3VudH1gO1xuICAgICAgICBpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuICAgICAgICBpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jb3VudHJ5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjb3VudHJ5XT0ke2ZpbHRlcnMuY291bnRyeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuQVBQUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG5cdHN0YXRpYyBnZXRQcmljaW5nICh1c2VySUQsIGNiKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvYWNoL3N1YnNjcmlwdGlvbi1wbGFuc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjb25zdCBwcmljaW5nID0gZGF0YS5kYXRhLm1hcChmdW5jdGlvbiAocHJpY2luZykge1xuXHRcdFx0XHRyZXR1cm4gW10uY29uY2F0KHByaWNpbmcpXG5cdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHQubWFwKHByaWNlID0+IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0eyBhbW91bnQ6IE51bWJlcihwcmljZS5hbW91bnQgLyAxMDApIH0sXG5cdFx0XHRcdCkpO1xuXHRcdFx0fSlbMF07XG5cblx0XHRcdGNiICYmIGNiKG51bGwsIHByaWNpbmcpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblxuICAgIHN0YXRpYyBnZXRUcmFuc2FjdGlvbnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9RmluVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbiB8fCBbXSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPU9yZGVyVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RhdGVtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDJgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VHJhZGVDb25maXJtcyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDFgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGF4RG9jdW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wM2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZURvd25sb2FkVVJMKHVzZXJJRCwgYWNjb3VudElELCBmaWxlS2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnVybCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvY291bnRyaWVzYCxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXQgQ0hBUlRfQ09NUFJFU1NJT05TKCkgeyByZXR1cm4ge1xuICAgICAgICBEQVk6IDAsXG4gICAgICAgIE1JTlVURV8xOiAxLFxuICAgICAgICBNSU5VVEVfNTogNCxcbiAgICAgICAgTUlOVVRFXzMwOiA4LFxuICAgICAgICBIT1VSOiA5LFxuICAgICAgICBXRUVLOiAxMFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZWFyY2goY3JpdGVyaWEsIGNiKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuICAgICAgICBpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRRdW90ZShjYikge1xuICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlclBhc3NlZE9uZVN5bWJvbCkgb2JqID0gb2JqW3N5bWJvbFswXV07XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBvYmopO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcnREYXRhKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbikge1xuICAgICAgICBsZXQgY2IsIHRpbWVQYXJhbXM7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbmQgICA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1s0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YS5zcGxpdChcInxcIikpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImNvdW50cnlJRFwiLFxuICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIixcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCIsXG4gICAgICAgICAgICBcImxhbmd1YWdlSURcIixcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwicmVmZXJyYWxDb2RlXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJ3bHBJRFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidXNDaXRpemVuXCIsXG4gICAgICAgICAgICBcImxhc3RMb2dpbldoZW5cIixcbiAgICAgICAgICAgIFwiY2l0aXplbnNoaXBcIixcblx0XHRcdFwiYWRkcmVzc0xpbmUxXCIsXG5cdFx0XHRcImFkZHJlc3NMaW5lMlwiLFxuXHRcdFx0XCJjaXR5XCIsXG5cdFx0XHRcInN0YXRlUHJvdmluY2VcIixcblx0XHRcdFwiemlwUG9zdGFsQ29kZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG4gICAgZ2V0QWNjb3VudHMoY2IpIHtcbiAgICAgICAgcmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCwgY2IpO1xuICAgIH1cblxuXHR1cGxvYWREb2N1bWVudChmaWxlLCB0eXBlLCBjYikge1xuICAgICAgICByZXR1cm4gVXNlci51cGxvYWREb2N1bWVudCh0aGlzLnVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpO1xuICAgIH1cblxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwgY2IpXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKSB7XG4gICAgXHRpZiAoIWNiKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0XHR9XG4gICAgfVxuXG5cdC8vIGdldFNldHRpbmdzKGtleSwgY2IpXG5cdC8vIGdldFNldHRpbmdzKGNiKVxuICAgIGdldFNldHRpbmdzKCkge1xuICAgIFx0Y29uc3QgWyBrZXksIGNiIF0gPSBhcmd1bWVudHM7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHRoaXMudXNlcklELCBrZXksIGNiKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcblx0fVxuXG4gICAgc2V0U2V0dGluZyhrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcbiAgICB9XG5cbiAgICB1bnNldFNldHRpbmcoa2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFN0YXR1cyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBQRU5ESU5HOiAxLFxuICAgICAgICBBUFBST1ZFRDogMixcbiAgICAgICAgUkVKRUNURUQ6IDMsXG4gICAgICAgIFJFVk9LRUQ6IDQsXG4gICAgICAgIENMT1NFRDogNSxcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgVXNlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuICAgICAgICAgICAgICAgIGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICBvc1R5cGU6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgc2NyUmVzOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBpcEFkZHJlc3M6IFwidW5rbm93blwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5zYXZlKGRhdGEudXNlcklELCBkYXRhLnNlc3Npb25LZXkpO1xuICAgICAgICAgICAgVXNlci5nZXRCeVVzZXJJRChkYXRhLnVzZXJJRCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHVzZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSwgKGVyciwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIHRydWUpO1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgIHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG4gICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgdXRtVGVybSxcbiAgICB9LCBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IGxvZ2luQXV0b21hdGljYWxseTtcbiAgICAgICAgICAgIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgICAgICAgICAgd2xwSUQ6IENvbmZpZy53bHBJRCxcbiAgICAgICAgICAgICAgICByZWZlcnJhbENvZGUsXG4gICAgICAgICAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgICAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgICAgICAgICAgdXRtU291cmNlLFxuICAgICAgICAgICAgICAgIHV0bVRlcm0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZVxuXHR9LCBjYikge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGVcblx0XHRcdH0sXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IERPQ1VNRU5UX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBQSE9UT19JRDogXCJQaWN0dXJlIElEXCIsXG5cdFx0UFJPT0ZfT0ZfQUREUkVTUzogXCJQcm9vZiBvZiBhZGRyZXNzXCIsXG5cdFx0UEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTOiBcIlBpY3R1cmUgSURfUHJvb2Ygb2YgYWRkcmVzc1wiLFxuICAgIH0gfVxuXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQsIGZpbGUsIHR5cGUsIGNiKSB7XG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZG9jdW1lbnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXHRcblx0bGlzdENyZWRpdENhcmRzKGNiKSB7XG4gICAgXHRyZXR1cm4gX2xpc3RDcmVkaXRDYXJkcyh0aGlzLnVzZXJJRCwgY2IpO1xuXHR9XG5cdFxuXHRzdGF0aWMgbGlzdENyZWRpdENhcmRzKHVzZXJJRCwgY2IpIHtcbiAgICBcdHJldHVybiBfbGlzdENyZWRpdENhcmRzKHVzZXJJRCwgY2IpO1xuXHR9XG5cdFxuXHRhZGRDcmVkaXRDYXJkKGNhcmRUb2tlbiwgY2IpIHtcblx0XHRyZXR1cm4gX2FkZENyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRUb2tlbiwgY2IpO1xuXHR9XG5cdFxuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRUb2tlbiwgY2IpIHtcblx0XHRyZXR1cm4gX2FkZENyZWRpdENhcmQodXNlcklELCBjYXJkVG9rZW4sIGNiKTtcblx0fVxuXHRcblx0cmVtb3ZlQ3JlZGl0Q2FyZChjYXJkSUQsIGNiKSB7XG4gXHRcdHJldHVybiBfcmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElELCBjYik7XG5cdH1cblx0XG5cdHN0YXRpYyByZW1vdmVDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZElELCBjYikge1xuXHRcdHJldHVybiBfcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRJRCwgY2IpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9saXN0Q3JlZGl0Q2FyZHModXNlcklELCBjYikge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdH0sIGRhdGEgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59XG5cbmZ1bmN0aW9uIF9hZGRDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZFRva2VuLCBjYikge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7IGNhcmRUb2tlbiB9XG5cdH0sIGRhdGEgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59XG5cbmZ1bmN0aW9uIF9yZW1vdmVDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZElELCBjYikge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHMvJHtjYXJkSUR9YCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCBkYXRhID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfZ2V0U2V0dGluZ3MgKHVzZXJJRCwga2V5LCBjYikge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdH0sIChkYXRhKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS52YWx1ZSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuZnVuY3Rpb24gX2dldEFsbFNldHRpbmdzICh1c2VySUQsIGNiKSB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGxldCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0Zm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG5cdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0fVxuXHRcdGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59XG5cbmZ1bmN0aW9uIF9zZXRTZXR0aW5nICh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7XG5cdFx0XHRrZXksIHZhbHVlLFxuXHRcdH0sXG5cdH0sICgpID0+IHtcblx0XHRjYiAmJiBjYihudWxsKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9