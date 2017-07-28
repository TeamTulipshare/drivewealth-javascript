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
							}, reject);
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
	   * Get setting value
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
			value: function getSettings() {
				var _arguments = Array.prototype.slice.call(arguments),
				    key = _arguments[0];
	
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
			key: "getSettings",
			value: function getSettings(userID) {
				var key = arguments[1];
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZTIzNmMwZjk5NDE2Zjc4MTczMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwic3RhcnRzV2l0aCIsInVuZGVmaW5lZCIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJpc0ZpbGxlZCIsIk5FVyIsIlBBUlRJQUxfRklMTCIsInNldFRpbWVvdXQiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsInJlZHVjZSIsImFjYyIsIm5leHQiLCJpZHgiLCJyZWZlcmVuY2VJRCIsImFsbCIsInN0YXR1c0RldGFpbHMiLCJzaG91bGRSZXRyeSIsInJlZmVyZW5jZSIsInRoaXNTdGF0dXMiLCJjb21taXNzaW9uU2NoZWR1bGUiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbCIsInRvdGFsRmVlc09ubHkiLCJiYXNrZXRQcmljZSIsImJhc2tldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzY2hlZHVsZUl0ZW0iLCJiYXNrZXRTaXplIiwiYnlPcmRlciIsIm1hcmtldFByaWNlIiwib3JkZXJQcmljZSIsImZyYWN0aW9uYWxSYXRlIiwiYmFzZVJhdGUiLCJORUFSRVNUIiwiTWF0aCIsInJvdW5kIiwiQ0VJTCIsImNlaWwiLCJGTE9PUiIsImZsb29yIiwic2hhcmVBbW91bnRSb3VuZGluZyIsIm1heCIsImJhc2VTaGFyZXMiLCJleGNlc3NSYXRlIiwic2VjRmVlIiwidGFmRmVlIiwicGFzc1Rocm91Z2hGZWVzIiwiU0VMTCIsIm1pbiIsIm9yZGVyVG90YWwiLCJjb21taXNzaW9uIiwiZmVlcyIsInNlYyIsInRhZiIsIm11bHRpcGxlT3JkZXJEZWx0YSIsIkZJTEwiLCJDQU5DRUxFRCIsIlJFSkVDVEVEIiwibGFuZ3VhZ2UiLCJtaW5BbW91bnQiLCJtYXhBbW91bnQiLCJhbW91bnQiLCJmaWx0ZXJzIiwibmFtZSIsImNvdW50cnkiLCJjdXJyZW5jeSIsImFsbG93ZWQiLCJwcmljaW5nIiwiY29uY2F0Iiwic29ydCIsIngiLCJ5IiwiQUxMT1dFRF9UWVBFUyIsIkRFUE9TSVQiLCJXSVRIRFJBVyIsIkRFUE9TSVRfQU5EX1dJVEhEUkFXIiwidG9JU09TdHJpbmciLCJ0cmFuc2FjdGlvbiIsInVybCIsImdldFF1b3RlIiwic3ltYm9sIiwiY29tcHJlc3Npb24iLCJnZXRDaGFydERhdGEiLCJzeW1ib2xzIiwiam9pbiIsImluY2x1ZGVGdW5kYW1lbnRhbHMiLCJ0cmFkZVN0YXR1cyIsImNyaXRlcmlhIiwic3ltIiwib2JqIiwic3BsaXQiLCJyYXdRdW90ZSIsInBhcnNlZFF1b3RlIiwiYmlkIiwiYXNrIiwidGltZVBhcmFtcyIsImRhdGVTdGFydCIsInJlcGxhY2UiLCJkYXRlRW5kIiwiVFJBREVfU1RBVFVTRVMiLCJJTkFDVElWRSIsIkFDVElWRSIsIkNIQVJUX0NPTVBSRVNTSU9OUyIsIkRBWSIsIk1JTlVURV8xIiwiTUlOVVRFXzUiLCJNSU5VVEVfMzAiLCJIT1VSIiwiV0VFSyIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXRMaXN0Rm9yVXNlcklEIiwia2V5IiwiZ2V0U2V0dGluZ3MiLCJ2YWx1ZSIsInNldFNldHRpbmciLCJyZW1vdmUiLCJmaWxlIiwidXBsb2FkRG9jdW1lbnQiLCJnZXRDcmVkaXRDYXJkcyIsImNhcmRUb2tlbiIsImFkZENyZWRpdENhcmQiLCJjYXJkSUQiLCJyZW1vdmVDcmVkaXRDYXJkIiwiZm9ybWF0dGVkRGF0YSIsInNldHRpbmciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibGFuZ3VhZ2VJRCIsIm9zVHlwZSIsIm9zVmVyc2lvbiIsInNjclJlcyIsImlwQWRkcmVzcyIsInNhdmUiLCJnZXRCeVVzZXJJRCIsInJlamVjdGlvbiIsImVtYWlsIiwidXRtQ2FtcGFpZ24iLCJ1dG1Db250ZW50IiwidXRtTWVkaXVtIiwidXRtU291cmNlIiwidXRtVGVybSIsImxvZ2luQXV0b21hdGljYWxseSIsImVtYWlsQWRkcmVzczEiLCJsb2dpbiIsImFkZHJlc3NMaW5lMSIsImFkZHJlc3NMaW5lMiIsImNpdHkiLCJjb3VudHJ5SUQiLCJwaG9uZUhvbWUiLCJwaG9uZVdvcmsiLCJwaG9uZSIsInN0YXRlUHJvdmluY2UiLCJ6aXBQb3N0YWxDb2RlIiwicGhvbmVNb2JpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkFQUFJPVkVEIiwiUkVWT0tFRCIsIkRPQ1VNRU5UX1RZUEVTIiwiUEhPVE9fSUQiLCJQUk9PRl9PRl9BRERSRVNTIiwiUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztB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QnpCLE1BQXBCLGtCQUZjO0FBR2QwQixpQkFBWSxtQkFBU0MsR0FBVCxDQUFhM0IsTUFBYjtBQUhFLEtBQVIsRUFJSjRCLElBSkksQ0FJQztBQUFBLFNBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLFlBQWNBLElBQWQ7QUFBQSxLQUpELENBQVA7QUFLQTs7O2lDQVlvQjdCLE0sRUFBZ0JtUSxTLEVBQW9DO0FBQ3hFLFdBQU8sdUJBQVE7QUFDZDNPLGFBQVEsTUFETTtBQUVkQywyQkFBb0J6QixNQUFwQixrQkFGYztBQUdkMEIsaUJBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsV0FBTSxFQUFFc08sb0JBQUY7QUFKUSxLQUFSLEVBS0p2TyxJQUxJLENBS0M7QUFBQSxTQUFHQyxJQUFILFVBQUdBLElBQUg7QUFBQSxZQUFjQSxJQUFkO0FBQUEsS0FMRCxDQUFQO0FBTUE7OztvQ0FZdUI3QixNLEVBQWdCcVEsTSxFQUErQjtBQUN0RSxXQUFPLHVCQUFRO0FBQ2Q3TyxhQUFRLFFBRE07QUFFZEMsMkJBQW9CekIsTUFBcEIsc0JBQTJDcVEsTUFGN0I7QUFHZDNPLGlCQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiO0FBSEUsS0FBUixFQUlKNEIsSUFKSSxDQUlDO0FBQUEsWUFBTW9CLFNBQU47QUFBQSxLQUpELENBQVA7QUFLQTs7Ozs7O0FBbllJekQsSyxDQXFDRWlFLFEsR0FBdUM7QUFDN0NDLFdBQVMsQ0FEb0M7QUFFN0MrTyxZQUFVLENBRm1DO0FBRzdDckcsWUFBVSxDQUhtQztBQUk3Q3NHLFdBQVMsQ0FKb0M7QUFLN0M3TyxVQUFRO0FBTHFDLEU7QUFyQ3pDckUsSyxDQXFERW1ULGMsR0FBMkM7QUFDakRDLFlBQVUsWUFEdUM7QUFFakRDLG9CQUFrQixrQkFGK0I7QUFHakRDLGtDQUFnQztBQUhpQixFO21CQWlWcEN0VCxJIiwiZmlsZSI6ImRyaXZld2VhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZHJpdmV3ZWFsdGhcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2UyMzZjMGY5OTQxNmY3ODE3MzIiLCJpbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgeyBDb25maWcsIHNldHVwLCBFTlZJUk9OTUVOVFMsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RU5WSVJPTk1FTlRTLFxuXHRIT1NUUyxcblxuXHRBY2NvdW50LFxuXHRDb25maWcsXG5cdEVycm9yLFxuXHRGdW5kaW5nLFxuXHRJbnN0cnVtZW50LFxuXHRPcmRlcixcblx0UmVwb3J0cyxcblx0VXNlcixcblx0U2Vzc2lvbnMsXG5cblx0c2V0dXAsXG5cdHJlcXVlc3QsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5cbmltcG9ydCB0eXBlIHsgT3JkZXJQYXJlbnREZXRhaWxzIH0gZnJvbSBcIi4vT3JkZXJcIjtcblxuZXhwb3J0IHR5cGUgQ29tbWlzc2lvblNjaGVkdWxlID0ge1xuXHRiYXNlUmF0ZTogbnVtYmVyLFxuXHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0ZnJhY3Rpb25hbFJhdGU6IG51bWJlcixcblx0c2hhcmVBbW91bnRSb3VuZGluZzogbnVtYmVyLFxuXHRzdWJzY3JpcHRpb246IGJvb2xlYW4sXG5cdGJhc2tldFNjaGVkdWxlOiB7XG5cdFx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRcdGV4Y2Vzc1JhdGU6IG51bWJlcixcblx0XHRzY2hlZHVsZTogQXJyYXk8e1xuXHRcdFx0YmFza2V0U2l6ZTogbnVtYmVyLFxuXHRcdFx0YmFza2V0UHJpY2U6IG51bWJlcixcblx0XHR9Pixcblx0fSxcblx0cGFzc1Rocm91Z2hGZWVzOiBib29sZWFuLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgQWNjb3VudFxuICogQGRlc2NyaXB0aW9uIEFuIGFjY291bnQgYmVsb25naW5nIHRvIGEgVXNlci4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvYWNjb3VudHNfZ2V0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuXHRhY2NvdW50SUQ6IHN0cmluZztcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRhY2NvdW50VHlwZTogc3RyaW5nO1xuXHRjdXJyZW5jeUlEOiBzdHJpbmc7XG5cdGliSUQ6IHN0cmluZztcblx0bWFyZ2luOiBzdHJpbmc7XG5cdG5pY2tuYW1lOiBzdHJpbmc7XG5cdG9wZW5lZFdoZW46IHN0cmluZztcblx0cGF0dGVybkRheVRyYWRlczogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dHJhZGluZ1R5cGU6IHN0cmluZztcblx0YWNjb3VudE1nbXRUeXBlOiBzdHJpbmc7XG5cdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgQkxPVFRFUl9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBU0hcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE9SREVSU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gVFJBTlNBQ1RJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQT1NJVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFMTFxuXHQgKi9cblx0c3RhdGljIEJMT1RURVJfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogP3N0cmluZ30gPSB7XG5cdFx0Q0FTSDogXCJjYXNoXCIsXG5cdFx0T1JERVJTOiBcIm9yZGVyc1wiLFxuXHRcdFRSQU5TQUNUSU9OUzogXCJ0cmFuc2FjdGlvbnNcIixcblx0XHRQT1NJVElPTlM6IFwicG9zaXRpb25zXCIsXG5cdFx0QUxMOiBudWxsLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5cblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE9QRU5fTk9fTkVXX1RSQURFU1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0T1BFTjogMixcblx0XHRPUEVOX05PX05FV19UUkFERVM6IDMsXG5cdFx0Q0xPU0VEOiA5LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgQWNjb3VudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFBSQUNUSUNFXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBMSVZFXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQUkFDVElDRTogMSxcblx0XHRMSVZFOiAyLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEJsb3R0ZXIodHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldEJsb3R0ZXIodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QmxvdHRlcih1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcsIHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFN1bW1hcnkvYFxuXHRcdFx0XHQrIGAke2FjY291bnRJRH0ke3R5cGUgPyBcIi9cIiArIHR5cGUgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkZXJzKSB7XG5cdFx0XHRcdGJvZHkub3JkZXJzID0gYm9keS5vcmRlcnMubWFwKChvcmRlcikgPT4gbmV3IE9yZGVyKG9yZGVyKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHlwZSA/IGJvZHlbdHlwZV0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRnZXRQZXJmb3JtYW5jZSgpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFBlcmZvcm1hbmNlKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgLi4uYXJndW1lbnRzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0c3RhdGljIGdldFBlcmZvcm1hbmNlKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCJcIjtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gYXJndW1lbnRzWzJdO1xuXHRcdFx0Y29uc3QgZW5kRGF0ZSA9IGFyZ3VtZW50c1szXTtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IFwiL2RhdGVSYW5nZT9cIjtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGBzdGFydERhdGU9JHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChzdGFydERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBzdGFydERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAmZW5kRGF0ZT0ke2VuZERhdGUuZ2V0RnVsbFllYXIoKX0keyhcIjBcIiArIChlbmREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgZW5kRGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYC9oaXN0b3J5P3BlcmlvZD0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50UGVyZm9ybWFuY2UvJHthY2NvdW50SUR9JHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkucGVyZm9ybWFuY2UpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cGxhY2VPcmRlcih0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8c3RyaW5nIHwgT2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyZW50RGV0YWlsczogT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHRcdGFjY291bnRObzogdGhpcy5hY2NvdW50Tm8sXG5cdFx0XHRhY2NvdW50VHlwZTogdGhpcy5hY2NvdW50VHlwZSxcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0fTtcblxuXHRcdHJldHVybiBPcmRlci5jcmVhdGUodHlwZSwgcGFyZW50RGV0YWlscywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zOiBPYmplY3QgPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdG9wdGlvbnMudXNlcklEID0gdGhpcy51c2VySUQ7XG5cdFx0b3B0aW9ucy5hY2NvdW50SUQgPSB0aGlzLmFjY291bnRJRDtcblx0XHRyZXR1cm4gRnVuZGluZy5nZXRGdW5kaW5nTWV0aG9kcyhvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYW5zYWN0aW9ucyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFuc2FjdGlvbnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UGxhY2VkT3JkZXJzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFBsYWNlZE9yZGVycyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRTdGF0ZW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFN0YXRlbWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VGF4RG9jdW1lbnRzKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRheERvY3VtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFkZUNvbmZpcm1zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYWRlQ29uZmlybXModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2VuZXJhdGVEb3dubG9hZFVSTChmaWxlS2V5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IFwiL3NpZ251cHMvcHJhY3RpY2VcIlxuXHRcdFx0XHQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY2hhbmdlU3Vic2NyaXB0aW9uKG1ldGhvZDogc3RyaW5nLCB7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0cGF5bWVudElELFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0cGxhbklEOiBzdHJpbmcsXG5cdFx0cGF5bWVudElEOiBzdHJpbmcsXG5cdH0pOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6ICFtZXRob2Quc3RhcnRzV2l0aChcIlBcIikgPyB1bmRlZmluZWQgOiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJHRVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyhvcHRpb25zOiBPYmplY3QpOiBPYmplY3Qge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRhZGRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5hZGRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LnVwZGF0ZVN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsU3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2FuY2VsU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbi8qKlxuICogQGZ1bmN0aW9uIHJlcXVlc3RcbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxseSwgaXQgaXMgdW5uZWNlc3NhcnkgdG8gdXNlIHRoaXMgZnVuY3Rpb24gYW5kIHRoaXMgaXMgZm9yIGludGVybmFsIHVzZSBvbmx5LiBDYWxsIHJlcXVlc3QoKSBpZiB5b3UgbmVlZCB0byBtYWtlIGEgY3VzdG9tIEFQSSBjYWxsIHRoYXQgaXMgbm90IGNvdmVyZWQgYnkgYW5vdGhlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmVuZHBvaW50XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZXNzaW9uS2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ib2R5XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRpb25zLmFkZGxIZWFkZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ob3N0IC0gT25lIG9mIENvbmZpZy5IT1NUU1xuICogQHJldHVybnMge1Byb21pc2UuPHtib2R5OiBzdHJpbmcsIHN0YXR1c0NvZGU6IG51bWJlciwgaGVhZGVyczogT2JqZWN0PHN0cmluZywgc3RyaW5nPn0+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcblx0bWV0aG9kID0gXCJHRVRcIixcblx0ZW5kcG9pbnQsXG5cdHNlc3Npb25LZXksXG5cdGJvZHksXG5cdGFkZGxIZWFkZXJzID0ge30sXG5cdGhvc3QgPSBIT1NUUy5BUEksXG59OiB7XG5cdG1ldGhvZD86IHN0cmluZyxcblx0ZW5kcG9pbnQ6IHN0cmluZyxcblx0c2Vzc2lvbktleT86IHN0cmluZyxcblx0Ym9keT86IGFueSxcblx0YWRkbEhlYWRlcnM/OiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSxcblx0aG9zdD86IHN0cmluZyxcbn0pIHtcblx0Y29uc3QgaGVhZGVyczoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0fTtcblx0aWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG5cdFx0aGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXHR9XG5cdGlmIChzZXNzaW9uS2V5KSB7XG5cdFx0aGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcblx0fVxuXHRmb3IgKGNvbnN0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuXHRcdGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG5cdH1cblxuXHRlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuXHRpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcblx0XHRcdGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuXHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRib2R5OiByZXNCb2R5LFxuXHRcdFx0XHRcdHN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0aGVhZGVyczogcmVzSGVhZGVycyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZXJyb3JNZXNzYWdlO1xuXHRcdFx0XHRpZiAocmVzQm9keSkge1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlcnJvciA9IHN0YXR1c0NvZGUgPT09IDQwMVxuXHRcdFx0XHRcdD8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycylcblx0XHRcdFx0XHQ6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCIvKipcbiAqIEBuYW1lc3BhY2UgQ29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSB7XG5cdGVudjogbnVsbCxcblx0aHR0cEltcGw6IG51bGwsXG5cdGFwcFR5cGVJRDogbnVsbCxcblx0YXBwVmVyc2lvbjogbnVsbCxcblx0d2xwSUQ6IG51bGwsXG5cdGFwcHNQYXJ0bmVySUQ6IG51bGwsXG5cdHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgSE9TVFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUElcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUFBTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVQT1JUU1xuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcblx0QVBJOiBcImFwaVwiLFxuXHRBUFBTOiBcImFwcHNcIixcblx0UkVQT1JUUzogXCJyZXBvcnRzXCIsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEVOVklST05NRU5UU1xuICogQHByb3BlcnR5IHtvYmplY3R9IFVBVFxuICogQHByb3BlcnR5IHtvYmplY3R9IFBST0RcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuXHRVQVQ6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG5cdH0sXG5cdFBST0Q6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGgubmV0XCIsXG5cdH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuXHRlbnYsXG5cdGh0dHBJbXBsLFxuXHRhcHBUeXBlSUQsXG5cdGFwcFZlcnNpb24sXG5cdHdscElEID0gXCJEV1wiLFxuXHRhcHBzUGFydG5lcklELFxuXHRyZWZlcnJhbENvZGUsXG59KSB7XG5cdENvbmZpZy5lbnYgPSBlbnY7XG5cdENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuXHRDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuXHRDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG5cdENvbmZpZy53bHBJRCA9IHdscElEO1xuXHRDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG5cdENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHREcml2ZVdlYWx0aEVycm9yLFxuXHREcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWlzc2lvblNjaGVkdWxlIH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHR5cGUgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCB0eXBlIE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0YWNjb3VudElEOiBzdHJpbmcsXG5cdGFjY291bnRObzogc3RyaW5nLFxuXHR1c2VySUQ6IHN0cmluZyxcblx0YWNjb3VudFR5cGU6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBOZXdPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0c2lkZTogc3RyaW5nLFxuXHRxdHk/OiBudW1iZXIsXG5cdGFtb3VudENhc2g/OiBudW1iZXIsXG5cdGNvbW1lbnQ/OiBzdHJpbmcsXG5cdGF1dG9TdG9wPzogbnVtYmVyLFxuXHRwcmljZT86IG51bWJlcixcbn07XG5leHBvcnQgdHlwZSBOZXdDYXJ0T3JkZXIgPSB7XG5cdGluc3RydW1lbnQ6IEluc3RydW1lbnQgfCBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0cmVmZXJlbmNlSUQ6IHN0cmluZyxcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBPcmRlclxuICogQGRlc2NyaXB0aW9uIEFuIG9yZGVyIGNyZWF0ZWQgZm9yIGFuIEFjY291bnQuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9tYXJrZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXHRvcmRlcklEOiBzdHJpbmc7XG5cdGFjY291bnRJRDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0Y3VtUXR5OiBudW1iZXI7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHRjb21tZW50OiBzdHJpbmc7XG5cdGNvbW1pc3Npb246IG51bWJlcjtcblx0Y3JlYXRlZEJ5SUQ6IHN0cmluZztcblx0Y3JlYXRlZFdoZW46IHN0cmluZztcblx0ZXhlY3V0ZWRXaGVuOiBzdHJpbmc7XG5cdGdyb3NzVHJhZGVBbXQ6IG51bWJlcjtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdGxlYXZlc1F0eTogc3RyaW5nO1xuXHRvcmRlck5vOiBzdHJpbmc7XG5cdG9yZGVyUXR5OiBudW1iZXI7XG5cdHNpZGU6IHN0cmluZztcblx0YXV0b1N0b3A6ID9udW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHRyZWplY3Rpb25SZWFzb246ID9zdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR0eXBlOiBudW1iZXI7XG5cdHByaWNlOiA/bnVtYmVyO1xuXHRlZmZlY3RpdmVQcmljZTogP251bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGUgfHwgZGF0YS5vcmRlclR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNJREVTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEJVWVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU0VMTFxuXHQgKi9cblx0c3RhdGljIFNJREVTOiB7W3NpZGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTUFSS0VUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSU1JVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU1RPUFxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE5FV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElBTF9GSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQU5DRUxFRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURURcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TkVXOiBcIjBcIixcblx0XHRQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuXHRcdEZJTEw6IFwiMlwiLFxuXHRcdENBTkNFTEVEOiBcIjRcIixcblx0XHRSRUpFQ1RFRDogXCI4XCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBPcmRlci5jYW5jZWwodGhpcy5vcmRlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklEOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBPcmRlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiBJZiB3YWl0Rm9yRmlsbCBpcyB0cnVlLCBhbiBPcmRlciB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIGFuIG9yZGVySUQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcjoge1xuXHRcdFx0XHRpbnN0cnVtZW50LFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRxdHksXG5cdFx0XHRcdGFtb3VudENhc2gsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdH0sXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyOiBOZXdPcmRlcixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTxzdHJpbmcgfCBPcmRlcj4ge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcInF0eVxcXCIgYW5kIFxcXCJhbW91bnRDYXNoXFxcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlwiKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSB7XG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDI7XG5cblx0XHRcdGlmICghcHJpY2UpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcXFwicHJpY2UuXFxcIlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF1dG9TdG9wKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJhdXRvU3RvcFxcXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBib2R5Lm9yZGVySUQ7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKGJvZHkub3JkZXJJRCkudGhlbihvcmRlciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAob3JkZXIucmVqZWN0aW9uUmVhc29uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlamVjdChvcmRlci5yZWplY3Rpb25SZWFzb24pO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb25zdCBpc0ZpbGxlZCA9IG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmXG5cdFx0XHRcdFx0XHRcdG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMO1xuXG5cdFx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwIHx8IGlzRmlsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCB1c2VySUQsIChlcnJvciwgc3RhdHVzRGV0YWlscykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aGlzU3RhdHVzID0gb3JkZXJzTWFwW3JlZmVyZW5jZV0uc3RhdHVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXNTdGF0dXNcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUob3JkZXJzTWFwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihcblx0XHRvcmRlcnM6IEFycmF5PHtcblx0XHRcdHNpZGU6IHN0cmluZyxcblx0XHRcdHF0eTogbnVtYmVyLFxuXHRcdFx0bWFya2V0UHJpY2U6IG51bWJlcixcblx0XHRcdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdFx0fT4sXG5cdFx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGUsXG5cdCk6IHtcblx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdG11bHRpcGxlT3JkZXJEZWx0YTogbnVtYmVyLFxuXHRcdGJ5T3JkZXI6IHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IHtcblx0XHRcdHRvdGFsOiBudW1iZXIsXG5cdFx0XHRjb21taXNzaW9uOiBudW1iZXIsXG5cdFx0XHRmZWVzOiB7XG5cdFx0XHRcdHNlYzogbnVtYmVyLFxuXHRcdFx0XHR0YWY6IG51bWJlcixcblx0XHRcdH0sXG5cdFx0fX1cblx0fSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcyksXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDA7XG5cdFx0XHRsZXQgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG4vKipcbiAqIEBjbGFzcyBGdW5kaW5nXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGZ1bmRpbmcgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXHQvKipcblx0ICogQG5hbWUgQUxMT1dFRF9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IERFUE9TSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFdJVEhEUkFXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUX0FORF9XSVRIRFJBV1xuXHQgKi9cblx0c3RhdGljIEFMTE9XRURfVFlQRVMgPSB7XG5cdFx0REVQT1NJVDogXCJERVBPU0lUXCIsXG5cdFx0V0lUSERSQVc6IFwiV0lUSERSQVdcIixcblx0XHRERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IGJvZHkuZGF0YS5tYXAoKHByaWNpbmcpID0+XG5cdFx0XHRcdFtdLmNvbmNhdChwcmljaW5nKVxuXHRcdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHRcdC5tYXAocHJpY2UgPT4gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0XHR7IGFtb3VudDogTnVtYmVyKHByaWNlLmFtb3VudCAvIDEwMCkgfSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdClbMF07XG5cblx0XHRcdHJldHVybiBwcmljaW5nO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuLyoqXG4gKiBAY2xhc3MgUmVwb3J0c1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBhY2NvdW50IHJlcG9ydHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYW5zYWN0aW9ucyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPUZpblRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9T3JkZXJUcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN0YXRlbWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDJcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYWRlQ29uZmlybXMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDFcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRheERvY3VtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wM1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTChcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRmaWxlS2V5OiBzdHJpbmcsXG5cdCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS51cmwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2NvdW50cmllc1wiLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IHR5cGUgUXVvdGUgPSB7XG5cdGJpZDogbnVtYmVyLFxuXHRhc2s6IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIEluc3RydW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXRfaW5zdHJ1bWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0ZXhjaGFuZ2VJRDogc3RyaW5nO1xuXHRpbnN0cnVtZW50VHlwZUlEOiBzdHJpbmc7XG5cdG9yZGVyU2l6ZU1heDogbnVtYmVyO1xuXHRvcmRlclNpemVNaW46IG51bWJlcjtcblx0b3JkZXJTaXplU3RlcDogbnVtYmVyO1xuXHRyYXRlQXNrOiBudW1iZXI7XG5cdHJhdGVCaWQ6IG51bWJlcjtcblx0cmF0ZVByZWNpc2lvbjogbnVtYmVyO1xuXHRzeW1ib2w6IHN0cmluZztcblx0dHJhZGVTdGF0dXM6IHN0cmluZztcblx0dXJsSW1hZ2U6IHN0cmluZztcblx0dXJsSW52ZXN0b3I6IHN0cmluZztcblx0Y2hhaWtpblBncjogc3RyaW5nO1xuXHRwcmlvckNsb3NlOiBudW1iZXI7XG5cdG1hcmtldFN0YXRlOiBudW1iZXI7XG5cdGZ1bmRhbWVudGFsRGF0YU1vZGVsOiBPYmplY3Q7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBUUkFERV9TVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IElOQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFRSQURFX1NUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRJTkFDVElWRTogXCIwXCIsXG5cdFx0QUNUSVZFOiBcIjFcIixcblx0XHRDTE9TRUQ6IFwiMlwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBDSEFSVF9DT01QUkVTU0lPTlNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBEQVlcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8xXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfNVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzMwXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBIT1VSXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBXRUVLXG5cdCAqL1xuXHRzdGF0aWMgQ0hBUlRfQ09NUFJFU1NJT05TOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHREQVk6IDAsXG5cdFx0TUlOVVRFXzE6IDEsXG5cdFx0TUlOVVRFXzU6IDQsXG5cdFx0TUlOVVRFXzMwOiA4LFxuXHRcdEhPVVI6IDksXG5cdFx0V0VFSzogMTAsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2w6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+IHwgSW5zdHJ1bWVudD4ge1xuXHRcdGNvbnN0IHN5bWJvbHMgPSB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gW3N5bWJvbF0gOiBzeW1ib2w7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGJvZHkgPSBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKTtcblx0XHRcdHJldHVybiB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gYm9keVswXSA6IGJvZHk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5SUQoaWQ6IHN0cmluZywgaW5jbHVkZUZ1bmRhbWVudGFsczogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPEluc3RydW1lbnQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/IFwiP29wdGlvbnM9RlwiIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBJbnN0cnVtZW50KGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzPzogc3RyaW5nID0gXCItMVwiKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNlYXJjaChjcml0ZXJpYTogeyBuYW1lPzogc3RyaW5nLCBzeW1ib2w/OiBzdHJpbmcgfSk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcblx0XHRpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuXHRcdGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRRdW90ZSgpOiBQcm9taXNlPFF1b3RlPiB7XG5cdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRRdW90ZShcblx0XHRzeW1ib2w6IHN0cmluZyB8IEluc3RydW1lbnQgfCBBcnJheTxzdHJpbmc+IHwgQXJyYXk8SW5zdHJ1bWVudD4sXG5cdCk6IFByb21pc2U8UXVvdGUgfCB7W3N5bWJvbDogc3RyaW5nXTogUXVvdGV9PiB7XG5cdFx0Y29uc3Qgc3ltYm9sczogQXJyYXk8c3RyaW5nPiA9IChBcnJheS5pc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXSlcblx0XHRcdC5tYXAoc3ltID0+IHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXHRcdFx0Ym9keSA9IGJvZHkuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcblx0XHRcdGZvciAoY29uc3QgcmF3UXVvdGUgb2YgYm9keSkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0b2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcblx0XHRcdFx0XHRiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG5cdFx0XHRcdFx0YXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIG9iaiA9IG9ialtzeW1ib2xzWzBdXTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRnZXRDaGFydERhdGEoY29tcHJlc3Npb246IG51bWJlcikge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEoXG5cdFx0XHRcdHRoaXMuaW5zdHJ1bWVudElELFxuXHRcdFx0XHRjb21wcmVzc2lvbixcblx0XHRcdFx0YXJndW1lbnRzWzFdLFxuXHRcdFx0XHRhcmd1bWVudHNbMl0sXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uLCBhcmd1bWVudHNbMV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0c3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQ6IHN0cmluZywgY29tcHJlc3Npb246IG51bWJlcik6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuXHRcdGxldCB0aW1lUGFyYW1zO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVFbmQgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YS5zcGxpdChcInxcIikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbi8qKlxuICogQGNsYXNzIFVzZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHVzZXIgb2JqZWN0LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0LXVzZXJ9XG4gKi9cbmNsYXNzIFVzZXIge1xuXHRjb3VudHJ5SUQ6IHN0cmluZztcblx0ZW1haWxBZGRyZXNzOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYW5ndWFnZUlEOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdHBob25lTnVtYmVyOiBzdHJpbmc7XG5cdHJlZmVycmFsQ29kZTogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0d2xwSUQ6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHVzQ2l0aXplbjogYm9vbGVhbjtcblx0bGFzdExvZ2luV2hlbjogc3RyaW5nO1xuXHRjaXRpemVuc2hpcDogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTE6IHN0cmluZztcblx0YWRkcmVzc0xpbmUyOiBzdHJpbmc7XG5cdGNpdHk6IHN0cmluZztcblx0c3RhdGVQcm92aW5jZTogc3RyaW5nO1xuXHR6aXBQb3N0YWxDb2RlOiBzdHJpbmc7XG5cdGZ1bGxOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IEFQUFJPVkVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRUpFQ1RFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVWT0tFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQ0xPU0VEXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdEFQUFJPVkVEOiAyLFxuXHRcdFJFSkVDVEVEOiAzLFxuXHRcdFJFVk9LRUQ6IDQsXG5cdFx0Q0xPU0VEOiA1LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBET0NVTUVOVF9UWVBFU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBST09GX09GX0FERFJFU1Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBET0NVTUVOVF9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0QWNjb3VudHMoKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0Y29uc3Qga2V5ID0gYXJndW1lbnRzWzFdO1xuXHRcdGlmICgha2V5KSB7XG5cdFx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0XHRcdGZvciAoY29uc3Qgc2V0dGluZyBvZiBib2R5KSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmb3JtYXR0ZWREYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS52YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRnZXRTZXR0aW5ncygpIHtcblx0XHRjb25zdCBba2V5XSA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gVXNlci5nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRrZXksIHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRzZXRTZXR0aW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1bnNldFNldHRpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy91c2VyLXN0YXR1c31cblx0ICovXG5cdGdldFN0YXR1cygpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBVc2VyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdFx0YXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuXHRcdFx0XHRhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcblx0XHRcdFx0bGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuXHRcdFx0XHRvc1R5cGU6IFwidW5rbm93blwiLFxuXHRcdFx0XHRvc1ZlcnNpb246IFwidW5rbm93blwiLFxuXHRcdFx0XHRzY3JSZXM6IFwidW5rbm93blwiLFxuXHRcdFx0XHRpcEFkZHJlc3M6IFwidW5rbm93blwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMuc2F2ZShib2R5LnVzZXJJRCwgYm9keS5zZXNzaW9uS2V5KTtcblx0XHRcdHJldHVybiBVc2VyLmdldEJ5VXNlcklEKGJvZHkudXNlcklEKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuXHRcdH0pLnRoZW4oXG5cdFx0XHQoKSA9PiBmYWxzZSxcblx0XHRcdChyZWplY3Rpb24pID0+IHJlamVjdGlvbi5zdGF0dXNDb2RlID09PSA0MDRcblx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdDogUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9naW5BdXRvbWF0aWNhbGx5IC0gSWYgZmFsc2UsIG5vIHNlc3Npb24gd2lsbCBiZSBjcmVhdGVkLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHVuZGVmaW5lZCB8IFVzZXI+fSBJZiBsb2dpbkF1dG9tYXRpY2FsbHkgaXMgdHJ1ZSwgYSBVc2VyIHdpbGwgYmUgcmVzb2x2ZWQuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHtcblx0XHR1c2VybmFtZSxcblx0XHRwYXNzd29yZCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRyZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuXHRcdHV0bUNhbXBhaWduLFxuXHRcdHV0bUNvbnRlbnQsXG5cdFx0dXRtTWVkaXVtLFxuXHRcdHV0bVNvdXJjZSxcblx0XHR1dG1UZXJtLFxuXHR9LCBsb2dpbkF1dG9tYXRpY2FsbHk6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTx2b2lkIHwgVXNlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHdscElEOiBDb25maWcud2xwSUQsXG5cdFx0XHRcdHJlZmVycmFsQ29kZSxcblx0XHRcdFx0dXRtQ2FtcGFpZ24sXG5cdFx0XHRcdHV0bUNvbnRlbnQsXG5cdFx0XHRcdHV0bU1lZGl1bSxcblx0XHRcdFx0dXRtU291cmNlLFxuXHRcdFx0XHR1dG1UZXJtLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcblx0XHRcdFx0cmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKi9cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGUsXG5cdH0pIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1cGxvYWREb2N1bWVudChmaWxlOiBGaWxlLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51cGxvYWREb2N1bWVudCh0aGlzLnVzZXJJRCwgZmlsZSwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwbG9hZERvY3VtZW50KHVzZXJJRDogc3RyaW5nLCBmaWxlOiBGaWxlLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgZm9yIGVzbGludFxuXHRcdC8qIGdsb2JhbCBGb3JtRGF0YSAqL1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9kb2N1bWVudHNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRDcmVkaXRDYXJkcygpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gVXNlci5nZXRDcmVkaXRDYXJkcyh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldENyZWRpdENhcmRzKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRhZGRDcmVkaXRDYXJkKGNhcmRUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gVXNlci5hZGRDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkVG9rZW4pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBhZGRDcmVkaXRDYXJkKHVzZXJJRDogc3RyaW5nLCBjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7IGNhcmRUb2tlbiB9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHJlbW92ZUNyZWRpdENhcmQoY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci5yZW1vdmVDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkSUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyByZW1vdmVDcmVkaXRDYXJkKHVzZXJJRDogc3RyaW5nLCBjYXJkSUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHMvJHtjYXJkSUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9