/*!
 * 
 * 	drivewealth-client - JavaScript bindings for the DriveWealth API
 * 	Author: John Shammas
 * 	Version: v1.0.1
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
	
	var SEC_FEE_RATE = 0.000013;
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
							if (retries <= 0) return resolve(ordersMap);
							retries -= 1;
	
							Promise.all(orderResults.map(function (order) {
								return new Promise(function (resolve, reject) {
									Order.getByID(order.orderID).then(function (orderCurrent) {
										ordersMap[order.referenceID] = orderCurrent;
										resolve();
									}, function (error) {
										if (error.body && error.body.ordRejReason) {
											ordersMap[order.referenceID] = new Order(error.body);
										}
										resolve();
									});
								});
							})).then(function () {
								var shouldRetry = false;
								for (var reference in ordersMap) {
									var thisStatus = ordersMap[reference].ordStatus;
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
	
			/**
	   * @name ALLOWED_TYPES
	   * @memberof Funding
	   * @constant
	   * @property {string} DEPOSIT
	   * @property {string} WITHDRAW
	   * @property {string} DEPOSIT_AND_WITHDRAW
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
	   * @name DEPOSIT_FREQUENCIES
	   * @memberof Funding
	   * @constant
	   * @property {string} BIWEEKLY
	   * @property {string} MONTHLY_FIRST
	   * @property {string} MONTHLY_MIDDLE
	   * @property {string} QUARTERLY
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
	
					var pricing = [].concat(body.data).sort(function (x, y) {
						return x.amount - y.amount;
					}).map(function (price) {
						return Object.assign({}, price, { amount: Number(price.amount / 100) });
					});
	
					return pricing;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getRecurringDeposit",
			value: function getRecurringDeposit(id) {
				return (0, _request2.default)({
					endpoint: "/funding/ach/recurring-deposits/" + id,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref5) {
					var body = _ref5.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getRecurringDepositsForUser",
			value: function getRecurringDepositsForUser(userID) {
				return (0, _request2.default)({
					endpoint: "/users/" + userID + "/recurring-deposits",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref6) {
					var body = _ref6.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getRecurringDepositsForAccount",
			value: function getRecurringDepositsForAccount(userID, accountID) {
				return (0, _request2.default)({
					endpoint: "/users/" + userID + "/accounts/" + accountID + "/recurring-deposits",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref7) {
					var body = _ref7.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "updateRecurringDeposit",
			value: function updateRecurringDeposit(depositID, data) {
				return (0, _request2.default)({
					method: "PATCH",
					endpoint: "/funding/ach/recurring-deposits/" + depositID,
					sessionKey: _Sessions2.default.getAny(),
					body: data
				}).then(function (_ref8) {
					var body = _ref8.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "deleteRecurringDeposit",
			value: function deleteRecurringDeposit(depositID) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/funding/ach/recurring-deposits/" + depositID,
					sessionKey: _Sessions2.default.getAny()
				}).then(function () {
					return undefined;
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
	Funding.DEPOSIT_FREQUENCIES = {
		BIWEEKLY: "BIWEEKLY",
		MONTHLY_FIRST: "MONTHLY_FIRST",
		MONTHLY_MIDDLE: "MONTHLY_MIDDLE",
		QUARTERLY: "QUARTERLY"
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
				var queryString = "?accountID=" + accountID + ("&startDate=" + startDate.toISOString()) + ("&endDate=" + endDate.toISOString()) + "&type=02";
	
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
				var queryString = "?accountID=" + accountID + ("&startDate=" + startDate.toISOString()) + ("&endDate=" + endDate.toISOString()) + "&type=01";
	
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
				var queryString = "?accountID=" + accountID + ("&startDate=" + startDate.toISOString()) + ("&endDate=" + endDate.toISOString()) + "&type=03";
	
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
			key: "get",
	
	
			/**
	   * @instance
	   */
			value: function get() {
				return User.getByUserID(this.userID);
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "update",
	
	
			/**
	   * @instance
	   */
			value: function update(data) {
				return User.update(Object.assign({}, data, {
					userID: this.userID,
					email: data.email || this.emailAddress
				}));
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
	   * @instance
	   */
	
		}, {
			key: "getCreditCards",
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
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/userSessions/" + _Sessions2.default.get(userID),
					sessionKey: _Sessions2.default.get(userID)
				}).then(function () {
					_Sessions2.default.remove(userID);
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
				}).then(function () {
					return undefined;
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
				}).then(function (_ref8) {
					var body = _ref8.body;
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
				}).then(function (_ref9) {
					var body = _ref9.body;
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
	
			/**
	   * @static
	   */
	
		}, {
			key: "forgotPassword",
			value: function forgotPassword(username) {
				return (0, _request2.default)({
					method: "POST",
					endpoint: "/users/passwords",
					body: {
						username: username
					}
				}).then(function (_ref10) {
					var body = _ref10.body;
					return body.passwordResetID;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "resetPassword",
			value: function resetPassword(passwordResetID, code, password) {
				return (0, _request2.default)({
					method: "PUT",
					endpoint: "/users/passwords/" + passwordResetID,
					body: {
						code: code,
						passwordResetID: passwordResetID,
						password: password
					}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MzY2YmY1ZjljMTYwMjM1YzA1MSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsIkRyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIiwiRHJpdmVXZWFsdGhFcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJFeHRlbmRhYmxlRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJjb2RlIiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJyZWR1Y2UiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJvcmRlckN1cnJlbnQiLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJwcmljaW5nIiwiY29uY2F0Iiwic29ydCIsIngiLCJ5IiwiZGVwb3NpdElEIiwiQUxMT1dFRF9UWVBFUyIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwiREVQT1NJVF9GUkVRVUVOQ0lFUyIsIkJJV0VFS0xZIiwiTU9OVEhMWV9GSVJTVCIsIk1PTlRITFlfTUlERExFIiwiUVVBUlRFUkxZIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiY29tcHJlc3Npb24iLCJnZXRDaGFydERhdGEiLCJzeW1ib2xzIiwiam9pbiIsImluY2x1ZGVGdW5kYW1lbnRhbHMiLCJ0cmFkZVN0YXR1cyIsImNyaXRlcmlhIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwidGltZVBhcmFtcyIsImRhdGVTdGFydCIsInJlcGxhY2UiLCJkYXRlRW5kIiwiVFJBREVfU1RBVFVTRVMiLCJJTkFDVElWRSIsIkFDVElWRSIsIkNIQVJUX0NPTVBSRVNTSU9OUyIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXRMaXN0Rm9yVXNlcklEIiwia2V5IiwiZ2V0U2V0dGluZ3MiLCJ2YWx1ZSIsInNldFNldHRpbmciLCJ1bnNldFNldHRpbmciLCJsb2dvdXQiLCJnZXRCeVVzZXJJRCIsInVwZGF0ZSIsImVtYWlsIiwiZW1haWxBZGRyZXNzIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0Q3JlZGl0Q2FyZHMiLCJjYXJkVG9rZW4iLCJhZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwicmVtb3ZlQ3JlZGl0Q2FyZCIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwicmVqZWN0aW9uIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImxvZ2luQXV0b21hdGljYWxseSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJjb3VudHJ5SUQiLCJwaG9uZUhvbWUiLCJwaG9uZVdvcmsiLCJwaG9uZSIsInN0YXRlUHJvdmluY2UiLCJ6aXBQb3N0YWxDb2RlIiwicGhvbmVNb2JpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhc3N3b3JkUmVzZXRJRCIsIkFQUFJPVkVEIiwiUkVWT0tFRCIsIkRPQ1VNRU5UX1RZUEVTIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7bUJBRWU7QUFDZEEsb0NBRGM7QUFFZEMsc0JBRmM7O0FBSWRDLDRCQUpjO0FBS2RDLHdCQUxjO0FBTWRDLHdCQU5jO0FBT2RDLDRCQVBjO0FBUWRDLGtDQVJjO0FBU2RDLHdCQVRjO0FBVWRDLDRCQVZjO0FBV2RDLHNCQVhjO0FBWWRDLDhCQVpjOztBQWNkQyxzQkFkYztBQWVkQztBQWZjLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFzQkE7Ozs7O0tBS3FCVixPO0FBZ0JwQixtQkFBWVcsSUFBWixFQUEwQjtBQUFBOztBQUN6QkMsVUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLElBQXBCO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7O2dDQUdrRDtBQUFBLFFBQXZDRyxJQUF1Qyx1RUFBdkIsSUFBdUI7O0FBQ2pELFdBQU9kLFFBQVFlLFVBQVIsQ0FBbUIsS0FBS0MsTUFBeEIsRUFBZ0MsS0FBS0MsU0FBckMsRUFBZ0RILElBQWhELENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFpQkE7Ozs7QUFJQTs7O0FBR0E7OztvQ0FHa0M7QUFDakMsV0FBT2QsUUFBUWtCLGNBQVIsaUJBQXVCLEtBQUtGLE1BQTVCLEVBQW9DLEtBQUtDLFNBQXpDLG9DQUF1REUsU0FBdkQsR0FBUDtBQUNBOztBQUVEOzs7O0FBSUE7OztBQUdBOzs7Ozs7OztBQXNCQTs7OzhCQUdXTCxJLEVBQWNILEksRUFBd0M7QUFDaEUsUUFBTVMsZ0JBQW9DO0FBQ3pDSCxnQkFBVyxLQUFLQSxTQUR5QjtBQUV6Q0ksZ0JBQVcsS0FBS0EsU0FGeUI7QUFHekNDLGtCQUFhLEtBQUtBLFdBSHVCO0FBSXpDTixhQUFRLEtBQUtBO0FBSjRCLEtBQTFDOztBQU9BLFdBQU9YLGdCQUFNa0IsTUFBTixDQUFhVCxJQUFiLEVBQW1CTSxhQUFuQixFQUFrQ1QsSUFBbEMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7dUNBR2dFO0FBQUEsUUFBOUNhLE9BQThDLHVFQUE1QixFQUE0Qjs7QUFDL0RBLFlBQVFSLE1BQVIsR0FBaUIsS0FBS0EsTUFBdEI7QUFDQVEsWUFBUVAsU0FBUixHQUFvQixLQUFLQSxTQUF6QjtBQUNBLFdBQU9kLGtCQUFRc0IsaUJBQVIsQ0FBMEJELE9BQTFCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQkUsUyxFQUFpQkMsTyxFQUF1QztBQUN2RSxXQUFPckIsa0JBQVFzQixlQUFSLENBQXdCLEtBQUtaLE1BQTdCLEVBQXFDLEtBQUtLLFNBQTFDLEVBQXFESyxTQUFyRCxFQUFnRUMsT0FBaEUsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCRCxTLEVBQWlCQyxPLEVBQXVDO0FBQ3ZFLFdBQU9yQixrQkFBUXVCLGVBQVIsQ0FBd0IsS0FBS2IsTUFBN0IsRUFBcUMsS0FBS0ssU0FBMUMsRUFBcURLLFNBQXJELEVBQWdFQyxPQUFoRSxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OztpQ0FHY0QsUyxFQUFpQkMsTyxFQUF1QztBQUNyRSxXQUFPckIsa0JBQVF3QixhQUFSLENBQXNCLEtBQUtkLE1BQTNCLEVBQW1DLEtBQUtDLFNBQXhDLEVBQW1EUyxTQUFuRCxFQUE4REMsT0FBOUQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCRCxTLEVBQWlCQyxPLEVBQXVDO0FBQ3ZFLFdBQU9yQixrQkFBUXlCLGVBQVIsQ0FBd0IsS0FBS2YsTUFBN0IsRUFBcUMsS0FBS0MsU0FBMUMsRUFBcURTLFNBQXJELEVBQWdFQyxPQUFoRSxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OztvQ0FHaUJELFMsRUFBaUJDLE8sRUFBdUM7QUFDeEUsV0FBT3JCLGtCQUFRMEIsZ0JBQVIsQ0FBeUIsS0FBS2hCLE1BQTlCLEVBQXNDLEtBQUtDLFNBQTNDLEVBQXNEUyxTQUF0RCxFQUFpRUMsT0FBakUsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7dUNBR29CTSxPLEVBQWtDO0FBQ3JELFdBQU8zQixrQkFBUTRCLG1CQUFSLENBQTRCLEtBQUtsQixNQUFqQyxFQUF5QyxLQUFLQyxTQUE5QyxFQUF5RGdCLE9BQXpELENBQVA7QUFDQTs7QUFFRDs7Ozs7OzhCQXVGV1QsTyxFQUEwQjtBQUNwQyxXQUFPWixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlcsT0FBbEIsRUFBMkI7QUFDakNSLGFBQVEsS0FBS0EsTUFEb0I7QUFFakNDLGdCQUFXLEtBQUtBO0FBRmlCLEtBQTNCLENBQVA7QUFJQTs7QUFFRDs7Ozs7O3FDQUdtQztBQUNsQyxXQUFPakIsUUFBUW1DLGVBQVIsQ0FBd0IsS0FBS0MsVUFBTCxFQUF4QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0JaLE8sRUFBa0M7QUFDakQsV0FBT3hCLFFBQVFxQyxlQUFSLENBQXdCLEtBQUtELFVBQUwsQ0FBZ0JaLE9BQWhCLENBQXhCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3NDQUdtQkEsTyxFQUFrQztBQUNwRCxXQUFPeEIsUUFBUXNDLGtCQUFSLENBQTJCLEtBQUtGLFVBQUwsQ0FBZ0JaLE9BQWhCLENBQTNCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3dDQUdzQztBQUNyQyxXQUFPeEIsUUFBUXVDLGtCQUFSLENBQTJCLEtBQUtILFVBQUwsRUFBM0IsQ0FBUDtBQUNBOzs7OEJBbFBpQnBCLE0sRUFBZ0JDLFMsRUFBMEQ7QUFBQSxRQUF2Q0gsSUFBdUMsdUVBQXZCLElBQXVCOztBQUMzRixXQUFPLHVCQUFRO0FBQ2QwQixhQUFRLEtBRE07QUFFZEMsZUFBVSxZQUFVekIsTUFBViw4QkFDSkMsU0FESSxJQUNRSCxPQUFPLE1BQU1BLElBQWIsR0FBb0IsRUFENUIsRUFGSTtBQUlkNEIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFKRSxLQUFSLEVBS0o0QixJQUxJLENBS0MsZ0JBQWM7QUFBQSxTQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3JCLFNBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDaEJELFdBQUtDLE1BQUwsR0FBY0QsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEtBQUQ7QUFBQSxjQUFXLElBQUkzQyxlQUFKLENBQVUyQyxLQUFWLENBQVg7QUFBQSxPQUFoQixDQUFkO0FBQ0E7QUFDRCxZQUFPbEMsT0FBTytCLEtBQUsvQixJQUFMLENBQVAsR0FBb0IrQixJQUEzQjtBQUNBLEtBVk0sQ0FBUDtBQVdBOzs7a0NBMEJxQjdCLE0sRUFBZ0JDLFMsRUFBb0M7QUFDekUsUUFBSWdDLGNBQWMsRUFBbEI7QUFDQSxRQUFJOUIsVUFBVStCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsU0FBTXhCLFlBQVlQLFVBQVUsQ0FBVixDQUFsQjtBQUNBLFNBQU1RLFVBQVVSLFVBQVUsQ0FBVixDQUFoQjtBQUNBOEIsb0JBQWUsYUFBZjtBQUNBQSxtQ0FBNEJ2QixVQUFVeUIsV0FBVixFQUE1QixHQUFzRCxDQUFDLE9BQU96QixVQUFVMEIsUUFBVixLQUF1QixDQUE5QixDQUFELEVBQW1DQyxLQUFuQyxDQUF5QyxDQUFDLENBQTFDLENBQXRELEdBQXFHLENBQUMsTUFBTTNCLFVBQVU0QixPQUFWLEVBQVAsRUFBNEJELEtBQTVCLENBQWtDLENBQUMsQ0FBbkMsQ0FBckc7QUFDQUosa0NBQTJCdEIsUUFBUXdCLFdBQVIsRUFBM0IsR0FBbUQsQ0FBQyxPQUFPeEIsUUFBUXlCLFFBQVIsS0FBcUIsQ0FBNUIsQ0FBRCxFQUFpQ0MsS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUFuRCxHQUFnRyxDQUFDLE1BQU0xQixRQUFRMkIsT0FBUixFQUFQLEVBQTBCRCxLQUExQixDQUFnQyxDQUFDLENBQWpDLENBQWhHO0FBQ0EsS0FORCxNQU1PLElBQUlsQyxVQUFVK0IsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUNsQ0QseUNBQWtDOUIsVUFBVSxDQUFWLENBQWxDO0FBQ0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkcUIsYUFBUSxLQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLDRCQUFpREMsU0FBakQsR0FBNkRnQyxXQUYvQztBQUdkUCxpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUtVLFdBQW5CO0FBQUEsS0FKRCxDQUFQO0FBS0E7OztvQ0FzRXVCdkMsTSxFQUF5QztBQUNoRSxXQUFPLHVCQUFRO0FBQ2R3QixhQUFRLEtBRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsY0FGYztBQUdkMEIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLRSxHQUFMLENBQVM7QUFBQSxhQUFXLElBQUkvQyxPQUFKLENBQVl3RCxPQUFaLENBQVg7QUFBQSxNQUFULENBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7OzBCQUdjeEMsTSxFQUFnQkYsSSxFQUFjSCxJLEVBQWM7QUFDekQsUUFBSUcsU0FBU2QsUUFBUXlELEtBQVIsQ0FBY0MsUUFBM0IsRUFBcUM7QUFDcEMvQyxZQUFPO0FBQ05LLG9CQURNO0FBRU4yQyxvQkFBYyxNQUZSO0FBR05DLGtCQUFZakQ7QUFITixNQUFQO0FBS0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkNkIsYUFBUSxNQURNO0FBRWRDLGVBQVUzQixTQUFTZCxRQUFReUQsS0FBUixDQUFjQyxRQUF2QixHQUNQLG1CQURPLEdBRVAsZUFKVztBQUtkaEIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWIsQ0FMRTtBQU1kNkIsV0FBTWxDO0FBTlEsS0FBUixFQU9KaUMsSUFQSSxDQU9DO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBUEQsQ0FBUDtBQVFBOztBQUVEOzs7Ozs7O3NDQUkwQkwsTSxTQVVOO0FBQUEsUUFUbkJ4QixNQVNtQixTQVRuQkEsTUFTbUI7QUFBQSxRQVJuQkMsU0FRbUIsU0FSbkJBLFNBUW1CO0FBQUEsUUFQbkI0QyxNQU9tQixTQVBuQkEsTUFPbUI7QUFBQSxRQU5uQkMsU0FNbUIsU0FObkJBLFNBTW1COztBQUNuQixXQUFPLHVCQUFRO0FBQ2R0QixtQkFEYztBQUVkQywyQkFBb0J6QixNQUFwQixrQkFBdUNDLFNBQXZDLG1CQUZjO0FBR2R5QixpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYixDQUhFO0FBSWQ2QixXQUFNLENBQUNMLE9BQU91QixVQUFQLENBQWtCLEdBQWxCLENBQUQsR0FBMEJDLFNBQTFCO0FBQ0xIO0FBREssUUFFSkMsVUFBVUMsVUFBVixDQUFxQixNQUFyQixJQUErQixRQUEvQixHQUEwQyxlQUZ0QyxFQUV3REQsU0FGeEQ7QUFKUSxLQUFSLEVBUUpsQixJQVJJLENBUUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FSRCxDQUFQO0FBU0E7O0FBRUQ7Ozs7OzttQ0FHdUJyQixPLEVBQWtDO0FBQ3hELFdBQU94QixRQUFRaUUsa0JBQVIsQ0FBMkIsS0FBM0IsRUFBa0N6QyxPQUFsQyxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHdUJBLE8sRUFBa0M7QUFDeEQsV0FBT3hCLFFBQVFpRSxrQkFBUixDQUEyQixNQUEzQixFQUFtQ3pDLE9BQW5DLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3NDQUcwQkEsTyxFQUFrQztBQUMzRCxXQUFPeEIsUUFBUWlFLGtCQUFSLENBQTJCLEtBQTNCLEVBQWtDekMsT0FBbEMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7c0NBRzBCQSxPLEVBQWtDO0FBQzNELFdBQU94QixRQUFRaUUsa0JBQVIsQ0FBMkIsUUFBM0IsRUFBcUN6QyxPQUFyQyxDQUFQO0FBQ0E7Ozs7OztBQTNSbUJ4QixRLENBOEJia0UsYSxHQUEyQztBQUNqREMsUUFBTSxNQUQyQztBQUVqREMsVUFBUSxRQUZ5QztBQUdqREMsZ0JBQWMsY0FIbUM7QUFJakRDLGFBQVcsV0FKc0M7QUFLakRDLE9BQUs7QUFMNEMsRTtBQTlCOUJ2RSxRLENBK0Nid0UsUSxHQUF1QztBQUM3Q0MsV0FBUyxDQURvQztBQUU3Q0MsUUFBTSxDQUZ1QztBQUc3Q0Msc0JBQW9CLENBSHlCO0FBSTdDQyxVQUFRO0FBSnFDLEU7QUEvQzFCNUUsUSxDQTZEYnlELEssR0FBa0M7QUFDeENDLFlBQVUsQ0FEOEI7QUFFeENtQixRQUFNO0FBRmtDLEU7bUJBN0RyQjdFLE87Ozs7Ozs7Ozs7OzttQkNoQkdVLE87O0FBZnhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZZSxVQUFTQSxPQUFULE9BY1o7QUFBQSx5QkFiRjhCLE1BYUU7QUFBQSxNQWJGQSxNQWFFLCtCQWJPLEtBYVA7QUFBQSxNQVpGQyxRQVlFLFFBWkZBLFFBWUU7QUFBQSxNQVhGQyxVQVdFLFFBWEZBLFVBV0U7QUFBQSxNQVZGRyxJQVVFLFFBVkZBLElBVUU7QUFBQSw4QkFURmlDLFdBU0U7QUFBQSxNQVRGQSxXQVNFLG9DQVRZLEVBU1o7QUFBQSx1QkFSRkMsSUFRRTtBQUFBLE1BUkZBLElBUUUsNkJBUktoRixjQUFNaUYsR0FRWDs7QUFDRixNQUFNQyxVQUFzQztBQUMzQ0MsV0FBUTtBQURtQyxHQUE1QztBQUdBLE1BQUkxQyxXQUFXLE1BQVgsSUFBcUJBLFdBQVcsS0FBaEMsSUFBeUNBLFdBQVcsT0FBeEQsRUFBaUU7QUFDaEV5QyxXQUFRLGNBQVIsSUFBMEIsa0JBQTFCO0FBQ0E7QUFDRCxNQUFJdkMsVUFBSixFQUFnQjtBQUNmdUMsV0FBUSx5QkFBUixJQUFxQ3ZDLFVBQXJDO0FBQ0E7QUFDRCxPQUFLLElBQU15QyxPQUFYLElBQXFCTCxXQUFyQixFQUFrQztBQUNqQ0csV0FBUUUsT0FBUixJQUFrQkwsWUFBWUssT0FBWixDQUFsQjtBQUNBOztBQUVEMUMsYUFBV3hDLGVBQU9tRixHQUFQLENBQVdMLElBQVgsSUFBbUJ0QyxRQUE5Qjs7QUFFQSxNQUFJd0MsUUFBUSxjQUFSLE1BQTRCLGtCQUFoQyxFQUFvRHBDLE9BQU93QyxLQUFLQyxTQUFMLENBQWV6QyxJQUFmLENBQVA7O0FBRXBELFNBQU8sSUFBSTBDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkN4RixrQkFBT3lGLFFBQVAsQ0FBZ0JsRCxNQUFoQixFQUF3QkMsUUFBeEIsRUFBa0N3QyxPQUFsQyxFQUEyQ3BDLElBQTNDLEVBQWlELFVBQUM4QyxVQUFELEVBQWFDLFVBQWIsRUFBeUJDLE9BQXpCLEVBQXFDO0FBQ3JGLFFBQU1DLGNBQWNGLFdBQVcsY0FBWCxLQUE4QkEsV0FBVyxjQUFYLENBQTlCLElBQTRELEVBQWhGO0FBQ0EsUUFBSUMsV0FBV0MsWUFBWUMsT0FBWixDQUFvQixrQkFBcEIsTUFBNEMsQ0FBQyxDQUE1RCxFQUErRDtBQUM5RCxTQUFJO0FBQ0hGLGdCQUFVUixLQUFLVyxLQUFMLENBQVdILE9BQVgsQ0FBVjtBQUNBLE1BRkQsQ0FFRSxPQUFPSSxHQUFQLEVBQVk7QUFDYjtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUMsT0FBT1AsVUFBUCxFQUFtQixDQUFuQixNQUEwQixHQUExQixJQUFpQ08sT0FBT1AsVUFBUCxFQUFtQixDQUFuQixNQUEwQixHQUEvRCxFQUFvRTtBQUNuRUgsYUFBUTtBQUNQM0MsWUFBTWdELE9BREM7QUFFUEYsNEJBRk87QUFHUFYsZUFBU1c7QUFIRixNQUFSO0FBS0EsS0FORCxNQU1PO0FBQ04sU0FBSU8scUJBQUo7QUFDQSxTQUFJTixPQUFKLEVBQWE7QUFDWk0scUJBQWVOLFFBQVFPLE9BQVIsSUFBbUJmLEtBQUtDLFNBQUwsQ0FBZU8sT0FBZixDQUFsQztBQUNBO0FBQ0QsU0FBTVEsUUFBUVYsZUFBZSxHQUFmLEdBQ1gsSUFBSVcsOEJBQUosQ0FBNEJILFlBQTVCLEVBQTBDTixPQUExQyxFQUFtREYsVUFBbkQsRUFBK0RDLFVBQS9ELENBRFcsR0FFWCxJQUFJVyx1QkFBSixDQUFxQkosWUFBckIsRUFBbUNOLE9BQW5DLEVBQTRDRixVQUE1QyxFQUF3REMsVUFBeEQsQ0FGSDtBQUdBSCxZQUFPWSxLQUFQO0FBQ0E7QUFDRCxJQTFCRDtBQTJCQSxHQTVCTSxDQUFQO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7U0M1QmU1RixLLEdBQUFBLEs7Ozs7QUFqRGhCOzs7QUFHTyxLQUFNUiwwQkFBUztBQUNyQm1GLE9BQUssSUFEZ0I7QUFFckJNLFlBQVUsSUFGVztBQUdyQmMsYUFBVyxJQUhVO0FBSXJCQyxjQUFZLElBSlM7QUFLckJDLFNBQU8sSUFMYztBQU1yQkMsaUJBQWUsSUFOTTtBQU9yQkMsZ0JBQWM7QUFQTyxFQUFmOztBQVVQOzs7Ozs7Ozs7QUFTTyxLQUFNN0csd0JBQVE7QUFDcEJpRixPQUFLLEtBRGU7QUFFcEI2QixRQUFNLE1BRmM7QUFHcEJDLFdBQVM7QUFIVyxFQUFkOztBQU1QOzs7Ozs7OztBQVFPLEtBQU1oSCxzQ0FBZTtBQUMzQmlILHlDQUNFaEgsTUFBTWlGLEdBRFIsRUFDYyw4QkFEZCx5QkFFRWpGLE1BQU04RyxJQUZSLEVBRWUsNEJBRmYseUJBR0U5RyxNQUFNK0csT0FIUixFQUdrQiwrQkFIbEIsUUFEMkI7QUFNM0JFLDRDQUNFakgsTUFBTWlGLEdBRFIsRUFDYyxnQ0FEZCwwQkFFRWpGLE1BQU04RyxJQUZSLEVBRWUsOEJBRmYsMEJBR0U5RyxNQUFNK0csT0FIUixFQUdrQixpQ0FIbEI7QUFOMkIsRUFBckI7O0FBYUEsVUFBU3JHLEtBQVQsT0FRSjtBQUFBLE1BUEYyRSxHQU9FLFFBUEZBLEdBT0U7QUFBQSxNQU5GTSxRQU1FLFFBTkZBLFFBTUU7QUFBQSxNQUxGYyxTQUtFLFFBTEZBLFNBS0U7QUFBQSxNQUpGQyxVQUlFLFFBSkZBLFVBSUU7QUFBQSx3QkFIRkMsS0FHRTtBQUFBLE1BSEZBLEtBR0UsOEJBSE0sSUFHTjtBQUFBLE1BRkZDLGFBRUUsUUFGRkEsYUFFRTtBQUFBLE1BREZDLFlBQ0UsUUFERkEsWUFDRTs7QUFDRjNHLFNBQU9tRixHQUFQLEdBQWFBLEdBQWI7QUFDQW5GLFNBQU95RixRQUFQLEdBQWtCQSxRQUFsQjtBQUNBekYsU0FBT3VHLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0F2RyxTQUFPd0csVUFBUCxHQUFvQkEsVUFBcEI7QUFDQXhHLFNBQU95RyxLQUFQLEdBQWVBLEtBQWY7QUFDQXpHLFNBQU8wRyxhQUFQLEdBQXVCQSxpQkFBaUJELEtBQXhDO0FBQ0F6RyxTQUFPMkcsWUFBUCxHQUFzQkEsWUFBdEI7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakVEOzs7Ozs7Ozs7Ozs7S0FFYUwsZ0IsV0FBQUEsZ0I7OztBQUNaLDRCQUFZSCxPQUFaLEVBQXFCdkQsSUFBckIsRUFBMkI4QyxVQUEzQixFQUF1Q1YsT0FBdkMsRUFBZ0Q7QUFBQTs7QUFBQSxtSUFDekNtQixPQUR5Qzs7QUFFL0MsU0FBS3ZELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUs4QyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtWLE9BQUwsR0FBZUEsT0FBZjtBQUorQztBQUsvQzs7O0dBTm9DZ0MsOEI7O0tBU3pCWCx1QixXQUFBQSx1Qjs7O0FBQ1osbUNBQVlGLE9BQVosRUFBcUJ2RCxJQUFyQixFQUEyQjhDLFVBQTNCLEVBQXVDVixPQUF2QyxFQUFnRDtBQUFBOztBQUFBLGtKQUN6Q21CLE9BRHlDOztBQUUvQyxVQUFLdkQsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBSzhDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS1YsT0FBTCxHQUFlQSxPQUFmO0FBSitDO0FBSy9DOzs7R0FOMkNnQyw4Qjs7bUJBUzlCO0FBQ2RWLG9DQURjO0FBRWREO0FBRmMsRTs7Ozs7O0FDcEJmOztBQUVBLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0N0RE05RixRO0FBQ0YseUJBQWM7QUFBQTs7QUFDVixjQUFLMEcsS0FBTCxHQUFhLEVBQWI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7Ozs7OEJBRUluRyxNLEVBQVEwQixVLEVBQVk7QUFDckIsa0JBQUt3RSxLQUFMLENBQVdsRyxNQUFYLElBQXFCMEIsVUFBckI7QUFDQSxrQkFBS3lFLFNBQUwsR0FBaUJuRyxNQUFqQjtBQUNIOzs7NkJBRUdBLE0sRUFBUTtBQUNSLG9CQUFPLEtBQUtrRyxLQUFMLENBQVdsRyxNQUFYLENBQVA7QUFDSDs7O2tDQUVRO0FBQ0wsb0JBQU8sS0FBS2tHLEtBQUwsQ0FBVyxLQUFLQyxTQUFoQixDQUFQO0FBQ0g7OztnQ0FFTW5HLE0sRUFBUTtBQUNYLG9CQUFPLEtBQUtrRyxLQUFMLENBQVdsRyxNQUFYLENBQVA7QUFDSDs7Ozs7O0FBR0UsS0FBTW9HLDhCQUFXLElBQUk1RyxRQUFKLEVBQWpCO21CQUNRNEcsUTs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUtBLEtBQU1DLGVBQWUsUUFBckI7QUFDQSxLQUFNQyxjQUFjLElBQXBCO0FBQ0EsS0FBTUMsY0FBY0MsT0FBT0MsaUJBQTNCO0FBQ0EsS0FBTUMsZUFBZSxRQUFyQjtBQUNBLEtBQU1DLGNBQWMsSUFBcEI7QUFDQSxLQUFNQyxjQUFjLElBQXBCOztBQTBCQTs7Ozs7S0FLcUJ2SCxLO0FBeUJwQixpQkFBWU0sSUFBWixFQUEwQjtBQUFBOztBQUN6QkMsVUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLElBQXBCO0FBQ0EsUUFBS2tILGVBQUwsR0FBdUJsSCxLQUFLbUgsWUFBNUI7QUFDQSxRQUFLQyxNQUFMLEdBQWNwSCxLQUFLcUgsU0FBbkI7QUFDQSxRQUFLbEgsSUFBTCxHQUFZSCxLQUFLc0gsT0FBTCxJQUFnQnRILEtBQUt1SCxTQUFqQztBQUNBLFFBQUtDLEtBQUwsR0FBYXhILEtBQUt5SCxTQUFMLElBQWtCekgsS0FBSzBILFVBQXZCLElBQXFDMUgsS0FBS3dILEtBQXZEO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs0QkFHd0I7QUFDdkIsV0FBTzlILE1BQU1pSSxNQUFOLENBQWEsS0FBS0MsT0FBbEIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7MEJBR2NBLE8sRUFBZ0M7QUFDN0MsV0FBTyx1QkFBUTtBQUNkL0YsYUFBUSxRQURNO0FBRWRDLDRCQUFxQjhGLE9BRlA7QUFHZDdGLGlCQUFZbEMsbUJBQVNnSSxNQUFUO0FBSEUsS0FBUixFQUlKNUYsSUFKSSxDQUlDO0FBQUEsWUFBTW9CLFNBQU47QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7OzJCQUdldUUsTyxFQUFpQztBQUMvQyxXQUFPLHVCQUFRO0FBQ2QvRixhQUFRLEtBRE07QUFFZEMsNEJBQXFCOEYsT0FGUDtBQUdkN0YsaUJBQVlsQyxtQkFBU2dJLE1BQVQ7QUFIRSxLQUFSLEVBSUo1RixJQUpJLENBSUMsZ0JBQW1DO0FBQUEsU0FBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLFNBQTFCOEMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsU0FBZFYsT0FBYyxRQUFkQSxPQUFjOztBQUMxQyxTQUFJcEMsS0FBS2lGLFlBQUwsS0FBc0I5RCxTQUExQixFQUFxQztBQUNwQyxhQUFPdUIsUUFBUUUsTUFBUixDQUNOLElBQUljLHVCQUFKLENBQXFCMUQsS0FBS2lGLFlBQTFCLEVBQXdDakYsSUFBeEMsRUFBOEM4QyxVQUE5QyxFQUEwRFYsT0FBMUQsQ0FETSxDQUFQO0FBR0E7QUFDRCxZQUFPLElBQUk1RSxLQUFKLENBQVV3QyxJQUFWLENBQVA7QUFDQSxLQVhNLENBQVA7QUFZQTs7QUFFRDs7Ozs7Ozs7OzBCQU9DL0IsSSxnQkEwQjBCO0FBQUEsUUF4QnpCRyxTQXdCeUIsU0F4QnpCQSxTQXdCeUI7QUFBQSxRQXZCekJJLFNBdUJ5QixTQXZCekJBLFNBdUJ5QjtBQUFBLFFBdEJ6QkwsTUFzQnlCLFNBdEJ6QkEsTUFzQnlCO0FBQUEsUUFyQnpCTSxXQXFCeUIsU0FyQnpCQSxXQXFCeUI7QUFBQSw0QkFsQnpCMEIsS0FrQnlCO0FBQUEsUUFqQnhCeUYsVUFpQndCLGVBakJ4QkEsVUFpQndCO0FBQUEsUUFoQnhCQyxJQWdCd0IsZUFoQnhCQSxJQWdCd0I7QUFBQSxRQWZ4QkMsR0Fld0IsZUFmeEJBLEdBZXdCO0FBQUEsUUFkeEJDLFVBY3dCLGVBZHhCQSxVQWN3QjtBQUFBLFFBYnhCQyxPQWF3QixlQWJ4QkEsT0Fhd0I7QUFBQSxRQVp4QkMsUUFZd0IsZUFaeEJBLFFBWXdCO0FBQUEsUUFYeEJYLEtBV3dCLGVBWHhCQSxLQVd3QjtBQUFBLGtDQVR6QlksV0FTeUI7QUFBQSxRQVR6QkEsV0FTeUIscUNBVFgsSUFTVztBQUFBLHNDQVJ6QkMsaUJBUXlCO0FBQUEsUUFSekJBLGlCQVF5Qix5Q0FSTCxJQVFLO0FBQUEscUNBUHpCQyxjQU95QjtBQUFBLFFBUHpCQSxjQU95Qix3Q0FQUixFQU9ROztBQUMxQixRQUFJTCxjQUFjRCxHQUFsQixFQUF1QjtBQUN0QixXQUFNLElBQUl6SSxLQUFKLENBQVUsb0RBQVYsQ0FBTjtBQUNBOztBQUVELFFBQUlZLFNBQVNULE1BQU1vRCxLQUFOLENBQVl5RixNQUF6QixFQUFpQztBQUNoQ0Qsc0JBQWlCLENBQWpCOztBQUVBLFNBQUksQ0FBQ2QsS0FBTCxFQUFZO0FBQ1gsWUFBTSxJQUFJakksS0FBSixDQUFVLDRDQUFWLENBQU47QUFDQTs7QUFFRCxTQUFJNEksUUFBSixFQUFjO0FBQ2IsWUFBTSxJQUFJNUksS0FBSixDQUFVLGlEQUFWLENBQU47QUFDQTtBQUNEOztBQUVELFdBQU8sdUJBQVE7QUFDZHNDLGFBQVEsTUFETTtBQUVkQyxlQUFVLFNBRkk7QUFHZEMsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsV0FBTTtBQUNMc0csb0JBQWNWLFdBQVdVLFlBQVgsSUFBMkJWLFdBQVdXLEVBQXRDLElBQTRDWCxVQURyRDtBQUVMeEgsMEJBRks7QUFHTEksMEJBSEs7QUFJTEwsb0JBSks7QUFLTE0sOEJBTEs7QUFNTDJHLGVBQVNuSCxJQU5KO0FBT0w0SCxnQkFQSztBQVFMVyxnQkFBVVYsT0FBTzNFLFNBUlo7QUFTTDRFLGtCQUFZQSxjQUFjNUUsU0FUckI7QUFVTDZFLHNCQVZLO0FBV0xDLHdCQVhLO0FBWUxYLGFBQU9ySCxTQUFTVCxNQUFNb0QsS0FBTixDQUFZNkYsSUFBckIsR0FBNEJuQixLQUE1QixHQUFvQ25FLFNBWnRDO0FBYUxxRSxrQkFBWXZILFNBQVNULE1BQU1vRCxLQUFOLENBQVk4RixLQUFyQixHQUE2QnBCLEtBQTdCLEdBQXFDbkU7QUFiNUM7QUFKUSxLQUFSLEVBbUJKcEIsSUFuQkksQ0FtQkMsaUJBQWM7QUFBQSxTQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQ3JCLFNBQUksQ0FBQ2tHLFdBQUwsRUFBa0IsT0FBT2xHLEtBQUswRixPQUFaOztBQUVsQixZQUFPLElBQUloRCxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFVBQUkrRCxVQUFVUCxjQUFkO0FBQ0EsVUFBTVEsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDekJELGtCQUFXLENBQVg7QUFDQW5KLGFBQU1xSixPQUFOLENBQWM3RyxLQUFLMEYsT0FBbkIsRUFBNEIzRixJQUE1QixDQUFpQyxpQkFBUztBQUN6QyxZQUFNK0csV0FBVzNHLE1BQU0rRSxNQUFOLEtBQWlCMUgsTUFBTW1FLFFBQU4sQ0FBZW9GLEdBQWhDLElBQ2hCNUcsTUFBTStFLE1BQU4sS0FBaUIxSCxNQUFNbUUsUUFBTixDQUFlcUYsWUFEakM7O0FBR0EsWUFBSUwsV0FBVyxDQUFYLElBQWdCRyxRQUFwQixFQUE4QjtBQUM3QixnQkFBT25FLFFBQVF4QyxLQUFSLENBQVA7QUFDQTtBQUNEOEcsbUJBQVdMLFdBQVgsRUFBd0JULGlCQUF4QjtBQUNBLFFBUkQsRUFRRyxpQkFBUztBQUNYLFlBQUkzQyxNQUFNeEQsSUFBTixDQUFXa0gsSUFBWCxLQUFvQixHQUFwQixJQUEyQlAsVUFBVSxDQUF6QyxFQUE0QztBQUMzQyxnQkFBT00sV0FBV0wsV0FBWCxFQUF3QlQsaUJBQXhCLENBQVA7QUFDQTtBQUNELGVBQU92RCxPQUFPWSxLQUFQLENBQVA7QUFDQSxRQWJEO0FBY0EsT0FoQkQ7QUFpQkF5RCxpQkFBV0wsV0FBWCxFQUF3QlQsaUJBQXhCO0FBQ0EsTUFwQk0sQ0FBUDtBQXFCQSxLQTNDTSxDQUFQO0FBNENBOztBQUVEOzs7Ozs7Ozs0Q0F1QjRDO0FBQUEsUUFoQjFDL0gsU0FnQjBDLFNBaEIxQ0EsU0FnQjBDO0FBQUEsUUFmMUNJLFNBZTBDLFNBZjFDQSxTQWUwQztBQUFBLFFBZDFDTCxNQWMwQyxTQWQxQ0EsTUFjMEM7QUFBQSxRQWIxQ00sV0FhMEMsU0FiMUNBLFdBYTBDO0FBQUEsUUFWMUN3QixNQVUwQyxTQVYxQ0EsTUFVMEM7QUFBQSxrQ0FUMUNpRyxXQVMwQztBQUFBLFFBVDFDQSxXQVMwQyxxQ0FUNUIsSUFTNEI7QUFBQSxzQ0FSMUNDLGlCQVEwQztBQUFBLFFBUjFDQSxpQkFRMEMseUNBUnRCLEdBUXNCO0FBQUEscUNBUDFDQyxjQU8wQztBQUFBLFFBUDFDQSxjQU8wQyx3Q0FQekIsRUFPeUI7O0FBQzNDLFdBQU8sdUJBQVE7QUFDZHpHLGFBQVEsTUFETTtBQUVkQyxlQUFVLFNBRkk7QUFHZEMsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsV0FBTUMsT0FBT0MsR0FBUCxDQUFXO0FBQUEsYUFBVTtBQUMxQm9HLHFCQUFjbkcsTUFBTXlGLFVBQU4sQ0FBaUJVLFlBQWpCLElBQ1ZuRyxNQUFNeUYsVUFBTixDQUFpQlcsRUFEUCxJQUNhcEcsTUFBTXlGLFVBRlA7QUFHMUJ4SCwyQkFIMEI7QUFJMUJJLDJCQUowQjtBQUsxQkwscUJBTDBCO0FBTTFCTSwrQkFOMEI7QUFPMUIyRyxnQkFBUzVILE1BQU1vRCxLQUFOLENBQVl5RixNQVBLO0FBUTFCUixhQUFNckksTUFBTTJKLEtBQU4sQ0FBWUMsR0FSUTtBQVMxQlosaUJBQVVyRyxNQUFNMkYsR0FBTixHQUFZM0YsTUFBTTJGLEdBQWxCLEdBQXdCM0UsU0FUUjtBQVUxQjRFLG1CQUFZNUYsTUFBTTRGLFVBQU4sR0FBbUI1RixNQUFNNEYsVUFBekIsR0FBc0M1RSxTQVZ4QjtBQVcxQjZFLGdCQUFTN0YsTUFBTTZGLE9BWFc7QUFZMUJDLGlCQUFVOUYsTUFBTThGO0FBWlUsT0FBVjtBQUFBLE1BQVg7QUFKUSxLQUFSLEVBa0JKbEcsSUFsQkksQ0FrQkMsaUJBQWM7QUFBQSxTQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQ3JCLFNBQUlxSCxlQUFlckgsSUFBbkI7QUFDQSxTQUFNc0gsWUFBWUQsYUFBYUUsTUFBYixDQUNqQixVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWUMsR0FBWjtBQUFBLGFBQW9CM0osT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0J3SixHQUFsQixzQkFDbEJ2SCxPQUFPeUgsR0FBUCxFQUFZQyxXQURNLEVBQ1FGLElBRFIsRUFBcEI7QUFBQSxNQURpQixFQUlqQixFQUppQixDQUFsQjs7QUFPQSxTQUFJLENBQUN2QixXQUFMLEVBQWtCLE9BQU9vQixTQUFQOztBQUVsQixZQUFPLElBQUk1RSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFVBQUkrRCxVQUFVUCxjQUFkO0FBQ0FpQixxQkFBZUEsYUFBYW5ILEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRdUgsR0FBUjtBQUFBLGNBQWdCM0osT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JtQyxLQUFsQixFQUF5QjtBQUN4RXdILHFCQUFhMUgsT0FBT3lILEdBQVAsRUFBWUM7QUFEK0MsUUFBekIsQ0FBaEI7QUFBQSxPQUFqQixDQUFmO0FBR0EsVUFBTWYsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDekIsV0FBSUQsV0FBVyxDQUFmLEVBQWtCLE9BQU9oRSxRQUFRMkUsU0FBUixDQUFQO0FBQ2xCWCxrQkFBVyxDQUFYOztBQUVBakUsZUFBUWtGLEdBQVIsQ0FDQ1AsYUFBYW5ILEdBQWIsQ0FBaUI7QUFBQSxlQUFTLElBQUl3QyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzFEcEYsZUFBTXFKLE9BQU4sQ0FBYzFHLE1BQU11RixPQUFwQixFQUE2QjNGLElBQTdCLENBQWtDLHdCQUFnQjtBQUNqRHVILG9CQUFVbkgsTUFBTXdILFdBQWhCLElBQStCRSxZQUEvQjtBQUNBbEY7QUFDQSxVQUhELEVBR0csaUJBQVM7QUFDWCxjQUFJYSxNQUFNeEQsSUFBTixJQUFjd0QsTUFBTXhELElBQU4sQ0FBV2lGLFlBQTdCLEVBQTJDO0FBQzFDcUMscUJBQVVuSCxNQUFNd0gsV0FBaEIsSUFBK0IsSUFBSW5LLEtBQUosQ0FBVWdHLE1BQU14RCxJQUFoQixDQUEvQjtBQUNBO0FBQ0QyQztBQUNBLFVBUkQ7QUFTQSxTQVZ5QixDQUFUO0FBQUEsUUFBakIsQ0FERCxFQVlFNUMsSUFaRixDQVlPLFlBQU07QUFDWixZQUFJK0gsY0FBYyxLQUFsQjtBQUNBLGFBQUssSUFBTUMsU0FBWCxJQUF3QlQsU0FBeEIsRUFBbUM7QUFDbEMsYUFBTVUsYUFBYVYsVUFBVVMsU0FBVixFQUFxQjVDLFNBQXhDO0FBQ0EsYUFBSSxDQUFDNkMsVUFBRCxJQUNBQSxlQUFleEssTUFBTW1FLFFBQU4sQ0FBZW9GLEdBRDlCLElBRUFpQixlQUFleEssTUFBTW1FLFFBQU4sQ0FBZXFGLFlBRmxDLEVBR0U7QUFDRGMsd0JBQWMsSUFBZDtBQUNBO0FBQ0E7QUFDRDtBQUNELFlBQUlBLFdBQUosRUFBaUI7QUFDaEJiLG9CQUFXTCxXQUFYLEVBQXdCVCxpQkFBeEI7QUFDQSxTQUZELE1BRU87QUFDTixnQkFBT3hELFFBQVEyRSxTQUFSLENBQVA7QUFDQTtBQUNELFFBN0JEO0FBOEJBLE9BbENEO0FBbUNBTCxpQkFBV0wsV0FBWCxFQUF3QlQsaUJBQXhCO0FBQ0EsTUF6Q00sQ0FBUDtBQTBDQSxLQXZFTSxDQUFQO0FBd0VBOztBQUVEOzs7Ozs7c0NBSUNsRyxNLEVBTUFnSSxrQixFQVlDO0FBQ0RoSSxhQUFTaUksTUFBTUMsT0FBTixDQUFjbEksTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUMsQ0FBQ0EsTUFBRCxDQUExQztBQUNBLFFBQUltSSxRQUFRLENBQVo7QUFDQSxRQUFJQyxnQkFBZ0IsQ0FBcEI7QUFDQSxRQUFJQyxvQkFBSjs7QUFKQyxRQU1PQyxjQU5QLEdBTTBCTixrQkFOMUIsQ0FNT00sY0FOUDs7QUFPRCxRQUFJQSxrQkFBa0JBLGVBQWVDLFFBQXJDLEVBQStDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQzlDLDJCQUEyQkQsZUFBZUMsUUFBMUMsOEhBQW9EO0FBQUEsV0FBekNDLFlBQXlDOztBQUNuRCxXQUFJQSxhQUFhQyxVQUFiLEtBQTRCekksT0FBT0ksTUFBdkMsRUFBK0M7QUFDOUNpSSxzQkFBY0csYUFBYUgsV0FBM0I7QUFDQTtBQUNBO0FBQ0Q7QUFONkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU85Qzs7QUFFRCxRQUFNSyxVQUFVLEVBQWhCO0FBaEJDO0FBQUE7QUFBQTs7QUFBQTtBQWlCRCwyQkFBb0IxSSxNQUFwQixtSUFBNEI7QUFBQSxVQUFqQkUsTUFBaUI7QUFBQSxVQUNuQjJGLElBRG1CLEdBQ3FCM0YsTUFEckIsQ0FDbkIyRixHQURtQjtBQUFBLFVBQ2Q4QyxZQURjLEdBQ3FCekksTUFEckIsQ0FDZHlJLFdBRGM7QUFBQSxVQUNEL0MsS0FEQyxHQUNxQjFGLE1BRHJCLENBQ0QwRixJQURDO0FBQUEsVUFDSzhCLFlBREwsR0FDcUJ4SCxNQURyQixDQUNLd0gsV0FETDs7O0FBRzNCLFVBQUlrQixhQUFhL0MsT0FBTSxDQUFOLEdBQ2RtQyxtQkFBbUJhLGNBREwsR0FFZGIsbUJBQW1CYyxRQUZ0QjtBQUdBRixvQkFDQztBQUNDRyxnQkFBU0MsS0FBS0MsS0FEZjtBQUVDQyxhQUFNRixLQUFLRyxJQUZaO0FBR0NDLGNBQU9KLEtBQUtLO0FBSGIsUUFJRXJCLG1CQUFtQnNCLG1CQUpyQixFQUtDTixLQUFLTyxHQUFMLENBQVMsQ0FBVCxFQUFZMUQsT0FBTW1DLG1CQUFtQndCLFVBQXJDLENBTEQsSUFNSXhCLG1CQUFtQnlCLFVBUHhCOztBQVVBLFVBQUlDLFNBQVMsQ0FBYjtBQUNBLFVBQUlDLFNBQVMsQ0FBYjtBQUNBLFVBQUkzQixtQkFBbUI0QixlQUFuQixJQUFzQ2hFLFVBQVNySSxNQUFNMkosS0FBTixDQUFZMkMsSUFBL0QsRUFBcUU7QUFDcEVGLGdCQUFTOUQsT0FBTThDLFlBQU4sR0FBb0IvRCxZQUE3QjtBQUNBK0UsZ0JBQVNYLEtBQUtjLEdBQUwsQ0FBU2hGLFdBQVQsRUFBc0I2RSxNQUF0QixDQUFUO0FBQ0FBLGdCQUFTWCxLQUFLTyxHQUFMLENBQVMxRSxXQUFULEVBQXNCOEUsTUFBdEIsQ0FBVDs7QUFFQSxXQUFJOUQsUUFBTyxDQUFYLEVBQWM7QUFDYjZELGlCQUFTVixLQUFLSyxLQUFMLENBQVd4RCxJQUFYLElBQWtCOEMsWUFBbEIsR0FBZ0NwRSxZQUF6QztBQUNBbUYsaUJBQVNWLEtBQUtjLEdBQUwsQ0FBU3JGLFdBQVQsRUFBc0JpRixNQUF0QixDQUFUO0FBQ0FBLGlCQUFTVixLQUFLTyxHQUFMLENBQVMvRSxXQUFULEVBQXNCa0YsTUFBdEIsQ0FBVDtBQUNBO0FBQ0Q7O0FBRUQsVUFBTUssYUFBYW5CLGFBQWFjLE1BQWIsR0FBc0JDLE1BQXpDO0FBQ0F4QixlQUFTNEIsVUFBVDtBQUNBM0IsdUJBQWlCc0IsU0FBU0MsTUFBMUI7O0FBRUFqQixjQUFRaEIsWUFBUixJQUF1QjtBQUN0QlMsY0FBTzRCLFVBRGU7QUFFdEJDLG1CQUFZcEIsVUFGVTtBQUd0QnFCLGFBQU07QUFDTEMsYUFBS1IsTUFEQTtBQUVMUyxhQUFLUjtBQUZBO0FBSGdCLE9BQXZCO0FBUUE7QUEzREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE2REQsV0FBTztBQUNOeEIsWUFBT0UsY0FBZUEsY0FBY0QsYUFBN0IsR0FBOENELEtBRC9DO0FBRU5pQyx5QkFBb0IvQixjQUFlQSxjQUFjRixLQUE3QixHQUFzQyxDQUZwRDtBQUdOTztBQUhNLEtBQVA7QUFLQTs7Ozs7O0FBM1ltQm5MLE0sQ0F3Q2IySixLLEdBQWtDO0FBQ3hDQyxPQUFLLEdBRG1DO0FBRXhDMEMsUUFBTTtBQUZrQyxFO0FBeENyQnRNLE0sQ0FxRGJvRCxLLEdBQWtDO0FBQ3hDeUYsVUFBUSxHQURnQztBQUV4Q0ssU0FBTyxHQUZpQztBQUd4Q0QsUUFBTTtBQUhrQyxFO0FBckRyQmpKLE0sQ0FxRWJtRSxRLEdBQXVDO0FBQzdDb0YsT0FBSyxHQUR3QztBQUU3Q0MsZ0JBQWMsR0FGK0I7QUFHN0NzRCxRQUFNLEdBSHVDO0FBSTdDQyxZQUFVLEdBSm1DO0FBSzdDQyxZQUFVO0FBTG1DLEU7bUJBckUxQmhOLEs7Ozs7Ozs7Ozs7Ozs7OztBQzVDckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztLQUlxQkYsTzs7Ozs7Ozs7O0FBK0JwQjs7OztBQTlCQTs7Ozs7Ozs7dUNBc0RnQztBQUFBLG1GQUE1QixFQUE0QjtBQUFBLFFBcEIvQmEsTUFvQitCLFFBcEIvQkEsTUFvQitCO0FBQUEsUUFuQi9CQyxTQW1CK0IsUUFuQi9CQSxTQW1CK0I7QUFBQSxRQWxCL0JxTSxRQWtCK0IsUUFsQi9CQSxRQWtCK0I7QUFBQSxRQWpCL0JDLFNBaUIrQixRQWpCL0JBLFNBaUIrQjtBQUFBLFFBaEIvQkMsU0FnQitCLFFBaEIvQkEsU0FnQitCO0FBQUEsUUFmL0JDLE1BZStCLFFBZi9CQSxNQWUrQjtBQUFBLDRCQWQvQkMsT0FjK0I7QUFBQSxRQWQvQkEsT0FjK0IsZ0NBZHJCLEVBY3FCOztBQUMvQixRQUFJRCxXQUFXRixhQUFhQyxTQUF4QixDQUFKLEVBQXdDO0FBQ3ZDLFdBQU0sSUFBSXROLEtBQUoscUVBQU47QUFDQTs7QUFFRCxRQUFJK0MsMkJBQXlCaEQsZUFBTzBHLGFBQWhDLGdCQUF3RDNGLE1BQXhELG1CQUE0RUMsU0FBaEY7QUFDQSxRQUFJcU0sUUFBSixFQUFjckssOEJBQTRCcUssUUFBNUI7QUFDZCxRQUFJQyxTQUFKLEVBQWV0SywrQkFBNkJzSyxTQUE3QjtBQUNmLFFBQUlDLFNBQUosRUFBZXZLLCtCQUE2QnVLLFNBQTdCO0FBQ2YsUUFBSUMsTUFBSixFQUFZeEssNEJBQTBCd0ssTUFBMUI7QUFDWixRQUFJQyxRQUFRQyxJQUFaLEVBQWtCMUssa0NBQWdDeUssUUFBUUMsSUFBeEM7QUFDbEIsUUFBSUQsUUFBUUUsT0FBWixFQUFxQjNLLHFDQUFtQ3lLLFFBQVFFLE9BQTNDO0FBQ3JCLFFBQUlGLFFBQVFHLFFBQVosRUFBc0I1SyxzQ0FBb0N5SyxRQUFRRyxRQUE1QztBQUN0QixRQUFJSCxRQUFRSSxPQUFaLEVBQXFCN0sscUNBQW1DeUssUUFBUUksT0FBM0M7O0FBRXJCLFdBQU8sdUJBQVE7QUFDZHRMLGFBQVEsS0FETTtBQUVkdUMsV0FBTWhGLGNBQU04RyxJQUZFO0FBR2RwRSxxQ0FBOEJRLFdBSGhCO0FBSWRQLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiO0FBSkUsS0FBUixFQUtKNEIsSUFMSSxDQUtDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBTEQsQ0FBUDtBQU1BOztBQUVEOzs7OztBQS9EQTs7Ozs7Ozs7Ozs7O21DQWtFdUI3QixNLEVBQWdCO0FBQ3RDLFdBQU8sdUJBQVE7QUFDZHlCLGVBQVUsaUJBREk7QUFFZEMsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFGRSxLQUFSLEVBR0o0QixJQUhJLENBR0M7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLbEMsSUFBbkI7QUFBQSxLQUhELENBQVA7QUFJQTs7QUFFRDs7Ozs7O3dDQUc0QkssTSxFQUFnQjtBQUMzQyxXQUFPLHVCQUFRO0FBQ2R5QixlQUFVLGlDQURJO0FBRWRDLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiO0FBRkUsS0FBUixFQUdKNEIsSUFISSxDQUdDLGlCQUFjO0FBQUEsU0FBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNyQixTQUFNa0wsVUFBVSxHQUFHQyxNQUFILENBQVVuTCxLQUFLbEMsSUFBZixFQUNkc04sSUFEYyxDQUNULFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVELEVBQUVULE1BQUYsR0FBV1UsRUFBRVYsTUFBdkI7QUFBQSxNQURTLEVBRWQxSyxHQUZjLENBRVY7QUFBQSxhQUFTbkMsT0FBT0MsTUFBUCxDQUNiLEVBRGEsRUFFYnNILEtBRmEsRUFHYixFQUFFc0YsUUFBUWpHLE9BQU9XLE1BQU1zRixNQUFOLEdBQWUsR0FBdEIsQ0FBVixFQUhhLENBQVQ7QUFBQSxNQUZVLENBQWhCOztBQVFBLFlBQU9NLE9BQVA7QUFDQSxLQWJNLENBQVA7QUFjQTs7QUFFRDs7Ozs7O3VDQUcyQjNFLEUsRUFBWTtBQUN0QyxXQUFPLHVCQUFRO0FBQ2QzRyxvREFBNkMyRyxFQUQvQjtBQUVkMUcsaUJBQVlsQyxtQkFBU2dJLE1BQVQ7QUFGRSxLQUFSLEVBR0o1RixJQUhJLENBR0M7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FIRCxDQUFQO0FBSUE7O0FBRUQ7Ozs7OzsrQ0FHbUM3QixNLEVBQWdCO0FBQ2xELFdBQU8sdUJBQVE7QUFDZHlCLDJCQUFvQnpCLE1BQXBCLHdCQURjO0FBRWQwQixpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUZFLEtBQVIsRUFHSjRCLElBSEksQ0FHQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLElBQWQ7QUFBQSxLQUhELENBQVA7QUFJQTs7QUFFRDs7Ozs7O2tEQUdzQzdCLE0sRUFBZ0JDLFMsRUFBbUI7QUFDeEUsV0FBTyx1QkFBUTtBQUNkd0IsMkJBQW9CekIsTUFBcEIsa0JBQXVDQyxTQUF2Qyx3QkFEYztBQUVkeUIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFGRSxLQUFSLEVBR0o0QixJQUhJLENBR0M7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FIRCxDQUFQO0FBSUE7O0FBRUQ7Ozs7OzswQ0FHOEJ1TCxTLEVBQW1Cek4sSSxFQUErQjtBQUMvRSxXQUFPLHVCQUFRO0FBQ2Q2QixhQUFRLE9BRE07QUFFZEMsb0RBQTZDMkwsU0FGL0I7QUFHZDFMLGlCQUFZbEMsbUJBQVNnSSxNQUFULEVBSEU7QUFJZDNGLFdBQU1sQztBQUpRLEtBQVIsRUFLSmlDLElBTEksQ0FLQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLElBQWQ7QUFBQSxLQUxELENBQVA7QUFNQTs7QUFFRDs7Ozs7OzBDQUc4QnVMLFMsRUFBa0M7QUFDL0QsV0FBTyx1QkFBUTtBQUNkNUwsYUFBUSxRQURNO0FBRWRDLG9EQUE2QzJMLFNBRi9CO0FBR2QxTCxpQkFBWWxDLG1CQUFTZ0ksTUFBVDtBQUhFLEtBQVIsRUFJSjVGLElBSkksQ0FJQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozs7OztBQS9KbUI3RCxRLENBU2JrTyxhLEdBQWdCO0FBQ3RCQyxXQUFTLFNBRGE7QUFFdEJDLFlBQVUsVUFGWTtBQUd0QkMsd0JBQXNCO0FBSEEsRTtBQVRIck8sUSxDQXdCYnNPLG1CLEdBQXNCO0FBQzVCQyxZQUFVLFVBRGtCO0FBRTVCQyxpQkFBZSxlQUZhO0FBRzVCQyxrQkFBZ0IsZ0JBSFk7QUFJNUJDLGFBQVc7QUFKaUIsRTttQkF4QlQxTyxPOzs7Ozs7Ozs7Ozs7Ozs7QUNQckI7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7OztLQUlxQkcsTzs7Ozs7Ozs7QUFDcEI7OzttQ0FJQ1UsTSxFQUNBSyxTLEVBQ0FLLFMsRUFDQUMsTyxFQUN5QjtBQUN6QixRQUFNc0IsY0FDTCxpQkFBZXpDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYixDQUFmLEdBQ0Usc0JBREYsR0FFRSxvQkFGRix3QkFHb0JLLFNBSHBCLHFCQUlnQkssVUFBVW9OLFdBQVYsRUFKaEIsbUJBS2NuTixRQUFRbU4sV0FBUixFQUxkLGlCQU1ZN08sZUFBT3lHLEtBTm5CLElBT0UsbUJBUkg7O0FBVUEsV0FBTyx1QkFBUTtBQUNkbEUsYUFBUSxNQURNO0FBRWR1QyxXQUFNaEYsY0FBTStHLE9BRkU7QUFHZHJFLGdDQUF5QlEsV0FIWDtBQUlkUCxpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYixDQUpFO0FBS2Q2QixXQUFNO0FBTFEsS0FBUixFQU1KRCxJQU5JLENBTUM7QUFBQSxTQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLa00sV0FBTCxJQUFvQixFQUFsQztBQUFBLEtBTkQsQ0FBUDtBQU9BOztBQUVEOzs7Ozs7bUNBSUMvTixNLEVBQ0FLLFMsRUFDQUssUyxFQUNBQyxPLEVBQ3lCO0FBQ3pCLFFBQU1zQixjQUNMLGlCQUFlekMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiLENBQWYsR0FDRSx3QkFERixHQUVFLG9CQUZGLHdCQUdvQkssU0FIcEIscUJBSWdCSyxVQUFVb04sV0FBVixFQUpoQixtQkFLY25OLFFBQVFtTixXQUFSLEVBTGQsaUJBTVk3TyxlQUFPeUcsS0FObkIsSUFPRSxtQkFSSDs7QUFVQSxXQUFPLHVCQUFRO0FBQ2RsRSxhQUFRLE1BRE07QUFFZHVDLFdBQU1oRixjQUFNK0csT0FGRTtBQUdkckUsZ0NBQXlCUSxXQUhYO0FBSWRQLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiLENBSkU7QUFLZDZCLFdBQU07QUFMUSxLQUFSLEVBTUpELElBTkksQ0FNQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUtrTSxXQUFMLElBQW9CLEVBQWxDO0FBQUEsS0FORCxDQUFQO0FBT0E7O0FBRUQ7Ozs7OztpQ0FJQy9OLE0sRUFDQUMsUyxFQUNBUyxTLEVBQ0FDLE8sRUFDeUI7QUFDekIsUUFBTXNCLGNBQ0wsZ0JBQWNoQyxTQUFkLG9CQUNnQlMsVUFBVW9OLFdBQVYsRUFEaEIsbUJBRWNuTixRQUFRbU4sV0FBUixFQUZkLElBR0UsVUFKSDs7QUFNQSxXQUFPLHVCQUFRO0FBQ2R0TSxhQUFRLEtBRE07QUFFZEMsK0JBQXdCUSxXQUZWO0FBR2RQLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsUUFBUSxFQUF0QjtBQUFBLEtBSkQsQ0FBUDtBQUtBOztBQUVEOzs7Ozs7b0NBSUM3QixNLEVBQ0FDLFMsRUFDQVMsUyxFQUNBQyxPLEVBQ3lCO0FBQ3pCLFFBQU1zQixjQUNMLGdCQUFjaEMsU0FBZCxvQkFDZ0JTLFVBQVVvTixXQUFWLEVBRGhCLG1CQUVjbk4sUUFBUW1OLFdBQVIsRUFGZCxJQUdFLFVBSkg7O0FBTUEsV0FBTyx1QkFBUTtBQUNkdE0sYUFBUSxLQURNO0FBRWRDLCtCQUF3QlEsV0FGVjtBQUdkUCxpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLFFBQVEsRUFBdEI7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7O21DQUlDN0IsTSxFQUNBQyxTLEVBQ0FTLFMsRUFDQUMsTyxFQUN5QjtBQUN6QixRQUFNc0IsY0FDTCxnQkFBY2hDLFNBQWQsb0JBQ2dCUyxVQUFVb04sV0FBVixFQURoQixtQkFFY25OLFFBQVFtTixXQUFSLEVBRmQsSUFHRSxVQUpIOztBQU1BLFdBQU8sdUJBQVE7QUFDZHRNLGFBQVEsS0FETTtBQUVkQywrQkFBd0JRLFdBRlY7QUFHZFAsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxRQUFRLEVBQXRCO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7Ozt1Q0FJQzdCLE0sRUFDQUMsUyxFQUNBZ0IsTyxFQUNrQjtBQUNsQixXQUFPLHVCQUFRO0FBQ2RPLGFBQVEsS0FETTtBQUVkQyxnQ0FBeUJ4QixTQUF6QixTQUFzQ2dCLE9BRnhCO0FBR2RTLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBS21NLEdBQW5CO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7OzsyQ0FHK0I7QUFDOUIsV0FBTyx1QkFBUTtBQUNkeE0sYUFBUSxLQURNO0FBRWRDLGVBQVU7QUFGSSxLQUFSLEVBR0pHLElBSEksQ0FHQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLFFBQVEsRUFBdEI7QUFBQSxLQUhELENBQVA7QUFJQTs7Ozs7O21CQWxKbUJ2QyxPOzs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7QUFPQTs7Ozs7S0FLcUJGLFU7QUFvQnBCLHNCQUFZTyxJQUFaLEVBQTBCO0FBQUE7O0FBQ3pCQyxVQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsSUFBcEI7QUFDQTs7QUFFRDs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTs7OzhCQUcyQjtBQUMxQixXQUFPUCxXQUFXNk8sUUFBWCxDQUFvQixLQUFLQyxNQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBZ0NBOzs7O0FBSUE7OztnQ0FHYUMsVyxFQUFxQjtBQUNqQyxRQUFJaE8sVUFBVStCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsWUFBTzlDLFdBQVdnUCxZQUFYLENBQ04sS0FBS2pHLFlBREMsRUFFTmdHLFdBRk0sRUFHTmhPLFVBQVUsQ0FBVixDQUhNLEVBSU5BLFVBQVUsQ0FBVixDQUpNLENBQVA7QUFNQTtBQUNELFdBQU9mLFdBQVdnUCxZQUFYLENBQXdCLEtBQUtqRyxZQUE3QixFQUEyQ2dHLFdBQTNDLEVBQXdEaE8sVUFBVSxDQUFWLENBQXhELENBQVA7QUFDQTs7QUFFRDs7OztBQUlBOzs7Ozs7OztBQW5IQTs7OytCQUdtQitOLE0sRUFBeUU7QUFDM0YsUUFBTUcsVUFBVSxPQUFPSCxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCLENBQUNBLE1BQUQsQ0FBN0IsR0FBd0NBLE1BQXhEOztBQUVBLFdBQU8sdUJBQVE7QUFDZDFNLGFBQVEsS0FETTtBQUVkQyx5Q0FBa0M0TSxRQUFRQyxJQUFSLENBQWEsR0FBYixDQUZwQjtBQUdkNU0saUJBQVlsQyxtQkFBU2dJLE1BQVQ7QUFIRSxLQUFSLEVBSUo1RixJQUpJLENBSUMsZ0JBQWM7QUFBQSxTQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3JCQSxZQUFPQSxLQUFLRSxHQUFMLENBQVM7QUFBQSxhQUFjLElBQUkzQyxVQUFKLENBQWVxSSxVQUFmLENBQWQ7QUFBQSxNQUFULENBQVA7QUFDQSxZQUFPLE9BQU95RyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCck0sS0FBSyxDQUFMLENBQTdCLEdBQXVDQSxJQUE5QztBQUNBLEtBUE0sQ0FBUDtBQVFBOztBQUVEOzs7Ozs7MkJBR2V1RyxFLEVBQXNFO0FBQUEsUUFBMURtRyxtQkFBMEQsdUVBQTNCLElBQTJCOztBQUNwRixXQUFPLHVCQUFRO0FBQ2QvTSxhQUFRLEtBRE07QUFFZEMsaUNBQTBCMkcsRUFBMUIsSUFBK0JtRyxzQkFBc0IsWUFBdEIsR0FBcUMsRUFBcEUsQ0FGYztBQUdkN00saUJBQVlsQyxtQkFBU2dJLE1BQVQ7QUFIRSxLQUFSLEVBSUo1RixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjLElBQUl6QyxVQUFKLENBQWV5QyxJQUFmLENBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7OzRCQUd1RTtBQUFBLFFBQXpEMk0sV0FBeUQsdUVBQWxDLElBQWtDOztBQUN0RSxXQUFPLHVCQUFRO0FBQ2RoTixhQUFRLEtBRE07QUFFZEMsNkNBQXNDK00sV0FGeEI7QUFHZDlNLGlCQUFZbEMsbUJBQVNnSSxNQUFUO0FBSEUsS0FBUixFQUlKNUYsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBS0UsR0FBTCxDQUFTO0FBQUEsYUFBYyxJQUFJM0MsVUFBSixDQUFlcUksVUFBZixDQUFkO0FBQUEsTUFBVCxDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7OzswQkFHY2dILFEsRUFBMEU7QUFDdkYsUUFBSXhNLGNBQWMsR0FBbEI7QUFDQSxRQUFJd00sU0FBU1AsTUFBYixFQUFxQmpNLDJCQUF5QndNLFNBQVNQLE1BQWxDO0FBQ3JCLFFBQUlPLFNBQVM5QixJQUFiLEVBQW1CMUsseUJBQXVCd00sU0FBUzlCLElBQWhDOztBQUVuQixXQUFPLHVCQUFRO0FBQ2RuTCxhQUFRLEtBRE07QUFFZEMsZ0NBQXlCUSxXQUZYO0FBR2RQLGlCQUFZbEMsbUJBQVNnSSxNQUFUO0FBSEUsS0FBUixFQUlKNUYsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBS0UsR0FBTCxDQUFTO0FBQUEsYUFBYyxJQUFJM0MsVUFBSixDQUFlcUksVUFBZixDQUFkO0FBQUEsTUFBVCxDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozs0QkFhQXlHLE0sRUFFNkM7QUFDN0MsUUFBTUcsVUFBeUIsQ0FBQ3RFLE1BQU1DLE9BQU4sQ0FBY2tFLE1BQWQsSUFBd0JBLE1BQXhCLEdBQWlDLENBQUNBLE1BQUQsQ0FBbEMsRUFDN0JuTSxHQUQ2QixDQUN6QjtBQUFBLFlBQU8yTSxlQUFldFAsVUFBZixHQUE0QnNQLElBQUlSLE1BQWhDLEdBQXlDUSxHQUFoRDtBQUFBLEtBRHlCLENBQS9COztBQUdBLFdBQU8sdUJBQVE7QUFDZGxOLGFBQVEsS0FETTtBQUVkQyxvQ0FBNkI0TSxRQUFRQyxJQUFSLENBQWEsR0FBYixDQUZmO0FBR2Q1TSxpQkFBWWxDLG1CQUFTZ0ksTUFBVCxFQUhFO0FBSWQxRCxrQkFBYTtBQUNaSSxjQUFRO0FBREk7QUFKQyxLQUFSLEVBT0p0QyxJQVBJLENBT0MsaUJBQWM7QUFBQSxTQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQ3JCLFNBQUk4TSxNQUFNLEVBQVY7QUFDQTlNLFlBQU9BLEtBQUsrTSxLQUFMLENBQVcsR0FBWCxFQUFnQnZNLEtBQWhCLENBQXNCLEVBQXRCLENBQVA7QUFGcUI7QUFBQTtBQUFBOztBQUFBO0FBR3JCLDJCQUF1QlIsSUFBdkIsOEhBQTZCO0FBQUEsV0FBbEJnTixRQUFrQjs7QUFDNUIsV0FBTUMsY0FBY0QsU0FBU0QsS0FBVCxDQUFlLEdBQWYsQ0FBcEI7QUFDQUQsV0FBSUcsWUFBWSxDQUFaLENBQUosSUFBc0I7QUFDckJDLGFBQUt2SSxPQUFPc0ksWUFBWSxDQUFaLENBQVAsQ0FEZ0I7QUFFckJFLGFBQUt4SSxPQUFPc0ksWUFBWSxDQUFaLENBQVA7QUFGZ0IsUUFBdEI7QUFJQTtBQVRvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVVyQixTQUFJLENBQUMvRSxNQUFNQyxPQUFOLENBQWNrRSxNQUFkLENBQUwsRUFBNEJTLE1BQU1BLElBQUlOLFFBQVEsQ0FBUixDQUFKLENBQU47QUFDNUIsWUFBT00sR0FBUDtBQUNBLEtBbkJNLENBQVA7QUFvQkE7OztnQ0E0Qm1CeEcsWSxFQUFzQmdHLFcsRUFBNkM7QUFDdEYsUUFBSWMsbUJBQUo7QUFDQSxRQUFJOU8sVUFBVStCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsU0FBTWdOLFlBQVkvTyxVQUFVLENBQVYsRUFBYTJOLFdBQWIsR0FBMkJxQixPQUEzQixDQUFtQyxTQUFuQyxFQUE4QyxFQUE5QyxDQUFsQjtBQUNBLFNBQU1DLFVBQVVqUCxVQUFVLENBQVYsRUFBYTJOLFdBQWIsR0FBMkJxQixPQUEzQixDQUFtQyxTQUFuQyxFQUE4QyxFQUE5QyxDQUFoQjtBQUNBRixpQ0FBMEJDLFNBQTFCLGlCQUErQ0UsT0FBL0M7QUFDQSxLQUpELE1BSU87QUFDTkgsbUNBQTRCOU8sVUFBVSxDQUFWLENBQTVCO0FBQ0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkcUIsYUFBUSxLQURNO0FBRWRDLHVDQUFnQzBHLFlBQWhDLHFCQUE0RGdHLFdBQTVELFNBQTJFYyxVQUY3RDtBQUdkdk4saUJBQVlsQyxtQkFBU2dJLE1BQVQ7QUFIRSxLQUFSLEVBSUo1RixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLbEMsSUFBTCxDQUFVaVAsS0FBVixDQUFnQixHQUFoQixDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozs7OztBQS9MbUJ4UCxXLENBZ0NiaVEsYyxHQUE2QztBQUNuREMsWUFBVSxHQUR5QztBQUVuREMsVUFBUSxHQUYyQztBQUduRDNMLFVBQVE7QUFIMkMsRTtBQWhDaEN4RSxXLENBaURib1Esa0IsR0FBaUQ7QUFDdkRDLE9BQUssQ0FEa0Q7QUFFdkRDLFlBQVUsQ0FGNkM7QUFHdkRDLFlBQVUsQ0FINkM7QUFJdkRDLGFBQVcsQ0FKNEM7QUFLdkRDLFFBQU0sQ0FMaUQ7QUFNdkRDLFFBQU07QUFOaUQsRTttQkFqRHBDMVEsVTs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTUcsSTtBQXNCTCxnQkFBWUksSUFBWixFQUEwQjtBQUFBOztBQUN6QkMsVUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLElBQXBCO0FBQ0EsUUFBS29RLFFBQUwsR0FBZ0JwUSxLQUFLcVEsU0FBTCxHQUFpQixHQUFqQixHQUF1QnJRLEtBQUtzUSxRQUE1QztBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7aUNBR3VDO0FBQ3RDLFdBQU9qUixrQkFBUWtSLGdCQUFSLENBQXlCLEtBQUtsUSxNQUE5QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FBNEJBOzs7O0FBSUE7Ozs7OytCQUtZbVEsRyxFQUFjO0FBQ3pCLFdBQU81USxLQUFLNlEsV0FBTCxDQUFpQixLQUFLcFEsTUFBdEIsRUFBOEJtUSxHQUE5QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBY0E7Ozs4QkFHV0EsRyxFQUFhRSxLLEVBQThCO0FBQ3JELFdBQU85USxLQUFLK1EsVUFBTCxDQUFnQixLQUFLdFEsTUFBckIsRUFBNkJtUSxHQUE3QixFQUFrQ0UsS0FBbEMsQ0FBUDtBQUNBOzs7OztBQVVEOzs7Z0NBR2FGLEcsRUFBNEI7QUFDeEMsV0FBTzVRLEtBQUtnUixZQUFMLENBQWtCLEtBQUt2USxNQUF2QixFQUErQm1RLEdBQS9CLENBQVA7QUFDQTs7QUFFRDs7Ozs7OytCQUc2QjtBQUM1QixXQUFPLHVCQUFRO0FBQ2QzTyxhQUFRLEtBRE07QUFFZEMsMkJBQW9CLEtBQUt6QixNQUF6QixZQUZjO0FBR2QwQixpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhLEtBQUszQixNQUFsQjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFlBQWNBLElBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7Ozs7QUFhQTs7OzRCQUd3QjtBQUN2QixXQUFPdEMsS0FBS2lSLE1BQUwsQ0FBWSxLQUFLeFEsTUFBakIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7OztBQVdBOzs7eUJBR3FCO0FBQ3BCLFdBQU9ULEtBQUtrUixXQUFMLENBQWlCLEtBQUt6USxNQUF0QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBNEhBOzs7MEJBR09MLEksRUFBNkI7QUFDbkMsV0FBT0osS0FBS21SLE1BQUwsQ0FBWTlRLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QjtBQUMxQ0ssYUFBUSxLQUFLQSxNQUQ2QjtBQUUxQzJRLFlBQU9oUixLQUFLZ1IsS0FBTCxJQUFjLEtBQUtDO0FBRmdCLEtBQXhCLENBQVosQ0FBUDtBQUlBOztBQUVEOzs7Ozs7OztBQXNCQTs7O2tDQUdlQyxJLEVBQVkvUSxJLEVBQTZCO0FBQ3ZELFdBQU9QLEtBQUt1UixjQUFMLENBQW9CLEtBQUs5USxNQUF6QixFQUFpQzZRLElBQWpDLEVBQXVDL1EsSUFBdkMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7b0NBR3lDO0FBQ3hDLFdBQU9QLEtBQUt3UixjQUFMLENBQW9CLEtBQUsvUSxNQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBV0E7OztpQ0FHY2dSLFMsRUFBb0M7QUFDakQsV0FBT3pSLEtBQUswUixhQUFMLENBQW1CLEtBQUtqUixNQUF4QixFQUFnQ2dSLFNBQWhDLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFZQTs7O29DQUdpQkUsTSxFQUErQjtBQUMvQyxXQUFPM1IsS0FBSzRSLGdCQUFMLENBQXNCLEtBQUtuUixNQUEzQixFQUFtQ2tSLE1BQW5DLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFoV0E7OzsrQkFHbUJsUixNLEVBQXlDO0FBQzNELFdBQU9oQixrQkFBUWtSLGdCQUFSLENBQXlCbFEsTUFBekIsQ0FBUDtBQUNBOzs7K0JBb0JrQkEsTSxFQUFnQm1RLEcsRUFBYztBQUNoRCxRQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNULFlBQU8sdUJBQVE7QUFDZDNPLGNBQVEsS0FETTtBQUVkQyw0QkFBb0J6QixNQUFwQixjQUZjO0FBR2QwQixrQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLE1BQVIsRUFJSjRCLElBSkksQ0FJQyxpQkFBYztBQUFBLFVBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDckIsVUFBTXVQLGdCQUFnQixFQUF0QjtBQURxQjtBQUFBO0FBQUE7O0FBQUE7QUFFckIsNEJBQXNCdlAsSUFBdEIsOEhBQTRCO0FBQUEsWUFBakJ3UCxPQUFpQjs7QUFDM0JELHNCQUFjQyxRQUFRbEIsR0FBdEIsSUFBNkJrQixRQUFRaEIsS0FBckM7QUFDQTtBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtyQixhQUFPZSxhQUFQO0FBQ0EsTUFWTSxDQUFQO0FBV0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkNVAsYUFBUSxLQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLGtCQUF1Q21RLEdBRnpCO0FBR2R6TyxpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUt3TyxLQUFuQjtBQUFBLEtBSkQsQ0FBUDtBQUtBOzs7OEJBa0JpQnJRLE0sRUFBZ0JtUSxHLEVBQWFFLEssRUFBOEI7QUFDNUUsV0FBTyx1QkFBUTtBQUNkN08sYUFBUSxNQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLGNBRmM7QUFHZDBCLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFdBQU07QUFDTHNPLGNBREssRUFDQUU7QUFEQTtBQUpRLEtBQVIsRUFPSnpPLElBUEksQ0FPQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FQRCxDQUFQO0FBUUE7OztnQ0FTbUJoRCxNLEVBQWdCbVEsRyxFQUE2QjtBQUNoRSxXQUFPLHVCQUFRO0FBQ2QzTyxhQUFRLFFBRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsa0JBQXVDbVEsR0FGekI7QUFHZHpPLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsWUFBTW9CLFNBQU47QUFBQSxLQUpELENBQVA7QUFLQTs7OzBCQXVCYWhELE0sRUFBK0I7QUFDNUMsV0FBTyx1QkFBUTtBQUNkd0IsYUFBUSxRQURNO0FBRWRDLGtDQUEyQmpDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYixDQUZiO0FBR2QwQixpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQyxZQUFNO0FBQ2JwQyx3QkFBUzhSLE1BQVQsQ0FBZ0J0UixNQUFoQjtBQUNBLEtBTk0sQ0FBUDtBQU9BOzs7K0JBWWtCQSxNLEVBQStCO0FBQ2pELFdBQU8sdUJBQVE7QUFDZHdCLGFBQVEsS0FETTtBQUVkQywyQkFBb0J6QixNQUZOO0FBR2QwQixpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWMsSUFBSXRDLElBQUosQ0FBU3NDLElBQVQsQ0FBZDtBQUFBLEtBSkQsQ0FBUDtBQUtBOzs7eUJBWVkwUCxRLEVBQWtCQyxRLEVBQWlDO0FBQy9ELFdBQU8sdUJBQVE7QUFDZGhRLGFBQVEsTUFETTtBQUVkQyxlQUFVLGVBRkk7QUFHZEksV0FBTTtBQUNMMFAsd0JBREs7QUFFTEMsd0JBRks7QUFHTGhNLGlCQUFXdkcsZUFBT3VHLFNBSGI7QUFJTEMsa0JBQVl4RyxlQUFPd0csVUFKZDtBQUtMZ00sa0JBQVksT0FMUDtBQU1MQyxjQUFRLFNBTkg7QUFPTEMsaUJBQVcsU0FQTjtBQVFMQyxjQUFRLFNBUkg7QUFTTEMsaUJBQVc7QUFUTjtBQUhRLEtBQVIsRUFjSmpRLElBZEksQ0FjQyxpQkFBYztBQUFBLFNBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDckJyQyx3QkFBU3NTLElBQVQsQ0FBY2pRLEtBQUs3QixNQUFuQixFQUEyQjZCLEtBQUtILFVBQWhDO0FBQ0EsWUFBT25DLEtBQUtrUixXQUFMLENBQWlCNU8sS0FBSzdCLE1BQXRCLENBQVA7QUFDQSxLQWpCTSxDQUFQO0FBa0JBOztBQUVEOzs7Ozs7dUNBRzJCdVIsUSxFQUFvQztBQUM5RCxXQUFPLHVCQUFRO0FBQ2QvUCxhQUFRLEtBRE07QUFFZEMsb0NBQTZCOFA7QUFGZixLQUFSLEVBR0ozUCxJQUhJLENBSU47QUFBQSxZQUFNLEtBQU47QUFBQSxLQUpNLEVBS04sVUFBQ21RLFNBQUQ7QUFBQSxZQUFlQSxVQUFVcE4sVUFBVixLQUF5QixHQUF6QixHQUNaLElBRFksR0FFWkosUUFBUUUsTUFBUixDQUFlc04sU0FBZixDQUZIO0FBQUEsS0FMTSxDQUFQO0FBU0E7O0FBRUQ7Ozs7Ozs7O2lDQWtCNkQ7QUFBQSxRQVo1RFIsUUFZNEQsU0FaNURBLFFBWTREO0FBQUEsUUFYNURDLFFBVzRELFNBWDVEQSxRQVc0RDtBQUFBLFFBVjVEeEIsU0FVNEQsU0FWNURBLFNBVTREO0FBQUEsUUFUNURDLFFBUzRELFNBVDVEQSxRQVM0RDtBQUFBLFFBUjVEVSxLQVE0RCxTQVI1REEsS0FRNEQ7QUFBQSxRQVA1RGMsVUFPNEQsU0FQNURBLFVBTzREO0FBQUEsbUNBTjVEN0wsWUFNNEQ7QUFBQSxRQU41REEsWUFNNEQsc0NBTjdDM0csZUFBTzJHLFlBTXNDO0FBQUEsUUFMNURvTSxXQUs0RCxTQUw1REEsV0FLNEQ7QUFBQSxRQUo1REMsVUFJNEQsU0FKNURBLFVBSTREO0FBQUEsUUFINURDLFNBRzRELFNBSDVEQSxTQUc0RDtBQUFBLFFBRjVEQyxTQUU0RCxTQUY1REEsU0FFNEQ7QUFBQSxRQUQ1REMsT0FDNEQsU0FENURBLE9BQzREO0FBQUEsUUFBMURDLGtCQUEwRCx1RUFBNUIsSUFBNEI7O0FBQzVELFdBQU8sdUJBQVE7QUFDZDdRLGFBQVEsTUFETTtBQUVkQyxlQUFVLGVBRkk7QUFHZEksV0FBTTtBQUNMMFAsd0JBREs7QUFFTEMsd0JBRks7QUFHTHhCLDBCQUhLO0FBSUxDLHdCQUpLO0FBS0xxQyxxQkFBZTNCLEtBTFY7QUFNTGMsNEJBTks7QUFPTC9MLGFBQU96RyxlQUFPeUcsS0FQVDtBQVFMRSxnQ0FSSztBQVNMb00sOEJBVEs7QUFVTEMsNEJBVks7QUFXTEMsMEJBWEs7QUFZTEMsMEJBWks7QUFhTEM7QUFiSztBQUhRLEtBQVIsRUFrQkp4USxJQWxCSSxDQWtCQyxZQUFNO0FBQ2IsU0FBSXlRLGtCQUFKLEVBQXdCO0FBQ3ZCLGFBQU85UyxLQUFLZ1QsS0FBTCxDQUFXaEIsUUFBWCxFQUFxQkMsUUFBckIsQ0FBUDtBQUNBO0FBQ0QsS0F0Qk0sQ0FBUDtBQXVCQTs7QUFFRDs7Ozs7O2lDQWtCa0I7QUFBQSxRQWRqQnhSLE1BY2lCLFNBZGpCQSxNQWNpQjtBQUFBLFFBYmpCd1MsWUFhaUIsU0FiakJBLFlBYWlCO0FBQUEsUUFaakJDLFlBWWlCLFNBWmpCQSxZQVlpQjtBQUFBLFFBWGpCQyxJQVdpQixTQVhqQkEsSUFXaUI7QUFBQSxRQVZqQkMsU0FVaUIsU0FWakJBLFNBVWlCO0FBQUEsUUFUakJoQyxLQVNpQixTQVRqQkEsS0FTaUI7QUFBQSxRQVJqQlgsU0FRaUIsU0FSakJBLFNBUWlCO0FBQUEsUUFQakJDLFFBT2lCLFNBUGpCQSxRQU9pQjtBQUFBLFFBTmpCd0IsVUFNaUIsU0FOakJBLFVBTWlCO0FBQUEsUUFMakJtQixTQUtpQixTQUxqQkEsU0FLaUI7QUFBQSxRQUpqQkMsU0FJaUIsU0FKakJBLFNBSWlCO0FBQUEsUUFIakJDLEtBR2lCLFNBSGpCQSxLQUdpQjtBQUFBLFFBRmpCQyxhQUVpQixTQUZqQkEsYUFFaUI7QUFBQSxRQURqQkMsYUFDaUIsU0FEakJBLGFBQ2lCOztBQUNqQixXQUFPLHVCQUFRO0FBQ2R4UixhQUFRLEtBRE07QUFFZEMsMkJBQW9CekIsTUFGTjtBQUdkMEIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsV0FBTTtBQUNMMlEsZ0NBREs7QUFFTEMsZ0NBRks7QUFHTEMsZ0JBSEs7QUFJTEMsMEJBSks7QUFLTEwscUJBQWUzQixLQUxWO0FBTUxYLDBCQU5LO0FBT0xDLHdCQVBLO0FBUUx3Qiw0QkFSSztBQVNMbUIsMEJBVEs7QUFVTEMsMEJBVks7QUFXTEksbUJBQWFILEtBWFI7QUFZTEMsa0NBWks7QUFhTEM7QUFiSztBQUpRLEtBQVIsRUFtQkpwUixJQW5CSSxDQW1CQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FuQkQsQ0FBUDtBQW9CQTs7O2tDQWVxQmhELE0sRUFBZ0I2USxJLEVBQVkvUSxJLEVBQTZCO0FBQzlFO0FBQ0E7QUFDQSxRQUFNK0IsT0FBTyxJQUFJcVIsUUFBSixFQUFiO0FBQ0FyUixTQUFLc1IsTUFBTCxDQUFZLE9BQVosRUFBcUJuVCxNQUFyQjtBQUNBNkIsU0FBS3NSLE1BQUwsQ0FBWSxjQUFaLEVBQTRCclQsSUFBNUI7QUFDQStCLFNBQUtzUixNQUFMLENBQVksZUFBWixFQUE2QnRDLElBQTdCOztBQUVBLFdBQU8sdUJBQVE7QUFDZHJQLGFBQVEsTUFETTtBQUVkQyxlQUFVLFlBRkk7QUFHZEMsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkOEQsa0JBQWE7QUFDWixzQkFBZ0I7QUFESixNQUpDO0FBT2RqQztBQVBjLEtBQVIsRUFRSkQsSUFSSSxDQVFDO0FBQUEsWUFBTW9CLFNBQU47QUFBQSxLQVJELENBQVA7QUFTQTs7O2tDQW1CcUJoRCxNLEVBQXdDO0FBQzdELFdBQU8sdUJBQVE7QUFDZHdCLGFBQVEsS0FETTtBQUVkQywyQkFBb0J6QixNQUFwQixrQkFGYztBQUdkMEIsaUJBQVlsQyxtQkFBU21DLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7OztpQ0FZb0I3QixNLEVBQWdCZ1IsUyxFQUFvQztBQUN4RSxXQUFPLHVCQUFRO0FBQ2R4UCxhQUFRLE1BRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsa0JBRmM7QUFHZDBCLGlCQUFZbEMsbUJBQVNtQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFdBQU0sRUFBRW1QLG9CQUFGO0FBSlEsS0FBUixFQUtKcFAsSUFMSSxDQUtDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBTEQsQ0FBUDtBQU1BOzs7b0NBWXVCN0IsTSxFQUFnQmtSLE0sRUFBK0I7QUFDdEUsV0FBTyx1QkFBUTtBQUNkMVAsYUFBUSxRQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLHNCQUEyQ2tSLE1BRjdCO0FBR2R4UCxpQkFBWWxDLG1CQUFTbUMsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7OztrQ0FHc0J1TyxRLEVBQW1DO0FBQ3hELFdBQU8sdUJBQVE7QUFDZC9QLGFBQVEsTUFETTtBQUVkQyxlQUFVLGtCQUZJO0FBR2RJLFdBQU07QUFDTDBQO0FBREs7QUFIUSxLQUFSLEVBTUozUCxJQU5JLENBTUM7QUFBQSxTQUFHQyxJQUFILFVBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLdVIsZUFBbkI7QUFBQSxLQU5ELENBQVA7QUFPQTs7QUFFRDs7Ozs7O2lDQUdxQkEsZSxFQUF5QnJLLEksRUFBY3lJLFEsRUFBaUM7QUFDNUYsV0FBTyx1QkFBUTtBQUNkaFEsYUFBUSxLQURNO0FBRWRDLHFDQUE4QjJSLGVBRmhCO0FBR2R2UixXQUFNO0FBQ0xrSCxnQkFESztBQUVMcUssc0NBRks7QUFHTDVCO0FBSEs7QUFIUSxLQUFSLENBQVA7QUFTQTs7Ozs7O0FBaGNJalMsSyxDQXFDRWlFLFEsR0FBdUM7QUFDN0NDLFdBQVMsQ0FEb0M7QUFFN0M0UCxZQUFVLENBRm1DO0FBRzdDaEgsWUFBVSxDQUhtQztBQUk3Q2lILFdBQVMsQ0FKb0M7QUFLN0MxUCxVQUFRO0FBTHFDLEU7QUFyQ3pDckUsSyxDQXFERWdVLGMsR0FBMkM7QUFDakRDLFlBQVUsWUFEdUM7QUFFakRDLG9CQUFrQixrQkFGK0I7QUFHakRDLGtDQUFnQztBQUhpQixFO21CQThZcENuVSxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzM2NmJmNWY5YzE2MDIzNWMwNTEiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJQYXJlbnREZXRhaWxzIH0gZnJvbSBcIi4vT3JkZXJcIjtcblxuZXhwb3J0IHR5cGUgQ29tbWlzc2lvblNjaGVkdWxlID0ge1xuXHRiYXNlUmF0ZTogbnVtYmVyLFxuXHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0ZnJhY3Rpb25hbFJhdGU6IG51bWJlcixcblx0c2hhcmVBbW91bnRSb3VuZGluZzogbnVtYmVyLFxuXHRzdWJzY3JpcHRpb246IGJvb2xlYW4sXG5cdGJhc2tldFNjaGVkdWxlOiB7XG5cdFx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRcdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0XHRzY2hlZHVsZTogQXJyYXk8e1xuXHRcdFx0YmFza2V0U2l6ZTogbnVtYmVyLFxuXHRcdFx0YmFza2V0UHJpY2U6IG51bWJlcixcblx0XHR9Pixcblx0fSxcblx0cGFzc1Rocm91Z2hGZWVzOiBib29sZWFuLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgQWNjb3VudFxuICogQGRlc2NyaXB0aW9uIEFuIGFjY291bnQgYmVsb25naW5nIHRvIGEgVXNlci4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvYWNjb3VudHNfZ2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50VHlwZTogc3RyaW5nO1xuXHRjdXJyZW5jeUlEOiBzdHJpbmc7XG5cdGliSUQ6IHN0cmluZztcblx0bWFyZ2luOiBzdHJpbmc7XG5cdG5pY2tuYW1lOiBzdHJpbmc7XG5cdG9wZW5lZFdoZW46IHN0cmluZztcblx0cGF0dGVybkRheVRyYWRlczogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHJhZGluZ1R5cGU6IHN0cmluZztcblx0YWNjb3VudE1nbXRUeXBlOiBzdHJpbmc7XG5cdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgQkxPVFRFUl9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBU0hcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE9SREVSU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gVFJBTlNBQ1RJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQT1NJVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFMTFxuXHQgKi9cblx0c3RhdGljIEJMT1RURVJfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogP3N0cmluZ30gPSB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5cblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5fTk9fTkVXX1RSQURFU1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBSQUNUSUNFXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBMSVZFXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEJsb3R0ZXIodHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldEJsb3R0ZXIodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QmxvdHRlcih1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcsIHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFN1bW1hcnkvYFxuXHRcdFx0XHQrIGAke2FjY291bnRJRH0ke3R5cGUgPyBcIi9cIiArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkZXJzKSB7XG5cdFx0XHRcdGJvZHkub3JkZXJzID0gYm9keS5vcmRlcnMubWFwKChvcmRlcikgPT4gbmV3IE9yZGVyKG9yZGVyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHlwZSA/IGJvZHlbdHlwZV0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRnZXRQZXJmb3JtYW5jZSgpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFBlcmZvcm1hbmNlKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgLi4uYXJndW1lbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0c3RhdGljIGdldFBlcmZvcm1hbmNlKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgZW5kRGF0ZSA9IGFyZ3VtZW50c1szXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHthY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkucGVyZm9ybWFuY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cGxhY2VPcmRlcih0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8c3RyaW5nIHwgT2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlsczogT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdG9wdGlvbnMudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0b3B0aW9ucy5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IFwiL3NpZ251cHMvcHJhY3RpY2VcIlxuXHRcdFx0XHQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY2hhbmdlU3Vic2NyaXB0aW9uKG1ldGhvZDogc3RyaW5nLCB7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0cGF5bWVudElELFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0cGxhbklEOiBzdHJpbmcsXG5cdFx0cGF5bWVudElEOiBzdHJpbmcsXG5cdH0pOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6ICFtZXRob2Quc3RhcnRzV2l0aChcIlBcIikgPyB1bmRlZmluZWQgOiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJHRVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyhvcHRpb25zPzogT2JqZWN0KTogT2JqZWN0IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuYWRkU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1cGRhdGVTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC51cGRhdGVTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGNhbmNlbFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNhbmNlbFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG4vKipcbiAqIEBmdW5jdGlvbiByZXF1ZXN0XG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsbHksIGl0IGlzIHVubmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGFuZCB0aGlzIGlzIGZvciBpbnRlcm5hbCB1c2Ugb25seS4gQ2FsbCByZXF1ZXN0KCkgaWYgeW91IG5lZWQgdG8gbWFrZSBhIGN1c3RvbSBBUEkgY2FsbCB0aGF0IGlzIG5vdCBjb3ZlcmVkIGJ5IGFub3RoZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5lbmRwb2ludFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2Vzc2lvbktleVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYm9keVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0aW9ucy5hZGRsSGVhZGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9zdCAtIE9uZSBvZiBDb25maWcuSE9TVFNcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx7Ym9keTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIsIGhlYWRlcnM6IE9iamVjdDxzdHJpbmcsIHN0cmluZz59Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG5cdG1ldGhvZCA9IFwiR0VUXCIsXG5cdGVuZHBvaW50LFxuXHRzZXNzaW9uS2V5LFxuXHRib2R5LFxuXHRhZGRsSGVhZGVycyA9IHt9LFxuXHRob3N0ID0gSE9TVFMuQVBJLFxufToge1xuXHRtZXRob2Q/OiBzdHJpbmcsXG5cdGVuZHBvaW50OiBzdHJpbmcsXG5cdHNlc3Npb25LZXk/OiBzdHJpbmcsXG5cdGJvZHk/OiBhbnksXG5cdGFkZGxIZWFkZXJzPzoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30sXG5cdGhvc3Q/OiBzdHJpbmcsXG59KSB7XG5cdGNvbnN0IGhlYWRlcnM6IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdH07XG5cdGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuXHRcdGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblx0fVxuXHRpZiAoc2Vzc2lvbktleSkge1xuXHRcdGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG5cdH1cblx0Zm9yIChjb25zdCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcblx0XHRoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuXHR9XG5cblx0ZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cblx0aWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG5cdFx0XHRpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcblx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keTogcmVzQm9keSxcblx0XHRcdFx0XHRzdGF0dXNDb2RlLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHJlc0hlYWRlcnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGVycm9yTWVzc2FnZTtcblx0XHRcdFx0aWYgKHJlc0JvZHkpIHtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBzdGF0dXNDb2RlID09PSA0MDFcblx0XHRcdFx0XHQ/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpXG5cdFx0XHRcdFx0OiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiLyoqXG4gKiBAbmFtZXNwYWNlIENvbmZpZ1xuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0ge1xuXHRlbnY6IG51bGwsXG5cdGh0dHBJbXBsOiBudWxsLFxuXHRhcHBUeXBlSUQ6IG51bGwsXG5cdGFwcFZlcnNpb246IG51bGwsXG5cdHdscElEOiBudWxsLFxuXHRhcHBzUGFydG5lcklEOiBudWxsLFxuXHRyZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEhPU1RTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBQU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFUE9SVFNcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG5cdEFQSTogXCJhcGlcIixcblx0QVBQUzogXCJhcHBzXCIsXG5cdFJFUE9SVFM6IFwicmVwb3J0c1wiLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBFTlZJUk9OTUVOVFNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBVQVRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBQUk9EXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcblx0VUFUOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuXHR9LFxuXHRQUk9EOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuXHR9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcblx0ZW52LFxuXHRodHRwSW1wbCxcblx0YXBwVHlwZUlELFxuXHRhcHBWZXJzaW9uLFxuXHR3bHBJRCA9IFwiRFdcIixcblx0YXBwc1BhcnRuZXJJRCxcblx0cmVmZXJyYWxDb2RlLFxufSkge1xuXHRDb25maWcuZW52ID0gZW52O1xuXHRDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcblx0Q29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcblx0Q29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuXHRDb25maWcud2xwSUQgPSB3bHBJRDtcblx0Q29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuXHRDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RHJpdmVXZWFsdGhFcnJvcixcblx0RHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWlzc2lvblNjaGVkdWxlIH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHR5cGUgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDEzO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IHR5cGUgT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRhY2NvdW50SUQ6IHN0cmluZyxcblx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdHVzZXJJRDogc3RyaW5nLFxuXHRhY2NvdW50VHlwZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIE5ld09yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRzaWRlOiBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG5cdHByaWNlPzogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIE5ld0NhcnRPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIE9yZGVyXG4gKiBAZGVzY3JpcHRpb24gQW4gb3JkZXIgY3JlYXRlZCBmb3IgYW4gQWNjb3VudC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X21hcmtldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cdG9yZGVySUQ6IHN0cmluZztcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRjdW1RdHk6IG51bWJlcjtcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdGNvbW1lbnQ6IHN0cmluZztcblx0Y29tbWlzc2lvbjogbnVtYmVyO1xuXHRjcmVhdGVkQnlJRDogc3RyaW5nO1xuXHRjcmVhdGVkV2hlbjogc3RyaW5nO1xuXHRleGVjdXRlZFdoZW46IHN0cmluZztcblx0Z3Jvc3NUcmFkZUFtdDogbnVtYmVyO1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bGVhdmVzUXR5OiBzdHJpbmc7XG5cdG9yZGVyTm86IHN0cmluZztcblx0b3JkZXJRdHk6IG51bWJlcjtcblx0c2lkZTogc3RyaW5nO1xuXHRhdXRvU3RvcDogP251bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHJlamVjdGlvblJlYXNvbjogP3N0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHR5cGU6IG51bWJlcjtcblx0cHJpY2U6ID9udW1iZXI7XG5cdGVmZmVjdGl2ZVByaWNlOiA/bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU0lERVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQlVZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUxMXG5cdCAqL1xuXHRzdGF0aWMgU0lERVM6IHtbc2lkZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQVJLRVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IExJTUlUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVE9QXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTkVXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUFMX0ZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIE9yZGVyLmNhbmNlbCh0aGlzLm9yZGVySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkUmVqUmVhc29uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0XHRcdG5ldyBEcml2ZVdlYWx0aEVycm9yKGJvZHkub3JkUmVqUmVhc29uLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT3JkZXIoYm9keSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiBJZiB3YWl0Rm9yRmlsbCBpcyB0cnVlLCBhbiBPcmRlciB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIGFuIG9yZGVySUQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcjoge1xuXHRcdFx0XHRpbnN0cnVtZW50LFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRxdHksXG5cdFx0XHRcdGFtb3VudENhc2gsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdH0sXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyOiBOZXdPcmRlcixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTxzdHJpbmcgfCBPcmRlcj4ge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcInF0eVxcXCIgYW5kIFxcXCJhbW91bnRDYXNoXFxcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlwiKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSB7XG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDI7XG5cblx0XHRcdGlmICghcHJpY2UpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcXFwicHJpY2UuXFxcIlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF1dG9TdG9wKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJhdXRvU3RvcFxcXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBib2R5Lm9yZGVySUQ7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKGJvZHkub3JkZXJJRCkudGhlbihvcmRlciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0ZpbGxlZCA9IG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmXG5cdFx0XHRcdFx0XHRcdG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMO1xuXG5cdFx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwIHx8IGlzRmlsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IuYm9keS5jb2RlID09PSA0MDQgJiYgcmV0cmllcyA+IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklEKS50aGVuKG9yZGVyQ3VycmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IG9yZGVyQ3VycmVudDtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IuYm9keSAmJiBlcnJvci5ib2R5Lm9yZFJlalJlYXNvbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IG5ldyBPcmRlcihlcnJvci5ib2R5KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLm9yZFN0YXR1cztcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24oXG5cdFx0b3JkZXJzOiBBcnJheTx7XG5cdFx0XHRzaWRlOiBzdHJpbmcsXG5cdFx0XHRxdHk6IG51bWJlcixcblx0XHRcdG1hcmtldFByaWNlOiBudW1iZXIsXG5cdFx0XHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRcdH0+LFxuXHRcdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlLFxuXHQpOiB7XG5cdFx0dG90YWw6IG51bWJlcixcblx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IG51bWJlcixcblx0XHRieU9yZGVyOiB7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiB7XG5cdFx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdFx0Y29tbWlzc2lvbjogbnVtYmVyLFxuXHRcdFx0ZmVlczoge1xuXHRcdFx0XHRzZWM6IG51bWJlcixcblx0XHRcdFx0dGFmOiBudW1iZXIsXG5cdFx0XHR9LFxuXHRcdH19XG5cdH0ge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZTtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpLFxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwO1xuXHRcdFx0bGV0IHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuLyoqXG4gKiBAY2xhc3MgRnVuZGluZ1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBmdW5kaW5nIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblx0LyoqXG5cdCAqIEBuYW1lIEFMTE9XRURfVFlQRVNcblx0ICogQG1lbWJlcm9mIEZ1bmRpbmdcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXSVRIRFJBV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVF9BTkRfV0lUSERSQVdcblx0ICovXG5cdHN0YXRpYyBBTExPV0VEX1RZUEVTID0ge1xuXHRcdERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuXHRcdFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG5cdFx0REVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgREVQT1NJVF9GUkVRVUVOQ0lFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEJJV0VFS0xZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNT05USExZX0ZJUlNUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNT05USExZX01JRERMRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUVVBUlRFUkxZXG5cdCAqL1xuXHRzdGF0aWMgREVQT1NJVF9GUkVRVUVOQ0lFUyA9IHtcblx0XHRCSVdFRUtMWTogXCJCSVdFRUtMWVwiLFxuXHRcdE1PTlRITFlfRklSU1Q6IFwiTU9OVEhMWV9GSVJTVFwiLFxuXHRcdE1PTlRITFlfTUlERExFOiBcIk1PTlRITFlfTUlERExFXCIsXG5cdFx0UVVBUlRFUkxZOiBcIlFVQVJURVJMWVwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IFtdLmNvbmNhdChib2R5LmRhdGEpXG5cdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHQubWFwKHByaWNlID0+IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0eyBhbW91bnQ6IE51bWJlcihwcmljZS5hbW91bnQgLyAxMDApIH0sXG5cdFx0XHRcdCkpO1xuXG5cdFx0XHRyZXR1cm4gcHJpY2luZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UmVjdXJyaW5nRGVwb3NpdChpZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9hY2gvcmVjdXJyaW5nLWRlcG9zaXRzLyR7aWR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UmVjdXJyaW5nRGVwb3NpdHNGb3JVc2VyKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3JlY3VycmluZy1kZXBvc2l0c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFJlY3VycmluZ0RlcG9zaXRzRm9yQWNjb3VudCh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHMvJHthY2NvdW50SUR9L3JlY3VycmluZy1kZXBvc2l0c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVJlY3VycmluZ0RlcG9zaXQoZGVwb3NpdElEOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBBVENIXCIsXG5cdFx0XHRlbmRwb2ludDogYC9mdW5kaW5nL2FjaC9yZWN1cnJpbmctZGVwb3NpdHMvJHtkZXBvc2l0SUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGRlbGV0ZVJlY3VycmluZ0RlcG9zaXQoZGVwb3NpdElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9mdW5kaW5nL2FjaC9yZWN1cnJpbmctZGVwb3NpdHMvJHtkZXBvc2l0SUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbi8qKlxuICogQGNsYXNzIFJlcG9ydHNcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgY2xhc3MgZm9yIHJldHJpZXZpbmcgYWNjb3VudCByZXBvcnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFuc2FjdGlvbnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1GaW5UcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBsYWNlZE9yZGVycyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPU9yZGVyVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdGF0ZW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmc3RhcnREYXRlPSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmVuZERhdGU9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAyXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmc3RhcnREYXRlPSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmVuZERhdGU9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAxXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUYXhEb2N1bWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZzdGFydERhdGU9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZW5kRGF0ZT0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0ZmlsZUtleTogc3RyaW5nLFxuXHQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKCkge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBcIi9jb3VudHJpZXNcIixcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCB0eXBlIFF1b3RlID0ge1xuXHRiaWQ6IG51bWJlcixcblx0YXNrOiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBJbnN0cnVtZW50XG4gKiBAZGVzY3JpcHRpb24gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X2luc3RydW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGV4Y2hhbmdlSUQ6IHN0cmluZztcblx0aW5zdHJ1bWVudFR5cGVJRDogc3RyaW5nO1xuXHRvcmRlclNpemVNYXg6IG51bWJlcjtcblx0b3JkZXJTaXplTWluOiBudW1iZXI7XG5cdG9yZGVyU2l6ZVN0ZXA6IG51bWJlcjtcblx0cmF0ZUFzazogbnVtYmVyO1xuXHRyYXRlQmlkOiBudW1iZXI7XG5cdHJhdGVQcmVjaXNpb246IG51bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHRyYWRlU3RhdHVzOiBzdHJpbmc7XG5cdHVybEltYWdlOiBzdHJpbmc7XG5cdHVybEludmVzdG9yOiBzdHJpbmc7XG5cdGNoYWlraW5QZ3I6IHN0cmluZztcblx0cHJpb3JDbG9zZTogbnVtYmVyO1xuXHRtYXJrZXRTdGF0ZTogbnVtYmVyO1xuXHRmdW5kYW1lbnRhbERhdGFNb2RlbDogT2JqZWN0O1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgVFJBREVfU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTkFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBUUkFERV9TVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0SU5BQ1RJVkU6IFwiMFwiLFxuXHRcdEFDVElWRTogXCIxXCIsXG5cdFx0Q0xPU0VEOiBcIjJcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgQ0hBUlRfQ09NUFJFU1NJT05TXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gREFZXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzVcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8zMFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gSE9VUlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gV0VFS1xuXHQgKi9cblx0c3RhdGljIENIQVJUX0NPTVBSRVNTSU9OUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0REFZOiAwLFxuXHRcdE1JTlVURV8xOiAxLFxuXHRcdE1JTlVURV81OiA0LFxuXHRcdE1JTlVURV8zMDogOCxcblx0XHRIT1VSOiA5LFxuXHRcdFdFRUs6IDEwLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50PiB8IEluc3RydW1lbnQ+IHtcblx0XHRjb25zdCBzeW1ib2xzID0gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IFtzeW1ib2xdIDogc3ltYm9sO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRib2R5ID0gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSk7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGJvZHlbMF0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKGlkOiBzdHJpbmcsIGluY2x1ZGVGdW5kYW1lbnRhbHM6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxJbnN0cnVtZW50PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyBcIj9vcHRpb25zPUZcIiA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgSW5zdHJ1bWVudChib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cz86IHN0cmluZyA9IFwiLTFcIik6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZWFyY2goY3JpdGVyaWE6IHsgbmFtZT86IHN0cmluZywgc3ltYm9sPzogc3RyaW5nIH0pOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG5cdFx0aWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcblx0XHRpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UXVvdGUoKTogUHJvbWlzZTxRdW90ZT4ge1xuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UXVvdGUoXG5cdFx0c3ltYm9sOiBzdHJpbmcgfCBJbnN0cnVtZW50IHwgQXJyYXk8c3RyaW5nIHwgSW5zdHJ1bWVudD4sXG5cdC8vICRGbG93Rml4TWVcblx0KTogUHJvbWlzZTxRdW90ZSB8IHtbc3ltYm9sOiBzdHJpbmddOiBRdW90ZX0+IHtcblx0XHRjb25zdCBzeW1ib2xzOiBBcnJheTxzdHJpbmc+ID0gKEFycmF5LmlzQXJyYXkoc3ltYm9sKSA/IHN5bWJvbCA6IFtzeW1ib2xdKVxuXHRcdFx0Lm1hcChzeW0gPT4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW0pO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRsZXQgb2JqID0ge307XG5cdFx0XHRib2R5ID0gYm9keS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuXHRcdFx0Zm9yIChjb25zdCByYXdRdW90ZSBvZiBib2R5KSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuXHRcdFx0XHRcdGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcblx0XHRcdFx0XHRhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkgb2JqID0gb2JqW3N5bWJvbHNbMF1dO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdGdldENoYXJ0RGF0YShjb21wcmVzc2lvbjogbnVtYmVyKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YShcblx0XHRcdFx0dGhpcy5pbnN0cnVtZW50SUQsXG5cdFx0XHRcdGNvbXByZXNzaW9uLFxuXHRcdFx0XHRhcmd1bWVudHNbMV0sXG5cdFx0XHRcdGFyZ3VtZW50c1syXSxcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgY29tcHJlc3Npb24sIGFyZ3VtZW50c1sxXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRDogc3RyaW5nLCBjb21wcmVzc2lvbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0bGV0IHRpbWVQYXJhbXM7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUVuZCA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0dGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhLnNwbGl0KFwifFwiKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuLyoqXG4gKiBAY2xhc3MgVXNlclxuICogQGRlc2NyaXB0aW9uIEEgdXNlciBvYmplY3QuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXQtdXNlcn1cbiAqL1xuY2xhc3MgVXNlciB7XG5cdGNvdW50cnlJRDogc3RyaW5nO1xuXHRlbWFpbEFkZHJlc3M6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhbmd1YWdlSUQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0cGhvbmVOdW1iZXI6IHN0cmluZztcblx0cmVmZXJyYWxDb2RlOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHR3bHBJRDogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dXNDaXRpemVuOiBib29sZWFuO1xuXHRsYXN0TG9naW5XaGVuOiBzdHJpbmc7XG5cdGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMTogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTI6IHN0cmluZztcblx0Y2l0eTogc3RyaW5nO1xuXHRzdGF0ZVByb3ZpbmNlOiBzdHJpbmc7XG5cdHppcFBvc3RhbENvZGU6IHN0cmluZztcblx0ZnVsbE5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQVBQUk9WRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFSkVDVEVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRVZPS0VEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBDTE9TRURcblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0QVBQUk9WRUQ6IDIsXG5cdFx0UkVKRUNURUQ6IDMsXG5cdFx0UkVWT0tFRDogNCxcblx0XHRDTE9TRUQ6IDUsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIERPQ1VNRU5UX1RZUEVTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIERPQ1VNRU5UX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0UEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcblx0fTtcblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFjY291bnRzKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEFjY291bnRzKCk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlIGJ5IGtleVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklEOiBzdHJpbmcsIGtleT86IHN0cmluZykge1xuXHRcdGlmICgha2V5KSB7XG5cdFx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0XHRcdGZvciAoY29uc3Qgc2V0dGluZyBvZiBib2R5KSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmb3JtYXR0ZWREYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS52YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRnZXRTZXR0aW5ncyhrZXk/OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gVXNlci5nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRrZXksIHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRzZXRTZXR0aW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgdW5zZXRTZXR0aW5nKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZykgOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVuc2V0U2V0dGluZyhrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gU2VlIHJlc3BvbnNlIGF0IHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL3VzZXItc3RhdHVzfVxuXHQgKi9cblx0Z2V0U3RhdHVzKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqICBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgbG9nb3V0KHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMucmVtb3ZlKHVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIubG9nb3V0KHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBVc2VyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldCgpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcblx0XHRcdFx0YXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG5cdFx0XHRcdGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcblx0XHRcdFx0b3NUeXBlOiBcInVua25vd25cIixcblx0XHRcdFx0b3NWZXJzaW9uOiBcInVua25vd25cIixcblx0XHRcdFx0c2NyUmVzOiBcInVua25vd25cIixcblx0XHRcdFx0aXBBZGRyZXNzOiBcInVua25vd25cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFNlc3Npb25zLnNhdmUoYm9keS51c2VySUQsIGJvZHkuc2Vzc2lvbktleSk7XG5cdFx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRChib2R5LnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcblx0XHR9KS50aGVuKFxuXHRcdFx0KCkgPT4gZmFsc2UsXG5cdFx0XHQocmVqZWN0aW9uKSA9PiByZWplY3Rpb24uc3RhdHVzQ29kZSA9PT0gNDA0XG5cdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHQ6IFByb21pc2UucmVqZWN0KHJlamVjdGlvbiksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ2luQXV0b21hdGljYWxseSAtIElmIGZhbHNlLCBubyBzZXNzaW9uIHdpbGwgYmUgY3JlYXRlZC5cblx0ICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQgfCBVc2VyPn0gSWYgbG9naW5BdXRvbWF0aWNhbGx5IGlzIHRydWUsIGEgVXNlciB3aWxsIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcblx0XHR1dG1DYW1wYWlnbixcblx0XHR1dG1Db250ZW50LFxuXHRcdHV0bU1lZGl1bSxcblx0XHR1dG1Tb3VyY2UsXG5cdFx0dXRtVGVybSxcblx0fSwgbG9naW5BdXRvbWF0aWNhbGx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZCB8IFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHR3bHBJRDogQ29uZmlnLndscElELFxuXHRcdFx0XHRyZWZlcnJhbENvZGUsXG5cdFx0XHRcdHV0bUNhbXBhaWduLFxuXHRcdFx0XHR1dG1Db250ZW50LFxuXHRcdFx0XHR1dG1NZWRpdW0sXG5cdFx0XHRcdHV0bVNvdXJjZSxcblx0XHRcdFx0dXRtVGVybSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG5cdFx0XHRcdHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlLFxuXHR9KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBkYXRlKGRhdGE6IE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0ZW1haWw6IGRhdGEuZW1haWwgfHwgdGhpcy5lbWFpbEFkZHJlc3MsXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQ6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIGZvciBlc2xpbnRcblx0XHQvKiBnbG9iYWwgRm9ybURhdGEgKi9cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvZG9jdW1lbnRzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBsb2FkRG9jdW1lbnQoZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRDcmVkaXRDYXJkcyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIFVzZXIuYWRkQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZFRva2VuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIucmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGZvcmdvdFBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvdXNlcnMvcGFzc3dvcmRzXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5wYXNzd29yZFJlc2V0SUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyByZXNldFBhc3N3b3JkKHBhc3N3b3JkUmVzZXRJRDogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy9wYXNzd29yZHMvJHtwYXNzd29yZFJlc2V0SUR9YCxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0Y29kZSxcblx0XHRcdFx0cGFzc3dvcmRSZXNldElELFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==