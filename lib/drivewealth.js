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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2MzZmNGIxYWViMTViYWRjNDg1YSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwiZ2V0RnVuZGluZ01ldGhvZHMiLCJnZXRUcmFuc2FjdGlvbnMiLCJnZXRQbGFjZWRPcmRlcnMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0VGF4RG9jdW1lbnRzIiwiZ2V0VHJhZGVDb25maXJtcyIsImZpbGVLZXkiLCJnZW5lcmF0ZURvd25sb2FkVVJMIiwibWFwIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYWRkbEhlYWRlcnMiLCJob3N0IiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImhlYWRlciIsImVudiIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwSW1wbCIsInN0YXR1c0NvZGUiLCJyZXNIZWFkZXJzIiwicmVzQm9keSIsImNvbnRlbnRUeXBlIiwiaW5kZXhPZiIsInBhcnNlIiwiU3RyaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiYXBwVHlwZUlEIiwiYXBwVmVyc2lvbiIsIndscElEIiwiYXBwc1BhcnRuZXJJRCIsInJlZmVycmFsQ29kZSIsIkhPU1RTIiwiQVBQUyIsIlJFUE9SVFMiLCJVQVQiLCJQUk9EIiwiRHJpdmVXZWFsdGhFcnJvciIsIkRyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlcklEIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwicHJpY2UiLCJ3YWl0Rm9yRmlsbCIsImZpbGxSZXRyeUludGVydmFsIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJsaW1pdFByaWNlIiwiTElNSVQiLCJmaWxsTWF4UmV0cmllcyIsInBvbGwiLCJyZXRyaWVzIiwiY2hlY2tTdGF0dXMiLCJnZXRCeUlEIiwib3JkZXIiLCJTVEFUVVNFUyIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJCVVkiLCJTRUxMIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJBcnJheSIsImlzQXJyYXkiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJOdW1iZXIiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfZ2V0QWxsU2V0dGluZ3MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsIl9zZXRTZXR0aW5nIiwiZ2V0TGlzdEZvclVzZXJJRCIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDWEEsdUNBRFc7O0FBR1hDLCtCQUhXO0FBSVhDLDJCQUpXO0FBS1hDLDJCQUxXO0FBTVhDLCtCQU5XO0FBT1hDLHFDQVBXO0FBUVhDLDJCQVJXO0FBU1hDLCtCQVRXO0FBVVhDLHlCQVZXO0FBV1hDLGlDQVhXOztBQWFYQyx5QkFiVztBQWNYQztBQWRXLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRXFCVixPO0FBRWpCLHNCQUFZVyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0JBQ0UsQ0FDWixXQURZLEVBRVosUUFGWSxFQUdaLFdBSFksRUFJWixhQUpZLEVBS1osWUFMWSxFQU1aLE1BTlksRUFPWixRQVBZLEVBUVosVUFSWSxFQVNaLFlBVFksRUFVWixrQkFWWSxFQVdaLFFBWFksRUFZWixhQVpZLEVBYVosaUJBYlksQ0FERjs7QUFDZCxrREFjRztBQWRFLGlCQUFJQyxjQUFKO0FBZUQsa0JBQUtBLEdBQUwsSUFBWUQsS0FBS0MsR0FBTCxDQUFaO0FBQ0g7QUFDSjs7OztvQ0FFVUMsSSxFQUFNQyxFLEVBQUk7QUFDakIsaUJBQUlELFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNiQSxzQkFBS0QsSUFBTDtBQUNBQSx3QkFBTyxJQUFQO0FBQ0g7O0FBRUQsb0NBQVE7QUFDSkUseUJBQVEsS0FESjtBQUVKQyx1Q0FBb0IsS0FBS0MsTUFBekIsd0JBQWtELEtBQUtDLFNBQXZELElBQW1FTCxPQUFPLE1BQU1BLElBQWIsR0FBb0IsRUFBdkYsQ0FGSTtBQUdKTSw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhLEtBQUtILE1BQWxCO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNELE9BQU9GLEtBQUtFLElBQUwsQ0FBUCxHQUFvQkYsSUFBN0IsQ0FBTjtBQUNILGNBTkQsRUFNRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQU5IO0FBT0g7O0FBRUQ7QUFDQTtBQUNBOzs7OzBDQUNpQjtBQUNiLGlCQUFJQyxjQUFjLEVBQWxCO0FBQ0EsaUJBQUlSLFdBQUo7QUFDQSxpQkFBSVMsVUFBVUMsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUN4QlYsc0JBQUtTLFVBQVUsQ0FBVixDQUFMOztBQUR3Qiw2REFFT0EsU0FGUDtBQUFBLHFCQUVoQkUsU0FGZ0I7QUFBQSxxQkFFTEMsT0FGSzs7QUFHeEJKLGdDQUFlLGFBQWY7QUFDQUEsK0NBQTRCRyxVQUFVRSxXQUFWLEVBQTVCLEdBQXNELENBQUMsT0FBT0YsVUFBVUcsUUFBVixLQUF1QixDQUE5QixDQUFELEVBQW1DQyxLQUFuQyxDQUF5QyxDQUFDLENBQTFDLENBQXRELEdBQXFHLENBQUMsTUFBTUosVUFBVUssT0FBVixFQUFQLEVBQTRCRCxLQUE1QixDQUFrQyxDQUFDLENBQW5DLENBQXJHO0FBQ0FQLDhDQUE0QkksUUFBUUMsV0FBUixFQUE1QixHQUFvRCxDQUFDLE9BQU9ELFFBQVFFLFFBQVIsS0FBcUIsQ0FBNUIsQ0FBRCxFQUFpQ0MsS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUFwRCxHQUFpRyxDQUFDLE1BQU1ILFFBQVFJLE9BQVIsRUFBUCxFQUEwQkQsS0FBMUIsQ0FBZ0MsQ0FBQyxDQUFqQyxDQUFqRztBQUNILGNBTkQsTUFNTyxJQUFJTixVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQy9CVixzQkFBS1MsVUFBVSxDQUFWLENBQUw7QUFDQUQscURBQWtDQyxVQUFVLENBQVYsQ0FBbEM7QUFDSCxjQUhNLE1BR0E7QUFDSFQsc0JBQUtTLFVBQVUsQ0FBVixDQUFMO0FBQ0g7O0FBRUQsb0NBQVE7QUFDSlIseUJBQVEsS0FESjtBQUVKQyx1Q0FBb0IsS0FBS0MsTUFBekIsNEJBQXNELEtBQUtDLFNBQTNELEdBQXVFSSxXQUZuRTtBQUdKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhLEtBQUtILE1BQWxCO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILEtBQUtvQixXQUFkLENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBT2pCLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7O29DQUVVUixJLEVBQU1GLEksRUFBTUcsRSxFQUFJO0FBQ3ZCLGlCQUFNa0IsZ0JBQWdCO0FBQ2xCZCw0QkFBVyxLQUFLQSxTQURFO0FBRWxCZSw0QkFBVyxLQUFLQSxTQUZFO0FBR2xCQyw4QkFBYSxLQUFLQSxXQUhBO0FBSWxCakIseUJBQVEsS0FBS0E7QUFKSyxjQUF0Qjs7QUFPQSxvQkFBTyxnQkFBTWtCLE1BQU4sQ0FBYXRCLElBQWIsRUFBbUJtQixhQUFuQixFQUFrQ3JCLElBQWxDLEVBQXdDRyxFQUF4QyxDQUFQO0FBQ0g7Ozs2Q0FFZ0M7QUFBQSxpQkFBZkgsSUFBZSx1RUFBUixFQUFRO0FBQUEsaUJBQUpHLEVBQUk7O0FBQzdCSCxrQkFBS00sTUFBTCxHQUFjLEtBQUtBLE1BQW5CO0FBQ0FOLGtCQUFLTyxTQUFMLEdBQWlCLEtBQUtBLFNBQXRCO0FBQ0Esb0JBQU8sa0JBQVFrQixpQkFBUixDQUEwQnpCLElBQTFCLEVBQWdDRyxFQUFoQyxDQUFQO0FBQ0g7Ozt5Q0FFZVcsUyxFQUFXQyxPLEVBQVNaLEUsRUFBSTtBQUNwQyxvQkFBTyxrQkFBUXVCLGVBQVIsQ0FBd0IsS0FBS3BCLE1BQTdCLEVBQXFDLEtBQUtnQixTQUExQyxFQUFxRFIsU0FBckQsRUFBZ0VDLE9BQWhFLEVBQXlFWixFQUF6RSxDQUFQO0FBQ0g7Ozt5Q0FFZVcsUyxFQUFXQyxPLEVBQVNaLEUsRUFBSTtBQUNwQyxvQkFBTyxrQkFBUXdCLGVBQVIsQ0FBd0IsS0FBS3JCLE1BQTdCLEVBQXFDLEtBQUtnQixTQUExQyxFQUFxRFIsU0FBckQsRUFBZ0VDLE9BQWhFLEVBQXlFWixFQUF6RSxDQUFQO0FBQ0g7Ozt1Q0FFYVcsUyxFQUFXQyxPLEVBQVNaLEUsRUFBSTtBQUNsQyxvQkFBTyxrQkFBUXlCLGFBQVIsQ0FBc0IsS0FBS3RCLE1BQTNCLEVBQW1DLEtBQUtDLFNBQXhDLEVBQW1ETyxTQUFuRCxFQUE4REMsT0FBOUQsRUFBdUVaLEVBQXZFLENBQVA7QUFDSDs7O3lDQUVlVyxTLEVBQVdDLE8sRUFBU1osRSxFQUFJO0FBQ3BDLG9CQUFPLGtCQUFRMEIsZUFBUixDQUF3QixLQUFLdkIsTUFBN0IsRUFBcUMsS0FBS0MsU0FBMUMsRUFBcURPLFNBQXJELEVBQWdFQyxPQUFoRSxFQUF5RVosRUFBekUsQ0FBUDtBQUNIOzs7MENBRWdCVyxTLEVBQVdDLE8sRUFBU1osRSxFQUFJO0FBQ3JDLG9CQUFPLGtCQUFRMkIsZ0JBQVIsQ0FBeUIsS0FBS3hCLE1BQTlCLEVBQXNDLEtBQUtDLFNBQTNDLEVBQXNETyxTQUF0RCxFQUFpRUMsT0FBakUsRUFBMEVaLEVBQTFFLENBQVA7QUFDSDs7OzZDQUVtQjRCLE8sRUFBUzVCLEUsRUFBSTtBQUM3QixvQkFBTyxrQkFBUTZCLG1CQUFSLENBQTRCLEtBQUsxQixNQUFqQyxFQUF5QyxLQUFLQyxTQUE5QyxFQUF5RHdCLE9BQXpELEVBQWtFNUIsRUFBbEUsQ0FBUDtBQUNIOzs7MENBc0J1QkcsTSxFQUFRSCxFLEVBQUk7QUFDaEMsb0NBQVE7QUFDSkMseUJBQVEsS0FESjtBQUVKQyx1Q0FBb0JDLE1BQXBCLGNBRkk7QUFHSkUsNkJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYjtBQUhSLGNBQVIsRUFJRyxVQUFDTixJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxLQUFLaUMsR0FBTCxDQUFTO0FBQUEsNEJBQVcsSUFBSTVDLE9BQUosQ0FBWTZDLE9BQVosQ0FBWDtBQUFBLGtCQUFULENBQVQsQ0FBTjtBQUNILGNBTkQsRUFNRztBQUFBLHdCQUFPL0IsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FOSDtBQU9IOzs7Z0NBRWFKLE0sRUFBUUosSSxFQUFNRixJLEVBQU1HLEUsRUFBSTtBQUNsQyxpQkFBSUQsU0FBU2IsUUFBUThDLEtBQVIsQ0FBY0MsUUFBM0IsRUFBcUM7QUFDakNwQyx3QkFBTztBQUNITSxtQ0FERztBQUVIK0IsbUNBQWMsTUFGWDtBQUdIQyxpQ0FBWXRDO0FBSFQsa0JBQVA7QUFLSDs7QUFFRCxvQ0FBUTtBQUNKSSx5QkFBUSxNQURKO0FBRUpDLDJCQUFVSCxTQUFTYixRQUFROEMsS0FBUixDQUFjQyxRQUF2Qix3Q0FGTjtBQUtKNUIsNkJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYixDQUxSO0FBTUppQyx1QkFBTXZDO0FBTkYsY0FBUixFQU9HLFVBQUNBLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNILGNBVEQsRUFTRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQVRIO0FBVUg7Ozs2QkFqRDBCO0FBQUUsb0JBQU87QUFDaEM4Qix1QkFBTSxNQUQwQjtBQUVoQ0MseUJBQVEsUUFGd0I7QUFHaENDLCtCQUFjLGNBSGtCO0FBSWhDQyw0QkFBVyxXQUpxQjtBQUtoQ0Msc0JBQUs7QUFMMkIsY0FBUDtBQU0xQjs7OzZCQUVtQjtBQUFFLG9CQUFPO0FBQzNCQywwQkFBUyxDQURrQjtBQUUzQkMsdUJBQU0sQ0FGcUI7QUFHM0JDLHFDQUFvQixDQUhPO0FBSTNCQyx5QkFBUTtBQUptQixjQUFQO0FBS3JCOzs7NkJBRWdCO0FBQUUsb0JBQU87QUFDeEJaLDJCQUFVLENBRGM7QUFFeEJhLHVCQUFNO0FBRmtCLGNBQVA7QUFHbEI7Ozs7OzttQkE1SGM1RCxPOzs7Ozs7Ozs7Ozs7bUJDSEdVLE87O0FBSHhCOztBQUNBOztBQUVlLFVBQVNBLE9BQVQsT0FPWm1ELFNBUFksRUFPREMsT0FQQyxFQU9RO0FBQUEsNEJBTm5CL0MsTUFNbUI7QUFBQSxTQU5uQkEsTUFNbUIsK0JBTlYsS0FNVTtBQUFBLFNBTG5CQyxRQUttQixRQUxuQkEsUUFLbUI7QUFBQSxTQUpuQkcsVUFJbUIsUUFKbkJBLFVBSW1CO0FBQUEsU0FIbkIrQixJQUdtQixRQUhuQkEsSUFHbUI7QUFBQSxpQ0FGbkJhLFdBRW1CO0FBQUEsU0FGbkJBLFdBRW1CLG9DQUZMLEVBRUs7QUFBQSwwQkFEbkJDLElBQ21CO0FBQUEsU0FEbkJBLElBQ21CLDZCQURaLGNBQU1DLEdBQ007O0FBQ25CLFNBQUlDLFVBQVU7QUFDVkMsaUJBQVE7QUFERSxNQUFkO0FBR0EsU0FBSXBELFdBQVcsTUFBWCxJQUFxQkEsV0FBVyxLQUFoQyxJQUF5Q0EsV0FBVyxPQUF4RCxFQUFpRTtBQUM3RG1ELGlCQUFRLGNBQVIsSUFBMEIsa0JBQTFCO0FBQ0g7QUFDRCxTQUFJL0MsVUFBSixFQUFnQjtBQUNaK0MsaUJBQVEseUJBQVIsSUFBcUMvQyxVQUFyQztBQUNIO0FBQ0QsVUFBSyxJQUFJaUQsTUFBVCxJQUFtQkwsV0FBbkIsRUFBZ0M7QUFDNUJHLGlCQUFRRSxNQUFSLElBQWtCTCxZQUFZSyxNQUFaLENBQWxCO0FBQ0g7O0FBRURwRCxnQkFBVyxlQUFPcUQsR0FBUCxDQUFXTCxJQUFYLElBQW1CaEQsUUFBOUI7O0FBRUEsU0FBSWtELFFBQVEsY0FBUixNQUE0QixrQkFBaEMsRUFBb0RoQixPQUFPb0IsS0FBS0MsU0FBTCxDQUFlckIsSUFBZixDQUFQOztBQUVwRCxvQkFBT3NCLFFBQVAsQ0FBZ0J6RCxNQUFoQixFQUF3QkMsUUFBeEIsRUFBa0NrRCxPQUFsQyxFQUEyQ2hCLElBQTNDLEVBQWlELFVBQUN1QixVQUFELEVBQWFDLFVBQWIsRUFBeUJDLE9BQXpCLEVBQXFDO0FBQ2xGLGFBQU1DLGNBQWNGLFdBQVcsY0FBWCxLQUE4QkEsV0FBVyxjQUFYLENBQTlCLElBQTRELEVBQWhGO0FBQ0EsYUFBSUMsV0FBV0MsWUFBWUMsT0FBWixDQUFvQixrQkFBcEIsTUFBNEMsQ0FBQyxDQUE1RCxFQUErRDtBQUMzRCxpQkFBSTtBQUNBRiwyQkFBVUwsS0FBS1EsS0FBTCxDQUFXSCxPQUFYLENBQVY7QUFDSCxjQUZELENBRUUsT0FBT3RELEdBQVAsRUFBWTtBQUNWO0FBQ0g7QUFDSjs7QUFFRCxhQUFJMEQsT0FBT04sVUFBUCxFQUFtQixDQUFuQixNQUEwQixHQUExQixJQUFpQ00sT0FBT04sVUFBUCxFQUFtQixDQUFuQixNQUEwQixHQUEvRCxFQUFvRTtBQUNoRVosdUJBQVVjLE9BQVYsRUFBbUJGLFVBQW5CLEVBQStCQyxVQUEvQjtBQUNILFVBRkQsTUFFTztBQUNILGlCQUFJTSxjQUFKO0FBQUEsaUJBQVdDLHFCQUFYO0FBQ0EsaUJBQUlOLE9BQUosRUFBYTtBQUNUTSxnQ0FBZU4sUUFBUU8sT0FBUixJQUFtQlosS0FBS0MsU0FBTCxDQUFlSSxPQUFmLENBQWxDO0FBQ0g7QUFDREsscUJBQVFQLGNBQWMsR0FBZCxHQUFvQixtQ0FBNEJRLFlBQTVCLENBQXBCLEdBQWdFLDRCQUFxQkEsWUFBckIsQ0FBeEU7QUFDQW5CLHFCQUFRa0IsS0FBUixFQUFlTCxPQUFmLEVBQXdCRixVQUF4QixFQUFvQ0MsVUFBcEM7QUFDSDtBQUNKLE1BcEJEO0FBcUJIOzs7Ozs7Ozs7Ozs7Ozs7U0NwQmVqRSxLLEdBQUFBLEs7Ozs7QUE3QlQsS0FBTVIsMEJBQVM7QUFDbEJvRSxVQUFLLElBRGE7QUFFbEJHLGVBQVUsSUFGUTtBQUdsQlcsZ0JBQVcsSUFITztBQUlsQkMsaUJBQVksSUFKTTtBQUtsQkMsWUFBTyxJQUxXO0FBTWxCQyxvQkFBZSxJQU5HO0FBT2xCQyxtQkFBYztBQVBJLEVBQWY7O0FBVUEsS0FBTUMsd0JBQVE7QUFDakJ2QixVQUFLLEtBRFk7QUFFakJ3QixXQUFNLE1BRlc7QUFHakJDLGNBQVM7QUFIUSxFQUFkOztBQU1BLEtBQU0zRixzQ0FBZTtBQUN4QjRGLDRDQUNLSCxNQUFNdkIsR0FEWCxFQUNpQiw4QkFEakIseUJBRUt1QixNQUFNQyxJQUZYLEVBRWtCLDRCQUZsQix5QkFHS0QsTUFBTUUsT0FIWCxFQUdxQiwrQkFIckIsUUFEd0I7QUFNeEJFLCtDQUNLSixNQUFNdkIsR0FEWCxFQUNpQixnQ0FEakIsMEJBRUt1QixNQUFNQyxJQUZYLEVBRWtCLDhCQUZsQiwwQkFHS0QsTUFBTUUsT0FIWCxFQUdxQixpQ0FIckI7QUFOd0IsRUFBckI7O0FBYUEsVUFBU2pGLEtBQVQsT0FRSjtBQUFBLFNBUEM0RCxHQU9ELFFBUENBLEdBT0Q7QUFBQSxTQU5DRyxRQU1ELFFBTkNBLFFBTUQ7QUFBQSxTQUxDVyxTQUtELFFBTENBLFNBS0Q7QUFBQSxTQUpDQyxVQUlELFFBSkNBLFVBSUQ7QUFBQSwyQkFIQ0MsS0FHRDtBQUFBLFNBSENBLEtBR0QsOEJBSFMsSUFHVDtBQUFBLFNBRkNDLGFBRUQsUUFGQ0EsYUFFRDtBQUFBLFNBRENDLFlBQ0QsUUFEQ0EsWUFDRDs7QUFDQ3RGLFlBQU9vRSxHQUFQLEdBQWFBLEdBQWI7QUFDQXBFLFlBQU91RSxRQUFQLEdBQWtCQSxRQUFsQjtBQUNBdkUsWUFBT2tGLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FsRixZQUFPbUYsVUFBUCxHQUFvQkEsVUFBcEI7QUFDQW5GLFlBQU9vRixLQUFQLEdBQWVBLEtBQWY7QUFDQXBGLFlBQU9xRixhQUFQLEdBQXVCQSxpQkFBaUJELEtBQXhDO0FBQ0FwRixZQUFPc0YsWUFBUCxHQUFzQkEsWUFBdEI7QUFDSCxFOzs7Ozs7Ozs7Ozs7O0FDN0NEOzs7Ozs7Ozs7Ozs7S0FFYU0sZ0IsV0FBQUEsZ0I7Ozs7Ozs7Ozs7OztLQUlBQyx1QixXQUFBQSx1Qjs7Ozs7Ozs7Ozs7O21CQUlFO0FBQ1hELHVDQURXO0FBRVhDO0FBRlcsRTs7Ozs7O0FDVmY7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ3RETXRGLFE7QUFDRix5QkFBYztBQUFBOztBQUNWLGNBQUt1RixLQUFMLEdBQWEsRUFBYjtBQUNBLGNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDSDs7Ozs4QkFFSS9FLE0sRUFBUUUsVSxFQUFZO0FBQ3JCLGtCQUFLNEUsS0FBTCxDQUFXOUUsTUFBWCxJQUFxQkUsVUFBckI7QUFDQSxrQkFBSzZFLFNBQUwsR0FBaUIvRSxNQUFqQjtBQUNIOzs7NkJBRUdBLE0sRUFBUTtBQUNSLG9CQUFPLEtBQUs4RSxLQUFMLENBQVc5RSxNQUFYLENBQVA7QUFDSDs7O2tDQUVRO0FBQ0wsb0JBQU8sS0FBSzhFLEtBQUwsQ0FBVyxLQUFLQyxTQUFoQixDQUFQO0FBQ0g7OztnQ0FFTS9FLE0sRUFBUTtBQUNYLG9CQUFPLEtBQUs4RSxLQUFMLENBQVc5RSxNQUFYLENBQVA7QUFDSDs7Ozs7O0FBR0UsS0FBTWdGLDhCQUFXLElBQUl6RixRQUFKLEVBQWpCO21CQUNReUYsUTs7Ozs7Ozs7Ozs7Ozs7QUN6QmY7Ozs7QUFDQTs7Ozs7Ozs7S0FFcUI1RixLO0FBRWpCLG9CQUFZTSxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0JBQ0UsQ0FDWixTQURZLEVBRVosV0FGWSxFQUdaLFFBSFksRUFJWixRQUpZLEVBS1osV0FMWSxFQU1aLFNBTlksRUFPWixZQVBZLEVBUVosYUFSWSxFQVNaLGFBVFksRUFVWixjQVZZLEVBV1osZUFYWSxFQVlaLGNBWlksRUFhWixXQWJZLEVBY1osU0FkWSxFQWVaLFVBZlksRUFnQlosTUFoQlksRUFpQlosVUFqQlksQ0FERjs7QUFDZCxrREFrQkc7QUFsQkUsaUJBQUlDLGNBQUo7QUFtQkQsa0JBQUtBLEdBQUwsSUFBWUQsS0FBS0MsR0FBTCxDQUFaO0FBQ0g7QUFDRCxjQUFLc0YsZUFBTCxHQUF1QnZGLEtBQUt3RixZQUE1QjtBQUNBLGNBQUtDLE1BQUwsR0FBY3pGLEtBQUswRixTQUFuQjtBQUNBLGNBQUt4RixJQUFMLEdBQVlGLEtBQUsyRixPQUFqQjtBQUNIOzs7O2dDQUVNeEYsRSxFQUFJO0FBQ1Asb0NBQVE7QUFDSkMseUJBQVEsUUFESjtBQUVKQyx3Q0FBcUIsS0FBS3VGLE9BRnRCO0FBR0pwRiw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhLEtBQUtILE1BQWxCO0FBSFIsY0FBUixFQUlHLFlBQU07QUFDTEgsdUJBQU1BLEdBQUcsSUFBSCxDQUFOO0FBQ0gsY0FORCxFQU1HO0FBQUEsd0JBQU9BLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7O2lDQXFCY2tGLE8sRUFBU3RGLE0sRUFBUUgsRSxFQUFJO0FBQ2hDLG9DQUFRO0FBQ0pDLHlCQUFRLEtBREo7QUFFSkMsd0NBQXFCdUYsT0FGakI7QUFHSnBGLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWI7QUFIUixjQUFSLEVBSUcsVUFBQ04sSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBUyxJQUFJVCxLQUFKLENBQVVNLElBQVYsQ0FBVCxDQUFOO0FBQ0gsY0FORCxFQU1HO0FBQUEsd0JBQU9HLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7O2dDQUVhUixJLGVBZVhDLEUsRUFBSTtBQUFBLGlCQWRISSxTQWNHLFFBZEhBLFNBY0c7QUFBQSxpQkFiSGUsU0FhRyxRQWJIQSxTQWFHO0FBQUEsaUJBWkhoQixNQVlHLFFBWkhBLE1BWUc7QUFBQSxpQkFYSGlCLFdBV0csUUFYSEEsV0FXRztBQUFBLGlCQVRIc0UsVUFTRyxTQVRIQSxVQVNHO0FBQUEsaUJBUkhDLElBUUcsU0FSSEEsSUFRRztBQUFBLGlCQVBIQyxHQU9HLFNBUEhBLEdBT0c7QUFBQSxpQkFOSEMsVUFNRyxTQU5IQSxVQU1HO0FBQUEsaUJBTEhDLE9BS0csU0FMSEEsT0FLRztBQUFBLGlCQUpIQyxRQUlHLFNBSkhBLFFBSUc7QUFBQSxpQkFISEMsS0FHRyxTQUhIQSxLQUdHO0FBQUEsMkNBRkhDLFdBRUc7QUFBQSxpQkFGSEEsV0FFRyxxQ0FGVyxJQUVYO0FBQUEsK0NBREhDLGlCQUNHO0FBQUEsaUJBREhBLGlCQUNHLHlDQURpQixHQUNqQjs7QUFDSCxpQkFBSUwsY0FBY0QsR0FBbEIsRUFBdUIsTUFBTSxJQUFJeEcsS0FBSixzREFBTjtBQUN2QixpQkFBSVcsU0FBU1IsTUFBTXlDLEtBQU4sQ0FBWW1FLE1BQXJCLElBQStCLENBQUNILEtBQXBDLEVBQTJDLE1BQU0sSUFBSTVHLEtBQUosOENBQU47QUFDM0MsaUJBQUlXLFNBQVNSLE1BQU15QyxLQUFOLENBQVltRSxNQUFyQixJQUErQkosUUFBbkMsRUFBNkMsTUFBTSxJQUFJM0csS0FBSixtREFBTjs7QUFFN0Msb0NBQVE7QUFDSmEseUJBQVEsTUFESjtBQUVKQywyQkFBVSxTQUZOO0FBR0pHLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWIsQ0FIUjtBQUlKaUMsdUJBQU07QUFDRmdFLG1DQUFjVixXQUFXVSxZQUFYLElBQTJCVixXQUFXVyxFQUF0QyxJQUE0Q1gsVUFEeEQ7QUFFRnRGLHlDQUZFO0FBR0ZlLHlDQUhFO0FBSUZoQixtQ0FKRTtBQUtGaUIsNkNBTEU7QUFNRm9FLDhCQUFTekYsSUFOUDtBQU9GNEYsK0JBUEU7QUFRRlcsK0JBQVVWLE1BQU1BLEdBQU4sR0FBWVcsU0FScEI7QUFTRlYsaUNBQVlBLGFBQWFBLFVBQWIsR0FBMEJVLFNBVHBDO0FBVUZULHFDQVZFO0FBV0ZDLHVDQVhFO0FBWUZDLDRCQUFPakcsU0FBU1IsTUFBTXlDLEtBQU4sQ0FBWXdFLElBQXJCLEdBQTRCUixLQUE1QixHQUFvQ08sU0FaekM7QUFhRkUsaUNBQVkxRyxTQUFTUixNQUFNeUMsS0FBTixDQUFZMEUsS0FBckIsR0FBNkJWLEtBQTdCLEdBQXFDTztBQWIvQztBQUpGLGNBQVIsRUFtQkcsVUFBQzFHLElBQUQsRUFBVTtBQUNsQixxQkFBSThHLGlCQUFpQjVHLFNBQVNSLE1BQU15QyxLQUFOLENBQVltRSxNQUFyQixHQUE4QixFQUE5QixHQUFtQyxDQUF4RDs7QUFFQSxxQkFBSVMsYUFBSjtBQUFBLHFCQUFVQyxVQUFVRixjQUFwQjs7QUFFUyxxQkFBTUcsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDdEJIO0FBQ0FwSCwyQkFBTXdILE9BQU4sQ0FBY2xILEtBQUs0RixPQUFuQixFQUE0QnRGLE1BQTVCLEVBQW9DLFVBQUNJLEdBQUQsRUFBTXlHLEtBQU4sRUFBZ0I7QUFDaEQsNkJBQUl6RyxHQUFKLEVBQVMsT0FBT1AsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQ1QsNkJBQUlvRyxrQkFBa0IsQ0FBdEIsRUFBeUIsT0FBTzNHLE1BQU1BLEdBQUcsSUFBSCxFQUFTZ0gsS0FBVCxDQUFiOztBQUV6Qiw2QkFBSUEsTUFBTTFCLE1BQU4sS0FBaUIvRixNQUFNMEgsUUFBTixDQUFlQyxHQUFoQyxJQUF1Q0YsTUFBTTFCLE1BQU4sS0FBaUIvRixNQUFNMEgsUUFBTixDQUFlRSxZQUEzRSxFQUF5RjtBQUNyRixvQ0FBT25ILE1BQU1BLEdBQUcsSUFBSCxFQUFTZ0gsS0FBVCxDQUFiO0FBQ0gsMEJBRkQsTUFFTztBQUNISSx3Q0FBV04sV0FBWCxFQUF3QlosaUJBQXhCO0FBQ0g7QUFDSixzQkFURDtBQVVILGtCQVpEO0FBYUFrQiw0QkFBV04sV0FBWCxFQUF3QlosaUJBQXhCO0FBQ0gsY0F0Q0QsRUFzQ0c7QUFBQSx3QkFBT2xHLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBdENIO0FBdUNIOzs7NkJBeEZrQjtBQUFFLG9CQUFPO0FBQ3hCOEcsc0JBQUssR0FEbUI7QUFFeEJDLHVCQUFNO0FBRmtCLGNBQVA7QUFHbEI7Ozs2QkFFZ0I7QUFBRSxvQkFBTztBQUN4Qm5CLHlCQUFRLEdBRGdCO0FBRXhCTyx3QkFBTyxHQUZpQjtBQUd4QkYsdUJBQU07QUFIa0IsY0FBUDtBQUlsQjs7OzZCQUVtQjtBQUFFLG9CQUFPO0FBQzNCVSxzQkFBSyxHQURzQjtBQUUzQkMsK0JBQWMsR0FGYTtBQUczQkksdUJBQU0sR0FIcUI7QUFJM0JDLDJCQUFVLEdBSmlCO0FBSzNCQywyQkFBVTtBQUxpQixjQUFQO0FBTXJCOzs7Ozs7bUJBeERjbEksSzs7Ozs7Ozs7Ozs7Ozs7O0FDSHJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0tBRXFCRixPOzs7Ozs7OzZDQWdCTDtBQUFBLDRGQUFSLEVBQVE7QUFBQSxpQkFQUmMsTUFPUSxRQVBSQSxNQU9RO0FBQUEsaUJBTlJDLFNBTVEsUUFOUkEsU0FNUTtBQUFBLGlCQUxSc0gsUUFLUSxRQUxSQSxRQUtRO0FBQUEsaUJBSlJDLFNBSVEsUUFKUkEsU0FJUTtBQUFBLGlCQUhSQyxTQUdRLFFBSFJBLFNBR1E7QUFBQSxpQkFGUkMsTUFFUSxRQUZSQSxNQUVRO0FBQUEscUNBRFJDLE9BQ1E7QUFBQSxpQkFEUkEsT0FDUSxnQ0FERSxFQUNGOztBQUFBLGlCQUFKOUgsRUFBSTs7QUFDUixpQkFBSTZILFdBQVdGLGFBQWFDLFNBQXhCLENBQUosRUFBd0MsTUFBTSxJQUFJeEksS0FBSixxRUFBTjs7QUFFeEMsaUJBQUlvQiwyQkFBeUIsZUFBT2dFLGFBQWhDLGdCQUF3RHJFLE1BQXhELG1CQUE0RUMsU0FBaEY7QUFDQSxpQkFBSXNILFFBQUosRUFBY2xILDhCQUE0QmtILFFBQTVCO0FBQ2QsaUJBQUlDLFNBQUosRUFBZW5ILCtCQUE2Qm1ILFNBQTdCO0FBQ2YsaUJBQUlDLFNBQUosRUFBZXBILCtCQUE2Qm9ILFNBQTdCO0FBQ2YsaUJBQUlDLE1BQUosRUFBWXJILDRCQUEwQnFILE1BQTFCO0FBQ1osaUJBQUlDLFFBQVFDLElBQVosRUFBa0J2SCxrQ0FBZ0NzSCxRQUFRQyxJQUF4QztBQUNsQixpQkFBSUQsUUFBUUUsT0FBWixFQUFxQnhILHFDQUFtQ3NILFFBQVFFLE9BQTNDO0FBQ3JCLGlCQUFJRixRQUFRRyxRQUFaLEVBQXNCekgsc0NBQW9Dc0gsUUFBUUcsUUFBNUM7QUFDdEIsaUJBQUlILFFBQVFJLE9BQVosRUFBcUIxSCxxQ0FBbUNzSCxRQUFRSSxPQUEzQzs7QUFFckIsb0NBQVE7QUFDSmpJLHlCQUFRLEtBREo7QUFFSmlELHVCQUFNLGNBQU15QixJQUZSO0FBR0p6RSxpREFBOEJNLFdBSDFCO0FBSUpILDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWI7QUFKUixjQUFSLEVBS0csVUFBQ04sSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBU0gsSUFBVCxDQUFOO0FBQ0gsY0FQRCxFQU9HO0FBQUEsd0JBQU9HLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBUEg7QUFRSDs7O3lDQUVzQkosTSxFQUFRSCxFLEVBQUk7QUFDL0Isb0NBQVE7QUFDSkUsNENBREk7QUFFSkcsNkJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYjtBQUZSLGNBQVIsRUFHRyxVQUFDTixJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxLQUFLQSxJQUFkLENBQU47QUFDSCxjQUxELEVBS0c7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FMSDtBQU1IOzs7NkJBNUMwQjtBQUFFLG9CQUFPO0FBQ2hDNEgsMEJBQVMsU0FEdUI7QUFFaENDLDJCQUFVLFVBRnNCO0FBR2hDQyx1Q0FBc0I7QUFIVSxjQUFQO0FBSTFCOzs7Ozs7bUJBTmNoSixPOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7S0FFcUJHLE87Ozs7Ozs7eUNBRU1XLE0sRUFBUWdCLFMsRUFBV1IsUyxFQUFXQyxPLEVBQVNaLEUsRUFBSTtBQUM5RCxpQkFBTVEsY0FDRixpQkFBZSxtQkFBU0YsR0FBVCxDQUFhSCxNQUFiLENBQWYsd0VBR29CZ0IsU0FIcEIscUJBSWdCUixVQUFVMkgsV0FBVixFQUpoQixtQkFLYzFILFFBQVEwSCxXQUFSLEVBTGQsaUJBTVksZUFBTy9ELEtBTm5CLHVCQURKOztBQVVBLG9DQUFRO0FBQ0p0RSx5QkFBUSxNQURKO0FBRUppRCx1QkFBTSxjQUFNMEIsT0FGUjtBQUdKMUUsNENBQXlCTSxXQUhyQjtBQUlKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiLENBSlI7QUFLSmlDLHVCQUFNO0FBTEYsY0FBUixFQU1HLFVBQUN2QyxJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxLQUFLMEksV0FBTCxJQUFvQixFQUE3QixDQUFOO0FBQ0gsY0FSRCxFQVFHO0FBQUEsd0JBQU92SSxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQVJIO0FBU0g7Ozt5Q0FFc0JKLE0sRUFBUWdCLFMsRUFBV1IsUyxFQUFXQyxPLEVBQVNaLEUsRUFBSTtBQUM5RCxpQkFBTVEsY0FDRixpQkFBZSxtQkFBU0YsR0FBVCxDQUFhSCxNQUFiLENBQWYsMEVBR29CZ0IsU0FIcEIscUJBSWdCUixVQUFVMkgsV0FBVixFQUpoQixtQkFLYzFILFFBQVEwSCxXQUFSLEVBTGQsaUJBTVksZUFBTy9ELEtBTm5CLHVCQURKOztBQVVBLG9DQUFRO0FBQ0p0RSx5QkFBUSxNQURKO0FBRUppRCx1QkFBTSxjQUFNMEIsT0FGUjtBQUdKMUUsNENBQXlCTSxXQUhyQjtBQUlKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiLENBSlI7QUFLSmlDLHVCQUFNO0FBTEYsY0FBUixFQU1HLFVBQUN2QyxJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxLQUFLMEksV0FBZCxDQUFOO0FBQ0gsY0FSRCxFQVFHO0FBQUEsd0JBQU92SSxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQVJIO0FBU0g7Ozt1Q0FFb0JKLE0sRUFBUUMsUyxFQUFXTyxTLEVBQVdDLE8sRUFBU1osRSxFQUFJO0FBQzVELGlCQUFNUSxjQUNGLGdCQUFjSixTQUFkLG9CQUNnQk8sVUFBVTJILFdBQVYsRUFEaEIsbUJBRWMxSCxRQUFRMEgsV0FBUixFQUZkLGNBREo7O0FBTUEsb0NBQVE7QUFDSnJJLHlCQUFRLEtBREo7QUFFSkMsMkNBQXdCTSxXQUZwQjtBQUdKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNILGNBTkQsRUFNRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQU5IO0FBT0g7OzswQ0FFdUJKLE0sRUFBUUMsUyxFQUFXTyxTLEVBQVdDLE8sRUFBU1osRSxFQUFJO0FBQy9ELGlCQUFNUSxjQUNGLGdCQUFjSixTQUFkLG9CQUNnQk8sVUFBVTJILFdBQVYsRUFEaEIsbUJBRWMxSCxRQUFRMEgsV0FBUixFQUZkLGNBREo7O0FBTUEsb0NBQVE7QUFDSnJJLHlCQUFRLEtBREo7QUFFSkMsMkNBQXdCTSxXQUZwQjtBQUdKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNILGNBTkQsRUFNRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQU5IO0FBT0g7Ozt5Q0FFc0JKLE0sRUFBUUMsUyxFQUFXTyxTLEVBQVdDLE8sRUFBU1osRSxFQUFJO0FBQzlELGlCQUFNUSxjQUNGLGdCQUFjSixTQUFkLG9CQUNnQk8sVUFBVTJILFdBQVYsRUFEaEIsbUJBRWMxSCxRQUFRMEgsV0FBUixFQUZkLGNBREo7O0FBTUEsb0NBQVE7QUFDSnJJLHlCQUFRLEtBREo7QUFFSkMsMkNBQXdCTSxXQUZwQjtBQUdKSCw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNILGNBTkQsRUFNRztBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQU5IO0FBT0g7Ozs2Q0FFMEJKLE0sRUFBUUMsUyxFQUFXd0IsTyxFQUFTNUIsRSxFQUFJO0FBQ3ZELG9DQUFRO0FBQ0pDLHlCQUFRLEtBREo7QUFFSkMsNENBQXlCRSxTQUF6QixTQUFzQ3dCLE9BRmxDO0FBR0p2Qiw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiO0FBSFIsY0FBUixFQUlHLFVBQUNOLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILEtBQUsySSxHQUFkLENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBT3hJLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7OytDQUU0QlAsRSxFQUFJO0FBQzdCLG9DQUFRO0FBQ0pDLHlCQUFRLEtBREo7QUFFSkM7QUFGSSxjQUFSLEVBR0csVUFBQ0wsSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBU0gsSUFBVCxDQUFOO0FBQ0gsY0FMRCxFQUtHO0FBQUEsd0JBQU9HLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTEg7QUFNSDs7Ozs7O21CQS9HZ0JmLE87Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjs7OztBQUNBOzs7Ozs7OztLQUVxQkYsVTtBQUVqQix5QkFBWU8sSUFBWixFQUFrQjtBQUFBOztBQUFBLG9CQUNFLENBQ1osY0FEWSxFQUVaLE1BRlksRUFHWixZQUhZLEVBSVosa0JBSlksRUFLWixjQUxZLEVBTVosY0FOWSxFQU9aLGVBUFksRUFRWixTQVJZLEVBU1osU0FUWSxFQVVaLGVBVlksRUFXWixRQVhZLEVBWVosYUFaWSxFQWFaLFVBYlksRUFjWixhQWRZLEVBZVosWUFmWSxFQWdCWixZQWhCWSxFQWlCWixhQWpCWSxFQWtCWixzQkFsQlksQ0FERjs7QUFDZCxrREFtQkc7QUFuQkUsaUJBQUlDLGNBQUo7QUFvQkQsa0JBQUtBLEdBQUwsSUFBWUQsS0FBS0MsR0FBTCxDQUFaO0FBQ0g7QUFDSjs7OztrQ0FzRVFFLEUsRUFBSTtBQUNULG9CQUFPVixXQUFXbUosUUFBWCxDQUFvQixLQUFLQyxNQUF6QixFQUFpQzFJLEVBQWpDLENBQVA7QUFDSDs7O3dDQWtDYztBQUNYLGlCQUFJUyxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLHdCQUFPcEIsV0FBV3FKLFlBQVgsQ0FBd0IsS0FBS3ZDLFlBQTdCLEVBQTJDM0YsVUFBVSxDQUFWLENBQTNDLEVBQXlEQSxVQUFVLENBQVYsQ0FBekQsRUFBdUVBLFVBQVUsQ0FBVixDQUF2RSxFQUFxRkEsVUFBVSxDQUFWLENBQXJGLENBQVA7QUFDSCxjQUZELE1BRU87QUFDSCx3QkFBT25CLFdBQVdxSixZQUFYLENBQXdCLEtBQUt2QyxZQUE3QixFQUEyQzNGLFVBQVUsQ0FBVixDQUEzQyxFQUF5REEsVUFBVSxDQUFWLENBQXpELEVBQXVFQSxVQUFVLENBQVYsQ0FBdkUsQ0FBUDtBQUNIO0FBQ0o7OztxQ0EvRmtCaUksTSxFQUFRMUksRSxFQUFJO0FBQzNCLGlCQUFJNEksVUFBVUYsTUFBZDtBQUNBLGlCQUFJLE9BQU9BLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0NFLFVBQVUsQ0FBQ0YsTUFBRCxDQUFWOztBQUVoQyxvQ0FBUTtBQUNKekkseUJBQVEsS0FESjtBQUVKQyxvREFBZ0MwSSxRQUFRbEksTUFBUixHQUFpQixDQUFqQixHQUFxQixHQUFyQixHQUEyQixFQUEzRCxVQUFpRWtJLFFBQVFDLElBQVIsQ0FBYSxHQUFiLENBRjdEO0FBR0p4SSw2QkFBWSxtQkFBU3lJLE1BQVQ7QUFIUixjQUFSLEVBSUcsVUFBQ2pKLElBQUQsRUFBVTtBQUNUQSx3QkFBT0EsS0FBS2lDLEdBQUwsQ0FBUztBQUFBLDRCQUFPLElBQUl4QyxVQUFKLENBQWV5SixHQUFmLENBQVA7QUFBQSxrQkFBVCxDQUFQO0FBQ0EvSSx1QkFBTUEsR0FBRyxJQUFILEVBQVMsT0FBTzBJLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkI3SSxLQUFLLENBQUwsQ0FBN0IsR0FBdUNBLElBQWhELENBQU47QUFDSCxjQVBELEVBT0c7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FQSDtBQVFIOzs7aUNBRWM4RixFLEVBQW9DO0FBQUEsaUJBQWhDMkMsbUJBQWdDLHVFQUFWLElBQVU7QUFBQSxpQkFBSmhKLEVBQUk7O0FBQy9DLG9DQUFRO0FBQ0pDLHlCQUFRLEtBREo7QUFFSkMsNkNBQTBCbUcsRUFBMUIsSUFBK0IyQyxzQkFBc0IsWUFBdEIsR0FBcUMsRUFBcEUsQ0FGSTtBQUdKM0ksNkJBQVksbUJBQVN5SSxNQUFUO0FBSFIsY0FBUixFQUlHLFVBQUNqSixJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTLElBQUlWLFVBQUosQ0FBZU8sSUFBZixDQUFULENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FOSDtBQU9IOzs7Z0NBRWEwSSxXLEVBQWFqSixFLEVBQUk7QUFDM0IsaUJBQUksQ0FBQ0EsRUFBTCxFQUFTO0FBQ0xBLHNCQUFLaUosV0FBTDtBQUNBQSwrQkFBYyxJQUFkO0FBQ0g7O0FBRUQsb0NBQVE7QUFDSmhKLHlCQUFRLEtBREo7QUFFSkMseURBQXNDK0ksV0FGbEM7QUFHSjVJLDZCQUFZLG1CQUFTeUksTUFBVDtBQUhSLGNBQVIsRUFJRyxVQUFDakosSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBU0gsS0FBS2lDLEdBQUwsQ0FBUztBQUFBLDRCQUFPLElBQUl4QyxVQUFKLENBQWV5SixHQUFmLENBQVA7QUFBQSxrQkFBVCxDQUFULENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBTy9JLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7O2dDQUVhMkksUSxFQUFVbEosRSxFQUFJO0FBQ3hCLGlCQUFJUSxjQUFjLEdBQWxCO0FBQ0EsaUJBQUkwSSxTQUFTUixNQUFiLEVBQXFCbEksMkJBQXlCMEksU0FBU1IsTUFBbEM7QUFDckIsaUJBQUlRLFNBQVNuQixJQUFiLEVBQW1CdkgseUJBQXVCMEksU0FBU25CLElBQWhDOztBQUVuQixvQ0FBUTtBQUNKOUgseUJBQVEsS0FESjtBQUVKQyw0Q0FBeUJNLFdBRnJCO0FBR0pILDZCQUFZLG1CQUFTeUksTUFBVDtBQUhSLGNBQVIsRUFJRyxVQUFDakosSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBU0gsS0FBS2lDLEdBQUwsQ0FBUztBQUFBLDRCQUFPLElBQUl4QyxVQUFKLENBQWV5SixHQUFmLENBQVA7QUFBQSxrQkFBVCxDQUFULENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBTy9JLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7O2tDQU1lbUksTSxFQUFRMUksRSxFQUFJO0FBQ3hCLGlCQUFJbUosc0JBQXNCLEtBQTFCO0FBQ0EsaUJBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjWCxNQUFkLENBQUwsRUFBNEI7QUFDeEJTLHVDQUFzQixJQUF0QjtBQUNBVCwwQkFBUyxDQUFDQSxNQUFELENBQVQ7QUFDSDtBQUNEQSxzQkFBU0EsT0FBTzVHLEdBQVAsQ0FBVyxlQUFPO0FBQ3ZCLHdCQUFPd0gsZUFBZWhLLFVBQWYsR0FBNEJnSyxJQUFJWixNQUFoQyxHQUF5Q1ksR0FBaEQ7QUFDSCxjQUZRLENBQVQ7O0FBSUEsb0NBQVE7QUFDSnJKLHlCQUFRLEtBREo7QUFFSkMsZ0RBQTZCd0ksT0FBT0csSUFBUCxDQUFZLEdBQVosQ0FGekI7QUFHSnhJLDZCQUFZLG1CQUFTeUksTUFBVCxFQUhSO0FBSUo3Riw4QkFBYTtBQUNULCtCQUFVO0FBREQ7QUFKVCxjQUFSLEVBT0csVUFBQ3BELElBQUQsRUFBVTtBQUNULHFCQUFJMEosTUFBTSxFQUFWO0FBQ0ExSix3QkFBT0EsS0FBSzJKLEtBQUwsQ0FBVyxHQUFYLEVBQWdCekksS0FBaEIsQ0FBc0IsRUFBdEIsQ0FBUDtBQUZTO0FBQUE7QUFBQTs7QUFBQTtBQUdULDBDQUFxQmxCLElBQXJCLDhIQUEyQjtBQUFBLDZCQUFsQjRKLFFBQWtCOztBQUN2Qiw2QkFBTUMsY0FBY0QsU0FBU0QsS0FBVCxDQUFlLEdBQWYsQ0FBcEI7QUFDQUQsNkJBQUlHLFlBQVksQ0FBWixDQUFKLElBQXNCO0FBQ2xCQyxrQ0FBS0MsT0FBT0YsWUFBWSxDQUFaLENBQVAsQ0FEYTtBQUVsQkcsa0NBQUtELE9BQU9GLFlBQVksQ0FBWixDQUFQO0FBRmEsMEJBQXRCO0FBSUg7QUFUUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVULHFCQUFJUCxtQkFBSixFQUF5QkksTUFBTUEsSUFBSWIsT0FBTyxDQUFQLENBQUosQ0FBTjtBQUN6QjFJLHVCQUFNQSxHQUFHLElBQUgsRUFBU3VKLEdBQVQsQ0FBTjtBQUNILGNBbkJELEVBbUJHO0FBQUEsd0JBQU92SixNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQW5CSDtBQW9CSDs7O3NDQVVtQjZGLFksRUFBYzBELFcsRUFBYTtBQUMzQyxpQkFBSTlKLFdBQUo7QUFBQSxpQkFBUStKLG1CQUFSO0FBQ0EsaUJBQUl0SixVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLHFCQUFNc0osWUFBWXZKLFVBQVUsQ0FBVixFQUFhNkgsV0FBYixHQUEyQjJCLE9BQTNCLENBQW1DLFNBQW5DLEVBQThDLEVBQTlDLENBQWxCO0FBQ0EscUJBQU1DLFVBQVl6SixVQUFVLENBQVYsRUFBYTZILFdBQWIsR0FBMkIyQixPQUEzQixDQUFtQyxTQUFuQyxFQUE4QyxFQUE5QyxDQUFsQjtBQUNBRiw2Q0FBMEJDLFNBQTFCLGlCQUErQ0UsT0FBL0M7QUFDQWxLLHNCQUFLUyxVQUFVLENBQVYsQ0FBTDtBQUNILGNBTEQsTUFLTztBQUNIc0osK0NBQTRCdEosVUFBVSxDQUFWLENBQTVCO0FBQ0FULHNCQUFLUyxVQUFVLENBQVYsQ0FBTDtBQUNIOztBQUVELG9DQUFRO0FBQ0pSLHlCQUFRLEtBREo7QUFFSkMsbURBQWdDa0csWUFBaEMscUJBQTREMEQsV0FBNUQsU0FBMkVDLFVBRnZFO0FBR0oxSiw2QkFBWSxtQkFBU3lJLE1BQVQ7QUFIUixjQUFSLEVBSUcsVUFBQ2pKLElBQUQsRUFBVTtBQUNURyx1QkFBTUEsR0FBRyxJQUFILEVBQVNILEtBQUtBLElBQUwsQ0FBVTJKLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBVCxDQUFOO0FBQ0gsY0FORCxFQU1HO0FBQUEsd0JBQU94SixNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQU5IO0FBT0g7Ozs2QkFuSTJCO0FBQUUsb0JBQU87QUFDakM0SiwyQkFBVSxHQUR1QjtBQUVqQ0MseUJBQVEsR0FGeUI7QUFHakN2SCx5QkFBUTtBQUh5QixjQUFQO0FBSTNCOzs7NkJBRTZCO0FBQUUsb0JBQU87QUFDckN3SCxzQkFBSyxDQURnQztBQUVyQ0MsMkJBQVUsQ0FGMkI7QUFHckNDLDJCQUFVLENBSDJCO0FBSXJDQyw0QkFBVyxDQUowQjtBQUtyQ0MsdUJBQU0sQ0FMK0I7QUFNckNDLHVCQUFNO0FBTitCLGNBQVA7QUFPL0I7Ozs7OzttQkF4Q2NwTCxVOzs7Ozs7Ozs7Ozs7Ozs7QUNIckI7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQU1xTCxlQUFlLFNBQWZBLFlBQWUsQ0FBQ3hLLE1BQUQsRUFBU0wsR0FBVCxFQUFjRSxFQUFkLEVBQXFCO0FBQ3pDLDRCQUFRO0FBQ1BDLGlCQUFRLEtBREQ7QUFFUEMsK0JBQW9CQyxNQUFwQixrQkFBdUNMLEdBRmhDO0FBR1BPLHFCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWI7QUFITCxNQUFSLEVBSUcsVUFBQ04sSUFBRCxFQUFVO0FBQ1pHLGVBQU1BLEdBQUcsSUFBSCxFQUFTSCxLQUFLK0ssS0FBZCxDQUFOO0FBQ0EsTUFORCxFQU1HO0FBQUEsZ0JBQU81SyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxNQU5IO0FBT0EsRUFSRDs7QUFVQSxLQUFNc0ssa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDMUssTUFBRCxFQUFTSCxFQUFULEVBQWdCO0FBQ3ZDLDRCQUFRO0FBQ1BDLGlCQUFRLEtBREQ7QUFFUEMsK0JBQW9CQyxNQUFwQixjQUZPO0FBR1BFLHFCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWI7QUFITCxNQUFSLEVBSUcsVUFBQ04sSUFBRCxFQUFVO0FBQ1osYUFBSWlMLGdCQUFnQixFQUFwQjtBQURZO0FBQUE7QUFBQTs7QUFBQTtBQUVaLGtDQUFvQmpMLElBQXBCLDhIQUEwQjtBQUFBLHFCQUFqQmtMLE9BQWlCOztBQUN6QkQsK0JBQWNDLFFBQVFqTCxHQUF0QixJQUE2QmlMLFFBQVFILEtBQXJDO0FBQ0E7QUFKVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtaNUssZUFBTUEsR0FBRyxJQUFILEVBQVM4SyxhQUFULENBQU47QUFDQSxNQVZELEVBVUc7QUFBQSxnQkFBTzlLLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLE1BVkg7QUFXQSxFQVpEOztBQWNBLEtBQU15SyxjQUFjLFNBQWRBLFdBQWMsQ0FBQzdLLE1BQUQsRUFBU0wsR0FBVCxFQUFjOEssS0FBZCxFQUFxQjVLLEVBQXJCLEVBQTRCO0FBQy9DLDRCQUFRO0FBQ1BDLGlCQUFRLE1BREQ7QUFFUEMsK0JBQW9CQyxNQUFwQixjQUZPO0FBR1BFLHFCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWIsQ0FITDtBQUlQaUMsZUFBTTtBQUNMdEMscUJBREssRUFDQThLO0FBREE7QUFKQyxNQUFSLEVBT0csWUFBTTtBQUNSNUssZUFBTUEsR0FBRyxJQUFILENBQU47QUFDQSxNQVRELEVBU0c7QUFBQSxnQkFBT0EsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsTUFUSDtBQVVBLEVBWEQ7O0tBYXFCZCxJO0FBRWpCLG1CQUFZSSxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsb0JBQ0UsQ0FDWixXQURZLEVBRVosY0FGWSxFQUdaLFdBSFksRUFJWixZQUpZLEVBS1osVUFMWSxFQU1aLGFBTlksRUFPWixjQVBZLEVBUVosUUFSWSxFQVNaLFVBVFksRUFVWixPQVZZLEVBV1osUUFYWSxFQVlaLFdBWlksRUFhWixlQWJZLEVBY1osYUFkWSxDQURGOztBQUNkLGtEQWVHO0FBZkUsaUJBQUlDLGNBQUo7QUFnQkQsa0JBQUtBLEdBQUwsSUFBWUQsS0FBS0MsR0FBTCxDQUFaO0FBQ0g7QUFDSjs7OztxQ0FFV0UsRSxFQUFJO0FBQ1osb0JBQU8sa0JBQVFpTCxnQkFBUixDQUF5QixLQUFLOUssTUFBOUIsRUFBc0NILEVBQXRDLENBQVA7QUFDSDs7O3dDQUVXa0wsSSxFQUFNbkwsSSxFQUFNQyxFLEVBQUk7QUFDeEIsb0JBQU9QLEtBQUswTCxjQUFMLENBQW9CLEtBQUtoTCxNQUF6QixFQUFpQytLLElBQWpDLEVBQXVDbkwsSUFBdkMsRUFBNkNDLEVBQTdDLENBQVA7QUFDSDs7QUFFRDtBQUNBOzs7Ozs7QUFVSDtBQUNBO3VDQUNpQjtBQUFBLHlEQUNPUyxTQURQO0FBQUEsaUJBQ0xYLEdBREs7QUFBQSxpQkFDQUUsRUFEQTs7QUFHaEIsaUJBQUlTLFVBQVVDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0I7QUFDQW1LLGlDQUFnQixLQUFLMUssTUFBckIsRUFBNkJMLEdBQTdCO0FBQ0EsY0FIRCxNQUdPO0FBQ042Syw4QkFBYSxLQUFLeEssTUFBbEIsRUFBMEJMLEdBQTFCLEVBQStCRSxFQUEvQjtBQUNBO0FBQ0Q7OztvQ0FNYUYsRyxFQUFLOEssSyxFQUFPNUssRSxFQUFJO0FBQzFCZ0wseUJBQVksS0FBSzdLLE1BQWpCLEVBQXlCTCxHQUF6QixFQUE4QjhLLEtBQTlCLEVBQXFDNUssRUFBckM7QUFDQTs7O3NDQUVZRixHLEVBQUtFLEUsRUFBSTtBQUNsQixvQ0FBUTtBQUNKQyx5QkFBUSxRQURKO0FBRUpDLHVDQUFvQixLQUFLQyxNQUF6QixrQkFBNENMLEdBRnhDO0FBR0pPLDZCQUFZLG1CQUFTQyxHQUFULENBQWEsS0FBS0gsTUFBbEI7QUFIUixjQUFSLEVBSUcsWUFBTTtBQUNMSCx1QkFBTUEsR0FBRyxJQUFILENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBT0EsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FOSDtBQU9IOzs7bUNBRVNQLEUsRUFBSTtBQUNWLG9DQUFRO0FBQ0pDLHlCQUFRLEtBREo7QUFFSkMsdUNBQW9CLEtBQUtDLE1BQXpCLFlBRkk7QUFHSkUsNkJBQVksbUJBQVNDLEdBQVQsQ0FBYSxLQUFLSCxNQUFsQjtBQUhSLGNBQVIsRUFJRyxVQUFDTixJQUFELEVBQVU7QUFDVEcsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxJQUFULENBQU47QUFDSCxjQU5ELEVBTUc7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FOSDtBQU9IOzs7a0NBRVE7QUFBQTs7QUFDTCxvQ0FBUTtBQUNKTix5QkFBUSxRQURKO0FBRUpDLDhDQUEyQixtQkFBU0ksR0FBVCxDQUFhLEtBQUtILE1BQWxCLENBRnZCO0FBR0pFLDZCQUFZLG1CQUFTQyxHQUFULENBQWEsS0FBS0gsTUFBbEI7QUFIUixjQUFSLEVBSUcsWUFBTTtBQUNMLG9DQUFTaUwsTUFBVCxDQUFnQixNQUFLakwsTUFBckI7QUFDQUgsdUJBQU1BLEdBQUcsSUFBSCxDQUFOO0FBQ0gsY0FQRCxFQU9HO0FBQUEsd0JBQU9BLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBUEg7QUFRSDs7O3FDQTNEZUosTSxFQUFRTCxHLEVBQUtFLEUsRUFBSTtBQUNoQyxpQkFBSSxDQUFDQSxFQUFMLEVBQVM7QUFDWDtBQUNBNkssaUNBQWdCMUssTUFBaEIsRUFBd0JMLEdBQXhCO0FBQ0EsY0FIRSxNQUdJO0FBQ042Syw4QkFBYXhLLE1BQWIsRUFBcUJMLEdBQXJCLEVBQTBCRSxFQUExQjtBQUNBO0FBQ0U7OztvQ0FlY0csTSxFQUFRTCxHLEVBQUs4SyxLLEVBQU81SyxFLEVBQUk7QUFDdENnTCx5QkFBWTdLLE1BQVosRUFBb0JMLEdBQXBCLEVBQXlCOEssS0FBekIsRUFBZ0M1SyxFQUFoQztBQUNIOzs7cUNBNkNxQkcsTSxFQUFRSCxFLEVBQUk7QUFDM0Isb0NBQVE7QUFDSkMseUJBQVEsS0FESjtBQUVKQyx1Q0FBb0JDLE1BRmhCO0FBR0pFLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWI7QUFIUixjQUFSLEVBSUcsVUFBQ04sSUFBRCxFQUFVO0FBQ1RHLHVCQUFNQSxHQUFHLElBQUgsRUFBUyxJQUFJUCxJQUFKLENBQVNJLElBQVQsQ0FBVCxDQUFOO0FBQ0gsY0FORCxFQU1HO0FBQUEsd0JBQU9HLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBTkg7QUFPSDs7OytCQUVZOEssUSxFQUFVQyxRLEVBQVV0TCxFLEVBQUk7QUFDakMsb0NBQVE7QUFDSkMseUJBQVEsTUFESjtBQUVKQywyQkFBVSxlQUZOO0FBR0prQyx1QkFBTTtBQUNGaUosdUNBREU7QUFFRkMsdUNBRkU7QUFHRmpILGdDQUFXLGVBQU9BLFNBSGhCO0FBSUZDLGlDQUFZLGVBQU9BLFVBSmpCO0FBS0ZpSCxpQ0FBWSxPQUxWO0FBTUZDLDZCQUFRLFNBTk47QUFPRkMsZ0NBQVcsU0FQVDtBQVFGQyw2QkFBUSxTQVJOO0FBU0ZDLGdDQUFXO0FBVFQ7QUFIRixjQUFSLEVBY0csVUFBQzlMLElBQUQsRUFBVTtBQUNULG9DQUFTK0wsSUFBVCxDQUFjL0wsS0FBS00sTUFBbkIsRUFBMkJOLEtBQUtRLFVBQWhDO0FBQ0FaLHNCQUFLb00sV0FBTCxDQUFpQmhNLEtBQUtNLE1BQXRCLEVBQThCLFVBQUNJLEdBQUQsRUFBTXVMLElBQU4sRUFBZTtBQUN6Qyx5QkFBSXZMLEdBQUosRUFBUyxPQUFPUCxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFDVFAsMkJBQU1BLEdBQUcsSUFBSCxFQUFTOEwsSUFBVCxDQUFOO0FBQ0gsa0JBSEQ7QUFJSCxjQXBCRCxFQW9CRztBQUFBLHdCQUFPOUwsTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FwQkg7QUFxQkg7Ozs2Q0FFMEI4SyxRLEVBQVVyTCxFLEVBQUk7QUFDckMsb0NBQVE7QUFDSkMseUJBQVEsS0FESjtBQUVKQyxnREFBNkJtTDtBQUZ6QixjQUFSLEVBR0csWUFBTTtBQUNMckwsdUJBQU1BLEdBQUcsSUFBSCxFQUFTLEtBQVQsQ0FBTjtBQUNILGNBTEQsRUFLRyxVQUFDTyxHQUFELEVBQU1vRCxVQUFOLEVBQXFCO0FBQ3BCLHFCQUFJQSxlQUFlLEdBQW5CLEVBQXdCLE9BQU8zRCxNQUFNQSxHQUFHLElBQUgsRUFBUyxJQUFULENBQWI7QUFDeEJBLHVCQUFNQSxHQUFHTyxHQUFILENBQU47QUFDSCxjQVJEO0FBU0g7OztzQ0FlaUM7QUFBQSxpQkFaOUI4SyxRQVk4QixRQVo5QkEsUUFZOEI7QUFBQSxpQkFYOUJDLFFBVzhCLFFBWDlCQSxRQVc4QjtBQUFBLGlCQVY5QlMsU0FVOEIsUUFWOUJBLFNBVThCO0FBQUEsaUJBVDlCQyxRQVM4QixRQVQ5QkEsUUFTOEI7QUFBQSxpQkFSOUJDLEtBUThCLFFBUjlCQSxLQVE4QjtBQUFBLGlCQVA5QlYsVUFPOEIsUUFQOUJBLFVBTzhCO0FBQUEsMENBTjlCOUcsWUFNOEI7QUFBQSxpQkFOOUJBLFlBTThCLHFDQU5mLGVBQU9BLFlBTVE7QUFBQSxpQkFMOUJ5SCxXQUs4QixRQUw5QkEsV0FLOEI7QUFBQSxpQkFKOUJDLFVBSThCLFFBSjlCQSxVQUk4QjtBQUFBLGlCQUg5QkMsU0FHOEIsUUFIOUJBLFNBRzhCO0FBQUEsaUJBRjlCQyxTQUU4QixRQUY5QkEsU0FFOEI7QUFBQSxpQkFEOUJDLE9BQzhCLFFBRDlCQSxPQUM4QjtBQUFBLGlCQUEvQkMsa0JBQStCLHVFQUFWLElBQVU7QUFBQSxpQkFBSnZNLEVBQUk7O0FBQzlCLGlCQUFJLENBQUNBLEVBQUwsRUFBUztBQUNMQSxzQkFBS3VNLGtCQUFMO0FBQ0FBLHNDQUFxQixJQUFyQjtBQUNIOztBQUVELG9DQUFRO0FBQ0p0TSx5QkFBUSxNQURKO0FBRUpDLDJCQUFVLGVBRk47QUFHSmtDLHVCQUFNO0FBQ0ZpSix1Q0FERTtBQUVGQyx1Q0FGRTtBQUdGUyx5Q0FIRTtBQUlGQyx1Q0FKRTtBQUtGUSxvQ0FBZVAsS0FMYjtBQU1GViwyQ0FORTtBQU9GaEgsNEJBQU8sZUFBT0EsS0FQWjtBQVFGRSwrQ0FSRTtBQVNGeUgsNkNBVEU7QUFVRkMsMkNBVkU7QUFXRkMseUNBWEU7QUFZRkMseUNBWkU7QUFhRkM7QUFiRTtBQUhGLGNBQVIsRUFrQkcsVUFBQ3pNLElBQUQsRUFBVTtBQUNULHFCQUFJME0sa0JBQUosRUFBd0I7QUFDcEIsNEJBQU85TSxLQUFLZ04sS0FBTCxDQUFXcEIsUUFBWCxFQUFxQkMsUUFBckIsRUFBK0J0TCxFQUEvQixDQUFQO0FBQ0gsa0JBRkQsTUFFTztBQUNIQSwyQkFBTUEsR0FBRyxJQUFILEVBQVNILElBQVQsQ0FBTjtBQUNIO0FBQ0osY0F4QkQsRUF3Qkc7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0F4Qkg7QUF5Qkg7Ozt1Q0FpQkRQLEUsRUFBSTtBQUFBLGlCQWRORyxNQWNNLFNBZE5BLE1BY007QUFBQSxpQkFiTnVNLFlBYU0sU0FiTkEsWUFhTTtBQUFBLGlCQVpOQyxZQVlNLFNBWk5BLFlBWU07QUFBQSxpQkFYTkMsSUFXTSxTQVhOQSxJQVdNO0FBQUEsaUJBVk5DLFNBVU0sU0FWTkEsU0FVTTtBQUFBLGlCQVROWixLQVNNLFNBVE5BLEtBU007QUFBQSxpQkFSTkYsU0FRTSxTQVJOQSxTQVFNO0FBQUEsaUJBUE5DLFFBT00sU0FQTkEsUUFPTTtBQUFBLGlCQU5OVCxVQU1NLFNBTk5BLFVBTU07QUFBQSxpQkFMTnVCLFNBS00sU0FMTkEsU0FLTTtBQUFBLGlCQUpOQyxTQUlNLFNBSk5BLFNBSU07QUFBQSxpQkFITkMsS0FHTSxTQUhOQSxLQUdNO0FBQUEsaUJBRk5DLGFBRU0sU0FGTkEsYUFFTTtBQUFBLGlCQUROQyxhQUNNLFNBRE5BLGFBQ007O0FBQ04sb0JBQU8sdUJBQVE7QUFDZGpOLHlCQUFRLEtBRE07QUFFZEMsdUNBQW9CQyxNQUZOO0FBR2RFLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWIsQ0FIRTtBQUlkaUMsdUJBQU07QUFDTHNLLCtDQURLO0FBRUxDLCtDQUZLO0FBR0xDLCtCQUhLO0FBSUxDLHlDQUpLO0FBS0xMLG9DQUFlUCxLQUxWO0FBTUxGLHlDQU5LO0FBT0xDLHVDQVBLO0FBUUxULDJDQVJLO0FBU0x1Qix5Q0FUSztBQVVMQyx5Q0FWSztBQVdMSSxrQ0FBYUgsS0FYUjtBQVlMQyxpREFaSztBQWFMQztBQWJLO0FBSlEsY0FBUixFQW1CSixnQkFBUTtBQUNWbE4sdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxJQUFULENBQU47QUFDQSxjQXJCTSxFQXFCSjtBQUFBLHdCQUFPRyxNQUFNQSxHQUFHTyxHQUFILENBQWI7QUFBQSxjQXJCSSxDQUFQO0FBc0JBOzs7d0NBUXFCSixNLEVBQVErSyxJLEVBQU1uTCxJLEVBQU1DLEUsRUFBSTtBQUM3QyxpQkFBTW9DLE9BQU8sSUFBSWdMLFFBQUosRUFBYjtBQUNBaEwsa0JBQUtpTCxNQUFMLENBQVksT0FBWixFQUFxQmxOLE1BQXJCO0FBQ0FpQyxrQkFBS2lMLE1BQUwsQ0FBWSxjQUFaLEVBQTRCdE4sSUFBNUI7QUFDQXFDLGtCQUFLaUwsTUFBTCxDQUFZLGVBQVosRUFBNkJuQyxJQUE3Qjs7QUFFQSxvQkFBTyx1QkFBUTtBQUNkakwseUJBQVEsTUFETTtBQUVkQyx1Q0FGYztBQUdkRyw2QkFBWSxtQkFBU0MsR0FBVCxDQUFhSCxNQUFiLENBSEU7QUFJZDhDLDhCQUFhO0FBQ1oscUNBQWdCO0FBREosa0JBSkM7QUFPZGI7QUFQYyxjQUFSLEVBUUosZ0JBQVE7QUFDVnBDLHVCQUFNQSxHQUFHLElBQUgsRUFBU0gsSUFBVCxDQUFOO0FBQ0EsY0FWTSxFQVVKO0FBQUEsd0JBQU9HLE1BQU1BLEdBQUdPLEdBQUgsQ0FBYjtBQUFBLGNBVkksQ0FBUDtBQVdBOzs7NkJBbkt3QjtBQUFFLG9CQUFPO0FBQzNCbUMsMEJBQVMsQ0FEa0I7QUFFM0I0SywyQkFBVSxDQUZpQjtBQUczQjdGLDJCQUFVLENBSGlCO0FBSTNCOEYsMEJBQVMsQ0FKa0I7QUFLM0IxSyx5QkFBUTtBQUxtQixjQUFQO0FBTXJCOzs7NkJBc0lzQjtBQUFFLG9CQUFPO0FBQzlCMkssMkJBQVUsWUFEb0I7QUFFcENDLG1DQUFrQixrQkFGa0I7QUFHcENDLGlEQUFnQztBQUhJLGNBQVA7QUFJeEI7Ozs7OzttQkE5T2NqTyxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjM2ZjRiMWFlYjE1YmFkYzQ4NWEiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEVOVklST05NRU5UUyxcblxuICAgIEFjY291bnQsXG4gICAgQ29uZmlnLFxuICAgIEVycm9yLFxuICAgIEZ1bmRpbmcsXG4gICAgSW5zdHJ1bWVudCxcbiAgICBPcmRlcixcbiAgICBSZXBvcnRzLFxuICAgIFVzZXIsXG4gICAgU2Vzc2lvbnMsXG5cbiAgICBzZXR1cCxcbiAgICByZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJhY2NvdW50SURcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcImFjY291bnROb1wiLFxuICAgICAgICAgICAgXCJhY2NvdW50VHlwZVwiLFxuICAgICAgICAgICAgXCJjdXJyZW5jeUlEXCIsXG4gICAgICAgICAgICBcImliSURcIixcbiAgICAgICAgICAgIFwibWFyZ2luXCIsXG4gICAgICAgICAgICBcIm5pY2tuYW1lXCIsXG4gICAgICAgICAgICBcIm9wZW5lZFdoZW5cIixcbiAgICAgICAgICAgIFwicGF0dGVybkRheVRyYWRlc1wiLFxuICAgICAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwidHJhZGluZ1R5cGVcIixcbiAgICAgICAgICAgIFwiYWNjb3VudE1nbXRUeXBlXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEJsb3R0ZXIodHlwZSwgY2IpIHtcbiAgICAgICAgaWYgKHR5cGUgJiYgIWNiKSB7XG4gICAgICAgICAgICBjYiA9IHR5cGU7XG4gICAgICAgICAgICB0eXBlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFN1bW1hcnkvJHt0aGlzLmFjY291bnRJRH0ke3R5cGUgPyAnLycgKyB0eXBlIDogXCJcIn1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZSA/IGRhdGFbdHlwZV0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIC8vIGdldFBlcmZvcm1hbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpXG4gICAgLy8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcbiAgICAvLyBnZXRQZXJmb3JtYW5jZShjYilcbiAgICBnZXRQZXJmb3JtYW5jZSgpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGNiO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICBjb25zdCBbIHN0YXJ0RGF0ZSwgZW5kRGF0ZSBdID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIHN0YXJ0RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gIGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1swXX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke3RoaXMuYWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgcGxhY2VPcmRlcih0eXBlLCBkYXRhLCBjYikge1xuICAgICAgICBjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuICAgICAgICAgICAgYWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcbiAgICAgICAgICAgIGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG4gICAgICAgICAgICBhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcbiAgICAgICAgICAgIHVzZXJJRDogdGhpcy51c2VySUQsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuICAgICAgICBkYXRhLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuICAgICAgICBkYXRhLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuICAgICAgICByZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG4gICAgfVxuXG4gICAgZ2V0U3RhdGVtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcbiAgICB9XG5cbiAgICBnZXRUYXhEb2N1bWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICByZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcbiAgICB9XG5cbiAgICBnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2V0VHJhZGVDb25maXJtcyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXksIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IEJMT1RURVJfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIENBU0g6IFwiY2FzaFwiLFxuICAgICAgICBPUkRFUlM6IFwib3JkZXJzXCIsXG4gICAgICAgIFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcbiAgICAgICAgUE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuICAgICAgICBBTEw6IG51bGwsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgT1BFTjogMixcbiAgICAgICAgT1BFTl9OT19ORVdfVFJBREVTOiAzLFxuICAgICAgICBDTE9TRUQ6IDksXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUFJBQ1RJQ0U6IDEsXG4gICAgICAgIExJVkU6IDIsXG4gICAgfSB9O1xuXG4gICAgc3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZSh1c2VySUQsIHR5cGUsIGRhdGEsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG4gICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgIHVzZXJJRCxcbiAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuICAgICAgICAgICAgICAgIHRyYW5BbW91bnQ6IGRhdGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0VcbiAgICAgICAgICAgICAgICA/IGAvc2lnbnVwcy9wcmFjdGljZWBcbiAgICAgICAgICAgICAgICA6IGAvc2lnbnVwcy9saXZlYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsImltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbiAgICBob3N0ID0gSE9TVFMuQVBJLFxufSwgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uS2V5KSB7XG4gICAgICAgIGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuICAgIH1cblxuICAgIGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG4gICAgaWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcbiAgICAgICAgaWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yLCBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAocmVzQm9keSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZSA9PSA0MDEgPyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlKSA6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICB3bHBJRDogbnVsbCxcbiAgICBhcHBzUGFydG5lcklEOiBudWxsLFxuICAgIHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcbiAgICBBUEk6IFwiYXBpXCIsXG4gICAgQVBQUzogXCJhcHBzXCIsXG4gICAgUkVQT1JUUzogXCJyZXBvcnRzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG4gICAgVUFUOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcbiAgICBlbnYsXG4gICAgaHR0cEltcGwsXG4gICAgYXBwVHlwZUlELFxuICAgIGFwcFZlcnNpb24sXG4gICAgd2xwSUQgPSBcIkRXXCIsXG4gICAgYXBwc1BhcnRuZXJJRCxcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG4gICAgQ29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBEcml2ZVdlYWx0aEVycm9yLFxuICAgIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBbXG4gICAgICAgICAgICBcIm9yZGVySURcIixcbiAgICAgICAgICAgIFwiYWNjb3VudElEXCIsXG4gICAgICAgICAgICBcInVzZXJJRFwiLFxuICAgICAgICAgICAgXCJjdW1RdHlcIixcbiAgICAgICAgICAgIFwiYWNjb3VudE5vXCIsXG4gICAgICAgICAgICBcImNvbW1lbnRcIixcbiAgICAgICAgICAgIFwiY29tbWlzc2lvblwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkQnlJRFwiLFxuICAgICAgICAgICAgXCJjcmVhdGVkV2hlblwiLFxuICAgICAgICAgICAgXCJleGVjdXRlZFdoZW5cIixcbiAgICAgICAgICAgIFwiZ3Jvc3NUcmFkZUFtdFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibGVhdmVzUXR5XCIsXG4gICAgICAgICAgICBcIm9yZGVyTm9cIixcbiAgICAgICAgICAgIFwib3JkZXJRdHlcIixcbiAgICAgICAgICAgIFwic2lkZVwiLFxuICAgICAgICAgICAgXCJhdXRvU3RvcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcbiAgICAgICAgdGhpcy50eXBlID0gZGF0YS5vcmRUeXBlO1xuICAgIH1cblxuICAgIGNhbmNlbChjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL29yZGVycy8ke3RoaXMub3JkZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFNJREVTKCkgeyByZXR1cm4ge1xuICAgICAgICBCVVk6IFwiQlwiLFxuICAgICAgICBTRUxMOiBcIlNcIixcbiAgICB9IH07XG5cbiAgICBzdGF0aWMgZ2V0IFRZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBNQVJLRVQ6IFwiMVwiLFxuICAgICAgICBMSU1JVDogXCIyXCIsXG4gICAgICAgIFNUT1A6IFwiM1wiLFxuICAgIH0gfTtcblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIE5FVzogXCIwXCIsXG4gICAgICAgIFBBUlRJQUxfRklMTDogXCIxXCIsXG4gICAgICAgIEZJTEw6IFwiMlwiLFxuICAgICAgICBDQU5DRUxFRDogXCI0XCIsXG4gICAgICAgIFJFSkVDVEVEOiBcIjhcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBPcmRlcihkYXRhKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHR5cGUsIHtcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBhY2NvdW50Tm8sXG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudFR5cGUsXG4gICAgfSwge1xuICAgICAgICBpbnN0cnVtZW50LFxuICAgICAgICBzaWRlLFxuICAgICAgICBxdHksXG4gICAgICAgIGFtb3VudENhc2gsXG4gICAgICAgIGNvbW1lbnQsXG4gICAgICAgIGF1dG9TdG9wLFxuICAgICAgICBwcmljZSxcbiAgICAgICAgd2FpdEZvckZpbGwgPSB0cnVlLFxuICAgICAgICBmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcbiAgICB9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHRocm93IG5ldyBFcnJvcihgXCJxdHlcIiBhbmQgXCJhbW91bnRDYXNoXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5gKTtcbiAgICAgICAgaWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiAhcHJpY2UpIHRocm93IG5ldyBFcnJvcihgTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcInByaWNlLlwiYCk7XG4gICAgICAgIGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHRocm93IG5ldyBFcnJvcihgXCJhdXRvU3RvcFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5gKTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogXCIvb3JkZXJzXCIsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICBpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcbiAgICAgICAgICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgICAgICAgICAgYWNjb3VudE5vLFxuICAgICAgICAgICAgICAgIHVzZXJJRCxcbiAgICAgICAgICAgICAgICBhY2NvdW50VHlwZSxcbiAgICAgICAgICAgICAgICBvcmRUeXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHNpZGUsXG4gICAgICAgICAgICAgICAgb3JkZXJRdHk6IHF0eSA/IHF0eSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBhbW91bnRDYXNoOiBhbW91bnRDYXNoID8gYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBjb21tZW50LFxuICAgICAgICAgICAgICAgIGF1dG9TdG9wLFxuICAgICAgICAgICAgICAgIHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgbGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG5cdFx0XHRsZXQgZmlsbE1heFJldHJpZXMgPSB0eXBlID09PSBPcmRlci5UWVBFUy5NQVJLRVQgPyAxMCA6IDE7XG5cblx0XHRcdGxldCBwb2xsLCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cbiAgICAgICAgICAgIGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGxNYXhSZXRyaWVzLS07XG4gICAgICAgICAgICAgICAgT3JkZXIuZ2V0QnlJRChkYXRhLm9yZGVySUQsIHVzZXJJRCwgKGVyciwgb3JkZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxsTWF4UmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09yZGVyLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXG4gICAgc3RhdGljIGdldCBBTExPV0VEX1RZUEVTKCkgeyByZXR1cm4ge1xuICAgICAgICBERVBPU0lUOiBcIkRFUE9TSVRcIixcbiAgICAgICAgV0lUSERSQVc6IFwiV0lUSERSQVdcIixcbiAgICAgICAgREVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG4gICAgICAgIHVzZXJJRCxcbiAgICAgICAgYWNjb3VudElELFxuICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgbWluQW1vdW50LFxuICAgICAgICBtYXhBbW91bnQsXG4gICAgICAgIGFtb3VudCxcbiAgICAgICAgZmlsdGVycyA9IHt9LFxuICAgIH0gPSB7fSwgY2IpIHtcbiAgICAgICAgaWYgKGFtb3VudCAmJiAobWluQW1vdW50IHx8IG1heEFtb3VudCkpIHRocm93IG5ldyBFcnJvcihgXCJhbW91bnRcIiBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFwibWluQW1vdW50XCIgb3IgXCJtYXhBbW91bnQuXCJgKTtcblxuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBgcGFydG5lcj0ke0NvbmZpZy5hcHBzUGFydG5lcklEfSZ1c2VySUQ9JHt1c2VySUR9JmFjY291bnRJRD0ke2FjY291bnRJRH1gO1xuICAgICAgICBpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuICAgICAgICBpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuICAgICAgICBpZiAobWF4QW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1heEFtb3VudD0ke21heEFtb3VudH1gO1xuICAgICAgICBpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuICAgICAgICBpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jb3VudHJ5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjb3VudHJ5XT0ke2ZpbHRlcnMuY291bnRyeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuICAgICAgICBpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgaG9zdDogSE9TVFMuQVBQUyxcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblxuICAgIHN0YXRpYyBnZXRUcmFuc2FjdGlvbnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9RmluVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbiB8fCBbXSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKHVzZXJJRCwgYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcbiAgICAgICAgICAgICsgYCZSZXBvcnROYW1lPU9yZGVyVHJhbnNgXG4gICAgICAgICAgICArIGAmUmVwb3J0Rm9ybWF0PUpTT05gXG4gICAgICAgICAgICArIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG4gICAgICAgICAgICArIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJndscElEPSR7Q29uZmlnLndscElEfWBcbiAgICAgICAgICAgICsgYCZMYW5ndWFnZUlEPWVuX1VTYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5SRVBPUlRTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS50cmFuc2FjdGlvbik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3RhdGVtZW50cyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDJgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VHJhZGVDb25maXJtcyh1c2VySUQsIGFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG4gICAgICAgICAgICArIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuICAgICAgICAgICAgKyBgJnR5cGU9MDFgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VGF4RG9jdW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wM2A7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZURvd25sb2FkVVJMKHVzZXJJRCwgYWNjb3VudElELCBmaWxlS2V5LCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnVybCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvY291bnRyaWVzYCxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiaW5zdHJ1bWVudElEXCIsXG4gICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgIFwiZXhjaGFuZ2VJRFwiLFxuICAgICAgICAgICAgXCJpbnN0cnVtZW50VHlwZUlEXCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1heFwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVNaW5cIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplU3RlcFwiLFxuICAgICAgICAgICAgXCJyYXRlQXNrXCIsXG4gICAgICAgICAgICBcInJhdGVCaWRcIixcbiAgICAgICAgICAgIFwicmF0ZVByZWNpc2lvblwiLFxuICAgICAgICAgICAgXCJzeW1ib2xcIixcbiAgICAgICAgICAgIFwidHJhZGVTdGF0dXNcIixcbiAgICAgICAgICAgIFwidXJsSW1hZ2VcIixcbiAgICAgICAgICAgIFwidXJsSW52ZXN0b3JcIixcbiAgICAgICAgICAgIFwiY2hhaWtpblBnclwiLFxuICAgICAgICAgICAgXCJwcmlvckNsb3NlXCIsXG4gICAgICAgICAgICBcIm1hcmtldFN0YXRlXCIsXG4gICAgICAgICAgICBcImZ1bmRhbWVudGFsRGF0YU1vZGVsXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVFJBREVfU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIElOQUNUSVZFOiBcIjBcIixcbiAgICAgICAgQUNUSVZFOiBcIjFcIixcbiAgICAgICAgQ0xPU0VEOiBcIjJcIixcbiAgICB9IH1cblxuICAgIHN0YXRpYyBnZXQgQ0hBUlRfQ09NUFJFU1NJT05TKCkgeyByZXR1cm4ge1xuICAgICAgICBEQVk6IDAsXG4gICAgICAgIE1JTlVURV8xOiAxLFxuICAgICAgICBNSU5VVEVfNTogNCxcbiAgICAgICAgTUlOVVRFXzMwOiA4LFxuICAgICAgICBIT1VSOiA5LFxuICAgICAgICBXRUVLOiAxMFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHN5bWJvbHMgPSBzeW1ib2w7XG4gICAgICAgIGlmICh0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiKSBzeW1ib2xzID0gW3N5bWJvbF07XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2wke3N5bWJvbHMubGVuZ3RoID4gMSA/IFwic1wiIDogXCJcIn09JHtzeW1ib2xzLmpvaW4oJywnKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkYXRhID0gZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGRhdGFbMF0gOiBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRCeUlEKGlkLCBpbmNsdWRlRnVuZGFtZW50YWxzID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/ICc/b3B0aW9ucz1GJyA6ICcnfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBJbnN0cnVtZW50KGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXMsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gdHJhZGVTdGF0dXM7XG4gICAgICAgICAgICB0cmFkZVN0YXR1cyA9IFwiLTFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlYXJjaChjcml0ZXJpYSwgY2IpIHtcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG4gICAgICAgIGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG4gICAgICAgIGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5tYXAoaW5zID0+IG5ldyBJbnN0cnVtZW50KGlucykpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldFF1b3RlKGNiKSB7XG4gICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sLCBjYik7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFF1b3RlKHN5bWJvbCwgY2IpIHtcbiAgICAgICAgbGV0IHVzZXJQYXNzZWRPbmVTeW1ib2wgPSBmYWxzZTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIHtcbiAgICAgICAgICAgIHVzZXJQYXNzZWRPbmVTeW1ib2wgPSB0cnVlO1xuICAgICAgICAgICAgc3ltYm9sID0gW3N5bWJvbF07XG4gICAgICAgIH1cbiAgICAgICAgc3ltYm9sID0gc3ltYm9sLm1hcChzeW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9sLmpvaW4oXCIsXCIpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgICAgIGFkZGxIZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJ0ZXh0L3BsYWluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG4gICAgICAgICAgICBmb3IgKGxldCByYXdRdW90ZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgb2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmlkOiBOdW1iZXIocGFyc2VkUXVvdGVbMV0pLFxuICAgICAgICAgICAgICAgICAgICBhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1c2VyUGFzc2VkT25lU3ltYm9sKSBvYmogPSBvYmpbc3ltYm9sWzBdXTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG9iaik7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRDaGFydERhdGEoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uKSB7XG4gICAgICAgIGxldCBjYiwgdGltZVBhcmFtcztcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUVuZCAgID0gYXJndW1lbnRzWzNdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYGRhdGVTdGFydD0ke2RhdGVTdGFydH0mZGF0ZUVuZD0ke2RhdGVFbmR9YDtcbiAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZVBhcmFtcyA9IGB0cmFkaW5nRGF5cz0ke2FyZ3VtZW50c1syXX1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbM107XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2JhcnM/aW5zdHJ1bWVudElEPSR7aW5zdHJ1bWVudElEfSZjb21wcmVzc2lvbj0ke2NvbXByZXNzaW9ufSYke3RpbWVQYXJhbXN9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YS5kYXRhLnNwbGl0KFwifFwiKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuY29uc3QgX2dldFNldHRpbmdzID0gKHVzZXJJRCwga2V5LCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgKGRhdGEpID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhLnZhbHVlKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuY29uc3QgX2dldEFsbFNldHRpbmdzID0gKHVzZXJJRCwgY2IpID0+IHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgKGRhdGEpID0+IHtcblx0XHRsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuXHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdH1cblx0XHRjYiAmJiBjYihudWxsLCBmb3JtYXR0ZWREYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufTtcblxuY29uc3QgX3NldFNldHRpbmcgPSAodXNlcklELCBrZXksIHZhbHVlLCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keToge1xuXHRcdFx0a2V5LCB2YWx1ZVxuXHRcdH1cblx0fSwgKCkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIFtcbiAgICAgICAgICAgIFwiY291bnRyeUlEXCIsXG4gICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiLFxuICAgICAgICAgICAgXCJmaXJzdE5hbWVcIixcbiAgICAgICAgICAgIFwibGFuZ3VhZ2VJRFwiLFxuICAgICAgICAgICAgXCJsYXN0TmFtZVwiLFxuICAgICAgICAgICAgXCJwaG9uZU51bWJlclwiLFxuICAgICAgICAgICAgXCJyZWZlcnJhbENvZGVcIixcbiAgICAgICAgICAgIFwidXNlcklEXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCIsXG4gICAgICAgICAgICBcIndscElEXCIsXG4gICAgICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1c0NpdGl6ZW5cIixcbiAgICAgICAgICAgIFwibGFzdExvZ2luV2hlblwiLFxuICAgICAgICAgICAgXCJjaXRpemVuc2hpcFwiLFxuICAgICAgICBdKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY2NvdW50cyhjYikge1xuICAgICAgICByZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklELCBjYik7XG4gICAgfVxuXG5cdHVwbG9hZERvY3VtZW50KGZpbGUsIHR5cGUsIGNiKSB7XG4gICAgICAgIHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlLCBjYik7XG4gICAgfVxuXG4gICAgLy8gZ2V0U2V0dGluZ3ModXNlcklELCBjYilcbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdHN0YXRpYyBnZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpIHtcbiAgICBcdGlmICghY2IpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModXNlcklELCBrZXksIGNiKVxuXHRcdH1cbiAgICB9XG5cblx0Ly8gZ2V0U2V0dGluZ3Moa2V5LCBjYilcblx0Ly8gZ2V0U2V0dGluZ3MoY2IpXG4gICAgZ2V0U2V0dGluZ3MoKSB7XG4gICAgXHRjb25zdCBbIGtleSwgY2IgXSA9IGFyZ3VtZW50cztcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHQvLyBjYWxsYmFjayBiZWNvbWVzIHNlY29uZCBhcmcgd2hlbiBpdCdzIHVuZGVmaW5lZFxuXHRcdFx0X2dldEFsbFNldHRpbmdzKHRoaXMudXNlcklELCBrZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSwgY2IpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBzZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuXHR9XG5cbiAgICBzZXRTZXR0aW5nKGtleSwgdmFsdWUsIGNiKSB7XG4gICAgXHRfc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSwgY2IpO1xuICAgIH1cblxuICAgIHVuc2V0U2V0dGluZyhrZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0U3RhdHVzKGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh0aGlzLnVzZXJJRCl9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgU1RBVFVTRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBFTkRJTkc6IDEsXG4gICAgICAgIEFQUFJPVkVEOiAyLFxuICAgICAgICBSRUpFQ1RFRDogMyxcbiAgICAgICAgUkVWT0tFRDogNCxcbiAgICAgICAgQ0xPU0VEOiA1LFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIG5ldyBVc2VyKGRhdGEpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG4gICAgICAgICAgICAgICAgYXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuICAgICAgICAgICAgICAgIG9zVHlwZTogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgb3NWZXJzaW9uOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBzY3JSZXM6IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIGlwQWRkcmVzczogXCJ1bmtub3duXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIFNlc3Npb25zLnNhdmUoZGF0YS51c2VySUQsIGRhdGEuc2Vzc2lvbktleSk7XG4gICAgICAgICAgICBVc2VyLmdldEJ5VXNlcklEKGRhdGEudXNlcklELCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgdXNlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZmFsc2UpO1xuICAgICAgICB9LCAoZXJyLCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzQ29kZSA9PT0gNDA0KSByZXR1cm4gY2IgJiYgY2IobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICBjYiAmJiBjYihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgcmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcbiAgICAgICAgdXRtQ2FtcGFpZ24sXG4gICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgdXRtU291cmNlLFxuICAgICAgICB1dG1UZXJtLFxuICAgIH0sIGxvZ2luQXV0b21hdGljYWxseSA9IHRydWUsIGNiKSB7XG4gICAgICAgIGlmICghY2IpIHtcbiAgICAgICAgICAgIGNiID0gbG9naW5BdXRvbWF0aWNhbGx5O1xuICAgICAgICAgICAgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcbiAgICAgICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzMTogZW1haWwsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VJRCxcbiAgICAgICAgICAgICAgICB3bHBJRDogQ29uZmlnLndscElELFxuICAgICAgICAgICAgICAgIHJlZmVycmFsQ29kZSxcbiAgICAgICAgICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgICAgICAgICB1dG1Db250ZW50LFxuICAgICAgICAgICAgICAgIHV0bU1lZGl1bSxcbiAgICAgICAgICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgICAgICAgICAgdXRtVGVybSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkLCBjYik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlXG5cdH0sIGNiKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZVxuXHRcdFx0fSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgRE9DVU1FTlRfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG4gICAgfSB9XG5cblx0c3RhdGljIHVwbG9hZERvY3VtZW50KHVzZXJJRCwgZmlsZSwgdHlwZSwgY2IpIHtcblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9kb2N1bWVudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=