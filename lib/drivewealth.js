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
					var body = _ref.body;
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
								if (order.rejectionReason !== undefined) {
									return reject(order.rejectionReason);
								}
	
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
	   * @static
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
	
			/**
	   * @instance
	   */
	
		}, {
			key: "unsetSetting",
			value: function unsetSetting(key) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/users/" + this.userID + "/settings/" + key,
					sessionKey: _Sessions2.default.get(this.userID)
				}).then(function () {
					return undefined;
				});
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
	   * @instance
	   */
	
		}, {
			key: "logout",
			value: function logout() {
				var _this = this;
	
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/userSessions/" + _Sessions2.default.get(this.userID),
					sessionKey: _Sessions2.default.get(this.userID)
				}).then(function () {
					_Sessions2.default.remove(_this.userID);
				});
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
			value: function getAccounts(userID) {
				return _Account2.default.getListForUserID(userID);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNTQ0NjFiZWU1Y2UwMzRjODliZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJjb2RlIiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJyZWR1Y2UiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJ4IiwieSIsIkFMTE9XRURfVFlQRVMiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImNvbXByZXNzaW9uIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInN5bSIsIm9iaiIsInNwbGl0IiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIlRSQURFX1NUQVRVU0VTIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDSEFSVF9DT01QUkVTU0lPTlMiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0TGlzdEZvclVzZXJJRCIsImtleSIsImdldFNldHRpbmdzIiwidmFsdWUiLCJzZXRTZXR0aW5nIiwicmVtb3ZlIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0Q3JlZGl0Q2FyZHMiLCJjYXJkVG9rZW4iLCJhZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwicmVtb3ZlQ3JlZGl0Q2FyZCIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwiZ2V0QnlVc2VySUQiLCJyZWplY3Rpb24iLCJlbWFpbCIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJET0NVTUVOVF9UWVBFUyIsIlBIT1RPX0lEIiwiUFJPT0ZfT0ZfQUREUkVTUyIsIlBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FB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O0FBTHFDLEU7QUFyQ3pDckUsSyxDQXFERW9ULGMsR0FBMkM7QUFDakRDLFlBQVUsWUFEdUM7QUFFakRDLG9CQUFrQixrQkFGK0I7QUFHakRDLGtDQUFnQztBQUhpQixFO21CQXNWcEN2VCxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDU0NDYxYmVlNWNlMDM0Yzg5YmUiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJQYXJlbnREZXRhaWxzIH0gZnJvbSBcIi4vT3JkZXJcIjtcblxuZXhwb3J0IHR5cGUgQ29tbWlzc2lvblNjaGVkdWxlID0ge1xuXHRiYXNlUmF0ZTogbnVtYmVyLFxuXHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0ZnJhY3Rpb25hbFJhdGU6IG51bWJlcixcblx0c2hhcmVBbW91bnRSb3VuZGluZzogbnVtYmVyLFxuXHRzdWJzY3JpcHRpb246IGJvb2xlYW4sXG5cdGJhc2tldFNjaGVkdWxlOiB7XG5cdFx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRcdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0XHRzY2hlZHVsZTogQXJyYXk8e1xuXHRcdFx0YmFza2V0U2l6ZTogbnVtYmVyLFxuXHRcdFx0YmFza2V0UHJpY2U6IG51bWJlcixcblx0XHR9Pixcblx0fSxcblx0cGFzc1Rocm91Z2hGZWVzOiBib29sZWFuLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgQWNjb3VudFxuICogQGRlc2NyaXB0aW9uIEFuIGFjY291bnQgYmVsb25naW5nIHRvIGEgVXNlci4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvYWNjb3VudHNfZ2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50VHlwZTogc3RyaW5nO1xuXHRjdXJyZW5jeUlEOiBzdHJpbmc7XG5cdGliSUQ6IHN0cmluZztcblx0bWFyZ2luOiBzdHJpbmc7XG5cdG5pY2tuYW1lOiBzdHJpbmc7XG5cdG9wZW5lZFdoZW46IHN0cmluZztcblx0cGF0dGVybkRheVRyYWRlczogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHJhZGluZ1R5cGU6IHN0cmluZztcblx0YWNjb3VudE1nbXRUeXBlOiBzdHJpbmc7XG5cdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgQkxPVFRFUl9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBU0hcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE9SREVSU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gVFJBTlNBQ1RJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQT1NJVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFMTFxuXHQgKi9cblx0c3RhdGljIEJMT1RURVJfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogP3N0cmluZ30gPSB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5cblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5fTk9fTkVXX1RSQURFU1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBSQUNUSUNFXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBMSVZFXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEJsb3R0ZXIodHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldEJsb3R0ZXIodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QmxvdHRlcih1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcsIHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFN1bW1hcnkvYFxuXHRcdFx0XHQrIGAke2FjY291bnRJRH0ke3R5cGUgPyBcIi9cIiArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkZXJzKSB7XG5cdFx0XHRcdGJvZHkub3JkZXJzID0gYm9keS5vcmRlcnMubWFwKChvcmRlcikgPT4gbmV3IE9yZGVyKG9yZGVyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHlwZSA/IGJvZHlbdHlwZV0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRnZXRQZXJmb3JtYW5jZSgpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFBlcmZvcm1hbmNlKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgLi4uYXJndW1lbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0c3RhdGljIGdldFBlcmZvcm1hbmNlKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgZW5kRGF0ZSA9IGFyZ3VtZW50c1szXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHthY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkucGVyZm9ybWFuY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cGxhY2VPcmRlcih0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8c3RyaW5nIHwgT2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlsczogT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdG9wdGlvbnMudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0b3B0aW9ucy5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IFwiL3NpZ251cHMvcHJhY3RpY2VcIlxuXHRcdFx0XHQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY2hhbmdlU3Vic2NyaXB0aW9uKG1ldGhvZDogc3RyaW5nLCB7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0cGF5bWVudElELFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0cGxhbklEOiBzdHJpbmcsXG5cdFx0cGF5bWVudElEOiBzdHJpbmcsXG5cdH0pOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6ICFtZXRob2Quc3RhcnRzV2l0aChcIlBcIikgPyB1bmRlZmluZWQgOiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJHRVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyhvcHRpb25zPzogT2JqZWN0KTogT2JqZWN0IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuYWRkU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1cGRhdGVTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC51cGRhdGVTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGNhbmNlbFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNhbmNlbFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG4vKipcbiAqIEBmdW5jdGlvbiByZXF1ZXN0XG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsbHksIGl0IGlzIHVubmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGFuZCB0aGlzIGlzIGZvciBpbnRlcm5hbCB1c2Ugb25seS4gQ2FsbCByZXF1ZXN0KCkgaWYgeW91IG5lZWQgdG8gbWFrZSBhIGN1c3RvbSBBUEkgY2FsbCB0aGF0IGlzIG5vdCBjb3ZlcmVkIGJ5IGFub3RoZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5lbmRwb2ludFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2Vzc2lvbktleVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYm9keVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0aW9ucy5hZGRsSGVhZGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9zdCAtIE9uZSBvZiBDb25maWcuSE9TVFNcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx7Ym9keTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIsIGhlYWRlcnM6IE9iamVjdDxzdHJpbmcsIHN0cmluZz59Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG5cdG1ldGhvZCA9IFwiR0VUXCIsXG5cdGVuZHBvaW50LFxuXHRzZXNzaW9uS2V5LFxuXHRib2R5LFxuXHRhZGRsSGVhZGVycyA9IHt9LFxuXHRob3N0ID0gSE9TVFMuQVBJLFxufToge1xuXHRtZXRob2Q/OiBzdHJpbmcsXG5cdGVuZHBvaW50OiBzdHJpbmcsXG5cdHNlc3Npb25LZXk/OiBzdHJpbmcsXG5cdGJvZHk/OiBhbnksXG5cdGFkZGxIZWFkZXJzPzoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30sXG5cdGhvc3Q/OiBzdHJpbmcsXG59KSB7XG5cdGNvbnN0IGhlYWRlcnM6IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdH07XG5cdGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuXHRcdGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblx0fVxuXHRpZiAoc2Vzc2lvbktleSkge1xuXHRcdGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG5cdH1cblx0Zm9yIChjb25zdCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcblx0XHRoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuXHR9XG5cblx0ZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cblx0aWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG5cdFx0XHRpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcblx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keTogcmVzQm9keSxcblx0XHRcdFx0XHRzdGF0dXNDb2RlLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHJlc0hlYWRlcnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGVycm9yTWVzc2FnZTtcblx0XHRcdFx0aWYgKHJlc0JvZHkpIHtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBzdGF0dXNDb2RlID09PSA0MDFcblx0XHRcdFx0XHQ/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpXG5cdFx0XHRcdFx0OiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiLyoqXG4gKiBAbmFtZXNwYWNlIENvbmZpZ1xuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0ge1xuXHRlbnY6IG51bGwsXG5cdGh0dHBJbXBsOiBudWxsLFxuXHRhcHBUeXBlSUQ6IG51bGwsXG5cdGFwcFZlcnNpb246IG51bGwsXG5cdHdscElEOiBudWxsLFxuXHRhcHBzUGFydG5lcklEOiBudWxsLFxuXHRyZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEhPU1RTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBQU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFUE9SVFNcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG5cdEFQSTogXCJhcGlcIixcblx0QVBQUzogXCJhcHBzXCIsXG5cdFJFUE9SVFM6IFwicmVwb3J0c1wiLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBFTlZJUk9OTUVOVFNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBVQVRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBQUk9EXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcblx0VUFUOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuXHR9LFxuXHRQUk9EOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuXHR9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcblx0ZW52LFxuXHRodHRwSW1wbCxcblx0YXBwVHlwZUlELFxuXHRhcHBWZXJzaW9uLFxuXHR3bHBJRCA9IFwiRFdcIixcblx0YXBwc1BhcnRuZXJJRCxcblx0cmVmZXJyYWxDb2RlLFxufSkge1xuXHRDb25maWcuZW52ID0gZW52O1xuXHRDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcblx0Q29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcblx0Q29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuXHRDb25maWcud2xwSUQgPSB3bHBJRDtcblx0Q29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuXHRDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RHJpdmVXZWFsdGhFcnJvcixcblx0RHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1pc3Npb25TY2hlZHVsZSB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB0eXBlIEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuXG5jb25zdCBTRUNfRkVFX1JBVEUgPSAwLjAwMDAyMzE7XG5jb25zdCBTRUNfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBTRUNfRkVFX01BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbmNvbnN0IFRBRl9GRUVfUkFURSA9IDAuMDAwMTE5O1xuY29uc3QgVEFGX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgVEFGX0ZFRV9NQVggPSA1Ljk1O1xuXG5leHBvcnQgdHlwZSBPcmRlclBhcmVudERldGFpbHMgPSB7XG5cdGFjY291bnRJRDogc3RyaW5nLFxuXHRhY2NvdW50Tm86IHN0cmluZyxcblx0dXNlcklEOiBzdHJpbmcsXG5cdGFjY291bnRUeXBlOiBzdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgTmV3T3JkZXIgPSB7XG5cdGluc3RydW1lbnQ6IEluc3RydW1lbnQgfCBzdHJpbmcsXG5cdHNpZGU6IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcblx0cHJpY2U/OiBudW1iZXIsXG59O1xuZXhwb3J0IHR5cGUgTmV3Q2FydE9yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRxdHk/OiBudW1iZXIsXG5cdGFtb3VudENhc2g/OiBudW1iZXIsXG5cdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdGNvbW1lbnQ/OiBzdHJpbmcsXG5cdGF1dG9TdG9wPzogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgT3JkZXJcbiAqIEBkZXNjcmlwdGlvbiBBbiBvcmRlciBjcmVhdGVkIGZvciBhbiBBY2NvdW50LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXRfbWFya2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblx0b3JkZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdGN1bVF0eTogbnVtYmVyO1xuXHRhY2NvdW50Tm86IHN0cmluZztcblx0Y29tbWVudDogc3RyaW5nO1xuXHRjb21taXNzaW9uOiBudW1iZXI7XG5cdGNyZWF0ZWRCeUlEOiBzdHJpbmc7XG5cdGNyZWF0ZWRXaGVuOiBzdHJpbmc7XG5cdGV4ZWN1dGVkV2hlbjogc3RyaW5nO1xuXHRncm9zc1RyYWRlQW10OiBudW1iZXI7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRsZWF2ZXNRdHk6IHN0cmluZztcblx0b3JkZXJObzogc3RyaW5nO1xuXHRvcmRlclF0eTogbnVtYmVyO1xuXHRzaWRlOiBzdHJpbmc7XG5cdGF1dG9TdG9wOiA/bnVtYmVyO1xuXHRzeW1ib2w6IHN0cmluZztcblx0cmVqZWN0aW9uUmVhc29uOiA/c3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHlwZTogbnVtYmVyO1xuXHRwcmljZTogP251bWJlcjtcblx0ZWZmZWN0aXZlUHJpY2U6ID9udW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLnJlamVjdGlvblJlYXNvbiA9IGRhdGEub3JkUmVqUmVhc29uO1xuXHRcdHRoaXMuc3RhdHVzID0gZGF0YS5vcmRTdGF0dXM7XG5cdFx0dGhpcy50eXBlID0gZGF0YS5vcmRUeXBlIHx8IGRhdGEub3JkZXJUeXBlO1xuXHRcdHRoaXMucHJpY2UgPSBkYXRhLnN0b3BQcmljZSB8fCBkYXRhLmxpbWl0UHJpY2UgfHwgZGF0YS5wcmljZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTSURFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCVVlcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFNFTExcblx0ICovXG5cdHN0YXRpYyBTSURFUzoge1tzaWRlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEJVWTogXCJCXCIsXG5cdFx0U0VMTDogXCJTXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRZUEVTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE1BUktFVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTElNSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFNUT1Bcblx0ICovXG5cdHN0YXRpYyBUWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdE1BUktFVDogXCIxXCIsXG5cdFx0TElNSVQ6IFwiMlwiLFxuXHRcdFNUT1A6IFwiM1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBORVdcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQUxfRklMTFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gRklMTFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFJFSkVDVEVEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gT3JkZXIuY2FuY2VsKHRoaXMub3JkZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGNhbmNlbChvcmRlcklEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5SUQob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTxPcmRlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgT3JkZXIoYm9keSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRJbmZvXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm4gSWYgd2FpdEZvckZpbGwgaXMgdHJ1ZSwgYW4gT3JkZXIgd2lsbCBiZSByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhbiBvcmRlcklEIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHR7XG5cdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHR1c2VySUQsXG5cdFx0XHRhY2NvdW50VHlwZSxcblx0XHR9OiBPcmRlclBhcmVudERldGFpbHMsXG5cdFx0e1xuXHRcdFx0b3JkZXI6IHtcblx0XHRcdFx0aW5zdHJ1bWVudCxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0cXR5LFxuXHRcdFx0XHRhbW91bnRDYXNoLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2UsXG5cdFx0XHR9LFxuXHRcdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSAxMDAwLFxuXHRcdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0XHR9OiB7XG5cdFx0XHRvcmRlcjogTmV3T3JkZXIsXG5cdFx0XHR3YWl0Rm9yRmlsbD86IGJvb2xlYW4sXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbD86IG51bWJlcixcblx0XHRcdGZpbGxNYXhSZXRyaWVzPzogbnVtYmVyLFxuXHRcdH0sXG5cdCk6IFByb21pc2U8c3RyaW5nIHwgT3JkZXI+IHtcblx0XHRpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJxdHlcXFwiIGFuZCBcXFwiYW1vdW50Q2FzaFxcXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cIik7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCkge1xuXHRcdFx0ZmlsbE1heFJldHJpZXMgPSAyO1xuXG5cdFx0XHRpZiAoIXByaWNlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkxpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXFxcInByaWNlLlxcXCJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdXRvU3RvcCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwiYXV0b1N0b3BcXFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IHR5cGUsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdG9yZGVyUXR5OiBxdHkgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBhbW91bnRDYXNoIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gYm9keS5vcmRlcklEO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0XHRyZXRyaWVzIC09IDE7XG5cdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChib2R5Lm9yZGVySUQpLnRoZW4ob3JkZXIgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG9yZGVyLnJlamVjdGlvblJlYXNvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZWplY3Qob3JkZXIucmVqZWN0aW9uUmVhc29uKTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y29uc3QgaXNGaWxsZWQgPSBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJlxuXHRcdFx0XHRcdFx0XHRvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTDtcblxuXHRcdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCB8fCBpc0ZpbGxlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShvcmRlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yLmJvZHkuY29kZSA9PT0gNDA0ICYmIHJldHJpZXMgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgT2JqZWN0Pj59IEFuIG9iamVjdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggZWFjaCBrZXkgc2V0IHRvIGEgcmVmZXJlbmNlSUQgcGFzc2VkIHdpdGggYW4gb3JkZXIuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlQ2FydChcblx0XHR7XG5cdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHR1c2VySUQsXG5cdFx0XHRhY2NvdW50VHlwZSxcblx0XHR9OiBPcmRlclBhcmVudERldGFpbHMsXG5cdFx0e1xuXHRcdFx0b3JkZXJzLFxuXHRcdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyczogQXJyYXk8TmV3Q2FydE9yZGVyPixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTx7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiBPYmplY3R9PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogb3JkZXJzLm1hcChvcmRlciA9PiAoe1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IG9yZGVyLmluc3RydW1lbnQuaW5zdHJ1bWVudElEXG5cdFx0XHRcdFx0fHwgb3JkZXIuaW5zdHJ1bWVudC5pZCB8fCBvcmRlci5pbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogT3JkZXIuVFlQRVMuTUFSS0VULFxuXHRcdFx0XHRzaWRlOiBPcmRlci5TSURFUy5CVVksXG5cdFx0XHRcdG9yZGVyUXR5OiBvcmRlci5xdHkgPyBvcmRlci5xdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IG9yZGVyLmFtb3VudENhc2ggPyBvcmRlci5hbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50OiBvcmRlci5jb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcDogb3JkZXIuYXV0b1N0b3AsXG5cdFx0XHR9KSksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGxldCBvcmRlclJlc3VsdHMgPSBib2R5O1xuXHRcdFx0Y29uc3Qgb3JkZXJzTWFwID0gb3JkZXJSZXN1bHRzLnJlZHVjZShcblx0XHRcdFx0KGFjYywgbmV4dCwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBhY2MsIHtcblx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0e30sXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gb3JkZXJzTWFwO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRcdHJlZmVyZW5jZUlEOiBvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRCxcblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gcmVzb2x2ZShvcmRlclJlc3VsdHMpO1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblxuXHRcdFx0XHRcdFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdFx0b3JkZXJSZXN1bHRzLm1hcChvcmRlciA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCwgdXNlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IHN0YXR1c0RldGFpbHM7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24oXG5cdFx0b3JkZXJzOiBBcnJheTx7XG5cdFx0XHRzaWRlOiBzdHJpbmcsXG5cdFx0XHRxdHk6IG51bWJlcixcblx0XHRcdG1hcmtldFByaWNlOiBudW1iZXIsXG5cdFx0XHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRcdH0+LFxuXHRcdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlLFxuXHQpOiB7XG5cdFx0dG90YWw6IG51bWJlcixcblx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IG51bWJlcixcblx0XHRieU9yZGVyOiB7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiB7XG5cdFx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdFx0Y29tbWlzc2lvbjogbnVtYmVyLFxuXHRcdFx0ZmVlczoge1xuXHRcdFx0XHRzZWM6IG51bWJlcixcblx0XHRcdFx0dGFmOiBudW1iZXIsXG5cdFx0XHR9LFxuXHRcdH19XG5cdH0ge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZTtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpLFxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwO1xuXHRcdFx0bGV0IHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuLyoqXG4gKiBAY2xhc3MgRnVuZGluZ1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBmdW5kaW5nIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblx0LyoqXG5cdCAqIEBuYW1lIEFMTE9XRURfVFlQRVNcblx0ICogQG1lbWJlcm9mIEZ1bmRpbmdcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXSVRIRFJBV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVF9BTkRfV0lUSERSQVdcblx0ICovXG5cdHN0YXRpYyBBTExPV0VEX1RZUEVTID0ge1xuXHRcdERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuXHRcdFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG5cdFx0REVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRsYW5ndWFnZSxcblx0XHRtaW5BbW91bnQsXG5cdFx0bWF4QW1vdW50LFxuXHRcdGFtb3VudCxcblx0XHRmaWx0ZXJzID0ge30sXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRsYW5ndWFnZT86IHN0cmluZyxcblx0XHRtaW5BbW91bnQ/OiBudW1iZXIsXG5cdFx0bWF4QW1vdW50PzogbnVtYmVyLFxuXHRcdGFtb3VudD86IG51bWJlcixcblx0XHRmaWx0ZXJzPzoge1xuXHRcdFx0bmFtZTogc3RyaW5nLFxuXHRcdFx0Y3VycmVuY3k6IHN0cmluZyxcblx0XHRcdGNvdW50cnk6IHN0cmluZyxcblx0XHRcdGFsbG93ZWQ6IHN0cmluZyxcblx0XHR9LFxuXHR9ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXHRcdH1cblxuXHRcdGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG5cdFx0aWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcblx0XHRpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuXHRcdGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG5cdFx0aWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcblx0XHRpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuXHRcdGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG5cdFx0aWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcblx0XHRpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuQVBQUyxcblx0XHRcdGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQ6IHN0cmluZykge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdGVuZHBvaW50OiBcIi9mdW5kaW5nL3N0YXR1c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvblBsYW5zKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvYWNoL3N1YnNjcmlwdGlvbi1wbGFuc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGNvbnN0IHByaWNpbmcgPSBib2R5LmRhdGEubWFwKChwcmljaW5nKSA9PlxuXHRcdFx0XHRbXS5jb25jYXQocHJpY2luZylcblx0XHRcdFx0XHQuc29ydCgoeCwgeSkgPT4geC5hbW91bnQgLSB5LmFtb3VudClcblx0XHRcdFx0XHQubWFwKHByaWNlID0+IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdHByaWNlLFxuXHRcdFx0XHRcdFx0eyBhbW91bnQ6IE51bWJlcihwcmljZS5hbW91bnQgLyAxMDApIH0sXG5cdFx0XHRcdFx0KSksXG5cdFx0XHQpWzBdO1xuXG5cdFx0XHRyZXR1cm4gcHJpY2luZztcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbi8qKlxuICogQGNsYXNzIFJlcG9ydHNcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgY2xhc3MgZm9yIHJldHJpZXZpbmcgYWNjb3VudCByZXBvcnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFuc2FjdGlvbnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1GaW5UcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBsYWNlZE9yZGVycyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPU9yZGVyVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdGF0ZW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAyXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAxXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUYXhEb2N1bWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0ZmlsZUtleTogc3RyaW5nLFxuXHQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKCkge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBcIi9jb3VudHJpZXNcIixcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCB0eXBlIFF1b3RlID0ge1xuXHRiaWQ6IG51bWJlcixcblx0YXNrOiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBJbnN0cnVtZW50XG4gKiBAZGVzY3JpcHRpb24gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X2luc3RydW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGV4Y2hhbmdlSUQ6IHN0cmluZztcblx0aW5zdHJ1bWVudFR5cGVJRDogc3RyaW5nO1xuXHRvcmRlclNpemVNYXg6IG51bWJlcjtcblx0b3JkZXJTaXplTWluOiBudW1iZXI7XG5cdG9yZGVyU2l6ZVN0ZXA6IG51bWJlcjtcblx0cmF0ZUFzazogbnVtYmVyO1xuXHRyYXRlQmlkOiBudW1iZXI7XG5cdHJhdGVQcmVjaXNpb246IG51bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHRyYWRlU3RhdHVzOiBzdHJpbmc7XG5cdHVybEltYWdlOiBzdHJpbmc7XG5cdHVybEludmVzdG9yOiBzdHJpbmc7XG5cdGNoYWlraW5QZ3I6IHN0cmluZztcblx0cHJpb3JDbG9zZTogbnVtYmVyO1xuXHRtYXJrZXRTdGF0ZTogbnVtYmVyO1xuXHRmdW5kYW1lbnRhbERhdGFNb2RlbDogT2JqZWN0O1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgVFJBREVfU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTkFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBUUkFERV9TVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0SU5BQ1RJVkU6IFwiMFwiLFxuXHRcdEFDVElWRTogXCIxXCIsXG5cdFx0Q0xPU0VEOiBcIjJcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgQ0hBUlRfQ09NUFJFU1NJT05TXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gREFZXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzVcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8zMFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gSE9VUlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gV0VFS1xuXHQgKi9cblx0c3RhdGljIENIQVJUX0NPTVBSRVNTSU9OUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0REFZOiAwLFxuXHRcdE1JTlVURV8xOiAxLFxuXHRcdE1JTlVURV81OiA0LFxuXHRcdE1JTlVURV8zMDogOCxcblx0XHRIT1VSOiA5LFxuXHRcdFdFRUs6IDEwLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50PiB8IEluc3RydW1lbnQ+IHtcblx0XHRjb25zdCBzeW1ib2xzID0gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IFtzeW1ib2xdIDogc3ltYm9sO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRib2R5ID0gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSk7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGJvZHlbMF0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKGlkOiBzdHJpbmcsIGluY2x1ZGVGdW5kYW1lbnRhbHM6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxJbnN0cnVtZW50PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyBcIj9vcHRpb25zPUZcIiA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgSW5zdHJ1bWVudChib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cz86IHN0cmluZyA9IFwiLTFcIik6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZWFyY2goY3JpdGVyaWE6IHsgbmFtZT86IHN0cmluZywgc3ltYm9sPzogc3RyaW5nIH0pOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG5cdFx0aWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcblx0XHRpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UXVvdGUoKTogUHJvbWlzZTxRdW90ZT4ge1xuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UXVvdGUoXG5cdFx0c3ltYm9sOiBzdHJpbmcgfCBJbnN0cnVtZW50IHwgQXJyYXk8c3RyaW5nIHwgSW5zdHJ1bWVudD4sXG5cdC8vICRGbG93Rml4TWVcblx0KTogUHJvbWlzZTxRdW90ZSB8IHtbc3ltYm9sOiBzdHJpbmddOiBRdW90ZX0+IHtcblx0XHRjb25zdCBzeW1ib2xzOiBBcnJheTxzdHJpbmc+ID0gKEFycmF5LmlzQXJyYXkoc3ltYm9sKSA/IHN5bWJvbCA6IFtzeW1ib2xdKVxuXHRcdFx0Lm1hcChzeW0gPT4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW0pO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRsZXQgb2JqID0ge307XG5cdFx0XHRib2R5ID0gYm9keS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuXHRcdFx0Zm9yIChjb25zdCByYXdRdW90ZSBvZiBib2R5KSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuXHRcdFx0XHRcdGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcblx0XHRcdFx0XHRhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkgb2JqID0gb2JqW3N5bWJvbHNbMF1dO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdGdldENoYXJ0RGF0YShjb21wcmVzc2lvbjogbnVtYmVyKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YShcblx0XHRcdFx0dGhpcy5pbnN0cnVtZW50SUQsXG5cdFx0XHRcdGNvbXByZXNzaW9uLFxuXHRcdFx0XHRhcmd1bWVudHNbMV0sXG5cdFx0XHRcdGFyZ3VtZW50c1syXSxcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgY29tcHJlc3Npb24sIGFyZ3VtZW50c1sxXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRDogc3RyaW5nLCBjb21wcmVzc2lvbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0bGV0IHRpbWVQYXJhbXM7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUVuZCA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0dGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhLnNwbGl0KFwifFwiKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuLyoqXG4gKiBAY2xhc3MgVXNlclxuICogQGRlc2NyaXB0aW9uIEEgdXNlciBvYmplY3QuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXQtdXNlcn1cbiAqL1xuY2xhc3MgVXNlciB7XG5cdGNvdW50cnlJRDogc3RyaW5nO1xuXHRlbWFpbEFkZHJlc3M6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhbmd1YWdlSUQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0cGhvbmVOdW1iZXI6IHN0cmluZztcblx0cmVmZXJyYWxDb2RlOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHR3bHBJRDogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dXNDaXRpemVuOiBib29sZWFuO1xuXHRsYXN0TG9naW5XaGVuOiBzdHJpbmc7XG5cdGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMTogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTI6IHN0cmluZztcblx0Y2l0eTogc3RyaW5nO1xuXHRzdGF0ZVByb3ZpbmNlOiBzdHJpbmc7XG5cdHppcFBvc3RhbENvZGU6IHN0cmluZztcblx0ZnVsbE5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQVBQUk9WRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFSkVDVEVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRVZPS0VEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBDTE9TRURcblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0QVBQUk9WRUQ6IDIsXG5cdFx0UkVKRUNURUQ6IDMsXG5cdFx0UkVWT0tFRDogNCxcblx0XHRDTE9TRUQ6IDUsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIERPQ1VNRU5UX1RZUEVTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIERPQ1VNRU5UX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0UEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRBY2NvdW50cygpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFjY291bnRzKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlIGJ5IGtleVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG5cdFx0aWYgKCFrZXkpIHtcblx0XHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nIG9mIGJvZHkpIHtcblx0XHRcdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZvcm1hdHRlZERhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlXG5cdCAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGdldFNldHRpbmdzKGtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0a2V5LCB2YWx1ZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0c2V0U2V0dGluZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dW5zZXRTZXR0aW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvdXNlci1zdGF0dXN9XG5cdCAqL1xuXHRnZXRTdGF0dXMoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgVXNlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcblx0XHRcdFx0YXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG5cdFx0XHRcdGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcblx0XHRcdFx0b3NUeXBlOiBcInVua25vd25cIixcblx0XHRcdFx0b3NWZXJzaW9uOiBcInVua25vd25cIixcblx0XHRcdFx0c2NyUmVzOiBcInVua25vd25cIixcblx0XHRcdFx0aXBBZGRyZXNzOiBcInVua25vd25cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFNlc3Npb25zLnNhdmUoYm9keS51c2VySUQsIGJvZHkuc2Vzc2lvbktleSk7XG5cdFx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRChib2R5LnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcblx0XHR9KS50aGVuKFxuXHRcdFx0KCkgPT4gZmFsc2UsXG5cdFx0XHQocmVqZWN0aW9uKSA9PiByZWplY3Rpb24uc3RhdHVzQ29kZSA9PT0gNDA0XG5cdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHQ6IFByb21pc2UucmVqZWN0KHJlamVjdGlvbiksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ2luQXV0b21hdGljYWxseSAtIElmIGZhbHNlLCBubyBzZXNzaW9uIHdpbGwgYmUgY3JlYXRlZC5cblx0ICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQgfCBVc2VyPn0gSWYgbG9naW5BdXRvbWF0aWNhbGx5IGlzIHRydWUsIGEgVXNlciB3aWxsIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcblx0XHR1dG1DYW1wYWlnbixcblx0XHR1dG1Db250ZW50LFxuXHRcdHV0bU1lZGl1bSxcblx0XHR1dG1Tb3VyY2UsXG5cdFx0dXRtVGVybSxcblx0fSwgbG9naW5BdXRvbWF0aWNhbGx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZCB8IFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHR3bHBJRDogQ29uZmlnLndscElELFxuXHRcdFx0XHRyZWZlcnJhbENvZGUsXG5cdFx0XHRcdHV0bUNhbXBhaWduLFxuXHRcdFx0XHR1dG1Db250ZW50LFxuXHRcdFx0XHR1dG1NZWRpdW0sXG5cdFx0XHRcdHV0bVNvdXJjZSxcblx0XHRcdFx0dXRtVGVybSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG5cdFx0XHRcdHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlLFxuXHR9KSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBsb2FkRG9jdW1lbnQoZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQ6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIGZvciBlc2xpbnRcblx0XHQvKiBnbG9iYWwgRm9ybURhdGEgKi9cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvZG9jdW1lbnRzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRDcmVkaXRDYXJkcyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIFVzZXIuYWRkQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZFRva2VuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIucmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==