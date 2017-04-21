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
	
	            (0, _request2.default)({
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

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3Yjc4NjRmM2M0YjI4MzM1MDkzNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwiZ2V0VHJhbnNhY3Rpb25zIiwiZ2V0UGxhY2VkT3JkZXJzIiwiZ2V0U3RhdGVtZW50cyIsImdldFRheERvY3VtZW50cyIsImdldFRyYWRlQ29uZmlybXMiLCJmaWxlS2V5IiwiZ2VuZXJhdGVEb3dubG9hZFVSTCIsIm1hcCIsImFjY291bnQiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwib25TdWNjZXNzIiwib25FcnJvciIsImJvZHkiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsImh0dHBJbXBsIiwic3RhdHVzQ29kZSIsInJlc0hlYWRlcnMiLCJyZXNCb2R5IiwiY29udGVudFR5cGUiLCJpbmRleE9mIiwicGFyc2UiLCJTdHJpbmciLCJlcnJvciIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJDb25maWciLCJhcHBUeXBlSUQiLCJhcHBWZXJzaW9uIiwid2xwSUQiLCJyZWZlcnJhbENvZGUiLCJIT1NUUyIsIkFQUFMiLCJSRVBPUlRTIiwiVUFUIiwiUFJPRCIsIkRyaXZlV2VhbHRoRXJyb3IiLCJEcml2ZVdlYWx0aFNlc3Npb25FcnJvciIsIl9rZXlzIiwiX21haW5Vc2VyIiwic2Vzc2lvbnMiLCJyZWplY3Rpb25SZWFzb24iLCJvcmRSZWpSZWFzb24iLCJzdGF0dXMiLCJvcmRTdGF0dXMiLCJvcmRUeXBlIiwib3JkZXJJRCIsImluc3RydW1lbnQiLCJzaWRlIiwicXR5IiwiYW1vdW50Q2FzaCIsImNvbW1lbnQiLCJhdXRvU3RvcCIsInByaWNlIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiVFlQRVMiLCJNQVJLRVQiLCJpbnN0cnVtZW50SUQiLCJpZCIsIm9yZGVyUXR5IiwidW5kZWZpbmVkIiwiU1RPUCIsImxpbWl0UHJpY2UiLCJMSU1JVCIsInBvbGwiLCJyZXRyaWVzIiwiY2hlY2tTdGF0dXMiLCJnZXRCeUlEIiwib3JkZXIiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJCVVkiLCJTRUxMIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJBcnJheSIsImlzQXJyYXkiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInNsaWNlIiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsIk51bWJlciIsImFzayIsImNvbXByZXNzaW9uIiwidGltZVBhcmFtcyIsImRhdGVTdGFydCIsInJlcGxhY2UiLCJkYXRlRW5kIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDTE9TRUQiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJnZXRMaXN0Rm9yVXNlcklEIiwiZ2V0QWxsU2V0dGluZ3MiLCJ2YWx1ZSIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiUEVORElORyIsIkFQUFJPVkVEIiwiUkVWT0tFRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O21CQUVlO0FBQ1hBLHVDQURXOztBQUdYQywrQkFIVztBQUlYQywyQkFKVztBQUtYQywrQkFMVztBQU1YQyxxQ0FOVztBQU9YQywyQkFQVztBQVFYQywrQkFSVztBQVNYQyx5QkFUVztBQVVYQyxpQ0FWVzs7QUFZWEMseUJBWlc7QUFhWEM7QUFiVyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVxQlQsTztBQUVqQixzQkFBWVUsSUFBWixFQUFrQjtBQUFBOztBQUFBLG9CQUNFLENBQ1osV0FEWSxFQUVaLFFBRlksRUFHWixXQUhZLEVBSVosYUFKWSxFQUtaLFlBTFksRUFNWixNQU5ZLEVBT1osUUFQWSxFQVFaLFVBUlksRUFTWixZQVRZLEVBVVosa0JBVlksRUFXWixRQVhZLEVBWVosYUFaWSxF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LENBQWFILE1BQWIsQ0FITDtBQUlQbUMsdUJBQU07QUFDTHdKLCtDQURLO0FBRUxDLCtDQUZLO0FBR0xDLCtCQUhLO0FBSUxDLHlDQUpLO0FBS0xMLG9DQUFlTixLQUxWO0FBTUxGLHlDQU5LO0FBT0xDLHVDQVBLO0FBUUxULDJDQVJLO0FBU0xzQix5Q0FUSztBQVVMQyx5Q0FWSztBQVdMSSxrQ0FBYUgsS0FYUjtBQVlMQyxpREFaSztBQWFMQztBQWJLO0FBSkMsY0FBUixFQW1CRyxnQkFBUTtBQUNWdE0sdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxJQUFULENBQU47QUFDQSxjQXJCRCxFQXFCRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQXJCSDtBQXNCQTs7OzZCQWpJd0I7QUFBRSxvQkFBTztBQUMzQmlNLDBCQUFTLENBRGtCO0FBRTNCQywyQkFBVSxDQUZpQjtBQUczQnpGLDJCQUFVLENBSGlCO0FBSTNCMEYsMEJBQVMsQ0FKa0I7QUFLM0I3Qyx5QkFBUTtBQUxtQixjQUFQO0FBTXJCOzs7Ozs7bUJBNUdjcEssSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdiNzg2NGYzYzRiMjgzMzUwOTM1IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBFcnJvcixcbiAgICBGdW5kaW5nLFxuICAgIEluc3RydW1lbnQsXG4gICAgT3JkZXIsXG4gICAgUmVwb3J0cyxcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiYWNjb3VudFR5cGVcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lJRFwiLFxuICAgICAgICAgICAgXCJpYklEXCIsXG4gICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiLFxuICAgICAgICAgICAgXCJvcGVuZWRXaGVuXCIsXG4gICAgICAgICAgICBcInBhdHRlcm5EYXlUcmFkZXNcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInRyYWRpbmdUeXBlXCIsXG4gICAgICAgICAgICBcImFjY291bnRNZ210VHlwZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCbG90dGVyKHR5cGUsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlICYmICFjYikge1xuICAgICAgICAgICAgY2IgPSB0eXBlO1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRTdW1tYXJ5LyR7dGhpcy5hY2NvdW50SUR9JHt0eXBlID8gJy8nICsgdHlwZSA6IFwiXCJ9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICAvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UoY2IpXG4gICAgZ2V0UGVyZm9ybWFuY2UoKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBjYjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG4gICAgICAgICAgICBhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuICAgICAgICAgICAgYWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG4gICAgICAgICAgICB1c2VySUQ6IHRoaXMudXNlcklELFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcbiAgICAgICAgZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcbiAgICAgICAgZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcbiAgICAgICAgcmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuICAgIH1cblxuICAgIGdldFBsYWNlZE9yZGVycyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuICAgIH1cblxuICAgIGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICByZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VHJhZGVDb25maXJtcyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5LCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBDQVNIOiBcImNhc2hcIixcbiAgICAgICAgT1JERVJTOiBcIm9yZGVyc1wiLFxuICAgICAgICBUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcbiAgICAgICAgQUxMOiBudWxsLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuICAgIG1ldGhvZCA9IFwiR0VUXCIsXG4gICAgZW5kcG9pbnQsXG4gICAgc2Vzc2lvbktleSxcbiAgICBib2R5LFxuICAgIGFkZGxIZWFkZXJzID0ge30sXG4gICAgaG9zdCA9IEhPU1RTLkFQSSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG4gICAgICAgIGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciwgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKHJlc0JvZHkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGUgPT0gNDAxID8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSkgOiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcbiAgICBlbnY6IG51bGwsXG4gICAgaHR0cEltcGw6IG51bGwsXG4gICAgYXBwVHlwZUlEOiBudWxsLFxuICAgIGFwcFZlcnNpb246IG51bGwsXG4gICAgd2xwSUQ6IG51bGwsXG4gICAgcmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuICAgIEFQSTogXCJhcGlcIixcbiAgICBBUFBTOiBcImFwcHNcIixcbiAgICBSRVBPUlRTOiBcInJlcG9ydHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW8vXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pby9cIixcbiAgICB9LFxuICAgIFBST0Q6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tL1wiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmNvbVwiLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbiAgICB3bHBJRCA9IFwiRFdcIixcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERyaXZlV2VhbHRoRXJyb3IsXG4gICAgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIGlmICghdGhpcy5fbWFpblVzZXIpIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwib3JkZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50SURcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcImN1bVF0eVwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiY29tbWVudFwiLFxuICAgICAgICAgICAgXCJjb21taXNzaW9uXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRCeUlEXCIsXG4gICAgICAgICAgICBcImNyZWF0ZWRXaGVuXCIsXG4gICAgICAgICAgICBcImV4ZWN1dGVkV2hlblwiLFxuICAgICAgICAgICAgXCJncm9zc1RyYWRlQW10XCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJsZWF2ZXNRdHlcIixcbiAgICAgICAgICAgIFwib3JkZXJOb1wiLFxuICAgICAgICAgICAgXCJvcmRlclF0eVwiLFxuICAgICAgICAgICAgXCJzaWRlXCIsXG4gICAgICAgICAgICBcImF1dG9TdG9wXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlamVjdGlvblJlYXNvbiA9IGRhdGEub3JkUmVqUmVhc29uO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGU7XG4gICAgfVxuXG4gICAgY2FuY2VsKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvb3JkZXJzLyR7dGhpcy5vcmRlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG4gICAgICAgIEJVWTogXCJCXCIsXG4gICAgICAgIFNFTEw6IFwiU1wiLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIE1BUktFVDogXCIxXCIsXG4gICAgICAgIExJTUlUOiBcIjJcIixcbiAgICAgICAgU1RPUDogXCIzXCIsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgTkVXOiBcIjBcIixcbiAgICAgICAgUEFSVElBTF9GSUxMOiBcIjFcIixcbiAgICAgICAgRklMTDogXCIyXCIsXG4gICAgICAgIENBTkNFTEVEOiBcIjRcIixcbiAgICAgICAgUkVKRUNURUQ6IFwiOFwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5SUQob3JkZXJJRCwgdXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUodHlwZSwge1xuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGFjY291bnRObyxcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50VHlwZSxcbiAgICB9LCB7XG4gICAgICAgIGluc3RydW1lbnQsXG4gICAgICAgIHNpZGUsXG4gICAgICAgIHF0eSxcbiAgICAgICAgYW1vdW50Q2FzaCxcbiAgICAgICAgY29tbWVudCxcbiAgICAgICAgYXV0b1N0b3AsXG4gICAgICAgIHByaWNlLFxuICAgICAgICB3YWl0Rm9yRmlsbCA9IHRydWUsXG4gICAgICAgIGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuICAgICAgICBmaWxsTWF4UmV0cmllcyA9IDEwLFxuICAgIH0sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnRDYXNoICYmIHF0eSkgdGhyb3cgbmV3IEVycm9yKGBcInF0eVwiIGFuZCBcImFtb3VudENhc2hcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLmApO1xuICAgICAgICBpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkgdGhyb3cgbmV3IEVycm9yKGBMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFwicHJpY2UuXCJgKTtcbiAgICAgICAgaWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiBhdXRvU3RvcCkgdGhyb3cgbmV3IEVycm9yKGBcImF1dG9TdG9wXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLmApO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9vcmRlcnNcIixcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuICAgICAgICAgICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgICAgICAgICBhY2NvdW50Tm8sXG4gICAgICAgICAgICAgICAgdXNlcklELFxuICAgICAgICAgICAgICAgIGFjY291bnRUeXBlLFxuICAgICAgICAgICAgICAgIG9yZFR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgc2lkZSxcbiAgICAgICAgICAgICAgICBvcmRlclF0eTogcXR5ID8gcXR5IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGFtb3VudENhc2g6IGFtb3VudENhc2ggPyBhbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGNvbW1lbnQsXG4gICAgICAgICAgICAgICAgYXV0b1N0b3AsXG4gICAgICAgICAgICAgICAgcHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghT3JkZXIuVFlQRVMuTUFSS0VUIHx8ICF3YWl0Rm9yRmlsbCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIGRhdGEub3JkZXJJRCk7XG5cbiAgICAgICAgICAgIGxldCBwb2xsLCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG4gICAgICAgICAgICBjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBmaWxsTWF4UmV0cmllcy0tO1xuICAgICAgICAgICAgICAgIE9yZGVyLmdldEJ5SUQoZGF0YS5vcmRlcklELCB1c2VySUQsIChlcnIsIG9yZGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsbE1heFJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVcgJiYgb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTEwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblxuICAgIHN0YXRpYyBnZXQgQUxMT1dFRF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREVQT1NJVDogXCJERVBPU0lUXCIsXG4gICAgICAgIFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG4gICAgICAgIERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgIG1pbkFtb3VudCxcbiAgICAgICAgbWF4QW1vdW50LFxuICAgICAgICBhbW91bnQsXG4gICAgICAgIGZpbHRlcnMgPSB7fSxcbiAgICB9ID0ge30sIGNiKSB7XG4gICAgICAgIGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcud2xwSUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudXJsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcImluc3RydW1lbnRJRFwiLFxuICAgICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgICBcImV4Y2hhbmdlSURcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudFR5cGVJRFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNYXhcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWluXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZVN0ZXBcIixcbiAgICAgICAgICAgIFwicmF0ZUFza1wiLFxuICAgICAgICAgICAgXCJyYXRlQmlkXCIsXG4gICAgICAgICAgICBcInJhdGVQcmVjaXNpb25cIixcbiAgICAgICAgICAgIFwic3ltYm9sXCIsXG4gICAgICAgICAgICBcInRyYWRlU3RhdHVzXCIsXG4gICAgICAgICAgICBcInVybEltYWdlXCIsXG4gICAgICAgICAgICBcInVybEludmVzdG9yXCIsXG4gICAgICAgICAgICBcImNoYWlraW5QZ3JcIixcbiAgICAgICAgICAgIFwicHJpb3JDbG9zZVwiLFxuICAgICAgICAgICAgXCJtYXJrZXRTdGF0ZVwiLFxuICAgICAgICAgICAgXCJmdW5kYW1lbnRhbERhdGFNb2RlbFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRSQURFX1NUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBJTkFDVElWRTogXCIwXCIsXG4gICAgICAgIEFDVElWRTogXCIxXCIsXG4gICAgICAgIENMT1NFRDogXCIyXCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0IENIQVJUX0NPTVBSRVNTSU9OUygpIHsgcmV0dXJuIHtcbiAgICAgICAgREFZOiAwLFxuICAgICAgICBNSU5VVEVfMTogMSxcbiAgICAgICAgTUlOVVRFXzU6IDQsXG4gICAgICAgIE1JTlVURV8zMDogOCxcbiAgICAgICAgSE9VUjogOSxcbiAgICAgICAgV0VFSzogMTBcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCBzeW1ib2xzID0gc3ltYm9sO1xuICAgICAgICBpZiAodHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIikgc3ltYm9scyA9IFtzeW1ib2xdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9sJHtzeW1ib2xzLmxlbmd0aCA+IDEgPyBcInNcIiA6IFwiXCJ9PSR7c3ltYm9scy5qb2luKCcsJyl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBkYXRhWzBdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChpZCwgaW5jbHVkZUZ1bmRhbWVudGFscyA9IHRydWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyAnP29wdGlvbnM9RicgOiAnJ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgSW5zdHJ1bWVudChkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzLCBjYikge1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHRyYWRlU3RhdHVzO1xuICAgICAgICAgICAgdHJhZGVTdGF0dXMgPSBcIi0xXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZWFyY2goY3JpdGVyaWEsIGNiKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuICAgICAgICBpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuICAgICAgICBpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRRdW90ZShjYikge1xuICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRRdW90ZShzeW1ib2wsIGNiKSB7XG4gICAgICAgIGxldCB1c2VyUGFzc2VkT25lU3ltYm9sID0gZmFsc2U7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSB7XG4gICAgICAgICAgICB1c2VyUGFzc2VkT25lU3ltYm9sID0gdHJ1ZTtcbiAgICAgICAgICAgIHN5bWJvbCA9IFtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIHN5bWJvbCA9IHN5bWJvbC5tYXAoc3ltID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbC5qb2luKFwiLFwiKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgICAgICBhZGRsSGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwidGV4dC9wbGFpblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuICAgICAgICAgICAgZm9yIChsZXQgcmF3UXVvdGUgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgIG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXNlclBhc3NlZE9uZVN5bWJvbCkgb2JqID0gb2JqW3N5bWJvbFswXV07XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBvYmopO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0Q2hhcnREYXRhKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbikge1xuICAgICAgICBsZXQgY2IsIHRpbWVQYXJhbXM7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbmQgICA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1s0XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzNdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YS5zcGxpdChcInxcIikpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJjb3VudHJ5SURcIixcbiAgICAgICAgICAgIFwiZW1haWxBZGRyZXNzXCIsXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgXCJsYW5ndWFnZUlEXCIsXG4gICAgICAgICAgICBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcInJlZmVycmFsQ29kZVwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIFwid2xwSURcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInVzQ2l0aXplblwiLFxuICAgICAgICAgICAgXCJsYXN0TG9naW5XaGVuXCIsXG4gICAgICAgICAgICBcImNpdGl6ZW5zaGlwXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjY291bnRzKGNiKSB7XG4gICAgICAgIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCwgY2IpO1xuICAgIH1cblxuICAgIC8vIGdldFNldHRpbmdzKGtleSwgY2IpXG4gICAgLy8gZ2V0U2V0dGluZ3MoY2IpXG4gICAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmdldEFsbFNldHRpbmdzKGFyZ3VtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNiID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHthcmd1bWVudHNbMF19YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsU2V0dGluZ3MoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5nc2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuICAgICAgICAgICAgZm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZm9ybWF0dGVkRGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzZXRTZXR0aW5nKGtleSwgdmFsdWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAga2V5LCB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHVuc2V0U2V0dGluZyhrZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKCkge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBQRU5ESU5HOiAxLFxuICAgICAgICBBUFBST1ZFRDogMixcbiAgICAgICAgUkVKRUNURUQ6IDMsXG4gICAgICAgIFJFVk9LRUQ6IDQsXG4gICAgICAgIENMT1NFRDogNSxcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeVVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgVXNlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgYXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuICAgICAgICAgICAgICAgIGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcbiAgICAgICAgICAgICAgICBvc1R5cGU6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgc2NyUmVzOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBpcEFkZHJlc3M6IFwidW5rbm93blwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBTZXNzaW9ucy5zYXZlKGRhdGEudXNlcklELCBkYXRhLnNlc3Npb25LZXkpO1xuICAgICAgICAgICAgVXNlci5nZXRCeVVzZXJJRChkYXRhLnVzZXJJRCwgKGVyciwgdXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHVzZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZhbHNlKTtcbiAgICAgICAgfSwgKGVyciwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIHRydWUpO1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgIHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG4gICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgdXRtVGVybSxcbiAgICB9LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuICAgICAgICAgICAgICAgIGxhbmd1YWdlSUQsXG4gICAgICAgICAgICAgICAgd2xwSUQ6IENvbmZpZy53bHBJRCxcbiAgICAgICAgICAgICAgICByZWZlcnJhbENvZGUsXG4gICAgICAgICAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgICAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgICAgICAgICB1dG1NZWRpdW0sXG4gICAgICAgICAgICAgICAgdXRtU291cmNlLFxuICAgICAgICAgICAgICAgIHV0bVRlcm0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGVcblx0fSwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGVcblx0XHRcdH0sXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==