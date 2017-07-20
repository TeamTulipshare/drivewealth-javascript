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
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
		}, {
			key: "addSubscription",
			value: function addSubscription(options, cb) {
				_addSubscription(Object.assign({}, options, {
					userID: this.userID,
					accountID: this.accountID
				}), cb);
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
			key: "addSubscription",
			value: function addSubscription(options, cb) {
				_addSubscription(options, cb);
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
	
	
	function _addSubscription(_ref, cb) {
		var userID = _ref.userID,
		    accountID = _ref.accountID,
		    planID = _ref.planID,
		    paymentID = _ref.paymentID;
	
		(0, _request2.default)({
			method: "POST",
			endpoint: "/users/" + userID + "/accounts/" + accountID + "/subscriptions",
			sessionKey: _Sessions2.default.get(userID),
			body: _defineProperty({
				planID: planID
			}, paymentID.startsWith("card") ? "cardID" : "bankAccountID", paymentID)
		}, function (data) {
			cb && cb(null, data);
		}, function (err) {
			return cb && cb(err);
		});
	}
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
	
			var _arr = ["orderID", "accountID", "userID", "cumQty", "accountNo", "comment", "commission", "createdByID", "createdWhen", "executedWhen", "grossTradeAmt", "instrumentID", "leavesQty", "orderNo", "orderQty", "side", "autoStop", "symbol", "effectivePrice"];
	
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
	        key: "getPricing",
	        value: function getPricing(userID, cb) {
	            return (0, _request2.default)({
	                endpoint: "/funding/ach/subscription-plans",
	                sessionKey: _Sessions2.default.get(userID)
	            }, function (data) {
	                var pricing = data.data.map(function (pricing) {
	                    return [].concat(pricing).sort(function (x, y) {
	                        return x.amount - y.amount;
	                    }).map(function (price) {
	                        return Object.assign({}, price, { amount: Number(price.amount / 100) });
	                    });
	                })[0];
	
	                cb && cb(null, pricing);
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
	  }, {
	    key: "listCreditCards",
	    value: function listCreditCards(cb) {
	      return _listCreditCards(this.userID, cb);
	    }
	  }, {
	    key: "addCreditCard",
	    value: function addCreditCard(cardToken, cb) {
	      return _addCreditCard(this.userID, cardToken, cb);
	    }
	  }, {
	    key: "removeCreditCard",
	    value: function removeCreditCard(cardID, cb) {
	      return _removeCreditCard(this.userID, cardID, cb);
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
	    key: "listCreditCards",
	    value: function listCreditCards(userID, cb) {
	      return _listCreditCards(userID, cb);
	    }
	  }, {
	    key: "addCreditCard",
	    value: function addCreditCard(userID, cardToken, cb) {
	      return _addCreditCard(userID, cardToken, cb);
	    }
	  }, {
	    key: "removeCreditCard",
	    value: function removeCreditCard(userID, cardID, cb) {
	      return _removeCreditCard(userID, cardID, cb);
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
	
	
	function _listCreditCards(userID, cb) {
	  return (0, _request2.default)({
	    method: "GET",
	    endpoint: "/users/" + userID + "/credit-cards",
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _addCreditCard(userID, cardToken, cb) {
	  return (0, _request2.default)({
	    method: "POST",
	    endpoint: "/users/" + userID + "/credit-cards",
	    sessionKey: _Sessions2.default.get(userID),
	    body: { cardToken: cardToken }
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _removeCreditCard(userID, cardID, cb) {
	  return (0, _request2.default)({
	    method: "DELETE",
	    endpoint: "/users/" + userID + "/credit-cards/" + cardID,
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _getSettings(userID, key, cb) {
	  (0, _request2.default)({
	    method: "GET",
	    endpoint: "/users/" + userID + "/settings/" + key,
	    sessionKey: _Sessions2.default.get(userID)
	  }, function (data) {
	    cb && cb(null, data.value);
	  }, function (err) {
	    return cb && cb(err);
	  });
	}
	
	function _getAllSettings(userID, cb) {
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
	}
	
	function _setSetting(userID, key, value, cb) {
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
	}
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZDUwZTM4NDIyM2VkYzBkNjAzMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiQWNjb3VudCIsIkNvbmZpZyIsIkVycm9yIiwiRnVuZGluZyIsIkluc3RydW1lbnQiLCJPcmRlciIsIlJlcG9ydHMiLCJVc2VyIiwiU2Vzc2lvbnMiLCJzZXR1cCIsInJlcXVlc3QiLCJkYXRhIiwia2V5IiwidHlwZSIsImNiIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJ1c2VySUQiLCJhY2NvdW50SUQiLCJzZXNzaW9uS2V5IiwiZ2V0Iiwib3JkZXJzIiwibWFwIiwib3JkZXIiLCJlcnIiLCJxdWVyeVN0cmluZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic2xpY2UiLCJnZXREYXRlIiwicGVyZm9ybWFuY2UiLCJwYXJlbnREZXRhaWxzIiwiYWNjb3VudE5vIiwiYWNjb3VudFR5cGUiLCJjcmVhdGUiLCJnZXRGdW5kaW5nTWV0aG9kcyIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJvcHRpb25zIiwiYWRkU3Vic2NyaXB0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwiYm9keSIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJwbGFuSUQiLCJwYXltZW50SUQiLCJzdGFydHNXaXRoIiwib25TdWNjZXNzIiwib25FcnJvciIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsIlN0cmluZyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJIT1NUUyIsIkFQUFMiLCJSRVBPUlRTIiwiVUFUIiwiUFJPRCIsIkRyaXZlV2VhbHRoRXJyb3IiLCJEcml2ZVdlYWx0aFNlc3Npb25FcnJvciIsIl9rZXlzIiwiX21haW5Vc2VyIiwic2Vzc2lvbnMiLCJTRUNfRkVFX1JBVEUiLCJTRUNfRkVFX01JTiIsIlNFQ19GRUVfTUFYIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJUQUZfRkVFX1JBVEUiLCJUQUZfRkVFX01JTiIsIlRBRl9GRUVfTUFYIiwicmVqZWN0aW9uUmVhc29uIiwib3JkUmVqUmVhc29uIiwic3RhdHVzIiwib3JkU3RhdHVzIiwib3JkVHlwZSIsIm9yZGVyVHlwZSIsInByaWNlIiwic3RvcFByaWNlIiwibGltaXRQcmljZSIsIm9yZGVySUQiLCJpbnN0cnVtZW50Iiwic2lkZSIsInF0eSIsImFtb3VudENhc2giLCJjb21tZW50IiwiYXV0b1N0b3AiLCJ3YWl0Rm9yRmlsbCIsImZpbGxSZXRyeUludGVydmFsIiwiZmlsbE1heFJldHJpZXMiLCJNQVJLRVQiLCJpbnN0cnVtZW50SUQiLCJpZCIsIm9yZGVyUXR5IiwidW5kZWZpbmVkIiwiU1RPUCIsIkxJTUlUIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsIlNUQVRVU0VTIiwiTkVXIiwiUEFSVElBTF9GSUxMIiwic2V0VGltZW91dCIsIlNJREVTIiwiQlVZIiwib3JkZXJSZXN1bHRzIiwib3JkZXJzTWFwIiwicmVkdWNlIiwiYWNjIiwibmV4dCIsImlkeCIsInJlZmVyZW5jZUlEIiwiZmlsbGVkT3JkZXJzIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJyZWplY3QiLCJzdGF0dXNEZXRhaWxzIiwidGhlbiIsInNob3VsZFJldHJ5IiwicmVmZXJlbmNlIiwidGhpc1N0YXR1cyIsImNvbW1pc3Npb25TY2hlZHVsZSIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwidG90YWxGZWVzT25seSIsImJhc2tldFByaWNlIiwiYmFza2V0U2NoZWR1bGUiLCJzY2hlZHVsZSIsInNjaGVkdWxlSXRlbSIsImJhc2tldFNpemUiLCJieU9yZGVyIiwibWFya2V0UHJpY2UiLCJvcmRlclByaWNlIiwiZnJhY3Rpb25hbFJhdGUiLCJiYXNlUmF0ZSIsIk5FQVJFU1QiLCJNYXRoIiwicm91bmQiLCJDRUlMIiwiY2VpbCIsIkZMT09SIiwiZmxvb3IiLCJzaGFyZUFtb3VudFJvdW5kaW5nIiwibWF4IiwiYmFzZVNoYXJlcyIsImV4Y2Vzc1JhdGUiLCJzZWNGZWUiLCJ0YWZGZWUiLCJwYXNzVGhyb3VnaEZlZXMiLCJTRUxMIiwibWluIiwib3JkZXJUb3RhbCIsImNvbW1pc3Npb24iLCJmZWVzIiwic2VjIiwidGFmIiwibXVsdGlwbGVPcmRlckRlbHRhIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsInByaWNpbmciLCJjb25jYXQiLCJzb3J0IiwieCIsInkiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiZ2V0QW55IiwiaW5zIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJ1c2VyUGFzc2VkT25lU3ltYm9sIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwiY29tcHJlc3Npb24iLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJJTkFDVElWRSIsIkFDVElWRSIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXRMaXN0Rm9yVXNlcklEIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiX2dldEFsbFNldHRpbmdzIiwiX2dldFNldHRpbmdzIiwidmFsdWUiLCJfc2V0U2V0dGluZyIsInJlbW92ZSIsIl9saXN0Q3JlZGl0Q2FyZHMiLCJjYXJkVG9rZW4iLCJfYWRkQ3JlZGl0Q2FyZCIsImNhcmRJRCIsIl9yZW1vdmVDcmVkaXRDYXJkIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJ1c2VyIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OzttQkFFZTtBQUNYQSx1Q0FEVzs7QUFHWEMsK0JBSFc7QUFJWEMsMkJBSlc7QUFLWEMsMkJBTFc7QUFNWEMsK0JBTlc7QUFPWEMscUNBUFc7QUFRWEMsMkJBUlc7QUFTWEMsK0JBVFc7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QXBCLGNBRk87QUFHUEUsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYUgsTUFBYixDQUhMO0FBSVB1QyxXQUFNO0FBQ0w1QyxlQURLLEVBQ0E4UDtBQURBO0FBSkMsSUFBUixFQU9HLFlBQU07QUFDUjVQLFdBQU1BLEdBQUcsSUFBSCxDQUFOO0FBQ0EsSUFURCxFQVNHO0FBQUEsWUFBT0EsTUFBTUEsR0FBR1UsR0FBSCxDQUFiO0FBQUEsSUFUSDtBQVVBIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGQ1MGUzODQyMjNlZGMwZDYwMzAiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEVOVklST05NRU5UUyxcblxuICAgIEFjY291bnQsXG4gICAgQ29uZmlnLFxuICAgIEVycm9yLFxuICAgIEZ1bmRpbmcsXG4gICAgSW5zdHJ1bWVudCxcbiAgICBPcmRlcixcbiAgICBSZXBvcnRzLFxuICAgIFVzZXIsXG4gICAgU2Vzc2lvbnMsXG5cbiAgICBzZXR1cCxcbiAgICByZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXG5cdGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1xuXHRcdFx0XCJhY2NvdW50SURcIixcblx0XHRcdFwidXNlcklEXCIsXG5cdFx0XHRcImFjY291bnROb1wiLFxuXHRcdFx0XCJhY2NvdW50VHlwZVwiLFxuXHRcdFx0XCJjdXJyZW5jeUlEXCIsXG5cdFx0XHRcImliSURcIixcblx0XHRcdFwibWFyZ2luXCIsXG5cdFx0XHRcIm5pY2tuYW1lXCIsXG5cdFx0XHRcIm9wZW5lZFdoZW5cIixcblx0XHRcdFwicGF0dGVybkRheVRyYWRlc1wiLFxuXHRcdFx0XCJzdGF0dXNcIixcblx0XHRcdFwidHJhZGluZ1R5cGVcIixcblx0XHRcdFwiYWNjb3VudE1nbXRUeXBlXCIsXG5cdFx0XHRcImNvbW1pc3Npb25TY2hlZHVsZVwiLFxuXHRcdF0pIHtcblx0XHRcdHRoaXNba2V5XSA9IGRhdGFba2V5XTtcblx0XHR9XG5cdH1cblxuXHRnZXRCbG90dGVyKHR5cGUsIGNiKSB7XG5cdFx0aWYgKHR5cGUgJiYgIWNiKSB7XG5cdFx0XHRjYiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gbnVsbDtcblx0XHR9XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L2FjY291bnRTdW1tYXJ5LyR7dGhpcy5hY2NvdW50SUR9JHt0eXBlID8gJy8nICsgdHlwZSA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRClcblx0XHR9LCAoZGF0YSkgPT4ge1xuXG5cdFx0XHRpZiAoZGF0YS5vcmRlcnMpIHtcblx0XHRcdFx0ZGF0YS5vcmRlcnMgPSBkYXRhLm9yZGVycy5tYXAoZnVuY3Rpb24gKG9yZGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBPcmRlcihvcmRlcik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjYiAmJiBjYihudWxsLCB0eXBlID8gZGF0YVt0eXBlXSA6IGRhdGEpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdC8vIGdldFBlcmZvcm1hbmNlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpXG5cdC8vIGdldFBlcmZvcm1hbmNlKHBlcmlvZCwgY2IpXG5cdC8vIGdldFBlcmZvcm1hbmNlKGNiKVxuXHRnZXRQZXJmb3JtYW5jZSgpIHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIlwiO1xuXHRcdGxldCBjYjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMl07XG5cdFx0XHRjb25zdCBbIHN0YXJ0RGF0ZSwgZW5kRGF0ZSBdID0gYXJndW1lbnRzO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIHN0YXJ0RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gIGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0Y2IgPSBhcmd1bWVudHNbMV07XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgL2hpc3Rvcnk/cGVyaW9kPSR7YXJndW1lbnRzWzBdfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNiID0gYXJndW1lbnRzWzBdO1xuXHRcdH1cblxuXHRcdHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7dGhpcy5hY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhLnBlcmZvcm1hbmNlKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRwbGFjZU9yZGVyKHR5cGUsIGRhdGEsIGNiKSB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEsIGNiKTtcblx0fVxuXG5cdGdldEZ1bmRpbmdNZXRob2RzKGRhdGEgPSB7fSwgY2IpIHtcblx0XHRkYXRhLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdGRhdGEuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMoZGF0YSwgY2IpO1xuXHR9XG5cblx0Z2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUsIGNiKTtcblx0fVxuXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlLCBjYik7XG5cdH1cblxuXHRnZXRUYXhEb2N1bWVudHMoc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhZGVDb25maXJtcyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpO1xuXHR9XG5cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5LCBjYikge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5LCBjYik7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IEJMT1RURVJfVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9IH07XG5cblx0c3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhLm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGNyZWF0ZSh1c2VySUQsIHR5cGUsIGRhdGEsIGNiKSB7XG5cdFx0aWYgKHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0UpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcblx0XHRcdFx0dHJhbkFtb3VudDogZGF0YSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0Vcblx0XHRcdFx0PyBgL3NpZ251cHMvcHJhY3RpY2VgXG5cdFx0XHRcdDogYC9zaWdudXBzL2xpdmVgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRhZGRTdWJzY3JpcHRpb24gKG9wdGlvbnMsIGNiKSB7XG5cdFx0YWRkU3Vic2NyaXB0aW9uKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdH0pLCBjYik7XG5cdH1cblxuXHRzdGF0aWMgYWRkU3Vic2NyaXB0aW9uIChvcHRpb25zLCBjYikge1xuXHRcdGFkZFN1YnNjcmlwdGlvbihvcHRpb25zLCBjYik7XG5cdH1cblxufVxuXG5mdW5jdGlvbiBhZGRTdWJzY3JpcHRpb24gKHtcblx0dXNlcklELFxuXHRhY2NvdW50SUQsXG5cdHBsYW5JRCxcblx0cGF5bWVudElELFxufSwgY2IpIHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHMvJHthY2NvdW50SUR9L3N1YnNjcmlwdGlvbnNgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdGJvZHk6IHtcblx0XHRcdHBsYW5JRCxcblx0XHRcdFtwYXltZW50SUQuc3RhcnRzV2l0aChcImNhcmRcIikgPyBcImNhcmRJRFwiIDogXCJiYW5rQWNjb3VudElEXCJdOiBwYXltZW50SUQsXG5cdFx0fSxcblx0fSwgZGF0YSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcbiAgICBtZXRob2QgPSBcIkdFVFwiLFxuICAgIGVuZHBvaW50LFxuICAgIHNlc3Npb25LZXksXG4gICAgYm9keSxcbiAgICBhZGRsSGVhZGVycyA9IHt9LFxuICAgIGhvc3QgPSBIT1NUUy5BUEksXG59LCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBsZXQgaGVhZGVycyA9IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG4gICAgICAgIGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25LZXkpIHtcbiAgICAgICAgaGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG4gICAgfVxuXG4gICAgZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cbiAgICBpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuICAgIENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuICAgICAgICBpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZXJyb3IsIGVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChyZXNCb2R5KSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBzdGF0dXNDb2RlID09IDQwMSA/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UpIDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsImV4cG9ydCBjb25zdCBDb25maWcgPSB7XG4gICAgZW52OiBudWxsLFxuICAgIGh0dHBJbXBsOiBudWxsLFxuICAgIGFwcFR5cGVJRDogbnVsbCxcbiAgICBhcHBWZXJzaW9uOiBudWxsLFxuICAgIHdscElEOiBudWxsLFxuICAgIGFwcHNQYXJ0bmVySUQ6IG51bGwsXG4gICAgcmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuICAgIEFQSTogXCJhcGlcIixcbiAgICBBUFBTOiBcImFwcHNcIixcbiAgICBSRVBPUlRTOiBcInJlcG9ydHNcIlxufTtcblxuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcbiAgICBVQVQ6IHtcbiAgICAgICAgW0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcbiAgICAgICAgW0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG4gICAgfSxcbiAgICBQUk9EOiB7XG4gICAgICAgIFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuICAgICAgICBbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuICAgICAgICBbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuICAgIGVudixcbiAgICBodHRwSW1wbCxcbiAgICBhcHBUeXBlSUQsXG4gICAgYXBwVmVyc2lvbixcbiAgICB3bHBJRCA9IFwiRFdcIixcbiAgICBhcHBzUGFydG5lcklELFxuICAgIHJlZmVycmFsQ29kZSxcbn0pIHtcbiAgICBDb25maWcuZW52ID0gZW52O1xuICAgIENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuICAgIENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG4gICAgQ29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuICAgIENvbmZpZy53bHBJRCA9IHdscElEO1xuICAgIENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcbiAgICBDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIERyaXZlV2VhbHRoRXJyb3IsXG4gICAgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblxuXHRjb25zdHJ1Y3RvcihkYXRhKSB7XG5cdFx0Zm9yIChsZXQga2V5IG9mIFtcblx0XHRcdFwib3JkZXJJRFwiLFxuXHRcdFx0XCJhY2NvdW50SURcIixcblx0XHRcdFwidXNlcklEXCIsXG5cdFx0XHRcImN1bVF0eVwiLFxuXHRcdFx0XCJhY2NvdW50Tm9cIixcblx0XHRcdFwiY29tbWVudFwiLFxuXHRcdFx0XCJjb21taXNzaW9uXCIsXG5cdFx0XHRcImNyZWF0ZWRCeUlEXCIsXG5cdFx0XHRcImNyZWF0ZWRXaGVuXCIsXG5cdFx0XHRcImV4ZWN1dGVkV2hlblwiLFxuXHRcdFx0XCJncm9zc1RyYWRlQW10XCIsXG5cdFx0XHRcImluc3RydW1lbnRJRFwiLFxuXHRcdFx0XCJsZWF2ZXNRdHlcIixcblx0XHRcdFwib3JkZXJOb1wiLFxuXHRcdFx0XCJvcmRlclF0eVwiLFxuXHRcdFx0XCJzaWRlXCIsXG5cdFx0XHRcImF1dG9TdG9wXCIsXG5cdFx0XHRcInN5bWJvbFwiLFxuXHRcdFx0XCJlZmZlY3RpdmVQcmljZVwiLFxuXHRcdF0pIHtcblx0XHRcdHRoaXNba2V5XSA9IGRhdGFba2V5XTtcblx0XHR9XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHRjYW5jZWwoY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke3RoaXMub3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9LCAoKSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQsIHVzZXJJRCwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0sICgpID0+IHtcblx0XHRcdGNiICYmIGNiKG51bGwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBnZXQgU0lERVMoKSB7IHJldHVybiB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fSB9O1xuXG5cdHN0YXRpYyBnZXQgVFlQRVMoKSB7IHJldHVybiB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH0gfTtcblxuXHRzdGF0aWMgZ2V0IFNUQVRVU0VTKCkgeyByZXR1cm4ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9IH1cblxuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklELCB1c2VySUQsIGNiKSB7XG5cdFx0cmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCAoZGF0YSkgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgbmV3IE9yZGVyKGRhdGEpKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblxuXHRzdGF0aWMgY3JlYXRlKHR5cGUsIHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdGluc3RydW1lbnQsXG5cdFx0c2lkZSxcblx0XHRxdHksXG5cdFx0YW1vdW50Q2FzaCxcblx0XHRjb21tZW50LFxuXHRcdGF1dG9TdG9wLFxuXHRcdHByaWNlLFxuXHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHRocm93IG5ldyBFcnJvcihgXCJxdHlcIiBhbmQgXCJhbW91bnRDYXNoXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5gKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkgdGhyb3cgbmV3IEVycm9yKGBMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFwicHJpY2UuXCJgKTtcblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmIGF1dG9TdG9wKSB0aHJvdyBuZXcgRXJyb3IoYFwiYXV0b1N0b3BcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuYCk7XG5cblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5ID8gcXR5IDogdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBhbW91bnRDYXNoID8gYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHR9LFxuXHRcdH0sIChkYXRhKSA9PiB7XG5cdFx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSBmaWxsTWF4UmV0cmllcyA9IDE7XG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gY2IgJiYgY2IobnVsbCwgZGF0YS5vcmRlcklEKTtcblxuXHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRyZXRyaWVzLS07XG5cdFx0XHRcdE9yZGVyLmdldEJ5SUQoZGF0YS5vcmRlcklELCB1c2VySUQsIChlcnIsIG9yZGVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycikgcmV0dXJuIGNiICYmIGNiKGVycik7XG5cdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblxuXHRcdFx0XHRcdGlmIChvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KHtcblx0XHRhY2NvdW50SUQsXG5cdFx0YWNjb3VudE5vLFxuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50VHlwZSxcblx0fSwge1xuXHRcdG9yZGVycyxcblx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0fSwgY2IpIHtcblx0XHRyZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG9yZGVycy5tYXAob3JkZXIgPT4gKHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBvcmRlci5pbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9LCAob3JkZXJSZXN1bHRzKSA9PiB7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCB7XG5cdFx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXG5cdFx0XHRjb25zdCBmaWxsZWRPcmRlcnMgPSBbXTtcblx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRyZWZlcmVuY2VJRDogb3JkZXJzW2lkeF0ucmVmZXJlbmNlSUQsXG5cdFx0XHR9KSk7XG5cdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIGNiICYmIGNiKG51bGwsIG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdHJldHJpZXMtLTtcblxuXHRcdFx0XHRQcm9taXNlLmFsbChcblx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCwgdXNlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChsZXQgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdGlmICghdGhpc1N0YXR1c1xuXHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBjYiAmJiBjYihudWxsLCBvcmRlcnNNYXApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcblx0fVxuXG5cdC8vIGVhY2ggb3JkZXIgaXM6XG5cdC8vIHsgc2lkZSwgcXR5LCBtYXJrZXRQcmljZSwgcmVmZXJlbmNlSUQgfVxuXHQvLyBjb21taXNzaW9uIHNjaGVkdWxlIGlzOlxuXHQvLyB7IGJhc2VSYXRlLCBiYXNlU2hhcmVzLCBleGNlc3NSYXRlLCBmcmFjdGlvbmFsUmF0ZSwgc2hhcmVBbW91bnRSb3VuZGluZywgc3Vic2NyaXB0aW9uLCBiYXNrZXRTY2hlZHVsZSwgcGFzc1Rocm91Z2hGZWVzIH1cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihvcmRlcnMsIGNvbW1pc3Npb25TY2hlZHVsZSkge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZSA9IHVuZGVmaW5lZDtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDAsIHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cbiAgICBzdGF0aWMgZ2V0IEFMTE9XRURfVFlQRVMoKSB7IHJldHVybiB7XG4gICAgICAgIERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuICAgICAgICBXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuICAgICAgICBERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcbiAgICAgICAgdXNlcklELFxuICAgICAgICBhY2NvdW50SUQsXG4gICAgICAgIGxhbmd1YWdlLFxuICAgICAgICBtaW5BbW91bnQsXG4gICAgICAgIG1heEFtb3VudCxcbiAgICAgICAgYW1vdW50LFxuICAgICAgICBmaWx0ZXJzID0ge30sXG4gICAgfSA9IHt9LCBjYikge1xuICAgICAgICBpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkgdGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG4gICAgICAgIGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG4gICAgICAgIGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG4gICAgICAgIGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG4gICAgICAgIGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG4gICAgICAgIGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBob3N0OiBIT1NUUy5BUFBTLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBlbmRwb2ludDogYC9mdW5kaW5nL3N0YXR1c2AsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEuZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIGdldFByaWNpbmcgKHVzZXJJRCwgY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9LCBkYXRhID0+IHtcblx0XHRcdGNvbnN0IHByaWNpbmcgPSBkYXRhLmRhdGEubWFwKGZ1bmN0aW9uIChwcmljaW5nKSB7XG5cdFx0XHRcdHJldHVybiBbXS5jb25jYXQocHJpY2luZylcblx0XHRcdFx0LnNvcnQoKHgsIHkpID0+IHguYW1vdW50IC0geS5hbW91bnQpXG5cdFx0XHRcdC5tYXAocHJpY2UgPT4gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRwcmljZSxcblx0XHRcdFx0XHR7IGFtb3VudDogTnVtYmVyKHByaWNlLmFtb3VudCAvIDEwMCkgfSxcblx0XHRcdFx0KSk7XG5cdFx0XHR9KVswXTtcblxuXHRcdFx0Y2IgJiYgY2IobnVsbCwgcHJpY2luZyk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXG4gICAgc3RhdGljIGdldFRyYW5zYWN0aW9ucyh1c2VySUQsIGFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlLCBjYikge1xuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9XG4gICAgICAgICAgICBgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG4gICAgICAgICAgICArIGAmUmVwb3J0TmFtZT1GaW5UcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uIHx8IFtdKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQbGFjZWRPcmRlcnModXNlcklELCBhY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuICAgICAgICAgICAgKyBgJlJlcG9ydE5hbWU9T3JkZXJUcmFuc2BcbiAgICAgICAgICAgICsgYCZSZXBvcnRGb3JtYXQ9SlNPTmBcbiAgICAgICAgICAgICsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcbiAgICAgICAgICAgICsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuICAgICAgICAgICAgKyBgJkxhbmd1YWdlSUQ9ZW5fVVNgO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLnRyYW5zYWN0aW9uKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdGF0ZW1lbnRzKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMmA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKHVzZXJJRCwgYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUsIGNiKSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID1cbiAgICAgICAgICAgIGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcbiAgICAgICAgICAgICsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG4gICAgICAgICAgICArIGAmdHlwZT0wMWA7XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRUYXhEb2N1bWVudHModXNlcklELCBhY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgY2IpIHtcbiAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPVxuICAgICAgICAgICAgYD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuICAgICAgICAgICAgKyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcbiAgICAgICAgICAgICsgYCZ0eXBlPTAzYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwodXNlcklELCBhY2NvdW50SUQsIGZpbGVLZXksIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEudXJsKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9jb3VudHJpZXNgLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJpbnN0cnVtZW50SURcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgXCJleGNoYW5nZUlEXCIsXG4gICAgICAgICAgICBcImluc3RydW1lbnRUeXBlSURcIixcbiAgICAgICAgICAgIFwib3JkZXJTaXplTWF4XCIsXG4gICAgICAgICAgICBcIm9yZGVyU2l6ZU1pblwiLFxuICAgICAgICAgICAgXCJvcmRlclNpemVTdGVwXCIsXG4gICAgICAgICAgICBcInJhdGVBc2tcIixcbiAgICAgICAgICAgIFwicmF0ZUJpZFwiLFxuICAgICAgICAgICAgXCJyYXRlUHJlY2lzaW9uXCIsXG4gICAgICAgICAgICBcInN5bWJvbFwiLFxuICAgICAgICAgICAgXCJ0cmFkZVN0YXR1c1wiLFxuICAgICAgICAgICAgXCJ1cmxJbWFnZVwiLFxuICAgICAgICAgICAgXCJ1cmxJbnZlc3RvclwiLFxuICAgICAgICAgICAgXCJjaGFpa2luUGdyXCIsXG4gICAgICAgICAgICBcInByaW9yQ2xvc2VcIixcbiAgICAgICAgICAgIFwibWFya2V0U3RhdGVcIixcbiAgICAgICAgICAgIFwiZnVuZGFtZW50YWxEYXRhTW9kZWxcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBUUkFERV9TVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgSU5BQ1RJVkU6IFwiMFwiLFxuICAgICAgICBBQ1RJVkU6IFwiMVwiLFxuICAgICAgICBDTE9TRUQ6IFwiMlwiLFxuICAgIH0gfVxuXG4gICAgc3RhdGljIGdldCBDSEFSVF9DT01QUkVTU0lPTlMoKSB7IHJldHVybiB7XG4gICAgICAgIERBWTogMCxcbiAgICAgICAgTUlOVVRFXzE6IDEsXG4gICAgICAgIE1JTlVURV81OiA0LFxuICAgICAgICBNSU5VVEVfMzA6IDgsXG4gICAgICAgIEhPVVI6IDksXG4gICAgICAgIFdFRUs6IDEwXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgc3ltYm9scyA9IHN5bWJvbDtcbiAgICAgICAgaWYgKHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIpIHN5bWJvbHMgPSBbc3ltYm9sXTtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbCR7c3ltYm9scy5sZW5ndGggPiAxID8gXCJzXCIgOiBcIlwifT0ke3N5bWJvbHMuam9pbignLCcpfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gZGF0YVswXSA6IGRhdGEpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEJ5SUQoaWQsIGluY2x1ZGVGdW5kYW1lbnRhbHMgPSB0cnVlLCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gJz9vcHRpb25zPUYnIDogJyd9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IEluc3RydW1lbnQoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cywgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSB0cmFkZVN0YXR1cztcbiAgICAgICAgICAgIHRyYWRlU3RhdHVzID0gXCItMVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRhdGEubWFwKGlucyA9PiBuZXcgSW5zdHJ1bWVudChpbnMpKSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2VhcmNoKGNyaXRlcmlhLCBjYikge1xuICAgICAgICBsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcbiAgICAgICAgaWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcbiAgICAgICAgaWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLm1hcChpbnMgPT4gbmV3IEluc3RydW1lbnQoaW5zKSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgZ2V0UXVvdGUoY2IpIHtcbiAgICAgICAgcmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wsIGNiKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sLCBjYikge1xuICAgICAgICBsZXQgdXNlclBhc3NlZE9uZVN5bWJvbCA9IGZhbHNlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkge1xuICAgICAgICAgICAgdXNlclBhc3NlZE9uZVN5bWJvbCA9IHRydWU7XG4gICAgICAgICAgICBzeW1ib2wgPSBbc3ltYm9sXTtcbiAgICAgICAgfVxuICAgICAgICBzeW1ib2wgPSBzeW1ib2wubWFwKHN5bSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2wuam9pbihcIixcIil9YCxcbiAgICAgICAgICAgIHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuICAgICAgICAgICAgYWRkbEhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcInRleHQvcGxhaW5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcbiAgICAgICAgICAgIGZvciAobGV0IHJhd1F1b3RlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICBvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuICAgICAgICAgICAgICAgICAgICBiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG4gICAgICAgICAgICAgICAgICAgIGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZXJQYXNzZWRPbmVTeW1ib2wpIG9iaiA9IG9ialtzeW1ib2xbMF1dO1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgb2JqKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRCwgY29tcHJlc3Npb24pIHtcbiAgICAgICAgbGV0IGNiLCB0aW1lUGFyYW1zO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRlRW5kICAgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcbiAgICAgICAgICAgIHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuICAgICAgICAgICAgY2IgPSBhcmd1bWVudHNbNF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG4gICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1szXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG4gICAgICAgIH0sIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkYXRhLmRhdGEuc3BsaXQoXCJ8XCIpKTtcbiAgICAgICAgfSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcblx0XHRmb3IgKGxldCBrZXkgb2YgW1xuICAgICAgICAgICAgXCJjb3VudHJ5SURcIixcbiAgICAgICAgICAgIFwiZW1haWxBZGRyZXNzXCIsXG4gICAgICAgICAgICBcImZpcnN0TmFtZVwiLFxuICAgICAgICAgICAgXCJsYW5ndWFnZUlEXCIsXG4gICAgICAgICAgICBcImxhc3ROYW1lXCIsXG4gICAgICAgICAgICBcInBob25lTnVtYmVyXCIsXG4gICAgICAgICAgICBcInJlZmVycmFsQ29kZVwiLFxuICAgICAgICAgICAgXCJ1c2VySURcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIixcbiAgICAgICAgICAgIFwid2xwSURcIixcbiAgICAgICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgICAgICBcInVzQ2l0aXplblwiLFxuICAgICAgICAgICAgXCJsYXN0TG9naW5XaGVuXCIsXG4gICAgICAgICAgICBcImNpdGl6ZW5zaGlwXCIsXG5cdFx0XHRcImFkZHJlc3NMaW5lMVwiLFxuXHRcdFx0XCJhZGRyZXNzTGluZTJcIixcblx0XHRcdFwiY2l0eVwiLFxuXHRcdFx0XCJzdGF0ZVByb3ZpbmNlXCIsXG5cdFx0XHRcInppcFBvc3RhbENvZGVcIixcbiAgICAgICAgXSkge1xuICAgICAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuICAgIGdldEFjY291bnRzKGNiKSB7XG4gICAgICAgIHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQsIGNiKTtcbiAgICB9XG5cblx0dXBsb2FkRG9jdW1lbnQoZmlsZSwgdHlwZSwgY2IpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUsIGNiKTtcbiAgICB9XG5cbiAgICAvLyBnZXRTZXR0aW5ncyh1c2VySUQsIGNiKVxuICAgIC8vIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYilcblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRCwga2V5LCBjYikge1xuICAgIFx0aWYgKCFjYikge1xuXHRcdFx0Ly8gY2FsbGJhY2sgYmVjb21lcyBzZWNvbmQgYXJnIHdoZW4gaXQncyB1bmRlZmluZWRcblx0XHRcdF9nZXRBbGxTZXR0aW5ncyh1c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh1c2VySUQsIGtleSwgY2IpXG5cdFx0fVxuICAgIH1cblxuXHQvLyBnZXRTZXR0aW5ncyhrZXksIGNiKVxuXHQvLyBnZXRTZXR0aW5ncyhjYilcbiAgICBnZXRTZXR0aW5ncygpIHtcbiAgICBcdGNvbnN0IFsga2V5LCBjYiBdID0gYXJndW1lbnRzO1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcblx0XHRcdC8vIGNhbGxiYWNrIGJlY29tZXMgc2Vjb25kIGFyZyB3aGVuIGl0J3MgdW5kZWZpbmVkXG5cdFx0XHRfZ2V0QWxsU2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5LCBjYik7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuICAgIFx0X3NldFNldHRpbmcodXNlcklELCBrZXksIHZhbHVlLCBjYik7XG5cdH1cblxuICAgIHNldFNldHRpbmcoa2V5LCB2YWx1ZSwgY2IpIHtcbiAgICBcdF9zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlLCBjYik7XG4gICAgfVxuXG4gICAgdW5zZXRTZXR0aW5nKGtleSwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBnZXRTdGF0dXMoY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuICAgICAgICAgICAgc2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBTVEFUVVNFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEVORElORzogMSxcbiAgICAgICAgQVBQUk9WRUQ6IDIsXG4gICAgICAgIFJFSkVDVEVEOiAzLFxuICAgICAgICBSRVZPS0VEOiA0LFxuICAgICAgICBDTE9TRUQ6IDUsXG4gICAgfSB9XG5cbiAgICBzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklELCBjYikge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG4gICAgICAgICAgICBzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgbmV3IFVzZXIoZGF0YSkpO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2IpIHtcbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcbiAgICAgICAgICAgICAgICBhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG4gICAgICAgICAgICAgICAgb3NUeXBlOiBcInVua25vd25cIixcbiAgICAgICAgICAgICAgICBvc1ZlcnNpb246IFwidW5rbm93blwiLFxuICAgICAgICAgICAgICAgIHNjclJlczogXCJ1bmtub3duXCIsXG4gICAgICAgICAgICAgICAgaXBBZGRyZXNzOiBcInVua25vd25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgU2Vzc2lvbnMuc2F2ZShkYXRhLnVzZXJJRCwgZGF0YS5zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgIFVzZXIuZ2V0QnlVc2VySUQoZGF0YS51c2VySUQsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2IgJiYgY2IoZXJyKTtcbiAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWUsIGNiKSB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCBmYWxzZSk7XG4gICAgICAgIH0sIChlcnIsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHJldHVybiBjYiAmJiBjYihudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIGNiICYmIGNiKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoe1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICByZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuICAgICAgICB1dG1DYW1wYWlnbixcbiAgICAgICAgdXRtQ29udGVudCxcbiAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICB1dG1Tb3VyY2UsXG4gICAgICAgIHV0bVRlcm0sXG4gICAgfSwgbG9naW5BdXRvbWF0aWNhbGx5ID0gdHJ1ZSwgY2IpIHtcbiAgICAgICAgaWYgKCFjYikge1xuICAgICAgICAgICAgY2IgPSBsb2dpbkF1dG9tYXRpY2FsbHk7XG4gICAgICAgICAgICBsb2dpbkF1dG9tYXRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3MxOiBlbWFpbCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZUlELFxuICAgICAgICAgICAgICAgIHdscElEOiBDb25maWcud2xwSUQsXG4gICAgICAgICAgICAgICAgcmVmZXJyYWxDb2RlLFxuICAgICAgICAgICAgICAgIHV0bUNhbXBhaWduLFxuICAgICAgICAgICAgICAgIHV0bUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgdXRtTWVkaXVtLFxuICAgICAgICAgICAgICAgIHV0bVNvdXJjZSxcbiAgICAgICAgICAgICAgICB1dG1UZXJtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbiAgICB9XG5cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGVcblx0fSwgY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlXG5cdFx0XHR9LFxuXHRcdH0sIGRhdGEgPT4ge1xuXHRcdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdFx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xuXHR9XG5cblx0c3RhdGljIGdldCBET0NVTUVOVF9UWVBFUygpIHsgcmV0dXJuIHtcbiAgICAgICAgUEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcbiAgICB9IH1cblxuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklELCBmaWxlLCB0eXBlLCBjYikge1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL2RvY3VtZW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSwgZGF0YSA9PiB7XG5cdFx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0XHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG5cdH1cblx0XG5cdGxpc3RDcmVkaXRDYXJkcyhjYikge1xuICAgIFx0cmV0dXJuIF9saXN0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQsIGNiKTtcblx0fVxuXHRcblx0c3RhdGljIGxpc3RDcmVkaXRDYXJkcyh1c2VySUQsIGNiKSB7XG4gICAgXHRyZXR1cm4gX2xpc3RDcmVkaXRDYXJkcyh1c2VySUQsIGNiKTtcblx0fVxuXHRcblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW4sIGNiKSB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkVG9rZW4sIGNiKTtcblx0fVxuXHRcblx0c3RhdGljIGFkZENyZWRpdENhcmQodXNlcklELCBjYXJkVG9rZW4sIGNiKSB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZFRva2VuLCBjYik7XG5cdH1cblx0XG5cdHJlbW92ZUNyZWRpdENhcmQoY2FyZElELCBjYikge1xuIFx0XHRyZXR1cm4gX3JlbW92ZUNyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRJRCwgY2IpO1xuXHR9XG5cdFxuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRJRCwgY2IpIHtcblx0XHRyZXR1cm4gX3JlbW92ZUNyZWRpdENhcmQodXNlcklELCBjYXJkSUQsIGNiKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfbGlzdENyZWRpdENhcmRzKHVzZXJJRCwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKVxuXHR9LCBkYXRhID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfYWRkQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRUb2tlbiwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keTogeyBjYXJkVG9rZW4gfVxuXHR9LCBkYXRhID0+IHtcblx0XHRjYiAmJiBjYihudWxsLCBkYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQsIGNhcmRJRCwgY2IpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRClcblx0fSwgZGF0YSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCwgZGF0YSk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuZnVuY3Rpb24gX2dldFNldHRpbmdzICh1c2VySUQsIGtleSwgY2IpIHtcblx0cmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHR9LCAoZGF0YSkgPT4ge1xuXHRcdGNiICYmIGNiKG51bGwsIGRhdGEudmFsdWUpO1xuXHR9LCBlcnIgPT4gY2IgJiYgY2IoZXJyKSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRBbGxTZXR0aW5ncyAodXNlcklELCBjYikge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0fSwgKGRhdGEpID0+IHtcblx0XHRsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuXHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdH1cblx0XHRjYiAmJiBjYihudWxsLCBmb3JtYXR0ZWREYXRhKTtcblx0fSwgZXJyID0+IGNiICYmIGNiKGVycikpO1xufVxuXG5mdW5jdGlvbiBfc2V0U2V0dGluZyAodXNlcklELCBrZXksIHZhbHVlLCBjYikge1xuXHRyZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keToge1xuXHRcdFx0a2V5LCB2YWx1ZSxcblx0XHR9LFxuXHR9LCAoKSA9PiB7XG5cdFx0Y2IgJiYgY2IobnVsbCk7XG5cdH0sIGVyciA9PiBjYiAmJiBjYihlcnIpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==