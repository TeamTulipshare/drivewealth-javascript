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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZWZiYTIyNGM1M2QzYTUwNjlkMyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJjb2RlIiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJyZWR1Y2UiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJ4IiwieSIsIkFMTE9XRURfVFlQRVMiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImNvbXByZXNzaW9uIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInN5bSIsIm9iaiIsInNwbGl0IiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIlRSQURFX1NUQVRVU0VTIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDSEFSVF9DT01QUkVTU0lPTlMiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0TGlzdEZvclVzZXJJRCIsImtleSIsImdldFNldHRpbmdzIiwidmFsdWUiLCJzZXRTZXR0aW5nIiwidW5zZXRTZXR0aW5nIiwibG9nb3V0IiwiZ2V0QnlVc2VySUQiLCJ1cGRhdGUiLCJlbWFpbCIsImVtYWlsQWRkcmVzcyIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsImdldENyZWRpdENhcmRzIiwiY2FyZFRva2VuIiwiYWRkQ3JlZGl0Q2FyZCIsImNhcmRJRCIsInJlbW92ZUNyZWRpdENhcmQiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsInJlamVjdGlvbiIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJET0NVTUVOVF9UWVBFUyIsIlBIT1RPX0lEIiwiUFJPT0ZfT0ZfQUREUkVTUyIsIlBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O21CQUVlO0FBQ2RBLG9DQURjO0FBRWRDLHNCQUZjOztBQUlkQyw0QkFKYztBQUtkQyx3QkFMYztBQU1kQyx3QkFOYztBQU9kQyw0QkFQYztBQVFkQyxrQ0FSYztBQVNkQyx3QkFUYztBQVVkQyw0QkFWYztBQVdkQyxzQkFYYztBQVlkQyw4QkFaYzs7QUFjZEMsc0JBZGM7QUFlZEM7QUFmYyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBc0JBOzs7OztLQUtxQlYsTztBQWdCcEIsbUJBQVlXLElBQVosRUFBMEI7QUFBQTs7QUFDekJDLFVBQU9DLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixJQUFwQjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7O0FBWUE7OztnQ0FHa0Q7QUFBQSxRQUF2Q0csSUFBdUMsdUVBQXZCLElBQXVCOztBQUNqRCxXQUFPZCxRQUFRZSxVQUFSLENBQW1CLEtBQUtDLE1BQXhCLEVBQWdDLEtBQUtDLFNBQXJDLEVBQWdESCxJQUFoRCxDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBaUJBOzs7O0FBSUE7OztBQUdBOzs7b0NBR2tDO0FBQ2pDLFdBQU9kLFFBQVFrQixjQUFSLGlCQUF1QixLQUFLRixNQUE1QixFQUFvQyxLQUFLQyxTQUF6QyxvQ0FBdURFLFNBQXZELEdBQVA7QUFDQTs7QUFFRDs7OztBQUlBOzs7QUFHQTs7Ozs7Ozs7QUFzQkE7Ozs4QkFHV0wsSSxFQUFjSCxJLEVBQXdDO0FBQ2hFLFFBQU1TLGdCQUFvQztBQUN6Q0gsZ0JBQVcsS0FBS0EsU0FEeUI7QUFFekNJLGdCQUFXLEtBQUtBLFNBRnlCO0FBR3pDQyxrQkFBYSxLQUFLQSxXQUh1QjtBQUl6Q04sYUFBUSxLQUFLQTtBQUo0QixLQUExQzs7QUFPQSxXQUFPLGdCQUFNTyxNQUFOLENBQWFULElBQWIsRUFBbUJNLGFBQW5CLEVBQWtDVCxJQUFsQyxDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozt1Q0FHZ0U7QUFBQSxRQUE5Q2EsT0FBOEMsdUVBQTVCLEVBQTRCOztBQUMvREEsWUFBUVIsTUFBUixHQUFpQixLQUFLQSxNQUF0QjtBQUNBUSxZQUFRUCxTQUFSLEdBQW9CLEtBQUtBLFNBQXpCO0FBQ0EsV0FBTyxrQkFBUVEsaUJBQVIsQ0FBMEJELE9BQTFCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O21DQUdnQkUsUyxFQUFpQkMsTyxFQUF1QztBQUN2RSxXQUFPLGtCQUFRQyxlQUFSLENBQXdCLEtBQUtaLE1BQTdCLEVBQXFDLEtBQUtLLFNBQTFDLEVBQXFESyxTQUFyRCxFQUFnRUMsT0FBaEUsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCRCxTLEVBQWlCQyxPLEVBQXVDO0FBQ3ZFLFdBQU8sa0JBQVFFLGVBQVIsQ0FBd0IsS0FBS2IsTUFBN0IsRUFBcUMsS0FBS0ssU0FBMUMsRUFBcURLLFNBQXJELEVBQWdFQyxPQUFoRSxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OztpQ0FHY0QsUyxFQUFpQkMsTyxFQUF1QztBQUNyRSxXQUFPLGtCQUFRRyxhQUFSLENBQXNCLEtBQUtkLE1BQTNCLEVBQW1DLEtBQUtDLFNBQXhDLEVBQW1EUyxTQUFuRCxFQUE4REMsT0FBOUQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7bUNBR2dCRCxTLEVBQWlCQyxPLEVBQXVDO0FBQ3ZFLFdBQU8sa0JBQVFJLGVBQVIsQ0FBd0IsS0FBS2YsTUFBN0IsRUFBcUMsS0FBS0MsU0FBMUMsRUFBcURTLFNBQXJELEVBQWdFQyxPQUFoRSxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OztvQ0FHaUJELFMsRUFBaUJDLE8sRUFBdUM7QUFDeEUsV0FBTyxrQkFBUUssZ0JBQVIsQ0FBeUIsS0FBS2hCLE1BQTlCLEVBQXNDLEtBQUtDLFNBQTNDLEVBQXNEUyxTQUF0RCxFQUFpRUMsT0FBakUsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7dUNBR29CTSxPLEVBQWtDO0FBQ3JELFdBQU8sa0JBQVFDLG1CQUFSLENBQTRCLEtBQUtsQixNQUFqQyxFQUF5QyxLQUFLQyxTQUE5QyxFQUF5RGdCLE9BQXpELENBQVA7QUFDQTs7QUFFRDs7Ozs7OzhCQXVGV1QsTyxFQUEwQjtBQUNwQyxXQUFPWixPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlcsT0FBbEIsRUFBMkI7QUFDakNSLGFBQVEsS0FBS0EsTUFEb0I7QUFFakNDLGdCQUFXLEtBQUtBO0FBRmlCLEtBQTNCLENBQVA7QUFJQTs7QUFFRDs7Ozs7O3FDQUdtQztBQUNsQyxXQUFPakIsUUFBUW1DLGVBQVIsQ0FBd0IsS0FBS0MsVUFBTCxFQUF4QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHZ0JaLE8sRUFBa0M7QUFDakQsV0FBT3hCLFFBQVFxQyxlQUFSLENBQXdCLEtBQUtELFVBQUwsQ0FBZ0JaLE9BQWhCLENBQXhCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3NDQUdtQkEsTyxFQUFrQztBQUNwRCxXQUFPeEIsUUFBUXNDLGtCQUFSLENBQTJCLEtBQUtGLFVBQUwsQ0FBZ0JaLE9BQWhCLENBQTNCLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3dDQUdzQztBQUNyQyxXQUFPeEIsUUFBUXVDLGtCQUFSLENBQTJCLEtBQUtILFVBQUwsRUFBM0IsQ0FBUDtBQUNBOzs7OEJBbFBpQnBCLE0sRUFBZ0JDLFMsRUFBMEQ7QUFBQSxRQUF2Q0gsSUFBdUMsdUVBQXZCLElBQXVCOztBQUMzRixXQUFPLHVCQUFRO0FBQ2QwQixhQUFRLEtBRE07QUFFZEMsZUFBVSxZQUFVekIsTUFBViw4QkFDSkMsU0FESSxJQUNRSCxPQUFPLE1BQU1BLElBQWIsR0FBb0IsRUFENUIsRUFGSTtBQUlkNEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFKRSxLQUFSLEVBS0o0QixJQUxJLENBS0MsZ0JBQWM7QUFBQSxTQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3JCLFNBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDaEJELFdBQUtDLE1BQUwsR0FBY0QsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUNDLEtBQUQ7QUFBQSxjQUFXLG9CQUFVQSxLQUFWLENBQVg7QUFBQSxPQUFoQixDQUFkO0FBQ0E7QUFDRCxZQUFPbEMsT0FBTytCLEtBQUsvQixJQUFMLENBQVAsR0FBb0IrQixJQUEzQjtBQUNBLEtBVk0sQ0FBUDtBQVdBOzs7a0NBMEJxQjdCLE0sRUFBZ0JDLFMsRUFBb0M7QUFDekUsUUFBSWdDLGNBQWMsRUFBbEI7QUFDQSxRQUFJOUIsVUFBVStCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsU0FBTXhCLFlBQVlQLFVBQVUsQ0FBVixDQUFsQjtBQUNBLFNBQU1RLFVBQVVSLFVBQVUsQ0FBVixDQUFoQjtBQUNBOEIsb0JBQWUsYUFBZjtBQUNBQSxtQ0FBNEJ2QixVQUFVeUIsV0FBVixFQUE1QixHQUFzRCxDQUFDLE9BQU96QixVQUFVMEIsUUFBVixLQUF1QixDQUE5QixDQUFELEVBQW1DQyxLQUFuQyxDQUF5QyxDQUFDLENBQTFDLENBQXRELEdBQXFHLENBQUMsTUFBTTNCLFVBQVU0QixPQUFWLEVBQVAsRUFBNEJELEtBQTVCLENBQWtDLENBQUMsQ0FBbkMsQ0FBckc7QUFDQUosa0NBQTJCdEIsUUFBUXdCLFdBQVIsRUFBM0IsR0FBbUQsQ0FBQyxPQUFPeEIsUUFBUXlCLFFBQVIsS0FBcUIsQ0FBNUIsQ0FBRCxFQUFpQ0MsS0FBakMsQ0FBdUMsQ0FBQyxDQUF4QyxDQUFuRCxHQUFnRyxDQUFDLE1BQU0xQixRQUFRMkIsT0FBUixFQUFQLEVBQTBCRCxLQUExQixDQUFnQyxDQUFDLENBQWpDLENBQWhHO0FBQ0EsS0FORCxNQU1PLElBQUlsQyxVQUFVK0IsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUNsQ0QseUNBQWtDOUIsVUFBVSxDQUFWLENBQWxDO0FBQ0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkcUIsYUFBUSxLQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLDRCQUFpREMsU0FBakQsR0FBNkRnQyxXQUYvQztBQUdkUCxpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUtVLFdBQW5CO0FBQUEsS0FKRCxDQUFQO0FBS0E7OztvQ0FzRXVCdkMsTSxFQUF5QztBQUNoRSxXQUFPLHVCQUFRO0FBQ2R3QixhQUFRLEtBRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsY0FGYztBQUdkMEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLRSxHQUFMLENBQVM7QUFBQSxhQUFXLElBQUkvQyxPQUFKLENBQVl3RCxPQUFaLENBQVg7QUFBQSxNQUFULENBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7OzBCQUdjeEMsTSxFQUFnQkYsSSxFQUFjSCxJLEVBQWM7QUFDekQsUUFBSUcsU0FBU2QsUUFBUXlELEtBQVIsQ0FBY0MsUUFBM0IsRUFBcUM7QUFDcEMvQyxZQUFPO0FBQ05LLG9CQURNO0FBRU4yQyxvQkFBYyxNQUZSO0FBR05DLGtCQUFZakQ7QUFITixNQUFQO0FBS0E7O0FBRUQsV0FBTyx1QkFBUTtBQUNkNkIsYUFBUSxNQURNO0FBRWRDLGVBQVUzQixTQUFTZCxRQUFReUQsS0FBUixDQUFjQyxRQUF2QixHQUNQLG1CQURPLEdBRVAsZUFKVztBQUtkaEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FMRTtBQU1kNkIsV0FBTWxDO0FBTlEsS0FBUixFQU9KaUMsSUFQSSxDQU9DO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBUEQsQ0FBUDtBQVFBOztBQUVEOzs7Ozs7O3NDQUkwQkwsTSxTQVVOO0FBQUEsUUFUbkJ4QixNQVNtQixTQVRuQkEsTUFTbUI7QUFBQSxRQVJuQkMsU0FRbUIsU0FSbkJBLFNBUW1CO0FBQUEsUUFQbkI0QyxNQU9tQixTQVBuQkEsTUFPbUI7QUFBQSxRQU5uQkMsU0FNbUIsU0FObkJBLFNBTW1COztBQUNuQixXQUFPLHVCQUFRO0FBQ2R0QixtQkFEYztBQUVkQywyQkFBb0J6QixNQUFwQixrQkFBdUNDLFNBQXZDLG1CQUZjO0FBR2R5QixpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYixDQUhFO0FBSWQ2QixXQUFNLENBQUNMLE9BQU91QixVQUFQLENBQWtCLEdBQWxCLENBQUQsR0FBMEJDLFNBQTFCO0FBQ0xIO0FBREssUUFFSkMsVUFBVUMsVUFBVixDQUFxQixNQUFyQixJQUErQixRQUEvQixHQUEwQyxlQUZ0QyxFQUV3REQsU0FGeEQ7QUFKUSxLQUFSLEVBUUpsQixJQVJJLENBUUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FSRCxDQUFQO0FBU0E7O0FBRUQ7Ozs7OzttQ0FHdUJyQixPLEVBQWtDO0FBQ3hELFdBQU94QixRQUFRaUUsa0JBQVIsQ0FBMkIsS0FBM0IsRUFBa0N6QyxPQUFsQyxDQUFQO0FBQ0E7O0FBRUQ7Ozs7OzttQ0FHdUJBLE8sRUFBa0M7QUFDeEQsV0FBT3hCLFFBQVFpRSxrQkFBUixDQUEyQixNQUEzQixFQUFtQ3pDLE9BQW5DLENBQVA7QUFDQTs7QUFFRDs7Ozs7O3NDQUcwQkEsTyxFQUFrQztBQUMzRCxXQUFPeEIsUUFBUWlFLGtCQUFSLENBQTJCLEtBQTNCLEVBQWtDekMsT0FBbEMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7c0NBRzBCQSxPLEVBQWtDO0FBQzNELFdBQU94QixRQUFRaUUsa0JBQVIsQ0FBMkIsUUFBM0IsRUFBcUN6QyxPQUFyQyxDQUFQO0FBQ0E7Ozs7OztBQTNSbUJ4QixRLENBOEJia0UsYSxHQUEyQztBQUNqREMsUUFBTSxNQUQyQztBQUVqREMsVUFBUSxRQUZ5QztBQUdqREMsZ0JBQWMsY0FIbUM7QUFJakRDLGFBQVcsV0FKc0M7QUFLakRDLE9BQUs7QUFMNEMsRTtBQTlCOUJ2RSxRLENBK0Nid0UsUSxHQUF1QztBQUM3Q0MsV0FBUyxDQURvQztBQUU3Q0MsUUFBTSxDQUZ1QztBQUc3Q0Msc0JBQW9CLENBSHlCO0FBSTdDQyxVQUFRO0FBSnFDLEU7QUEvQzFCNUUsUSxDQTZEYnlELEssR0FBa0M7QUFDeENDLFlBQVUsQ0FEOEI7QUFFeENtQixRQUFNO0FBRmtDLEU7bUJBN0RyQjdFLE87Ozs7Ozs7Ozs7OzttQkNoQkdVLE87O0FBZnhCOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFZZSxVQUFTQSxPQUFULE9BY1o7QUFBQSx5QkFiRjhCLE1BYUU7QUFBQSxNQWJGQSxNQWFFLCtCQWJPLEtBYVA7QUFBQSxNQVpGQyxRQVlFLFFBWkZBLFFBWUU7QUFBQSxNQVhGQyxVQVdFLFFBWEZBLFVBV0U7QUFBQSxNQVZGRyxJQVVFLFFBVkZBLElBVUU7QUFBQSw4QkFURmlDLFdBU0U7QUFBQSxNQVRGQSxXQVNFLG9DQVRZLEVBU1o7QUFBQSx1QkFSRkMsSUFRRTtBQUFBLE1BUkZBLElBUUUsNkJBUkssY0FBTUMsR0FRWDs7QUFDRixNQUFNQyxVQUFzQztBQUMzQ0MsV0FBUTtBQURtQyxHQUE1QztBQUdBLE1BQUkxQyxXQUFXLE1BQVgsSUFBcUJBLFdBQVcsS0FBaEMsSUFBeUNBLFdBQVcsT0FBeEQsRUFBaUU7QUFDaEV5QyxXQUFRLGNBQVIsSUFBMEIsa0JBQTFCO0FBQ0E7QUFDRCxNQUFJdkMsVUFBSixFQUFnQjtBQUNmdUMsV0FBUSx5QkFBUixJQUFxQ3ZDLFVBQXJDO0FBQ0E7QUFDRCxPQUFLLElBQU15QyxPQUFYLElBQXFCTCxXQUFyQixFQUFrQztBQUNqQ0csV0FBUUUsT0FBUixJQUFrQkwsWUFBWUssT0FBWixDQUFsQjtBQUNBOztBQUVEMUMsYUFBVyxlQUFPMkMsR0FBUCxDQUFXTCxJQUFYLElBQW1CdEMsUUFBOUI7O0FBRUEsTUFBSXdDLFFBQVEsY0FBUixNQUE0QixrQkFBaEMsRUFBb0RwQyxPQUFPd0MsS0FBS0MsU0FBTCxDQUFlekMsSUFBZixDQUFQOztBQUVwRCxTQUFPLElBQUkwQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLGtCQUFPQyxRQUFQLENBQWdCbEQsTUFBaEIsRUFBd0JDLFFBQXhCLEVBQWtDd0MsT0FBbEMsRUFBMkNwQyxJQUEzQyxFQUFpRCxVQUFDOEMsVUFBRCxFQUFhQyxVQUFiLEVBQXlCQyxPQUF6QixFQUFxQztBQUNyRixRQUFNQyxjQUFjRixXQUFXLGNBQVgsS0FBOEJBLFdBQVcsY0FBWCxDQUE5QixJQUE0RCxFQUFoRjtBQUNBLFFBQUlDLFdBQVdDLFlBQVlDLE9BQVosQ0FBb0Isa0JBQXBCLE1BQTRDLENBQUMsQ0FBNUQsRUFBK0Q7QUFDOUQsU0FBSTtBQUNIRixnQkFBVVIsS0FBS1csS0FBTCxDQUFXSCxPQUFYLENBQVY7QUFDQSxNQUZELENBRUUsT0FBT0ksR0FBUCxFQUFZO0FBQ2I7QUFDQTtBQUNEOztBQUVELFFBQUlDLE9BQU9QLFVBQVAsRUFBbUIsQ0FBbkIsTUFBMEIsR0FBMUIsSUFBaUNPLE9BQU9QLFVBQVAsRUFBbUIsQ0FBbkIsTUFBMEIsR0FBL0QsRUFBb0U7QUFDbkVILGFBQVE7QUFDUDNDLFlBQU1nRCxPQURDO0FBRVBGLDRCQUZPO0FBR1BWLGVBQVNXO0FBSEYsTUFBUjtBQUtBLEtBTkQsTUFNTztBQUNOLFNBQUlPLHFCQUFKO0FBQ0EsU0FBSU4sT0FBSixFQUFhO0FBQ1pNLHFCQUFlTixRQUFRTyxPQUFSLElBQW1CZixLQUFLQyxTQUFMLENBQWVPLE9BQWYsQ0FBbEM7QUFDQTtBQUNELFNBQU1RLFFBQVFWLGVBQWUsR0FBZixHQUNYLG1DQUE0QlEsWUFBNUIsRUFBMENOLE9BQTFDLEVBQW1ERixVQUFuRCxFQUErREMsVUFBL0QsQ0FEVyxHQUVYLDRCQUFxQk8sWUFBckIsRUFBbUNOLE9BQW5DLEVBQTRDRixVQUE1QyxFQUF3REMsVUFBeEQsQ0FGSDtBQUdBSCxZQUFPWSxLQUFQO0FBQ0E7QUFDRCxJQTFCRDtBQTJCQSxHQTVCTSxDQUFQO0FBNkJBOzs7Ozs7Ozs7Ozs7Ozs7U0M1QmU1RixLLEdBQUFBLEs7Ozs7QUFqRGhCOzs7QUFHTyxLQUFNUiwwQkFBUztBQUNyQm1GLE9BQUssSUFEZ0I7QUFFckJNLFlBQVUsSUFGVztBQUdyQlksYUFBVyxJQUhVO0FBSXJCQyxjQUFZLElBSlM7QUFLckJDLFNBQU8sSUFMYztBQU1yQkMsaUJBQWUsSUFOTTtBQU9yQkMsZ0JBQWM7QUFQTyxFQUFmOztBQVVQOzs7Ozs7Ozs7QUFTTyxLQUFNM0csd0JBQVE7QUFDcEJpRixPQUFLLEtBRGU7QUFFcEIyQixRQUFNLE1BRmM7QUFHcEJDLFdBQVM7QUFIVyxFQUFkOztBQU1QOzs7Ozs7OztBQVFPLEtBQU05RyxzQ0FBZTtBQUMzQitHLHlDQUNFOUcsTUFBTWlGLEdBRFIsRUFDYyw4QkFEZCx5QkFFRWpGLE1BQU00RyxJQUZSLEVBRWUsNEJBRmYseUJBR0U1RyxNQUFNNkcsT0FIUixFQUdrQiwrQkFIbEIsUUFEMkI7QUFNM0JFLDRDQUNFL0csTUFBTWlGLEdBRFIsRUFDYyxnQ0FEZCwwQkFFRWpGLE1BQU00RyxJQUZSLEVBRWUsOEJBRmYsMEJBR0U1RyxNQUFNNkcsT0FIUixFQUdrQixpQ0FIbEI7QUFOMkIsRUFBckI7O0FBYUEsVUFBU25HLEtBQVQsT0FRSjtBQUFBLE1BUEYyRSxHQU9FLFFBUEZBLEdBT0U7QUFBQSxNQU5GTSxRQU1FLFFBTkZBLFFBTUU7QUFBQSxNQUxGWSxTQUtFLFFBTEZBLFNBS0U7QUFBQSxNQUpGQyxVQUlFLFFBSkZBLFVBSUU7QUFBQSx3QkFIRkMsS0FHRTtBQUFBLE1BSEZBLEtBR0UsOEJBSE0sSUFHTjtBQUFBLE1BRkZDLGFBRUUsUUFGRkEsYUFFRTtBQUFBLE1BREZDLFlBQ0UsUUFERkEsWUFDRTs7QUFDRnpHLFNBQU9tRixHQUFQLEdBQWFBLEdBQWI7QUFDQW5GLFNBQU95RixRQUFQLEdBQWtCQSxRQUFsQjtBQUNBekYsU0FBT3FHLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0FyRyxTQUFPc0csVUFBUCxHQUFvQkEsVUFBcEI7QUFDQXRHLFNBQU91RyxLQUFQLEdBQWVBLEtBQWY7QUFDQXZHLFNBQU93RyxhQUFQLEdBQXVCQSxpQkFBaUJELEtBQXhDO0FBQ0F2RyxTQUFPeUcsWUFBUCxHQUFzQkEsWUFBdEI7QUFDQSxFOzs7Ozs7Ozs7Ozs7O0FDakVEOzs7Ozs7Ozs7Ozs7S0FFYUssZ0IsV0FBQUEsZ0I7OztBQUNaLDRCQUFZWCxPQUFaLEVBQXFCdkQsSUFBckIsRUFBMkI4QyxVQUEzQixFQUF1Q1YsT0FBdkMsRUFBZ0Q7QUFBQTs7QUFBQSxtSUFDekNtQixPQUR5Qzs7QUFFL0MsU0FBS3ZELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUs4QyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtWLE9BQUwsR0FBZUEsT0FBZjtBQUorQztBQUsvQzs7Ozs7S0FHVytCLHVCLFdBQUFBLHVCOzs7QUFDWixtQ0FBWVosT0FBWixFQUFxQnZELElBQXJCLEVBQTJCOEMsVUFBM0IsRUFBdUNWLE9BQXZDLEVBQWdEO0FBQUE7O0FBQUEsa0pBQ3pDbUIsT0FEeUM7O0FBRS9DLFVBQUt2RCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLOEMsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLVixPQUFMLEdBQWVBLE9BQWY7QUFKK0M7QUFLL0M7Ozs7O21CQUdhO0FBQ2Q4QixvQ0FEYztBQUVkQztBQUZjLEU7Ozs7OztBQ3BCZjs7QUFFQSxrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDdERNeEcsUTtBQUNGLHlCQUFjO0FBQUE7O0FBQ1YsY0FBS3lHLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNIOzs7OzhCQUVJbEcsTSxFQUFRMEIsVSxFQUFZO0FBQ3JCLGtCQUFLdUUsS0FBTCxDQUFXakcsTUFBWCxJQUFxQjBCLFVBQXJCO0FBQ0Esa0JBQUt3RSxTQUFMLEdBQWlCbEcsTUFBakI7QUFDSDs7OzZCQUVHQSxNLEVBQVE7QUFDUixvQkFBTyxLQUFLaUcsS0FBTCxDQUFXakcsTUFBWCxDQUFQO0FBQ0g7OztrQ0FFUTtBQUNMLG9CQUFPLEtBQUtpRyxLQUFMLENBQVcsS0FBS0MsU0FBaEIsQ0FBUDtBQUNIOzs7Z0NBRU1sRyxNLEVBQVE7QUFDWCxvQkFBTyxLQUFLaUcsS0FBTCxDQUFXakcsTUFBWCxDQUFQO0FBQ0g7Ozs7OztBQUdFLEtBQU1tRyw4QkFBVyxJQUFJM0csUUFBSixFQUFqQjttQkFDUTJHLFE7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFLQSxLQUFNQyxlQUFlLFNBQXJCO0FBQ0EsS0FBTUMsY0FBYyxJQUFwQjtBQUNBLEtBQU1DLGNBQWNDLE9BQU9DLGlCQUEzQjtBQUNBLEtBQU1DLGVBQWUsUUFBckI7QUFDQSxLQUFNQyxjQUFjLElBQXBCO0FBQ0EsS0FBTUMsY0FBYyxJQUFwQjs7QUEwQkE7Ozs7O0tBS3FCdEgsSztBQXlCcEIsaUJBQVlNLElBQVosRUFBMEI7QUFBQTs7QUFDekJDLFVBQU9DLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixJQUFwQjtBQUNBLFFBQUtpSCxlQUFMLEdBQXVCakgsS0FBS2tILFlBQTVCO0FBQ0EsUUFBS0MsTUFBTCxHQUFjbkgsS0FBS29ILFNBQW5CO0FBQ0EsUUFBS2pILElBQUwsR0FBWUgsS0FBS3FILE9BQUwsSUFBZ0JySCxLQUFLc0gsU0FBakM7QUFDQSxRQUFLQyxLQUFMLEdBQWF2SCxLQUFLd0gsU0FBTCxJQUFrQnhILEtBQUt5SCxVQUF2QixJQUFxQ3pILEtBQUt1SCxLQUF2RDtBQUNBOztBQUVEOzs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOzs7NEJBR3dCO0FBQ3ZCLFdBQU83SCxNQUFNZ0ksTUFBTixDQUFhLEtBQUtDLE9BQWxCLENBQVA7QUFDQTs7QUFFRDs7Ozs7OzBCQUdjQSxPLEVBQWdDO0FBQzdDLFdBQU8sdUJBQVE7QUFDZDlGLGFBQVEsUUFETTtBQUVkQyw0QkFBcUI2RixPQUZQO0FBR2Q1RixpQkFBWSxtQkFBUzZGLE1BQVQ7QUFIRSxLQUFSLEVBSUozRixJQUpJLENBSUM7QUFBQSxZQUFNb0IsU0FBTjtBQUFBLEtBSkQsQ0FBUDtBQUtBOztBQUVEOzs7Ozs7MkJBR2VzRSxPLEVBQWlDO0FBQy9DLFdBQU8sdUJBQVE7QUFDZDlGLGFBQVEsS0FETTtBQUVkQyw0QkFBcUI2RixPQUZQO0FBR2Q1RixpQkFBWSxtQkFBUzZGLE1BQVQ7QUFIRSxLQUFSLEVBSUozRixJQUpJLENBSUMsZ0JBQW1DO0FBQUEsU0FBaENDLElBQWdDLFFBQWhDQSxJQUFnQztBQUFBLFNBQTFCOEMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsU0FBZFYsT0FBYyxRQUFkQSxPQUFjOztBQUMxQyxTQUFJcEMsS0FBS2dGLFlBQUwsS0FBc0I3RCxTQUExQixFQUFxQztBQUNwQyxhQUFPdUIsUUFBUUUsTUFBUixDQUNOLDRCQUFxQjVDLEtBQUtnRixZQUExQixFQUF3Q2hGLElBQXhDLEVBQThDOEMsVUFBOUMsRUFBMERWLE9BQTFELENBRE0sQ0FBUDtBQUdBO0FBQ0QsWUFBTyxJQUFJNUUsS0FBSixDQUFVd0MsSUFBVixDQUFQO0FBQ0EsS0FYTSxDQUFQO0FBWUE7O0FBRUQ7Ozs7Ozs7OzswQkFPQy9CLEksZ0JBMEIwQjtBQUFBLFFBeEJ6QkcsU0F3QnlCLFNBeEJ6QkEsU0F3QnlCO0FBQUEsUUF2QnpCSSxTQXVCeUIsU0F2QnpCQSxTQXVCeUI7QUFBQSxRQXRCekJMLE1Bc0J5QixTQXRCekJBLE1Bc0J5QjtBQUFBLFFBckJ6Qk0sV0FxQnlCLFNBckJ6QkEsV0FxQnlCO0FBQUEsNEJBbEJ6QjBCLEtBa0J5QjtBQUFBLFFBakJ4QndGLFVBaUJ3QixlQWpCeEJBLFVBaUJ3QjtBQUFBLFFBaEJ4QkMsSUFnQndCLGVBaEJ4QkEsSUFnQndCO0FBQUEsUUFmeEJDLEdBZXdCLGVBZnhCQSxHQWV3QjtBQUFBLFFBZHhCQyxVQWN3QixlQWR4QkEsVUFjd0I7QUFBQSxRQWJ4QkMsT0Fhd0IsZUFieEJBLE9BYXdCO0FBQUEsUUFaeEJDLFFBWXdCLGVBWnhCQSxRQVl3QjtBQUFBLFFBWHhCWCxLQVd3QixlQVh4QkEsS0FXd0I7QUFBQSxrQ0FUekJZLFdBU3lCO0FBQUEsUUFUekJBLFdBU3lCLHFDQVRYLElBU1c7QUFBQSxzQ0FSekJDLGlCQVF5QjtBQUFBLFFBUnpCQSxpQkFReUIseUNBUkwsSUFRSztBQUFBLHFDQVB6QkMsY0FPeUI7QUFBQSxRQVB6QkEsY0FPeUIsd0NBUFIsRUFPUTs7QUFDMUIsUUFBSUwsY0FBY0QsR0FBbEIsRUFBdUI7QUFDdEIsV0FBTSxJQUFJeEksS0FBSixDQUFVLG9EQUFWLENBQU47QUFDQTs7QUFFRCxRQUFJWSxTQUFTVCxNQUFNb0QsS0FBTixDQUFZd0YsTUFBekIsRUFBaUM7QUFDaENELHNCQUFpQixDQUFqQjs7QUFFQSxTQUFJLENBQUNkLEtBQUwsRUFBWTtBQUNYLFlBQU0sSUFBSWhJLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0E7O0FBRUQsU0FBSTJJLFFBQUosRUFBYztBQUNiLFlBQU0sSUFBSTNJLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0E7QUFDRDs7QUFFRCxXQUFPLHVCQUFRO0FBQ2RzQyxhQUFRLE1BRE07QUFFZEMsZUFBVSxTQUZJO0FBR2RDLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFdBQU07QUFDTHFHLG9CQUFjVixXQUFXVSxZQUFYLElBQTJCVixXQUFXVyxFQUF0QyxJQUE0Q1gsVUFEckQ7QUFFTHZILDBCQUZLO0FBR0xJLDBCQUhLO0FBSUxMLG9CQUpLO0FBS0xNLDhCQUxLO0FBTUwwRyxlQUFTbEgsSUFOSjtBQU9MMkgsZ0JBUEs7QUFRTFcsZ0JBQVVWLE9BQU8xRSxTQVJaO0FBU0wyRSxrQkFBWUEsY0FBYzNFLFNBVHJCO0FBVUw0RSxzQkFWSztBQVdMQyx3QkFYSztBQVlMWCxhQUFPcEgsU0FBU1QsTUFBTW9ELEtBQU4sQ0FBWTRGLElBQXJCLEdBQTRCbkIsS0FBNUIsR0FBb0NsRSxTQVp0QztBQWFMb0Usa0JBQVl0SCxTQUFTVCxNQUFNb0QsS0FBTixDQUFZNkYsS0FBckIsR0FBNkJwQixLQUE3QixHQUFxQ2xFO0FBYjVDO0FBSlEsS0FBUixFQW1CSnBCLElBbkJJLENBbUJDLGlCQUFjO0FBQUEsU0FBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNyQixTQUFJLENBQUNpRyxXQUFMLEVBQWtCLE9BQU9qRyxLQUFLeUYsT0FBWjs7QUFFbEIsWUFBTyxJQUFJL0MsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QyxVQUFJOEQsVUFBVVAsY0FBZDtBQUNBLFVBQU1RLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCRCxrQkFBVyxDQUFYO0FBQ0FsSixhQUFNb0osT0FBTixDQUFjNUcsS0FBS3lGLE9BQW5CLEVBQTRCMUYsSUFBNUIsQ0FBaUMsaUJBQVM7QUFDekMsWUFBTThHLFdBQVcxRyxNQUFNOEUsTUFBTixLQUFpQnpILE1BQU1tRSxRQUFOLENBQWVtRixHQUFoQyxJQUNoQjNHLE1BQU04RSxNQUFOLEtBQWlCekgsTUFBTW1FLFFBQU4sQ0FBZW9GLFlBRGpDOztBQUdBLFlBQUlMLFdBQVcsQ0FBWCxJQUFnQkcsUUFBcEIsRUFBOEI7QUFDN0IsZ0JBQU9sRSxRQUFReEMsS0FBUixDQUFQO0FBQ0E7QUFDRDZHLG1CQUFXTCxXQUFYLEVBQXdCVCxpQkFBeEI7QUFDQSxRQVJELEVBUUcsaUJBQVM7QUFDWCxZQUFJMUMsTUFBTXhELElBQU4sQ0FBV2lILElBQVgsS0FBb0IsR0FBcEIsSUFBMkJQLFVBQVUsQ0FBekMsRUFBNEM7QUFDM0MsZ0JBQU9NLFdBQVdMLFdBQVgsRUFBd0JULGlCQUF4QixDQUFQO0FBQ0E7QUFDRCxlQUFPdEQsT0FBT1ksS0FBUCxDQUFQO0FBQ0EsUUFiRDtBQWNBLE9BaEJEO0FBaUJBd0QsaUJBQVdMLFdBQVgsRUFBd0JULGlCQUF4QjtBQUNBLE1BcEJNLENBQVA7QUFxQkEsS0EzQ00sQ0FBUDtBQTRDQTs7QUFFRDs7Ozs7Ozs7NENBdUI0QztBQUFBLFFBaEIxQzlILFNBZ0IwQyxTQWhCMUNBLFNBZ0IwQztBQUFBLFFBZjFDSSxTQWUwQyxTQWYxQ0EsU0FlMEM7QUFBQSxRQWQxQ0wsTUFjMEMsU0FkMUNBLE1BYzBDO0FBQUEsUUFiMUNNLFdBYTBDLFNBYjFDQSxXQWEwQztBQUFBLFFBVjFDd0IsTUFVMEMsU0FWMUNBLE1BVTBDO0FBQUEsa0NBVDFDZ0csV0FTMEM7QUFBQSxRQVQxQ0EsV0FTMEMscUNBVDVCLElBUzRCO0FBQUEsc0NBUjFDQyxpQkFRMEM7QUFBQSxRQVIxQ0EsaUJBUTBDLHlDQVJ0QixHQVFzQjtBQUFBLHFDQVAxQ0MsY0FPMEM7QUFBQSxRQVAxQ0EsY0FPMEMsd0NBUHpCLEVBT3lCOztBQUMzQyxXQUFPLHVCQUFRO0FBQ2R4RyxhQUFRLE1BRE07QUFFZEMsZUFBVSxTQUZJO0FBR2RDLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFdBQU1DLE9BQU9DLEdBQVAsQ0FBVztBQUFBLGFBQVU7QUFDMUJtRyxxQkFBY2xHLE1BQU13RixVQUFOLENBQWlCVSxZQUFqQixJQUNWbEcsTUFBTXdGLFVBQU4sQ0FBaUJXLEVBRFAsSUFDYW5HLE1BQU13RixVQUZQO0FBRzFCdkgsMkJBSDBCO0FBSTFCSSwyQkFKMEI7QUFLMUJMLHFCQUwwQjtBQU0xQk0sK0JBTjBCO0FBTzFCMEcsZ0JBQVMzSCxNQUFNb0QsS0FBTixDQUFZd0YsTUFQSztBQVExQlIsYUFBTXBJLE1BQU0wSixLQUFOLENBQVlDLEdBUlE7QUFTMUJaLGlCQUFVcEcsTUFBTTBGLEdBQU4sR0FBWTFGLE1BQU0wRixHQUFsQixHQUF3QjFFLFNBVFI7QUFVMUIyRSxtQkFBWTNGLE1BQU0yRixVQUFOLEdBQW1CM0YsTUFBTTJGLFVBQXpCLEdBQXNDM0UsU0FWeEI7QUFXMUI0RSxnQkFBUzVGLE1BQU00RixPQVhXO0FBWTFCQyxpQkFBVTdGLE1BQU02RjtBQVpVLE9BQVY7QUFBQSxNQUFYO0FBSlEsS0FBUixFQWtCSmpHLElBbEJJLENBa0JDLGlCQUFjO0FBQUEsU0FBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNyQixTQUFJb0gsZUFBZXBILElBQW5CO0FBQ0EsU0FBTXFILFlBQVlELGFBQWFFLE1BQWIsQ0FDakIsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEdBQVo7QUFBQSxhQUFvQjFKLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCdUosR0FBbEIsc0JBQ2xCdEgsT0FBT3dILEdBQVAsRUFBWUMsV0FETSxFQUNRRixJQURSLEVBQXBCO0FBQUEsTUFEaUIsRUFJakIsRUFKaUIsQ0FBbEI7O0FBT0EsU0FBSSxDQUFDdkIsV0FBTCxFQUFrQixPQUFPb0IsU0FBUDs7QUFFbEIsWUFBTyxJQUFJM0UsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QyxVQUFJOEQsVUFBVVAsY0FBZDtBQUNBaUIscUJBQWVBLGFBQWFsSCxHQUFiLENBQWlCLFVBQUNDLEtBQUQsRUFBUXNILEdBQVI7QUFBQSxjQUFnQjFKLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbUMsS0FBbEIsRUFBeUI7QUFDeEV1SCxxQkFBYXpILE9BQU93SCxHQUFQLEVBQVlDO0FBRCtDLFFBQXpCLENBQWhCO0FBQUEsT0FBakIsQ0FBZjtBQUdBLFVBQU1mLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFdBQUlELFdBQVcsQ0FBZixFQUFrQixPQUFPL0QsUUFBUXlFLFlBQVIsQ0FBUDtBQUNsQlYsa0JBQVcsQ0FBWDs7QUFFQWhFLGVBQVFpRixHQUFSLENBQ0NQLGFBQWFsSCxHQUFiLENBQWlCO0FBQUEsZUFBUyxJQUFJd0MsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMxRHBGLGVBQU1vSixPQUFOLENBQWN6RyxNQUFNc0YsT0FBcEIsRUFBNkJ0SCxNQUE3QixFQUFxQyxVQUFDcUYsS0FBRCxFQUFRb0UsYUFBUixFQUEwQjtBQUM5RCxjQUFJcEUsS0FBSixFQUFXLE9BQU9iLFNBQVA7QUFDWDBFLG9CQUFVbEgsTUFBTXVILFdBQWhCLElBQStCRSxhQUEvQjtBQUNBakY7QUFDQSxVQUpEO0FBS0EsU0FOeUIsQ0FBVDtBQUFBLFFBQWpCLENBREQsRUFRRTVDLElBUkYsQ0FRTyxZQUFNO0FBQ1osWUFBSThILGNBQWMsS0FBbEI7QUFDQSxhQUFLLElBQU1DLFNBQVgsSUFBd0JULFNBQXhCLEVBQW1DO0FBQ2xDLGFBQU1VLGFBQWFWLFVBQVVTLFNBQVYsRUFBcUI3QyxNQUF4QztBQUNBLGFBQUksQ0FBQzhDLFVBQUQsSUFDQUEsZUFBZXZLLE1BQU1tRSxRQUFOLENBQWVtRixHQUQ5QixJQUVBaUIsZUFBZXZLLE1BQU1tRSxRQUFOLENBQWVvRixZQUZsQyxFQUdFO0FBQ0RjLHdCQUFjLElBQWQ7QUFDQTtBQUNBO0FBQ0Q7QUFDRCxZQUFJQSxXQUFKLEVBQWlCO0FBQ2hCYixvQkFBV0wsV0FBWCxFQUF3QlQsaUJBQXhCO0FBQ0EsU0FGRCxNQUVPO0FBQ04sZ0JBQU92RCxRQUFRMEUsU0FBUixDQUFQO0FBQ0E7QUFDRCxRQXpCRDtBQTBCQSxPQTlCRDtBQStCQUwsaUJBQVdMLFdBQVgsRUFBd0JULGlCQUF4QjtBQUNBLE1BckNNLENBQVA7QUFzQ0EsS0FuRU0sQ0FBUDtBQW9FQTs7QUFFRDs7Ozs7O3NDQUlDakcsTSxFQU1BK0gsa0IsRUFZQztBQUNEL0gsYUFBU2dJLE1BQU1DLE9BQU4sQ0FBY2pJLE1BQWQsSUFBd0JBLE1BQXhCLEdBQWlDLENBQUNBLE1BQUQsQ0FBMUM7QUFDQSxRQUFJa0ksUUFBUSxDQUFaO0FBQ0EsUUFBSUMsZ0JBQWdCLENBQXBCO0FBQ0EsUUFBSUMsb0JBQUo7O0FBSkMsUUFNT0MsY0FOUCxHQU0wQk4sa0JBTjFCLENBTU9NLGNBTlA7O0FBT0QsUUFBSUEsa0JBQWtCQSxlQUFlQyxRQUFyQyxFQUErQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUM5QywyQkFBMkJELGVBQWVDLFFBQTFDLDhIQUFvRDtBQUFBLFdBQXpDQyxZQUF5Qzs7QUFDbkQsV0FBSUEsYUFBYUMsVUFBYixLQUE0QnhJLE9BQU9JLE1BQXZDLEVBQStDO0FBQzlDZ0ksc0JBQWNHLGFBQWFILFdBQTNCO0FBQ0E7QUFDQTtBQUNEO0FBTjZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPOUM7O0FBRUQsUUFBTUssVUFBVSxFQUFoQjtBQWhCQztBQUFBO0FBQUE7O0FBQUE7QUFpQkQsMkJBQW9CekksTUFBcEIsbUlBQTRCO0FBQUEsVUFBakJFLE1BQWlCO0FBQUEsVUFDbkIwRixJQURtQixHQUNxQjFGLE1BRHJCLENBQ25CMEYsR0FEbUI7QUFBQSxVQUNkOEMsWUFEYyxHQUNxQnhJLE1BRHJCLENBQ2R3SSxXQURjO0FBQUEsVUFDRC9DLEtBREMsR0FDcUJ6RixNQURyQixDQUNEeUYsSUFEQztBQUFBLFVBQ0s4QixZQURMLEdBQ3FCdkgsTUFEckIsQ0FDS3VILFdBREw7OztBQUczQixVQUFJa0IsYUFBYS9DLE9BQU0sQ0FBTixHQUNkbUMsbUJBQW1CYSxjQURMLEdBRWRiLG1CQUFtQmMsUUFGdEI7QUFHQUYsb0JBQ0M7QUFDQ0csZ0JBQVNDLEtBQUtDLEtBRGY7QUFFQ0MsYUFBTUYsS0FBS0csSUFGWjtBQUdDQyxjQUFPSixLQUFLSztBQUhiLFFBSUVyQixtQkFBbUJzQixtQkFKckIsRUFLQ04sS0FBS08sR0FBTCxDQUFTLENBQVQsRUFBWTFELE9BQU1tQyxtQkFBbUJ3QixVQUFyQyxDQUxELElBTUl4QixtQkFBbUJ5QixVQVB4Qjs7QUFVQSxVQUFJQyxTQUFTLENBQWI7QUFDQSxVQUFJQyxTQUFTLENBQWI7QUFDQSxVQUFJM0IsbUJBQW1CNEIsZUFBbkIsSUFBc0NoRSxVQUFTcEksTUFBTTBKLEtBQU4sQ0FBWTJDLElBQS9ELEVBQXFFO0FBQ3BFRixnQkFBUzlELE9BQU04QyxZQUFOLEdBQW9CL0QsWUFBN0I7QUFDQStFLGdCQUFTWCxLQUFLYyxHQUFMLENBQVNoRixXQUFULEVBQXNCNkUsTUFBdEIsQ0FBVDtBQUNBQSxnQkFBU1gsS0FBS08sR0FBTCxDQUFTMUUsV0FBVCxFQUFzQjhFLE1BQXRCLENBQVQ7O0FBRUEsV0FBSTlELFFBQU8sQ0FBWCxFQUFjO0FBQ2I2RCxpQkFBU1YsS0FBS0ssS0FBTCxDQUFXeEQsSUFBWCxJQUFrQjhDLFlBQWxCLEdBQWdDcEUsWUFBekM7QUFDQW1GLGlCQUFTVixLQUFLYyxHQUFMLENBQVNyRixXQUFULEVBQXNCaUYsTUFBdEIsQ0FBVDtBQUNBQSxpQkFBU1YsS0FBS08sR0FBTCxDQUFTL0UsV0FBVCxFQUFzQmtGLE1BQXRCLENBQVQ7QUFDQTtBQUNEOztBQUVELFVBQU1LLGFBQWFuQixhQUFhYyxNQUFiLEdBQXNCQyxNQUF6QztBQUNBeEIsZUFBUzRCLFVBQVQ7QUFDQTNCLHVCQUFpQnNCLFNBQVNDLE1BQTFCOztBQUVBakIsY0FBUWhCLFlBQVIsSUFBdUI7QUFDdEJTLGNBQU80QixVQURlO0FBRXRCQyxtQkFBWXBCLFVBRlU7QUFHdEJxQixhQUFNO0FBQ0xDLGFBQUtSLE1BREE7QUFFTFMsYUFBS1I7QUFGQTtBQUhnQixPQUF2QjtBQVFBO0FBM0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNkRELFdBQU87QUFDTnhCLFlBQU9FLGNBQWVBLGNBQWNELGFBQTdCLEdBQThDRCxLQUQvQztBQUVOaUMseUJBQW9CL0IsY0FBZUEsY0FBY0YsS0FBN0IsR0FBc0MsQ0FGcEQ7QUFHTk87QUFITSxLQUFQO0FBS0E7Ozs7OztBQXZZbUJsTCxNLENBd0NiMEosSyxHQUFrQztBQUN4Q0MsT0FBSyxHQURtQztBQUV4QzBDLFFBQU07QUFGa0MsRTtBQXhDckJyTSxNLENBcURib0QsSyxHQUFrQztBQUN4Q3dGLFVBQVEsR0FEZ0M7QUFFeENLLFNBQU8sR0FGaUM7QUFHeENELFFBQU07QUFIa0MsRTtBQXJEckJoSixNLENBcUVibUUsUSxHQUF1QztBQUM3Q21GLE9BQUssR0FEd0M7QUFFN0NDLGdCQUFjLEdBRitCO0FBRzdDc0QsUUFBTSxHQUh1QztBQUk3Q0MsWUFBVSxHQUptQztBQUs3Q0MsWUFBVTtBQUxtQyxFO21CQXJFMUIvTSxLOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q3JCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUE7Ozs7S0FJcUJGLE87Ozs7Ozs7OztBQWVwQjs7O3VDQXdCZ0M7QUFBQSxtRkFBNUIsRUFBNEI7QUFBQSxRQXBCL0JhLE1Bb0IrQixRQXBCL0JBLE1Bb0IrQjtBQUFBLFFBbkIvQkMsU0FtQitCLFFBbkIvQkEsU0FtQitCO0FBQUEsUUFsQi9Cb00sUUFrQitCLFFBbEIvQkEsUUFrQitCO0FBQUEsUUFqQi9CQyxTQWlCK0IsUUFqQi9CQSxTQWlCK0I7QUFBQSxRQWhCL0JDLFNBZ0IrQixRQWhCL0JBLFNBZ0IrQjtBQUFBLFFBZi9CQyxNQWUrQixRQWYvQkEsTUFlK0I7QUFBQSw0QkFkL0JDLE9BYytCO0FBQUEsUUFkL0JBLE9BYytCLGdDQWRyQixFQWNxQjs7QUFDL0IsUUFBSUQsV0FBV0YsYUFBYUMsU0FBeEIsQ0FBSixFQUF3QztBQUN2QyxXQUFNLElBQUlyTixLQUFKLHFFQUFOO0FBQ0E7O0FBRUQsUUFBSStDLDJCQUF5QixlQUFPd0QsYUFBaEMsZ0JBQXdEekYsTUFBeEQsbUJBQTRFQyxTQUFoRjtBQUNBLFFBQUlvTSxRQUFKLEVBQWNwSyw4QkFBNEJvSyxRQUE1QjtBQUNkLFFBQUlDLFNBQUosRUFBZXJLLCtCQUE2QnFLLFNBQTdCO0FBQ2YsUUFBSUMsU0FBSixFQUFldEssK0JBQTZCc0ssU0FBN0I7QUFDZixRQUFJQyxNQUFKLEVBQVl2Syw0QkFBMEJ1SyxNQUExQjtBQUNaLFFBQUlDLFFBQVFDLElBQVosRUFBa0J6SyxrQ0FBZ0N3SyxRQUFRQyxJQUF4QztBQUNsQixRQUFJRCxRQUFRRSxPQUFaLEVBQXFCMUsscUNBQW1Dd0ssUUFBUUUsT0FBM0M7QUFDckIsUUFBSUYsUUFBUUcsUUFBWixFQUFzQjNLLHNDQUFvQ3dLLFFBQVFHLFFBQTVDO0FBQ3RCLFFBQUlILFFBQVFJLE9BQVosRUFBcUI1SyxxQ0FBbUN3SyxRQUFRSSxPQUEzQzs7QUFFckIsV0FBTyx1QkFBUTtBQUNkckwsYUFBUSxLQURNO0FBRWR1QyxXQUFNLGNBQU00QixJQUZFO0FBR2RsRSxxQ0FBOEJRLFdBSGhCO0FBSWRQLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBSkUsS0FBUixFQUtKNEIsSUFMSSxDQUtDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBTEQsQ0FBUDtBQU1BOztBQUVEOzs7O0FBN0RBOzs7Ozs7Ozs7OzttQ0FnRXVCN0IsTSxFQUFnQjtBQUN0QyxXQUFPLHVCQUFRO0FBQ2R5QixlQUFVLGlCQURJO0FBRWRDLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBRkUsS0FBUixFQUdKNEIsSUFISSxDQUdDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBS2xDLElBQW5CO0FBQUEsS0FIRCxDQUFQO0FBSUE7O0FBRUQ7Ozs7Ozt3Q0FHNEJLLE0sRUFBZ0I7QUFDM0MsV0FBTyx1QkFBUTtBQUNkeUIsZUFBVSxpQ0FESTtBQUVkQyxpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUZFLEtBQVIsRUFHSjRCLElBSEksQ0FHQyxpQkFBYztBQUFBLFNBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDckIsU0FBTWlMLFVBQVVqTCxLQUFLbEMsSUFBTCxDQUFVb0MsR0FBVixDQUFjLFVBQUMrSyxPQUFEO0FBQUEsYUFDN0IsR0FBR0MsTUFBSCxDQUFVRCxPQUFWLEVBQ0VFLElBREYsQ0FDTyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxjQUFVRCxFQUFFVCxNQUFGLEdBQVdVLEVBQUVWLE1BQXZCO0FBQUEsT0FEUCxFQUVFekssR0FGRixDQUVNO0FBQUEsY0FBU25DLE9BQU9DLE1BQVAsQ0FDYixFQURhLEVBRWJxSCxLQUZhLEVBR2IsRUFBRXNGLFFBQVFqRyxPQUFPVyxNQUFNc0YsTUFBTixHQUFlLEdBQXRCLENBQVYsRUFIYSxDQUFUO0FBQUEsT0FGTixDQUQ2QjtBQUFBLE1BQWQsRUFRZCxDQVJjLENBQWhCOztBQVVBLFlBQU9NLE9BQVA7QUFDQSxLQWZNLENBQVA7QUFnQkE7Ozs7OztBQTVGbUIzTixRLENBU2JnTyxhLEdBQWdCO0FBQ3RCQyxXQUFTLFNBRGE7QUFFdEJDLFlBQVUsVUFGWTtBQUd0QkMsd0JBQXNCO0FBSEEsRTttQkFUSG5PLE87Ozs7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOztBQUNBOzs7Ozs7OztBQUVBOzs7O0tBSXFCRyxPOzs7Ozs7OztBQUNwQjs7O21DQUlDVSxNLEVBQ0FLLFMsRUFDQUssUyxFQUNBQyxPLEVBQ3lCO0FBQ3pCLFFBQU1zQixjQUNMLGlCQUFlLG1CQUFTTixHQUFULENBQWEzQixNQUFiLENBQWYsR0FDRSxzQkFERixHQUVFLG9CQUZGLHdCQUdvQkssU0FIcEIscUJBSWdCSyxVQUFVNk0sV0FBVixFQUpoQixtQkFLYzVNLFFBQVE0TSxXQUFSLEVBTGQsaUJBTVksZUFBTy9ILEtBTm5CLElBT0UsbUJBUkg7O0FBVUEsV0FBTyx1QkFBUTtBQUNkaEUsYUFBUSxNQURNO0FBRWR1QyxXQUFNLGNBQU02QixPQUZFO0FBR2RuRSxnQ0FBeUJRLFdBSFg7QUFJZFAsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FKRTtBQUtkNkIsV0FBTTtBQUxRLEtBQVIsRUFNSkQsSUFOSSxDQU1DO0FBQUEsU0FBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBSzJMLFdBQUwsSUFBb0IsRUFBbEM7QUFBQSxLQU5ELENBQVA7QUFPQTs7QUFFRDs7Ozs7O21DQUlDeE4sTSxFQUNBSyxTLEVBQ0FLLFMsRUFDQUMsTyxFQUN5QjtBQUN6QixRQUFNc0IsY0FDTCxpQkFBZSxtQkFBU04sR0FBVCxDQUFhM0IsTUFBYixDQUFmLEdBQ0Usd0JBREYsR0FFRSxvQkFGRix3QkFHb0JLLFNBSHBCLHFCQUlnQkssVUFBVTZNLFdBQVYsRUFKaEIsbUJBS2M1TSxRQUFRNE0sV0FBUixFQUxkLGlCQU1ZLGVBQU8vSCxLQU5uQixJQU9FLG1CQVJIOztBQVVBLFdBQU8sdUJBQVE7QUFDZGhFLGFBQVEsTUFETTtBQUVkdUMsV0FBTSxjQUFNNkIsT0FGRTtBQUdkbkUsZ0NBQXlCUSxXQUhYO0FBSWRQLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiLENBSkU7QUFLZDZCLFdBQU07QUFMUSxLQUFSLEVBTUpELElBTkksQ0FNQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUsyTCxXQUFMLElBQW9CLEVBQWxDO0FBQUEsS0FORCxDQUFQO0FBT0E7O0FBRUQ7Ozs7OztpQ0FJQ3hOLE0sRUFDQUMsUyxFQUNBUyxTLEVBQ0FDLE8sRUFDeUI7QUFDekIsUUFBTXNCLGNBQ0wsZ0JBQWNoQyxTQUFkLG9CQUNnQlMsVUFBVTZNLFdBQVYsRUFEaEIsbUJBRWM1TSxRQUFRNE0sV0FBUixFQUZkLElBR0UsVUFKSDs7QUFNQSxXQUFPLHVCQUFRO0FBQ2QvTCxhQUFRLEtBRE07QUFFZEMsK0JBQXdCUSxXQUZWO0FBR2RQLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsUUFBUSxFQUF0QjtBQUFBLEtBSkQsQ0FBUDtBQUtBOztBQUVEOzs7Ozs7b0NBSUM3QixNLEVBQ0FDLFMsRUFDQVMsUyxFQUNBQyxPLEVBQ3lCO0FBQ3pCLFFBQU1zQixjQUNMLGdCQUFjaEMsU0FBZCxvQkFDZ0JTLFVBQVU2TSxXQUFWLEVBRGhCLG1CQUVjNU0sUUFBUTRNLFdBQVIsRUFGZCxJQUdFLFVBSkg7O0FBTUEsV0FBTyx1QkFBUTtBQUNkL0wsYUFBUSxLQURNO0FBRWRDLCtCQUF3QlEsV0FGVjtBQUdkUCxpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLFFBQVEsRUFBdEI7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7O21DQUlDN0IsTSxFQUNBQyxTLEVBQ0FTLFMsRUFDQUMsTyxFQUN5QjtBQUN6QixRQUFNc0IsY0FDTCxnQkFBY2hDLFNBQWQsb0JBQ2dCUyxVQUFVNk0sV0FBVixFQURoQixtQkFFYzVNLFFBQVE0TSxXQUFSLEVBRmQsSUFHRSxVQUpIOztBQU1BLFdBQU8sdUJBQVE7QUFDZC9MLGFBQVEsS0FETTtBQUVkQywrQkFBd0JRLFdBRlY7QUFHZFAsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxRQUFRLEVBQXRCO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7Ozt1Q0FJQzdCLE0sRUFDQUMsUyxFQUNBZ0IsTyxFQUNrQjtBQUNsQixXQUFPLHVCQUFRO0FBQ2RPLGFBQVEsS0FETTtBQUVkQyxnQ0FBeUJ4QixTQUF6QixTQUFzQ2dCLE9BRnhCO0FBR2RTLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBSzRMLEdBQW5CO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7OzsyQ0FHK0I7QUFDOUIsV0FBTyx1QkFBUTtBQUNkak0sYUFBUSxLQURNO0FBRWRDLGVBQVU7QUFGSSxLQUFSLEVBR0pHLElBSEksQ0FHQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLFFBQVEsRUFBdEI7QUFBQSxLQUhELENBQVA7QUFJQTs7Ozs7O21CQWxKbUJ2QyxPOzs7Ozs7Ozs7Ozs7Ozs7QUNSckI7Ozs7QUFDQTs7Ozs7Ozs7QUFPQTs7Ozs7S0FLcUJGLFU7QUFvQnBCLHNCQUFZTyxJQUFaLEVBQTBCO0FBQUE7O0FBQ3pCQyxVQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsSUFBcEI7QUFDQTs7QUFFRDs7Ozs7Ozs7OztBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXlFQTs7OzhCQUcyQjtBQUMxQixXQUFPUCxXQUFXc08sUUFBWCxDQUFvQixLQUFLQyxNQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBZ0NBOzs7O0FBSUE7OztnQ0FHYUMsVyxFQUFxQjtBQUNqQyxRQUFJek4sVUFBVStCLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0IsWUFBTzlDLFdBQVd5TyxZQUFYLENBQ04sS0FBSzNGLFlBREMsRUFFTjBGLFdBRk0sRUFHTnpOLFVBQVUsQ0FBVixDQUhNLEVBSU5BLFVBQVUsQ0FBVixDQUpNLENBQVA7QUFNQTtBQUNELFdBQU9mLFdBQVd5TyxZQUFYLENBQXdCLEtBQUszRixZQUE3QixFQUEyQzBGLFdBQTNDLEVBQXdEek4sVUFBVSxDQUFWLENBQXhELENBQVA7QUFDQTs7QUFFRDs7OztBQUlBOzs7Ozs7OztBQW5IQTs7OytCQUdtQndOLE0sRUFBeUU7QUFDM0YsUUFBTUcsVUFBVSxPQUFPSCxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCLENBQUNBLE1BQUQsQ0FBN0IsR0FBd0NBLE1BQXhEOztBQUVBLFdBQU8sdUJBQVE7QUFDZG5NLGFBQVEsS0FETTtBQUVkQyx5Q0FBa0NxTSxRQUFRQyxJQUFSLENBQWEsR0FBYixDQUZwQjtBQUdkck0saUJBQVksbUJBQVM2RixNQUFUO0FBSEUsS0FBUixFQUlKM0YsSUFKSSxDQUlDLGdCQUFjO0FBQUEsU0FBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUNyQkEsWUFBT0EsS0FBS0UsR0FBTCxDQUFTO0FBQUEsYUFBYyxJQUFJM0MsVUFBSixDQUFlb0ksVUFBZixDQUFkO0FBQUEsTUFBVCxDQUFQO0FBQ0EsWUFBTyxPQUFPbUcsTUFBUCxLQUFrQixRQUFsQixHQUE2QjlMLEtBQUssQ0FBTCxDQUE3QixHQUF1Q0EsSUFBOUM7QUFDQSxLQVBNLENBQVA7QUFRQTs7QUFFRDs7Ozs7OzJCQUdlc0csRSxFQUFzRTtBQUFBLFFBQTFENkYsbUJBQTBELHVFQUEzQixJQUEyQjs7QUFDcEYsV0FBTyx1QkFBUTtBQUNkeE0sYUFBUSxLQURNO0FBRWRDLGlDQUEwQjBHLEVBQTFCLElBQStCNkYsc0JBQXNCLFlBQXRCLEdBQXFDLEVBQXBFLENBRmM7QUFHZHRNLGlCQUFZLG1CQUFTNkYsTUFBVDtBQUhFLEtBQVIsRUFJSjNGLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWMsSUFBSXpDLFVBQUosQ0FBZXlDLElBQWYsQ0FBZDtBQUFBLEtBSkQsQ0FBUDtBQUtBOztBQUVEOzs7Ozs7NEJBR3VFO0FBQUEsUUFBekRvTSxXQUF5RCx1RUFBbEMsSUFBa0M7O0FBQ3RFLFdBQU8sdUJBQVE7QUFDZHpNLGFBQVEsS0FETTtBQUVkQyw2Q0FBc0N3TSxXQUZ4QjtBQUdkdk0saUJBQVksbUJBQVM2RixNQUFUO0FBSEUsS0FBUixFQUlKM0YsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBS0UsR0FBTCxDQUFTO0FBQUEsYUFBYyxJQUFJM0MsVUFBSixDQUFlb0ksVUFBZixDQUFkO0FBQUEsTUFBVCxDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7O0FBRUQ7Ozs7OzswQkFHYzBHLFEsRUFBMEU7QUFDdkYsUUFBSWpNLGNBQWMsR0FBbEI7QUFDQSxRQUFJaU0sU0FBU1AsTUFBYixFQUFxQjFMLDJCQUF5QmlNLFNBQVNQLE1BQWxDO0FBQ3JCLFFBQUlPLFNBQVN4QixJQUFiLEVBQW1CeksseUJBQXVCaU0sU0FBU3hCLElBQWhDOztBQUVuQixXQUFPLHVCQUFRO0FBQ2RsTCxhQUFRLEtBRE07QUFFZEMsZ0NBQXlCUSxXQUZYO0FBR2RQLGlCQUFZLG1CQUFTNkYsTUFBVDtBQUhFLEtBQVIsRUFJSjNGLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLEtBQUtFLEdBQUwsQ0FBUztBQUFBLGFBQWMsSUFBSTNDLFVBQUosQ0FBZW9JLFVBQWYsQ0FBZDtBQUFBLE1BQVQsQ0FBZDtBQUFBLEtBSkQsQ0FBUDtBQUtBOzs7NEJBYUFtRyxNLEVBRTZDO0FBQzdDLFFBQU1HLFVBQXlCLENBQUNoRSxNQUFNQyxPQUFOLENBQWM0RCxNQUFkLElBQXdCQSxNQUF4QixHQUFpQyxDQUFDQSxNQUFELENBQWxDLEVBQzdCNUwsR0FENkIsQ0FDekI7QUFBQSxZQUFPb00sZUFBZS9PLFVBQWYsR0FBNEIrTyxJQUFJUixNQUFoQyxHQUF5Q1EsR0FBaEQ7QUFBQSxLQUR5QixDQUEvQjs7QUFHQSxXQUFPLHVCQUFRO0FBQ2QzTSxhQUFRLEtBRE07QUFFZEMsb0NBQTZCcU0sUUFBUUMsSUFBUixDQUFhLEdBQWIsQ0FGZjtBQUdkck0saUJBQVksbUJBQVM2RixNQUFULEVBSEU7QUFJZHpELGtCQUFhO0FBQ1pJLGNBQVE7QUFESTtBQUpDLEtBQVIsRUFPSnRDLElBUEksQ0FPQyxpQkFBYztBQUFBLFNBQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFDckIsU0FBSXVNLE1BQU0sRUFBVjtBQUNBdk0sWUFBT0EsS0FBS3dNLEtBQUwsQ0FBVyxHQUFYLEVBQWdCaE0sS0FBaEIsQ0FBc0IsRUFBdEIsQ0FBUDtBQUZxQjtBQUFBO0FBQUE7O0FBQUE7QUFHckIsMkJBQXVCUixJQUF2Qiw4SEFBNkI7QUFBQSxXQUFsQnlNLFFBQWtCOztBQUM1QixXQUFNQyxjQUFjRCxTQUFTRCxLQUFULENBQWUsR0FBZixDQUFwQjtBQUNBRCxXQUFJRyxZQUFZLENBQVosQ0FBSixJQUFzQjtBQUNyQkMsYUFBS2pJLE9BQU9nSSxZQUFZLENBQVosQ0FBUCxDQURnQjtBQUVyQkUsYUFBS2xJLE9BQU9nSSxZQUFZLENBQVosQ0FBUDtBQUZnQixRQUF0QjtBQUlBO0FBVG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXJCLFNBQUksQ0FBQ3pFLE1BQU1DLE9BQU4sQ0FBYzRELE1BQWQsQ0FBTCxFQUE0QlMsTUFBTUEsSUFBSU4sUUFBUSxDQUFSLENBQUosQ0FBTjtBQUM1QixZQUFPTSxHQUFQO0FBQ0EsS0FuQk0sQ0FBUDtBQW9CQTs7O2dDQTRCbUJsRyxZLEVBQXNCMEYsVyxFQUE2QztBQUN0RixRQUFJYyxtQkFBSjtBQUNBLFFBQUl2TyxVQUFVK0IsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMzQixTQUFNeU0sWUFBWXhPLFVBQVUsQ0FBVixFQUFhb04sV0FBYixHQUEyQnFCLE9BQTNCLENBQW1DLFNBQW5DLEVBQThDLEVBQTlDLENBQWxCO0FBQ0EsU0FBTUMsVUFBVTFPLFVBQVUsQ0FBVixFQUFhb04sV0FBYixHQUEyQnFCLE9BQTNCLENBQW1DLFNBQW5DLEVBQThDLEVBQTlDLENBQWhCO0FBQ0FGLGlDQUEwQkMsU0FBMUIsaUJBQStDRSxPQUEvQztBQUNBLEtBSkQsTUFJTztBQUNOSCxtQ0FBNEJ2TyxVQUFVLENBQVYsQ0FBNUI7QUFDQTs7QUFFRCxXQUFPLHVCQUFRO0FBQ2RxQixhQUFRLEtBRE07QUFFZEMsdUNBQWdDeUcsWUFBaEMscUJBQTREMEYsV0FBNUQsU0FBMkVjLFVBRjdEO0FBR2RoTixpQkFBWSxtQkFBUzZGLE1BQVQ7QUFIRSxLQUFSLEVBSUozRixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLbEMsSUFBTCxDQUFVME8sS0FBVixDQUFnQixHQUFoQixDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozs7OztBQS9MbUJqUCxXLENBZ0NiMFAsYyxHQUE2QztBQUNuREMsWUFBVSxHQUR5QztBQUVuREMsVUFBUSxHQUYyQztBQUduRHBMLFVBQVE7QUFIMkMsRTtBQWhDaEN4RSxXLENBaURiNlAsa0IsR0FBaUQ7QUFDdkRDLE9BQUssQ0FEa0Q7QUFFdkRDLFlBQVUsQ0FGNkM7QUFHdkRDLFlBQVUsQ0FINkM7QUFJdkRDLGFBQVcsQ0FKNEM7QUFLdkRDLFFBQU0sQ0FMaUQ7QUFNdkRDLFFBQU07QUFOaUQsRTttQkFqRHBDblEsVTs7Ozs7Ozs7Ozs7Ozs7O0FDYnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7S0FLTUcsSTtBQXNCTCxnQkFBWUksSUFBWixFQUEwQjtBQUFBOztBQUN6QkMsVUFBT0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLElBQXBCO0FBQ0EsUUFBSzZQLFFBQUwsR0FBZ0I3UCxLQUFLOFAsU0FBTCxHQUFpQixHQUFqQixHQUF1QjlQLEtBQUsrUCxRQUE1QztBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7aUNBR3VDO0FBQ3RDLFdBQU8sa0JBQVFDLGdCQUFSLENBQXlCLEtBQUszUCxNQUE5QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FBNEJBOzs7O0FBSUE7Ozs7OytCQUtZNFAsRyxFQUFjO0FBQ3pCLFdBQU9yUSxLQUFLc1EsV0FBTCxDQUFpQixLQUFLN1AsTUFBdEIsRUFBOEI0UCxHQUE5QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBY0E7Ozs4QkFHV0EsRyxFQUFhRSxLLEVBQThCO0FBQ3JELFdBQU92USxLQUFLd1EsVUFBTCxDQUFnQixLQUFLL1AsTUFBckIsRUFBNkI0UCxHQUE3QixFQUFrQ0UsS0FBbEMsQ0FBUDtBQUNBOzs7OztBQVVEOzs7Z0NBR2FGLEcsRUFBNEI7QUFDeEMsV0FBT3JRLEtBQUt5USxZQUFMLENBQWtCLEtBQUtoUSxNQUF2QixFQUErQjRQLEdBQS9CLENBQVA7QUFDQTs7QUFFRDs7Ozs7OytCQUc2QjtBQUM1QixXQUFPLHVCQUFRO0FBQ2RwTyxhQUFRLEtBRE07QUFFZEMsMkJBQW9CLEtBQUt6QixNQUF6QixZQUZjO0FBR2QwQixpQkFBWSxtQkFBU0MsR0FBVCxDQUFhLEtBQUszQixNQUFsQjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLFlBQWNBLElBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7QUFFRDs7Ozs7Ozs7QUFhQTs7OzRCQUd3QjtBQUN2QixXQUFPdEMsS0FBSzBRLE1BQUwsQ0FBWSxLQUFLalEsTUFBakIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7OztBQVdBOzs7eUJBR3FCO0FBQ3BCLFdBQU9ULEtBQUsyUSxXQUFMLENBQWlCLEtBQUtsUSxNQUF0QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBNEhBOzs7MEJBR09MLEksRUFBNkI7QUFDbkMsV0FBT0osS0FBSzRRLE1BQUwsQ0FBWXZRLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QjtBQUMxQ0ssYUFBUSxLQUFLQSxNQUQ2QjtBQUUxQ29RLFlBQU96USxLQUFLeVEsS0FBTCxJQUFjLEtBQUtDO0FBRmdCLEtBQXhCLENBQVosQ0FBUDtBQUlBOztBQUVEOzs7Ozs7OztBQXNCQTs7O2tDQUdlQyxJLEVBQVl4USxJLEVBQTZCO0FBQ3ZELFdBQU9QLEtBQUtnUixjQUFMLENBQW9CLEtBQUt2USxNQUF6QixFQUFpQ3NRLElBQWpDLEVBQXVDeFEsSUFBdkMsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7b0NBR3lDO0FBQ3hDLFdBQU9QLEtBQUtpUixjQUFMLENBQW9CLEtBQUt4USxNQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7O0FBV0E7OztpQ0FHY3lRLFMsRUFBb0M7QUFDakQsV0FBT2xSLEtBQUttUixhQUFMLENBQW1CLEtBQUsxUSxNQUF4QixFQUFnQ3lRLFNBQWhDLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFZQTs7O29DQUdpQkUsTSxFQUErQjtBQUMvQyxXQUFPcFIsS0FBS3FSLGdCQUFMLENBQXNCLEtBQUs1USxNQUEzQixFQUFtQzJRLE1BQW5DLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7QUFoV0E7OzsrQkFHbUIzUSxNLEVBQXlDO0FBQzNELFdBQU8sa0JBQVEyUCxnQkFBUixDQUF5QjNQLE1BQXpCLENBQVA7QUFDQTs7OytCQW9Ca0JBLE0sRUFBZ0I0UCxHLEVBQWM7QUFDaEQsUUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDVCxZQUFPLHVCQUFRO0FBQ2RwTyxjQUFRLEtBRE07QUFFZEMsNEJBQW9CekIsTUFBcEIsY0FGYztBQUdkMEIsa0JBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxNQUFSLEVBSUo0QixJQUpJLENBSUMsaUJBQWM7QUFBQSxVQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQ3JCLFVBQU1nUCxnQkFBZ0IsRUFBdEI7QUFEcUI7QUFBQTtBQUFBOztBQUFBO0FBRXJCLDRCQUFzQmhQLElBQXRCLDhIQUE0QjtBQUFBLFlBQWpCaVAsT0FBaUI7O0FBQzNCRCxzQkFBY0MsUUFBUWxCLEdBQXRCLElBQTZCa0IsUUFBUWhCLEtBQXJDO0FBQ0E7QUFKb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLckIsYUFBT2UsYUFBUDtBQUNBLE1BVk0sQ0FBUDtBQVdBOztBQUVELFdBQU8sdUJBQVE7QUFDZHJQLGFBQVEsS0FETTtBQUVkQywyQkFBb0J6QixNQUFwQixrQkFBdUM0UCxHQUZ6QjtBQUdkbE8saUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxLQUFLaU8sS0FBbkI7QUFBQSxLQUpELENBQVA7QUFLQTs7OzhCQWtCaUI5UCxNLEVBQWdCNFAsRyxFQUFhRSxLLEVBQThCO0FBQzVFLFdBQU8sdUJBQVE7QUFDZHRPLGFBQVEsTUFETTtBQUVkQywyQkFBb0J6QixNQUFwQixjQUZjO0FBR2QwQixpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYixDQUhFO0FBSWQ2QixXQUFNO0FBQ0wrTixjQURLLEVBQ0FFO0FBREE7QUFKUSxLQUFSLEVBT0psTyxJQVBJLENBT0M7QUFBQSxZQUFNb0IsU0FBTjtBQUFBLEtBUEQsQ0FBUDtBQVFBOzs7Z0NBU21CaEQsTSxFQUFnQjRQLEcsRUFBNkI7QUFDaEUsV0FBTyx1QkFBUTtBQUNkcE8sYUFBUSxRQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLGtCQUF1QzRQLEdBRnpCO0FBR2RsTyxpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FKRCxDQUFQO0FBS0E7OzswQkF1QmFoRCxNLEVBQStCO0FBQzVDLFdBQU8sdUJBQVE7QUFDZHdCLGFBQVEsUUFETTtBQUVkQyxrQ0FBMkIsbUJBQVNFLEdBQVQsQ0FBYTNCLE1BQWIsQ0FGYjtBQUdkMEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUMsWUFBTTtBQUNiLHdCQUFTbVAsTUFBVCxDQUFnQi9RLE1BQWhCO0FBQ0EsS0FOTSxDQUFQO0FBT0E7OzsrQkFZa0JBLE0sRUFBK0I7QUFDakQsV0FBTyx1QkFBUTtBQUNkd0IsYUFBUSxLQURNO0FBRWRDLDJCQUFvQnpCLE1BRk47QUFHZDBCLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBYyxJQUFJdEMsSUFBSixDQUFTc0MsSUFBVCxDQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozt5QkFZWW1QLFEsRUFBa0JDLFEsRUFBaUM7QUFDL0QsV0FBTyx1QkFBUTtBQUNkelAsYUFBUSxNQURNO0FBRWRDLGVBQVUsZUFGSTtBQUdkSSxXQUFNO0FBQ0xtUCx3QkFESztBQUVMQyx3QkFGSztBQUdMM0wsaUJBQVcsZUFBT0EsU0FIYjtBQUlMQyxrQkFBWSxlQUFPQSxVQUpkO0FBS0wyTCxrQkFBWSxPQUxQO0FBTUxDLGNBQVEsU0FOSDtBQU9MQyxpQkFBVyxTQVBOO0FBUUxDLGNBQVEsU0FSSDtBQVNMQyxpQkFBVztBQVROO0FBSFEsS0FBUixFQWNKMVAsSUFkSSxDQWNDLGlCQUFjO0FBQUEsU0FBWEMsSUFBVyxTQUFYQSxJQUFXOztBQUNyQix3QkFBUzBQLElBQVQsQ0FBYzFQLEtBQUs3QixNQUFuQixFQUEyQjZCLEtBQUtILFVBQWhDO0FBQ0EsWUFBT25DLEtBQUsyUSxXQUFMLENBQWlCck8sS0FBSzdCLE1BQXRCLENBQVA7QUFDQSxLQWpCTSxDQUFQO0FBa0JBOztBQUVEOzs7Ozs7dUNBRzJCZ1IsUSxFQUFvQztBQUM5RCxXQUFPLHVCQUFRO0FBQ2R4UCxhQUFRLEtBRE07QUFFZEMsb0NBQTZCdVA7QUFGZixLQUFSLEVBR0pwUCxJQUhJLENBSU47QUFBQSxZQUFNLEtBQU47QUFBQSxLQUpNLEVBS04sVUFBQzRQLFNBQUQ7QUFBQSxZQUFlQSxVQUFVN00sVUFBVixLQUF5QixHQUF6QixHQUNaLElBRFksR0FFWkosUUFBUUUsTUFBUixDQUFlK00sU0FBZixDQUZIO0FBQUEsS0FMTSxDQUFQO0FBU0E7O0FBRUQ7Ozs7Ozs7O2lDQWtCNkQ7QUFBQSxRQVo1RFIsUUFZNEQsU0FaNURBLFFBWTREO0FBQUEsUUFYNURDLFFBVzRELFNBWDVEQSxRQVc0RDtBQUFBLFFBVjVEeEIsU0FVNEQsU0FWNURBLFNBVTREO0FBQUEsUUFUNURDLFFBUzRELFNBVDVEQSxRQVM0RDtBQUFBLFFBUjVEVSxLQVE0RCxTQVI1REEsS0FRNEQ7QUFBQSxRQVA1RGMsVUFPNEQsU0FQNURBLFVBTzREO0FBQUEsbUNBTjVEeEwsWUFNNEQ7QUFBQSxRQU41REEsWUFNNEQsc0NBTjdDLGVBQU9BLFlBTXNDO0FBQUEsUUFMNUQrTCxXQUs0RCxTQUw1REEsV0FLNEQ7QUFBQSxRQUo1REMsVUFJNEQsU0FKNURBLFVBSTREO0FBQUEsUUFINURDLFNBRzRELFNBSDVEQSxTQUc0RDtBQUFBLFFBRjVEQyxTQUU0RCxTQUY1REEsU0FFNEQ7QUFBQSxRQUQ1REMsT0FDNEQsU0FENURBLE9BQzREO0FBQUEsUUFBMURDLGtCQUEwRCx1RUFBNUIsSUFBNEI7O0FBQzVELFdBQU8sdUJBQVE7QUFDZHRRLGFBQVEsTUFETTtBQUVkQyxlQUFVLGVBRkk7QUFHZEksV0FBTTtBQUNMbVAsd0JBREs7QUFFTEMsd0JBRks7QUFHTHhCLDBCQUhLO0FBSUxDLHdCQUpLO0FBS0xxQyxxQkFBZTNCLEtBTFY7QUFNTGMsNEJBTks7QUFPTDFMLGFBQU8sZUFBT0EsS0FQVDtBQVFMRSxnQ0FSSztBQVNMK0wsOEJBVEs7QUFVTEMsNEJBVks7QUFXTEMsMEJBWEs7QUFZTEMsMEJBWks7QUFhTEM7QUFiSztBQUhRLEtBQVIsRUFrQkpqUSxJQWxCSSxDQWtCQyxZQUFNO0FBQ2IsU0FBSWtRLGtCQUFKLEVBQXdCO0FBQ3ZCLGFBQU92UyxLQUFLeVMsS0FBTCxDQUFXaEIsUUFBWCxFQUFxQkMsUUFBckIsQ0FBUDtBQUNBO0FBQ0QsS0F0Qk0sQ0FBUDtBQXVCQTs7QUFFRDs7Ozs7O2lDQWtCa0I7QUFBQSxRQWRqQmpSLE1BY2lCLFNBZGpCQSxNQWNpQjtBQUFBLFFBYmpCaVMsWUFhaUIsU0FiakJBLFlBYWlCO0FBQUEsUUFaakJDLFlBWWlCLFNBWmpCQSxZQVlpQjtBQUFBLFFBWGpCQyxJQVdpQixTQVhqQkEsSUFXaUI7QUFBQSxRQVZqQkMsU0FVaUIsU0FWakJBLFNBVWlCO0FBQUEsUUFUakJoQyxLQVNpQixTQVRqQkEsS0FTaUI7QUFBQSxRQVJqQlgsU0FRaUIsU0FSakJBLFNBUWlCO0FBQUEsUUFQakJDLFFBT2lCLFNBUGpCQSxRQU9pQjtBQUFBLFFBTmpCd0IsVUFNaUIsU0FOakJBLFVBTWlCO0FBQUEsUUFMakJtQixTQUtpQixTQUxqQkEsU0FLaUI7QUFBQSxRQUpqQkMsU0FJaUIsU0FKakJBLFNBSWlCO0FBQUEsUUFIakJDLEtBR2lCLFNBSGpCQSxLQUdpQjtBQUFBLFFBRmpCQyxhQUVpQixTQUZqQkEsYUFFaUI7QUFBQSxRQURqQkMsYUFDaUIsU0FEakJBLGFBQ2lCOztBQUNqQixXQUFPLHVCQUFRO0FBQ2RqUixhQUFRLEtBRE07QUFFZEMsMkJBQW9CekIsTUFGTjtBQUdkMEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsV0FBTTtBQUNMb1EsZ0NBREs7QUFFTEMsZ0NBRks7QUFHTEMsZ0JBSEs7QUFJTEMsMEJBSks7QUFLTEwscUJBQWUzQixLQUxWO0FBTUxYLDBCQU5LO0FBT0xDLHdCQVBLO0FBUUx3Qiw0QkFSSztBQVNMbUIsMEJBVEs7QUFVTEMsMEJBVks7QUFXTEksbUJBQWFILEtBWFI7QUFZTEMsa0NBWks7QUFhTEM7QUFiSztBQUpRLEtBQVIsRUFtQko3USxJQW5CSSxDQW1CQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FuQkQsQ0FBUDtBQW9CQTs7O2tDQWVxQmhELE0sRUFBZ0JzUSxJLEVBQVl4USxJLEVBQTZCO0FBQzlFO0FBQ0E7QUFDQSxRQUFNK0IsT0FBTyxJQUFJOFEsUUFBSixFQUFiO0FBQ0E5USxTQUFLK1EsTUFBTCxDQUFZLE9BQVosRUFBcUI1UyxNQUFyQjtBQUNBNkIsU0FBSytRLE1BQUwsQ0FBWSxjQUFaLEVBQTRCOVMsSUFBNUI7QUFDQStCLFNBQUsrUSxNQUFMLENBQVksZUFBWixFQUE2QnRDLElBQTdCOztBQUVBLFdBQU8sdUJBQVE7QUFDZDlPLGFBQVEsTUFETTtBQUVkQyxlQUFVLFlBRkk7QUFHZEMsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkOEQsa0JBQWE7QUFDWixzQkFBZ0I7QUFESixNQUpDO0FBT2RqQztBQVBjLEtBQVIsRUFRSkQsSUFSSSxDQVFDO0FBQUEsWUFBTW9CLFNBQU47QUFBQSxLQVJELENBQVA7QUFTQTs7O2tDQW1CcUJoRCxNLEVBQXdDO0FBQzdELFdBQU8sdUJBQVE7QUFDZHdCLGFBQVEsS0FETTtBQUVkQywyQkFBb0J6QixNQUFwQixrQkFGYztBQUdkMEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWI7QUFIRSxLQUFSLEVBSUo0QixJQUpJLENBSUM7QUFBQSxTQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FKRCxDQUFQO0FBS0E7OztpQ0FZb0I3QixNLEVBQWdCeVEsUyxFQUFvQztBQUN4RSxXQUFPLHVCQUFRO0FBQ2RqUCxhQUFRLE1BRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsa0JBRmM7QUFHZDBCLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFdBQU0sRUFBRTRPLG9CQUFGO0FBSlEsS0FBUixFQUtKN08sSUFMSSxDQUtDO0FBQUEsU0FBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsWUFBY0EsSUFBZDtBQUFBLEtBTEQsQ0FBUDtBQU1BOzs7b0NBWXVCN0IsTSxFQUFnQjJRLE0sRUFBK0I7QUFDdEUsV0FBTyx1QkFBUTtBQUNkblAsYUFBUSxRQURNO0FBRWRDLDJCQUFvQnpCLE1BQXBCLHNCQUEyQzJRLE1BRjdCO0FBR2RqUCxpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFlBQU1vQixTQUFOO0FBQUEsS0FKRCxDQUFQO0FBS0E7Ozs7OztBQXBhSXpELEssQ0FxQ0VpRSxRLEdBQXVDO0FBQzdDQyxXQUFTLENBRG9DO0FBRTdDb1AsWUFBVSxDQUZtQztBQUc3Q3pHLFlBQVUsQ0FIbUM7QUFJN0MwRyxXQUFTLENBSm9DO0FBSzdDbFAsVUFBUTtBQUxxQyxFO0FBckN6Q3JFLEssQ0FxREV3VCxjLEdBQTJDO0FBQ2pEQyxZQUFVLFlBRHVDO0FBRWpEQyxvQkFBa0Isa0JBRitCO0FBR2pEQyxrQ0FBZ0M7QUFIaUIsRTttQkFrWHBDM1QsSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNlZmJhMjI0YzUzZDNhNTA2OWQzIiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEVOVklST05NRU5UUyxcblx0SE9TVFMsXG5cblx0QWNjb3VudCxcblx0Q29uZmlnLFxuXHRFcnJvcixcblx0RnVuZGluZyxcblx0SW5zdHJ1bWVudCxcblx0T3JkZXIsXG5cdFJlcG9ydHMsXG5cdFVzZXIsXG5cdFNlc3Npb25zLFxuXG5cdHNldHVwLFxuXHRyZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyUGFyZW50RGV0YWlscyB9IGZyb20gXCIuL09yZGVyXCI7XG5cbmV4cG9ydCB0eXBlIENvbW1pc3Npb25TY2hlZHVsZSA9IHtcblx0YmFzZVJhdGU6IG51bWJlcixcblx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdGZyYWN0aW9uYWxSYXRlOiBudW1iZXIsXG5cdHNoYXJlQW1vdW50Um91bmRpbmc6IG51bWJlcixcblx0c3Vic2NyaXB0aW9uOiBib29sZWFuLFxuXHRiYXNrZXRTY2hlZHVsZToge1xuXHRcdGJhc2VTaGFyZXM6IG51bWJlcixcblx0XHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdFx0c2NoZWR1bGU6IEFycmF5PHtcblx0XHRcdGJhc2tldFNpemU6IG51bWJlcixcblx0XHRcdGJhc2tldFByaWNlOiBudW1iZXIsXG5cdFx0fT4sXG5cdH0sXG5cdHBhc3NUaHJvdWdoRmVlczogYm9vbGVhbixcbn07XG5cbi8qKlxuICogQGNsYXNzIEFjY291bnRcbiAqIEBkZXNjcmlwdGlvbiBBbiBhY2NvdW50IGJlbG9uZ2luZyB0byBhIFVzZXIuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2FjY291bnRzX2dldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0YWNjb3VudFR5cGU6IHN0cmluZztcblx0Y3VycmVuY3lJRDogc3RyaW5nO1xuXHRpYklEOiBzdHJpbmc7XG5cdG1hcmdpbjogc3RyaW5nO1xuXHRuaWNrbmFtZTogc3RyaW5nO1xuXHRvcGVuZWRXaGVuOiBzdHJpbmc7XG5cdHBhdHRlcm5EYXlUcmFkZXM6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHRyYWRpbmdUeXBlOiBzdHJpbmc7XG5cdGFjY291bnRNZ210VHlwZTogc3RyaW5nO1xuXHRjb21taXNzaW9uU2NoZWR1bGU6IENvbW1pc3Npb25TY2hlZHVsZTtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIEJMT1RURVJfVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVNIXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPUkRFUlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFRSQU5TQUNUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUE9TSVRJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTExcblx0ICovXG5cdHN0YXRpYyBCTE9UVEVSX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106ID9zdHJpbmd9ID0ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOX05PX05FV19UUkFERVNcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQUkFDVElDRVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTElWRVxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRCbG90dGVyKHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRCbG90dGVyKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJsb3R0ZXIodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nLCB0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRTdW1tYXJ5L2Bcblx0XHRcdFx0KyBgJHthY2NvdW50SUR9JHt0eXBlID8gXCIvXCIgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmIChib2R5Lm9yZGVycykge1xuXHRcdFx0XHRib2R5Lm9yZGVycyA9IGJvZHkub3JkZXJzLm1hcCgob3JkZXIpID0+IG5ldyBPcmRlcihvcmRlcikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHR5cGUgPyBib2R5W3R5cGVdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0Z2V0UGVyZm9ybWFuY2UoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRQZXJmb3JtYW5jZSh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIC4uLmFyZ3VtZW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdHN0YXRpYyBnZXRQZXJmb3JtYW5jZSh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSBhcmd1bWVudHNbM107XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7YWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnBlcmZvcm1hbmNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHBsYWNlT3JkZXIodHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpOiBQcm9taXNlPHN0cmluZyB8IE9iamVjdD4ge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHM6IE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0RnVuZGluZ01ldGhvZHMob3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRvcHRpb25zLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdG9wdGlvbnMuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMob3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZW5lcmF0ZURvd25sb2FkVVJMKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgZmlsZUtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh1c2VySUQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0Vcblx0XHRcdFx0PyBcIi9zaWdudXBzL3ByYWN0aWNlXCJcblx0XHRcdFx0OiBcIi9zaWdudXBzL2xpdmVcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGNoYW5nZVN1YnNjcmlwdGlvbihtZXRob2Q6IHN0cmluZywge1xuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50SUQsXG5cdFx0cGxhbklELFxuXHRcdHBheW1lbnRJRCxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHBsYW5JRDogc3RyaW5nLFxuXHRcdHBheW1lbnRJRDogc3RyaW5nLFxuXHR9KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2QsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHMvJHthY2NvdW50SUR9L3N1YnNjcmlwdGlvbnNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiAhbWV0aG9kLnN0YXJ0c1dpdGgoXCJQXCIpID8gdW5kZWZpbmVkIDoge1xuXHRcdFx0XHRwbGFuSUQsXG5cdFx0XHRcdFtwYXltZW50SUQuc3RhcnRzV2l0aChcImNhcmRcIikgPyBcImNhcmRJRFwiIDogXCJiYW5rQWNjb3VudElEXCJdOiBwYXltZW50SUQsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiR0VUXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBhZGRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJQT1NUXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGRhdGVTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJQVVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGNhbmNlbFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIkRFTEVURVwiLCBvcHRpb25zKTtcblx0fVxuXG5cdGV4dHJhY3RJRHMob3B0aW9ucz86IE9iamVjdCk6IE9iamVjdCB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0U3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmFkZFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQudXBkYXRlU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWxTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jYW5jZWxTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuLyoqXG4gKiBAZnVuY3Rpb24gcmVxdWVzdFxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGx5LCBpdCBpcyB1bm5lY2Vzc2FyeSB0byB1c2UgdGhpcyBmdW5jdGlvbiBhbmQgdGhpcyBpcyBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuIENhbGwgcmVxdWVzdCgpIGlmIHlvdSBuZWVkIHRvIG1ha2UgYSBjdXN0b20gQVBJIGNhbGwgdGhhdCBpcyBub3QgY292ZXJlZCBieSBhbm90aGVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZW5kcG9pbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlc3Npb25LZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdGlvbnMuYWRkbEhlYWRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhvc3QgLSBPbmUgb2YgQ29uZmlnLkhPU1RTXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48e2JvZHk6IHN0cmluZywgc3RhdHVzQ29kZTogbnVtYmVyLCBoZWFkZXJzOiBPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fT59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuXHRtZXRob2QgPSBcIkdFVFwiLFxuXHRlbmRwb2ludCxcblx0c2Vzc2lvbktleSxcblx0Ym9keSxcblx0YWRkbEhlYWRlcnMgPSB7fSxcblx0aG9zdCA9IEhPU1RTLkFQSSxcbn06IHtcblx0bWV0aG9kPzogc3RyaW5nLFxuXHRlbmRwb2ludDogc3RyaW5nLFxuXHRzZXNzaW9uS2V5Pzogc3RyaW5nLFxuXHRib2R5PzogYW55LFxuXHRhZGRsSGVhZGVycz86IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9LFxuXHRob3N0Pzogc3RyaW5nLFxufSkge1xuXHRjb25zdCBoZWFkZXJzOiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHR9O1xuXHRpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcblx0XHRoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5cdH1cblx0aWYgKHNlc3Npb25LZXkpIHtcblx0XHRoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuXHR9XG5cdGZvciAoY29uc3QgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG5cdFx0aGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcblx0fVxuXG5cdGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG5cdGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Q29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuXHRcdFx0aWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG5cdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IHJlc0JvZHksXG5cdFx0XHRcdFx0c3RhdHVzQ29kZSxcblx0XHRcdFx0XHRoZWFkZXJzOiByZXNIZWFkZXJzLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBlcnJvck1lc3NhZ2U7XG5cdFx0XHRcdGlmIChyZXNCb2R5KSB7XG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGVycm9yID0gc3RhdHVzQ29kZSA9PT0gNDAxXG5cdFx0XHRcdFx0PyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKVxuXHRcdFx0XHRcdDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsIi8qKlxuICogQG5hbWVzcGFjZSBDb25maWdcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcblx0ZW52OiBudWxsLFxuXHRodHRwSW1wbDogbnVsbCxcblx0YXBwVHlwZUlEOiBudWxsLFxuXHRhcHBWZXJzaW9uOiBudWxsLFxuXHR3bHBJRDogbnVsbCxcblx0YXBwc1BhcnRuZXJJRDogbnVsbCxcblx0cmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBIT1NUU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQSVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQUFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRVBPUlRTXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuXHRBUEk6IFwiYXBpXCIsXG5cdEFQUFM6IFwiYXBwc1wiLFxuXHRSRVBPUlRTOiBcInJlcG9ydHNcIixcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgRU5WSVJPTk1FTlRTXG4gKiBAcHJvcGVydHkge29iamVjdH0gVUFUXG4gKiBAcHJvcGVydHkge29iamVjdH0gUFJPRFxuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG5cdFVBVDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcblx0fSxcblx0UFJPRDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcblx0fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG5cdGVudixcblx0aHR0cEltcGwsXG5cdGFwcFR5cGVJRCxcblx0YXBwVmVyc2lvbixcblx0d2xwSUQgPSBcIkRXXCIsXG5cdGFwcHNQYXJ0bmVySUQsXG5cdHJlZmVycmFsQ29kZSxcbn0pIHtcblx0Q29uZmlnLmVudiA9IGVudjtcblx0Q29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG5cdENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG5cdENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcblx0Q29uZmlnLndscElEID0gd2xwSUQ7XG5cdENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcblx0Q29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdERyaXZlV2VhbHRoRXJyb3IsXG5cdERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG5pbXBvcnQgdHlwZSB7IENvbW1pc3Npb25TY2hlZHVsZSB9IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCB0eXBlIEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuXG5jb25zdCBTRUNfRkVFX1JBVEUgPSAwLjAwMDAyMzE7XG5jb25zdCBTRUNfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBTRUNfRkVFX01BWCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbmNvbnN0IFRBRl9GRUVfUkFURSA9IDAuMDAwMTE5O1xuY29uc3QgVEFGX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgVEFGX0ZFRV9NQVggPSA1Ljk1O1xuXG5leHBvcnQgdHlwZSBPcmRlclBhcmVudERldGFpbHMgPSB7XG5cdGFjY291bnRJRDogc3RyaW5nLFxuXHRhY2NvdW50Tm86IHN0cmluZyxcblx0dXNlcklEOiBzdHJpbmcsXG5cdGFjY291bnRUeXBlOiBzdHJpbmcsXG59O1xuZXhwb3J0IHR5cGUgTmV3T3JkZXIgPSB7XG5cdGluc3RydW1lbnQ6IEluc3RydW1lbnQgfCBzdHJpbmcsXG5cdHNpZGU6IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcblx0cHJpY2U/OiBudW1iZXIsXG59O1xuZXhwb3J0IHR5cGUgTmV3Q2FydE9yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRxdHk/OiBudW1iZXIsXG5cdGFtb3VudENhc2g/OiBudW1iZXIsXG5cdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdGNvbW1lbnQ/OiBzdHJpbmcsXG5cdGF1dG9TdG9wPzogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgT3JkZXJcbiAqIEBkZXNjcmlwdGlvbiBBbiBvcmRlciBjcmVhdGVkIGZvciBhbiBBY2NvdW50LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXRfbWFya2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyIHtcblx0b3JkZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdGN1bVF0eTogbnVtYmVyO1xuXHRhY2NvdW50Tm86IHN0cmluZztcblx0Y29tbWVudDogc3RyaW5nO1xuXHRjb21taXNzaW9uOiBudW1iZXI7XG5cdGNyZWF0ZWRCeUlEOiBzdHJpbmc7XG5cdGNyZWF0ZWRXaGVuOiBzdHJpbmc7XG5cdGV4ZWN1dGVkV2hlbjogc3RyaW5nO1xuXHRncm9zc1RyYWRlQW10OiBudW1iZXI7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRsZWF2ZXNRdHk6IHN0cmluZztcblx0b3JkZXJObzogc3RyaW5nO1xuXHRvcmRlclF0eTogbnVtYmVyO1xuXHRzaWRlOiBzdHJpbmc7XG5cdGF1dG9TdG9wOiA/bnVtYmVyO1xuXHRzeW1ib2w6IHN0cmluZztcblx0cmVqZWN0aW9uUmVhc29uOiA/c3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHlwZTogbnVtYmVyO1xuXHRwcmljZTogP251bWJlcjtcblx0ZWZmZWN0aXZlUHJpY2U6ID9udW1iZXI7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLnJlamVjdGlvblJlYXNvbiA9IGRhdGEub3JkUmVqUmVhc29uO1xuXHRcdHRoaXMuc3RhdHVzID0gZGF0YS5vcmRTdGF0dXM7XG5cdFx0dGhpcy50eXBlID0gZGF0YS5vcmRUeXBlIHx8IGRhdGEub3JkZXJUeXBlO1xuXHRcdHRoaXMucHJpY2UgPSBkYXRhLnN0b3BQcmljZSB8fCBkYXRhLmxpbWl0UHJpY2UgfHwgZGF0YS5wcmljZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTSURFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBCVVlcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFNFTExcblx0ICovXG5cdHN0YXRpYyBTSURFUzoge1tzaWRlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEJVWTogXCJCXCIsXG5cdFx0U0VMTDogXCJTXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRZUEVTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE1BUktFVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTElNSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFNUT1Bcblx0ICovXG5cdHN0YXRpYyBUWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdE1BUktFVDogXCIxXCIsXG5cdFx0TElNSVQ6IFwiMlwiLFxuXHRcdFNUT1A6IFwiM1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBORVdcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBBUlRJQUxfRklMTFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gRklMTFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0FOQ0VMRURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFJFSkVDVEVEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdE5FVzogXCIwXCIsXG5cdFx0UEFSVElBTF9GSUxMOiBcIjFcIixcblx0XHRGSUxMOiBcIjJcIixcblx0XHRDQU5DRUxFRDogXCI0XCIsXG5cdFx0UkVKRUNURUQ6IFwiOFwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGNhbmNlbCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gT3JkZXIuY2FuY2VsKHRoaXMub3JkZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGNhbmNlbChvcmRlcklEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5SUQob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTxPcmRlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycyB9KSA9PiB7XG5cdFx0XHRpZiAoYm9keS5vcmRSZWpSZWFzb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXG5cdFx0XHRcdFx0bmV3IERyaXZlV2VhbHRoRXJyb3IoYm9keS5vcmRSZWpSZWFzb24sIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpLFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBPcmRlcihib2R5KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIElmIHdhaXRGb3JGaWxsIGlzIHRydWUsIGFuIE9yZGVyIHdpbGwgYmUgcmV0dXJuZWQuIE90aGVyd2lzZSwgYW4gb3JkZXJJRCB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZShcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0e1xuXHRcdFx0YWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0dXNlcklELFxuXHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0fTogT3JkZXJQYXJlbnREZXRhaWxzLFxuXHRcdHtcblx0XHRcdG9yZGVyOiB7XG5cdFx0XHRcdGluc3RydW1lbnQsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdHF0eSxcblx0XHRcdFx0YW1vdW50Q2FzaCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlLFxuXHRcdFx0fSxcblx0XHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRcdGZpbGxSZXRyeUludGVydmFsID0gMTAwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXI6IE5ld09yZGVyLFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHN0cmluZyB8IE9yZGVyPiB7XG5cdFx0aWYgKGFtb3VudENhc2ggJiYgcXR5KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwicXR5XFxcIiBhbmQgXFxcImFtb3VudENhc2hcXFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXCIpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQpIHtcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMjtcblxuXHRcdFx0aWYgKCFwcmljZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFxcXCJwcmljZS5cXFwiXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXV0b1N0b3ApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcImF1dG9TdG9wXFxcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5IHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogYW1vdW50Q2FzaCB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGJvZHkub3JkZXJJRDtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQoYm9keS5vcmRlcklEKS50aGVuKG9yZGVyID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGlzRmlsbGVkID0gb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVcgJiZcblx0XHRcdFx0XHRcdFx0b3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTEw7XG5cblx0XHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDAgfHwgaXNGaWxsZWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUob3JkZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdGlmIChlcnJvci5ib2R5LmNvZGUgPT09IDQwNCAmJiByZXRyaWVzID4gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRJbmZvXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIE9iamVjdD4+fSBBbiBvYmplY3Qgd2lsbCBiZSByZXNvbHZlZCB3aXRoIGVhY2gga2V5IHNldCB0byBhIHJlZmVyZW5jZUlEIHBhc3NlZCB3aXRoIGFuIG9yZGVyLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZUNhcnQoXG5cdFx0e1xuXHRcdFx0YWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0dXNlcklELFxuXHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0fTogT3JkZXJQYXJlbnREZXRhaWxzLFxuXHRcdHtcblx0XHRcdG9yZGVycyxcblx0XHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRcdGZpbGxSZXRyeUludGVydmFsID0gNTAwLFxuXHRcdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0XHR9OiB7XG5cdFx0XHRvcmRlcnM6IEFycmF5PE5ld0NhcnRPcmRlcj4sXG5cdFx0XHR3YWl0Rm9yRmlsbD86IGJvb2xlYW4sXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbD86IG51bWJlcixcblx0XHRcdGZpbGxNYXhSZXRyaWVzPzogbnVtYmVyLFxuXHRcdH0sXG5cdCk6IFByb21pc2U8e1tyZWZlcmVuY2VJRDogc3RyaW5nXTogT2JqZWN0fT4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG9yZGVycy5tYXAob3JkZXIgPT4gKHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBvcmRlci5pbnN0cnVtZW50Lmluc3RydW1lbnRJRFxuXHRcdFx0XHRcdHx8IG9yZGVyLmluc3RydW1lbnQuaWQgfHwgb3JkZXIuaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IE9yZGVyLlRZUEVTLk1BUktFVCxcblx0XHRcdFx0c2lkZTogT3JkZXIuU0lERVMuQlVZLFxuXHRcdFx0XHRvcmRlclF0eTogb3JkZXIucXR5ID8gb3JkZXIucXR5IDogdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBvcmRlci5hbW91bnRDYXNoID8gb3JkZXIuYW1vdW50Q2FzaCA6IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudDogb3JkZXIuY29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3A6IG9yZGVyLmF1dG9TdG9wLFxuXHRcdFx0fSkpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRsZXQgb3JkZXJSZXN1bHRzID0gYm9keTtcblx0XHRcdGNvbnN0IG9yZGVyc01hcCA9IG9yZGVyUmVzdWx0cy5yZWR1Y2UoXG5cdFx0XHRcdChhY2MsIG5leHQsIGlkeCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgYWNjLCB7XG5cdFx0XHRcdFx0W29yZGVyc1tpZHhdLnJlZmVyZW5jZUlEXTogbmV4dCxcblx0XHRcdFx0fSksXG5cdFx0XHRcdHt9LFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIG9yZGVyc01hcDtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdFx0b3JkZXJSZXN1bHRzID0gb3JkZXJSZXN1bHRzLm1hcCgob3JkZXIsIGlkeCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgb3JkZXIsIHtcblx0XHRcdFx0XHRyZWZlcmVuY2VJRDogb3JkZXJzW2lkeF0ucmVmZXJlbmNlSUQsXG5cdFx0XHRcdH0pKTtcblx0XHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCkgcmV0dXJuIHJlc29sdmUob3JkZXJSZXN1bHRzKTtcblx0XHRcdFx0XHRyZXRyaWVzIC09IDE7XG5cblx0XHRcdFx0XHRQcm9taXNlLmFsbChcblx0XHRcdFx0XHRcdG9yZGVyUmVzdWx0cy5tYXAob3JkZXIgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKG9yZGVyLm9yZGVySUQsIHVzZXJJRCwgKGVycm9yLCBzdGF0dXNEZXRhaWxzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVycm9yKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyc01hcFtvcmRlci5yZWZlcmVuY2VJRF0gPSBzdGF0dXNEZXRhaWxzO1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KSksXG5cdFx0XHRcdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdGxldCBzaG91bGRSZXRyeSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCByZWZlcmVuY2UgaW4gb3JkZXJzTWFwKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRoaXNTdGF0dXMgPSBvcmRlcnNNYXBbcmVmZXJlbmNlXS5zdGF0dXM7XG5cdFx0XHRcdFx0XHRcdGlmICghdGhpc1N0YXR1c1xuXHRcdFx0XHRcdFx0XHRcdHx8IHRoaXNTdGF0dXMgPT09IE9yZGVyLlNUQVRVU0VTLk5FV1xuXHRcdFx0XHRcdFx0XHRcdHx8IHRoaXNTdGF0dXMgPT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTFxuXHRcdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0XHRzaG91bGRSZXRyeSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChzaG91bGRSZXRyeSkge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShvcmRlcnNNYXApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZXN0aW1hdGVDb21taXNzaW9uKFxuXHRcdG9yZGVyczogQXJyYXk8e1xuXHRcdFx0c2lkZTogc3RyaW5nLFxuXHRcdFx0cXR5OiBudW1iZXIsXG5cdFx0XHRtYXJrZXRQcmljZTogbnVtYmVyLFxuXHRcdFx0cmVmZXJlbmNlSUQ6IHN0cmluZyxcblx0XHR9Pixcblx0XHRjb21taXNzaW9uU2NoZWR1bGU6IENvbW1pc3Npb25TY2hlZHVsZSxcblx0KToge1xuXHRcdHRvdGFsOiBudW1iZXIsXG5cdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBudW1iZXIsXG5cdFx0YnlPcmRlcjoge1tyZWZlcmVuY2VJRDogc3RyaW5nXToge1xuXHRcdFx0dG90YWw6IG51bWJlcixcblx0XHRcdGNvbW1pc3Npb246IG51bWJlcixcblx0XHRcdGZlZXM6IHtcblx0XHRcdFx0c2VjOiBudW1iZXIsXG5cdFx0XHRcdHRhZjogbnVtYmVyLFxuXHRcdFx0fSxcblx0XHR9fVxuXHR9IHtcblx0XHRvcmRlcnMgPSBBcnJheS5pc0FycmF5KG9yZGVycykgPyBvcmRlcnMgOiBbb3JkZXJzXTtcblx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdGxldCB0b3RhbEZlZXNPbmx5ID0gMDtcblx0XHRsZXQgYmFza2V0UHJpY2U7XG5cblx0XHRjb25zdCB7IGJhc2tldFNjaGVkdWxlIH0gPSBjb21taXNzaW9uU2NoZWR1bGU7XG5cdFx0aWYgKGJhc2tldFNjaGVkdWxlICYmIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRmb3IgKGNvbnN0IHNjaGVkdWxlSXRlbSBvZiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0XHRpZiAoc2NoZWR1bGVJdGVtLmJhc2tldFNpemUgPT09IG9yZGVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHRiYXNrZXRQcmljZSA9IHNjaGVkdWxlSXRlbS5iYXNrZXRQcmljZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGJ5T3JkZXIgPSB7fTtcblx0XHRmb3IgKGNvbnN0IG9yZGVyIG9mIG9yZGVycykge1xuXHRcdFx0Y29uc3QgeyBxdHksIG1hcmtldFByaWNlLCBzaWRlLCByZWZlcmVuY2VJRCB9ID0gb3JkZXI7XG5cblx0XHRcdGxldCBvcmRlclByaWNlID0gcXR5IDwgMVxuXHRcdFx0XHQ/IGNvbW1pc3Npb25TY2hlZHVsZS5mcmFjdGlvbmFsUmF0ZVxuXHRcdFx0XHQ6IGNvbW1pc3Npb25TY2hlZHVsZS5iYXNlUmF0ZTtcblx0XHRcdG9yZGVyUHJpY2UgKz0gKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0TkVBUkVTVDogTWF0aC5yb3VuZCxcblx0XHRcdFx0XHRDRUlMOiBNYXRoLmNlaWwsXG5cdFx0XHRcdFx0RkxPT1I6IE1hdGguZmxvb3IsXG5cdFx0XHRcdH1bY29tbWlzc2lvblNjaGVkdWxlLnNoYXJlQW1vdW50Um91bmRpbmddKFxuXHRcdFx0XHRcdE1hdGgubWF4KDAsIHF0eSAtIGNvbW1pc3Npb25TY2hlZHVsZS5iYXNlU2hhcmVzKSxcblx0XHRcdFx0KSAqIGNvbW1pc3Npb25TY2hlZHVsZS5leGNlc3NSYXRlXG5cdFx0XHQpO1xuXG5cdFx0XHRsZXQgc2VjRmVlID0gMDtcblx0XHRcdGxldCB0YWZGZWUgPSAwO1xuXHRcdFx0aWYgKGNvbW1pc3Npb25TY2hlZHVsZS5wYXNzVGhyb3VnaEZlZXMgJiYgc2lkZSA9PT0gT3JkZXIuU0lERVMuU0VMTCkge1xuXHRcdFx0XHR0YWZGZWUgPSBxdHkgKiBtYXJrZXRQcmljZSAqIFRBRl9GRUVfUkFURTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5taW4oVEFGX0ZFRV9NQVgsIHRhZkZlZSk7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWF4KFRBRl9GRUVfTUlOLCB0YWZGZWUpO1xuXG5cdFx0XHRcdGlmIChxdHkgPj0gMSkge1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGguZmxvb3IocXR5KSAqIG1hcmtldFByaWNlICogU0VDX0ZFRV9SQVRFO1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGgubWluKFNFQ19GRUVfTUFYLCBzZWNGZWUpO1xuXHRcdFx0XHRcdHNlY0ZlZSA9IE1hdGgubWF4KFNFQ19GRUVfTUlOLCBzZWNGZWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG9yZGVyVG90YWwgPSBvcmRlclByaWNlICsgc2VjRmVlICsgdGFmRmVlO1xuXHRcdFx0dG90YWwgKz0gb3JkZXJUb3RhbDtcblx0XHRcdHRvdGFsRmVlc09ubHkgKz0gc2VjRmVlICsgdGFmRmVlO1xuXG5cdFx0XHRieU9yZGVyW3JlZmVyZW5jZUlEXSA9IHtcblx0XHRcdFx0dG90YWw6IG9yZGVyVG90YWwsXG5cdFx0XHRcdGNvbW1pc3Npb246IG9yZGVyUHJpY2UsXG5cdFx0XHRcdGZlZXM6IHtcblx0XHRcdFx0XHRzZWM6IHNlY0ZlZSxcblx0XHRcdFx0XHR0YWY6IHRhZkZlZSxcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvdGFsOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSArIHRvdGFsRmVlc09ubHkpIDogdG90YWwsXG5cdFx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlIC0gdG90YWwpIDogMCxcblx0XHRcdGJ5T3JkZXIsXG5cdFx0fTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09yZGVyLmpzIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbi8qKlxuICogQGNsYXNzIEZ1bmRpbmdcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgY2xhc3MgZm9yIHJldHJpZXZpbmcgZnVuZGluZyBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuZGluZyB7XG5cdC8qKlxuXHQgKiBAbmFtZSBBTExPV0VEX1RZUEVTXG5cdCAqIEBtZW1iZXJvZiBGdW5kaW5nXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gV0lUSERSQVdcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IERFUE9TSVRfQU5EX1dJVEhEUkFXXG5cdCAqL1xuXHRzdGF0aWMgQUxMT1dFRF9UWVBFUyA9IHtcblx0XHRERVBPU0lUOiBcIkRFUE9TSVRcIixcblx0XHRXSVRIRFJBVzogXCJXSVRIRFJBV1wiLFxuXHRcdERFUE9TSVRfQU5EX1dJVEhEUkFXOiBcIkRFUE9TSVRfQU5EX1dJVEhEUkFXXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgZ2V0RnVuZGluZ01ldGhvZHMoe1xuXHRcdHVzZXJJRCxcblx0XHRhY2NvdW50SUQsXG5cdFx0bGFuZ3VhZ2UsXG5cdFx0bWluQW1vdW50LFxuXHRcdG1heEFtb3VudCxcblx0XHRhbW91bnQsXG5cdFx0ZmlsdGVycyA9IHt9LFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0bGFuZ3VhZ2U/OiBzdHJpbmcsXG5cdFx0bWluQW1vdW50PzogbnVtYmVyLFxuXHRcdG1heEFtb3VudD86IG51bWJlcixcblx0XHRhbW91bnQ/OiBudW1iZXIsXG5cdFx0ZmlsdGVycz86IHtcblx0XHRcdG5hbWU6IHN0cmluZyxcblx0XHRcdGN1cnJlbmN5OiBzdHJpbmcsXG5cdFx0XHRjb3VudHJ5OiBzdHJpbmcsXG5cdFx0XHRhbGxvd2VkOiBzdHJpbmcsXG5cdFx0fSxcblx0fSA9IHt9KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0aWYgKGFtb3VudCAmJiAobWluQW1vdW50IHx8IG1heEFtb3VudCkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihgXCJhbW91bnRcIiBpcyBub3QgY29tcGF0aWJsZSB3aXRoIFwibWluQW1vdW50XCIgb3IgXCJtYXhBbW91bnQuXCJgKTtcblx0XHR9XG5cblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBgcGFydG5lcj0ke0NvbmZpZy5hcHBzUGFydG5lcklEfSZ1c2VySUQ9JHt1c2VySUR9JmFjY291bnRJRD0ke2FjY291bnRJRH1gO1xuXHRcdGlmIChsYW5ndWFnZSkgcXVlcnlTdHJpbmcgKz0gYCZsYW5ndWFnZT0ke2xhbmd1YWdlfWA7XG5cdFx0aWYgKG1pbkFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtaW5BbW91bnQ9JHttaW5BbW91bnR9YDtcblx0XHRpZiAobWF4QW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1heEFtb3VudD0ke21heEFtb3VudH1gO1xuXHRcdGlmIChhbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmYW1vdW50PSR7YW1vdW50fWA7XG5cdFx0aWYgKGZpbHRlcnMubmFtZSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbbmFtZV09JHtmaWx0ZXJzLm5hbWV9YDtcblx0XHRpZiAoZmlsdGVycy5jb3VudHJ5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjb3VudHJ5XT0ke2ZpbHRlcnMuY291bnRyeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmN1cnJlbmN5KSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltjdXJyZW5jeV09JHtmaWx0ZXJzLmN1cnJlbmN5fWA7XG5cdFx0aWYgKGZpbHRlcnMuYWxsb3dlZCkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbYWxsb3dlZF09JHtmaWx0ZXJzLmFsbG93ZWR9YDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGhvc3Q6IEhPU1RTLkFQUFMsXG5cdFx0XHRlbmRwb2ludDogYC9mdW5kaW5nL21ldGhvZHM/JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRQYXN0RGVwb3NpdHModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9zdGF0dXNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LmRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb25QbGFucyh1c2VySUQ6IHN0cmluZykge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdGVuZHBvaW50OiBcIi9mdW5kaW5nL2FjaC9zdWJzY3JpcHRpb24tcGxhbnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRjb25zdCBwcmljaW5nID0gYm9keS5kYXRhLm1hcCgocHJpY2luZykgPT5cblx0XHRcdFx0W10uY29uY2F0KHByaWNpbmcpXG5cdFx0XHRcdFx0LnNvcnQoKHgsIHkpID0+IHguYW1vdW50IC0geS5hbW91bnQpXG5cdFx0XHRcdFx0Lm1hcChwcmljZSA9PiBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdFx0e30sXG5cdFx0XHRcdFx0XHRwcmljZSxcblx0XHRcdFx0XHRcdHsgYW1vdW50OiBOdW1iZXIocHJpY2UuYW1vdW50IC8gMTAwKSB9LFxuXHRcdFx0XHRcdCkpLFxuXHRcdFx0KVswXTtcblxuXHRcdFx0cmV0dXJuIHByaWNpbmc7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBSZXBvcnRzXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGFjY291bnQgcmVwb3J0cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0cyB7XG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9RmluVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRQbGFjZWRPcmRlcnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1PcmRlclRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3RhdGVtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wMlwiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VHJhZGVDb25maXJtcyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wMVwiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VGF4RG9jdW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAzXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZW5lcmF0ZURvd25sb2FkVVJMKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGZpbGVLZXk6IHN0cmluZyxcblx0KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnVybCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1cHBvcnRlZENvdW50cmllcygpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvY291bnRyaWVzXCIsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgdHlwZSBRdW90ZSA9IHtcblx0YmlkOiBudW1iZXIsXG5cdGFzazogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgSW5zdHJ1bWVudFxuICogQGRlc2NyaXB0aW9uIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9pbnN0cnVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRleGNoYW5nZUlEOiBzdHJpbmc7XG5cdGluc3RydW1lbnRUeXBlSUQ6IHN0cmluZztcblx0b3JkZXJTaXplTWF4OiBudW1iZXI7XG5cdG9yZGVyU2l6ZU1pbjogbnVtYmVyO1xuXHRvcmRlclNpemVTdGVwOiBudW1iZXI7XG5cdHJhdGVBc2s6IG51bWJlcjtcblx0cmF0ZUJpZDogbnVtYmVyO1xuXHRyYXRlUHJlY2lzaW9uOiBudW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHR0cmFkZVN0YXR1czogc3RyaW5nO1xuXHR1cmxJbWFnZTogc3RyaW5nO1xuXHR1cmxJbnZlc3Rvcjogc3RyaW5nO1xuXHRjaGFpa2luUGdyOiBzdHJpbmc7XG5cdHByaW9yQ2xvc2U6IG51bWJlcjtcblx0bWFya2V0U3RhdGU6IG51bWJlcjtcblx0ZnVuZGFtZW50YWxEYXRhTW9kZWw6IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRSQURFX1NUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gSU5BQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgVFJBREVfU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdElOQUNUSVZFOiBcIjBcIixcblx0XHRBQ1RJVkU6IFwiMVwiLFxuXHRcdENMT1NFRDogXCIyXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIENIQVJUX0NPTVBSRVNTSU9OU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IERBWVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzFcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV81XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMzBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IEhPVVJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFdFRUtcblx0ICovXG5cdHN0YXRpYyBDSEFSVF9DT01QUkVTU0lPTlM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdERBWTogMCxcblx0XHRNSU5VVEVfMTogMSxcblx0XHRNSU5VVEVfNTogNCxcblx0XHRNSU5VVEVfMzA6IDgsXG5cdFx0SE9VUjogOSxcblx0XHRXRUVLOiAxMCxcblx0fTtcblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbDogQXJyYXk8c3RyaW5nPiB8IHN0cmluZyk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4gfCBJbnN0cnVtZW50PiB7XG5cdFx0Y29uc3Qgc3ltYm9scyA9IHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBbc3ltYm9sXSA6IHN5bWJvbDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Ym9keSA9IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBib2R5WzBdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChpZDogc3RyaW5nLCBpbmNsdWRlRnVuZGFtZW50YWxzOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8SW5zdHJ1bWVudD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gXCI/b3B0aW9ucz1GXCIgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IEluc3RydW1lbnQoYm9keSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXM/OiBzdHJpbmcgPSBcIi0xXCIpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2VhcmNoKGNyaXRlcmlhOiB7IG5hbWU/OiBzdHJpbmcsIHN5bWJvbD86IHN0cmluZyB9KTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuXHRcdGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG5cdFx0aWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFF1b3RlKCk6IFByb21pc2U8UXVvdGU+IHtcblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFF1b3RlKFxuXHRcdHN5bWJvbDogc3RyaW5nIHwgSW5zdHJ1bWVudCB8IEFycmF5PHN0cmluZyB8IEluc3RydW1lbnQ+LFxuXHQvLyAkRmxvd0ZpeE1lXG5cdCk6IFByb21pc2U8UXVvdGUgfCB7W3N5bWJvbDogc3RyaW5nXTogUXVvdGV9PiB7XG5cdFx0Y29uc3Qgc3ltYm9sczogQXJyYXk8c3RyaW5nPiA9IChBcnJheS5pc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXSlcblx0XHRcdC5tYXAoc3ltID0+IHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXHRcdFx0Ym9keSA9IGJvZHkuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcblx0XHRcdGZvciAoY29uc3QgcmF3UXVvdGUgb2YgYm9keSkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0b2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcblx0XHRcdFx0XHRiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG5cdFx0XHRcdFx0YXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIG9iaiA9IG9ialtzeW1ib2xzWzBdXTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRnZXRDaGFydERhdGEoY29tcHJlc3Npb246IG51bWJlcikge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEoXG5cdFx0XHRcdHRoaXMuaW5zdHJ1bWVudElELFxuXHRcdFx0XHRjb21wcmVzc2lvbixcblx0XHRcdFx0YXJndW1lbnRzWzFdLFxuXHRcdFx0XHRhcmd1bWVudHNbMl0sXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uLCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0c3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQ6IHN0cmluZywgY29tcHJlc3Npb246IG51bWJlcik6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuXHRcdGxldCB0aW1lUGFyYW1zO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVFbmQgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YS5zcGxpdChcInxcIikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbi8qKlxuICogQGNsYXNzIFVzZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHVzZXIgb2JqZWN0LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0LXVzZXJ9XG4gKi9cbmNsYXNzIFVzZXIge1xuXHRjb3VudHJ5SUQ6IHN0cmluZztcblx0ZW1haWxBZGRyZXNzOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYW5ndWFnZUlEOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdHBob25lTnVtYmVyOiBzdHJpbmc7XG5cdHJlZmVycmFsQ29kZTogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0d2xwSUQ6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHVzQ2l0aXplbjogYm9vbGVhbjtcblx0bGFzdExvZ2luV2hlbjogc3RyaW5nO1xuXHRjaXRpemVuc2hpcDogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTE6IHN0cmluZztcblx0YWRkcmVzc0xpbmUyOiBzdHJpbmc7XG5cdGNpdHk6IHN0cmluZztcblx0c3RhdGVQcm92aW5jZTogc3RyaW5nO1xuXHR6aXBQb3N0YWxDb2RlOiBzdHJpbmc7XG5cdGZ1bGxOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IEFQUFJPVkVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRUpFQ1RFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVWT0tFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQ0xPU0VEXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdEFQUFJPVkVEOiAyLFxuXHRcdFJFSkVDVEVEOiAzLFxuXHRcdFJFVk9LRUQ6IDQsXG5cdFx0Q0xPU0VEOiA1LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBET0NVTUVOVF9UWVBFU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBST09GX09GX0FERFJFU1Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBET0NVTUVOVF9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRBY2NvdW50cyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRBY2NvdW50cygpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZSBieSBrZXlcblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRDogc3RyaW5nLCBrZXk/OiBzdHJpbmcpIHtcblx0XHRpZiAoIWtleSkge1xuXHRcdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHNldHRpbmcgb2YgYm9keSkge1xuXHRcdFx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVkRGF0YTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0Z2V0U2V0dGluZ3Moa2V5Pzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0a2V5LCB2YWx1ZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0c2V0U2V0dGluZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHVuc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcpIDogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1bnNldFNldHRpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51bnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy91c2VyLXN0YXR1c31cblx0ICovXG5cdGdldFN0YXR1cygpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ291dCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh1c2VySUQpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFNlc3Npb25zLnJlbW92ZSh1c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLmxvZ291dCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgVXNlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXQoKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0QnlVc2VySUQodGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG5cdFx0XHRcdGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuXHRcdFx0XHRsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG5cdFx0XHRcdG9zVHlwZTogXCJ1bmtub3duXCIsXG5cdFx0XHRcdG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG5cdFx0XHRcdHNjclJlczogXCJ1bmtub3duXCIsXG5cdFx0XHRcdGlwQWRkcmVzczogXCJ1bmtub3duXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRTZXNzaW9ucy5zYXZlKGJvZHkudXNlcklELCBib2R5LnNlc3Npb25LZXkpO1xuXHRcdFx0cmV0dXJuIFVzZXIuZ2V0QnlVc2VySUQoYm9keS51c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG5cdFx0fSkudGhlbihcblx0XHRcdCgpID0+IGZhbHNlLFxuXHRcdFx0KHJlamVjdGlvbikgPT4gcmVqZWN0aW9uLnN0YXR1c0NvZGUgPT09IDQwNFxuXHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0OiBQcm9taXNlLnJlamVjdChyZWplY3Rpb24pLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtib29sZWFufSBsb2dpbkF1dG9tYXRpY2FsbHkgLSBJZiBmYWxzZSwgbm8gc2Vzc2lvbiB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8dW5kZWZpbmVkIHwgVXNlcj59IElmIGxvZ2luQXV0b21hdGljYWxseSBpcyB0cnVlLCBhIFVzZXIgd2lsbCBiZSByZXNvbHZlZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoe1xuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRlbWFpbCxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG5cdFx0dXRtQ2FtcGFpZ24sXG5cdFx0dXRtQ29udGVudCxcblx0XHR1dG1NZWRpdW0sXG5cdFx0dXRtU291cmNlLFxuXHRcdHV0bVRlcm0sXG5cdH0sIGxvZ2luQXV0b21hdGljYWxseTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQgfCBVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0d2xwSUQ6IENvbmZpZy53bHBJRCxcblx0XHRcdFx0cmVmZXJyYWxDb2RlLFxuXHRcdFx0XHR1dG1DYW1wYWlnbixcblx0XHRcdFx0dXRtQ29udGVudCxcblx0XHRcdFx0dXRtTWVkaXVtLFxuXHRcdFx0XHR1dG1Tb3VyY2UsXG5cdFx0XHRcdHV0bVRlcm0sXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuXHRcdFx0XHRyZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZSxcblx0fSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGUsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwZGF0ZShkYXRhOiBPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGVtYWlsOiBkYXRhLmVtYWlsIHx8IHRoaXMuZW1haWxBZGRyZXNzLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklEOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyBmb3IgZXNsaW50XG5cdFx0LyogZ2xvYmFsIEZvcm1EYXRhICovXG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2RvY3VtZW50c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwbG9hZERvY3VtZW50KGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldENyZWRpdENhcmRzKCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBVc2VyLmdldENyZWRpdENhcmRzKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q3JlZGl0Q2FyZHModXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZENyZWRpdENhcmQoY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBVc2VyLmFkZENyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRUb2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZENyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHsgY2FyZFRva2VuIH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cmVtb3ZlQ3JlZGl0Q2FyZChjYXJkSUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnJlbW92ZUNyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHJlbW92ZUNyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkcy8ke2NhcmRJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=