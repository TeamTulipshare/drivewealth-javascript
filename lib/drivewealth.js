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
	
	var _Instrument = __webpack_require__(9);
	
	var _Instrument2 = _interopRequireDefault(_Instrument);
	
	var _Order = __webpack_require__(7);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _User = __webpack_require__(10);
	
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
	    Error: _Error2.default,
	    Funding: _Funding2.default,
	    Instrument: _Instrument2.default,
	    Order: _Order2.default,
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Account = function () {
	    function Account(data) {
	        _classCallCheck(this, Account);
	
	        var _arr = ["accountID", "userID", "accountNo", "accountType", "currencyID", "ibID", "margin", "nickname", "openedWhen", "patternDayTrades", "status", "tradingType", "accountMgmtType"];
	
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
	            resBody = JSON.parse(resBody);
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
	    referralCode: null
	};
	
	var HOSTS = exports.HOSTS = {
	    API: "api",
	    APPS: "apps",
	    REPORTS: "reports"
	};
	
	var ENVIRONMENTS = exports.ENVIRONMENTS = {
	    UAT: (_UAT = {}, _defineProperty(_UAT, HOSTS.API, "http://api.drivewealth.io/v1"), _defineProperty(_UAT, HOSTS.APPS, "http://apps.drivewealth.io/"), _defineProperty(_UAT, HOSTS.REPORTS, "http://reports.drivewealth.io/"), _UAT),
	    PROD: (_PROD = {}, _defineProperty(_PROD, HOSTS.API, "https://api.drivewealth.net/v1"), _defineProperty(_PROD, HOSTS.APPS, "https://apps.drivewealth.com/"), _defineProperty(_PROD, HOSTS.REPORTS, "https://reports.drivewealth.com"), _PROD)
	};
	
	function setup(_ref) {
	    var env = _ref.env,
	        httpImpl = _ref.httpImpl,
	        appTypeID = _ref.appTypeID,
	        appVersion = _ref.appVersion,
	        _ref$wlpID = _ref.wlpID,
	        wlpID = _ref$wlpID === undefined ? "DW" : _ref$wlpID,
	        referralCode = _ref.referralCode;
	
	    Config.env = env;
	    Config.httpImpl = httpImpl;
	    Config.appTypeID = appTypeID;
	    Config.appVersion = appVersion;
	    Config.wlpID = wlpID;
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	                fillRetryInterval = _ref2$fillRetryInterv === undefined ? 500 : _ref2$fillRetryInterv,
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
	                if (!Order.TYPES.MARKET || !waitForFill) return cb && cb(null, data.orderID);
	
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
	
	            var queryString = "partner=" + _Config.Config.wlpID + "&userID=" + userID + "&accountID=" + accountID;
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
/* 10 */
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
	
	        // getSettings(key, cb)
	        // getSettings(cb)
	
	    }, {
	        key: "getSettings",
	        value: function getSettings() {
	            if (arguments.length === 1) {
	                this.getAllSettings(arguments[0]);
	            }
	            var cb = arguments[1];
	
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + this.userID + "/settings/" + arguments[0],
	                sessionKey: _Sessions2.default.get(this.userID)
	            }, function (data) {
	                cb && cb(null, data.value);
	            }, function (err) {
	                return cb && cb(err);
	            });
	        }
	    }, {
	        key: "getAllSettings",
	        value: function getAllSettings(cb) {
	            (0, _request2.default)({
	                method: "GET",
	                endpoint: "/users/" + this.userID + "/settings",
	                sessionKey: _Sessions2.default.get(this.userID)
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
	    }, {
	        key: "setSetting",
	        value: function setSetting(key, value, cb) {
	            (0, _request2.default)({
	                method: "POST",
	                endpoint: "/users/" + this.userID + "/settings",
	                sessionKey: _Sessions2.default.get(this.userID),
	                body: {
	                    key: key, value: value
	                }
	            }, function () {
	                cb && cb(null);
	            }, function (err) {
	                return cb && cb(err);
	            });
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
	        value: function getStatus() {
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
	        value: function create(_ref, cb) {
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
	                return User.login(username, password, cb);
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
	    }]);
	
	    return User;
	}();
	
	exports.default = User;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNmVkM2VhNDBlMDgzZjAxM2MzZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJrZXkiLCJ0eXBlIiwiY2IiLCJtZXRob2QiLCJlbmRwb2ludCIsInVzZXJJRCIsImFjY291bnRJRCIsInNlc3Npb25LZXkiLCJnZXQiLCJlcnIiLCJxdWVyeVN0cmluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwiZ2V0RnVuZGluZ01ldGhvZHMiLCJtYXAiLCJhY2NvdW50IiwiQ0FTSCIsIk9SREVSUyIsIlRSQU5TQUNUSU9OUyIsIlBPU0lUSU9OUyIsIkFMTCIsIm9uU3VjY2VzcyIsIm9uRXJyb3IiLCJib2R5IiwiYWRkbEhlYWRlcnMiLCJob3N0IiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImhlYWRlciIsImVudiIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwSW1wbCIsInN0YXR1c0NvZGUiLCJyZXNIZWFkZXJzIiwicmVzQm9keSIsImNvbnRlbnRUeXBlIiwiaW5kZXhPZiIsInBhcnNlIiwiU3RyaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiQ29uZmlnIiwiYXBwVHlwZUlEIiwiYXBwVmVyc2lvbiIsInJlZmVycmFsQ29kZSIsIkhPU1RTIiwiQVBQUyIsIlJFUE9SVFMiLCJVQVQiLCJQUk9EIiwid2xwSUQiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwicmVqZWN0aW9uUmVhc29uIiwib3JkUmVqUmVhc29uIiwic3RhdHVzIiwib3JkU3RhdHVzIiwib3JkVHlwZSIsIm9yZGVySUQiLCJpbnN0cnVtZW50Iiwic2lkZSIsInF0eSIsImFtb3VudENhc2giLCJjb21tZW50IiwiYXV0b1N0b3AiLCJwcmljZSIsIndhaXRGb3JGaWxsIiwiZmlsbFJldHJ5SW50ZXJ2YWwiLCJmaWxsTWF4UmV0cmllcyIsIlRZUEVTIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJsaW1pdFByaWNlIiwiTElNSVQiLCJwb2xsIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIm9yZGVyIiwiU1RBVFVTRVMiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiQlVZIiwiU0VMTCIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJBcnJheSIsImlzQXJyYXkiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInNsaWNlIiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsImNvbXByZXNzaW9uIiwidGltZVBhcmFtcyIsImRhdGVTdGFydCIsInRvSVNPU3RyaW5nIiwicmVwbGFjZSIsImRhdGVFbmQiLCJJTkFDVElWRSIsIkFDVElWRSIsIkNMT1NFRCIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImdldExpc3RGb3JVc2VySUQiLCJnZXRBbGxTZXR0aW5ncyIsInZhbHVlIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciLCJyZW1vdmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsIlBFTkRJTkciLCJBUFBST1ZFRCIsIlJFVk9LRUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUNKaEwseUJBQVEsTUFESjtBQUVKQywyQkFBVSxlQUZOO0FBR0o2Qix1QkFBTTtBQUNGaUksdUNBREU7QUFFRkMsdUNBRkU7QUFHRlMseUNBSEU7QUFJRkMsdUNBSkU7QUFLRk8sb0NBQWVOLEtBTGI7QUFNRlYsMkNBTkU7QUFPRnJHLDRCQUFPLGVBQU9BLEtBUFo7QUFRRk4sK0NBUkU7QUFTRnNILDZDQVRFO0FBVUZDLDJDQVZFO0FBV0ZDLHlDQVhFO0FBWUZDLHlDQVpFO0FBYUZDO0FBYkU7QUFIRixjQUFSLEVBa0JHLFVBQUNwTCxJQUFELEVBQVU7QUFDVCx3QkFBT0osS0FBSzBMLEtBQUwsQ0FBV25CLFFBQVgsRUFBcUJDLFFBQXJCLEVBQStCakssRUFBL0IsQ0FBUDtBQUNILGNBcEJELEVBb0JHO0FBQUEsd0JBQU9BLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBcEJIO0FBcUJIOzs7NkJBekZxQjtBQUFFLG9CQUFPO0FBQzNCNkssMEJBQVMsQ0FEa0I7QUFFM0JDLDJCQUFVLENBRmlCO0FBRzNCNUUsMkJBQVUsQ0FIaUI7QUFJM0I2RSwwQkFBUyxDQUprQjtBQUszQm5DLHlCQUFRO0FBTG1CLGNBQVA7QUFNckI7Ozs7OzttQkE1R2MxSixJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTZlZDNlYTQwZTA4M2YwMTNjM2QiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBzZXR1cCwgRU5WSVJPTk1FTlRTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBFTlZJUk9OTUVOVFMsXG5cbiAgICBBY2NvdW50LFxuICAgIEVycm9yLFxuICAgIEZ1bmRpbmcsXG4gICAgSW5zdHJ1bWVudCxcbiAgICBPcmRlcixcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiYWNjb3VudFR5cGVcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lJRFwiLFxuICAgICAgICAgICAgXCJpYklEXCIsXG4gICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiLFxuICAgICAgICAgICAgXCJvcGVuZWRXaGVuXCIsXG4gICAgICAgICAgICBcInBhdHRlcm5EYXlUcmFkZXNcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInRyYWRpbmdUeXBlXCIsXG4gICAgICAgICAgICBcImFjY291bnRNZ210VHlwZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCbG90dGVyKHR5cGUsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlICYmICFjYikge1xuICAgICAgICAgICAgY2IgPSB0eXBlO1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRTdW1tYXJ5LyR7dGhpcy5hY2NvdW50SUR9JHt0eXBlID8gJy8nICsgdHlwZSA6IFwiXCJ9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICAvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UoY2IpXG4gICAgZ2V0UGVyZm9ybWFuY2UoKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBjYjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG4gICAgICAgICAgICBhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuICAgICAgICAgICAgYWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG4gICAgICAgICAgICB1c2VySUQ6IHRoaXMudXNlcklELFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcbiAgICAgICAgZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcbiAgICAgICAgZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcbiAgICAgICAgcmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgQ0FTSDogXCJjYXNoXCIsXG4gICAgICAgIE9SREVSUzogXCJvcmRlcnNcIixcbiAgICAgICAgVFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuICAgICAgICBQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG4gICAgICAgIEFMTDogbnVsbCxcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxuICAgIGVuZHBvaW50LFxuICAgIHNlc3Npb25LZXksXG4gICAgYm9keSxcbiAgICBhZGRsSGVhZGVycyA9IHt9LFxuICAgIGhvc3QgPSBIT1NUUy5BUEksXG59LCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG4gICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25LZXkpIHtcbiAgICAgICAgaGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuXG4gICAgZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICBpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yLCBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAocmVzQm9keSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZSA9PSA0MDEgPyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlKSA6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICByZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG4gICAgQVBJOiBcImFwaVwiLFxuICAgIEFQUFM6IFwiYXBwc1wiLFxuICAgIFJFUE9SVFM6IFwicmVwb3J0c1wiXG59O1xuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuICAgIFVBVDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pby9cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvL1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb20vXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG4gICAgZW52LFxuICAgIGh0dHBJbXBsLFxuICAgIGFwcFR5cGVJRCxcbiAgICBhcHBWZXJzaW9uLFxuICAgIHdscElEID0gXCJEV1wiLFxuICAgIHJlZmVycmFsQ29kZSxcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuICAgIENvbmZpZy53bHBJRCA9IHdscElEO1xuICAgIENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRHJpdmVXZWFsdGhFcnJvcixcbiAgICBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYWluVXNlcikgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJvcmRlcklEXCIsXG4gICAgICAgICAgICBcImFjY291bnRJRFwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwiY3VtUXR5XCIsXG4gICAgICAgICAgICBcImFjY291bnROb1wiLFxuICAgICAgICAgICAgXCJjb21tZW50XCIsXG4gICAgICAgICAgICBcImNvbW1pc3Npb25cIixcbiAgICAgICAgICAgIFwiY3JlYXRlZEJ5SURcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZFdoZW5cIixcbiAgICAgICAgICAgIFwiZXhlY3V0ZWRXaGVuXCIsXG4gICAgICAgICAgICBcImdyb3NzVHJhZGVBbXRcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcImxlYXZlc1F0eVwiLFxuICAgICAgICAgICAgXCJvcmRlck5vXCIsXG4gICAgICAgICAgICBcIm9yZGVyUXR5XCIsXG4gICAgICAgICAgICBcInNpZGVcIixcbiAgICAgICAgICAgIFwiYXV0b1N0b3BcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5vcmRTdGF0dXM7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZTtcbiAgICB9XG5cbiAgICBjYW5jZWwoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9vcmRlcnMvJHt0aGlzLm9yZGVySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTSURFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgQlVZOiBcIkJcIixcbiAgICAgICAgU0VMTDogXCJTXCIsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgTUFSS0VUOiBcIjFcIixcbiAgICAgICAgTElNSVQ6IFwiMlwiLFxuICAgICAgICBTVE9QOiBcIjNcIixcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBORVc6IFwiMFwiLFxuICAgICAgICBQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuICAgICAgICBGSUxMOiBcIjJcIixcbiAgICAgICAgQ0FOQ0VMRUQ6IFwiNFwiLFxuICAgICAgICBSRUpFQ1RFRDogXCI4XCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgT3JkZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlLCB7XG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgYWNjb3VudE5vLFxuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRUeXBlLFxuICAgIH0sIHtcbiAgICAgICAgaW5zdHJ1bWVudCxcbiAgICAgICAgc2lkZSxcbiAgICAgICAgcXR5LFxuICAgICAgICBhbW91bnRDYXNoLFxuICAgICAgICBjb21tZW50LFxuICAgICAgICBhdXRvU3RvcCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIHdhaXRGb3JGaWxsID0gdHJ1ZSxcbiAgICAgICAgZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG4gICAgICAgIGZpbGxNYXhSZXRyaWVzID0gMTAsXG4gICAgfSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudENhc2ggJiYgcXR5KSB0aHJvdyBuZXcgRXJyb3IoYFwicXR5XCIgYW5kIFwiYW1vdW50Q2FzaFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuYCk7XG4gICAgICAgIGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgIXByaWNlKSB0aHJvdyBuZXcgRXJyb3IoYExpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXCJwcmljZS5cImApO1xuICAgICAgICBpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmIGF1dG9TdG9wKSB0aHJvdyBuZXcgRXJyb3IoYFwiYXV0b1N0b3BcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuYCk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudElELFxuICAgICAgICAgICAgICAgIGFjY291bnRObyxcbiAgICAgICAgICAgICAgICB1c2VySUQsXG4gICAgICAgICAgICAgICAgYWNjb3VudFR5cGUsXG4gICAgICAgICAgICAgICAgb3JkVHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBzaWRlLFxuICAgICAgICAgICAgICAgIG9yZGVyUXR5OiBxdHkgPyBxdHkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYW1vdW50Q2FzaDogYW1vdW50Q2FzaCA/IGFtb3VudENhc2ggOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY29tbWVudCxcbiAgICAgICAgICAgICAgICBhdXRvU3RvcCxcbiAgICAgICAgICAgICAgICBwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFPcmRlci5UWVBFUy5NQVJLRVQgfHwgIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuICAgICAgICAgICAgbGV0IHBvbGwsIHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGxNYXhSZXRyaWVzLS07XG4gICAgICAgICAgICAgICAgT3JkZXIuZ2V0QnlJRChkYXRhLm9yZGVySUQsIHVzZXJJRCwgKGVyciwgb3JkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsTWF4UmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09yZGVyLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXG4gICAgc3RhdGljIGdldCBBTExPV0VEX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBERVBPU0lUOiBcIkRFUE9TSVRcIixcbiAgICAgICAgV0lUSERSQVc6IFwiV0lUSERSQVdcIixcbiAgICAgICAgREVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgbWluQW1vdW50LFxuICAgICAgICBtYXhBbW91bnQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZmlsdGVycyA9IHt9LFxuICAgIH0gPSB7fSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudCAmJiAobWluQW1vdW50IHx8IG1heEFtb3VudCkpIHRocm93IG5ldyBFcnJvcihgXCJhbW91bnRcIiBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFwibWluQW1vdW50XCIgb3IgXCJtYXhBbW91bnQuXCJgKTtcblxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBgcGFydG5lcj0ke0NvbmZpZy53bHBJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcbiAgICAgICAgaWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcbiAgICAgICAgaWYgKG1pbkFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtaW5BbW91bnQ9JHttaW5BbW91bnR9YDtcbiAgICAgICAgaWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcbiAgICAgICAgaWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMubmFtZSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbbmFtZV09JHtmaWx0ZXJzLm5hbWV9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcbiAgICAgICAgaWYgKGZpbHRlcnMuYWxsb3dlZCkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbYWxsb3dlZF09JHtmaWx0ZXJzLmFsbG93ZWR9YDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLkFQUFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL21ldGhvZHM/JHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQYXN0RGVwb3NpdHModXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBcImV4Y2hhbmdlSURcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudFR5cGVJRFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNYXhcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWluXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZVN0ZXBcIixcbiAgICAgICAgICAgIFwicmF0ZUFza1wiLFxuICAgICAgICAgICAgXCJyYXRlQmlkXCIsXG4gICAgICAgICAgICBcInJhdGVQcmVjaXNpb25cIixcbiAgICAgICAgICAgIFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInRyYWRlU3RhdHVzXCIsXG4gICAgICAgICAgICBcInVybEltYWdlXCIsXG4gICAgICAgICAgICBcInVybEludmVzdG9yXCIsXG4gICAgICAgICAgICBcImNoYWlraW5QZ3JcIixcbiAgICAgICAgICAgIFwicHJpb3JDbG9zZVwiLFxuICAgICAgICAgICAgXCJtYXJrZXRTdGF0ZVwiLFxuICAgICAgICAgICAgXCJmdW5kYW1lbnRhbERhdGFNb2RlbFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRSQURFX1NUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBJTkFDVElWRTogXCIwXCIsXG4gICAgICAgIEFDVElWRTogXCIxXCIsXG4gICAgICAgIENMT1NFRDogXCIyXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0IENIQVJUX0NPTVBSRVNTSU9OUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREFZOiAwLFxuICAgICAgICBNSU5VVEVfMTogMSxcbiAgICAgICAgTUlOVVRFXzU6IDQsXG4gICAgICAgIE1JTlVURV8zMDogOCxcbiAgICAgICAgSE9VUjogOSxcbiAgICAgICAgV0VFSzogMTBcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9sJHtzeW1ib2xzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9PSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZWFyY2goY3JpdGVyaWEsIGNiKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuICAgICAgICBpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRRdW90ZShjYikge1xuICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogcGFyc2VkUXVvdGVbMV0sXG4gICAgICAgICAgICAgICAgICAgIGFzazogcGFyc2VkUXVvdGVbMl0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyUGFzc2VkT25lU3ltYm9sKSBvYmogPSBvYmpbc3ltYm9sWzBdXTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG9iaik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRDaGFydERhdGEoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uKSB7XG4gICAgICAgIGxldCBjYiwgdGltZVBhcmFtcztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUVuZCAgID0gYXJndW1lbnRzWzNdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYGRhdGVTdGFydD0ke2RhdGVTdGFydH0mZGF0ZUVuZD0ke2RhdGVFbmR9YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGB0cmFkaW5nRGF5cz0ke2FyZ3VtZW50c1syXX1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbM107XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2JhcnM/aW5zdHJ1bWVudElEPSR7aW5zdHJ1bWVudElEfSZjb21wcmVzc2lvbj0ke2NvbXByZXNzaW9ufSYke3RpbWVQYXJhbXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhLnNwbGl0KFwifFwiKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImNvdW50cnlJRFwiLFxuICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIixcbiAgICAgICAgICAgIFwiZmlyc3ROYW1lXCIsXG4gICAgICAgICAgICBcImxhbmd1YWdlSURcIixcbiAgICAgICAgICAgIFwibGFzdE5hbWVcIixcbiAgICAgICAgICAgIFwicGhvbmVOdW1iZXJcIixcbiAgICAgICAgICAgIFwicmVmZXJyYWxDb2RlXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJ1c2VybmFtZVwiLFxuICAgICAgICAgICAgXCJ3bHBJRFwiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidXNDaXRpemVuXCIsXG4gICAgICAgICAgICBcImxhc3RMb2dpbldoZW5cIixcbiAgICAgICAgICAgIFwiY2l0aXplbnNoaXBcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWNjb3VudHMoY2IpIHtcbiAgICAgICAgQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklELCBjYik7XG4gICAgfVxuXG4gICAgLy8gZ2V0U2V0dGluZ3Moa2V5LCBjYilcbiAgICAvLyBnZXRTZXR0aW5ncyhjYilcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0QWxsU2V0dGluZ3MoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2IgPSBhcmd1bWVudHNbMV07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2FyZ3VtZW50c1swXX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS52YWx1ZSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRBbGxTZXR0aW5ncyhjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRhID0ge307XG4gICAgICAgICAgICBmb3IgKGxldCBzZXR0aW5nIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmb3JtYXR0ZWREYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHNldFNldHRpbmcoa2V5LCB2YWx1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3NgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICBrZXksIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgdW5zZXRTZXR0aW5nKGtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh0aGlzLnVzZXJJRCl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBFTkRJTkc6IDEsXG4gICAgICAgIEFQUFJPVkVEOiAyLFxuICAgICAgICBSRUpFQ1RFRDogMyxcbiAgICAgICAgUkVWT0tFRDogNCxcbiAgICAgICAgQ0xPU0VEOiA1LFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBVc2VyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG4gICAgICAgICAgICAgICAgYXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuICAgICAgICAgICAgICAgIG9zVHlwZTogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBzY3JSZXM6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGlwQWRkcmVzczogXCJ1bmtub3duXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnNhdmUoZGF0YS51c2VySUQsIGRhdGEuc2Vzc2lvbktleSk7XG4gICAgICAgICAgICBVc2VyLmdldEJ5VXNlcklEKGRhdGEudXNlcklELCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZmFsc2UpO1xuICAgICAgICB9LCAoZXJyLCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDA0KSByZXR1cm4gY2IgJiYgY2IobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICBjYiAmJiBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgcmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcbiAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgdXRtU291cmNlLFxuICAgICAgICB1dG1UZXJtLFxuICAgIH0sIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzMTogZW1haWwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgICAgICAgICB3bHBJRDogQ29uZmlnLndscElELFxuICAgICAgICAgICAgICAgIHJlZmVycmFsQ29kZSxcbiAgICAgICAgICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICAgICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgICAgICAgICAgdXRtVGVybSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9