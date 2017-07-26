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
			key: "getSubscription",
			value: function getSubscription(cb) {
				Account.getSubscription(this.extractIDs(), cb);
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
					body: method.startsWith("P") && _defineProperty({
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
			key: "getSubscription",
			value: function getSubscription(options, cb) {
				Account.changeSubscription("GET", options, cb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1ZDQyMGQ0NzgwNzBjOGQ1MjBlOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJrZXkiLCJ0eXBlIiwiY2IiLCJtZXRob2QiLCJlbmRwb2ludCIsInVzZXJJRCIsImFjY291bnRJRCIsInNlc3Npb25LZXkiLCJnZXQiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsImVyciIsInF1ZXJ5U3RyaW5nIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJzbGljZSIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwiZ2V0VHJhbnNhY3Rpb25zIiwiZ2V0UGxhY2VkT3JkZXJzIiwiZ2V0U3RhdGVtZW50cyIsImdldFRheERvY3VtZW50cyIsImdldFRyYWRlQ29uZmlybXMiLCJmaWxlS2V5IiwiZ2VuZXJhdGVEb3dubG9hZFVSTCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsInBsYW5JRCIsInBheW1lbnRJRCIsInBhcmFtcyIsInN0YXJ0c1dpdGgiLCJrZXlzIiwiZmlsdGVyIiwicmVkdWNlIiwieCIsInkiLCJjaGFuZ2VTdWJzY3JpcHRpb24iLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiUEVORElORyIsIk9QRU4iLCJPUEVOX05PX05FV19UUkFERVMiLCJDTE9TRUQiLCJMSVZFIiwib25TdWNjZXNzIiwib25FcnJvciIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsImFjYyIsIm5leHQiLCJpZHgiLCJyZWZlcmVuY2VJRCIsImZpbGxlZE9yZGVycyIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzRGV0YWlscyIsInRoZW4iLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJwcmljaW5nIiwiY29uY2F0Iiwic29ydCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldExpc3RGb3JVc2VySUQiLCJmaWxlIiwidXBsb2FkRG9jdW1lbnQiLCJfZ2V0QWxsU2V0dGluZ3MiLCJfZ2V0U2V0dGluZ3MiLCJ2YWx1ZSIsIl9zZXRTZXR0aW5nIiwicmVtb3ZlIiwiX2xpc3RDcmVkaXRDYXJkcyIsImNhcmRUb2tlbiIsIl9hZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwiX3JlbW92ZUNyZWRpdENhcmQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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QUE4QkwsR0FBOUIsRUFBbUNxUSxLQUFuQyxFQUEwQ25RLEVBQTFDLEVBQThDO0FBQzdDLDBCQUFRO0FBQ1BDLGFBQVEsTUFERDtBQUVQQywyQkFBb0JDLE1BQXBCLGNBRk87QUFHUEUsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYixDQUhMO0FBSVAyQyxXQUFNO0FBQ0xoRCxlQURLLEVBQ0FxUTtBQURBO0FBSkMsSUFBUixFQU9HLFlBQU07QUFDUm5RLFdBQU1BLEdBQUcsSUFBSCxDQUFOO0FBQ0EsSUFURCxFQVNHO0FBQUEsWUFBT0EsTUFBTUEsR0FBR1UsR0FBSCxDQUFiO0FBQUEsSUFUSDtBQVVBIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWQ0MjBkNDc4MDcwYzhkNTIwZTgiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImFjY291bnRUeXBlXCIsXG5cdFx0XHRcImN1cnJlbmN5SURcIixcblx0XHRcdFwiaWJJRFwiLFxuXHRcdFx0XCJtYXJnaW5cIixcblx0XHRcdFwibmlja25hbWVcIixcblx0XHRcdFwib3BlbmVkV2hlblwiLFxuXHRcdFx0XCJwYXR0ZXJuRGF5VHJhZGVzXCIsXG5cdFx0XHRcInN0YXR1c1wiLFxuXHRcdFx0XCJ0cmFkaW5nVHlwZVwiLFxuXHRcdFx0XCJhY2NvdW50TWdtdFR5cGVcIixcblx0XHRcdFwiY29tbWlzc2lvblNjaGVkdWxlXCIsXG5cdFx0XSkge1xuXHRcdFx0dGhpc1trZXldID0gZGF0YVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcblx0XHRpZiAodHlwZSAmJiAhY2IpIHtcblx0XHRcdGNiID0gdHlwZTtcblx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cblx0XHRcdGlmIChkYXRhLm9yZGVycykge1xuXHRcdFx0XHRkYXRhLm9yZGVycyA9IGRhdGEub3JkZXJzLm1hcChmdW5jdGlvbiAob3JkZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE9yZGVyKG9yZGVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZ2V0UGVyZm9ybWFuY2Uoc3RhcnREYXRlLCBlbmREYXRlLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UoY2IpXG5cdGdldFBlcmZvcm1hbmNlKCkge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0bGV0IGNiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IFsgc3RhcnREYXRlLCBlbmREYXRlIF0gPSBhcmd1bWVudHM7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSAgYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMF07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuXHRcdGRhdGEudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0ZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXksIGNiKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9IH07XG5cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRCwgdHlwZSwgZGF0YSwgY2IpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IGAvc2lnbnVwcy9wcmFjdGljZWBcblx0XHRcdFx0OiBgL3NpZ251cHMvbGl2ZWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjaGFuZ2VTdWJzY3JpcHRpb24gKG1ldGhvZCwge1xuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50SUQsXG5cdFx0cGxhbklELFxuXHRcdHBheW1lbnRJRCxcblx0fSwgY2IpIHtcblxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG1ldGhvZC5zdGFydHNXaXRoKFwiUFwiKSAmJiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdHJlcXVlc3QoXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpXG5cdFx0XHQuZmlsdGVyKGtleSA9PiBwYXJhbXNba2V5XSlcblx0XHRcdC5yZWR1Y2UoKHgsIHkpID0+IE9iamVjdC5hc3NpZ24oe30sIHgsIHsgW3ldOiBwYXJhbXNbeV0gfSksIHt9KSxcblx0XHRcdGRhdGEgPT4ge1xuXHRcdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHRcdH0sXG5cdFx0XHRlcnIgPT4ge1xuXHRcdFx0XHRjYiAmJiBjYihlcnIpO1xuXHRcdFx0fSxcblx0XHQpO1xuXHR9XG5cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvbiAob3B0aW9ucywgY2IpIHtcblx0XHRBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIkdFVFwiLCBvcHRpb25zLCBjYik7XG5cdH1cblxuXHRzdGF0aWMgYWRkU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUE9TVFwiLCBvcHRpb25zLCBjYik7XG5cdH1cblxuXHRzdGF0aWMgdXBkYXRlU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUFVUXCIsIG9wdGlvbnMsIGNiKTtcblx0fVxuXG5cdHN0YXRpYyBjYW5jZWxTdWJzY3JpcHRpb24gKG9wdGlvbnMsIGNiKSB7XG5cdFx0QWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJERUxFVEVcIiwgb3B0aW9ucywgY2IpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyAob3B0aW9ucykge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHR9KTtcblx0fVxuXG5cdGdldFN1YnNjcmlwdGlvbiAoY2IpIHtcblx0XHRBY2NvdW50LmdldFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSwgY2IpO1xuXHR9XG5cblx0YWRkU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdEFjY291bnQuYWRkU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSwgY2IpO1xuXHR9XG5cblx0dXBkYXRlU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdEFjY291bnQudXBkYXRlU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSwgY2IpO1xuXHR9XG5cblx0Y2FuY2VsU3Vic2NyaXB0aW9uIChjYikge1xuXHRcdEFjY291bnQuY2FuY2VsU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpLCBjYik7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuICAgIG1ldGhvZCA9IFwiR0VUXCIsXG4gICAgZW5kcG9pbnQsXG4gICAgc2Vzc2lvbktleSxcbiAgICBib2R5LFxuICAgIGFkZGxIZWFkZXJzID0ge30sXG4gICAgaG9zdCA9IEhPU1RTLkFQSSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG4gICAgICAgIGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciwgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKHJlc0JvZHkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGUgPT0gNDAxID8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSkgOiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcbiAgICBlbnY6IG51bGwsXG4gICAgaHR0cEltcGw6IG51bGwsXG4gICAgYXBwVHlwZUlEOiBudWxsLFxuICAgIGFwcFZlcnNpb246IG51bGwsXG4gICAgd2xwSUQ6IG51bGwsXG4gICAgYXBwc1BhcnRuZXJJRDogbnVsbCxcbiAgICByZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG4gICAgQVBJOiBcImFwaVwiLFxuICAgIEFQUFM6IFwiYXBwc1wiLFxuICAgIFJFUE9SVFM6IFwicmVwb3J0c1wiXG59O1xuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuICAgIFVBVDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICB9LFxuICAgIFBST0Q6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGgubmV0XCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG4gICAgZW52LFxuICAgIGh0dHBJbXBsLFxuICAgIGFwcFR5cGVJRCxcbiAgICBhcHBWZXJzaW9uLFxuICAgIHdscElEID0gXCJEV1wiLFxuICAgIGFwcHNQYXJ0bmVySUQsXG4gICAgcmVmZXJyYWxDb2RlLFxufSkge1xuICAgIENvbmZpZy5lbnYgPSBlbnY7XG4gICAgQ29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG4gICAgQ29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcbiAgICBDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG4gICAgQ29uZmlnLndscElEID0gd2xwSUQ7XG4gICAgQ29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuICAgIENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRHJpdmVXZWFsdGhFcnJvcixcbiAgICBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuY29uc3QgU0VDX0ZFRV9SQVRFID0gMC4wMDAwMjMxO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1xuXHRcdFx0XCJvcmRlcklEXCIsXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiY3VtUXR5XCIsXG5cdFx0XHRcImFjY291bnROb1wiLFxuXHRcdFx0XCJjb21tZW50XCIsXG5cdFx0XHRcImNvbW1pc3Npb25cIixcblx0XHRcdFwiY3JlYXRlZEJ5SURcIixcblx0XHRcdFwiY3JlYXRlZFdoZW5cIixcblx0XHRcdFwiZXhlY3V0ZWRXaGVuXCIsXG5cdFx0XHRcImdyb3NzVHJhZGVBbXRcIixcblx0XHRcdFwiaW5zdHJ1bWVudElEXCIsXG5cdFx0XHRcImxlYXZlc1F0eVwiLFxuXHRcdFx0XCJvcmRlck5vXCIsXG5cdFx0XHRcIm9yZGVyUXR5XCIsXG5cdFx0XHRcInNpZGVcIixcblx0XHRcdFwiYXV0b1N0b3BcIixcblx0XHRcdFwic3ltYm9sXCIsXG5cdFx0XHRcImVmZmVjdGl2ZVByaWNlXCIsXG5cdFx0XSkge1xuXHRcdFx0dGhpc1trZXldID0gZGF0YVtrZXldO1xuXHRcdH1cblx0XHR0aGlzLnJlamVjdGlvblJlYXNvbiA9IGRhdGEub3JkUmVqUmVhc29uO1xuXHRcdHRoaXMuc3RhdHVzID0gZGF0YS5vcmRTdGF0dXM7XG5cdFx0dGhpcy50eXBlID0gZGF0YS5vcmRUeXBlIHx8IGRhdGEub3JkZXJUeXBlO1xuXHRcdHRoaXMucHJpY2UgPSBkYXRhLnN0b3BQcmljZSB8fCBkYXRhLmxpbWl0UHJpY2UgfHwgZGF0YS5wcmljZTtcblx0fVxuXG5cdGNhbmNlbChjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7dGhpcy5vcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0sICgpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRCwgdXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBTSURFUygpIHsgcmV0dXJuIHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG5cdFx0TkVXOiBcIjBcIixcblx0XHRQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuXHRcdEZJTEw6IFwiMlwiLFxuXHRcdENBTkNFTEVEOiBcIjRcIixcblx0XHRSRUpFQ1RFRDogXCI4XCIsXG5cdH0gfVxuXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBuZXcgT3JkZXIoZGF0YSkpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUodHlwZSwge1xuXHRcdGFjY291bnRJRCxcblx0XHRhY2NvdW50Tm8sXG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRUeXBlLFxuXHR9LCB7XG5cdFx0aW5zdHJ1bWVudCxcblx0XHRzaWRlLFxuXHRcdHF0eSxcblx0XHRhbW91bnRDYXNoLFxuXHRcdGNvbW1lbnQsXG5cdFx0YXV0b1N0b3AsXG5cdFx0cHJpY2UsXG5cdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdGZpbGxSZXRyeUludGVydmFsID0gMTAwMCxcblx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHR9LCBjYikge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkgdGhyb3cgbmV3IEVycm9yKGBcInF0eVwiIGFuZCBcImFtb3VudENhc2hcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLmApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgIXByaWNlKSB0aHJvdyBuZXcgRXJyb3IoYExpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXCJwcmljZS5cImApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHRocm93IG5ldyBFcnJvcihgXCJhdXRvU3RvcFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5gKTtcblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IHR5cGUsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdG9yZGVyUXR5OiBxdHkgPyBxdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggPyBhbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQpIGZpbGxNYXhSZXRyaWVzID0gMTtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBjYiAmJiBjYihudWxsLCBkYXRhLm9yZGVySUQpO1xuXG5cdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdHJldHJpZXMtLTtcblx0XHRcdFx0T3JkZXIuZ2V0QnlJRChkYXRhLm9yZGVySUQsIHVzZXJJRCwgKGVyciwgb3JkZXIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcblx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG5cdFx0XHRcdFx0aWYgKG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmIG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZUNhcnQoe1xuXHRcdGFjY291bnRJRCxcblx0XHRhY2NvdW50Tm8sXG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRUeXBlLFxuXHR9LCB7XG5cdFx0b3JkZXJzLFxuXHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHR9LCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogb3JkZXJzLm1hcChvcmRlciA9PiAoe1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IG9yZGVyLmluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IG9yZGVyLmluc3RydW1lbnQuaWQgfHwgb3JkZXIuaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IE9yZGVyLlRZUEVTLk1BUktFVCxcblx0XHRcdFx0c2lkZTogT3JkZXIuU0lERVMuQlVZLFxuXHRcdFx0XHRvcmRlclF0eTogb3JkZXIucXR5ID8gb3JkZXIucXR5IDogdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBvcmRlci5hbW91bnRDYXNoID8gb3JkZXIuYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudDogb3JkZXIuY29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3A6IG9yZGVyLmF1dG9TdG9wLFxuXHRcdFx0fSkpLFxuXHRcdH0sIChvcmRlclJlc3VsdHMpID0+IHtcblx0XHRcdGNvbnN0IG9yZGVyc01hcCA9IG9yZGVyUmVzdWx0cy5yZWR1Y2UoXG5cdFx0XHRcdChhY2MsIG5leHQsIGlkeCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY2MsIHtcblx0XHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyc01hcCk7XG5cblx0XHRcdGNvbnN0IGZpbGxlZE9yZGVycyA9IFtdO1xuXHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdHJlZmVyZW5jZUlEOiBvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRCxcblx0XHRcdH0pKTtcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXJSZXN1bHRzKTtcblx0XHRcdFx0cmV0cmllcy0tO1xuXG5cdFx0XHRcdFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdG9yZGVyUmVzdWx0cy5tYXAob3JkZXIgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCB1c2VySUQsIChlcnJvciwgc3RhdHVzRGV0YWlscykgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdG9yZGVyc01hcFtvcmRlci5yZWZlcmVuY2VJRF0gPSBzdGF0dXNEZXRhaWxzO1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KSlcblx0XHRcdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGxldCByZWZlcmVuY2UgaW4gb3JkZXJzTWFwKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0aGlzU3RhdHVzID0gb3JkZXJzTWFwW3JlZmVyZW5jZV0uc3RhdHVzO1xuXHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdHx8IHRoaXNTdGF0dXMgPT09IE9yZGVyLlNUQVRVU0VTLk5FV1xuXHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRzaG91bGRSZXRyeSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZWFjaCBvcmRlciBpczpcblx0Ly8geyBzaWRlLCBxdHksIG1hcmtldFByaWNlLCByZWZlcmVuY2VJRCB9XG5cdC8vIGNvbW1pc3Npb24gc2NoZWR1bGUgaXM6XG5cdC8vIHsgYmFzZVJhdGUsIGJhc2VTaGFyZXMsIGV4Y2Vzc1JhdGUsIGZyYWN0aW9uYWxSYXRlLCBzaGFyZUFtb3VudFJvdW5kaW5nLCBzdWJzY3JpcHRpb24sIGJhc2tldFNjaGVkdWxlLCBwYXNzVGhyb3VnaEZlZXMgfVxuXHRzdGF0aWMgZXN0aW1hdGVDb21taXNzaW9uKG9yZGVycywgY29tbWlzc2lvblNjaGVkdWxlKSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlID0gdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcylcblx0XHRcdFx0KSAqIGNvbW1pc3Npb25TY2hlZHVsZS5leGNlc3NSYXRlXG5cdFx0XHQpO1xuXG5cdFx0XHRsZXQgc2VjRmVlID0gMCwgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblxuICAgIHN0YXRpYyBnZXQgQUxMT1dFRF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREVQT1NJVDogXCJERVBPU0lUXCIsXG4gICAgICAgIFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG4gICAgICAgIERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIG1pbkFtb3VudCxcbiAgICAgICAgbWF4QW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZpbHRlcnMgPSB7fSxcbiAgICB9ID0ge30sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcbiAgICAgICAgaWYgKG1pbkFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtaW5BbW91bnQ9JHttaW5BbW91bnR9YDtcbiAgICAgICAgaWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcbiAgICAgICAgaWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMubmFtZSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbbmFtZV09JHtmaWx0ZXJzLm5hbWV9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuYWxsb3dlZCkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbYWxsb3dlZF09JHtmaWx0ZXJzLmFsbG93ZWR9YDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLkFQUFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL21ldGhvZHM/JHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXN0RGVwb3NpdHModXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuXHRzdGF0aWMgZ2V0UHJpY2luZyAodXNlcklELCBjYikge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdGVuZHBvaW50OiBcIi9mdW5kaW5nL2FjaC9zdWJzY3JpcHRpb24tcGxhbnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IGRhdGEuZGF0YS5tYXAoZnVuY3Rpb24gKHByaWNpbmcpIHtcblx0XHRcdFx0cmV0dXJuIFtdLmNvbmNhdChwcmljaW5nKVxuXHRcdFx0XHQuc29ydCgoeCwgeSkgPT4geC5hbW91bnQgLSB5LmFtb3VudClcblx0XHRcdFx0Lm1hcChwcmljZSA9PiBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHByaWNlLFxuXHRcdFx0XHRcdHsgYW1vdW50OiBOdW1iZXIocHJpY2UuYW1vdW50IC8gMTAwKSB9LFxuXHRcdFx0XHQpKTtcblx0XHRcdH0pWzBdO1xuXG5cdFx0XHRjYiAmJiBjYihudWxsLCBwcmljaW5nKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0cyB7XG5cbiAgICBzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPUZpblRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24gfHwgW10pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBsYWNlZE9yZGVycyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1PcmRlclRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXRlbWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAyYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRyYWRlQ29uZmlybXModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAxYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRheERvY3VtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTCh1c2VySUQsIGFjY291bnRJRCwgZmlsZUtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS51cmwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN1cHBvcnRlZENvdW50cmllcyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2NvdW50cmllc2AsXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBcImV4Y2hhbmdlSURcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudFR5cGVJRFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNYXhcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWluXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZVN0ZXBcIixcbiAgICAgICAgICAgIFwicmF0ZUFza1wiLFxuICAgICAgICAgICAgXCJyYXRlQmlkXCIsXG4gICAgICAgICAgICBcInJhdGVQcmVjaXNpb25cIixcbiAgICAgICAgICAgIFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInRyYWRlU3RhdHVzXCIsXG4gICAgICAgICAgICBcInVybEltYWdlXCIsXG4gICAgICAgICAgICBcInVybEludmVzdG9yXCIsXG4gICAgICAgICAgICBcImNoYWlraW5QZ3JcIixcbiAgICAgICAgICAgIFwicHJpb3JDbG9zZVwiLFxuICAgICAgICAgICAgXCJtYXJrZXRTdGF0ZVwiLFxuICAgICAgICAgICAgXCJmdW5kYW1lbnRhbERhdGFNb2RlbFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRSQURFX1NUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBJTkFDVElWRTogXCIwXCIsXG4gICAgICAgIEFDVElWRTogXCIxXCIsXG4gICAgICAgIENMT1NFRDogXCIyXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0IENIQVJUX0NPTVBSRVNTSU9OUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREFZOiAwLFxuICAgICAgICBNSU5VVEVfMTogMSxcbiAgICAgICAgTUlOVVRFXzU6IDQsXG4gICAgICAgIE1JTlVURV8zMDogOCxcbiAgICAgICAgSE9VUjogOSxcbiAgICAgICAgV0VFSzogMTBcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9scz0ke3N5bWJvbHMuam9pbignLCcpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gZGF0YVswXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5SUQoaWQsIGluY2x1ZGVGdW5kYW1lbnRhbHMgPSB0cnVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gJz9vcHRpb25zPUYnIDogJyd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IEluc3RydW1lbnQoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cywgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSB0cmFkZVN0YXR1cztcbiAgICAgICAgICAgIHRyYWRlU3RhdHVzID0gXCItMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VhcmNoKGNyaXRlcmlhLCBjYikge1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGUoY2IpIHtcbiAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgdXNlclBhc3NlZE9uZVN5bWJvbCA9IGZhbHNlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkge1xuICAgICAgICAgICAgdXNlclBhc3NlZE9uZVN5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBzeW1ib2wgPSBbc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBzeW1ib2wgPSBzeW1ib2wubWFwKHN5bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2wuam9pbihcIixcIil9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICAgICAgYWRkbEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcInRleHQvcGxhaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhd1F1b3RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICBiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJjb3VudHJ5SURcIixcbiAgICAgICAgICAgIFwiZW1haWxBZGRyZXNzXCIsXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgXCJsYW5ndWFnZUlEXCIsXG4gICAgICAgICAgICBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcInJlZmVycmFsQ29kZVwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIFwid2xwSURcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInVzQ2l0aXplblwiLFxuICAgICAgICAgICAgXCJsYXN0TG9naW5XaGVuXCIsXG4gICAgICAgICAgICBcImNpdGl6ZW5zaGlwXCIsXG5cdFx0XHRcImFkZHJlc3NMaW5lMVwiLFxuXHRcdFx0XCJhZGRyZXNzTGluZTJcIixcblx0XHRcdFwiY2l0eVwiLFxuXHRcdFx0XCJzdGF0ZVByb3ZpbmNlXCIsXG5cdFx0XHRcInppcFBvc3RhbENvZGVcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuICAgIGdldEFjY291bnRzKGNiKSB7XG4gICAgICAgIHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cblx0dXBsb2FkRG9jdW1lbnQoZmlsZSwgdHlwZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYikge1xuICAgIFx0aWYgKCFjYikge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh1c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdFx0fVxuICAgIH1cblxuXHQvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuXHQvLyBnZXRTZXR0aW5ncyhjYilcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICBcdGNvbnN0IFsga2V5LCBjYiBdID0gYXJndW1lbnRzO1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5LCBjYik7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYik7XG5cdH1cblxuICAgIHNldFNldHRpbmcoa2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlLCBjYik7XG4gICAgfVxuXG4gICAgdW5zZXRTZXR0aW5nKGtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSBsb2dpbkF1dG9tYXRpY2FsbHk7XG4gICAgICAgICAgICBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGVcblx0fSwgY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlXG5cdFx0XHR9LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBET0NVTUVOVF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcbiAgICB9IH1cblxuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklELCBmaWxlLCB0eXBlLCBjYikge1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL2RvY3VtZW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblx0XG5cdGxpc3RDcmVkaXRDYXJkcyhjYikge1xuICAgIFx0cmV0dXJuIF9saXN0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQsIGNiKTtcblx0fVxuXHRcblx0c3RhdGljIGxpc3RDcmVkaXRDYXJkcyh1c2VySUQsIGNiKSB7XG4gICAgXHRyZXR1cm4gX2xpc3RDcmVkaXRDYXJkcyh1c2VySUQsIGNiKTtcblx0fVxuXHRcblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW4sIGNiKSB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkVG9rZW4sIGNiKTtcblx0fVxuXHRcblx0c3RhdGljIGFkZENyZWRpdENhcmQodXNlcklELCBjYXJkVG9rZW4sIGNiKSB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZFRva2VuLCBjYik7XG5cdH1cblx0XG5cdHJlbW92ZUNyZWRpdENhcmQoY2FyZElELCBjYikge1xuIFx0XHRyZXR1cm4gX3JlbW92ZUNyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRJRCwgY2IpO1xuXHR9XG5cdFxuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRJRCwgY2IpIHtcblx0XHRyZXR1cm4gX3JlbW92ZUNyZWRpdENhcmQodXNlcklELCBjYXJkSUQsIGNiKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfbGlzdENyZWRpdENhcmRzKHVzZXJJRCwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCBkYXRhID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfYWRkQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRUb2tlbiwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keTogeyBjYXJkVG9rZW4gfVxuXHR9LCBkYXRhID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRJRCwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgZGF0YSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuZnVuY3Rpb24gX2dldFNldHRpbmdzICh1c2VySUQsIGtleSwgY2IpIHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRBbGxTZXR0aW5ncyAodXNlcklELCBjYikge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0fSwgKGRhdGEpID0+IHtcblx0XHRsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuXHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdH1cblx0XHRjYiAmJiBjYihudWxsLCBmb3JtYXR0ZWREYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfc2V0U2V0dGluZyAodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keToge1xuXHRcdFx0a2V5LCB2YWx1ZSxcblx0XHR9LFxuXHR9LCAoKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==