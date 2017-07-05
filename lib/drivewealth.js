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
	
			var _arr = ["orderID", "accountID", "userID", "cumQty", "accountNo", "comment", "commission", "createdByID", "createdWhen", "executedWhen", "grossTradeAmt", "instrumentID", "leavesQty", "orderNo", "orderQty", "side", "autoStop"];
	
			for (var _i = 0; _i < _arr.length; _i++) {
				var key = _arr[_i];
				this[key] = data[key];
			}
			this.rejectionReason = data.ordRejReason;
			this.status = data.ordStatus;
			this.type = data.ordType;
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
				    fillRetryInterval = _ref2$fillRetryInterv === undefined ? 500 : _ref2$fillRetryInterv;
	
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
	
					var fillMaxRetries = type === Order.TYPES.MARKET ? 10 : 1;
	
					if (!waitForFill) return cb && cb(null, data.orderID);
	
					var poll = void 0,
					    retries = fillMaxRetries;
					var checkStatus = function checkStatus() {
						fillMaxRetries--;
						Order.getByID(data.orderID, userID, function (err, order) {
							if (err) return cb && cb(err);
							if (fillMaxRetries <= 0) return cb && cb(null, order);
	
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0YzJiOWJlYzY1OTRlODY5YWZhYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwiZ2V0RnVuZGluZ01ldGhvZHMiLCJnZXRUcmFuc2FjdGlvbnMiLCJnZXRQbGFjZWRPcmRlcnMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0VGF4RG9jdW1lbnRzIiwiZ2V0VHJhZGVDb25maXJtcyIsImZpbGVLZXkiLCJnZW5lcmF0ZURvd25sb2FkVVJMIiwibWFwIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYWRkbEhlYWRlcnMiLCJob3N0IiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImhlYWRlciIsImVudiIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwSW1wbCIsInN0YXR1c0NvZGUiLCJyZXNIZWFkZXJzIiwicmVzQm9keSIsImNvbnRlbnRUeXBlIiwiaW5kZXhPZiIsInBhcnNlIiwiU3RyaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiYXBwVHlwZUlEIiwiYXBwVmVyc2lvbiIsIndscElEIiwiYXBwc1BhcnRuZXJJRCIsInJlZmVycmFsQ29kZSIsIkhPU1RTIiwiQVBQUyIsIlJFUE9SVFMiLCJVQVQiLCJQUk9EIiwiRHJpdmVXZWFsdGhFcnJvciIsIkRyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsIlNFQ19GRUVfUkFURSIsIlNFQ19GRUVfTUlOIiwiU0VDX0ZFRV9NQVgiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsIlRBRl9GRUVfUkFURSIsIlRBRl9GRUVfTUlOIiwiVEFGX0ZFRV9NQVgiLCJyZWplY3Rpb25SZWFzb24iLCJvcmRSZWpSZWFzb24iLCJzdGF0dXMiLCJvcmRTdGF0dXMiLCJvcmRUeXBlIiwicHJpY2UiLCJzdG9wUHJpY2UiLCJsaW1pdFByaWNlIiwib3JkZXJJRCIsImluc3RydW1lbnQiLCJzaWRlIiwicXR5IiwiYW1vdW50Q2FzaCIsImNvbW1lbnQiLCJhdXRvU3RvcCIsIndhaXRGb3JGaWxsIiwiZmlsbFJldHJ5SW50ZXJ2YWwiLCJNQVJLRVQiLCJpbnN0cnVtZW50SUQiLCJpZCIsIm9yZGVyUXR5IiwidW5kZWZpbmVkIiwiU1RPUCIsIkxJTUlUIiwiZmlsbE1heFJldHJpZXMiLCJwb2xsIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIm9yZGVyIiwiU1RBVFVTRVMiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0Iiwib3JkZXJzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsInJlZmVyZW5jZUlEIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0lERVMiLCJTRUxMIiwibWluIiwib3JkZXJUb3RhbCIsImNvbW1pc3Npb24iLCJmZWVzIiwic2VjIiwidGFmIiwibXVsdGlwbGVPcmRlckRlbHRhIiwiQlVZIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfZ2V0QWxsU2V0dGluZ3MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsIl9zZXRTZXR0aW5nIiwiZ2V0TGlzdEZvclVzZXJJRCIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDWEEsdUNBRFc7O0FBR1hDLCtCQUhXO0FBSVhDLDJCQUpXO0FBS1hDLDJCQUxXO0FBTVhDLCtCQU5XO0FBT1hDLHFDQVBXO0FBUVhDLDJCQVJXO0FBU1hDLCtCQVRXO0FBVVhDLHlCQVZXO0FBV1hDLGlDQVhXOztBQWFYQyx5QkFiVztBQWNYQztBQWRXLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRXFCVixPO0FBRXBCLG1CQUFZVyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsY0FDRCxDQUNmLFdBRGUsRUFFZixRQUZlLEVBR2YsV0FIZSxFQUlmLGFBSmUsRUFLZixZQUxlLEVBTWYsTUFOZSxFQU9mLFFBUGUsRUFRZixVQVJlLEVBU2YsWUFUZSxFQVVmLGtCQVZlLEVBV2YsUUFYZSxFQVlmLGFBWmUsRUFhZixpQkFiZSxFQWNmLG9CQWRlLENBREM7O0FBQ2pCLDRDQWVHO0FBZkUsUUFBSUMsY0FBSjtBQWdCSixTQUFLQSxHQUFMLElBQVlELEtBQUtDLEdBQUwsQ0FBWjtB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UUFBSixFQUFiO0FBQ0E3TixrQkFBSzhOLE1BQUwsQ0FBWSxPQUFaLEVBQXFCL1AsTUFBckI7QUFDQWlDLGtCQUFLOE4sTUFBTCxDQUFZLGNBQVosRUFBNEJuUSxJQUE1QjtBQUNBcUMsa0JBQUs4TixNQUFMLENBQVksZUFBWixFQUE2Qm5DLElBQTdCOztBQUVBLG9CQUFPLHVCQUFRO0FBQ2Q5Tix5QkFBUSxNQURNO0FBRWRDLHVDQUZjO0FBR2RHLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWIsQ0FIRTtBQUlkOEMsOEJBQWE7QUFDWixxQ0FBZ0I7QUFESixrQkFKQztBQU9kYjtBQVBjLGNBQVIsRUFRSixnQkFBUTtBQUNWcEMsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxJQUFULENBQU47QUFDQSxjQVZNLEVBVUo7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FWSSxDQUFQO0FBV0E7Ozs2QkFuS3dCO0FBQUUsb0JBQU87QUFDM0JtQywwQkFBUyxDQURrQjtBQUUzQnlOLDJCQUFVLENBRmlCO0FBRzNCMUYsMkJBQVUsQ0FIaUI7QUFJM0IyRiwwQkFBUyxDQUprQjtBQUszQnZOLHlCQUFRO0FBTG1CLGNBQVA7QUFNckI7Ozs2QkFzSXNCO0FBQUUsb0JBQU87QUFDOUJ3TiwyQkFBVSxZQURvQjtBQUVwQ0MsbUNBQWtCLGtCQUZrQjtBQUdwQ0MsaURBQWdDO0FBSEksY0FBUDtBQUl4Qjs7Ozs7O21CQTlPYzlRLEkiLCJmaWxlIjoiZHJpdmV3ZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YzJiOWJlYzY1OTRlODY5YWZhYyIsImltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBDb25maWcsXG4gICAgRXJyb3IsXG4gICAgRnVuZGluZyxcbiAgICBJbnN0cnVtZW50LFxuICAgIE9yZGVyLFxuICAgIFJlcG9ydHMsXG4gICAgVXNlcixcbiAgICBTZXNzaW9ucyxcblxuICAgIHNldHVwLFxuICAgIHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImFjY291bnRUeXBlXCIsXG5cdFx0XHRcImN1cnJlbmN5SURcIixcblx0XHRcdFwiaWJJRFwiLFxuXHRcdFx0XCJtYXJnaW5cIixcblx0XHRcdFwibmlja25hbWVcIixcblx0XHRcdFwib3BlbmVkV2hlblwiLFxuXHRcdFx0XCJwYXR0ZXJuRGF5VHJhZGVzXCIsXG5cdFx0XHRcInN0YXR1c1wiLFxuXHRcdFx0XCJ0cmFkaW5nVHlwZVwiLFxuXHRcdFx0XCJhY2NvdW50TWdtdFR5cGVcIixcblx0XHRcdFwiY29tbWlzc2lvblNjaGVkdWxlXCIsXG5cdFx0XSkge1xuXHRcdFx0dGhpc1trZXldID0gZGF0YVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcblx0XHRpZiAodHlwZSAmJiAhY2IpIHtcblx0XHRcdGNiID0gdHlwZTtcblx0XHRcdHR5cGUgPSBudWxsO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCB0eXBlID8gZGF0YVt0eXBlXSA6IGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdC8vIGdldFBlcmZvcm1hbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpXG5cdC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG5cdC8vIGdldFBlcmZvcm1hbmNlKGNiKVxuXHRnZXRQZXJmb3JtYW5jZSgpIHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIlwiO1xuXHRcdGxldCBjYjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMl07XG5cdFx0XHRjb25zdCBbIHN0YXJ0RGF0ZSwgZW5kRGF0ZSBdID0gYXJndW1lbnRzO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIHN0YXJ0RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gIGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMV07XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgL2hpc3Rvcnk/cGVyaW9kPSR7YXJndW1lbnRzWzBdfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzBdO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7dGhpcy5hY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRwbGFjZU9yZGVyKHR5cGUsIGRhdGEsIGNiKSB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEsIGNiKTtcblx0fVxuXG5cdGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcblx0XHRkYXRhLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdGRhdGEuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUYXhEb2N1bWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhZGVDb25maXJtcyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5LCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5LCBjYik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IEJMT1RURVJfVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhLm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSh1c2VySUQsIHR5cGUsIGRhdGEsIGNiKSB7XG5cdFx0aWYgKHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0UpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcblx0XHRcdFx0dHJhbkFtb3VudDogZGF0YSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0Vcblx0XHRcdFx0PyBgL3NpZ251cHMvcHJhY3RpY2VgXG5cdFx0XHRcdDogYC9zaWdudXBzL2xpdmVgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuICAgIG1ldGhvZCA9IFwiR0VUXCIsXG4gICAgZW5kcG9pbnQsXG4gICAgc2Vzc2lvbktleSxcbiAgICBib2R5LFxuICAgIGFkZGxIZWFkZXJzID0ge30sXG4gICAgaG9zdCA9IEhPU1RTLkFQSSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG4gICAgICAgIGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciwgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKHJlc0JvZHkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGUgPT0gNDAxID8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSkgOiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcbiAgICBlbnY6IG51bGwsXG4gICAgaHR0cEltcGw6IG51bGwsXG4gICAgYXBwVHlwZUlEOiBudWxsLFxuICAgIGFwcFZlcnNpb246IG51bGwsXG4gICAgd2xwSUQ6IG51bGwsXG4gICAgYXBwc1BhcnRuZXJJRDogbnVsbCxcbiAgICByZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG4gICAgQVBJOiBcImFwaVwiLFxuICAgIEFQUFM6IFwiYXBwc1wiLFxuICAgIFJFUE9SVFM6IFwicmVwb3J0c1wiXG59O1xuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuICAgIFVBVDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICB9LFxuICAgIFBST0Q6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGgubmV0XCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG4gICAgZW52LFxuICAgIGh0dHBJbXBsLFxuICAgIGFwcFR5cGVJRCxcbiAgICBhcHBWZXJzaW9uLFxuICAgIHdscElEID0gXCJEV1wiLFxuICAgIGFwcHNQYXJ0bmVySUQsXG4gICAgcmVmZXJyYWxDb2RlLFxufSkge1xuICAgIENvbmZpZy5lbnYgPSBlbnY7XG4gICAgQ29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG4gICAgQ29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcbiAgICBDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG4gICAgQ29uZmlnLndscElEID0gd2xwSUQ7XG4gICAgQ29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuICAgIENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRHJpdmVXZWFsdGhFcnJvcixcbiAgICBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuY29uc3QgU0VDX0ZFRV9SQVRFID0gMC4wMDAwMjMxO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1xuXHRcdFx0XCJvcmRlcklEXCIsXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiY3VtUXR5XCIsXG5cdFx0XHRcImFjY291bnROb1wiLFxuXHRcdFx0XCJjb21tZW50XCIsXG5cdFx0XHRcImNvbW1pc3Npb25cIixcblx0XHRcdFwiY3JlYXRlZEJ5SURcIixcblx0XHRcdFwiY3JlYXRlZFdoZW5cIixcblx0XHRcdFwiZXhlY3V0ZWRXaGVuXCIsXG5cdFx0XHRcImdyb3NzVHJhZGVBbXRcIixcblx0XHRcdFwiaW5zdHJ1bWVudElEXCIsXG5cdFx0XHRcImxlYXZlc1F0eVwiLFxuXHRcdFx0XCJvcmRlck5vXCIsXG5cdFx0XHRcIm9yZGVyUXR5XCIsXG5cdFx0XHRcInNpZGVcIixcblx0XHRcdFwiYXV0b1N0b3BcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0Y2FuY2VsKGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHt0aGlzLm9yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSwgKCkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBTSURFUygpIHsgcmV0dXJuIHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG5cdFx0TkVXOiBcIjBcIixcblx0XHRQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuXHRcdEZJTEw6IFwiMlwiLFxuXHRcdENBTkNFTEVEOiBcIjRcIixcblx0XHRSRUpFQ1RFRDogXCI4XCIsXG5cdH0gfVxuXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBuZXcgT3JkZXIoZGF0YSkpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGUodHlwZSwge1xuXHRcdGFjY291bnRJRCxcblx0XHRhY2NvdW50Tm8sXG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRUeXBlLFxuXHR9LCB7XG5cdFx0aW5zdHJ1bWVudCxcblx0XHRzaWRlLFxuXHRcdHF0eSxcblx0XHRhbW91bnRDYXNoLFxuXHRcdGNvbW1lbnQsXG5cdFx0YXV0b1N0b3AsXG5cdFx0cHJpY2UsXG5cdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuXHR9LCBjYikge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkgdGhyb3cgbmV3IEVycm9yKGBcInF0eVwiIGFuZCBcImFtb3VudENhc2hcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLmApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgIXByaWNlKSB0aHJvdyBuZXcgRXJyb3IoYExpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXCJwcmljZS5cImApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHRocm93IG5ldyBFcnJvcihgXCJhdXRvU3RvcFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5gKTtcblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IHR5cGUsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdG9yZGVyUXR5OiBxdHkgPyBxdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggPyBhbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSwgKGRhdGEpID0+IHtcblxuXHRcdFx0bGV0IGZpbGxNYXhSZXRyaWVzID0gdHlwZSA9PT0gT3JkZXIuVFlQRVMuTUFSS0VUID8gMTAgOiAxO1xuXG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuXHRcdFx0bGV0IHBvbGwsIHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRmaWxsTWF4UmV0cmllcy0tO1xuXHRcdFx0XHRPcmRlci5nZXRCeUlEKGRhdGEub3JkZXJJRCwgdXNlcklELCAoZXJyLCBvcmRlcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuXHRcdFx0XHRcdGlmIChmaWxsTWF4UmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG5cdFx0XHRcdFx0aWYgKG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmIG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZWFjaCBvcmRlciBpczpcblx0Ly8geyBzaWRlLCBxdHksIG1hcmtldFByaWNlLCByZWZlcmVuY2VJRCB9XG5cdC8vIGNvbW1pc3Npb24gc2NoZWR1bGUgaXM6XG5cdC8vIHsgYmFzZVJhdGUsIGJhc2VTaGFyZXMsIGV4Y2Vzc1JhdGUsIGZyYWN0aW9uYWxSYXRlLCBzaGFyZUFtb3VudFJvdW5kaW5nLCBzdWJzY3JpcHRpb24sIGJhc2tldFNjaGVkdWxlLCBwYXNzVGhyb3VnaEZlZXMgfVxuXHRzdGF0aWMgZXN0aW1hdGVDb21taXNzaW9uKG9yZGVycywgY29tbWlzc2lvblNjaGVkdWxlKSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlID0gdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcylcblx0XHRcdFx0KSAqIGNvbW1pc3Npb25TY2hlZHVsZS5leGNlc3NSYXRlXG5cdFx0XHQpO1xuXG5cdFx0XHRsZXQgc2VjRmVlID0gMCwgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblxuICAgIHN0YXRpYyBnZXQgQUxMT1dFRF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREVQT1NJVDogXCJERVBPU0lUXCIsXG4gICAgICAgIFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG4gICAgICAgIERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIG1pbkFtb3VudCxcbiAgICAgICAgbWF4QW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZpbHRlcnMgPSB7fSxcbiAgICB9ID0ge30sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcbiAgICAgICAgaWYgKG1pbkFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtaW5BbW91bnQ9JHttaW5BbW91bnR9YDtcbiAgICAgICAgaWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcbiAgICAgICAgaWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMubmFtZSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbbmFtZV09JHtmaWx0ZXJzLm5hbWV9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuYWxsb3dlZCkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbYWxsb3dlZF09JHtmaWx0ZXJzLmFsbG93ZWR9YDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLkFQUFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL21ldGhvZHM/JHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXN0RGVwb3NpdHModXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0cyB7XG5cbiAgICBzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPUZpblRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24gfHwgW10pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBsYWNlZE9yZGVycyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1PcmRlclRyYW5zYFxuICAgICAgICAgICAgKyBgJlJlcG9ydEZvcm1hdD1KU09OYFxuICAgICAgICAgICAgKyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuICAgICAgICAgICAgKyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG4gICAgICAgICAgICArIGAmTGFuZ3VhZ2VJRD1lbl9VU2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuUkVQT1JUUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudHJhbnNhY3Rpb24pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN0YXRlbWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAyYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRyYWRlQ29uZmlybXModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAxYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFRheERvY3VtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTCh1c2VySUQsIGFjY291bnRJRCwgZmlsZUtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS51cmwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFN1cHBvcnRlZENvdW50cmllcyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2NvdW50cmllc2AsXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBcImV4Y2hhbmdlSURcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudFR5cGVJRFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNYXhcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWluXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZVN0ZXBcIixcbiAgICAgICAgICAgIFwicmF0ZUFza1wiLFxuICAgICAgICAgICAgXCJyYXRlQmlkXCIsXG4gICAgICAgICAgICBcInJhdGVQcmVjaXNpb25cIixcbiAgICAgICAgICAgIFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInRyYWRlU3RhdHVzXCIsXG4gICAgICAgICAgICBcInVybEltYWdlXCIsXG4gICAgICAgICAgICBcInVybEludmVzdG9yXCIsXG4gICAgICAgICAgICBcImNoYWlraW5QZ3JcIixcbiAgICAgICAgICAgIFwicHJpb3JDbG9zZVwiLFxuICAgICAgICAgICAgXCJtYXJrZXRTdGF0ZVwiLFxuICAgICAgICAgICAgXCJmdW5kYW1lbnRhbERhdGFNb2RlbFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRSQURFX1NUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBJTkFDVElWRTogXCIwXCIsXG4gICAgICAgIEFDVElWRTogXCIxXCIsXG4gICAgICAgIENMT1NFRDogXCIyXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0IENIQVJUX0NPTVBSRVNTSU9OUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREFZOiAwLFxuICAgICAgICBNSU5VVEVfMTogMSxcbiAgICAgICAgTUlOVVRFXzU6IDQsXG4gICAgICAgIE1JTlVURV8zMDogOCxcbiAgICAgICAgSE9VUjogOSxcbiAgICAgICAgV0VFSzogMTBcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9sJHtzeW1ib2xzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9PSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZWFyY2goY3JpdGVyaWEsIGNiKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuICAgICAgICBpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRRdW90ZShjYikge1xuICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlclBhc3NlZE9uZVN5bWJvbCkgb2JqID0gb2JqW3N5bWJvbFswXV07XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBvYmopO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcnREYXRhKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbikge1xuICAgICAgICBsZXQgY2IsIHRpbWVQYXJhbXM7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbmQgICA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1s0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YS5zcGxpdChcInxcIikpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbmNvbnN0IF9nZXRTZXR0aW5ncyA9ICh1c2VySUQsIGtleSwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdH0sIChkYXRhKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YS52YWx1ZSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmNvbnN0IF9nZXRBbGxTZXR0aW5ncyA9ICh1c2VySUQsIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdH0sIChkYXRhKSA9PiB7XG5cdFx0bGV0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRmb3IgKGxldCBzZXR0aW5nIG9mIGRhdGEpIHtcblx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHR9XG5cdFx0Y2IgJiYgY2IobnVsbCwgZm9ybWF0dGVkRGF0YSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmNvbnN0IF9zZXRTZXR0aW5nID0gKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdGJvZHk6IHtcblx0XHRcdGtleSwgdmFsdWVcblx0XHR9XG5cdH0sICgpID0+IHtcblx0XHRjYiAmJiBjYihudWxsKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImNvdW50cnlJRFwiLFxuICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIixcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCIsXG4gICAgICAgICAgICBcImxhbmd1YWdlSURcIixcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwicmVmZXJyYWxDb2RlXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJ3bHBJRFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidXNDaXRpemVuXCIsXG4gICAgICAgICAgICBcImxhc3RMb2dpbldoZW5cIixcbiAgICAgICAgICAgIFwiY2l0aXplbnNoaXBcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWNjb3VudHMoY2IpIHtcbiAgICAgICAgcmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCwgY2IpO1xuICAgIH1cblxuXHR1cGxvYWREb2N1bWVudChmaWxlLCB0eXBlLCBjYikge1xuICAgICAgICByZXR1cm4gVXNlci51cGxvYWREb2N1bWVudCh0aGlzLnVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpO1xuICAgIH1cblxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwgY2IpXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKSB7XG4gICAgXHRpZiAoIWNiKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0XHR9XG4gICAgfVxuXG5cdC8vIGdldFNldHRpbmdzKGtleSwgY2IpXG5cdC8vIGdldFNldHRpbmdzKGNiKVxuICAgIGdldFNldHRpbmdzKCkge1xuICAgIFx0Y29uc3QgWyBrZXksIGNiIF0gPSBhcmd1bWVudHM7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2dldFNldHRpbmdzKHRoaXMudXNlcklELCBrZXksIGNiKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh1c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcblx0fVxuXG4gICAgc2V0U2V0dGluZyhrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUsIGNiKTtcbiAgICB9XG5cbiAgICB1bnNldFNldHRpbmcoa2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFN0YXR1cyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBQRU5ESU5HOiAxLFxuICAgICAgICBBUFBST1ZFRDogMixcbiAgICAgICAgUkVKRUNURUQ6IDMsXG4gICAgICAgIFJFVk9LRUQ6IDQsXG4gICAgICAgIENMT1NFRDogNSxcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgVXNlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuICAgICAgICAgICAgICAgIGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICBvc1R5cGU6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgc2NyUmVzOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBpcEFkZHJlc3M6IFwidW5rbm93blwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5zYXZlKGRhdGEudXNlcklELCBkYXRhLnNlc3Npb25LZXkpO1xuICAgICAgICAgICAgVXNlci5nZXRCeVVzZXJJRChkYXRhLnVzZXJJRCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHVzZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSwgKGVyciwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIHRydWUpO1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgIHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG4gICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgdXRtVGVybSxcbiAgICB9LCBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IGxvZ2luQXV0b21hdGljYWxseTtcbiAgICAgICAgICAgIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgICAgICAgICAgd2xwSUQ6IENvbmZpZy53bHBJRCxcbiAgICAgICAgICAgICAgICByZWZlcnJhbENvZGUsXG4gICAgICAgICAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgICAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgICAgICAgICAgdXRtU291cmNlLFxuICAgICAgICAgICAgICAgIHV0bVRlcm0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZVxuXHR9LCBjYikge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGVcblx0XHRcdH0sXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IERPQ1VNRU5UX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBQSE9UT19JRDogXCJQaWN0dXJlIElEXCIsXG5cdFx0UFJPT0ZfT0ZfQUREUkVTUzogXCJQcm9vZiBvZiBhZGRyZXNzXCIsXG5cdFx0UEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTOiBcIlBpY3R1cmUgSURfUHJvb2Ygb2YgYWRkcmVzc1wiLFxuICAgIH0gfVxuXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQsIGZpbGUsIHR5cGUsIGNiKSB7XG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZG9jdW1lbnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9