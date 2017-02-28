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
	
	var _Instrument = __webpack_require__(7);
	
	var _Instrument2 = _interopRequireDefault(_Instrument);
	
	var _Order = __webpack_require__(5);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _User = __webpack_require__(8);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _Sessions = __webpack_require__(4);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Config = __webpack_require__(3);
	
	var _request = __webpack_require__(2);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    ENVIRONMENTS: _Config.ENVIRONMENTS,
	
	    Account: _Account2.default,
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
	
	var _Sessions = __webpack_require__(4);
	
	var _Sessions2 = _interopRequireDefault(_Sessions);
	
	var _Order = __webpack_require__(5);
	
	var _Order2 = _interopRequireDefault(_Order);
	
	var _Funding = __webpack_require__(6);
	
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
	            onError(resBody, statusCode, resHeaders);
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDlkODhiNGIzNDViOTAwZTUwNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2Vzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9GdW5kaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9JbnN0cnVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyLmpzIl0sIm5hbWVzIjpbIkVOVklST05NRU5UUyIsIkFjY291bnQiLCJJbnN0cnVtZW50IiwiT3JkZXIiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwibWFwIiwiYWNjb3VudCIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYm9keSIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsIkNvbmZpZyIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJyZWZlcnJhbENvZGUiLCJIT1NUUyIsIkFQUFMiLCJSRVBPUlRTIiwiVUFUIiwiUFJPRCIsIndscElEIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwicHJpY2UiLCJ3YWl0Rm9yRmlsbCIsImZpbGxSZXRyeUludGVydmFsIiwiZmlsbE1heFJldHJpZXMiLCJFcnJvciIsIlRZUEVTIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJsaW1pdFByaWNlIiwiTElNSVQiLCJwb2xsIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIm9yZGVyIiwiU1RBVFVTRVMiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiQlVZIiwiU0VMTCIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwiRnVuZGluZyIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiREVQT1NJVF9BTkRfV0lUSERSQVciLCJnZXRRdW90ZSIsInN5bWJvbCIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwiQXJyYXkiLCJpc0FycmF5Iiwic3ltIiwib2JqIiwic3BsaXQiLCJzbGljZSIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJ0b0lTT1N0cmluZyIsInJlcGxhY2UiLCJkYXRlRW5kIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDTE9TRUQiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJnZXRMaXN0Rm9yVXNlcklEIiwiZ2V0QWxsU2V0dGluZ3MiLCJ2YWx1ZSIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJ1c2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJQRU5ESU5HIiwiQVBQUk9WRUQiLCJSRVZPS0VEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7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LEVBQXFCQyxRQUFyQixFQUErQjlKLEVBQS9CLENBQVA7QUFDSCxjQXBCRCxFQW9CRztBQUFBLHdCQUFPQSxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQXBCSDtBQXFCSDs7OzZCQXpGcUI7QUFBRSxvQkFBTztBQUMzQjBLLDBCQUFTLENBRGtCO0FBRTNCQywyQkFBVSxDQUZpQjtBQUczQjdFLDJCQUFVLENBSGlCO0FBSTNCOEUsMEJBQVMsQ0FKa0I7QUFLM0JuQyx5QkFBUTtBQUxtQixjQUFQO0FBTXJCOzs7Ozs7bUJBNUdjdkosSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAwOWQ4OGI0YjM0NWI5MDBlNTA2IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IHNldHVwLCBFTlZJUk9OTUVOVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEVOVklST05NRU5UUyxcblxuICAgIEFjY291bnQsXG4gICAgSW5zdHJ1bWVudCxcbiAgICBPcmRlcixcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiYWNjb3VudFR5cGVcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lJRFwiLFxuICAgICAgICAgICAgXCJpYklEXCIsXG4gICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiLFxuICAgICAgICAgICAgXCJvcGVuZWRXaGVuXCIsXG4gICAgICAgICAgICBcInBhdHRlcm5EYXlUcmFkZXNcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInRyYWRpbmdUeXBlXCIsXG4gICAgICAgICAgICBcImFjY291bnRNZ210VHlwZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCbG90dGVyKHR5cGUsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlICYmICFjYikge1xuICAgICAgICAgICAgY2IgPSB0eXBlO1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRTdW1tYXJ5LyR7dGhpcy5hY2NvdW50SUR9JHt0eXBlID8gJy8nICsgdHlwZSA6IFwiXCJ9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICAvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UoY2IpXG4gICAgZ2V0UGVyZm9ybWFuY2UoKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBjYjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG4gICAgICAgICAgICBhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuICAgICAgICAgICAgYWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG4gICAgICAgICAgICB1c2VySUQ6IHRoaXMudXNlcklELFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcbiAgICAgICAgZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcbiAgICAgICAgZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcbiAgICAgICAgcmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgQ0FTSDogXCJjYXNoXCIsXG4gICAgICAgIE9SREVSUzogXCJvcmRlcnNcIixcbiAgICAgICAgVFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuICAgICAgICBQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG4gICAgICAgIEFMTDogbnVsbCxcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxuICAgIGVuZHBvaW50LFxuICAgIHNlc3Npb25LZXksXG4gICAgYm9keSxcbiAgICBhZGRsSGVhZGVycyA9IHt9LFxuICAgIGhvc3QgPSBIT1NUUy5BUEksXG59LCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG4gICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25LZXkpIHtcbiAgICAgICAgaGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuXG4gICAgZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICBpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25FcnJvcihyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICByZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG4gICAgQVBJOiBcImFwaVwiLFxuICAgIEFQUFM6IFwiYXBwc1wiLFxuICAgIFJFUE9SVFM6IFwicmVwb3J0c1wiXG59O1xuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuICAgIFVBVDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pby9cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvL1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb20vXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG4gICAgZW52LFxuICAgIGh0dHBJbXBsLFxuICAgIGFwcFR5cGVJRCxcbiAgICBhcHBWZXJzaW9uLFxuICAgIHdscElEID0gXCJEV1wiLFxuICAgIHJlZmVycmFsQ29kZSxcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuICAgIENvbmZpZy53bHBJRCA9IHdscElEO1xuICAgIENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICBpZiAoIXRoaXMuX21haW5Vc2VyKSB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcIm9yZGVySURcIixcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJjdW1RdHlcIixcbiAgICAgICAgICAgIFwiYWNjb3VudE5vXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIFwiY29tbWlzc2lvblwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkQnlJRFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkV2hlblwiLFxuICAgICAgICAgICAgXCJleGVjdXRlZFdoZW5cIixcbiAgICAgICAgICAgIFwiZ3Jvc3NUcmFkZUFtdFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibGVhdmVzUXR5XCIsXG4gICAgICAgICAgICBcIm9yZGVyTm9cIixcbiAgICAgICAgICAgIFwib3JkZXJRdHlcIixcbiAgICAgICAgICAgIFwic2lkZVwiLFxuICAgICAgICAgICAgXCJhdXRvU3RvcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcbiAgICAgICAgdGhpcy50eXBlID0gZGF0YS5vcmRUeXBlO1xuICAgIH1cblxuICAgIGNhbmNlbChjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL29yZGVycy8ke3RoaXMub3JkZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNJREVTKCkgeyByZXR1cm4ge1xuICAgICAgICBCVVk6IFwiQlwiLFxuICAgICAgICBTRUxMOiBcIlNcIixcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBNQVJLRVQ6IFwiMVwiLFxuICAgICAgICBMSU1JVDogXCIyXCIsXG4gICAgICAgIFNUT1A6IFwiM1wiLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIE5FVzogXCIwXCIsXG4gICAgICAgIFBBUlRJQUxfRklMTDogXCIxXCIsXG4gICAgICAgIEZJTEw6IFwiMlwiLFxuICAgICAgICBDQU5DRUxFRDogXCI0XCIsXG4gICAgICAgIFJFSkVDVEVEOiBcIjhcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBPcmRlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHR5cGUsIHtcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBhY2NvdW50Tm8sXG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudFR5cGUsXG4gICAgfSwge1xuICAgICAgICBpbnN0cnVtZW50LFxuICAgICAgICBzaWRlLFxuICAgICAgICBxdHksXG4gICAgICAgIGFtb3VudENhc2gsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICAgIGF1dG9TdG9wLFxuICAgICAgICBwcmljZSxcbiAgICAgICAgd2FpdEZvckZpbGwgPSB0cnVlLFxuICAgICAgICBmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcbiAgICAgICAgZmlsbE1heFJldHJpZXMgPSAxMCxcbiAgICB9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHRocm93IG5ldyBFcnJvcihgXCJxdHlcIiBhbmQgXCJhbW91bnRDYXNoXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5gKTtcbiAgICAgICAgaWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiAhcHJpY2UpIHRocm93IG5ldyBFcnJvcihgTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcInByaWNlLlwiYCk7XG4gICAgICAgIGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHRocm93IG5ldyBFcnJvcihgXCJhdXRvU3RvcFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5gKTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvb3JkZXJzXCIsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgICAgICAgICAgYWNjb3VudE5vLFxuICAgICAgICAgICAgICAgIHVzZXJJRCxcbiAgICAgICAgICAgICAgICBhY2NvdW50VHlwZSxcbiAgICAgICAgICAgICAgICBvcmRUeXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICAgICAgb3JkZXJRdHk6IHF0eSA/IHF0eSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBhbW91bnRDYXNoOiBhbW91bnRDYXNoID8gYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb21tZW50LFxuICAgICAgICAgICAgICAgIGF1dG9TdG9wLFxuICAgICAgICAgICAgICAgIHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoIU9yZGVyLlRZUEVTLk1BUktFVCB8fCAhd2FpdEZvckZpbGwpIHJldHVybiBjYiAmJiBjYihudWxsLCBkYXRhLm9yZGVySUQpO1xuXG4gICAgICAgICAgICBsZXQgcG9sbCwgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuICAgICAgICAgICAgY29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlsbE1heFJldHJpZXMtLTtcbiAgICAgICAgICAgICAgICBPcmRlci5nZXRCeUlEKGRhdGEub3JkZXJJRCwgdXNlcklELCAoZXJyLCBvcmRlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGxNYXhSZXRyaWVzIDw9IDApIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmIG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cbiAgICBzdGF0aWMgZ2V0IEFMTE9XRURfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuICAgICAgICBXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuICAgICAgICBERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBtaW5BbW91bnQsXG4gICAgICAgIG1heEFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmaWx0ZXJzID0ge30sXG4gICAgfSA9IHt9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkgdGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLndscElEfSZ1c2VySUQ9JHt1c2VySUR9JmFjY291bnRJRD0ke2FjY291bnRJRH1gO1xuICAgICAgICBpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuICAgICAgICBpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuICAgICAgICBpZiAobWF4QW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1heEFtb3VudD0ke21heEFtb3VudH1gO1xuICAgICAgICBpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuICAgICAgICBpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jb3VudHJ5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjb3VudHJ5XT0ke2ZpbHRlcnMuY291bnRyeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuQVBQUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXQgQ0hBUlRfQ09NUFJFU1NJT05TKCkgeyByZXR1cm4ge1xuICAgICAgICBEQVk6IDAsXG4gICAgICAgIE1JTlVURV8xOiAxLFxuICAgICAgICBNSU5VVEVfNTogNCxcbiAgICAgICAgTUlOVVRFXzMwOiA4LFxuICAgICAgICBIT1VSOiA5LFxuICAgICAgICBXRUVLOiAxMFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2w9JHtzeW1ib2xzLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGRhdGFbMF0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKGlkLCBpbmNsdWRlRnVuZGFtZW50YWxzID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/ICc/b3B0aW9ucz1GJyA6ICcnfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBJbnN0cnVtZW50KGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXMsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHJhZGVTdGF0dXM7XG4gICAgICAgICAgICB0cmFkZVN0YXR1cyA9IFwiLTFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlYXJjaChjcml0ZXJpYSwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFF1b3RlKGNiKSB7XG4gICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sLCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFF1b3RlKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHVzZXJQYXNzZWRPbmVTeW1ib2wgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHVzZXJQYXNzZWRPbmVTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgICAgc3ltYm9sID0gW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgc3ltYm9sID0gc3ltYm9sLm1hcChzeW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9sLmpvaW4oXCIsXCIpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgICAgIGFkZGxIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJ0ZXh0L3BsYWluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG4gICAgICAgICAgICBmb3IgKGxldCByYXdRdW90ZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmlkOiBwYXJzZWRRdW90ZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgYXNrOiBwYXJzZWRRdW90ZVsyXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKGNiKVxuICAgIGdldFNldHRpbmdzKCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5nZXRBbGxTZXR0aW5ncyhhcmd1bWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYiA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7YXJndW1lbnRzWzBdfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnZhbHVlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldEFsbFNldHRpbmdzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3NgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGEgPSB7fTtcbiAgICAgICAgICAgIGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc2V0U2V0dGluZyhrZXksIHZhbHVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5nc2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGtleSwgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICB1bnNldFNldHRpbmcoa2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFN0YXR1cygpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=