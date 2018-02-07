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
							if (retries <= 0) return resolve(ordersMap);
							retries -= 1;
	
							Promise.all(orderResults.map(function (order) {
								return new Promise(function (resolve, reject) {
									Order.getByID(order.orderID).then(function (orderCurrent) {
										ordersMap[order.referenceID] = orderCurrent;
										resolve();
									}, function (error) {
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
	
					var pricing = [].concat(body.data).sort(function (x, y) {
						return x.amount - y.amount;
					}).map(function (price) {
						return Object.assign({}, price, { amount: Number(price.amount / 100) });
					});
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiYjNhMjAxNDZiNmRmMDY3YTVkNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJjb2RlIiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJyZWR1Y2UiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJvcmRlckN1cnJlbnQiLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJwcmljaW5nIiwiY29uY2F0Iiwic29ydCIsIngiLCJ5IiwiQUxMT1dFRF9UWVBFUyIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiY29tcHJlc3Npb24iLCJnZXRDaGFydERhdGEiLCJzeW1ib2xzIiwiam9pbiIsImluY2x1ZGVGdW5kYW1lbnRhbHMiLCJ0cmFkZVN0YXR1cyIsImNyaXRlcmlhIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwidGltZVBhcmFtcyIsImRhdGVTdGFydCIsInJlcGxhY2UiLCJkYXRlRW5kIiwiVFJBREVfU1RBVFVTRVMiLCJJTkFDVElWRSIsIkFDVElWRSIsIkNIQVJUX0NPTVBSRVNTSU9OUyIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXRMaXN0Rm9yVXNlcklEIiwia2V5IiwiZ2V0U2V0dGluZ3MiLCJ2YWx1ZSIsInNldFNldHRpbmciLCJ1bnNldFNldHRpbmciLCJsb2dvdXQiLCJnZXRCeVVzZXJJRCIsInVwZGF0ZSIsImVtYWlsIiwiZW1haWxBZGRyZXNzIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiZ2V0Q3JlZGl0Q2FyZHMiLCJjYXJkVG9rZW4iLCJhZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwicmVtb3ZlQ3JlZGl0Q2FyZCIsImZvcm1hdHRlZERhdGEiLCJzZXR0aW5nIiwicmVtb3ZlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImxhbmd1YWdlSUQiLCJvc1R5cGUiLCJvc1ZlcnNpb24iLCJzY3JSZXMiLCJpcEFkZHJlc3MiLCJzYXZlIiwicmVqZWN0aW9uIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImxvZ2luQXV0b21hdGljYWxseSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJjb3VudHJ5SUQiLCJwaG9uZUhvbWUiLCJwaG9uZVdvcmsiLCJwaG9uZSIsInN0YXRlUHJvdmluY2UiLCJ6aXBQb3N0YWxDb2RlIiwicGhvbmVNb2JpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBhc3N3b3JkUmVzZXRJRCIsIkFQUFJPVkVEIiwiUkVWT0tFRCIsIkRPQ1VNRU5UX1RZUEVTIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUFLN0NuUCxVQUFRO0FBTHFDLEU7QUFyQ3pDckUsSyxDQXFERXlULGMsR0FBMkM7QUFDakRDLFlBQVUsWUFEdUM7QUFFakRDLG9CQUFrQixrQkFGK0I7QUFHakRDLGtDQUFnQztBQUhpQixFO21CQThZcEM1VCxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmIzYTIwMTQ2YjZkZjA2N2E1ZDUiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJQYXJlbnREZXRhaWxzIH0gZnJvbSBcIi4vT3JkZXJcIjtcblxuZXhwb3J0IHR5cGUgQ29tbWlzc2lvblNjaGVkdWxlID0ge1xuXHRiYXNlUmF0ZTogbnVtYmVyLFxuXHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0ZnJhY3Rpb25hbFJhdGU6IG51bWJlcixcblx0c2hhcmVBbW91bnRSb3VuZGluZzogbnVtYmVyLFxuXHRzdWJzY3JpcHRpb246IGJvb2xlYW4sXG5cdGJhc2tldFNjaGVkdWxlOiB7XG5cdFx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRcdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0XHRzY2hlZHVsZTogQXJyYXk8e1xuXHRcdFx0YmFza2V0U2l6ZTogbnVtYmVyLFxuXHRcdFx0YmFza2V0UHJpY2U6IG51bWJlcixcblx0XHR9Pixcblx0fSxcblx0cGFzc1Rocm91Z2hGZWVzOiBib29sZWFuLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgQWNjb3VudFxuICogQGRlc2NyaXB0aW9uIEFuIGFjY291bnQgYmVsb25naW5nIHRvIGEgVXNlci4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvYWNjb3VudHNfZ2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50VHlwZTogc3RyaW5nO1xuXHRjdXJyZW5jeUlEOiBzdHJpbmc7XG5cdGliSUQ6IHN0cmluZztcblx0bWFyZ2luOiBzdHJpbmc7XG5cdG5pY2tuYW1lOiBzdHJpbmc7XG5cdG9wZW5lZFdoZW46IHN0cmluZztcblx0cGF0dGVybkRheVRyYWRlczogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHJhZGluZ1R5cGU6IHN0cmluZztcblx0YWNjb3VudE1nbXRUeXBlOiBzdHJpbmc7XG5cdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgQkxPVFRFUl9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBU0hcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE9SREVSU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gVFJBTlNBQ1RJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQT1NJVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFMTFxuXHQgKi9cblx0c3RhdGljIEJMT1RURVJfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogP3N0cmluZ30gPSB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5cblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5fTk9fTkVXX1RSQURFU1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBSQUNUSUNFXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBMSVZFXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEJsb3R0ZXIodHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldEJsb3R0ZXIodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QmxvdHRlcih1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcsIHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFN1bW1hcnkvYFxuXHRcdFx0XHQrIGAke2FjY291bnRJRH0ke3R5cGUgPyBcIi9cIiArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkZXJzKSB7XG5cdFx0XHRcdGJvZHkub3JkZXJzID0gYm9keS5vcmRlcnMubWFwKChvcmRlcikgPT4gbmV3IE9yZGVyKG9yZGVyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHlwZSA/IGJvZHlbdHlwZV0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRnZXRQZXJmb3JtYW5jZSgpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFBlcmZvcm1hbmNlKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgLi4uYXJndW1lbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0c3RhdGljIGdldFBlcmZvcm1hbmNlKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgZW5kRGF0ZSA9IGFyZ3VtZW50c1szXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHthY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkucGVyZm9ybWFuY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cGxhY2VPcmRlcih0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8c3RyaW5nIHwgT2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlsczogT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdG9wdGlvbnMudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0b3B0aW9ucy5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IFwiL3NpZ251cHMvcHJhY3RpY2VcIlxuXHRcdFx0XHQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY2hhbmdlU3Vic2NyaXB0aW9uKG1ldGhvZDogc3RyaW5nLCB7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0cGF5bWVudElELFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0cGxhbklEOiBzdHJpbmcsXG5cdFx0cGF5bWVudElEOiBzdHJpbmcsXG5cdH0pOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6ICFtZXRob2Quc3RhcnRzV2l0aChcIlBcIikgPyB1bmRlZmluZWQgOiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJHRVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyhvcHRpb25zPzogT2JqZWN0KTogT2JqZWN0IHtcblx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuYWRkU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1cGRhdGVTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC51cGRhdGVTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGNhbmNlbFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNhbmNlbFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG4vKipcbiAqIEBmdW5jdGlvbiByZXF1ZXN0XG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsbHksIGl0IGlzIHVubmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGFuZCB0aGlzIGlzIGZvciBpbnRlcm5hbCB1c2Ugb25seS4gQ2FsbCByZXF1ZXN0KCkgaWYgeW91IG5lZWQgdG8gbWFrZSBhIGN1c3RvbSBBUEkgY2FsbCB0aGF0IGlzIG5vdCBjb3ZlcmVkIGJ5IGFub3RoZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5lbmRwb2ludFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2Vzc2lvbktleVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYm9keVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0aW9ucy5hZGRsSGVhZGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9zdCAtIE9uZSBvZiBDb25maWcuSE9TVFNcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx7Ym9keTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIsIGhlYWRlcnM6IE9iamVjdDxzdHJpbmcsIHN0cmluZz59Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG5cdG1ldGhvZCA9IFwiR0VUXCIsXG5cdGVuZHBvaW50LFxuXHRzZXNzaW9uS2V5LFxuXHRib2R5LFxuXHRhZGRsSGVhZGVycyA9IHt9LFxuXHRob3N0ID0gSE9TVFMuQVBJLFxufToge1xuXHRtZXRob2Q/OiBzdHJpbmcsXG5cdGVuZHBvaW50OiBzdHJpbmcsXG5cdHNlc3Npb25LZXk/OiBzdHJpbmcsXG5cdGJvZHk/OiBhbnksXG5cdGFkZGxIZWFkZXJzPzoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30sXG5cdGhvc3Q/OiBzdHJpbmcsXG59KSB7XG5cdGNvbnN0IGhlYWRlcnM6IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdH07XG5cdGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuXHRcdGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblx0fVxuXHRpZiAoc2Vzc2lvbktleSkge1xuXHRcdGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG5cdH1cblx0Zm9yIChjb25zdCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcblx0XHRoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuXHR9XG5cblx0ZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cblx0aWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG5cdFx0XHRpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcblx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keTogcmVzQm9keSxcblx0XHRcdFx0XHRzdGF0dXNDb2RlLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHJlc0hlYWRlcnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGVycm9yTWVzc2FnZTtcblx0XHRcdFx0aWYgKHJlc0JvZHkpIHtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBzdGF0dXNDb2RlID09PSA0MDFcblx0XHRcdFx0XHQ/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpXG5cdFx0XHRcdFx0OiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiLyoqXG4gKiBAbmFtZXNwYWNlIENvbmZpZ1xuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0ge1xuXHRlbnY6IG51bGwsXG5cdGh0dHBJbXBsOiBudWxsLFxuXHRhcHBUeXBlSUQ6IG51bGwsXG5cdGFwcFZlcnNpb246IG51bGwsXG5cdHdscElEOiBudWxsLFxuXHRhcHBzUGFydG5lcklEOiBudWxsLFxuXHRyZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEhPU1RTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBQU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFUE9SVFNcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG5cdEFQSTogXCJhcGlcIixcblx0QVBQUzogXCJhcHBzXCIsXG5cdFJFUE9SVFM6IFwicmVwb3J0c1wiLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBFTlZJUk9OTUVOVFNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBVQVRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBQUk9EXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcblx0VUFUOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuXHR9LFxuXHRQUk9EOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuXHR9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcblx0ZW52LFxuXHRodHRwSW1wbCxcblx0YXBwVHlwZUlELFxuXHRhcHBWZXJzaW9uLFxuXHR3bHBJRCA9IFwiRFdcIixcblx0YXBwc1BhcnRuZXJJRCxcblx0cmVmZXJyYWxDb2RlLFxufSkge1xuXHRDb25maWcuZW52ID0gZW52O1xuXHRDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcblx0Q29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcblx0Q29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuXHRDb25maWcud2xwSUQgPSB3bHBJRDtcblx0Q29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuXHRDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RHJpdmVXZWFsdGhFcnJvcixcblx0RHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWlzc2lvblNjaGVkdWxlIH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHR5cGUgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCB0eXBlIE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0YWNjb3VudElEOiBzdHJpbmcsXG5cdGFjY291bnRObzogc3RyaW5nLFxuXHR1c2VySUQ6IHN0cmluZyxcblx0YWNjb3VudFR5cGU6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBOZXdPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0c2lkZTogc3RyaW5nLFxuXHRxdHk/OiBudW1iZXIsXG5cdGFtb3VudENhc2g/OiBudW1iZXIsXG5cdGNvbW1lbnQ/OiBzdHJpbmcsXG5cdGF1dG9TdG9wPzogbnVtYmVyLFxuXHRwcmljZT86IG51bWJlcixcbn07XG5leHBvcnQgdHlwZSBOZXdDYXJ0T3JkZXIgPSB7XG5cdGluc3RydW1lbnQ6IEluc3RydW1lbnQgfCBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0cmVmZXJlbmNlSUQ6IHN0cmluZyxcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBPcmRlclxuICogQGRlc2NyaXB0aW9uIEFuIG9yZGVyIGNyZWF0ZWQgZm9yIGFuIEFjY291bnQuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9tYXJrZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXHRvcmRlcklEOiBzdHJpbmc7XG5cdGFjY291bnRJRDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0Y3VtUXR5OiBudW1iZXI7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHRjb21tZW50OiBzdHJpbmc7XG5cdGNvbW1pc3Npb246IG51bWJlcjtcblx0Y3JlYXRlZEJ5SUQ6IHN0cmluZztcblx0Y3JlYXRlZFdoZW46IHN0cmluZztcblx0ZXhlY3V0ZWRXaGVuOiBzdHJpbmc7XG5cdGdyb3NzVHJhZGVBbXQ6IG51bWJlcjtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdGxlYXZlc1F0eTogc3RyaW5nO1xuXHRvcmRlck5vOiBzdHJpbmc7XG5cdG9yZGVyUXR5OiBudW1iZXI7XG5cdHNpZGU6IHN0cmluZztcblx0YXV0b1N0b3A6ID9udW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHRyZWplY3Rpb25SZWFzb246ID9zdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR0eXBlOiBudW1iZXI7XG5cdHByaWNlOiA/bnVtYmVyO1xuXHRlZmZlY3RpdmVQcmljZTogP251bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGUgfHwgZGF0YS5vcmRlclR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNJREVTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEJVWVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU0VMTFxuXHQgKi9cblx0c3RhdGljIFNJREVTOiB7W3NpZGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTUFSS0VUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSU1JVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU1RPUFxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE5FV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElBTF9GSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQU5DRUxFRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURURcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TkVXOiBcIjBcIixcblx0XHRQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuXHRcdEZJTEw6IFwiMlwiLFxuXHRcdENBTkNFTEVEOiBcIjRcIixcblx0XHRSRUpFQ1RFRDogXCI4XCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBPcmRlci5jYW5jZWwodGhpcy5vcmRlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklEOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzIH0pID0+IHtcblx0XHRcdGlmIChib2R5Lm9yZFJlalJlYXNvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcblx0XHRcdFx0XHRuZXcgRHJpdmVXZWFsdGhFcnJvcihib2R5Lm9yZFJlalJlYXNvbiwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycyksXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmV3IE9yZGVyKGJvZHkpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnRJbmZvXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG5cdCAqIEByZXR1cm4gSWYgd2FpdEZvckZpbGwgaXMgdHJ1ZSwgYW4gT3JkZXIgd2lsbCBiZSByZXR1cm5lZC4gT3RoZXJ3aXNlLCBhbiBvcmRlcklEIHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKFxuXHRcdHR5cGU6IHN0cmluZyxcblx0XHR7XG5cdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHR1c2VySUQsXG5cdFx0XHRhY2NvdW50VHlwZSxcblx0XHR9OiBPcmRlclBhcmVudERldGFpbHMsXG5cdFx0e1xuXHRcdFx0b3JkZXI6IHtcblx0XHRcdFx0aW5zdHJ1bWVudCxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0cXR5LFxuXHRcdFx0XHRhbW91bnRDYXNoLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2UsXG5cdFx0XHR9LFxuXHRcdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSAxMDAwLFxuXHRcdFx0ZmlsbE1heFJldHJpZXMgPSAxMCxcblx0XHR9OiB7XG5cdFx0XHRvcmRlcjogTmV3T3JkZXIsXG5cdFx0XHR3YWl0Rm9yRmlsbD86IGJvb2xlYW4sXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbD86IG51bWJlcixcblx0XHRcdGZpbGxNYXhSZXRyaWVzPzogbnVtYmVyLFxuXHRcdH0sXG5cdCk6IFByb21pc2U8c3RyaW5nIHwgT3JkZXI+IHtcblx0XHRpZiAoYW1vdW50Q2FzaCAmJiBxdHkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJxdHlcXFwiIGFuZCBcXFwiYW1vdW50Q2FzaFxcXCIgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS5cIik7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCkge1xuXHRcdFx0ZmlsbE1heFJldHJpZXMgPSAyO1xuXG5cdFx0XHRpZiAoIXByaWNlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkxpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXFxcInByaWNlLlxcXCJcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChhdXRvU3RvcCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwiYXV0b1N0b3BcXFwiIGlzIG9ubHkgYWxsb3dlZCBmb3IgbWFya2V0IG9yZGVycy5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IGluc3RydW1lbnQuaW5zdHJ1bWVudElEIHx8IGluc3RydW1lbnQuaWQgfHwgaW5zdHJ1bWVudCxcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0XHRcdG9yZFR5cGU6IHR5cGUsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdG9yZGVyUXR5OiBxdHkgfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRhbW91bnRDYXNoOiBhbW91bnRDYXNoIHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5TVE9QID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGxpbWl0UHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLkxJTUlUID8gcHJpY2UgOiB1bmRlZmluZWQsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gYm9keS5vcmRlcklEO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0XHRyZXRyaWVzIC09IDE7XG5cdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChib2R5Lm9yZGVySUQpLnRoZW4ob3JkZXIgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgaXNGaWxsZWQgPSBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FVyAmJlxuXHRcdFx0XHRcdFx0XHRvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTDtcblxuXHRcdFx0XHRcdFx0aWYgKHJldHJpZXMgPD0gMCB8fCBpc0ZpbGxlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShvcmRlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yLmJvZHkuY29kZSA9PT0gNDA0ICYmIHJldHJpZXMgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgT2JqZWN0Pj59IEFuIG9iamVjdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggZWFjaCBrZXkgc2V0IHRvIGEgcmVmZXJlbmNlSUQgcGFzc2VkIHdpdGggYW4gb3JkZXIuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlQ2FydChcblx0XHR7XG5cdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHR1c2VySUQsXG5cdFx0XHRhY2NvdW50VHlwZSxcblx0XHR9OiBPcmRlclBhcmVudERldGFpbHMsXG5cdFx0e1xuXHRcdFx0b3JkZXJzLFxuXHRcdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyczogQXJyYXk8TmV3Q2FydE9yZGVyPixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTx7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiBPYmplY3R9PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogb3JkZXJzLm1hcChvcmRlciA9PiAoe1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IG9yZGVyLmluc3RydW1lbnQuaW5zdHJ1bWVudElEXG5cdFx0XHRcdFx0fHwgb3JkZXIuaW5zdHJ1bWVudC5pZCB8fCBvcmRlci5pbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogT3JkZXIuVFlQRVMuTUFSS0VULFxuXHRcdFx0XHRzaWRlOiBPcmRlci5TSURFUy5CVVksXG5cdFx0XHRcdG9yZGVyUXR5OiBvcmRlci5xdHkgPyBvcmRlci5xdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IG9yZGVyLmFtb3VudENhc2ggPyBvcmRlci5hbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50OiBvcmRlci5jb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcDogb3JkZXIuYXV0b1N0b3AsXG5cdFx0XHR9KSksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGxldCBvcmRlclJlc3VsdHMgPSBib2R5O1xuXHRcdFx0Y29uc3Qgb3JkZXJzTWFwID0gb3JkZXJSZXN1bHRzLnJlZHVjZShcblx0XHRcdFx0KGFjYywgbmV4dCwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBhY2MsIHtcblx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0e30sXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gb3JkZXJzTWFwO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRcdHJlZmVyZW5jZUlEOiBvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRCxcblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gcmVzb2x2ZShvcmRlcnNNYXApO1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblxuXHRcdFx0XHRcdFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdFx0b3JkZXJSZXN1bHRzLm1hcChvcmRlciA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCkudGhlbihvcmRlckN1cnJlbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdG9yZGVyc01hcFtvcmRlci5yZWZlcmVuY2VJRF0gPSBvcmRlckN1cnJlbnQ7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24oXG5cdFx0b3JkZXJzOiBBcnJheTx7XG5cdFx0XHRzaWRlOiBzdHJpbmcsXG5cdFx0XHRxdHk6IG51bWJlcixcblx0XHRcdG1hcmtldFByaWNlOiBudW1iZXIsXG5cdFx0XHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRcdH0+LFxuXHRcdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlLFxuXHQpOiB7XG5cdFx0dG90YWw6IG51bWJlcixcblx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IG51bWJlcixcblx0XHRieU9yZGVyOiB7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiB7XG5cdFx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdFx0Y29tbWlzc2lvbjogbnVtYmVyLFxuXHRcdFx0ZmVlczoge1xuXHRcdFx0XHRzZWM6IG51bWJlcixcblx0XHRcdFx0dGFmOiBudW1iZXIsXG5cdFx0XHR9LFxuXHRcdH19XG5cdH0ge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZTtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpLFxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwO1xuXHRcdFx0bGV0IHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuLyoqXG4gKiBAY2xhc3MgRnVuZGluZ1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBmdW5kaW5nIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblx0LyoqXG5cdCAqIEBuYW1lIEFMTE9XRURfVFlQRVNcblx0ICogQG1lbWJlcm9mIEZ1bmRpbmdcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXSVRIRFJBV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVF9BTkRfV0lUSERSQVdcblx0ICovXG5cdHN0YXRpYyBBTExPV0VEX1RZUEVTID0ge1xuXHRcdERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuXHRcdFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG5cdFx0REVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRsYW5ndWFnZSxcblx0XHRtaW5BbW91bnQsXG5cdFx0bWF4QW1vdW50LFxuXHRcdGFtb3VudCxcblx0XHRmaWx0ZXJzID0ge30sXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRsYW5ndWFnZT86IHN0cmluZyxcblx0XHRtaW5BbW91bnQ/OiBudW1iZXIsXG5cdFx0bWF4QW1vdW50PzogbnVtYmVyLFxuXHRcdGFtb3VudD86IG51bWJlcixcblx0XHRmaWx0ZXJzPzoge1xuXHRcdFx0bmFtZTogc3RyaW5nLFxuXHRcdFx0Y3VycmVuY3k6IHN0cmluZyxcblx0XHRcdGNvdW50cnk6IHN0cmluZyxcblx0XHRcdGFsbG93ZWQ6IHN0cmluZyxcblx0XHR9LFxuXHR9ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXHRcdH1cblxuXHRcdGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG5cdFx0aWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcblx0XHRpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuXHRcdGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG5cdFx0aWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcblx0XHRpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuXHRcdGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG5cdFx0aWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcblx0XHRpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuQVBQUyxcblx0XHRcdGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQ6IHN0cmluZykge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdGVuZHBvaW50OiBcIi9mdW5kaW5nL3N0YXR1c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvblBsYW5zKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvYWNoL3N1YnNjcmlwdGlvbi1wbGFuc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGNvbnN0IHByaWNpbmcgPSBbXS5jb25jYXQoYm9keS5kYXRhKVxuXHRcdFx0XHQuc29ydCgoeCwgeSkgPT4geC5hbW91bnQgLSB5LmFtb3VudClcblx0XHRcdFx0Lm1hcChwcmljZSA9PiBPYmplY3QuYXNzaWduKFxuXHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdHByaWNlLFxuXHRcdFx0XHRcdHsgYW1vdW50OiBOdW1iZXIocHJpY2UuYW1vdW50IC8gMTAwKSB9LFxuXHRcdFx0XHQpKTtcblxuXHRcdFx0cmV0dXJuIHByaWNpbmc7XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GdW5kaW5nLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG4vKipcbiAqIEBjbGFzcyBSZXBvcnRzXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGFjY291bnQgcmVwb3J0cy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0cyB7XG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VHJhbnNhY3Rpb25zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9RmluVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRQbGFjZWRPcmRlcnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1PcmRlclRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3RhdGVtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wMlwiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VHJhZGVDb25maXJtcyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wMVwiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0VGF4RG9jdW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAzXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZW5lcmF0ZURvd25sb2FkVVJMKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGZpbGVLZXk6IHN0cmluZyxcblx0KTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzLyR7YWNjb3VudElEfS8ke2ZpbGVLZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnVybCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1cHBvcnRlZENvdW50cmllcygpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvY291bnRyaWVzXCIsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgdHlwZSBRdW90ZSA9IHtcblx0YmlkOiBudW1iZXIsXG5cdGFzazogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgSW5zdHJ1bWVudFxuICogQGRlc2NyaXB0aW9uIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9pbnN0cnVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRleGNoYW5nZUlEOiBzdHJpbmc7XG5cdGluc3RydW1lbnRUeXBlSUQ6IHN0cmluZztcblx0b3JkZXJTaXplTWF4OiBudW1iZXI7XG5cdG9yZGVyU2l6ZU1pbjogbnVtYmVyO1xuXHRvcmRlclNpemVTdGVwOiBudW1iZXI7XG5cdHJhdGVBc2s6IG51bWJlcjtcblx0cmF0ZUJpZDogbnVtYmVyO1xuXHRyYXRlUHJlY2lzaW9uOiBudW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHR0cmFkZVN0YXR1czogc3RyaW5nO1xuXHR1cmxJbWFnZTogc3RyaW5nO1xuXHR1cmxJbnZlc3Rvcjogc3RyaW5nO1xuXHRjaGFpa2luUGdyOiBzdHJpbmc7XG5cdHByaW9yQ2xvc2U6IG51bWJlcjtcblx0bWFya2V0U3RhdGU6IG51bWJlcjtcblx0ZnVuZGFtZW50YWxEYXRhTW9kZWw6IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRSQURFX1NUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gSU5BQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgVFJBREVfU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdElOQUNUSVZFOiBcIjBcIixcblx0XHRBQ1RJVkU6IFwiMVwiLFxuXHRcdENMT1NFRDogXCIyXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIENIQVJUX0NPTVBSRVNTSU9OU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IERBWVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzFcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV81XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMzBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IEhPVVJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFdFRUtcblx0ICovXG5cdHN0YXRpYyBDSEFSVF9DT01QUkVTU0lPTlM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdERBWTogMCxcblx0XHRNSU5VVEVfMTogMSxcblx0XHRNSU5VVEVfNTogNCxcblx0XHRNSU5VVEVfMzA6IDgsXG5cdFx0SE9VUjogOSxcblx0XHRXRUVLOiAxMCxcblx0fTtcblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbDogQXJyYXk8c3RyaW5nPiB8IHN0cmluZyk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4gfCBJbnN0cnVtZW50PiB7XG5cdFx0Y29uc3Qgc3ltYm9scyA9IHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBbc3ltYm9sXSA6IHN5bWJvbDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Ym9keSA9IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBib2R5WzBdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChpZDogc3RyaW5nLCBpbmNsdWRlRnVuZGFtZW50YWxzOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8SW5zdHJ1bWVudD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gXCI/b3B0aW9ucz1GXCIgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IEluc3RydW1lbnQoYm9keSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXM/OiBzdHJpbmcgPSBcIi0xXCIpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2VhcmNoKGNyaXRlcmlhOiB7IG5hbWU/OiBzdHJpbmcsIHN5bWJvbD86IHN0cmluZyB9KTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuXHRcdGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG5cdFx0aWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFF1b3RlKCk6IFByb21pc2U8UXVvdGU+IHtcblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFF1b3RlKFxuXHRcdHN5bWJvbDogc3RyaW5nIHwgSW5zdHJ1bWVudCB8IEFycmF5PHN0cmluZyB8IEluc3RydW1lbnQ+LFxuXHQvLyAkRmxvd0ZpeE1lXG5cdCk6IFByb21pc2U8UXVvdGUgfCB7W3N5bWJvbDogc3RyaW5nXTogUXVvdGV9PiB7XG5cdFx0Y29uc3Qgc3ltYm9sczogQXJyYXk8c3RyaW5nPiA9IChBcnJheS5pc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXSlcblx0XHRcdC5tYXAoc3ltID0+IHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXHRcdFx0Ym9keSA9IGJvZHkuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcblx0XHRcdGZvciAoY29uc3QgcmF3UXVvdGUgb2YgYm9keSkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0b2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcblx0XHRcdFx0XHRiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG5cdFx0XHRcdFx0YXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIG9iaiA9IG9ialtzeW1ib2xzWzBdXTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRnZXRDaGFydERhdGEoY29tcHJlc3Npb246IG51bWJlcikge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEoXG5cdFx0XHRcdHRoaXMuaW5zdHJ1bWVudElELFxuXHRcdFx0XHRjb21wcmVzc2lvbixcblx0XHRcdFx0YXJndW1lbnRzWzFdLFxuXHRcdFx0XHRhcmd1bWVudHNbMl0sXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uLCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0c3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQ6IHN0cmluZywgY29tcHJlc3Npb246IG51bWJlcik6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuXHRcdGxldCB0aW1lUGFyYW1zO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVFbmQgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YS5zcGxpdChcInxcIikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbi8qKlxuICogQGNsYXNzIFVzZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHVzZXIgb2JqZWN0LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0LXVzZXJ9XG4gKi9cbmNsYXNzIFVzZXIge1xuXHRjb3VudHJ5SUQ6IHN0cmluZztcblx0ZW1haWxBZGRyZXNzOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYW5ndWFnZUlEOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdHBob25lTnVtYmVyOiBzdHJpbmc7XG5cdHJlZmVycmFsQ29kZTogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0d2xwSUQ6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHVzQ2l0aXplbjogYm9vbGVhbjtcblx0bGFzdExvZ2luV2hlbjogc3RyaW5nO1xuXHRjaXRpemVuc2hpcDogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTE6IHN0cmluZztcblx0YWRkcmVzc0xpbmUyOiBzdHJpbmc7XG5cdGNpdHk6IHN0cmluZztcblx0c3RhdGVQcm92aW5jZTogc3RyaW5nO1xuXHR6aXBQb3N0YWxDb2RlOiBzdHJpbmc7XG5cdGZ1bGxOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IEFQUFJPVkVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRUpFQ1RFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVWT0tFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQ0xPU0VEXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdEFQUFJPVkVEOiAyLFxuXHRcdFJFSkVDVEVEOiAzLFxuXHRcdFJFVk9LRUQ6IDQsXG5cdFx0Q0xPU0VEOiA1LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBET0NVTUVOVF9UWVBFU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBST09GX09GX0FERFJFU1Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBET0NVTUVOVF9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRBY2NvdW50cyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRBY2NvdW50cygpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZSBieSBrZXlcblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRDogc3RyaW5nLCBrZXk/OiBzdHJpbmcpIHtcblx0XHRpZiAoIWtleSkge1xuXHRcdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHNldHRpbmcgb2YgYm9keSkge1xuXHRcdFx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVkRGF0YTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0Z2V0U2V0dGluZ3Moa2V5Pzogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0a2V5LCB2YWx1ZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0c2V0U2V0dGluZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUpO1xuXHR9XG5cblx0c3RhdGljIHVuc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcpIDogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1bnNldFNldHRpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51bnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy91c2VyLXN0YXR1c31cblx0ICovXG5cdGdldFN0YXR1cygpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiAgQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ291dCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh1c2VySUQpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFNlc3Npb25zLnJlbW92ZSh1c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLmxvZ291dCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgVXNlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXQoKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0QnlVc2VySUQodGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG5cdFx0XHRcdGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuXHRcdFx0XHRsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG5cdFx0XHRcdG9zVHlwZTogXCJ1bmtub3duXCIsXG5cdFx0XHRcdG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG5cdFx0XHRcdHNjclJlczogXCJ1bmtub3duXCIsXG5cdFx0XHRcdGlwQWRkcmVzczogXCJ1bmtub3duXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRTZXNzaW9ucy5zYXZlKGJvZHkudXNlcklELCBib2R5LnNlc3Npb25LZXkpO1xuXHRcdFx0cmV0dXJuIFVzZXIuZ2V0QnlVc2VySUQoYm9keS51c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG5cdFx0fSkudGhlbihcblx0XHRcdCgpID0+IGZhbHNlLFxuXHRcdFx0KHJlamVjdGlvbikgPT4gcmVqZWN0aW9uLnN0YXR1c0NvZGUgPT09IDQwNFxuXHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0OiBQcm9taXNlLnJlamVjdChyZWplY3Rpb24pLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtib29sZWFufSBsb2dpbkF1dG9tYXRpY2FsbHkgLSBJZiBmYWxzZSwgbm8gc2Vzc2lvbiB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8dW5kZWZpbmVkIHwgVXNlcj59IElmIGxvZ2luQXV0b21hdGljYWxseSBpcyB0cnVlLCBhIFVzZXIgd2lsbCBiZSByZXNvbHZlZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoe1xuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRlbWFpbCxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG5cdFx0dXRtQ2FtcGFpZ24sXG5cdFx0dXRtQ29udGVudCxcblx0XHR1dG1NZWRpdW0sXG5cdFx0dXRtU291cmNlLFxuXHRcdHV0bVRlcm0sXG5cdH0sIGxvZ2luQXV0b21hdGljYWxseTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQgfCBVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0d2xwSUQ6IENvbmZpZy53bHBJRCxcblx0XHRcdFx0cmVmZXJyYWxDb2RlLFxuXHRcdFx0XHR1dG1DYW1wYWlnbixcblx0XHRcdFx0dXRtQ29udGVudCxcblx0XHRcdFx0dXRtTWVkaXVtLFxuXHRcdFx0XHR1dG1Tb3VyY2UsXG5cdFx0XHRcdHV0bVRlcm0sXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuXHRcdFx0XHRyZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZSxcblx0fSk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGUsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwZGF0ZShkYXRhOiBPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51cGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHRcdGVtYWlsOiBkYXRhLmVtYWlsIHx8IHRoaXMuZW1haWxBZGRyZXNzLFxuXHRcdH0pKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklEOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyBmb3IgZXNsaW50XG5cdFx0LyogZ2xvYmFsIEZvcm1EYXRhICovXG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2RvY3VtZW50c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwbG9hZERvY3VtZW50KGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldENyZWRpdENhcmRzKCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBVc2VyLmdldENyZWRpdENhcmRzKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q3JlZGl0Q2FyZHModXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZENyZWRpdENhcmQoY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBVc2VyLmFkZENyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRUb2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZENyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHsgY2FyZFRva2VuIH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cmVtb3ZlQ3JlZGl0Q2FyZChjYXJkSUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnJlbW92ZUNyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHJlbW92ZUNyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkcy8ke2NhcmRJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBmb3Jnb3RQYXNzd29yZCh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJzL3Bhc3N3b3Jkc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkucGFzc3dvcmRSZXNldElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVzZXRQYXNzd29yZChwYXNzd29yZFJlc2V0SUQ6IHN0cmluZywgY29kZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvcGFzc3dvcmRzLyR7cGFzc3dvcmRSZXNldElEfWAsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGNvZGUsXG5cdFx0XHRcdHBhc3N3b3JkUmVzZXRJRCxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=