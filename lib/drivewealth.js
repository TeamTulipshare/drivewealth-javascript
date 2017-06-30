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
					if (type !== Order.TYPES.MARKET || !waitForFill) return cb && cb(null, data.orderID);
	
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
					multipleOrderDelta: basketPrice ? (total - basketPrice) * -1 : 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NzZhOTc4ZjdkMWQ3M2U4MzdmZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwiZXJyIiwicXVlcnlTdHJpbmciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwiZ2V0RnVuZGluZ01ldGhvZHMiLCJnZXRUcmFuc2FjdGlvbnMiLCJnZXRQbGFjZWRPcmRlcnMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0VGF4RG9jdW1lbnRzIiwiZ2V0VHJhZGVDb25maXJtcyIsImZpbGVLZXkiLCJnZW5lcmF0ZURvd25sb2FkVVJMIiwibWFwIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYWRkbEhlYWRlcnMiLCJob3N0IiwiQVBJIiwiaGVhZGVycyIsIkFjY2VwdCIsImhlYWRlciIsImVudiIsIkpTT04iLCJzdHJpbmdpZnkiLCJodHRwSW1wbCIsInN0YXR1c0NvZGUiLCJyZXNIZWFkZXJzIiwicmVzQm9keSIsImNvbnRlbnRUeXBlIiwiaW5kZXhPZiIsInBhcnNlIiwiU3RyaW5nIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiYXBwVHlwZUlEIiwiYXBwVmVyc2lvbiIsIndscElEIiwiYXBwc1BhcnRuZXJJRCIsInJlZmVycmFsQ29kZSIsIkhPU1RTIiwiQVBQUyIsIlJFUE9SVFMiLCJVQVQiLCJQUk9EIiwiRHJpdmVXZWFsdGhFcnJvciIsIkRyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIiwiX2tleXMiLCJfbWFpblVzZXIiLCJzZXNzaW9ucyIsIlNFQ19GRUVfUkFURSIsIlNFQ19GRUVfTUlOIiwiU0VDX0ZFRV9NQVgiLCJOdW1iZXIiLCJQT1NJVElWRV9JTkZJTklUWSIsIlRBRl9GRUVfUkFURSIsIlRBRl9GRUVfTUlOIiwiVEFGX0ZFRV9NQVgiLCJyZWplY3Rpb25SZWFzb24iLCJvcmRSZWpSZWFzb24iLCJzdGF0dXMiLCJvcmRTdGF0dXMiLCJvcmRUeXBlIiwib3JkZXJJRCIsImluc3RydW1lbnQiLCJzaWRlIiwicXR5IiwiYW1vdW50Q2FzaCIsImNvbW1lbnQiLCJhdXRvU3RvcCIsInByaWNlIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsInVuZGVmaW5lZCIsIlNUT1AiLCJsaW1pdFByaWNlIiwiTElNSVQiLCJwb2xsIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIm9yZGVyIiwiU1RBVFVTRVMiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0Iiwib3JkZXJzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsInJlZmVyZW5jZUlEIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0lERVMiLCJTRUxMIiwibWluIiwib3JkZXJUb3RhbCIsImNvbW1pc3Npb24iLCJmZWVzIiwic2VjIiwidGFmIiwibXVsdGlwbGVPcmRlckRlbHRhIiwiQlVZIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJnZXRBbnkiLCJpbnMiLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInVzZXJQYXNzZWRPbmVTeW1ib2wiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJjb21wcmVzc2lvbiIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIklOQUNUSVZFIiwiQUNUSVZFIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfZ2V0QWxsU2V0dGluZ3MiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsIl9zZXRTZXR0aW5nIiwiZ2V0TGlzdEZvclVzZXJJRCIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwidXNlciIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDWEEsdUNBRFc7O0FBR1hDLCtCQUhXO0FBSVhDLDJCQUpXO0FBS1hDLDJCQUxXO0FBTVhDLCtCQU5XO0FBT1hDLHFDQVBXO0FBUVhDLDJCQVJXO0FBU1hDLCtCQVRXO0FBVVhDLHlCQVZXO0FBV1hDLGlDQVhXOztBQWFYQyx5QkFiVztBQWNYQztBQWRXLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0tBRXFCVixPO0FBRXBCLG1CQUFZVyxJQUFaLEVBQWtCO0FBQUE7O0FBQUEsY0FDRCxDQUNmLFdBRGUsRUFFZixRQUZlLEVBR2YsV0FIZSxFQUlmLGFBSmUsRUFLZixZQUxlLEVBTWYsTUFOZSxFQU9mLFFBUGUsRUFRZixVQVJlLEVBU2YsWUFUZSxFQVVmLGtCQVZlLEVBV2YsUUFYZSxFQVlmLGFBWmUsRUFhZixpQkFiZSxDQURDOztBQUNqQiw0Q0FjRztBQWRFLFFBQUlDLGNBQUo7QUFlSixTQUFLQSxHQUFMLElBQVlELEtBQUtDLEdBQUwsQ0FBWjtBQUNBO0FBQ0Q7Ozs7OEJBRVVDLEksRUFB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LGNBQVosRUFBNEJsUSxJQUE1QjtBQUNBcUMsa0JBQUs2TixNQUFMLENBQVksZUFBWixFQUE2Qm5DLElBQTdCOztBQUVBLG9CQUFPLHVCQUFRO0FBQ2Q3Tix5QkFBUSxNQURNO0FBRWRDLHVDQUZjO0FBR2RHLDZCQUFZLG1CQUFTQyxHQUFULENBQWFILE1BQWIsQ0FIRTtBQUlkOEMsOEJBQWE7QUFDWixxQ0FBZ0I7QUFESixrQkFKQztBQU9kYjtBQVBjLGNBQVIsRUFRSixnQkFBUTtBQUNWcEMsdUJBQU1BLEdBQUcsSUFBSCxFQUFTSCxJQUFULENBQU47QUFDQSxjQVZNLEVBVUo7QUFBQSx3QkFBT0csTUFBTUEsR0FBR08sR0FBSCxDQUFiO0FBQUEsY0FWSSxDQUFQO0FBV0E7Ozs2QkFuS3dCO0FBQUUsb0JBQU87QUFDM0JtQywwQkFBUyxDQURrQjtBQUUzQndOLDJCQUFVLENBRmlCO0FBRzNCMUYsMkJBQVUsQ0FIaUI7QUFJM0IyRiwwQkFBUyxDQUprQjtBQUszQnROLHlCQUFRO0FBTG1CLGNBQVA7QUFNckI7Ozs2QkFzSXNCO0FBQUUsb0JBQU87QUFDOUJ1TiwyQkFBVSxZQURvQjtBQUVwQ0MsbUNBQWtCLGtCQUZrQjtBQUdwQ0MsaURBQWdDO0FBSEksY0FBUDtBQUl4Qjs7Ozs7O21CQTlPYzdRLEkiLCJmaWxlIjoiZHJpdmV3ZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NzZhOTc4ZjdkMWQ3M2U4MzdmZiIsImltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgc2V0dXAsIEVOVklST05NRU5UUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgRU5WSVJPTk1FTlRTLFxuXG4gICAgQWNjb3VudCxcbiAgICBDb25maWcsXG4gICAgRXJyb3IsXG4gICAgRnVuZGluZyxcbiAgICBJbnN0cnVtZW50LFxuICAgIE9yZGVyLFxuICAgIFJlcG9ydHMsXG4gICAgVXNlcixcbiAgICBTZXNzaW9ucyxcblxuICAgIHNldHVwLFxuICAgIHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcImFjY291bnRJRFwiLFxuXHRcdFx0XCJ1c2VySURcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImFjY291bnRUeXBlXCIsXG5cdFx0XHRcImN1cnJlbmN5SURcIixcblx0XHRcdFwiaWJJRFwiLFxuXHRcdFx0XCJtYXJnaW5cIixcblx0XHRcdFwibmlja25hbWVcIixcblx0XHRcdFwib3BlbmVkV2hlblwiLFxuXHRcdFx0XCJwYXR0ZXJuRGF5VHJhZGVzXCIsXG5cdFx0XHRcInN0YXR1c1wiLFxuXHRcdFx0XCJ0cmFkaW5nVHlwZVwiLFxuXHRcdFx0XCJhY2NvdW50TWdtdFR5cGVcIixcblx0XHRdKSB7XG5cdFx0XHR0aGlzW2tleV0gPSBkYXRhW2tleV07XG5cdFx0fVxuXHR9XG5cblx0Z2V0QmxvdHRlcih0eXBlLCBjYikge1xuXHRcdGlmICh0eXBlICYmICFjYikge1xuXHRcdFx0Y2IgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IG51bGw7XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50U3VtbWFyeS8ke3RoaXMuYWNjb3VudElEfSR7dHlwZSA/ICcvJyArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIHR5cGUgPyBkYXRhW3R5cGVdIDogZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZ2V0UGVyZm9ybWFuY2Uoc3RhcnREYXRlLCBlbmREYXRlLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UocGVyaW9kLCBjYilcblx0Ly8gZ2V0UGVyZm9ybWFuY2UoY2IpXG5cdGdldFBlcmZvcm1hbmNlKCkge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0bGV0IGNiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IFsgc3RhcnREYXRlLCBlbmREYXRlIF0gPSBhcmd1bWVudHM7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSAgYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRjYiA9IGFyZ3VtZW50c1sxXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMF19YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMF07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHt0aGlzLmFjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEucGVyZm9ybWFuY2UpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHBsYWNlT3JkZXIodHlwZSwgZGF0YSwgY2IpIHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0RnVuZGluZ01ldGhvZHMoZGF0YSA9IHt9LCBjYikge1xuXHRcdGRhdGEudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0ZGF0YS5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhkYXRhLCBjYik7XG5cdH1cblxuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXksIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXksIGNiKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgQkxPVFRFUl9UWVBFUygpIHsgcmV0dXJuIHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBUWVBFUygpIHsgcmV0dXJuIHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9IH07XG5cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklELCBjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRCwgdHlwZSwgZGF0YSwgY2IpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IGAvc2lnbnVwcy9wcmFjdGljZWBcblx0XHRcdFx0OiBgL3NpZ251cHMvbGl2ZWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwsIGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsImltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG4gICAgbWV0aG9kID0gXCJHRVRcIixcbiAgICBlbmRwb2ludCxcbiAgICBzZXNzaW9uS2V5LFxuICAgIGJvZHksXG4gICAgYWRkbEhlYWRlcnMgPSB7fSxcbiAgICBob3N0ID0gSE9TVFMuQVBJLFxufSwgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuICAgICAgICBoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uS2V5KSB7XG4gICAgICAgIGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG4gICAgfVxuICAgIGZvciAobGV0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuICAgICAgICBoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuICAgIH1cblxuICAgIGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG4gICAgaWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cbiAgICBDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcbiAgICAgICAgaWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGVycm9yLCBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAocmVzQm9keSkge1xuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVycm9yID0gc3RhdHVzQ29kZSA9PSA0MDEgPyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlKSA6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCJleHBvcnQgY29uc3QgQ29uZmlnID0ge1xuICAgIGVudjogbnVsbCxcbiAgICBodHRwSW1wbDogbnVsbCxcbiAgICBhcHBUeXBlSUQ6IG51bGwsXG4gICAgYXBwVmVyc2lvbjogbnVsbCxcbiAgICB3bHBJRDogbnVsbCxcbiAgICBhcHBzUGFydG5lcklEOiBudWxsLFxuICAgIHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcbiAgICBBUEk6IFwiYXBpXCIsXG4gICAgQVBQUzogXCJhcHBzXCIsXG4gICAgUkVQT1JUUzogXCJyZXBvcnRzXCJcbn07XG5cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG4gICAgVUFUOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgICAgIFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuICAgIH0sXG4gICAgUFJPRDoge1xuICAgICAgICBbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcbiAgICAgICAgW0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcbiAgICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcbiAgICBlbnYsXG4gICAgaHR0cEltcGwsXG4gICAgYXBwVHlwZUlELFxuICAgIGFwcFZlcnNpb24sXG4gICAgd2xwSUQgPSBcIkRXXCIsXG4gICAgYXBwc1BhcnRuZXJJRCxcbiAgICByZWZlcnJhbENvZGUsXG59KSB7XG4gICAgQ29uZmlnLmVudiA9IGVudjtcbiAgICBDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcbiAgICBDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuICAgIENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcbiAgICBDb25maWcud2xwSUQgPSB3bHBJRDtcbiAgICBDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG4gICAgQ29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBEcml2ZVdlYWx0aEVycm9yLFxuICAgIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5jb25zdCBTRUNfRkVFX1JBVEUgPSAwLjAwMDAyMzE7XG5jb25zdCBTRUNfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBTRUNfRkVFX01BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbmNvbnN0IFRBRl9GRUVfUkFURSA9IDAuMDAwMTE5O1xuY29uc3QgVEFGX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgVEFGX0ZFRV9NQVggPSA1Ljk1O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSkge1xuXHRcdGZvciAobGV0IGtleSBvZiBbXG5cdFx0XHRcIm9yZGVySURcIixcblx0XHRcdFwiYWNjb3VudElEXCIsXG5cdFx0XHRcInVzZXJJRFwiLFxuXHRcdFx0XCJjdW1RdHlcIixcblx0XHRcdFwiYWNjb3VudE5vXCIsXG5cdFx0XHRcImNvbW1lbnRcIixcblx0XHRcdFwiY29tbWlzc2lvblwiLFxuXHRcdFx0XCJjcmVhdGVkQnlJRFwiLFxuXHRcdFx0XCJjcmVhdGVkV2hlblwiLFxuXHRcdFx0XCJleGVjdXRlZFdoZW5cIixcblx0XHRcdFwiZ3Jvc3NUcmFkZUFtdFwiLFxuXHRcdFx0XCJpbnN0cnVtZW50SURcIixcblx0XHRcdFwibGVhdmVzUXR5XCIsXG5cdFx0XHRcIm9yZGVyTm9cIixcblx0XHRcdFwib3JkZXJRdHlcIixcblx0XHRcdFwic2lkZVwiLFxuXHRcdFx0XCJhdXRvU3RvcFwiLFxuXHRcdF0pIHtcblx0XHRcdHRoaXNba2V5XSA9IGRhdGFba2V5XTtcblx0XHR9XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZTtcblx0fVxuXG5cdGNhbmNlbChjYikge1xuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7dGhpcy5vcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0sICgpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9IH1cblxuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHR5cGUsIHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdGluc3RydW1lbnQsXG5cdFx0c2lkZSxcblx0XHRxdHksXG5cdFx0YW1vdW50Q2FzaCxcblx0XHRjb21tZW50LFxuXHRcdGF1dG9TdG9wLFxuXHRcdHByaWNlLFxuXHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHR9LCBjYikge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkgdGhyb3cgbmV3IEVycm9yKGBcInF0eVwiIGFuZCBcImFtb3VudENhc2hcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLmApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgIXByaWNlKSB0aHJvdyBuZXcgRXJyb3IoYExpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXCJwcmljZS5cImApO1xuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHRocm93IG5ldyBFcnJvcihgXCJhdXRvU3RvcFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5gKTtcblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IHR5cGUsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdG9yZGVyUXR5OiBxdHkgPyBxdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggPyBhbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSwgKGRhdGEpID0+IHtcblx0XHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgfHwgIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuXHRcdFx0bGV0IHBvbGwsIHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRmaWxsTWF4UmV0cmllcy0tO1xuXHRcdFx0XHRPcmRlci5nZXRCeUlEKGRhdGEub3JkZXJJRCwgdXNlcklELCAoZXJyLCBvcmRlcikgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnIpIHJldHVybiBjYiAmJiBjYihlcnIpO1xuXHRcdFx0XHRcdGlmIChmaWxsTWF4UmV0cmllcyA8PSAwKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXG5cdFx0XHRcdFx0aWYgKG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmIG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY2IgJiYgY2IobnVsbCwgb3JkZXIpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0Ly8gZWFjaCBvcmRlciBpczpcblx0Ly8geyBzaWRlLCBxdHksIG1hcmtldFByaWNlLCByZWZlcmVuY2VJRCB9XG5cdC8vIGNvbW1pc3Npb24gc2NoZWR1bGUgaXM6XG5cdC8vIHsgYmFzZVJhdGUsIGJhc2VTaGFyZXMsIGV4Y2Vzc1JhdGUsIGZyYWN0aW9uYWxSYXRlLCBzaGFyZUFtb3VudFJvdW5kaW5nLCBzdWJzY3JpcHRpb24sIGJhc2tldFNjaGVkdWxlLCBwYXNzVGhyb3VnaEZlZXMgfVxuXHRzdGF0aWMgZXN0aW1hdGVDb21taXNzaW9uKG9yZGVycywgY29tbWlzc2lvblNjaGVkdWxlKSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlID0gdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcylcblx0XHRcdFx0KSAqIGNvbW1pc3Npb25TY2hlZHVsZS5leGNlc3NSYXRlXG5cdFx0XHQpO1xuXG5cdFx0XHRsZXQgc2VjRmVlID0gMCwgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/ICh0b3RhbCAtIGJhc2tldFByaWNlKSAqIC0xIDogMCxcblx0XHRcdGJ5T3JkZXIsXG5cdFx0fTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cbiAgICBzdGF0aWMgZ2V0IEFMTE9XRURfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuICAgICAgICBXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuICAgICAgICBERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBtaW5BbW91bnQsXG4gICAgICAgIG1heEFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmaWx0ZXJzID0ge30sXG4gICAgfSA9IHt9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkgdGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uIHx8IFtdKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudXJsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9jb3VudHJpZXNgLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgXCJleGNoYW5nZUlEXCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRUeXBlSURcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWF4XCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1pblwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVTdGVwXCIsXG4gICAgICAgICAgICBcInJhdGVBc2tcIixcbiAgICAgICAgICAgIFwicmF0ZUJpZFwiLFxuICAgICAgICAgICAgXCJyYXRlUHJlY2lzaW9uXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgXCJ0cmFkZVN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1cmxJbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cmxJbnZlc3RvclwiLFxuICAgICAgICAgICAgXCJjaGFpa2luUGdyXCIsXG4gICAgICAgICAgICBcInByaW9yQ2xvc2VcIixcbiAgICAgICAgICAgIFwibWFya2V0U3RhdGVcIixcbiAgICAgICAgICAgIFwiZnVuZGFtZW50YWxEYXRhTW9kZWxcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUUkFERV9TVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgSU5BQ1RJVkU6IFwiMFwiLFxuICAgICAgICBBQ1RJVkU6IFwiMVwiLFxuICAgICAgICBDTE9TRUQ6IFwiMlwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldCBDSEFSVF9DT01QUkVTU0lPTlMoKSB7IHJldHVybiB7XG4gICAgICAgIERBWTogMCxcbiAgICAgICAgTUlOVVRFXzE6IDEsXG4gICAgICAgIE1JTlVURV81OiA0LFxuICAgICAgICBNSU5VVEVfMzA6IDgsXG4gICAgICAgIEhPVVI6IDksXG4gICAgICAgIFdFRUs6IDEwXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHN5bWJvbDtcbiAgICAgICAgaWYgKHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIpIHN5bWJvbHMgPSBbc3ltYm9sXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbCR7c3ltYm9scy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifT0ke3N5bWJvbHMuam9pbignLCcpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gZGF0YVswXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5SUQoaWQsIGluY2x1ZGVGdW5kYW1lbnRhbHMgPSB0cnVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gJz9vcHRpb25zPUYnIDogJyd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IEluc3RydW1lbnQoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cywgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSB0cmFkZVN0YXR1cztcbiAgICAgICAgICAgIHRyYWRlU3RhdHVzID0gXCItMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VhcmNoKGNyaXRlcmlhLCBjYikge1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGUoY2IpIHtcbiAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgdXNlclBhc3NlZE9uZVN5bWJvbCA9IGZhbHNlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkge1xuICAgICAgICAgICAgdXNlclBhc3NlZE9uZVN5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBzeW1ib2wgPSBbc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBzeW1ib2wgPSBzeW1ib2wubWFwKHN5bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2wuam9pbihcIixcIil9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICAgICAgYWRkbEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcInRleHQvcGxhaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhd1F1b3RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICBiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5jb25zdCBfZ2V0U2V0dGluZ3MgPSAodXNlcklELCBrZXksIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfZ2V0QWxsU2V0dGluZ3MgPSAodXNlcklELCBjYikgPT4ge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGxldCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0Zm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG5cdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0fVxuXHRcdGNiICYmIGNiKG51bGwsIGZvcm1hdHRlZERhdGEpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59O1xuXG5jb25zdCBfc2V0U2V0dGluZyA9ICh1c2VySUQsIGtleSwgdmFsdWUsIGNiKSA9PiB7XG5cdHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7XG5cdFx0XHRrZXksIHZhbHVlXG5cdFx0fVxuXHR9LCAoKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJjb3VudHJ5SURcIixcbiAgICAgICAgICAgIFwiZW1haWxBZGRyZXNzXCIsXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgXCJsYW5ndWFnZUlEXCIsXG4gICAgICAgICAgICBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcInJlZmVycmFsQ29kZVwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIFwid2xwSURcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInVzQ2l0aXplblwiLFxuICAgICAgICAgICAgXCJsYXN0TG9naW5XaGVuXCIsXG4gICAgICAgICAgICBcImNpdGl6ZW5zaGlwXCIsXG4gICAgICAgIF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjY291bnRzKGNiKSB7XG4gICAgICAgIHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cblx0dXBsb2FkRG9jdW1lbnQoZmlsZSwgdHlwZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYikge1xuICAgIFx0aWYgKCFjYikge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh1c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdFx0fVxuICAgIH1cblxuXHQvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuXHQvLyBnZXRTZXR0aW5ncyhjYilcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICBcdGNvbnN0IFsga2V5LCBjYiBdID0gYXJndW1lbnRzO1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5LCBjYik7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYik7XG5cdH1cblxuICAgIHNldFNldHRpbmcoa2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlLCBjYik7XG4gICAgfVxuXG4gICAgdW5zZXRTZXR0aW5nKGtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSBsb2dpbkF1dG9tYXRpY2FsbHk7XG4gICAgICAgICAgICBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGVcblx0fSwgY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlXG5cdFx0XHR9LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBET0NVTUVOVF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcbiAgICB9IH1cblxuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklELCBmaWxlLCB0eXBlLCBjYikge1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL2RvY3VtZW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==