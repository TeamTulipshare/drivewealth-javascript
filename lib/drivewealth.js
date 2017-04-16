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
	                cb && cb(null, data.transaction);
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
	        value: function generateDownloadURL(userID, accountID, fileKey) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMzJmMmViYzExYTEwZjZmNjk2NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwiZ2V0VHJhbnNhY3Rpb25zIiwiZ2V0UGxhY2VkT3JkZXJzIiwiZ2V0U3RhdGVtZW50cyIsImZpbGVLZXkiLCJnZW5lcmF0ZURvd25sb2FkVVJMIiwibWFwIiwiYWNjb3VudCIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYm9keSIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIkNvbmZpZyIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsInJlZmVycmFsQ29kZSIsIkhPU1RTIiwiQVBQUyIsIlJFUE9SVFMiLCJVQVQiLCJQUk9EIiwiRHJpdmVXZWFsdGhFcnJvciIsIkRyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwicHJpY2UiLCJ3YWl0Rm9yRmlsbCIsImZpbGxSZXRyeUludGVydmFsIiwiZmlsbE1heFJldHJpZXMiLCJUWVBFUyIsIk1BUktFVCIsImluc3RydW1lbnRJRCIsImlkIiwib3JkZXJRdHkiLCJ1bmRlZmluZWQiLCJTVE9QIiwibGltaXRQcmljZSIsIkxJTUlUIiwicG9sbCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJvcmRlciIsIlNUQVRVU0VTIiwiTkVXIiwiUEFSVElBTF9GSUxMIiwic2V0VGltZW91dCIsIkJVWSIsIlNFTEwiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiREVQT1NJVF9BTkRfV0lUSERSQVciLCJ0b0lTT1N0cmluZyIsInRyYW5zYWN0aW9uIiwidXJsIiwiZ2V0UXVvdGUiLCJzeW1ib2wiLCJnZXRDaGFydERhdGEiLCJzeW1ib2xzIiwiam9pbiIsImdldEFueSIsImlucyIsImluY2x1ZGVGdW5kYW1lbnRhbHMiLCJ0cmFkZVN0YXR1cyIsImNyaXRlcmlhIiwidXNlclBhc3NlZE9uZVN5bWJvbCIsIkFycmF5IiwiaXNBcnJheSIsInN5bSIsIm9iaiIsInNwbGl0Iiwic2xpY2UiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwiY29tcHJlc3Npb24iLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJJTkFDVElWRSIsIkFDVElWRSIsIkNMT1NFRCIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImdldExpc3RGb3JVc2VySUQiLCJnZXRBbGxTZXR0aW5ncyIsInZhbHVlIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciLCJyZW1vdmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsIlBFTkRJTkci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Q0FIaUI7QUFJM0IrRSwwQkFBUyxDQUprQjtBQUszQm5DLHlCQUFRO0FBTG1CLGNBQVA7QUFNckI7Ozs7OzttQkE1R2NqSyxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDMyZjJlYmMxMWExMGY2ZjY5NjciLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBzZXR1cCwgRU5WSVJPTk1FTlRTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBFTlZJUk9OTUVOVFMsXG5cbiAgICBBY2NvdW50LFxuICAgIEVycm9yLFxuICAgIEZ1bmRpbmcsXG4gICAgSW5zdHJ1bWVudCxcbiAgICBPcmRlcixcbiAgICBSZXBvcnRzLFxuICAgIFVzZXIsXG4gICAgU2Vzc2lvbnMsXG5cbiAgICBzZXR1cCxcbiAgICByZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJhY2NvdW50SURcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcImFjY291bnROb1wiLFxuICAgICAgICAgICAgXCJhY2NvdW50VHlwZVwiLFxuICAgICAgICAgICAgXCJjdXJyZW5jeUlEXCIsXG4gICAgICAgICAgICBcImliSURcIixcbiAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCIsXG4gICAgICAgICAgICBcIm9wZW5lZFdoZW5cIixcbiAgICAgICAgICAgIFwicGF0dGVybkRheVRyYWRlc1wiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidHJhZGluZ1R5cGVcIixcbiAgICAgICAgICAgIFwiYWNjb3VudE1nbXRUeXBlXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcbiAgICAgICAgaWYgKHR5cGUgJiYgIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHR5cGU7XG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZSA/IGRhdGFbdHlwZV0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcbiAgICAvLyBnZXRQZXJmb3JtYW5jZShjYilcbiAgICBnZXRQZXJmb3JtYW5jZSgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGNiO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICBjb25zdCBbIHN0YXJ0RGF0ZSwgZW5kRGF0ZSBdID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7c3RhcnREYXRlLmdldE1vbnRoKCkgKyAxfSR7c3RhcnREYXRlLmdldERhdGUoKX1gO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gIGAmZW5kRGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7c3RhcnREYXRlLmdldE1vbnRoKCkgKyAxfSR7c3RhcnREYXRlLmdldERhdGUoKX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1swXX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke3RoaXMuYWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgcGxhY2VPcmRlcih0eXBlLCBkYXRhLCBjYikge1xuICAgICAgICBjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuICAgICAgICAgICAgYWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcbiAgICAgICAgICAgIGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcbiAgICAgICAgICAgIHVzZXJJRDogdGhpcy51c2VySUQsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuICAgICAgICBkYXRhLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuICAgICAgICBkYXRhLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuICAgICAgICByZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGVtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5LCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBDQVNIOiBcImNhc2hcIixcbiAgICAgICAgT1JERVJTOiBcIm9yZGVyc1wiLFxuICAgICAgICBUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcbiAgICAgICAgQUxMOiBudWxsLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuICAgIG1ldGhvZCA9IFwiR0VUXCIsXG4gICAgZW5kcG9pbnQsXG4gICAgc2Vzc2lvbktleSxcbiAgICBib2R5LFxuICAgIGFkZGxIZWFkZXJzID0ge30sXG4gICAgaG9zdCA9IEhPU1RTLkFQSSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG4gICAgICAgIGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciwgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKHJlc0JvZHkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGUgPT0gNDAxID8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSkgOiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcbiAgICBlbnY6IG51bGwsXG4gICAgaHR0cEltcGw6IG51bGwsXG4gICAgYXBwVHlwZUlEOiBudWxsLFxuICAgIGFwcFZlcnNpb246IG51bGwsXG4gICAgd2xwSUQ6IG51bGwsXG4gICAgcmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuICAgIEFQSTogXCJhcGlcIixcbiAgICBBUFBTOiBcImFwcHNcIixcbiAgICBSRVBPUlRTOiBcInJlcG9ydHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW8vXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pby9cIixcbiAgICB9LFxuICAgIFBST0Q6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tL1wiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmNvbVwiLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbiAgICB3bHBJRCA9IFwiRFdcIixcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERyaXZlV2VhbHRoRXJyb3IsXG4gICAgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIGlmICghdGhpcy5fbWFpblVzZXIpIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwib3JkZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50SURcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcImN1bVF0eVwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiY29tbWVudFwiLFxuICAgICAgICAgICAgXCJjb21taXNzaW9uXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRCeUlEXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRXaGVuXCIsXG4gICAgICAgICAgICBcImV4ZWN1dGVkV2hlblwiLFxuICAgICAgICAgICAgXCJncm9zc1RyYWRlQW10XCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJsZWF2ZXNRdHlcIixcbiAgICAgICAgICAgIFwib3JkZXJOb1wiLFxuICAgICAgICAgICAgXCJvcmRlclF0eVwiLFxuICAgICAgICAgICAgXCJzaWRlXCIsXG4gICAgICAgICAgICBcImF1dG9TdG9wXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlamVjdGlvblJlYXNvbiA9IGRhdGEub3JkUmVqUmVhc29uO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGU7XG4gICAgfVxuXG4gICAgY2FuY2VsKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvb3JkZXJzLyR7dGhpcy5vcmRlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG4gICAgICAgIEJVWTogXCJCXCIsXG4gICAgICAgIFNFTEw6IFwiU1wiLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIE1BUktFVDogXCIxXCIsXG4gICAgICAgIExJTUlUOiBcIjJcIixcbiAgICAgICAgU1RPUDogXCIzXCIsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgTkVXOiBcIjBcIixcbiAgICAgICAgUEFSVElBTF9GSUxMOiBcIjFcIixcbiAgICAgICAgRklMTDogXCIyXCIsXG4gICAgICAgIENBTkNFTEVEOiBcIjRcIixcbiAgICAgICAgUkVKRUNURUQ6IFwiOFwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5SUQob3JkZXJJRCwgdXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUodHlwZSwge1xuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGFjY291bnRObyxcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50VHlwZSxcbiAgICB9LCB7XG4gICAgICAgIGluc3RydW1lbnQsXG4gICAgICAgIHNpZGUsXG4gICAgICAgIHF0eSxcbiAgICAgICAgYW1vdW50Q2FzaCxcbiAgICAgICAgY29tbWVudCxcbiAgICAgICAgYXV0b1N0b3AsXG4gICAgICAgIHByaWNlLFxuICAgICAgICB3YWl0Rm9yRmlsbCA9IHRydWUsXG4gICAgICAgIGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuICAgICAgICBmaWxsTWF4UmV0cmllcyA9IDEwLFxuICAgIH0sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnRDYXNoICYmIHF0eSkgdGhyb3cgbmV3IEVycm9yKGBcInF0eVwiIGFuZCBcImFtb3VudENhc2hcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLmApO1xuICAgICAgICBpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkgdGhyb3cgbmV3IEVycm9yKGBMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFwicHJpY2UuXCJgKTtcbiAgICAgICAgaWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiBhdXRvU3RvcCkgdGhyb3cgbmV3IEVycm9yKGBcImF1dG9TdG9wXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLmApO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9vcmRlcnNcIixcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgICAgICAgICBhY2NvdW50Tm8sXG4gICAgICAgICAgICAgICAgdXNlcklELFxuICAgICAgICAgICAgICAgIGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIG9yZFR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgICAgICBvcmRlclF0eTogcXR5ID8gcXR5IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGFtb3VudENhc2g6IGFtb3VudENhc2ggPyBhbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgICAgICAgYXV0b1N0b3AsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghT3JkZXIuVFlQRVMuTUFSS0VUIHx8ICF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIGRhdGEub3JkZXJJRCk7XG5cbiAgICAgICAgICAgIGxldCBwb2xsLCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG4gICAgICAgICAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmaWxsTWF4UmV0cmllcy0tO1xuICAgICAgICAgICAgICAgIE9yZGVyLmdldEJ5SUQoZGF0YS5vcmRlcklELCB1c2VySUQsIChlcnIsIG9yZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbE1heFJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVcgJiYgb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblxuICAgIHN0YXRpYyBnZXQgQUxMT1dFRF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREVQT1NJVDogXCJERVBPU0lUXCIsXG4gICAgICAgIFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG4gICAgICAgIERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIG1pbkFtb3VudCxcbiAgICAgICAgbWF4QW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZpbHRlcnMgPSB7fSxcbiAgICB9ID0ge30sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcud2xwSUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXkpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS51cmwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXQgQ0hBUlRfQ09NUFJFU1NJT05TKCkgeyByZXR1cm4ge1xuICAgICAgICBEQVk6IDAsXG4gICAgICAgIE1JTlVURV8xOiAxLFxuICAgICAgICBNSU5VVEVfNTogNCxcbiAgICAgICAgTUlOVVRFXzMwOiA4LFxuICAgICAgICBIT1VSOiA5LFxuICAgICAgICBXRUVLOiAxMFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2wke3N5bWJvbHMubGVuZ3RoID4gMSA/IFwic1wiIDogXCJcIn09JHtzeW1ib2xzLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGRhdGFbMF0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKGlkLCBpbmNsdWRlRnVuZGFtZW50YWxzID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/ICc/b3B0aW9ucz1GJyA6ICcnfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBJbnN0cnVtZW50KGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXMsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHJhZGVTdGF0dXM7XG4gICAgICAgICAgICB0cmFkZVN0YXR1cyA9IFwiLTFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlYXJjaChjcml0ZXJpYSwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFF1b3RlKGNiKSB7XG4gICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sLCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFF1b3RlKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHVzZXJQYXNzZWRPbmVTeW1ib2wgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHVzZXJQYXNzZWRPbmVTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgICAgc3ltYm9sID0gW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgc3ltYm9sID0gc3ltYm9sLm1hcChzeW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9sLmpvaW4oXCIsXCIpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgICAgIGFkZGxIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJ0ZXh0L3BsYWluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG4gICAgICAgICAgICBmb3IgKGxldCByYXdRdW90ZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmlkOiBwYXJzZWRRdW90ZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBwYXJzZWRRdW90ZVsyXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKGNiKVxuICAgIGdldFNldHRpbmdzKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5nZXRBbGxTZXR0aW5ncyhhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYiA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7YXJndW1lbnRzWzBdfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldEFsbFNldHRpbmdzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3NgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc2V0U2V0dGluZyhrZXksIHZhbHVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5nc2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGtleSwgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICB1bnNldFNldHRpbmcoa2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFN0YXR1cygpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=