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
						return Object.assign({}, acc, _defineProperty({}, orders[i].referenceID, next));
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
								Order.getByID(order.orderID, function (error, statusDetails) {
									if (error) return resolve();
									ordersMap[order.referenceID] = statusDetails;
									resolve();
								});
							});
						})).then(function (orderStatuses) {
							var shouldRetry = false;
							for (var reference in orderStatuses) {
								var thisStatus = orderStatuses[reference].status;
								if (thisStatus === Order.STATUSES.NEW || thisStatus === Order.STATUSES.PARTIAL_FILL) {
									shouldRetry = true;
									break;
								}
							}
							if (shouldRetry) {
								setTimeout(checkStatus, fillRetryInterval);
							} else {
								return cb && cb(null, orderResults);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZDQ0MGMyMWFlMWE5ZDZkZGI0YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJlcnIiLCJxdWVyeVN0cmluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic2xpY2UiLCJnZXREYXRlIiwicGVyZm9ybWFuY2UiLCJwYXJlbnREZXRhaWxzIiwiYWNjb3VudE5vIiwiYWNjb3VudFR5cGUiLCJjcmVhdGUiLCJnZXRGdW5kaW5nTWV0aG9kcyIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJhY2NvdW50IiwiVFlQRVMiLCJQUkFDVElDRSIsInJlc3BvbnNlVHlwZSIsInRyYW5BbW91bnQiLCJib2R5IiwiQ0FTSCIsIk9SREVSUyIsIlRSQU5TQUNUSU9OUyIsIlBPU0lUSU9OUyIsIkFMTCIsIlBFTkRJTkciLCJPUEVOIiwiT1BFTl9OT19ORVdfVFJBREVTIiwiQ0xPU0VEIiwiTElWRSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0dHBJbXBsIiwic3RhdHVzQ29kZSIsInJlc0hlYWRlcnMiLCJyZXNCb2R5IiwiY29udGVudFR5cGUiLCJpbmRleE9mIiwicGFyc2UiLCJTdHJpbmciLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJhcHBUeXBlSUQiLCJhcHBWZXJzaW9uIiwid2xwSUQiLCJhcHBzUGFydG5lcklEIiwicmVmZXJyYWxDb2RlIiwiSE9TVFMiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsInJlZHVjZSIsImFjYyIsIm5leHQiLCJpZHgiLCJPYmplY3QiLCJhc3NpZ24iLCJpIiwicmVmZXJlbmNlSUQiLCJmaWxsZWRPcmRlcnMiLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsInJlamVjdCIsInN0YXR1c0RldGFpbHMiLCJ0aGVuIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJvcmRlclN0YXR1c2VzIiwidGhpc1N0YXR1cyIsImNvbW1pc3Npb25TY2hlZHVsZSIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwidG90YWxGZWVzT25seSIsImJhc2tldFByaWNlIiwiYmFza2V0U2NoZWR1bGUiLCJzY2hlZHVsZSIsInNjaGVkdWxlSXRlbSIsImJhc2tldFNpemUiLCJieU9yZGVyIiwibWFya2V0UHJpY2UiLCJvcmRlclByaWNlIiwiZnJhY3Rpb25hbFJhdGUiLCJiYXNlUmF0ZSIsIk5FQVJFU1QiLCJNYXRoIiwicm91bmQiLCJDRUlMIiwiY2VpbCIsIkZMT09SIiwiZmxvb3IiLCJzaGFyZUFtb3VudFJvdW5kaW5nIiwibWF4IiwiYmFzZVNoYXJlcyIsImV4Y2Vzc1JhdGUiLCJzZWNGZWUiLCJ0YWZGZWUiLCJwYXNzVGhyb3VnaEZlZXMiLCJTRUxMIiwibWluIiwib3JkZXJUb3RhbCIsImNvbW1pc3Npb24iLCJmZWVzIiwic2VjIiwidGFmIiwibXVsdGlwbGVPcmRlckRlbHRhIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfZ2V0QWxsU2V0dGluZ3MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsIl9zZXRTZXR0aW5nIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldExpc3RGb3JVc2VySUQiLCJmaWxlIiwidXBsb2FkRG9jdW1lbnQiLCJyZW1vdmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OzttQkFFZTtBQUNYQSx1Q0FEVzs7QUFHWEMsK0JBSFc7QUFJWEMsMkJBSlc7QUFLWEMsMkJBTFc7QUFNWEMsK0JBTlc7QUFPWEMscUNBUFc7QUFRWEMsMkJBUlc7QUFTWEMsK0JBVFc7QUFVWEMseUJBVlc7QUFXWEMsaUNBWFc7O0FBYVhDLHlCQWJXO0FBY1hDO0FBZFcsRTs7Ozs7Ozs7Ozs7Ozs7O0FDWGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUJWLE87QUFFcEIsbUJBQVlXLElBQVosRUFBa0I7QUFBQTs7QUFBQSxj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QUFDOUIyTywyQkFBVSxZQURvQjtBQUVwQ0MsbUNBQWtCLGtCQUZrQjtBQUdwQ0MsaURBQWdDO0FBSEksY0FBUDtBQUl4Qjs7Ozs7O21CQXJQY25TLEkiLCJmaWxlIjoiZHJpdmV3ZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZDQ0MGMyMWFlMWE5ZDZkZGI0YSIsImltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBDb25maWcsXG4gICAgRXJyb3IsXG4gICAgRnVuZGluZyxcbiAgICBJbnN0cnVtZW50LFxuICAgIE9yZGVyLFxuICAgIFJlcG9ydHMsXG4gICAgVXNlcixcbiAgICBTZXNzaW9ucyxcblxuICAgIHNldHVwLFxuICAgIHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImFjY291bnRUeXBlXCIsXG5cdFx0XHRcImN1cnJlbmN5SURcIixcblx0XHRcdFwiaWJJRFwiLFxuXHRcdFx0XCJtYXJnaW5cIixcblx0XHRcdFwibmlja25hbWVcIixcblx0XHRcdFwib3BlbmVkV2hlblwiLFxuXHRcdFx0XCJwYXR0ZXJuRGF5VHJhZGVzXCIsXG5cdFx0XHRcInN0YXR1c1wiLFxuXHRcdFx0XCJ0cmFkaW5nVHlwZVwiLFxuXHRcdFx0XCJhY2NvdW50TWdtdFR5cGVcIixcblx0XHRcdFwiY29tbWlzc2lvblNjaGVkdWxlXCIsXG5cdFx0XSkge1xuXHRcdFx0dGhpc1trZXldID0gZGF0YVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcblx0XHRpZiAodHlwZSAmJiAhY2IpIHtcblx0XHRcdGNiID0gdHlwZTtcblx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cblx0XHRcdGlmIChkYXRhLm9yZGVycykge1xuXHRcdFx0XHRkYXRhLm9yZGVycyA9IGRhdGEub3JkZXJzLm1hcChmdW5jdGlvbiAob3JkZXIpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IE9yZGVyKG9yZGVyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZ2V0UGVyZm9ybWFuY2Uoc3RhcnREYXRlLCBlbmREYXRlLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UoY2IpXG5cdGdldFBlcmZvcm1hbmNlKCkge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0bGV0IGNiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IFsgc3RhcnREYXRlLCBlbmREYXRlIF0gPSBhcmd1bWVudHM7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSAgYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMF07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuXHRcdGRhdGEudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0ZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXksIGNiKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9IH07XG5cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRCwgdHlwZSwgZGF0YSwgY2IpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IGAvc2lnbnVwcy9wcmFjdGljZWBcblx0XHRcdFx0OiBgL3NpZ251cHMvbGl2ZWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsImltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbiAgICBob3N0ID0gSE9TVFMuQVBJLFxufSwgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uS2V5KSB7XG4gICAgICAgIGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuICAgIH1cblxuICAgIGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG4gICAgaWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcbiAgICAgICAgaWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yLCBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAocmVzQm9keSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZSA9PSA0MDEgPyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlKSA6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICB3bHBJRDogbnVsbCxcbiAgICBhcHBzUGFydG5lcklEOiBudWxsLFxuICAgIHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcbiAgICBBUEk6IFwiYXBpXCIsXG4gICAgQVBQUzogXCJhcHBzXCIsXG4gICAgUkVQT1JUUzogXCJyZXBvcnRzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG4gICAgVUFUOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcbiAgICBlbnYsXG4gICAgaHR0cEltcGwsXG4gICAgYXBwVHlwZUlELFxuICAgIGFwcFZlcnNpb24sXG4gICAgd2xwSUQgPSBcIkRXXCIsXG4gICAgYXBwc1BhcnRuZXJJRCxcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG4gICAgQ29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBEcml2ZVdlYWx0aEVycm9yLFxuICAgIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5jb25zdCBTRUNfRkVFX1JBVEUgPSAwLjAwMDAyMzE7XG5jb25zdCBTRUNfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBTRUNfRkVFX01BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbmNvbnN0IFRBRl9GRUVfUkFURSA9IDAuMDAwMTE5O1xuY29uc3QgVEFGX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgVEFGX0ZFRV9NQVggPSA1Ljk1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcIm9yZGVySURcIixcblx0XHRcdFwiYWNjb3VudElEXCIsXG5cdFx0XHRcInVzZXJJRFwiLFxuXHRcdFx0XCJjdW1RdHlcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImNvbW1lbnRcIixcblx0XHRcdFwiY29tbWlzc2lvblwiLFxuXHRcdFx0XCJjcmVhdGVkQnlJRFwiLFxuXHRcdFx0XCJjcmVhdGVkV2hlblwiLFxuXHRcdFx0XCJleGVjdXRlZFdoZW5cIixcblx0XHRcdFwiZ3Jvc3NUcmFkZUFtdFwiLFxuXHRcdFx0XCJpbnN0cnVtZW50SURcIixcblx0XHRcdFwibGVhdmVzUXR5XCIsXG5cdFx0XHRcIm9yZGVyTm9cIixcblx0XHRcdFwib3JkZXJRdHlcIixcblx0XHRcdFwic2lkZVwiLFxuXHRcdFx0XCJhdXRvU3RvcFwiLFxuXHRcdFx0XCJzeW1ib2xcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGUgfHwgZGF0YS5vcmRlclR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0Y2FuY2VsKGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHt0aGlzLm9yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNhbmNlbChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IFNJREVTKCkgeyByZXR1cm4ge1xuXHRcdEJVWTogXCJCXCIsXG5cdFx0U0VMTDogXCJTXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuXHRcdE1BUktFVDogXCIxXCIsXG5cdFx0TElNSVQ6IFwiMlwiLFxuXHRcdFNUT1A6IFwiM1wiLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fSB9XG5cblx0c3RhdGljIGdldEJ5SUQob3JkZXJJRCwgdXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIG5ldyBPcmRlcihkYXRhKSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSh0eXBlLCB7XG5cdFx0YWNjb3VudElELFxuXHRcdGFjY291bnRObyxcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudFR5cGUsXG5cdH0sIHtcblx0XHRpbnN0cnVtZW50LFxuXHRcdHNpZGUsXG5cdFx0cXR5LFxuXHRcdGFtb3VudENhc2gsXG5cdFx0Y29tbWVudCxcblx0XHRhdXRvU3RvcCxcblx0XHRwcmljZSxcblx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSAxMDAwLFxuXHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdH0sIGNiKSB7XG5cdFx0aWYgKGFtb3VudENhc2ggJiYgcXR5KSB0aHJvdyBuZXcgRXJyb3IoYFwicXR5XCIgYW5kIFwiYW1vdW50Q2FzaFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuYCk7XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiAhcHJpY2UpIHRocm93IG5ldyBFcnJvcihgTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcInByaWNlLlwiYCk7XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiBhdXRvU3RvcCkgdGhyb3cgbmV3IEVycm9yKGBcImF1dG9TdG9wXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLmApO1xuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSA/IHF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogYW1vdW50Q2FzaCA/IGFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0fSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCkgZmlsbE1heFJldHJpZXMgPSAxO1xuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIGRhdGEub3JkZXJJRCk7XG5cblx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0cmV0cmllcy0tO1xuXHRcdFx0XHRPcmRlci5nZXRCeUlEKGRhdGEub3JkZXJJRCwgdXNlcklELCAoZXJyLCBvcmRlcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG5cblx0XHRcdFx0XHRpZiAob3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVcgJiYgb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTEwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlQ2FydCh7XG5cdFx0YWNjb3VudElELFxuXHRcdGFjY291bnRObyxcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudFR5cGUsXG5cdH0sIHtcblx0XHRvcmRlcnMsXG5cdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuXHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdH0sIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgb3JkZXIuaW5zdHJ1bWVudC5pZCB8fCBvcmRlci5pbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogT3JkZXIuVFlQRVMuTUFSS0VULFxuXHRcdFx0XHRzaWRlOiBPcmRlci5TSURFUy5CVVksXG5cdFx0XHRcdG9yZGVyUXR5OiBvcmRlci5xdHkgPyBvcmRlci5xdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IG9yZGVyLmFtb3VudENhc2ggPyBvcmRlci5hbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50OiBvcmRlci5jb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcDogb3JkZXIuYXV0b1N0b3AsXG5cdFx0XHR9KSksXG5cdFx0fSwgKG9yZGVyUmVzdWx0cykgPT4ge1xuXHRcdFx0Y29uc3Qgb3JkZXJzTWFwID0gb3JkZXJSZXN1bHRzLnJlZHVjZShcblx0XHRcdFx0KGFjYywgbmV4dCwgaWR4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFx0W29yZGVyc1tpXS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHt9LFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyc01hcCk7XG5cblx0XHRcdGNvbnN0IGZpbGxlZE9yZGVycyA9IFtdO1xuXHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdHJlZmVyZW5jZUlEOiBvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRCxcblx0XHRcdH0pKTtcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXJSZXN1bHRzKTtcblx0XHRcdFx0cmV0cmllcy0tO1xuXG5cdFx0XHRcdFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdG9yZGVyUmVzdWx0cy5tYXAob3JkZXIgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdCkudGhlbihvcmRlclN0YXR1c2VzID0+IHtcblx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGxldCByZWZlcmVuY2UgaW4gb3JkZXJTdGF0dXNlcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyU3RhdHVzZXNbcmVmZXJlbmNlXS5zdGF0dXM7XG5cdFx0XHRcdFx0XHRpZiAodGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXIHx8IHRoaXNTdGF0dXMgPT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuXHRcdFx0XHRcdFx0XHRzaG91bGRSZXRyeSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZWFjaCBvcmRlciBpczpcblx0Ly8geyBzaWRlLCBxdHksIG1hcmtldFByaWNlLCByZWZlcmVuY2VJRCB9XG5cdC8vIGNvbW1pc3Npb24gc2NoZWR1bGUgaXM6XG5cdC8vIHsgYmFzZVJhdGUsIGJhc2VTaGFyZXMsIGV4Y2Vzc1JhdGUsIGZyYWN0aW9uYWxSYXRlLCBzaGFyZUFtb3VudFJvdW5kaW5nLCBzdWJzY3JpcHRpb24sIGJhc2tldFNjaGVkdWxlLCBwYXNzVGhyb3VnaEZlZXMgfVxuXHRzdGF0aWMgZXN0aW1hdGVDb21taXNzaW9uKG9yZGVycywgY29tbWlzc2lvblNjaGVkdWxlKSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlID0gdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcylcblx0XHRcdFx0KSAqIGNvbW1pc3Npb25TY2hlZHVsZS5leGNlc3NSYXRlXG5cdFx0XHQpO1xuXG5cdFx0XHRsZXQgc2VjRmVlID0gMCwgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblxuICAgIHN0YXRpYyBnZXQgQUxMT1dFRF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREVQT1NJVDogXCJERVBPU0lUXCIsXG4gICAgICAgIFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG4gICAgICAgIERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIG1pbkFtb3VudCxcbiAgICAgICAgbWF4QW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZpbHRlcnMgPSB7fSxcbiAgICB9ID0ge30sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcbiAgICAgICAgaWYgKG1pbkFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtaW5BbW91bnQ9JHttaW5BbW91bnR9YDtcbiAgICAgICAgaWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcbiAgICAgICAgaWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMubmFtZSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbbmFtZV09JHtmaWx0ZXJzLm5hbWV9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuYWxsb3dlZCkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbYWxsb3dlZF09JHtmaWx0ZXJzLmFsbG93ZWR9YDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLkFQUFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL21ldGhvZHM/JHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXN0RGVwb3NpdHModXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0cyB7XG5cbiAgICBzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPUZpblRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24gfHwgW10pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBsYWNlZE9yZGVycyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1PcmRlclRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXRlbWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAyYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRyYWRlQ29uZmlybXModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAxYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRheERvY3VtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTCh1c2VySUQsIGFjY291bnRJRCwgZmlsZUtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS51cmwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN1cHBvcnRlZENvdW50cmllcyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2NvdW50cmllc2AsXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBcImV4Y2hhbmdlSURcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudFR5cGVJRFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNYXhcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWluXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZVN0ZXBcIixcbiAgICAgICAgICAgIFwicmF0ZUFza1wiLFxuICAgICAgICAgICAgXCJyYXRlQmlkXCIsXG4gICAgICAgICAgICBcInJhdGVQcmVjaXNpb25cIixcbiAgICAgICAgICAgIFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInRyYWRlU3RhdHVzXCIsXG4gICAgICAgICAgICBcInVybEltYWdlXCIsXG4gICAgICAgICAgICBcInVybEludmVzdG9yXCIsXG4gICAgICAgICAgICBcImNoYWlraW5QZ3JcIixcbiAgICAgICAgICAgIFwicHJpb3JDbG9zZVwiLFxuICAgICAgICAgICAgXCJtYXJrZXRTdGF0ZVwiLFxuICAgICAgICAgICAgXCJmdW5kYW1lbnRhbERhdGFNb2RlbFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRSQURFX1NUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBJTkFDVElWRTogXCIwXCIsXG4gICAgICAgIEFDVElWRTogXCIxXCIsXG4gICAgICAgIENMT1NFRDogXCIyXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0IENIQVJUX0NPTVBSRVNTSU9OUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREFZOiAwLFxuICAgICAgICBNSU5VVEVfMTogMSxcbiAgICAgICAgTUlOVVRFXzU6IDQsXG4gICAgICAgIE1JTlVURV8zMDogOCxcbiAgICAgICAgSE9VUjogOSxcbiAgICAgICAgV0VFSzogMTBcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9sJHtzeW1ib2xzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9PSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZWFyY2goY3JpdGVyaWEsIGNiKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuICAgICAgICBpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRRdW90ZShjYikge1xuICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlclBhc3NlZE9uZVN5bWJvbCkgb2JqID0gb2JqW3N5bWJvbFswXV07XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBvYmopO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcnREYXRhKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbikge1xuICAgICAgICBsZXQgY2IsIHRpbWVQYXJhbXM7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbmQgICA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1s0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YS5zcGxpdChcInxcIikpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbmNvbnN0IF9nZXRTZXR0aW5ncyA9ICh1c2VySUQsIGtleSwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdH0sIChkYXRhKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS52YWx1ZSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmNvbnN0IF9nZXRBbGxTZXR0aW5ncyA9ICh1c2VySUQsIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdH0sIChkYXRhKSA9PiB7XG5cdFx0bGV0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRmb3IgKGxldCBzZXR0aW5nIG9mIGRhdGEpIHtcblx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHR9XG5cdFx0Y2IgJiYgY2IobnVsbCwgZm9ybWF0dGVkRGF0YSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmNvbnN0IF9zZXRTZXR0aW5nID0gKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdGJvZHk6IHtcblx0XHRcdGtleSwgdmFsdWVcblx0XHR9XG5cdH0sICgpID0+IHtcblx0XHRjYiAmJiBjYihudWxsKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuXHRcdFx0XCJhZGRyZXNzTGluZTFcIixcblx0XHRcdFwiYWRkcmVzc0xpbmUyXCIsXG5cdFx0XHRcImNpdHlcIixcblx0XHRcdFwic3RhdGVQcm92aW5jZVwiLFxuXHRcdFx0XCJ6aXBQb3N0YWxDb2RlXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGRhdGEuZmlyc3ROYW1lICsgXCIgXCIgKyBkYXRhLmxhc3ROYW1lO1xuXHR9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICByZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklELCBjYik7XG4gICAgfVxuXG5cdHVwbG9hZERvY3VtZW50KGZpbGUsIHR5cGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlLCBjYik7XG4gICAgfVxuXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBjYilcbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdHN0YXRpYyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpIHtcbiAgICBcdGlmICghY2IpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRcdH1cbiAgICB9XG5cblx0Ly8gZ2V0U2V0dGluZ3Moa2V5LCBjYilcblx0Ly8gZ2V0U2V0dGluZ3MoY2IpXG4gICAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgXHRjb25zdCBbIGtleSwgY2IgXSA9IGFyZ3VtZW50cztcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHRoaXMudXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSwgY2IpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBzZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuXHR9XG5cbiAgICBzZXRTZXR0aW5nKGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuICAgIH1cblxuICAgIHVuc2V0U2V0dGluZyhrZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh0aGlzLnVzZXJJRCl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBFTkRJTkc6IDEsXG4gICAgICAgIEFQUFJPVkVEOiAyLFxuICAgICAgICBSRUpFQ1RFRDogMyxcbiAgICAgICAgUkVWT0tFRDogNCxcbiAgICAgICAgQ0xPU0VEOiA1LFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBVc2VyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG4gICAgICAgICAgICAgICAgYXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuICAgICAgICAgICAgICAgIG9zVHlwZTogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBzY3JSZXM6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGlwQWRkcmVzczogXCJ1bmtub3duXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnNhdmUoZGF0YS51c2VySUQsIGRhdGEuc2Vzc2lvbktleSk7XG4gICAgICAgICAgICBVc2VyLmdldEJ5VXNlcklEKGRhdGEudXNlcklELCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZmFsc2UpO1xuICAgICAgICB9LCAoZXJyLCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDA0KSByZXR1cm4gY2IgJiYgY2IobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICBjYiAmJiBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgcmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcbiAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgdXRtU291cmNlLFxuICAgICAgICB1dG1UZXJtLFxuICAgIH0sIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWUsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gbG9naW5BdXRvbWF0aWNhbGx5O1xuICAgICAgICAgICAgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzMTogZW1haWwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgICAgICAgICB3bHBJRDogQ29uZmlnLndscElELFxuICAgICAgICAgICAgICAgIHJlZmVycmFsQ29kZSxcbiAgICAgICAgICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICAgICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgICAgICAgICAgdXRtVGVybSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlXG5cdH0sIGNiKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZVxuXHRcdFx0fSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgRE9DVU1FTlRfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG4gICAgfSB9XG5cblx0c3RhdGljIHVwbG9hZERvY3VtZW50KHVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpIHtcblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9kb2N1bWVudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=