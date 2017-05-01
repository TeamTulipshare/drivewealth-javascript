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
	    PROD: (_PROD = {}, _defineProperty(_PROD, HOSTS.API, "https://api.drivewealth.net/v1"), _defineProperty(_PROD, HOSTS.APPS, "https://apps.drivewealth.com"), _defineProperty(_PROD, HOSTS.REPORTS, "https://reports.drivewealth.com"), _PROD)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YTMwN2IxOTNlZDQyNDU1ZmU4NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJwZXJmb3JtYW5jZSIsInBhcmVudERldGFpbHMiLCJhY2NvdW50Tm8iLCJhY2NvdW50VHlwZSIsImNyZWF0ZSIsImdldEZ1bmRpbmdNZXRob2RzIiwiZ2V0VHJhbnNhY3Rpb25zIiwiZ2V0UGxhY2VkT3JkZXJzIiwiZ2V0U3RhdGVtZW50cyIsImdldFRheERvY3VtZW50cyIsImdldFRyYWRlQ29uZmlybXMiLCJmaWxlS2V5IiwiZ2VuZXJhdGVEb3dubG9hZFVSTCIsIm1hcCIsImFjY291bnQiLCJUWVBFUyIsIlBSQUNUSUNFIiwicmVzcG9uc2VUeXBlIiwidHJhbkFtb3VudCIsImJvZHkiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiUEVORElORyIsIk9QRU4iLCJPUEVOX05PX05FV19UUkFERVMiLCJDTE9TRUQiLCJMSVZFIiwib25TdWNjZXNzIiwib25FcnJvciIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIkNvbmZpZyIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJIT1NUUyIsIkFQUFMiLCJSRVBPUlRTIiwiVUFUIiwiUFJPRCIsIkRyaXZlV2VhbHRoRXJyb3IiLCJEcml2ZVdlYWx0aFNlc3Npb25FcnJvciIsIl9rZXlzIiwiX21haW5Vc2VyIiwic2Vzc2lvbnMiLCJyZWplY3Rpb25SZWFzb24iLCJvcmRSZWpSZWFzb24iLCJzdGF0dXMiLCJvcmRTdGF0dXMiLCJvcmRUeXBlIiwib3JkZXJJRCIsImluc3RydW1lbnQiLCJzaWRlIiwicXR5IiwiYW1vdW50Q2FzaCIsImNvbW1lbnQiLCJhdXRvU3RvcCIsInByaWNlIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJsaW1pdFByaWNlIiwiTElNSVQiLCJwb2xsIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIm9yZGVyIiwiU1RBVFVTRVMiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiQlVZIiwiU0VMTCIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwiQXJyYXkiLCJpc0FycmF5Iiwic3ltIiwib2JqIiwic3BsaXQiLCJzbGljZSIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJOdW1iZXIiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfZ2V0QWxsU2V0dGluZ3MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsIl9zZXRTZXR0aW5nIiwiZ2V0TGlzdEZvclVzZXJJRCIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDWEEsdUNBRFc7O0FBR1hDLCtCQUhXO0FBSVhDLDJCQUpXO0FBS1hDLCtCQUxXO0FBTVhDLHFDQU5XO0FBT1hDLDJCQVBXO0FBUVhDLCtCQVJXO0FBU1hDLHlCQVRXO0FBVVhDLGlDQVZXOztBQVlYQyx5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LEVBQTZCbkMsSUFBN0I7O0FBRUEsb0JBQU8sdUJBQVE7QUFDZGxMLHlCQUFRLE1BRE07QUFFZEMsdUNBRmM7QUFHZEcsNkJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYixDQUhFO0FBSWQ2Qyw4QkFBYTtBQUNaLHFDQUFnQjtBQURKLGtCQUpDO0FBT2RiO0FBUGMsY0FBUixFQVFKLGdCQUFRO0FBQ1ZuQyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNBLGNBVk0sRUFVSjtBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQVZJLENBQVA7QUFXQTs7OzZCQW5Ld0I7QUFBRSxvQkFBTztBQUMzQmtDLDBCQUFTLENBRGtCO0FBRTNCOEssMkJBQVUsQ0FGaUI7QUFHM0I5RiwyQkFBVSxDQUhpQjtBQUkzQitGLDBCQUFTLENBSmtCO0FBSzNCNUsseUJBQVE7QUFMbUIsY0FBUDtBQU1yQjs7OzZCQXNJc0I7QUFBRSxvQkFBTztBQUM5QjZLLDJCQUFVLFlBRG9CO0FBRXBDQyxtQ0FBa0Isa0JBRmtCO0FBR3BDQyxpREFBZ0M7QUFISSxjQUFQO0FBSXhCOzs7Ozs7bUJBOU9jbE8sSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdhMzA3YjE5M2VkNDI0NTVmZTg3IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBFcnJvcixcbiAgICBGdW5kaW5nLFxuICAgIEluc3RydW1lbnQsXG4gICAgT3JkZXIsXG4gICAgUmVwb3J0cyxcbiAgICBVc2VyLFxuICAgIFNlc3Npb25zLFxuXG4gICAgc2V0dXAsXG4gICAgcmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJhY2NvdW50Tm9cIixcbiAgICAgICAgICAgIFwiYWNjb3VudFR5cGVcIixcbiAgICAgICAgICAgIFwiY3VycmVuY3lJRFwiLFxuICAgICAgICAgICAgXCJpYklEXCIsXG4gICAgICAgICAgICBcIm1hcmdpblwiLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiLFxuICAgICAgICAgICAgXCJvcGVuZWRXaGVuXCIsXG4gICAgICAgICAgICBcInBhdHRlcm5EYXlUcmFkZXNcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInRyYWRpbmdUeXBlXCIsXG4gICAgICAgICAgICBcImFjY291bnRNZ210VHlwZVwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCbG90dGVyKHR5cGUsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlICYmICFjYikge1xuICAgICAgICAgICAgY2IgPSB0eXBlO1xuICAgICAgICAgICAgdHlwZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRTdW1tYXJ5LyR7dGhpcy5hY2NvdW50SUR9JHt0eXBlID8gJy8nICsgdHlwZSA6IFwiXCJ9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICAvLyBnZXRQZXJmb3JtYW5jZShzdGFydERhdGUsIGVuZERhdGUsIGNiKVxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UoY2IpXG4gICAgZ2V0UGVyZm9ybWFuY2UoKSB7XG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBjYjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgWyBzdGFydERhdGUsIGVuZERhdGUgXSA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICBgJmVuZERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0ke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0ke3N0YXJ0RGF0ZS5nZXREYXRlKCl9YDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RGV0YWlscyA9IHtcbiAgICAgICAgICAgIGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG4gICAgICAgICAgICBhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuICAgICAgICAgICAgYWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG4gICAgICAgICAgICB1c2VySUQ6IHRoaXMudXNlcklELFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcbiAgICAgICAgZGF0YS51c2VySUQgPSB0aGlzLnVzZXJJRDtcbiAgICAgICAgZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcbiAgICAgICAgcmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuICAgIH1cblxuICAgIGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuICAgIH1cblxuICAgIGdldFBsYWNlZE9yZGVycyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuICAgIH1cblxuICAgIGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICByZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VHJhZGVDb25maXJtcyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5LCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBCTE9UVEVSX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBDQVNIOiBcImNhc2hcIixcbiAgICAgICAgT1JERVJTOiBcIm9yZGVyc1wiLFxuICAgICAgICBUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG4gICAgICAgIFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcbiAgICAgICAgQUxMOiBudWxsLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBFTkRJTkc6IDEsXG4gICAgICAgIE9QRU46IDIsXG4gICAgICAgIE9QRU5fTk9fTkVXX1RSQURFUzogMyxcbiAgICAgICAgQ0xPU0VEOiA5LFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBSQUNUSUNFOiAxLFxuICAgICAgICBMSVZFOiAyLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUodXNlcklELCB0eXBlLCBkYXRhLCBjYikge1xuICAgICAgICBpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB1c2VySUQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcbiAgICAgICAgICAgICAgICB0cmFuQW1vdW50OiBkYXRhLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG4gICAgICAgICAgICAgICAgPyBgL3NpZ251cHMvcHJhY3RpY2VgXG4gICAgICAgICAgICAgICAgOiBgL3NpZ251cHMvbGl2ZWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCJpbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuICAgIG1ldGhvZCA9IFwiR0VUXCIsXG4gICAgZW5kcG9pbnQsXG4gICAgc2Vzc2lvbktleSxcbiAgICBib2R5LFxuICAgIGFkZGxIZWFkZXJzID0ge30sXG4gICAgaG9zdCA9IEhPU1RTLkFQSSxcbn0sIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfTtcbiAgICBpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcbiAgICAgICAgaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbktleSkge1xuICAgICAgICBoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuICAgIH1cbiAgICBmb3IgKGxldCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG5cbiAgICBlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuICAgIGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG4gICAgQ29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG4gICAgICAgIGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBlcnJvciwgZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgaWYgKHJlc0JvZHkpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlcnJvciA9IHN0YXR1c0NvZGUgPT0gNDAxID8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSkgOiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcbiAgICBlbnY6IG51bGwsXG4gICAgaHR0cEltcGw6IG51bGwsXG4gICAgYXBwVHlwZUlEOiBudWxsLFxuICAgIGFwcFZlcnNpb246IG51bGwsXG4gICAgd2xwSUQ6IG51bGwsXG4gICAgYXBwc1BhcnRuZXJJRDogbnVsbCxcbiAgICByZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG4gICAgQVBJOiBcImFwaVwiLFxuICAgIEFQUFM6IFwiYXBwc1wiLFxuICAgIFJFUE9SVFM6IFwicmVwb3J0c1wiXG59O1xuXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuICAgIFVBVDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICB9LFxuICAgIFBST0Q6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG4gICAgICAgIFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGguY29tXCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG4gICAgZW52LFxuICAgIGh0dHBJbXBsLFxuICAgIGFwcFR5cGVJRCxcbiAgICBhcHBWZXJzaW9uLFxuICAgIHdscElEID0gXCJEV1wiLFxuICAgIGFwcHNQYXJ0bmVySUQsXG4gICAgcmVmZXJyYWxDb2RlLFxufSkge1xuICAgIENvbmZpZy5lbnYgPSBlbnY7XG4gICAgQ29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG4gICAgQ29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcbiAgICBDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG4gICAgQ29uZmlnLndscElEID0gd2xwSUQ7XG4gICAgQ29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuICAgIENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRHJpdmVXZWFsdGhFcnJvcixcbiAgICBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYWluVXNlcikgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJvcmRlcklEXCIsXG4gICAgICAgICAgICBcImFjY291bnRJRFwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwiY3VtUXR5XCIsXG4gICAgICAgICAgICBcImFjY291bnROb1wiLFxuICAgICAgICAgICAgXCJjb21tZW50XCIsXG4gICAgICAgICAgICBcImNvbW1pc3Npb25cIixcbiAgICAgICAgICAgIFwiY3JlYXRlZEJ5SURcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZFdoZW5cIixcbiAgICAgICAgICAgIFwiZXhlY3V0ZWRXaGVuXCIsXG4gICAgICAgICAgICBcImdyb3NzVHJhZGVBbXRcIixcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcImxlYXZlc1F0eVwiLFxuICAgICAgICAgICAgXCJvcmRlck5vXCIsXG4gICAgICAgICAgICBcIm9yZGVyUXR5XCIsXG4gICAgICAgICAgICBcInNpZGVcIixcbiAgICAgICAgICAgIFwiYXV0b1N0b3BcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZGF0YS5vcmRTdGF0dXM7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZTtcbiAgICB9XG5cbiAgICBjYW5jZWwoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9vcmRlcnMvJHt0aGlzLm9yZGVySUR9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTSURFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgQlVZOiBcIkJcIixcbiAgICAgICAgU0VMTDogXCJTXCIsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgTUFSS0VUOiBcIjFcIixcbiAgICAgICAgTElNSVQ6IFwiMlwiLFxuICAgICAgICBTVE9QOiBcIjNcIixcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuICAgICAgICBORVc6IFwiMFwiLFxuICAgICAgICBQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuICAgICAgICBGSUxMOiBcIjJcIixcbiAgICAgICAgQ0FOQ0VMRUQ6IFwiNFwiLFxuICAgICAgICBSRUpFQ1RFRDogXCI4XCIsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBuZXcgT3JkZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh0eXBlLCB7XG4gICAgICAgIGFjY291bnRJRCxcbiAgICAgICAgYWNjb3VudE5vLFxuICAgICAgICB1c2VySUQsXG4gICAgICAgIGFjY291bnRUeXBlLFxuICAgIH0sIHtcbiAgICAgICAgaW5zdHJ1bWVudCxcbiAgICAgICAgc2lkZSxcbiAgICAgICAgcXR5LFxuICAgICAgICBhbW91bnRDYXNoLFxuICAgICAgICBjb21tZW50LFxuICAgICAgICBhdXRvU3RvcCxcbiAgICAgICAgcHJpY2UsXG4gICAgICAgIHdhaXRGb3JGaWxsID0gdHJ1ZSxcbiAgICAgICAgZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG4gICAgICAgIGZpbGxNYXhSZXRyaWVzID0gMTAsXG4gICAgfSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudENhc2ggJiYgcXR5KSB0aHJvdyBuZXcgRXJyb3IoYFwicXR5XCIgYW5kIFwiYW1vdW50Q2FzaFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuYCk7XG4gICAgICAgIGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgIXByaWNlKSB0aHJvdyBuZXcgRXJyb3IoYExpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXCJwcmljZS5cImApO1xuICAgICAgICBpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmIGF1dG9TdG9wKSB0aHJvdyBuZXcgRXJyb3IoYFwiYXV0b1N0b3BcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuYCk7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgICAgaW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG4gICAgICAgICAgICAgICAgYWNjb3VudElELFxuICAgICAgICAgICAgICAgIGFjY291bnRObyxcbiAgICAgICAgICAgICAgICB1c2VySUQsXG4gICAgICAgICAgICAgICAgYWNjb3VudFR5cGUsXG4gICAgICAgICAgICAgICAgb3JkVHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBzaWRlLFxuICAgICAgICAgICAgICAgIG9yZGVyUXR5OiBxdHkgPyBxdHkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgYW1vdW50Q2FzaDogYW1vdW50Q2FzaCA/IGFtb3VudENhc2ggOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgY29tbWVudCxcbiAgICAgICAgICAgICAgICBhdXRvU3RvcCxcbiAgICAgICAgICAgICAgICBwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFPcmRlci5UWVBFUy5NQVJLRVQgfHwgIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuICAgICAgICAgICAgbGV0IHBvbGwsIHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGxNYXhSZXRyaWVzLS07XG4gICAgICAgICAgICAgICAgT3JkZXIuZ2V0QnlJRChkYXRhLm9yZGVySUQsIHVzZXJJRCwgKGVyciwgb3JkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsTWF4UmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09yZGVyLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXG4gICAgc3RhdGljIGdldCBBTExPV0VEX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBERVBPU0lUOiBcIkRFUE9TSVRcIixcbiAgICAgICAgV0lUSERSQVc6IFwiV0lUSERSQVdcIixcbiAgICAgICAgREVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgbWluQW1vdW50LFxuICAgICAgICBtYXhBbW91bnQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZmlsdGVycyA9IHt9LFxuICAgIH0gPSB7fSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudCAmJiAobWluQW1vdW50IHx8IG1heEFtb3VudCkpIHRocm93IG5ldyBFcnJvcihgXCJhbW91bnRcIiBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFwibWluQW1vdW50XCIgb3IgXCJtYXhBbW91bnQuXCJgKTtcblxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBgcGFydG5lcj0ke0NvbmZpZy5hcHBzUGFydG5lcklEfSZ1c2VySUQ9JHt1c2VySUR9JmFjY291bnRJRD0ke2FjY291bnRJRH1gO1xuICAgICAgICBpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuICAgICAgICBpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuICAgICAgICBpZiAobWF4QW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1heEFtb3VudD0ke21heEFtb3VudH1gO1xuICAgICAgICBpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuICAgICAgICBpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jb3VudHJ5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjb3VudHJ5XT0ke2ZpbHRlcnMuY291bnRyeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuQVBQUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblxuICAgIHN0YXRpYyBnZXRUcmFuc2FjdGlvbnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9RmluVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPU9yZGVyVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RhdGVtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDJgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VHJhZGVDb25maXJtcyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDFgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGF4RG9jdW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wM2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZURvd25sb2FkVVJMKHVzZXJJRCwgYWNjb3VudElELCBmaWxlS2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnVybCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvY291bnRyaWVzYCxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXQgQ0hBUlRfQ09NUFJFU1NJT05TKCkgeyByZXR1cm4ge1xuICAgICAgICBEQVk6IDAsXG4gICAgICAgIE1JTlVURV8xOiAxLFxuICAgICAgICBNSU5VVEVfNTogNCxcbiAgICAgICAgTUlOVVRFXzMwOiA4LFxuICAgICAgICBIT1VSOiA5LFxuICAgICAgICBXRUVLOiAxMFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2wke3N5bWJvbHMubGVuZ3RoID4gMSA/IFwic1wiIDogXCJcIn09JHtzeW1ib2xzLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGRhdGFbMF0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKGlkLCBpbmNsdWRlRnVuZGFtZW50YWxzID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/ICc/b3B0aW9ucz1GJyA6ICcnfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBJbnN0cnVtZW50KGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXMsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHJhZGVTdGF0dXM7XG4gICAgICAgICAgICB0cmFkZVN0YXR1cyA9IFwiLTFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlYXJjaChjcml0ZXJpYSwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFF1b3RlKGNiKSB7XG4gICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sLCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFF1b3RlKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHVzZXJQYXNzZWRPbmVTeW1ib2wgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHVzZXJQYXNzZWRPbmVTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgICAgc3ltYm9sID0gW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgc3ltYm9sID0gc3ltYm9sLm1hcChzeW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9sLmpvaW4oXCIsXCIpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgICAgIGFkZGxIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJ0ZXh0L3BsYWluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG4gICAgICAgICAgICBmb3IgKGxldCByYXdRdW90ZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmlkOiBOdW1iZXIocGFyc2VkUXVvdGVbMV0pLFxuICAgICAgICAgICAgICAgICAgICBhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyUGFzc2VkT25lU3ltYm9sKSBvYmogPSBvYmpbc3ltYm9sWzBdXTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG9iaik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRDaGFydERhdGEoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uKSB7XG4gICAgICAgIGxldCBjYiwgdGltZVBhcmFtcztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUVuZCAgID0gYXJndW1lbnRzWzNdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYGRhdGVTdGFydD0ke2RhdGVTdGFydH0mZGF0ZUVuZD0ke2RhdGVFbmR9YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGB0cmFkaW5nRGF5cz0ke2FyZ3VtZW50c1syXX1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbM107XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2JhcnM/aW5zdHJ1bWVudElEPSR7aW5zdHJ1bWVudElEfSZjb21wcmVzc2lvbj0ke2NvbXByZXNzaW9ufSYke3RpbWVQYXJhbXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhLnNwbGl0KFwifFwiKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuY29uc3QgX2dldFNldHRpbmdzID0gKHVzZXJJRCwga2V5LCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgKGRhdGEpID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhLnZhbHVlKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuY29uc3QgX2dldEFsbFNldHRpbmdzID0gKHVzZXJJRCwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgKGRhdGEpID0+IHtcblx0XHRsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuXHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdH1cblx0XHRjYiAmJiBjYihudWxsLCBmb3JtYXR0ZWREYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuY29uc3QgX3NldFNldHRpbmcgPSAodXNlcklELCBrZXksIHZhbHVlLCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keToge1xuXHRcdFx0a2V5LCB2YWx1ZVxuXHRcdH1cblx0fSwgKCkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICByZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklELCBjYik7XG4gICAgfVxuXG5cdHVwbG9hZERvY3VtZW50KGZpbGUsIHR5cGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlLCBjYik7XG4gICAgfVxuXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBjYilcbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdHN0YXRpYyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpIHtcbiAgICBcdGlmICghY2IpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRcdH1cbiAgICB9XG5cblx0Ly8gZ2V0U2V0dGluZ3Moa2V5LCBjYilcblx0Ly8gZ2V0U2V0dGluZ3MoY2IpXG4gICAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgXHRjb25zdCBbIGtleSwgY2IgXSA9IGFyZ3VtZW50cztcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHRoaXMudXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSwgY2IpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBzZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuXHR9XG5cbiAgICBzZXRTZXR0aW5nKGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuICAgIH1cblxuICAgIHVuc2V0U2V0dGluZyhrZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh0aGlzLnVzZXJJRCl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBFTkRJTkc6IDEsXG4gICAgICAgIEFQUFJPVkVEOiAyLFxuICAgICAgICBSRUpFQ1RFRDogMyxcbiAgICAgICAgUkVWT0tFRDogNCxcbiAgICAgICAgQ0xPU0VEOiA1LFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBVc2VyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG4gICAgICAgICAgICAgICAgYXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuICAgICAgICAgICAgICAgIG9zVHlwZTogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBzY3JSZXM6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGlwQWRkcmVzczogXCJ1bmtub3duXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnNhdmUoZGF0YS51c2VySUQsIGRhdGEuc2Vzc2lvbktleSk7XG4gICAgICAgICAgICBVc2VyLmdldEJ5VXNlcklEKGRhdGEudXNlcklELCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZmFsc2UpO1xuICAgICAgICB9LCAoZXJyLCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDA0KSByZXR1cm4gY2IgJiYgY2IobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICBjYiAmJiBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgcmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcbiAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgdXRtU291cmNlLFxuICAgICAgICB1dG1UZXJtLFxuICAgIH0sIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWUsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gbG9naW5BdXRvbWF0aWNhbGx5O1xuICAgICAgICAgICAgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzMTogZW1haWwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgICAgICAgICB3bHBJRDogQ29uZmlnLndscElELFxuICAgICAgICAgICAgICAgIHJlZmVycmFsQ29kZSxcbiAgICAgICAgICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICAgICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgICAgICAgICAgdXRtVGVybSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlXG5cdH0sIGNiKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZVxuXHRcdFx0fSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgRE9DVU1FTlRfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG4gICAgfSB9XG5cblx0c3RhdGljIHVwbG9hZERvY3VtZW50KHVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpIHtcblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9kb2N1bWVudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=