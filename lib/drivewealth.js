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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

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
	


/***/ },
/* 6 */
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

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
	
	        var _arr = ["countryID", "emailAddress", "firstName", "languageID", "lastName", "phoneNumber", "referralCode", "userID", "username", "wlpID", "status", "usCitizen", "lastLoginWhen", "citizenship"];
	
	        for (var _i = 0; _i < _arr.length; _i++) {
	            var key = _arr[_i];
	            this[key] = data[key];
	        }
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwM2UwMDM1ZDM5NjQ3NzE1ZWNhMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJlcnIiLCJxdWVyeVN0cmluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic2xpY2UiLCJnZXREYXRlIiwicGVyZm9ybWFuY2UiLCJwYXJlbnREZXRhaWxzIiwiYWNjb3VudE5vIiwiYWNjb3VudFR5cGUiLCJjcmVhdGUiLCJnZXRGdW5kaW5nTWV0aG9kcyIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJhY2NvdW50IiwiVFlQRVMiLCJQUkFDVElDRSIsInJlc3BvbnNlVHlwZSIsInRyYW5BbW91bnQiLCJib2R5IiwiQ0FTSCIsIk9SREVSUyIsIlRSQU5TQUNUSU9OUyIsIlBPU0lUSU9OUyIsIkFMTCIsIlBFTkRJTkciLCJPUEVOIiwiT1BFTl9OT19ORVdfVFJBREVTIiwiQ0xPU0VEIiwiTElWRSIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0dHBJbXBsIiwic3RhdHVzQ29kZSIsInJlc0hlYWRlcnMiLCJyZXNCb2R5IiwiY29udGVudFR5cGUiLCJpbmRleE9mIiwicGFyc2UiLCJTdHJpbmciLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJhcHBUeXBlSUQiLCJhcHBWZXJzaW9uIiwid2xwSUQiLCJhcHBzUGFydG5lcklEIiwicmVmZXJyYWxDb2RlIiwiSE9TVFMiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsInJlZHVjZSIsImFjYyIsIm5leHQiLCJpZHgiLCJPYmplY3QiLCJhc3NpZ24iLCJyZWZlcmVuY2VJRCIsImZpbGxlZE9yZGVycyIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RhdHVzRGV0YWlscyIsInRoZW4iLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwiY29tcHJlc3Npb24iLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJJTkFDVElWRSIsIkFDVElWRSIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsIl9nZXRTZXR0aW5ncyIsInZhbHVlIiwiX2dldEFsbFNldHRpbmdzIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciLCJfc2V0U2V0dGluZyIsImdldExpc3RGb3JVc2VySUQiLCJmaWxlIiwidXBsb2FkRG9jdW1lbnQiLCJyZW1vdmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImxvZ2luQXV0b21hdGljYWxseSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJjb3VudHJ5SUQiLCJwaG9uZUhvbWUiLCJwaG9uZVdvcmsiLCJwaG9uZSIsInN0YXRlUHJvdmluY2UiLCJ6aXBQb3N0YWxDb2RlIiwicGhvbmVNb2JpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkFQUFJPVkVEIiwiUkVWT0tFRCIsIlBIT1RPX0lEIiwiUFJPT0ZfT0ZfQUREUkVTUyIsIlBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O21CQUVlO0FBQ1hBLHVDQURXOztBQUdYQywrQkFIVztBQUlYQywyQkFKVztBQUtYQywyQkFMVztBQU1YQywrQkFOVztBQU9YQyxxQ0FQVztBQVFYQywyQkFSVztBQVNYQywrQkFUVztBQVVYQyx5QkFWVztBQVdYQyxpQ0FYVzs7QUFhWEMseUJBYlc7QUFjWEM7QUFkVyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVxQlYsTztBQUVwQixtQkFBWVcsSUFBWixFQUFrQjtBQUFBOztBQUFBLGNBQ0QsQ0FDZixXQURlLEVBRWYsUUFGZSxFQUdmLFdB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biB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAzZTAwMzVkMzk2NDc3MTVlY2EyIiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBFTlZJUk9OTUVOVFMsXG5cbiAgICBBY2NvdW50LFxuICAgIENvbmZpZyxcbiAgICBFcnJvcixcbiAgICBGdW5kaW5nLFxuICAgIEluc3RydW1lbnQsXG4gICAgT3JkZXIsXG4gICAgUmVwb3J0cyxcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcblx0XHRcdFwiYWNjb3VudElEXCIsXG5cdFx0XHRcInVzZXJJRFwiLFxuXHRcdFx0XCJhY2NvdW50Tm9cIixcblx0XHRcdFwiYWNjb3VudFR5cGVcIixcblx0XHRcdFwiY3VycmVuY3lJRFwiLFxuXHRcdFx0XCJpYklEXCIsXG5cdFx0XHRcIm1hcmdpblwiLFxuXHRcdFx0XCJuaWNrbmFtZVwiLFxuXHRcdFx0XCJvcGVuZWRXaGVuXCIsXG5cdFx0XHRcInBhdHRlcm5EYXlUcmFkZXNcIixcblx0XHRcdFwic3RhdHVzXCIsXG5cdFx0XHRcInRyYWRpbmdUeXBlXCIsXG5cdFx0XHRcImFjY291bnRNZ210VHlwZVwiLFxuXHRcdFx0XCJjb21taXNzaW9uU2NoZWR1bGVcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Z2V0QmxvdHRlcih0eXBlLCBjYikge1xuXHRcdGlmICh0eXBlICYmICFjYikge1xuXHRcdFx0Y2IgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50U3VtbWFyeS8ke3RoaXMuYWNjb3VudElEfSR7dHlwZSA/ICcvJyArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblxuXHRcdFx0aWYgKGRhdGEub3JkZXJzKSB7XG5cdFx0XHRcdGRhdGEub3JkZXJzID0gZGF0YS5vcmRlcnMubWFwKGZ1bmN0aW9uIChvcmRlcikge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgT3JkZXIob3JkZXIpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y2IgJiYgY2IobnVsbCwgdHlwZSA/IGRhdGFbdHlwZV0gOiBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHQvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuXHQvLyBnZXRQZXJmb3JtYW5jZShwZXJpb2QsIGNiKVxuXHQvLyBnZXRQZXJmb3JtYW5jZShjYilcblx0Z2V0UGVyZm9ybWFuY2UoKSB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRsZXQgY2I7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzFdO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1swXX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1swXTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke3RoaXMuYWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS5wZXJmb3JtYW5jZSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0cGxhY2VPcmRlcih0eXBlLCBkYXRhLCBjYikge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHMgPSB7XG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vOiB0aGlzLmFjY291bnRObyxcblx0XHRcdGFjY291bnRUeXBlOiB0aGlzLmFjY291bnRUeXBlLFxuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRGdW5kaW5nTWV0aG9kcyhkYXRhID0ge30sIGNiKSB7XG5cdFx0ZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcblx0XHRkYXRhLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuXHRcdHJldHVybiBGdW5kaW5nLmdldEZ1bmRpbmdNZXRob2RzKGRhdGEsIGNiKTtcblx0fVxuXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRQbGFjZWRPcmRlcnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0U3RhdGVtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRyYWRlQ29uZmlybXMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZW5lcmF0ZURvd25sb2FkVVJMKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgZmlsZUtleSwgY2IpO1xuXHR9XG5cblx0c3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG5cdFx0UEVORElORzogMSxcblx0XHRPUEVOOiAyLFxuXHRcdE9QRU5fTk9fTkVXX1RSQURFUzogMyxcblx0XHRDTE9TRUQ6IDksXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuXHRcdFBSQUNUSUNFOiAxLFxuXHRcdExJVkU6IDIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUodXNlcklELCB0eXBlLCBkYXRhLCBjYikge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG5cdFx0XHRcdD8gYC9zaWdudXBzL3ByYWN0aWNlYFxuXHRcdFx0XHQ6IGAvc2lnbnVwcy9saXZlYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxuICAgIGVuZHBvaW50LFxuICAgIHNlc3Npb25LZXksXG4gICAgYm9keSxcbiAgICBhZGRsSGVhZGVycyA9IHt9LFxuICAgIGhvc3QgPSBIT1NUUy5BUEksXG59LCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG4gICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25LZXkpIHtcbiAgICAgICAgaGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuXG4gICAgZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICBpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IsIGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChyZXNCb2R5KSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNDb2RlID09IDQwMSA/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UpIDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsImV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gICAgZW52OiBudWxsLFxuICAgIGh0dHBJbXBsOiBudWxsLFxuICAgIGFwcFR5cGVJRDogbnVsbCxcbiAgICBhcHBWZXJzaW9uOiBudWxsLFxuICAgIHdscElEOiBudWxsLFxuICAgIGFwcHNQYXJ0bmVySUQ6IG51bGwsXG4gICAgcmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuICAgIEFQSTogXCJhcGlcIixcbiAgICBBUFBTOiBcImFwcHNcIixcbiAgICBSRVBPUlRTOiBcInJlcG9ydHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgfSxcbiAgICBQUk9EOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbiAgICB3bHBJRCA9IFwiRFdcIixcbiAgICBhcHBzUGFydG5lcklELFxuICAgIHJlZmVycmFsQ29kZSxcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuICAgIENvbmZpZy53bHBJRCA9IHdscElEO1xuICAgIENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcbiAgICBDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERyaXZlV2VhbHRoRXJyb3IsXG4gICAgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcblx0XHRcdFwib3JkZXJJRFwiLFxuXHRcdFx0XCJhY2NvdW50SURcIixcblx0XHRcdFwidXNlcklEXCIsXG5cdFx0XHRcImN1bVF0eVwiLFxuXHRcdFx0XCJhY2NvdW50Tm9cIixcblx0XHRcdFwiY29tbWVudFwiLFxuXHRcdFx0XCJjb21taXNzaW9uXCIsXG5cdFx0XHRcImNyZWF0ZWRCeUlEXCIsXG5cdFx0XHRcImNyZWF0ZWRXaGVuXCIsXG5cdFx0XHRcImV4ZWN1dGVkV2hlblwiLFxuXHRcdFx0XCJncm9zc1RyYWRlQW10XCIsXG5cdFx0XHRcImluc3RydW1lbnRJRFwiLFxuXHRcdFx0XCJsZWF2ZXNRdHlcIixcblx0XHRcdFwib3JkZXJOb1wiLFxuXHRcdFx0XCJvcmRlclF0eVwiLFxuXHRcdFx0XCJzaWRlXCIsXG5cdFx0XHRcImF1dG9TdG9wXCIsXG5cdFx0XHRcInN5bWJvbFwiLFxuXHRcdF0pIHtcblx0XHRcdHRoaXNba2V5XSA9IGRhdGFba2V5XTtcblx0XHR9XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHRjYW5jZWwoY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke3RoaXMub3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sICgpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9IH1cblxuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHR5cGUsIHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdGluc3RydW1lbnQsXG5cdFx0c2lkZSxcblx0XHRxdHksXG5cdFx0YW1vdW50Q2FzaCxcblx0XHRjb21tZW50LFxuXHRcdGF1dG9TdG9wLFxuXHRcdHByaWNlLFxuXHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHRocm93IG5ldyBFcnJvcihgXCJxdHlcIiBhbmQgXCJhbW91bnRDYXNoXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5gKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkgdGhyb3cgbmV3IEVycm9yKGBMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFwicHJpY2UuXCJgKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmIGF1dG9TdG9wKSB0aHJvdyBuZXcgRXJyb3IoYFwiYXV0b1N0b3BcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuYCk7XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5ID8gcXR5IDogdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBhbW91bnRDYXNoID8gYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHR9LFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSBmaWxsTWF4UmV0cmllcyA9IDE7XG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuXHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRyZXRyaWVzLS07XG5cdFx0XHRcdE9yZGVyLmdldEJ5SUQoZGF0YS5vcmRlcklELCB1c2VySUQsIChlcnIsIG9yZGVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG5cdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblxuXHRcdFx0XHRcdGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdG9yZGVycyxcblx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG9yZGVycy5tYXAob3JkZXIgPT4gKHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBvcmRlci5pbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9LCAob3JkZXJSZXN1bHRzKSA9PiB7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCB7XG5cdFx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXG5cdFx0XHRjb25zdCBmaWxsZWRPcmRlcnMgPSBbXTtcblx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRyZWZlcmVuY2VJRDogb3JkZXJzW2lkeF0ucmVmZXJlbmNlSUQsXG5cdFx0XHR9KSk7XG5cdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdHJldHJpZXMtLTtcblxuXHRcdFx0XHRQcm9taXNlLmFsbChcblx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCwgdXNlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChsZXQgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdGlmICghdGhpc1N0YXR1c1xuXHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdC8vIGVhY2ggb3JkZXIgaXM6XG5cdC8vIHsgc2lkZSwgcXR5LCBtYXJrZXRQcmljZSwgcmVmZXJlbmNlSUQgfVxuXHQvLyBjb21taXNzaW9uIHNjaGVkdWxlIGlzOlxuXHQvLyB7IGJhc2VSYXRlLCBiYXNlU2hhcmVzLCBleGNlc3NSYXRlLCBmcmFjdGlvbmFsUmF0ZSwgc2hhcmVBbW91bnRSb3VuZGluZywgc3Vic2NyaXB0aW9uLCBiYXNrZXRTY2hlZHVsZSwgcGFzc1Rocm91Z2hGZWVzIH1cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihvcmRlcnMsIGNvbW1pc3Npb25TY2hlZHVsZSkge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZSA9IHVuZGVmaW5lZDtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDAsIHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cbiAgICBzdGF0aWMgZ2V0IEFMTE9XRURfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuICAgICAgICBXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuICAgICAgICBERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBtaW5BbW91bnQsXG4gICAgICAgIG1heEFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmaWx0ZXJzID0ge30sXG4gICAgfSA9IHt9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkgdGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uIHx8IFtdKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudXJsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9jb3VudHJpZXNgLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgXCJleGNoYW5nZUlEXCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRUeXBlSURcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWF4XCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1pblwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVTdGVwXCIsXG4gICAgICAgICAgICBcInJhdGVBc2tcIixcbiAgICAgICAgICAgIFwicmF0ZUJpZFwiLFxuICAgICAgICAgICAgXCJyYXRlUHJlY2lzaW9uXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgXCJ0cmFkZVN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1cmxJbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cmxJbnZlc3RvclwiLFxuICAgICAgICAgICAgXCJjaGFpa2luUGdyXCIsXG4gICAgICAgICAgICBcInByaW9yQ2xvc2VcIixcbiAgICAgICAgICAgIFwibWFya2V0U3RhdGVcIixcbiAgICAgICAgICAgIFwiZnVuZGFtZW50YWxEYXRhTW9kZWxcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUUkFERV9TVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgSU5BQ1RJVkU6IFwiMFwiLFxuICAgICAgICBBQ1RJVkU6IFwiMVwiLFxuICAgICAgICBDTE9TRUQ6IFwiMlwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldCBDSEFSVF9DT01QUkVTU0lPTlMoKSB7IHJldHVybiB7XG4gICAgICAgIERBWTogMCxcbiAgICAgICAgTUlOVVRFXzE6IDEsXG4gICAgICAgIE1JTlVURV81OiA0LFxuICAgICAgICBNSU5VVEVfMzA6IDgsXG4gICAgICAgIEhPVVI6IDksXG4gICAgICAgIFdFRUs6IDEwXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHN5bWJvbDtcbiAgICAgICAgaWYgKHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIpIHN5bWJvbHMgPSBbc3ltYm9sXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbCR7c3ltYm9scy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifT0ke3N5bWJvbHMuam9pbignLCcpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gZGF0YVswXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5SUQoaWQsIGluY2x1ZGVGdW5kYW1lbnRhbHMgPSB0cnVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gJz9vcHRpb25zPUYnIDogJyd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IEluc3RydW1lbnQoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cywgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSB0cmFkZVN0YXR1cztcbiAgICAgICAgICAgIHRyYWRlU3RhdHVzID0gXCItMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VhcmNoKGNyaXRlcmlhLCBjYikge1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGUoY2IpIHtcbiAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgdXNlclBhc3NlZE9uZVN5bWJvbCA9IGZhbHNlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkge1xuICAgICAgICAgICAgdXNlclBhc3NlZE9uZVN5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBzeW1ib2wgPSBbc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBzeW1ib2wgPSBzeW1ib2wubWFwKHN5bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2wuam9pbihcIixcIil9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICAgICAgYWRkbEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcInRleHQvcGxhaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhd1F1b3RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICBiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5jb25zdCBfZ2V0U2V0dGluZ3MgPSAodXNlcklELCBrZXksIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfZ2V0QWxsU2V0dGluZ3MgPSAodXNlcklELCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGxldCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0Zm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG5cdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0fVxuXHRcdGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfc2V0U2V0dGluZyA9ICh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7XG5cdFx0XHRrZXksIHZhbHVlXG5cdFx0fVxuXHR9LCAoKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJjb3VudHJ5SURcIixcbiAgICAgICAgICAgIFwiZW1haWxBZGRyZXNzXCIsXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgXCJsYW5ndWFnZUlEXCIsXG4gICAgICAgICAgICBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcInJlZmVycmFsQ29kZVwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIFwid2xwSURcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInVzQ2l0aXplblwiLFxuICAgICAgICAgICAgXCJsYXN0TG9naW5XaGVuXCIsXG4gICAgICAgICAgICBcImNpdGl6ZW5zaGlwXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjY291bnRzKGNiKSB7XG4gICAgICAgIHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cblx0dXBsb2FkRG9jdW1lbnQoZmlsZSwgdHlwZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYikge1xuICAgIFx0aWYgKCFjYikge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh1c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdFx0fVxuICAgIH1cblxuXHQvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuXHQvLyBnZXRTZXR0aW5ncyhjYilcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICBcdGNvbnN0IFsga2V5LCBjYiBdID0gYXJndW1lbnRzO1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5LCBjYik7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYik7XG5cdH1cblxuICAgIHNldFNldHRpbmcoa2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlLCBjYik7XG4gICAgfVxuXG4gICAgdW5zZXRTZXR0aW5nKGtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSBsb2dpbkF1dG9tYXRpY2FsbHk7XG4gICAgICAgICAgICBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGVcblx0fSwgY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlXG5cdFx0XHR9LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBET0NVTUVOVF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcbiAgICB9IH1cblxuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklELCBmaWxlLCB0eXBlLCBjYikge1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL2RvY3VtZW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==