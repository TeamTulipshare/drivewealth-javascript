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
	
			var _arr = ["orderID", "accountID", "userID", "cumQty", "accountNo", "comment", "commission", "createdByID", "createdWhen", "executedWhen", "grossTradeAmt", "instrumentID", "leavesQty", "orderNo", "orderQty", "side", "autoStop", "symbol"];
	
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
	                endpoint: "/instruments?symbol" + (symbols.length > 1 ? "s" : "") + "=" + symbols.join(','),
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
	
	var _getSettings = function _getSettings(userID, key, cb) {
	    (0, _request2.default)({
	        method: "GET",
	        endpoint: "/users/" + userID + "/settings/" + key,
	        sessionKey: _Sessions2.default.get(userID)
	    }, function (data) {
	        cb && cb(null, data.value);
	    }, function (err) {
	        return cb && cb(err);
	    });
	};
	
	var _getAllSettings = function _getAllSettings(userID, cb) {
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
	};
	
	var _setSetting = function _setSetting(userID, key, value, cb) {
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
	};
	
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
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYjk0MTljYWI4NDg4ZmUxNmYyMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJlcnIiLCJxdWVyeVN0cmluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic2xpY2UiLCJnZXREYXRlIiwicGVyZm9ybWFuY2UiLCJwYXJlbnREZXRhaWxzIiwiYWNjb3VudE5vIiwiYWNjb3VudFR5cGUiLCJjcmVhdGUiLCJnZXRGdW5kaW5nTWV0aG9kcyIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJhY2NvdW50IiwiVFlQRVMiLCJQUkFDVElDRSIsInJlc3BvbnNlVHlwZSIsInRyYW5BbW91bnQiLCJib2R5IiwiQ0FTSCIsIk9SREVSUyIsIlRSQU5TQUNUSU9OUyIsIlBPU0lUSU9OUyIsIkFMTCIsIlBFTkRJTkciLCJPUEVOIiwiT1BFTl9OT19ORVdfVFJBREVTIiwiQ0xPU0VEIiwiTElWRSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0dHBJbXBsIiwic3RhdHVzQ29kZSIsInJlc0hlYWRlcnMiLCJyZXNCb2R5IiwiY29udGVudFR5cGUiLCJpbmRleE9mIiwicGFyc2UiLCJTdHJpbmciLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJhcHBUeXBlSUQiLCJhcHBWZXJzaW9uIiwid2xwSUQiLCJhcHBzUGFydG5lcklEIiwicmVmZXJyYWxDb2RlIiwiSE9TVFMiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsInJlZHVjZSIsImFjYyIsIm5leHQiLCJpZHgiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWZlcmVuY2VJRCIsImZpbGxlZE9yZGVycyIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzRGV0YWlscyIsInRoZW4iLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwiY29tcHJlc3Npb24iLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJJTkFDVElWRSIsIkFDVElWRSIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsIl9nZXRTZXR0aW5ncyIsInZhbHVlIiwiX2dldEFsbFNldHRpbmdzIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciLCJfc2V0U2V0dGluZyIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXRMaXN0Rm9yVXNlcklEIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJ1c2VyIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDWEEsdUNBRFc7O0FBR1hDLCtCQUhXO0FBSVhDLDJCQUpXO0FBS1hDLDJCQUxXO0FBTVhDLCtCQU5XO0FBT1hDLHFDQVBXO0FBUVhDLDJCQVJXO0FBU1hDLCtCQVRXO0FBVVhDLHlCQVZXO0FBV1hDLGlDQVhXOztBQWFYQyx5QkFiVztBQWNYQztBQWRXLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRXFCVixPO0FBRXBCLG1CQUFZVyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsY0FDRCxDQUNmLFdBRGUsRUFFZixR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RSxvQkFBTztBQUM5QnlPLDJCQUFVLFlBRG9CO0FBRXBDQyxtQ0FBa0Isa0JBRmtCO0FBR3BDQyxpREFBZ0M7QUFISSxjQUFQO0FBSXhCOzs7Ozs7bUJBclBjalMsSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNiOTQxOWNhYjg0ODhmZTE2ZjIyIiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBFTlZJUk9OTUVOVFMsXG5cbiAgICBBY2NvdW50LFxuICAgIENvbmZpZyxcbiAgICBFcnJvcixcbiAgICBGdW5kaW5nLFxuICAgIEluc3RydW1lbnQsXG4gICAgT3JkZXIsXG4gICAgUmVwb3J0cyxcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcblx0XHRcdFwiYWNjb3VudElEXCIsXG5cdFx0XHRcInVzZXJJRFwiLFxuXHRcdFx0XCJhY2NvdW50Tm9cIixcblx0XHRcdFwiYWNjb3VudFR5cGVcIixcblx0XHRcdFwiY3VycmVuY3lJRFwiLFxuXHRcdFx0XCJpYklEXCIsXG5cdFx0XHRcIm1hcmdpblwiLFxuXHRcdFx0XCJuaWNrbmFtZVwiLFxuXHRcdFx0XCJvcGVuZWRXaGVuXCIsXG5cdFx0XHRcInBhdHRlcm5EYXlUcmFkZXNcIixcblx0XHRcdFwic3RhdHVzXCIsXG5cdFx0XHRcInRyYWRpbmdUeXBlXCIsXG5cdFx0XHRcImFjY291bnRNZ210VHlwZVwiLFxuXHRcdFx0XCJjb21taXNzaW9uU2NoZWR1bGVcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Z2V0QmxvdHRlcih0eXBlLCBjYikge1xuXHRcdGlmICh0eXBlICYmICFjYikge1xuXHRcdFx0Y2IgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50U3VtbWFyeS8ke3RoaXMuYWNjb3VudElEfSR7dHlwZSA/ICcvJyArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblxuXHRcdFx0aWYgKGRhdGEub3JkZXJzKSB7XG5cdFx0XHRcdGRhdGEub3JkZXJzID0gZGF0YS5vcmRlcnMubWFwKGZ1bmN0aW9uIChvcmRlcikge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT3JkZXIob3JkZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y2IgJiYgY2IobnVsbCwgdHlwZSA/IGRhdGFbdHlwZV0gOiBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHQvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuXHQvLyBnZXRQZXJmb3JtYW5jZShwZXJpb2QsIGNiKVxuXHQvLyBnZXRQZXJmb3JtYW5jZShjYilcblx0Z2V0UGVyZm9ybWFuY2UoKSB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRsZXQgY2I7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1swXX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1swXTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke3RoaXMuYWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS5wZXJmb3JtYW5jZSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0cGxhY2VPcmRlcih0eXBlLCBkYXRhLCBjYikge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHMgPSB7XG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vOiB0aGlzLmFjY291bnRObyxcblx0XHRcdGFjY291bnRUeXBlOiB0aGlzLmFjY291bnRUeXBlLFxuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRGdW5kaW5nTWV0aG9kcyhkYXRhID0ge30sIGNiKSB7XG5cdFx0ZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcblx0XHRkYXRhLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuXHRcdHJldHVybiBGdW5kaW5nLmdldEZ1bmRpbmdNZXRob2RzKGRhdGEsIGNiKTtcblx0fVxuXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRQbGFjZWRPcmRlcnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0U3RhdGVtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRyYWRlQ29uZmlybXMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZW5lcmF0ZURvd25sb2FkVVJMKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgZmlsZUtleSwgY2IpO1xuXHR9XG5cblx0c3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG5cdFx0UEVORElORzogMSxcblx0XHRPUEVOOiAyLFxuXHRcdE9QRU5fTk9fTkVXX1RSQURFUzogMyxcblx0XHRDTE9TRUQ6IDksXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuXHRcdFBSQUNUSUNFOiAxLFxuXHRcdExJVkU6IDIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUodXNlcklELCB0eXBlLCBkYXRhLCBjYikge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG5cdFx0XHRcdD8gYC9zaWdudXBzL3ByYWN0aWNlYFxuXHRcdFx0XHQ6IGAvc2lnbnVwcy9saXZlYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxuICAgIGVuZHBvaW50LFxuICAgIHNlc3Npb25LZXksXG4gICAgYm9keSxcbiAgICBhZGRsSGVhZGVycyA9IHt9LFxuICAgIGhvc3QgPSBIT1NUUy5BUEksXG59LCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG4gICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25LZXkpIHtcbiAgICAgICAgaGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuXG4gICAgZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICBpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IsIGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChyZXNCb2R5KSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNDb2RlID09IDQwMSA/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UpIDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsImV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gICAgZW52OiBudWxsLFxuICAgIGh0dHBJbXBsOiBudWxsLFxuICAgIGFwcFR5cGVJRDogbnVsbCxcbiAgICBhcHBWZXJzaW9uOiBudWxsLFxuICAgIHdscElEOiBudWxsLFxuICAgIGFwcHNQYXJ0bmVySUQ6IG51bGwsXG4gICAgcmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuICAgIEFQSTogXCJhcGlcIixcbiAgICBBUFBTOiBcImFwcHNcIixcbiAgICBSRVBPUlRTOiBcInJlcG9ydHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgfSxcbiAgICBQUk9EOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbiAgICB3bHBJRCA9IFwiRFdcIixcbiAgICBhcHBzUGFydG5lcklELFxuICAgIHJlZmVycmFsQ29kZSxcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuICAgIENvbmZpZy53bHBJRCA9IHdscElEO1xuICAgIENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcbiAgICBDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERyaXZlV2VhbHRoRXJyb3IsXG4gICAgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcblx0XHRcdFwib3JkZXJJRFwiLFxuXHRcdFx0XCJhY2NvdW50SURcIixcblx0XHRcdFwidXNlcklEXCIsXG5cdFx0XHRcImN1bVF0eVwiLFxuXHRcdFx0XCJhY2NvdW50Tm9cIixcblx0XHRcdFwiY29tbWVudFwiLFxuXHRcdFx0XCJjb21taXNzaW9uXCIsXG5cdFx0XHRcImNyZWF0ZWRCeUlEXCIsXG5cdFx0XHRcImNyZWF0ZWRXaGVuXCIsXG5cdFx0XHRcImV4ZWN1dGVkV2hlblwiLFxuXHRcdFx0XCJncm9zc1RyYWRlQW10XCIsXG5cdFx0XHRcImluc3RydW1lbnRJRFwiLFxuXHRcdFx0XCJsZWF2ZXNRdHlcIixcblx0XHRcdFwib3JkZXJOb1wiLFxuXHRcdFx0XCJvcmRlclF0eVwiLFxuXHRcdFx0XCJzaWRlXCIsXG5cdFx0XHRcImF1dG9TdG9wXCIsXG5cdFx0XHRcInN5bWJvbFwiLFxuXHRcdF0pIHtcblx0XHRcdHRoaXNba2V5XSA9IGRhdGFba2V5XTtcblx0XHR9XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHRjYW5jZWwoY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke3RoaXMub3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sICgpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9IH1cblxuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHR5cGUsIHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdGluc3RydW1lbnQsXG5cdFx0c2lkZSxcblx0XHRxdHksXG5cdFx0YW1vdW50Q2FzaCxcblx0XHRjb21tZW50LFxuXHRcdGF1dG9TdG9wLFxuXHRcdHByaWNlLFxuXHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHRocm93IG5ldyBFcnJvcihgXCJxdHlcIiBhbmQgXCJhbW91bnRDYXNoXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5gKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkgdGhyb3cgbmV3IEVycm9yKGBMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFwicHJpY2UuXCJgKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmIGF1dG9TdG9wKSB0aHJvdyBuZXcgRXJyb3IoYFwiYXV0b1N0b3BcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuYCk7XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5ID8gcXR5IDogdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBhbW91bnRDYXNoID8gYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHR9LFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSBmaWxsTWF4UmV0cmllcyA9IDE7XG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuXHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRyZXRyaWVzLS07XG5cdFx0XHRcdE9yZGVyLmdldEJ5SUQoZGF0YS5vcmRlcklELCB1c2VySUQsIChlcnIsIG9yZGVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG5cdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblxuXHRcdFx0XHRcdGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdG9yZGVycyxcblx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG9yZGVycy5tYXAob3JkZXIgPT4gKHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBvcmRlci5pbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9LCAob3JkZXJSZXN1bHRzKSA9PiB7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCB7XG5cdFx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXG5cdFx0XHRjb25zdCBmaWxsZWRPcmRlcnMgPSBbXTtcblx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRyZWZlcmVuY2VJRDogb3JkZXJzW2lkeF0ucmVmZXJlbmNlSUQsXG5cdFx0XHR9KSk7XG5cdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdHJldHJpZXMtLTtcblxuXHRcdFx0XHRQcm9taXNlLmFsbChcblx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCwgdXNlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChsZXQgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdGlmICghdGhpc1N0YXR1c1xuXHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdC8vIGVhY2ggb3JkZXIgaXM6XG5cdC8vIHsgc2lkZSwgcXR5LCBtYXJrZXRQcmljZSwgcmVmZXJlbmNlSUQgfVxuXHQvLyBjb21taXNzaW9uIHNjaGVkdWxlIGlzOlxuXHQvLyB7IGJhc2VSYXRlLCBiYXNlU2hhcmVzLCBleGNlc3NSYXRlLCBmcmFjdGlvbmFsUmF0ZSwgc2hhcmVBbW91bnRSb3VuZGluZywgc3Vic2NyaXB0aW9uLCBiYXNrZXRTY2hlZHVsZSwgcGFzc1Rocm91Z2hGZWVzIH1cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihvcmRlcnMsIGNvbW1pc3Npb25TY2hlZHVsZSkge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZSA9IHVuZGVmaW5lZDtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDAsIHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cbiAgICBzdGF0aWMgZ2V0IEFMTE9XRURfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuICAgICAgICBXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuICAgICAgICBERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBtaW5BbW91bnQsXG4gICAgICAgIG1heEFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmaWx0ZXJzID0ge30sXG4gICAgfSA9IHt9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkgdGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uIHx8IFtdKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudXJsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9jb3VudHJpZXNgLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgXCJleGNoYW5nZUlEXCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRUeXBlSURcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWF4XCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1pblwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVTdGVwXCIsXG4gICAgICAgICAgICBcInJhdGVBc2tcIixcbiAgICAgICAgICAgIFwicmF0ZUJpZFwiLFxuICAgICAgICAgICAgXCJyYXRlUHJlY2lzaW9uXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgXCJ0cmFkZVN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1cmxJbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cmxJbnZlc3RvclwiLFxuICAgICAgICAgICAgXCJjaGFpa2luUGdyXCIsXG4gICAgICAgICAgICBcInByaW9yQ2xvc2VcIixcbiAgICAgICAgICAgIFwibWFya2V0U3RhdGVcIixcbiAgICAgICAgICAgIFwiZnVuZGFtZW50YWxEYXRhTW9kZWxcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUUkFERV9TVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgSU5BQ1RJVkU6IFwiMFwiLFxuICAgICAgICBBQ1RJVkU6IFwiMVwiLFxuICAgICAgICBDTE9TRUQ6IFwiMlwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldCBDSEFSVF9DT01QUkVTU0lPTlMoKSB7IHJldHVybiB7XG4gICAgICAgIERBWTogMCxcbiAgICAgICAgTUlOVVRFXzE6IDEsXG4gICAgICAgIE1JTlVURV81OiA0LFxuICAgICAgICBNSU5VVEVfMzA6IDgsXG4gICAgICAgIEhPVVI6IDksXG4gICAgICAgIFdFRUs6IDEwXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHN5bWJvbDtcbiAgICAgICAgaWYgKHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIpIHN5bWJvbHMgPSBbc3ltYm9sXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbCR7c3ltYm9scy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifT0ke3N5bWJvbHMuam9pbignLCcpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gZGF0YVswXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5SUQoaWQsIGluY2x1ZGVGdW5kYW1lbnRhbHMgPSB0cnVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gJz9vcHRpb25zPUYnIDogJyd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IEluc3RydW1lbnQoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cywgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSB0cmFkZVN0YXR1cztcbiAgICAgICAgICAgIHRyYWRlU3RhdHVzID0gXCItMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VhcmNoKGNyaXRlcmlhLCBjYikge1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGUoY2IpIHtcbiAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgdXNlclBhc3NlZE9uZVN5bWJvbCA9IGZhbHNlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkge1xuICAgICAgICAgICAgdXNlclBhc3NlZE9uZVN5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBzeW1ib2wgPSBbc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBzeW1ib2wgPSBzeW1ib2wubWFwKHN5bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2wuam9pbihcIixcIil9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICAgICAgYWRkbEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcInRleHQvcGxhaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhd1F1b3RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICBiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5jb25zdCBfZ2V0U2V0dGluZ3MgPSAodXNlcklELCBrZXksIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfZ2V0QWxsU2V0dGluZ3MgPSAodXNlcklELCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGxldCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0Zm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG5cdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0fVxuXHRcdGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfc2V0U2V0dGluZyA9ICh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7XG5cdFx0XHRrZXksIHZhbHVlXG5cdFx0fVxuXHR9LCAoKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImNvdW50cnlJRFwiLFxuICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIixcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCIsXG4gICAgICAgICAgICBcImxhbmd1YWdlSURcIixcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwicmVmZXJyYWxDb2RlXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJ3bHBJRFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidXNDaXRpemVuXCIsXG4gICAgICAgICAgICBcImxhc3RMb2dpbldoZW5cIixcbiAgICAgICAgICAgIFwiY2l0aXplbnNoaXBcIixcblx0XHRcdFwiYWRkcmVzc0xpbmUxXCIsXG5cdFx0XHRcImFkZHJlc3NMaW5lMlwiLFxuXHRcdFx0XCJjaXR5XCIsXG5cdFx0XHRcInN0YXRlUHJvdmluY2VcIixcblx0XHRcdFwiemlwUG9zdGFsQ29kZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG4gICAgZ2V0QWNjb3VudHMoY2IpIHtcbiAgICAgICAgcmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCwgY2IpO1xuICAgIH1cblxuXHR1cGxvYWREb2N1bWVudChmaWxlLCB0eXBlLCBjYikge1xuICAgICAgICByZXR1cm4gVXNlci51cGxvYWREb2N1bWVudCh0aGlzLnVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpO1xuICAgIH1cblxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwgY2IpXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKSB7XG4gICAgXHRpZiAoIWNiKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0XHR9XG4gICAgfVxuXG5cdC8vIGdldFNldHRpbmdzKGtleSwgY2IpXG5cdC8vIGdldFNldHRpbmdzKGNiKVxuICAgIGdldFNldHRpbmdzKCkge1xuICAgIFx0Y29uc3QgWyBrZXksIGNiIF0gPSBhcmd1bWVudHM7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHRoaXMudXNlcklELCBrZXksIGNiKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcblx0fVxuXG4gICAgc2V0U2V0dGluZyhrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcbiAgICB9XG5cbiAgICB1bnNldFNldHRpbmcoa2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFN0YXR1cyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBQRU5ESU5HOiAxLFxuICAgICAgICBBUFBST1ZFRDogMixcbiAgICAgICAgUkVKRUNURUQ6IDMsXG4gICAgICAgIFJFVk9LRUQ6IDQsXG4gICAgICAgIENMT1NFRDogNSxcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgVXNlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuICAgICAgICAgICAgICAgIGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICBvc1R5cGU6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgc2NyUmVzOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBpcEFkZHJlc3M6IFwidW5rbm93blwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5zYXZlKGRhdGEudXNlcklELCBkYXRhLnNlc3Npb25LZXkpO1xuICAgICAgICAgICAgVXNlci5nZXRCeVVzZXJJRChkYXRhLnVzZXJJRCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHVzZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSwgKGVyciwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIHRydWUpO1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgIHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG4gICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgdXRtVGVybSxcbiAgICB9LCBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IGxvZ2luQXV0b21hdGljYWxseTtcbiAgICAgICAgICAgIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgICAgICAgICAgd2xwSUQ6IENvbmZpZy53bHBJRCxcbiAgICAgICAgICAgICAgICByZWZlcnJhbENvZGUsXG4gICAgICAgICAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgICAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgICAgICAgICAgdXRtU291cmNlLFxuICAgICAgICAgICAgICAgIHV0bVRlcm0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZVxuXHR9LCBjYikge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGVcblx0XHRcdH0sXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IERPQ1VNRU5UX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBQSE9UT19JRDogXCJQaWN0dXJlIElEXCIsXG5cdFx0UFJPT0ZfT0ZfQUREUkVTUzogXCJQcm9vZiBvZiBhZGRyZXNzXCIsXG5cdFx0UEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTOiBcIlBpY3R1cmUgSURfUHJvb2Ygb2YgYWRkcmVzc1wiLFxuICAgIH0gfVxuXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQsIGZpbGUsIHR5cGUsIGNiKSB7XG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZG9jdW1lbnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9