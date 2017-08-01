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
		HOSTS: _Config.HOSTS,
	
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
	
	/**
	 * @class Account
	 * @description An account belonging to a User. Use the constructor if you have a flat JSON object that you would like to access instance methods on.
	 * @param {object} data - See response at http://developer.drivewealth.com/docs/accounts_get
	 */
	var Account = function () {
		function Account(data) {
			_classCallCheck(this, Account);
	
			Object.assign(this, data);
		}
	
		/**
	  * @name BLOTTER_TYPES
	  * @memberof Account
	  * @constant
	  * @property {string} CASH
	  * @property {string} ORDERS
	  * @property {string} TRANSACTIONS
	  * @property {string} POSITIONS
	  * @property {string} ALL
	  */
	
	
		/**
	  * @name STATUSES
	  * @memberof Account
	  * @constant
	  * @property {number} PENDING
	  * @property {number} OPEN
	  * @property {number} OPEN_NO_NEW_TRADES
	  * @property {number} CLOSED
	  */
	
	
		/**
	  * @name TYPES
	  * @memberof Account
	  * @constant
	  * @property {number} PRACTICE
	  * @property {number} LIVE
	  */
	
	
		_createClass(Account, [{
			key: "getBlotter",
	
	
			/**
	   * @instance
	   */
			value: function getBlotter() {
				var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	
				return Account.getBlotter(this.userID, this.accountID, type);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getPerformance",
	
	
			/**
	   * @param {Date} startDate
	   * @param {Date} endDate
	   */
			/**
	    * @param {string} period
	    */
			/**
	    * @description Get today's performance
	    */
			value: function getPerformance() {
				return Account.getPerformance.apply(Account, [this.userID, this.accountID].concat(Array.prototype.slice.call(arguments)));
			}
	
			/**
	   * @param {Date} startDate
	   * @param {Date} endDate
	   */
			/**
	    * @param {string} period
	    */
			/**
	    * @description Get today's performance
	    */
	
		}, {
			key: "placeOrder",
	
	
			/**
	   * @instance
	   */
			value: function placeOrder(type, data) {
				var parentDetails = {
					accountID: this.accountID,
					accountNo: this.accountNo,
					accountType: this.accountType,
					userID: this.userID
				};
	
				return _Order2.default.create(type, parentDetails, data);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getFundingMethods",
			value: function getFundingMethods() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
				options.userID = this.userID;
				options.accountID = this.accountID;
				return _Funding2.default.getFundingMethods(options);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getTransactions",
			value: function getTransactions(startDate, endDate) {
				return _Reports2.default.getTransactions(this.userID, this.accountNo, startDate, endDate);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getPlacedOrders",
			value: function getPlacedOrders(startDate, endDate) {
				return _Reports2.default.getPlacedOrders(this.userID, this.accountNo, startDate, endDate);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getStatements",
			value: function getStatements(startDate, endDate) {
				return _Reports2.default.getStatements(this.userID, this.accountID, startDate, endDate);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getTaxDocuments",
			value: function getTaxDocuments(startDate, endDate) {
				return _Reports2.default.getTaxDocuments(this.userID, this.accountID, startDate, endDate);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getTradeConfirms",
			value: function getTradeConfirms(startDate, endDate) {
				return _Reports2.default.getTradeConfirms(this.userID, this.accountID, startDate, endDate);
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "generateDownloadURL",
			value: function generateDownloadURL(fileKey) {
				return _Reports2.default.generateDownloadURL(this.userID, this.accountID, fileKey);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "extractIDs",
			value: function extractIDs(options) {
				return Object.assign({}, options, {
					userID: this.userID,
					accountID: this.accountID
				});
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "getSubscription",
			value: function getSubscription() {
				return Account.getSubscription(this.extractIDs());
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "addSubscription",
			value: function addSubscription(options) {
				return Account.addSubscription(this.extractIDs(options));
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "updateSubscription",
			value: function updateSubscription(options) {
				return Account.updateSubscription(this.extractIDs(options));
			}
	
			/**
	   * @instance
	   */
	
		}, {
			key: "cancelSubscription",
			value: function cancelSubscription() {
				return Account.cancelSubscription(this.extractIDs());
			}
		}], [{
			key: "getBlotter",
			value: function getBlotter(userID, accountID) {
				var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/accountSummary/" + ("" + accountID + (type ? "/" + type : "")),
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref) {
					var body = _ref.body;
	
					if (body.orders) {
						body.orders = body.orders.map(function (order) {
							return new _Order2.default(order);
						});
					}
					return type ? body[type] : body;
				});
			}
		}, {
			key: "getPerformance",
			value: function getPerformance(userID, accountID) {
				var queryString = "";
				if (arguments.length === 4) {
					var startDate = arguments[2];
					var endDate = arguments[3];
					queryString += "/dateRange?";
					queryString += "startDate=" + startDate.getFullYear() + ("0" + (startDate.getMonth() + 1)).slice(-2) + ("0" + startDate.getDate()).slice(-2);
					queryString += "&endDate=" + endDate.getFullYear() + ("0" + (endDate.getMonth() + 1)).slice(-2) + ("0" + endDate.getDate()).slice(-2);
				} else if (arguments.length === 3) {
					queryString += "/history?period=" + arguments[2];
				}
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/accountPerformance/" + accountID + queryString,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref2) {
					var body = _ref2.body;
					return body.performance;
				});
			}
		}, {
			key: "getListForUserID",
			value: function getListForUserID(userID) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/accounts",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref3) {
					var body = _ref3.body;
					return body.map(function (account) {
						return new Account(account);
					});
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "create",
			value: function create(userID, type, data) {
				if (type === Account.TYPES.PRACTICE) {
					data = {
						userID: userID,
						responseType: "full",
						tranAmount: data
					};
				}
	
				return (0, _request2.default)({
					method: "POST",
					endpoint: type === Account.TYPES.PRACTICE ? "/signups/practice" : "/signups/live",
					sessionKey: _Sessions2.default.get(userID),
					body: data
				}).then(function (_ref4) {
					var body = _ref4.body;
					return body;
				});
			}
	
			/**
	   * @param {string} method
	   * @param {object} options
	   */
	
		}, {
			key: "changeSubscription",
			value: function changeSubscription(method, _ref5) {
				var userID = _ref5.userID,
				    accountID = _ref5.accountID,
				    planID = _ref5.planID,
				    paymentID = _ref5.paymentID;
	
				return (0, _request2.default)({
					method: method,
					endpoint: "/users/" + userID + "/accounts/" + accountID + "/subscriptions",
					sessionKey: _Sessions2.default.get(userID),
					body: !method.startsWith("P") ? undefined : _defineProperty({
						planID: planID
					}, paymentID.startsWith("card") ? "cardID" : "bankAccountID", paymentID)
				}).then(function (_ref7) {
					var body = _ref7.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getSubscription",
			value: function getSubscription(options) {
				return Account.changeSubscription("GET", options);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "addSubscription",
			value: function addSubscription(options) {
				return Account.changeSubscription("POST", options);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "updateSubscription",
			value: function updateSubscription(options) {
				return Account.changeSubscription("PUT", options);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "cancelSubscription",
			value: function cancelSubscription(options) {
				return Account.changeSubscription("DELETE", options);
			}
		}]);
	
		return Account;
	}();
	
	Account.BLOTTER_TYPES = {
		CASH: "cash",
		ORDERS: "orders",
		TRANSACTIONS: "transactions",
		POSITIONS: "positions",
		ALL: null
	};
	Account.STATUSES = {
		PENDING: 1,
		OPEN: 2,
		OPEN_NO_NEW_TRADES: 3,
		CLOSED: 9
	};
	Account.TYPES = {
		PRACTICE: 1,
		LIVE: 2
	};
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
	
	/**
	 * @function request
	 * @description Normally, it is unnecessary to use this function and this is for internal use only. Call request() if you need to make a custom API call that is not covered by another function.
	 * @param {object} options
	 * @param {string} options.method
	 * @param {string} options.endpoint
	 * @param {string} options.sessionKey
	 * @param {string} options.body
	 * @param {Object.<string, string>} options.addlHeaders
	 * @param {string} options.host - One of Config.HOSTS
	 * @returns {Promise.<{body: string, statusCode: number, headers: Object<string, string>}>}
	 */
	function request(_ref) {
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
		for (var _header in addlHeaders) {
			headers[_header] = addlHeaders[_header];
		}
	
		endpoint = _Config.Config.env[host] + endpoint;
	
		if (headers["Content-Type"] === "application/json") body = JSON.stringify(body);
	
		return new Promise(function (resolve, reject) {
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
					resolve({
						body: resBody,
						statusCode: statusCode,
						headers: resHeaders
					});
				} else {
					var errorMessage = void 0;
					if (resBody) {
						errorMessage = resBody.message || JSON.stringify(resBody);
					}
					var error = statusCode === 401 ? new _Error.DriveWealthSessionError(errorMessage, resBody, statusCode, resHeaders) : new _Error.DriveWealthError(errorMessage, resBody, statusCode, resHeaders);
					reject(error);
				}
			});
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
	
	/**
	 * @namespace Config
	 */
	var Config = exports.Config = {
		env: null,
		httpImpl: null,
		appTypeID: null,
		appVersion: null,
		wlpID: null,
		appsPartnerID: null,
		referralCode: null
	};
	
	/**
	 * Servers to send a request to
	 * @name HOSTS
	 * @property {string} API
	 * @property {string} APPS
	 * @property {string} REPORTS
	 * @memberof Config
	 * @constant
	 */
	var HOSTS = exports.HOSTS = {
		API: "api",
		APPS: "apps",
		REPORTS: "reports"
	};
	
	/**
	 * Servers to send a request to
	 * @name ENVIRONMENTS
	 * @property {object} UAT
	 * @property {object} PROD
	 * @memberof Config
	 * @constant
	 */
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
	
		function DriveWealthError(message, body, statusCode, headers) {
			_classCallCheck(this, DriveWealthError);
	
			var _this = _possibleConstructorReturn(this, (DriveWealthError.__proto__ || Object.getPrototypeOf(DriveWealthError)).call(this, message));
	
			_this.body = body;
			_this.statusCode = statusCode;
			_this.headers = headers;
			return _this;
		}
	
		return DriveWealthError;
	}(_extendableErrorClass2.default);
	
	var DriveWealthSessionError = exports.DriveWealthSessionError = function (_ExtendableError2) {
		_inherits(DriveWealthSessionError, _ExtendableError2);
	
		function DriveWealthSessionError(message, body, statusCode, headers) {
			_classCallCheck(this, DriveWealthSessionError);
	
			var _this2 = _possibleConstructorReturn(this, (DriveWealthSessionError.__proto__ || Object.getPrototypeOf(DriveWealthSessionError)).call(this, message));
	
			_this2.body = body;
			_this2.statusCode = statusCode;
			_this2.headers = headers;
			return _this2;
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
	
	var _Error = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SEC_FEE_RATE = 0.0000231;
	var SEC_FEE_MIN = 0.01;
	var SEC_FEE_MAX = Number.POSITIVE_INFINITY;
	var TAF_FEE_RATE = 0.000119;
	var TAF_FEE_MIN = 0.01;
	var TAF_FEE_MAX = 5.95;
	
	/**
	 * @class Order
	 * @description An order created for an Account. Use the constructor if you have a flat JSON object that you would like to access instance methods on.
	 * @param {object} data - See response at http://developer.drivewealth.com/docs/get_market
	 */
	var Order = function () {
		function Order(data) {
			_classCallCheck(this, Order);
	
			Object.assign(this, data);
			this.rejectionReason = data.ordRejReason;
			this.status = data.ordStatus;
			this.type = data.ordType || data.orderType;
			this.price = data.stopPrice || data.limitPrice || data.price;
		}
	
		/**
	  * @name SIDES
	  * @memberof Order
	  * @constant
	  * @property {string} BUY
	  * @property {string} SELL
	  */
	
	
		/**
	  * @name TYPES
	  * @memberof Order
	  * @constant
	  * @property {string} MARKET
	  * @property {string} LIMIT
	  * @property {string} STOP
	  */
	
	
		/**
	  * @name STATUSES
	  * @memberof Order
	  * @constant
	  * @property {string} NEW
	  * @property {string} PARTIAL_FILL
	  * @property {string} FILL
	  * @property {string} CANCELED
	  * @property {string} REJECTED
	  */
	
	
		_createClass(Order, [{
			key: "cancel",
	
	
			/**
	   * @instance
	   */
			value: function cancel() {
				return Order.cancel(this.orderID);
			}
	
			/**
	   * @static
	   */
	
		}], [{
			key: "cancel",
			value: function cancel(orderID) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/orders/" + orderID,
					sessionKey: _Sessions2.default.getAny()
				}).then(function () {
					return undefined;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getByID",
			value: function getByID(orderID) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/orders/" + orderID,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref) {
					var body = _ref.body,
					    statusCode = _ref.statusCode,
					    headers = _ref.headers;
	
					if (body.ordRejReason !== undefined) {
						return Promise.reject(new _Error.DriveWealthError(body.ordRejReason, body, statusCode, headers));
					}
					return new Order(body);
				});
			}
	
			/**
	   * @param {string} type
	   * @param {Object} parentInfo
	   * @param {Object} options
	   * @return If waitForFill is true, an Order will be returned. Otherwise, an orderID will be returned.
	   */
	
		}, {
			key: "create",
			value: function create(type, _ref2, _ref3) {
				var accountID = _ref2.accountID,
				    accountNo = _ref2.accountNo,
				    userID = _ref2.userID,
				    accountType = _ref2.accountType;
				var _ref3$order = _ref3.order,
				    instrument = _ref3$order.instrument,
				    side = _ref3$order.side,
				    qty = _ref3$order.qty,
				    amountCash = _ref3$order.amountCash,
				    comment = _ref3$order.comment,
				    autoStop = _ref3$order.autoStop,
				    price = _ref3$order.price,
				    _ref3$waitForFill = _ref3.waitForFill,
				    waitForFill = _ref3$waitForFill === undefined ? true : _ref3$waitForFill,
				    _ref3$fillRetryInterv = _ref3.fillRetryInterval,
				    fillRetryInterval = _ref3$fillRetryInterv === undefined ? 1000 : _ref3$fillRetryInterv,
				    _ref3$fillMaxRetries = _ref3.fillMaxRetries,
				    fillMaxRetries = _ref3$fillMaxRetries === undefined ? 10 : _ref3$fillMaxRetries;
	
				if (amountCash && qty) {
					throw new Error("\"qty\" and \"amountCash\" are mutually exclusive.");
				}
	
				if (type !== Order.TYPES.MARKET) {
					fillMaxRetries = 2;
	
					if (!price) {
						throw new Error("Limit and stop orders require a \"price.\"");
					}
	
					if (autoStop) {
						throw new Error("\"autoStop\" is only allowed for market orders.");
					}
				}
	
				return (0, _request2.default)({
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
						orderQty: qty || undefined,
						amountCash: amountCash || undefined,
						comment: comment,
						autoStop: autoStop,
						price: type === Order.TYPES.STOP ? price : undefined,
						limitPrice: type === Order.TYPES.LIMIT ? price : undefined
					}
				}).then(function (_ref4) {
					var body = _ref4.body;
	
					if (!waitForFill) return body.orderID;
	
					return new Promise(function (resolve, reject) {
						var retries = fillMaxRetries;
						var checkStatus = function checkStatus() {
							retries -= 1;
							Order.getByID(body.orderID).then(function (order) {
								var isFilled = order.status !== Order.STATUSES.NEW && order.status !== Order.STATUSES.PARTIAL_FILL;
	
								if (retries <= 0 || isFilled) {
									return resolve(order);
								}
								setTimeout(checkStatus, fillRetryInterval);
							}, function (error) {
								if (error.body.code === 404 && retries > 0) {
									return setTimeout(checkStatus, fillRetryInterval);
								}
								return reject(error);
							});
						};
						setTimeout(checkStatus, fillRetryInterval);
					});
				});
			}
	
			/**
	   * @param {Object} parentInfo
	   * @param {Object} options
	   * @return {Promise<Object.<string, Object>>} An object will be resolved with each key set to a referenceID passed with an order.
	   */
	
		}, {
			key: "createCart",
			value: function createCart(_ref5, _ref6) {
				var accountID = _ref5.accountID,
				    accountNo = _ref5.accountNo,
				    userID = _ref5.userID,
				    accountType = _ref5.accountType;
				var orders = _ref6.orders,
				    _ref6$waitForFill = _ref6.waitForFill,
				    waitForFill = _ref6$waitForFill === undefined ? true : _ref6$waitForFill,
				    _ref6$fillRetryInterv = _ref6.fillRetryInterval,
				    fillRetryInterval = _ref6$fillRetryInterv === undefined ? 500 : _ref6$fillRetryInterv,
				    _ref6$fillMaxRetries = _ref6.fillMaxRetries,
				    fillMaxRetries = _ref6$fillMaxRetries === undefined ? 10 : _ref6$fillMaxRetries;
	
				return (0, _request2.default)({
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
				}).then(function (_ref7) {
					var body = _ref7.body;
	
					var orderResults = body;
					var ordersMap = orderResults.reduce(function (acc, next, idx) {
						return Object.assign({}, acc, _defineProperty({}, orders[idx].referenceID, next));
					}, {});
	
					if (!waitForFill) return ordersMap;
	
					return new Promise(function (resolve, reject) {
						var retries = fillMaxRetries;
						orderResults = orderResults.map(function (order, idx) {
							return Object.assign({}, order, {
								referenceID: orders[idx].referenceID
							});
						});
						var checkStatus = function checkStatus() {
							if (retries <= 0) return resolve(orderResults);
							retries -= 1;
	
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
									return resolve(ordersMap);
								}
							});
						};
						setTimeout(checkStatus, fillRetryInterval);
					});
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "estimateCommission",
			value: function estimateCommission(orders, commissionSchedule) {
				orders = Array.isArray(orders) ? orders : [orders];
				var total = 0;
				var totalFeesOnly = 0;
				var basketPrice = void 0;
	
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
						var _order = _step2.value;
						var _qty = _order.qty,
						    _marketPrice = _order.marketPrice,
						    _side = _order.side,
						    _referenceID = _order.referenceID;
	
	
						var orderPrice = _qty < 1 ? commissionSchedule.fractionalRate : commissionSchedule.baseRate;
						orderPrice += {
							NEAREST: Math.round,
							CEIL: Math.ceil,
							FLOOR: Math.floor
						}[commissionSchedule.shareAmountRounding](Math.max(0, _qty - commissionSchedule.baseShares)) * commissionSchedule.excessRate;
	
						var secFee = 0;
						var tafFee = 0;
						if (commissionSchedule.passThroughFees && _side === Order.SIDES.SELL) {
							tafFee = _qty * _marketPrice * TAF_FEE_RATE;
							tafFee = Math.min(TAF_FEE_MAX, tafFee);
							tafFee = Math.max(TAF_FEE_MIN, tafFee);
	
							if (_qty >= 1) {
								secFee = Math.floor(_qty) * _marketPrice * SEC_FEE_RATE;
								secFee = Math.min(SEC_FEE_MAX, secFee);
								secFee = Math.max(SEC_FEE_MIN, secFee);
							}
						}
	
						var orderTotal = orderPrice + secFee + tafFee;
						total += orderTotal;
						totalFeesOnly += secFee + tafFee;
	
						byOrder[_referenceID] = {
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
		}]);
	
		return Order;
	}();
	
	Order.SIDES = {
		BUY: "B",
		SELL: "S"
	};
	Order.TYPES = {
		MARKET: "1",
		LIMIT: "2",
		STOP: "3"
	};
	Order.STATUSES = {
		NEW: "0",
		PARTIAL_FILL: "1",
		FILL: "2",
		CANCELED: "4",
		REJECTED: "8"
	};
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
	
	/**
	 * @class Funding
	 * @description Static class for retrieving funding information.
	 */
	var Funding = function () {
		function Funding() {
			_classCallCheck(this, Funding);
		}
	
		_createClass(Funding, null, [{
			key: "getFundingMethods",
	
	
			/**
	   * @param {object} options
	   */
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
	
				if (amount && (minAmount || maxAmount)) {
					throw new Error("\"amount\" is not compatible with \"minAmount\" or \"maxAmount.\"");
				}
	
				var queryString = "partner=" + _Config.Config.appsPartnerID + "&userID=" + userID + "&accountID=" + accountID;
				if (language) queryString += "&language=" + language;
				if (minAmount) queryString += "&minAmount=" + minAmount;
				if (maxAmount) queryString += "&maxAmount=" + maxAmount;
				if (amount) queryString += "&amount=" + amount;
				if (filters.name) queryString += "&filter[name]=" + filters.name;
				if (filters.country) queryString += "&filter[country]=" + filters.country;
				if (filters.currency) queryString += "&filter[currency]=" + filters.currency;
				if (filters.allowed) queryString += "&filter[allowed]=" + filters.allowed;
	
				return (0, _request2.default)({
					method: "GET",
					host: _Config.HOSTS.APPS,
					endpoint: "/funding/methods?" + queryString,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref2) {
					var body = _ref2.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
			/**
	   * @name ALLOWED_TYPES
	   * @memberof Funding
	   * @constant
	   * @property {string} DEPOSIT
	   * @property {string} WITHDRAW
	   * @property {string} DEPOSIT_AND_WITHDRAW
	   */
	
		}, {
			key: "getPastDeposits",
			value: function getPastDeposits(userID) {
				return (0, _request2.default)({
					endpoint: "/funding/status",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref3) {
					var body = _ref3.body;
					return body.data;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getSubscriptionPlans",
			value: function getSubscriptionPlans(userID) {
				return (0, _request2.default)({
					endpoint: "/funding/ach/subscription-plans",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref4) {
					var body = _ref4.body;
	
					var pricing = body.data.map(function (pricing) {
						return [].concat(pricing).sort(function (x, y) {
							return x.amount - y.amount;
						}).map(function (price) {
							return Object.assign({}, price, { amount: Number(price.amount / 100) });
						});
					})[0];
	
					return pricing;
				});
			}
		}]);
	
		return Funding;
	}();
	
	Funding.ALLOWED_TYPES = {
		DEPOSIT: "DEPOSIT",
		WITHDRAW: "WITHDRAW",
		DEPOSIT_AND_WITHDRAW: "DEPOSIT_AND_WITHDRAW"
	};
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
	
	/**
	 * @class Reports
	 * @description Static class for retrieving account reports.
	 */
	var Reports = function () {
		function Reports() {
			_classCallCheck(this, Reports);
		}
	
		_createClass(Reports, null, [{
			key: "getTransactions",
	
			/**
	   * @static
	   */
			value: function getTransactions(userID, accountNo, startDate, endDate) {
				var queryString = "?sessionKey=" + _Sessions2.default.get(userID) + "&ReportName=FinTrans" + "&ReportFormat=JSON" + ("&AccountNumber=" + accountNo) + ("&DateStart=" + startDate.toISOString()) + ("&DateEnd=" + endDate.toISOString()) + ("&wlpID=" + _Config.Config.wlpID) + "&LanguageID=en_US";
	
				return (0, _request2.default)({
					method: "POST",
					host: _Config.HOSTS.REPORTS,
					endpoint: "/DriveWealth" + queryString,
					sessionKey: _Sessions2.default.get(userID),
					body: {}
				}).then(function (_ref) {
					var body = _ref.body;
					return body.transaction || [];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getPlacedOrders",
			value: function getPlacedOrders(userID, accountNo, startDate, endDate) {
				var queryString = "?sessionKey=" + _Sessions2.default.get(userID) + "&ReportName=OrderTrans" + "&ReportFormat=JSON" + ("&AccountNumber=" + accountNo) + ("&DateStart=" + startDate.toISOString()) + ("&DateEnd=" + endDate.toISOString()) + ("&wlpID=" + _Config.Config.wlpID) + "&LanguageID=en_US";
	
				return (0, _request2.default)({
					method: "POST",
					host: _Config.HOSTS.REPORTS,
					endpoint: "/DriveWealth" + queryString,
					sessionKey: _Sessions2.default.get(userID),
					body: {}
				}).then(function (_ref2) {
					var body = _ref2.body;
					return body.transaction || [];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getStatements",
			value: function getStatements(userID, accountID, startDate, endDate) {
				var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=02";
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/statements" + queryString,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref3) {
					var body = _ref3.body;
					return body || [];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getTradeConfirms",
			value: function getTradeConfirms(userID, accountID, startDate, endDate) {
				var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=01";
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/statements" + queryString,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref4) {
					var body = _ref4.body;
					return body || [];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getTaxDocuments",
			value: function getTaxDocuments(userID, accountID, startDate, endDate) {
				var queryString = "?accountID=" + accountID + ("&dateStart=" + startDate.toISOString()) + ("&dateEnd=" + endDate.toISOString()) + "&type=03";
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/statements" + queryString,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref5) {
					var body = _ref5.body;
					return body || [];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "generateDownloadURL",
			value: function generateDownloadURL(userID, accountID, fileKey) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/statements/" + accountID + "/" + fileKey,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref6) {
					var body = _ref6.body;
					return body.url;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getSupportedCountries",
			value: function getSupportedCountries() {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/countries"
				}).then(function (_ref7) {
					var body = _ref7.body;
					return body || [];
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
	
	/**
	 * @class Instrument
	 * @description Use the constructor if you have a flat JSON object that you would like to access instance methods on.
	 * @param {object} data - See response at http://developer.drivewealth.com/docs/get_instrument
	 */
	var Instrument = function () {
		function Instrument(data) {
			_classCallCheck(this, Instrument);
	
			Object.assign(this, data);
		}
	
		/**
	  * @name TRADE_STATUSES
	  * @memberof Instrument
	  * @constant
	  * @property {string} INACTIVE
	  * @property {string} ACTIVE
	  * @property {string} CLOSED
	  */
	
	
		/**
	  * @name CHART_COMPRESSIONS
	  * @memberof Instrument
	  * @constant
	  * @property {number} DAY
	  * @property {number} MINUTE_1
	  * @property {number} MINUTE_5
	  * @property {number} MINUTE_30
	  * @property {number} HOUR
	  * @property {number} WEEK
	  */
	
	
		_createClass(Instrument, [{
			key: "getQuote",
	
	
			/**
	   * @instance
	   */
			value: function getQuote() {
				return Instrument.getQuote(this.symbol);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getChartData",
	
	
			/**
	   * @param {date} dateStart
	   * @param {date} dateEnd
	   */
			/**
	   * @param {number} tradingDays
	   */
			value: function getChartData(compression) {
				if (arguments.length === 3) {
					return Instrument.getChartData(this.instrumentID, compression, arguments[1], arguments[2]);
				}
				return Instrument.getChartData(this.instrumentID, compression, arguments[1]);
			}
	
			/**
	   * @param {date} dateStart
	   * @param {date} dateEnd
	   */
			/**
	   * @param {number} tradingDays
	   */
	
		}], [{
			key: "getBySymbol",
	
	
			/**
	   * @static
	   */
			value: function getBySymbol(symbol) {
				var symbols = typeof symbol === "string" ? [symbol] : symbol;
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/instruments?symbols=" + symbols.join(","),
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref) {
					var body = _ref.body;
	
					body = body.map(function (instrument) {
						return new Instrument(instrument);
					});
					return typeof symbol === "string" ? body[0] : body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getByID",
			value: function getByID(id) {
				var includeFundamentals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/instruments/" + id + (includeFundamentals ? "?options=F" : ""),
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref2) {
					var body = _ref2.body;
					return new Instrument(body);
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getAll",
			value: function getAll() {
				var tradeStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "-1";
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/instruments?tradeStatus=" + tradeStatus,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref3) {
					var body = _ref3.body;
					return body.map(function (instrument) {
						return new Instrument(instrument);
					});
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "search",
			value: function search(criteria) {
				var queryString = "?";
				if (criteria.symbol) queryString += "symbol=" + criteria.symbol + "&";
				if (criteria.name) queryString += "name=" + criteria.name + "&";
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/instruments" + queryString,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref4) {
					var body = _ref4.body;
					return body.map(function (instrument) {
						return new Instrument(instrument);
					});
				});
			}
		}, {
			key: "getQuote",
			value: function getQuote(symbol) {
				var symbols = (Array.isArray(symbol) ? symbol : [symbol]).map(function (sym) {
					return sym instanceof Instrument ? sym.symbol : sym;
				});
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/quotes?symbols=" + symbols.join(","),
					sessionKey: _Sessions2.default.getAny(),
					addlHeaders: {
						Accept: "text/plain"
					}
				}).then(function (_ref5) {
					var body = _ref5.body;
	
					var obj = {};
					body = body.split("|").slice(10);
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	
					if (!Array.isArray(symbol)) obj = obj[symbols[0]];
					return obj;
				});
			}
		}, {
			key: "getChartData",
			value: function getChartData(instrumentID, compression) {
				var timeParams = void 0;
				if (arguments.length === 4) {
					var dateStart = arguments[2].toISOString().replace(/\.\d{3}/, "");
					var dateEnd = arguments[3].toISOString().replace(/\.\d{3}/, "");
					timeParams = "dateStart=" + dateStart + "&dateEnd=" + dateEnd;
				} else {
					timeParams = "tradingDays=" + arguments[2];
				}
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/bars?instrumentID=" + instrumentID + "&compression=" + compression + "&" + timeParams,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref6) {
					var body = _ref6.body;
					return body.data.split("|");
				});
			}
		}]);
	
		return Instrument;
	}();
	
	Instrument.TRADE_STATUSES = {
		INACTIVE: "0",
		ACTIVE: "1",
		CLOSED: "2"
	};
	Instrument.CHART_COMPRESSIONS = {
		DAY: 0,
		MINUTE_1: 1,
		MINUTE_5: 4,
		MINUTE_30: 8,
		HOUR: 9,
		WEEK: 10
	};
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
	
	/**
	 * @class User
	 * @description A user object. Use the constructor if you have a flat JSON object that you would like to access instance methods on.
	 * @param {object} data - See response at {@link http://developer.drivewealth.com/docs/get-user}
	 */
	var User = function () {
		function User(data) {
			_classCallCheck(this, User);
	
			Object.assign(this, data);
			this.fullName = data.firstName + " " + data.lastName;
		}
	
		/**
	  * @name STATUSES
	  * @property {Number} PENDING
	  * @property {Number} APPROVED
	  * @property {Number} REJECTED
	  * @property {Number} REVOKED
	  * @property {Number} CLOSED
	  * @memberof User
	  * @constant
	  */
	
	
		/**
	  * @name DOCUMENT_TYPES
	  * @property {string} PHOTO_ID
	  * @property {string} PROOF_OF_ADDRESS
	  * @property {string} PHOTO_ID_WITH_PROOF_OF_ADDRESS
	  * @memberof User
	  * @constant
	  */
	
	
		_createClass(User, [{
			key: "getAccounts",
	
	
			/**
	   * @instance
	   */
			value: function getAccounts() {
				return _Account2.default.getListForUserID(this.userID);
			}
	
			/**
	   * Get all settings
	   * @param  {string} userID
	   * @return {Promise<Object.<string, string>>}
	   */
			/**
	   * Get setting value by key
	   * @param  {string} userID
	   * @param  {string} key
	   * @return {Promise<string>}
	   */
	
		}, {
			key: "getSettings",
	
	
			/**
	   * Get all settings
	   * @return {Promise<Object.<string, string>>}
	   */
			/**
	   * Get setting value
	   * @param  {string} key
	   * @return {Promise<string>}
	   */
			value: function getSettings(key) {
				return User.getSettings(this.userID, key);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "setSetting",
	
	
			/**
	   * @instance
	   */
			value: function setSetting(key, value) {
				return User.setSetting(this.userID, key, value);
			}
		}, {
			key: "unsetSetting",
	
	
			/**
	   * @instance
	   */
			value: function unsetSetting(key) {
				return User.unsetSetting(this.userID, key);
			}
	
			/**
	   * @description See response at {@link http://developer.drivewealth.com/docs/user-status}
	   */
	
		}, {
			key: "getStatus",
			value: function getStatus() {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + this.userID + "/status",
					sessionKey: _Sessions2.default.get(this.userID)
				}).then(function (_ref) {
					var body = _ref.body;
					return body;
				});
			}
	
			/**
	   *  @static
	   */
	
		}, {
			key: "logout",
	
	
			/**
	   * @instance
	   */
			value: function logout() {
				return User.logout(this.userID);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "uploadDocument",
	
	
			/**
	   * @instance
	   */
			value: function uploadDocument(file, type) {
				return User.uploadDocument(this.userID, file, type);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getCreditCards",
	
	
			/**
	   * @instance
	   */
			value: function getCreditCards() {
				return User.getCreditCards(this.userID);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "addCreditCard",
	
	
			/**
	   * @instance
	   */
			value: function addCreditCard(cardToken) {
				return User.addCreditCard(this.userID, cardToken);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "removeCreditCard",
	
	
			/**
	   * @instance
	   */
			value: function removeCreditCard(cardID) {
				return User.removeCreditCard(this.userID, cardID);
			}
	
			/**
	   * @static
	   */
	
		}], [{
			key: "getAccounts",
	
	
			/**
	   * @static
	   */
			value: function getAccounts(userID) {
				return _Account2.default.getListForUserID(userID);
			}
		}, {
			key: "getSettings",
			value: function getSettings(userID, key) {
				if (!key) {
					return (0, _request2.default)({
						method: "GET",
						endpoint: "/users/" + userID + "/settings",
						sessionKey: _Sessions2.default.get(userID)
					}).then(function (_ref2) {
						var body = _ref2.body;
	
						var formattedData = {};
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;
	
						try {
							for (var _iterator = body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	
						return formattedData;
					});
				}
	
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/settings/" + key,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref3) {
					var body = _ref3.body;
					return body.value;
				});
			}
		}, {
			key: "setSetting",
			value: function setSetting(userID, key, value) {
				return (0, _request2.default)({
					method: "POST",
					endpoint: "/users/" + userID + "/settings",
					sessionKey: _Sessions2.default.get(userID),
					body: {
						key: key, value: value
					}
				}).then(function () {
					return undefined;
				});
			}
		}, {
			key: "unsetSetting",
			value: function unsetSetting(userID, key) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/users/" + userID + "/settings/" + key,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function () {
					return undefined;
				});
			}
		}, {
			key: "logout",
			value: function logout(userID) {
				var _this = this;
	
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/userSessions/" + _Sessions2.default.get(userID),
					sessionKey: _Sessions2.default.get(userID)
				}).then(function () {
					_Sessions2.default.remove(_this.userID);
				});
			}
		}, {
			key: "getByUserID",
			value: function getByUserID(userID) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref4) {
					var body = _ref4.body;
					return new User(body);
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "login",
			value: function login(username, password) {
				return (0, _request2.default)({
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
				}).then(function (_ref5) {
					var body = _ref5.body;
	
					_Sessions2.default.save(body.userID, body.sessionKey);
					return User.getByUserID(body.userID);
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "isUsernameAvailable",
			value: function isUsernameAvailable(username) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users?username=" + username
				}).then(function () {
					return false;
				}, function (rejection) {
					return rejection.statusCode === 404 ? true : Promise.reject(rejection);
				});
			}
	
			/**
	   * @param {object} data
	   * @param {boolean} loginAutomatically - If false, no session will be created.
	   * @return {Promise<undefined | User>} If loginAutomatically is true, a User will be resolved.
	   */
	
		}, {
			key: "create",
			value: function create(_ref6) {
				var username = _ref6.username,
				    password = _ref6.password,
				    firstName = _ref6.firstName,
				    lastName = _ref6.lastName,
				    email = _ref6.email,
				    languageID = _ref6.languageID,
				    _ref6$referralCode = _ref6.referralCode,
				    referralCode = _ref6$referralCode === undefined ? _Config.Config.referralCode : _ref6$referralCode,
				    utmCampaign = _ref6.utmCampaign,
				    utmContent = _ref6.utmContent,
				    utmMedium = _ref6.utmMedium,
				    utmSource = _ref6.utmSource,
				    utmTerm = _ref6.utmTerm;
				var loginAutomatically = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
				return (0, _request2.default)({
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
				}).then(function () {
					if (loginAutomatically) {
						return User.login(username, password);
					}
				});
			}
	
			/**
	   * @param {object} data
	   */
	
		}, {
			key: "update",
			value: function update(_ref7) {
				var userID = _ref7.userID,
				    addressLine1 = _ref7.addressLine1,
				    addressLine2 = _ref7.addressLine2,
				    city = _ref7.city,
				    countryID = _ref7.countryID,
				    email = _ref7.email,
				    firstName = _ref7.firstName,
				    lastName = _ref7.lastName,
				    languageID = _ref7.languageID,
				    phoneHome = _ref7.phoneHome,
				    phoneWork = _ref7.phoneWork,
				    phone = _ref7.phone,
				    stateProvince = _ref7.stateProvince,
				    zipPostalCode = _ref7.zipPostalCode;
	
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
				}).then(function (_ref8) {
					var body = _ref8.body;
					return body;
				});
			}
		}, {
			key: "uploadDocument",
			value: function uploadDocument(userID, file, type) {
				// The following line is for eslint
				/* global FormData */
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
				}).then(function () {
					return undefined;
				});
			}
		}, {
			key: "getCreditCards",
			value: function getCreditCards(userID) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/credit-cards",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref9) {
					var body = _ref9.body;
					return body;
				});
			}
		}, {
			key: "addCreditCard",
			value: function addCreditCard(userID, cardToken) {
				return (0, _request2.default)({
					method: "POST",
					endpoint: "/users/" + userID + "/credit-cards",
					sessionKey: _Sessions2.default.get(userID),
					body: { cardToken: cardToken }
				}).then(function (_ref10) {
					var body = _ref10.body;
					return body;
				});
			}
		}, {
			key: "removeCreditCard",
			value: function removeCreditCard(userID, cardID) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/users/" + userID + "/credit-cards/" + cardID,
					sessionKey: _Sessions2.default.get(userID)
				}).then(function () {
					return undefined;
				});
			}
		}]);
	
		return User;
	}();
	
	User.STATUSES = {
		PENDING: 1,
		APPROVED: 2,
		REJECTED: 3,
		REVOKED: 4,
		CLOSED: 5
	};
	User.DOCUMENT_TYPES = {
		PHOTO_ID: "Picture ID",
		PROOF_OF_ADDRESS: "Proof of address",
		PHOTO_ID_WITH_PROOF_OF_ADDRESS: "Picture ID_Proof of address"
	};
	exports.default = User;
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNjBkNjNjY2IxNDUxOGVkYTUyOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJjb2RlIiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJyZWR1Y2UiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJ4IiwieSIsIkFMTE9XRURfVFlQRVMiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImNvbXByZXNzaW9uIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInN5bSIsIm9iaiIsInNwbGl0IiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIlRSQURFX1NUQVRVU0VTIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDSEFSVF9DT01QUkVTU0lPTlMiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0TGlzdEZvclVzZXJJRCIsImtleSIsImdldFNldHRpbmdzIiwidmFsdWUiLCJzZXRTZXR0aW5nIiwidW5zZXRTZXR0aW5nIiwibG9nb3V0IiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0Q3JlZGl0Q2FyZHMiLCJjYXJkVG9rZW4iLCJhZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwicmVtb3ZlQ3JlZGl0Q2FyZCIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJyZWplY3Rpb24iLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJET0NVTUVOVF9UWVBFUyIsIlBIT1RPX0lEIiwiUFJPT0ZfT0ZfQUREUkVTUyIsIlBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FB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QTs7O29DQVl1QjdCLE0sRUFBZ0J1USxNLEVBQStCO0FBQ3RFLFdBQU8sdUJBQVE7QUFDZC9PLGFBQVEsUUFETTtBQUVkQywyQkFBb0J6QixNQUFwQixzQkFBMkN1USxNQUY3QjtBQUdkN08saUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxZQUFNb0IsU0FBTjtBQUFBLEtBSkQsQ0FBUDtBQUtBOzs7Ozs7QUFuWkl6RCxLLENBcUNFaUUsUSxHQUF1QztBQUM3Q0MsV0FBUyxDQURvQztBQUU3Q2tQLFlBQVUsQ0FGbUM7QUFHN0N2RyxZQUFVLENBSG1DO0FBSTdDd0csV0FBUyxDQUpvQztBQUs3Q2hQLFVBQVE7QUFMcUMsRTtBQXJDekNyRSxLLENBcURFc1QsYyxHQUEyQztBQUNqREMsWUFBVSxZQUR1QztBQUVqREMsb0JBQWtCLGtCQUYrQjtBQUdqREMsa0NBQWdDO0FBSGlCLEU7bUJBaVdwQ3pULEkiLCJmaWxlIjoiZHJpdmV3ZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNjBkNjNjY2IxNDUxOGVkYTUyOCIsImltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgc2V0dXAsIEVOVklST05NRU5UUywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFTlZJUk9OTUVOVFMsXG5cdEhPU1RTLFxuXG5cdEFjY291bnQsXG5cdENvbmZpZyxcblx0RXJyb3IsXG5cdEZ1bmRpbmcsXG5cdEluc3RydW1lbnQsXG5cdE9yZGVyLFxuXHRSZXBvcnRzLFxuXHRVc2VyLFxuXHRTZXNzaW9ucyxcblxuXHRzZXR1cCxcblx0cmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuaW1wb3J0IHR5cGUgeyBPcmRlclBhcmVudERldGFpbHMgfSBmcm9tIFwiLi9PcmRlclwiO1xuXG5leHBvcnQgdHlwZSBDb21taXNzaW9uU2NoZWR1bGUgPSB7XG5cdGJhc2VSYXRlOiBudW1iZXIsXG5cdGJhc2VTaGFyZXM6IG51bWJlcixcblx0ZXhjZXNzUmF0ZTogbnVtYmVyLFxuXHRmcmFjdGlvbmFsUmF0ZTogbnVtYmVyLFxuXHRzaGFyZUFtb3VudFJvdW5kaW5nOiBudW1iZXIsXG5cdHN1YnNjcmlwdGlvbjogYm9vbGVhbixcblx0YmFza2V0U2NoZWR1bGU6IHtcblx0XHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdFx0ZXhjZXNzUmF0ZTogbnVtYmVyLFxuXHRcdHNjaGVkdWxlOiBBcnJheTx7XG5cdFx0XHRiYXNrZXRTaXplOiBudW1iZXIsXG5cdFx0XHRiYXNrZXRQcmljZTogbnVtYmVyLFxuXHRcdH0+LFxuXHR9LFxuXHRwYXNzVGhyb3VnaEZlZXM6IGJvb2xlYW4sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBBY2NvdW50XG4gKiBAZGVzY3JpcHRpb24gQW4gYWNjb3VudCBiZWxvbmdpbmcgdG8gYSBVc2VyLiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9hY2NvdW50c19nZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cdGFjY291bnRJRDogc3RyaW5nO1xuXHRhY2NvdW50Tm86IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdGFjY291bnRUeXBlOiBzdHJpbmc7XG5cdGN1cnJlbmN5SUQ6IHN0cmluZztcblx0aWJJRDogc3RyaW5nO1xuXHRtYXJnaW46IHN0cmluZztcblx0bmlja25hbWU6IHN0cmluZztcblx0b3BlbmVkV2hlbjogc3RyaW5nO1xuXHRwYXR0ZXJuRGF5VHJhZGVzOiBzdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR0cmFkaW5nVHlwZTogc3RyaW5nO1xuXHRhY2NvdW50TWdtdFR5cGU6IHN0cmluZztcblx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGU7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBCTE9UVEVSX1RZUEVTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0FTSFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gT1JERVJTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUUkFOU0FDVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBPU0lUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUxMXG5cdCAqL1xuXHRzdGF0aWMgQkxPVFRFUl9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiA/c3RyaW5nfSA9IHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gT1BFTlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gT1BFTl9OT19ORVdfVFJBREVTXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UEVORElORzogMSxcblx0XHRPUEVOOiAyLFxuXHRcdE9QRU5fTk9fTkVXX1RSQURFUzogMyxcblx0XHRDTE9TRUQ6IDksXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRZUEVTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gUFJBQ1RJQ0Vcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IExJVkVcblx0ICovXG5cdHN0YXRpYyBUWVBFUzoge1t0eXBlOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBSQUNUSUNFOiAxLFxuXHRcdExJVkU6IDIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0QmxvdHRlcih0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0QmxvdHRlcih0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCbG90dGVyKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZywgdHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50U3VtbWFyeS9gXG5cdFx0XHRcdCsgYCR7YWNjb3VudElEfSR7dHlwZSA/IFwiL1wiICsgdHlwZSA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRpZiAoYm9keS5vcmRlcnMpIHtcblx0XHRcdFx0Ym9keS5vcmRlcnMgPSBib2R5Lm9yZGVycy5tYXAoKG9yZGVyKSA9PiBuZXcgT3JkZXIob3JkZXIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0eXBlID8gYm9keVt0eXBlXSA6IGJvZHk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdGdldFBlcmZvcm1hbmNlKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0UGVyZm9ybWFuY2UodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCAuLi5hcmd1bWVudHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRzdGF0aWMgZ2V0UGVyZm9ybWFuY2UodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIlwiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBzdGFydERhdGUgPSBhcmd1bWVudHNbMl07XG5cdFx0XHRjb25zdCBlbmREYXRlID0gYXJndW1lbnRzWzNdO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIHN0YXJ0RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgL2hpc3Rvcnk/cGVyaW9kPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke2FjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5wZXJmb3JtYW5jZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRwbGFjZU9yZGVyKHR5cGU6IHN0cmluZywgZGF0YTogT2JqZWN0KTogUHJvbWlzZTxzdHJpbmcgfCBPYmplY3Q+IHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzOiBPcmRlclBhcmVudERldGFpbHMgPSB7XG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vOiB0aGlzLmFjY291bnRObyxcblx0XHRcdGFjY291bnRUeXBlOiB0aGlzLmFjY291bnRUeXBlLFxuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEZ1bmRpbmdNZXRob2RzKG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0b3B0aW9ucy51c2VySUQgPSB0aGlzLnVzZXJJRDtcblx0XHRvcHRpb25zLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuXHRcdHJldHVybiBGdW5kaW5nLmdldEZ1bmRpbmdNZXRob2RzKG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRQbGFjZWRPcmRlcnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0U3RhdGVtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUYXhEb2N1bWVudHMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYWRlQ29uZmlybXMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhZGVDb25maXJtcyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjcmVhdGUodXNlcklEOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG5cdFx0aWYgKHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0UpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcblx0XHRcdFx0dHJhbkFtb3VudDogZGF0YSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG5cdFx0XHRcdD8gXCIvc2lnbnVwcy9wcmFjdGljZVwiXG5cdFx0XHRcdDogXCIvc2lnbnVwcy9saXZlXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBjaGFuZ2VTdWJzY3JpcHRpb24obWV0aG9kOiBzdHJpbmcsIHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdHBsYW5JRCxcblx0XHRwYXltZW50SUQsXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRwbGFuSUQ6IHN0cmluZyxcblx0XHRwYXltZW50SUQ6IHN0cmluZyxcblx0fSk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzLyR7YWNjb3VudElEfS9zdWJzY3JpcHRpb25zYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogIW1ldGhvZC5zdGFydHNXaXRoKFwiUFwiKSA/IHVuZGVmaW5lZCA6IHtcblx0XHRcdFx0cGxhbklELFxuXHRcdFx0XHRbcGF5bWVudElELnN0YXJ0c1dpdGgoXCJjYXJkXCIpID8gXCJjYXJkSURcIiA6IFwiYmFua0FjY291bnRJRFwiXTogcGF5bWVudElELFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIkdFVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUE9TVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUFVUXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWxTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJERUxFVEVcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRleHRyYWN0SURzKG9wdGlvbnM/OiBPYmplY3QpOiBPYmplY3Qge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRhZGRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5hZGRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LnVwZGF0ZVN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsU3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2FuY2VsU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbi8qKlxuICogQGZ1bmN0aW9uIHJlcXVlc3RcbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxseSwgaXQgaXMgdW5uZWNlc3NhcnkgdG8gdXNlIHRoaXMgZnVuY3Rpb24gYW5kIHRoaXMgaXMgZm9yIGludGVybmFsIHVzZSBvbmx5LiBDYWxsIHJlcXVlc3QoKSBpZiB5b3UgbmVlZCB0byBtYWtlIGEgY3VzdG9tIEFQSSBjYWxsIHRoYXQgaXMgbm90IGNvdmVyZWQgYnkgYW5vdGhlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmVuZHBvaW50XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZXNzaW9uS2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ib2R5XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRpb25zLmFkZGxIZWFkZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ob3N0IC0gT25lIG9mIENvbmZpZy5IT1NUU1xuICogQHJldHVybnMge1Byb21pc2UuPHtib2R5OiBzdHJpbmcsIHN0YXR1c0NvZGU6IG51bWJlciwgaGVhZGVyczogT2JqZWN0PHN0cmluZywgc3RyaW5nPn0+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcblx0bWV0aG9kID0gXCJHRVRcIixcblx0ZW5kcG9pbnQsXG5cdHNlc3Npb25LZXksXG5cdGJvZHksXG5cdGFkZGxIZWFkZXJzID0ge30sXG5cdGhvc3QgPSBIT1NUUy5BUEksXG59OiB7XG5cdG1ldGhvZD86IHN0cmluZyxcblx0ZW5kcG9pbnQ6IHN0cmluZyxcblx0c2Vzc2lvbktleT86IHN0cmluZyxcblx0Ym9keT86IGFueSxcblx0YWRkbEhlYWRlcnM/OiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSxcblx0aG9zdD86IHN0cmluZyxcbn0pIHtcblx0Y29uc3QgaGVhZGVyczoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0fTtcblx0aWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG5cdFx0aGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXHR9XG5cdGlmIChzZXNzaW9uS2V5KSB7XG5cdFx0aGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcblx0fVxuXHRmb3IgKGNvbnN0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuXHRcdGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG5cdH1cblxuXHRlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuXHRpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcblx0XHRcdGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuXHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRib2R5OiByZXNCb2R5LFxuXHRcdFx0XHRcdHN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0aGVhZGVyczogcmVzSGVhZGVycyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZXJyb3JNZXNzYWdlO1xuXHRcdFx0XHRpZiAocmVzQm9keSkge1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlcnJvciA9IHN0YXR1c0NvZGUgPT09IDQwMVxuXHRcdFx0XHRcdD8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycylcblx0XHRcdFx0XHQ6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCIvKipcbiAqIEBuYW1lc3BhY2UgQ29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSB7XG5cdGVudjogbnVsbCxcblx0aHR0cEltcGw6IG51bGwsXG5cdGFwcFR5cGVJRDogbnVsbCxcblx0YXBwVmVyc2lvbjogbnVsbCxcblx0d2xwSUQ6IG51bGwsXG5cdGFwcHNQYXJ0bmVySUQ6IG51bGwsXG5cdHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgSE9TVFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUElcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUFBTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVQT1JUU1xuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcblx0QVBJOiBcImFwaVwiLFxuXHRBUFBTOiBcImFwcHNcIixcblx0UkVQT1JUUzogXCJyZXBvcnRzXCIsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEVOVklST05NRU5UU1xuICogQHByb3BlcnR5IHtvYmplY3R9IFVBVFxuICogQHByb3BlcnR5IHtvYmplY3R9IFBST0RcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuXHRVQVQ6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG5cdH0sXG5cdFBST0Q6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGgubmV0XCIsXG5cdH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuXHRlbnYsXG5cdGh0dHBJbXBsLFxuXHRhcHBUeXBlSUQsXG5cdGFwcFZlcnNpb24sXG5cdHdscElEID0gXCJEV1wiLFxuXHRhcHBzUGFydG5lcklELFxuXHRyZWZlcnJhbENvZGUsXG59KSB7XG5cdENvbmZpZy5lbnYgPSBlbnY7XG5cdENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuXHRDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuXHRDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG5cdENvbmZpZy53bHBJRCA9IHdscElEO1xuXHRDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG5cdENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHREcml2ZVdlYWx0aEVycm9yLFxuXHREcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuaW1wb3J0IHR5cGUgeyBDb21taXNzaW9uU2NoZWR1bGUgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgdHlwZSBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcblxuY29uc3QgU0VDX0ZFRV9SQVRFID0gMC4wMDAwMjMxO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IHR5cGUgT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRhY2NvdW50SUQ6IHN0cmluZyxcblx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdHVzZXJJRDogc3RyaW5nLFxuXHRhY2NvdW50VHlwZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIE5ld09yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRzaWRlOiBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG5cdHByaWNlPzogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIE5ld0NhcnRPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIE9yZGVyXG4gKiBAZGVzY3JpcHRpb24gQW4gb3JkZXIgY3JlYXRlZCBmb3IgYW4gQWNjb3VudC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X21hcmtldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cdG9yZGVySUQ6IHN0cmluZztcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRjdW1RdHk6IG51bWJlcjtcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdGNvbW1lbnQ6IHN0cmluZztcblx0Y29tbWlzc2lvbjogbnVtYmVyO1xuXHRjcmVhdGVkQnlJRDogc3RyaW5nO1xuXHRjcmVhdGVkV2hlbjogc3RyaW5nO1xuXHRleGVjdXRlZFdoZW46IHN0cmluZztcblx0Z3Jvc3NUcmFkZUFtdDogbnVtYmVyO1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bGVhdmVzUXR5OiBzdHJpbmc7XG5cdG9yZGVyTm86IHN0cmluZztcblx0b3JkZXJRdHk6IG51bWJlcjtcblx0c2lkZTogc3RyaW5nO1xuXHRhdXRvU3RvcDogP251bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHJlamVjdGlvblJlYXNvbjogP3N0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHR5cGU6IG51bWJlcjtcblx0cHJpY2U6ID9udW1iZXI7XG5cdGVmZmVjdGl2ZVByaWNlOiA/bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU0lERVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQlVZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUxMXG5cdCAqL1xuXHRzdGF0aWMgU0lERVM6IHtbc2lkZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQVJLRVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IExJTUlUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVE9QXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTkVXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUFMX0ZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIE9yZGVyLmNhbmNlbCh0aGlzLm9yZGVySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkUmVqUmVhc29uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0XHRcdG5ldyBEcml2ZVdlYWx0aEVycm9yKGJvZHkub3JkUmVqUmVhc29uLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT3JkZXIoYm9keSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiBJZiB3YWl0Rm9yRmlsbCBpcyB0cnVlLCBhbiBPcmRlciB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIGFuIG9yZGVySUQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcjoge1xuXHRcdFx0XHRpbnN0cnVtZW50LFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRxdHksXG5cdFx0XHRcdGFtb3VudENhc2gsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdH0sXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyOiBOZXdPcmRlcixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTxzdHJpbmcgfCBPcmRlcj4ge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcInF0eVxcXCIgYW5kIFxcXCJhbW91bnRDYXNoXFxcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlwiKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSB7XG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDI7XG5cblx0XHRcdGlmICghcHJpY2UpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcXFwicHJpY2UuXFxcIlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF1dG9TdG9wKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJhdXRvU3RvcFxcXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBib2R5Lm9yZGVySUQ7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKGJvZHkub3JkZXJJRCkudGhlbihvcmRlciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0ZpbGxlZCA9IG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmXG5cdFx0XHRcdFx0XHRcdG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMO1xuXG5cdFx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwIHx8IGlzRmlsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IuYm9keS5jb2RlID09PSA0MDQgJiYgcmV0cmllcyA+IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCB1c2VySUQsIChlcnJvciwgc3RhdHVzRGV0YWlscykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aGlzU3RhdHVzID0gb3JkZXJzTWFwW3JlZmVyZW5jZV0uc3RhdHVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXNTdGF0dXNcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUob3JkZXJzTWFwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihcblx0XHRvcmRlcnM6IEFycmF5PHtcblx0XHRcdHNpZGU6IHN0cmluZyxcblx0XHRcdHF0eTogbnVtYmVyLFxuXHRcdFx0bWFya2V0UHJpY2U6IG51bWJlcixcblx0XHRcdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdFx0fT4sXG5cdFx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGUsXG5cdCk6IHtcblx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdG11bHRpcGxlT3JkZXJEZWx0YTogbnVtYmVyLFxuXHRcdGJ5T3JkZXI6IHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IHtcblx0XHRcdHRvdGFsOiBudW1iZXIsXG5cdFx0XHRjb21taXNzaW9uOiBudW1iZXIsXG5cdFx0XHRmZWVzOiB7XG5cdFx0XHRcdHNlYzogbnVtYmVyLFxuXHRcdFx0XHR0YWY6IG51bWJlcixcblx0XHRcdH0sXG5cdFx0fX1cblx0fSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcyksXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDA7XG5cdFx0XHRsZXQgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG4vKipcbiAqIEBjbGFzcyBGdW5kaW5nXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGZ1bmRpbmcgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXHQvKipcblx0ICogQG5hbWUgQUxMT1dFRF9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IERFUE9TSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFdJVEhEUkFXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUX0FORF9XSVRIRFJBV1xuXHQgKi9cblx0c3RhdGljIEFMTE9XRURfVFlQRVMgPSB7XG5cdFx0REVQT1NJVDogXCJERVBPU0lUXCIsXG5cdFx0V0lUSERSQVc6IFwiV0lUSERSQVdcIixcblx0XHRERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IGJvZHkuZGF0YS5tYXAoKHByaWNpbmcpID0+XG5cdFx0XHRcdFtdLmNvbmNhdChwcmljaW5nKVxuXHRcdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHRcdC5tYXAocHJpY2UgPT4gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0XHR7IGFtb3VudDogTnVtYmVyKHByaWNlLmFtb3VudCAvIDEwMCkgfSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdClbMF07XG5cblx0XHRcdHJldHVybiBwcmljaW5nO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuLyoqXG4gKiBAY2xhc3MgUmVwb3J0c1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBhY2NvdW50IHJlcG9ydHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYW5zYWN0aW9ucyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPUZpblRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9T3JkZXJUcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN0YXRlbWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDJcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYWRlQ29uZmlybXMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDFcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRheERvY3VtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wM1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTChcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRmaWxlS2V5OiBzdHJpbmcsXG5cdCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS51cmwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2NvdW50cmllc1wiLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IHR5cGUgUXVvdGUgPSB7XG5cdGJpZDogbnVtYmVyLFxuXHRhc2s6IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIEluc3RydW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXRfaW5zdHJ1bWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0ZXhjaGFuZ2VJRDogc3RyaW5nO1xuXHRpbnN0cnVtZW50VHlwZUlEOiBzdHJpbmc7XG5cdG9yZGVyU2l6ZU1heDogbnVtYmVyO1xuXHRvcmRlclNpemVNaW46IG51bWJlcjtcblx0b3JkZXJTaXplU3RlcDogbnVtYmVyO1xuXHRyYXRlQXNrOiBudW1iZXI7XG5cdHJhdGVCaWQ6IG51bWJlcjtcblx0cmF0ZVByZWNpc2lvbjogbnVtYmVyO1xuXHRzeW1ib2w6IHN0cmluZztcblx0dHJhZGVTdGF0dXM6IHN0cmluZztcblx0dXJsSW1hZ2U6IHN0cmluZztcblx0dXJsSW52ZXN0b3I6IHN0cmluZztcblx0Y2hhaWtpblBncjogc3RyaW5nO1xuXHRwcmlvckNsb3NlOiBudW1iZXI7XG5cdG1hcmtldFN0YXRlOiBudW1iZXI7XG5cdGZ1bmRhbWVudGFsRGF0YU1vZGVsOiBPYmplY3Q7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBUUkFERV9TVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IElOQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFRSQURFX1NUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRJTkFDVElWRTogXCIwXCIsXG5cdFx0QUNUSVZFOiBcIjFcIixcblx0XHRDTE9TRUQ6IFwiMlwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBDSEFSVF9DT01QUkVTU0lPTlNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBEQVlcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8xXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfNVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzMwXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBIT1VSXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBXRUVLXG5cdCAqL1xuXHRzdGF0aWMgQ0hBUlRfQ09NUFJFU1NJT05TOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHREQVk6IDAsXG5cdFx0TUlOVVRFXzE6IDEsXG5cdFx0TUlOVVRFXzU6IDQsXG5cdFx0TUlOVVRFXzMwOiA4LFxuXHRcdEhPVVI6IDksXG5cdFx0V0VFSzogMTAsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2w6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+IHwgSW5zdHJ1bWVudD4ge1xuXHRcdGNvbnN0IHN5bWJvbHMgPSB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gW3N5bWJvbF0gOiBzeW1ib2w7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGJvZHkgPSBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKTtcblx0XHRcdHJldHVybiB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gYm9keVswXSA6IGJvZHk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5SUQoaWQ6IHN0cmluZywgaW5jbHVkZUZ1bmRhbWVudGFsczogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPEluc3RydW1lbnQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/IFwiP29wdGlvbnM9RlwiIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBJbnN0cnVtZW50KGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzPzogc3RyaW5nID0gXCItMVwiKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNlYXJjaChjcml0ZXJpYTogeyBuYW1lPzogc3RyaW5nLCBzeW1ib2w/OiBzdHJpbmcgfSk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcblx0XHRpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuXHRcdGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRRdW90ZSgpOiBQcm9taXNlPFF1b3RlPiB7XG5cdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRRdW90ZShcblx0XHRzeW1ib2w6IHN0cmluZyB8IEluc3RydW1lbnQgfCBBcnJheTxzdHJpbmcgfCBJbnN0cnVtZW50Pixcblx0Ly8gJEZsb3dGaXhNZVxuXHQpOiBQcm9taXNlPFF1b3RlIHwge1tzeW1ib2w6IHN0cmluZ106IFF1b3RlfT4ge1xuXHRcdGNvbnN0IHN5bWJvbHM6IEFycmF5PHN0cmluZz4gPSAoQXJyYXkuaXNBcnJheShzeW1ib2wpID8gc3ltYm9sIDogW3N5bWJvbF0pXG5cdFx0XHQubWFwKHN5bSA9PiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGxldCBvYmogPSB7fTtcblx0XHRcdGJvZHkgPSBib2R5LnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG5cdFx0XHRmb3IgKGNvbnN0IHJhd1F1b3RlIG9mIGJvZHkpIHtcblx0XHRcdFx0Y29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG5cdFx0XHRcdG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG5cdFx0XHRcdFx0YmlkOiBOdW1iZXIocGFyc2VkUXVvdGVbMV0pLFxuXHRcdFx0XHRcdGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSBvYmogPSBvYmpbc3ltYm9sc1swXV07XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0Z2V0Q2hhcnREYXRhKGNvbXByZXNzaW9uOiBudW1iZXIpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKFxuXHRcdFx0XHR0aGlzLmluc3RydW1lbnRJRCxcblx0XHRcdFx0Y29tcHJlc3Npb24sXG5cdFx0XHRcdGFyZ3VtZW50c1sxXSxcblx0XHRcdFx0YXJndW1lbnRzWzJdLFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbiwgYXJndW1lbnRzWzFdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElEOiBzdHJpbmcsIGNvbXByZXNzaW9uOiBudW1iZXIpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcblx0XHRsZXQgdGltZVBhcmFtcztcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG5cdFx0XHRjb25zdCBkYXRlRW5kID0gYXJndW1lbnRzWzNdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG5cdFx0XHR0aW1lUGFyYW1zID0gYGRhdGVTdGFydD0ke2RhdGVTdGFydH0mZGF0ZUVuZD0ke2RhdGVFbmR9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZVBhcmFtcyA9IGB0cmFkaW5nRGF5cz0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2JhcnM/aW5zdHJ1bWVudElEPSR7aW5zdHJ1bWVudElEfSZjb21wcmVzc2lvbj0ke2NvbXByZXNzaW9ufSYke3RpbWVQYXJhbXN9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LmRhdGEuc3BsaXQoXCJ8XCIpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG4vKipcbiAqIEBjbGFzcyBVc2VyXG4gKiBAZGVzY3JpcHRpb24gQSB1c2VyIG9iamVjdC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldC11c2VyfVxuICovXG5jbGFzcyBVc2VyIHtcblx0Y291bnRyeUlEOiBzdHJpbmc7XG5cdGVtYWlsQWRkcmVzczogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFuZ3VhZ2VJRDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRwaG9uZU51bWJlcjogc3RyaW5nO1xuXHRyZWZlcnJhbENvZGU6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHdscElEOiBzdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR1c0NpdGl6ZW46IGJvb2xlYW47XG5cdGxhc3RMb2dpbldoZW46IHN0cmluZztcblx0Y2l0aXplbnNoaXA6IHN0cmluZztcblx0YWRkcmVzc0xpbmUxOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMjogc3RyaW5nO1xuXHRjaXR5OiBzdHJpbmc7XG5cdHN0YXRlUHJvdmluY2U6IHN0cmluZztcblx0emlwUG9zdGFsQ29kZTogc3RyaW5nO1xuXHRmdWxsTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5mdWxsTmFtZSA9IGRhdGEuZmlyc3ROYW1lICsgXCIgXCIgKyBkYXRhLmxhc3ROYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBBUFBST1ZFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVKRUNURURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFVk9LRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IENMT1NFRFxuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UEVORElORzogMSxcblx0XHRBUFBST1ZFRDogMixcblx0XHRSRUpFQ1RFRDogMyxcblx0XHRSRVZPS0VEOiA0LFxuXHRcdENMT1NFRDogNSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgRE9DVU1FTlRfVFlQRVNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1Ncblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgRE9DVU1FTlRfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRQSE9UT19JRDogXCJQaWN0dXJlIElEXCIsXG5cdFx0UFJPT0ZfT0ZfQUREUkVTUzogXCJQcm9vZiBvZiBhZGRyZXNzXCIsXG5cdFx0UEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTOiBcIlBpY3R1cmUgSURfUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QWNjb3VudHModXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0QWNjb3VudHMoKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWUgYnkga2V5XG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyBnZXRTZXR0aW5ncyh1c2VySUQ6IHN0cmluZywga2V5Pzogc3RyaW5nKSB7XG5cdFx0aWYgKCFrZXkpIHtcblx0XHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nIG9mIGJvZHkpIHtcblx0XHRcdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZvcm1hdHRlZERhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlXG5cdCAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGdldFNldHRpbmdzKGtleT86IHN0cmluZykge1xuXHRcdHJldHVybiBVc2VyLmdldFNldHRpbmdzKHRoaXMudXNlcklELCBrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZXRTZXR0aW5nKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGtleSwgdmFsdWUsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHNldFNldHRpbmcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci5zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlKTtcblx0fVxuXG5cdHN0YXRpYyB1bnNldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nKSA6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dW5zZXRTZXR0aW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudW5zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvdXNlci1zdGF0dXN9XG5cdCAqL1xuXHRnZXRTdGF0dXMoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBsb2dvdXQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodXNlcklEKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLmxvZ291dCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgVXNlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcblx0XHRcdFx0YXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG5cdFx0XHRcdGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcblx0XHRcdFx0b3NUeXBlOiBcInVua25vd25cIixcblx0XHRcdFx0b3NWZXJzaW9uOiBcInVua25vd25cIixcblx0XHRcdFx0c2NyUmVzOiBcInVua25vd25cIixcblx0XHRcdFx0aXBBZGRyZXNzOiBcInVua25vd25cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFNlc3Npb25zLnNhdmUoYm9keS51c2VySUQsIGJvZHkuc2Vzc2lvbktleSk7XG5cdFx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRChib2R5LnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcblx0XHR9KS50aGVuKFxuXHRcdFx0KCkgPT4gZmFsc2UsXG5cdFx0XHQocmVqZWN0aW9uKSA9PiByZWplY3Rpb24uc3RhdHVzQ29kZSA9PT0gNDA0XG5cdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHQ6IFByb21pc2UucmVqZWN0KHJlamVjdGlvbiksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ2luQXV0b21hdGljYWxseSAtIElmIGZhbHNlLCBubyBzZXNzaW9uIHdpbGwgYmUgY3JlYXRlZC5cblx0ICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQgfCBVc2VyPn0gSWYgbG9naW5BdXRvbWF0aWNhbGx5IGlzIHRydWUsIGEgVXNlciB3aWxsIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcblx0XHR1dG1DYW1wYWlnbixcblx0XHR1dG1Db250ZW50LFxuXHRcdHV0bU1lZGl1bSxcblx0XHR1dG1Tb3VyY2UsXG5cdFx0dXRtVGVybSxcblx0fSwgbG9naW5BdXRvbWF0aWNhbGx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZCB8IFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHR3bHBJRDogQ29uZmlnLndscElELFxuXHRcdFx0XHRyZWZlcnJhbENvZGUsXG5cdFx0XHRcdHV0bUNhbXBhaWduLFxuXHRcdFx0XHR1dG1Db250ZW50LFxuXHRcdFx0XHR1dG1NZWRpdW0sXG5cdFx0XHRcdHV0bVNvdXJjZSxcblx0XHRcdFx0dXRtVGVybSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG5cdFx0XHRcdHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlLFxuXHR9KSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBsb2FkRG9jdW1lbnQoZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQ6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIGZvciBlc2xpbnRcblx0XHQvKiBnbG9iYWwgRm9ybURhdGEgKi9cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvZG9jdW1lbnRzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRDcmVkaXRDYXJkcyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIFVzZXIuYWRkQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZFRva2VuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIucmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==