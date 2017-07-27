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
	
				var params = {
					method: method,
					endpoint: "/users/" + userID + "/accounts/" + accountID + "/subscriptions",
					sessionKey: _Sessions2.default.get(userID),
					body: method.startsWith("P") && _defineProperty({
						planID: planID
					}, paymentID.startsWith("card") ? "cardID" : "bankAccountID", paymentID)
				};
	
				return (0, _request2.default)(Object.keys(params).filter(function (key) {
					return params[key];
				}).reduce(function (x, y) {
					return Object.assign({}, x, _defineProperty({}, y, params[y]));
				}, {})).then(function (_ref7) {
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
								if (order.ordRejReason !== undefined) {
									return reject(order.ordRejReason);
								}
	
								if (retries <= 0) return resolve(order);
	
								if (order.status !== Order.STATUSES.NEW && order.status !== Order.STATUSES.PARTIAL_FILL) {
									return resolve(order);
								}
								setTimeout(checkStatus, fillRetryInterval);
							}, function (error) {
								reject(error);
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
				} else {
					return Instrument.getChartData(this.instrumentID, compression, arguments[1]);
				}
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
	
	
	function _getSettings(userID, key) {
		return (0, _request2.default)({
			method: "GET",
			endpoint: "/users/" + userID + "/settings/" + key,
			sessionKey: _Sessions2.default.get(userID)
		}).then(function (_ref11) {
			var body = _ref11.body;
			return body;
		});
	}
	
	function _getAllSettings(userID) {
		return (0, _request2.default)({
			method: "GET",
			endpoint: "/users/" + userID + "/settings",
			sessionKey: _Sessions2.default.get(userID)
		}).then(function (data) {
			var formattedData = {};
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;
	
			try {
				for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var setting = _step2.value;
	
					formattedData[setting.key] = setting.value;
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
	
			return formattedData;
		});
	}
	
	function _setSetting(userID, key, value) {
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
	
	exports.default = User;
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMjVhNTM2ODAyMGFkNDMxMTUxNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwicGFyYW1zIiwic3RhcnRzV2l0aCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJyZWR1Y2UiLCJ4IiwieSIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwidW5kZWZpbmVkIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJBTExPV0VEX1RZUEVTIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiREVQT1NJVF9BTkRfV0lUSERSQVciLCJ0b0lTT1N0cmluZyIsInRyYW5zYWN0aW9uIiwidXJsIiwiZ2V0UXVvdGUiLCJzeW1ib2wiLCJjb21wcmVzc2lvbiIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJUUkFERV9TVEFUVVNFUyIsIklOQUNUSVZFIiwiQUNUSVZFIiwiQ0hBUlRfQ09NUFJFU1NJT05TIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldExpc3RGb3JVc2VySUQiLCJnZXRTZXR0aW5ncyIsInZhbHVlIiwic2V0U2V0dGluZyIsInJlbW92ZSIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsImdldENyZWRpdENhcmRzIiwiY2FyZFRva2VuIiwiYWRkQ3JlZGl0Q2FyZCIsImNhcmRJRCIsInJlbW92ZUNyZWRpdENhcmQiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwicmVqZWN0aW9uIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiRE9DVU1FTlRfVFlQRVMiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiLCJfZ2V0U2V0dGluZ3MiLCJfZ2V0QWxsU2V0dGluZ3MiLCJfc2V0U2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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O0FBQ0EsR0FWTSxDQUFQO0FBV0E7O0FBRUQsVUFBU3lDLFdBQVQsQ0FBcUJsVCxNQUFyQixFQUFxQ21ELEdBQXJDLEVBQWtENE0sS0FBbEQsRUFBaUU7QUFDaEUsU0FBTyx1QkFBUTtBQUNkdk8sV0FBUSxNQURNO0FBRWRDLHlCQUFvQnpCLE1BQXBCLGNBRmM7QUFHZDBCLGVBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsU0FBTTtBQUNMc0IsWUFESyxFQUNBNE07QUFEQTtBQUpRLEdBQVIsRUFPSm5PLElBUEksQ0FPQztBQUFBLFVBQU1rRyxTQUFOO0FBQUEsR0FQRCxDQUFQO0FBUUE7O21CQUVjdkksSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGEyNWE1MzY4MDIwYWQ0MzExNTE0IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEVOVklST05NRU5UUyxcblx0SE9TVFMsXG5cblx0QWNjb3VudCxcblx0Q29uZmlnLFxuXHRFcnJvcixcblx0RnVuZGluZyxcblx0SW5zdHJ1bWVudCxcblx0T3JkZXIsXG5cdFJlcG9ydHMsXG5cdFVzZXIsXG5cdFNlc3Npb25zLFxuXG5cdHNldHVwLFxuXHRyZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyUGFyZW50RGV0YWlscyB9IGZyb20gXCIuL09yZGVyXCI7XG5cbmV4cG9ydCB0eXBlIENvbW1pc3Npb25TY2hlZHVsZSA9IHtcblx0YmFzZVJhdGU6IG51bWJlcixcblx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdGZyYWN0aW9uYWxSYXRlOiBudW1iZXIsXG5cdHNoYXJlQW1vdW50Um91bmRpbmc6IG51bWJlcixcblx0c3Vic2NyaXB0aW9uOiBib29sZWFuLFxuXHRiYXNrZXRTY2hlZHVsZToge1xuXHRcdGJhc2VTaGFyZXM6IG51bWJlcixcblx0XHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdFx0c2NoZWR1bGU6IEFycmF5PHtcblx0XHRcdGJhc2tldFNpemU6IG51bWJlcixcblx0XHRcdGJhc2tldFByaWNlOiBudW1iZXIsXG5cdFx0fT4sXG5cdH0sXG5cdHBhc3NUaHJvdWdoRmVlczogYm9vbGVhbixcbn07XG5cbi8qKlxuICogQGNsYXNzIEFjY291bnRcbiAqIEBkZXNjcmlwdGlvbiBBbiBhY2NvdW50IGJlbG9uZ2luZyB0byBhIFVzZXIuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2FjY291bnRzX2dldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0YWNjb3VudFR5cGU6IHN0cmluZztcblx0Y3VycmVuY3lJRDogc3RyaW5nO1xuXHRpYklEOiBzdHJpbmc7XG5cdG1hcmdpbjogc3RyaW5nO1xuXHRuaWNrbmFtZTogc3RyaW5nO1xuXHRvcGVuZWRXaGVuOiBzdHJpbmc7XG5cdHBhdHRlcm5EYXlUcmFkZXM6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHRyYWRpbmdUeXBlOiBzdHJpbmc7XG5cdGFjY291bnRNZ210VHlwZTogc3RyaW5nO1xuXHRjb21taXNzaW9uU2NoZWR1bGU6IENvbW1pc3Npb25TY2hlZHVsZTtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIEJMT1RURVJfVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVNIXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPUkRFUlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFRSQU5TQUNUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUE9TSVRJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTExcblx0ICovXG5cdHN0YXRpYyBCTE9UVEVSX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106ID9zdHJpbmd9ID0ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOX05PX05FV19UUkFERVNcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQUkFDVElDRVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTElWRVxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRCbG90dGVyKHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRCbG90dGVyKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJsb3R0ZXIodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nLCB0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRTdW1tYXJ5L2Bcblx0XHRcdFx0KyBgJHthY2NvdW50SUR9JHt0eXBlID8gXCIvXCIgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmIChib2R5Lm9yZGVycykge1xuXHRcdFx0XHRib2R5Lm9yZGVycyA9IGJvZHkub3JkZXJzLm1hcCgob3JkZXIpID0+IG5ldyBPcmRlcihvcmRlcikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHR5cGUgPyBib2R5W3R5cGVdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0Z2V0UGVyZm9ybWFuY2UoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRQZXJmb3JtYW5jZSh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIC4uLmFyZ3VtZW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdHN0YXRpYyBnZXRQZXJmb3JtYW5jZSh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSBhcmd1bWVudHNbM107XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7YWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnBlcmZvcm1hbmNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHBsYWNlT3JkZXIodHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpOiBQcm9taXNlPHN0cmluZyB8IE9iamVjdD4ge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHM6IE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0RnVuZGluZ01ldGhvZHMob3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRvcHRpb25zLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdG9wdGlvbnMuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMob3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjcmVhdGUodXNlcklEOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG5cdFx0aWYgKHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0UpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcblx0XHRcdFx0dHJhbkFtb3VudDogZGF0YSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG5cdFx0XHRcdD8gXCIvc2lnbnVwcy9wcmFjdGljZVwiXG5cdFx0XHRcdDogXCIvc2lnbnVwcy9saXZlXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBjaGFuZ2VTdWJzY3JpcHRpb24obWV0aG9kOiBzdHJpbmcsIHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdHBsYW5JRCxcblx0XHRwYXltZW50SUQsXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRwbGFuSUQ6IHN0cmluZyxcblx0XHRwYXltZW50SUQ6IHN0cmluZyxcblx0fSk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzLyR7YWNjb3VudElEfS9zdWJzY3JpcHRpb25zYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogbWV0aG9kLnN0YXJ0c1dpdGgoXCJQXCIpICYmIHtcblx0XHRcdFx0cGxhbklELFxuXHRcdFx0XHRbcGF5bWVudElELnN0YXJ0c1dpdGgoXCJjYXJkXCIpID8gXCJjYXJkSURcIiA6IFwiYmFua0FjY291bnRJRFwiXTogcGF5bWVudElELFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlcXVlc3QoXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpXG5cdFx0XHRcdC5maWx0ZXIoa2V5ID0+IHBhcmFtc1trZXldKVxuXHRcdFx0XHQucmVkdWNlKCh4LCB5KSA9PiBPYmplY3QuYXNzaWduKHt9LCB4LCB7IFt5XTogcGFyYW1zW3ldIH0pLCB7fSksXG5cdFx0KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIkdFVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUE9TVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUFVUXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWxTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJERUxFVEVcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRleHRyYWN0SURzKG9wdGlvbnM6IE9iamVjdCk6IE9iamVjdCB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0U3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmFkZFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQudXBkYXRlU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWxTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jYW5jZWxTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuLyoqXG4gKiBAZnVuY3Rpb24gcmVxdWVzdFxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGx5LCBpdCBpcyB1bm5lY2Vzc2FyeSB0byB1c2UgdGhpcyBmdW5jdGlvbiBhbmQgdGhpcyBpcyBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuIENhbGwgcmVxdWVzdCgpIGlmIHlvdSBuZWVkIHRvIG1ha2UgYSBjdXN0b20gQVBJIGNhbGwgdGhhdCBpcyBub3QgY292ZXJlZCBieSBhbm90aGVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZW5kcG9pbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlc3Npb25LZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdGlvbnMuYWRkbEhlYWRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhvc3QgLSBPbmUgb2YgQ29uZmlnLkhPU1RTXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48e2JvZHk6IHN0cmluZywgc3RhdHVzQ29kZTogbnVtYmVyLCBoZWFkZXJzOiBPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fT59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuXHRtZXRob2QgPSBcIkdFVFwiLFxuXHRlbmRwb2ludCxcblx0c2Vzc2lvbktleSxcblx0Ym9keSxcblx0YWRkbEhlYWRlcnMgPSB7fSxcblx0aG9zdCA9IEhPU1RTLkFQSSxcbn06IHtcblx0bWV0aG9kPzogc3RyaW5nLFxuXHRlbmRwb2ludDogc3RyaW5nLFxuXHRzZXNzaW9uS2V5Pzogc3RyaW5nLFxuXHRib2R5PzogYW55LFxuXHRhZGRsSGVhZGVycz86IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9LFxuXHRob3N0Pzogc3RyaW5nLFxufSkge1xuXHRjb25zdCBoZWFkZXJzOiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHR9O1xuXHRpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcblx0XHRoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5cdH1cblx0aWYgKHNlc3Npb25LZXkpIHtcblx0XHRoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuXHR9XG5cdGZvciAoY29uc3QgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG5cdFx0aGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcblx0fVxuXG5cdGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG5cdGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Q29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuXHRcdFx0aWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG5cdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IHJlc0JvZHksXG5cdFx0XHRcdFx0c3RhdHVzQ29kZSxcblx0XHRcdFx0XHRoZWFkZXJzOiByZXNIZWFkZXJzLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBlcnJvck1lc3NhZ2U7XG5cdFx0XHRcdGlmIChyZXNCb2R5KSB7XG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGVycm9yID0gc3RhdHVzQ29kZSA9PT0gNDAxXG5cdFx0XHRcdFx0PyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKVxuXHRcdFx0XHRcdDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsIi8qKlxuICogQG5hbWVzcGFjZSBDb25maWdcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcblx0ZW52OiBudWxsLFxuXHRodHRwSW1wbDogbnVsbCxcblx0YXBwVHlwZUlEOiBudWxsLFxuXHRhcHBWZXJzaW9uOiBudWxsLFxuXHR3bHBJRDogbnVsbCxcblx0YXBwc1BhcnRuZXJJRDogbnVsbCxcblx0cmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBIT1NUU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQSVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQUFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRVBPUlRTXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuXHRBUEk6IFwiYXBpXCIsXG5cdEFQUFM6IFwiYXBwc1wiLFxuXHRSRVBPUlRTOiBcInJlcG9ydHNcIixcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgRU5WSVJPTk1FTlRTXG4gKiBAcHJvcGVydHkge29iamVjdH0gVUFUXG4gKiBAcHJvcGVydHkge29iamVjdH0gUFJPRFxuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG5cdFVBVDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcblx0fSxcblx0UFJPRDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcblx0fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG5cdGVudixcblx0aHR0cEltcGwsXG5cdGFwcFR5cGVJRCxcblx0YXBwVmVyc2lvbixcblx0d2xwSUQgPSBcIkRXXCIsXG5cdGFwcHNQYXJ0bmVySUQsXG5cdHJlZmVycmFsQ29kZSxcbn0pIHtcblx0Q29uZmlnLmVudiA9IGVudjtcblx0Q29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG5cdENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG5cdENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcblx0Q29uZmlnLndscElEID0gd2xwSUQ7XG5cdENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcblx0Q29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdERyaXZlV2VhbHRoRXJyb3IsXG5cdERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuaW1wb3J0IHR5cGUgeyBDb21taXNzaW9uU2NoZWR1bGUgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgdHlwZSBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcblxuY29uc3QgU0VDX0ZFRV9SQVRFID0gMC4wMDAwMjMxO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IHR5cGUgT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRhY2NvdW50SUQ6IHN0cmluZyxcblx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdHVzZXJJRDogc3RyaW5nLFxuXHRhY2NvdW50VHlwZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIE5ld09yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRzaWRlOiBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG5cdHByaWNlPzogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIE5ld0NhcnRPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIE9yZGVyXG4gKiBAZGVzY3JpcHRpb24gQW4gb3JkZXIgY3JlYXRlZCBmb3IgYW4gQWNjb3VudC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X21hcmtldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cdG9yZGVySUQ6IHN0cmluZztcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRjdW1RdHk6IG51bWJlcjtcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdGNvbW1lbnQ6IHN0cmluZztcblx0Y29tbWlzc2lvbjogbnVtYmVyO1xuXHRjcmVhdGVkQnlJRDogc3RyaW5nO1xuXHRjcmVhdGVkV2hlbjogc3RyaW5nO1xuXHRleGVjdXRlZFdoZW46IHN0cmluZztcblx0Z3Jvc3NUcmFkZUFtdDogbnVtYmVyO1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bGVhdmVzUXR5OiBzdHJpbmc7XG5cdG9yZGVyTm86IHN0cmluZztcblx0b3JkZXJRdHk6IG51bWJlcjtcblx0c2lkZTogc3RyaW5nO1xuXHRhdXRvU3RvcDogP251bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHJlamVjdGlvblJlYXNvbjogP3N0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHR5cGU6IG51bWJlcjtcblx0cHJpY2U6ID9udW1iZXI7XG5cdGVmZmVjdGl2ZVByaWNlOiA/bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU0lERVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQlVZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUxMXG5cdCAqL1xuXHRzdGF0aWMgU0lERVM6IHtbc2lkZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQVJLRVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IExJTUlUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVE9QXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTkVXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUFMX0ZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIE9yZGVyLmNhbmNlbCh0aGlzLm9yZGVySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IE9yZGVyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIElmIHdhaXRGb3JGaWxsIGlzIHRydWUsIGFuIE9yZGVyIHdpbGwgYmUgcmV0dXJuZWQuIE90aGVyd2lzZSwgYW4gb3JkZXJJRCB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZShcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0e1xuXHRcdFx0YWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0dXNlcklELFxuXHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0fTogT3JkZXJQYXJlbnREZXRhaWxzLFxuXHRcdHtcblx0XHRcdG9yZGVyOiB7XG5cdFx0XHRcdGluc3RydW1lbnQsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdHF0eSxcblx0XHRcdFx0YW1vdW50Q2FzaCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlLFxuXHRcdFx0fSxcblx0XHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRcdGZpbGxSZXRyeUludGVydmFsID0gMTAwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXI6IE5ld09yZGVyLFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHN0cmluZyB8IE9yZGVyPiB7XG5cdFx0aWYgKGFtb3VudENhc2ggJiYgcXR5KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwicXR5XFxcIiBhbmQgXFxcImFtb3VudENhc2hcXFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXCIpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQpIHtcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMjtcblxuXHRcdFx0aWYgKCFwcmljZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJMaW1pdCBhbmQgc3RvcCBvcmRlcnMgcmVxdWlyZSBhIFxcXCJwcmljZS5cXFwiXCIpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoYXV0b1N0b3ApIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcImF1dG9TdG9wXFxcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuXCIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5IHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogYW1vdW50Q2FzaCB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGJvZHkub3JkZXJJRDtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQoYm9keS5vcmRlcklEKS50aGVuKG9yZGVyID0+IHtcblx0XHRcdFx0XHRcdGlmIChvcmRlci5vcmRSZWpSZWFzb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVqZWN0KG9yZGVyLm9yZFJlalJlYXNvbik7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyKTtcblxuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FV1xuXHRcdFx0XHRcdFx0XHQmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCB1c2VySUQsIChlcnJvciwgc3RhdHVzRGV0YWlscykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aGlzU3RhdHVzID0gb3JkZXJzTWFwW3JlZmVyZW5jZV0uc3RhdHVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXNTdGF0dXNcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUob3JkZXJzTWFwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihcblx0XHRvcmRlcnM6IEFycmF5PHtcblx0XHRcdHNpZGU6IHN0cmluZyxcblx0XHRcdHF0eTogbnVtYmVyLFxuXHRcdFx0bWFya2V0UHJpY2U6IG51bWJlcixcblx0XHRcdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdFx0fT4sXG5cdFx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGUsXG5cdCk6IHtcblx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdG11bHRpcGxlT3JkZXJEZWx0YTogbnVtYmVyLFxuXHRcdGJ5T3JkZXI6IHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IHtcblx0XHRcdHRvdGFsOiBudW1iZXIsXG5cdFx0XHRjb21taXNzaW9uOiBudW1iZXIsXG5cdFx0XHRmZWVzOiB7XG5cdFx0XHRcdHNlYzogbnVtYmVyLFxuXHRcdFx0XHR0YWY6IG51bWJlcixcblx0XHRcdH0sXG5cdFx0fX1cblx0fSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcyksXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDA7XG5cdFx0XHRsZXQgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG4vKipcbiAqIEBjbGFzcyBGdW5kaW5nXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGZ1bmRpbmcgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXHQvKipcblx0ICogQG5hbWUgQUxMT1dFRF9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IERFUE9TSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFdJVEhEUkFXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUX0FORF9XSVRIRFJBV1xuXHQgKi9cblx0c3RhdGljIEFMTE9XRURfVFlQRVMgPSB7XG5cdFx0REVQT1NJVDogXCJERVBPU0lUXCIsXG5cdFx0V0lUSERSQVc6IFwiV0lUSERSQVdcIixcblx0XHRERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IGJvZHkuZGF0YS5tYXAoKHByaWNpbmcpID0+XG5cdFx0XHRcdFtdLmNvbmNhdChwcmljaW5nKVxuXHRcdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHRcdC5tYXAocHJpY2UgPT4gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0XHR7IGFtb3VudDogTnVtYmVyKHByaWNlLmFtb3VudCAvIDEwMCkgfSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdClbMF07XG5cblx0XHRcdHJldHVybiBwcmljaW5nO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuLyoqXG4gKiBAY2xhc3MgUmVwb3J0c1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBhY2NvdW50IHJlcG9ydHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYW5zYWN0aW9ucyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPUZpblRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9T3JkZXJUcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN0YXRlbWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDJcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYWRlQ29uZmlybXMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDFcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRheERvY3VtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wM1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTChcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRmaWxlS2V5OiBzdHJpbmcsXG5cdCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS51cmwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2NvdW50cmllc1wiLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVwb3J0cy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuZXhwb3J0IHR5cGUgUXVvdGUgPSB7XG5cdGJpZDogbnVtYmVyLFxuXHRhc2s6IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIEluc3RydW1lbnRcbiAqIEBkZXNjcmlwdGlvbiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXRfaW5zdHJ1bWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVtZW50IHtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdG5hbWU6IHN0cmluZztcblx0ZXhjaGFuZ2VJRDogc3RyaW5nO1xuXHRpbnN0cnVtZW50VHlwZUlEOiBzdHJpbmc7XG5cdG9yZGVyU2l6ZU1heDogbnVtYmVyO1xuXHRvcmRlclNpemVNaW46IG51bWJlcjtcblx0b3JkZXJTaXplU3RlcDogbnVtYmVyO1xuXHRyYXRlQXNrOiBudW1iZXI7XG5cdHJhdGVCaWQ6IG51bWJlcjtcblx0cmF0ZVByZWNpc2lvbjogbnVtYmVyO1xuXHRzeW1ib2w6IHN0cmluZztcblx0dHJhZGVTdGF0dXM6IHN0cmluZztcblx0dXJsSW1hZ2U6IHN0cmluZztcblx0dXJsSW52ZXN0b3I6IHN0cmluZztcblx0Y2hhaWtpblBncjogc3RyaW5nO1xuXHRwcmlvckNsb3NlOiBudW1iZXI7XG5cdG1hcmtldFN0YXRlOiBudW1iZXI7XG5cdGZ1bmRhbWVudGFsRGF0YU1vZGVsOiBPYmplY3Q7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBUUkFERV9TVEFUVVNFU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IElOQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFRSQURFX1NUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRJTkFDVElWRTogXCIwXCIsXG5cdFx0QUNUSVZFOiBcIjFcIixcblx0XHRDTE9TRUQ6IFwiMlwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBDSEFSVF9DT01QUkVTU0lPTlNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBEQVlcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8xXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfNVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzMwXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBIT1VSXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBXRUVLXG5cdCAqL1xuXHRzdGF0aWMgQ0hBUlRfQ09NUFJFU1NJT05TOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHREQVk6IDAsXG5cdFx0TUlOVVRFXzE6IDEsXG5cdFx0TUlOVVRFXzU6IDQsXG5cdFx0TUlOVVRFXzMwOiA4LFxuXHRcdEhPVVI6IDksXG5cdFx0V0VFSzogMTAsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeVN5bWJvbChzeW1ib2w6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+IHwgSW5zdHJ1bWVudD4ge1xuXHRcdGNvbnN0IHN5bWJvbHMgPSB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gW3N5bWJvbF0gOiBzeW1ib2w7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGJvZHkgPSBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKTtcblx0XHRcdHJldHVybiB0eXBlb2Ygc3ltYm9sID09PSBcInN0cmluZ1wiID8gYm9keVswXSA6IGJvZHk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5SUQoaWQ6IHN0cmluZywgaW5jbHVkZUZ1bmRhbWVudGFsczogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPEluc3RydW1lbnQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cy8ke2lkfSR7aW5jbHVkZUZ1bmRhbWVudGFscyA/IFwiP29wdGlvbnM9RlwiIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBJbnN0cnVtZW50KGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QWxsKHRyYWRlU3RhdHVzPzogc3RyaW5nID0gXCItMVwiKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3RyYWRlU3RhdHVzPSR7dHJhZGVTdGF0dXN9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNlYXJjaChjcml0ZXJpYTogeyBuYW1lPzogc3RyaW5nLCBzeW1ib2w/OiBzdHJpbmcgfSk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIj9cIjtcblx0XHRpZiAoY3JpdGVyaWEuc3ltYm9sKSBxdWVyeVN0cmluZyArPSBgc3ltYm9sPSR7Y3JpdGVyaWEuc3ltYm9sfSZgO1xuXHRcdGlmIChjcml0ZXJpYS5uYW1lKSBxdWVyeVN0cmluZyArPSBgbmFtZT0ke2NyaXRlcmlhLm5hbWV9JmA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChpbnN0cnVtZW50ID0+IG5ldyBJbnN0cnVtZW50KGluc3RydW1lbnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRRdW90ZSgpOiBQcm9taXNlPFF1b3RlPiB7XG5cdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0UXVvdGUodGhpcy5zeW1ib2wpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRRdW90ZShzeW1ib2w6IHN0cmluZyB8IEluc3RydW1lbnQgfCBBcnJheTxzdHJpbmc+IHwgQXJyYXk8SW5zdHJ1bWVudD4pOiBQcm9taXNlPFF1b3RlIHwge1tzeW1ib2w6IHN0cmluZ106IFF1b3RlfT4ge1xuXHRcdGNvbnN0IHN5bWJvbHM6IEFycmF5PHN0cmluZz4gPSAoQXJyYXkuaXNBcnJheShzeW1ib2wpID8gc3ltYm9sIDogW3N5bWJvbF0pXG5cdFx0XHQubWFwKHN5bSA9PiBzeW0gaW5zdGFuY2VvZiBJbnN0cnVtZW50ID8gc3ltLnN5bWJvbCA6IHN5bSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9xdW90ZXM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0QWNjZXB0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGxldCBvYmogPSB7fTtcblx0XHRcdGJvZHkgPSBib2R5LnNwbGl0KFwifFwiKS5zbGljZSgxMCk7XG5cdFx0XHRmb3IgKGNvbnN0IHJhd1F1b3RlIG9mIGJvZHkpIHtcblx0XHRcdFx0Y29uc3QgcGFyc2VkUXVvdGUgPSByYXdRdW90ZS5zcGxpdChcIixcIik7XG5cdFx0XHRcdG9ialtwYXJzZWRRdW90ZVswXV0gPSB7XG5cdFx0XHRcdFx0YmlkOiBOdW1iZXIocGFyc2VkUXVvdGVbMV0pLFxuXHRcdFx0XHRcdGFzazogTnVtYmVyKHBhcnNlZFF1b3RlWzJdKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShzeW1ib2wpKSBvYmogPSBvYmpbc3ltYm9sc1swXV07XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0Z2V0Q2hhcnREYXRhKGNvbXByZXNzaW9uOiBudW1iZXIpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuXHRcdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbiwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uLCBhcmd1bWVudHNbMV0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdHN0YXRpYyBnZXRDaGFydERhdGEoaW5zdHJ1bWVudElEOiBzdHJpbmcsIGNvbXByZXNzaW9uOiBudW1iZXIpOiBQcm9taXNlPEFycmF5PHN0cmluZz4+IHtcblx0XHRsZXQgdGltZVBhcmFtcztcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0Y29uc3QgZGF0ZVN0YXJ0ID0gYXJndW1lbnRzWzJdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG5cdFx0XHRjb25zdCBkYXRlRW5kID0gYXJndW1lbnRzWzNdLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvXFwuXFxkezN9LywgXCJcIik7XG5cdFx0XHR0aW1lUGFyYW1zID0gYGRhdGVTdGFydD0ke2RhdGVTdGFydH0mZGF0ZUVuZD0ke2RhdGVFbmR9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGltZVBhcmFtcyA9IGB0cmFkaW5nRGF5cz0ke2FyZ3VtZW50c1syXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2JhcnM/aW5zdHJ1bWVudElEPSR7aW5zdHJ1bWVudElEfSZjb21wcmVzc2lvbj0ke2NvbXByZXNzaW9ufSYke3RpbWVQYXJhbXN9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LmRhdGEuc3BsaXQoXCJ8XCIpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW5zdHJ1bWVudC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuXG4vKipcbiAqIEBjbGFzcyBVc2VyXG4gKiBAZGVzY3JpcHRpb24gQSB1c2VyIG9iamVjdC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldC11c2VyfVxuICovXG5jbGFzcyBVc2VyIHtcblx0Y291bnRyeUlEOiBzdHJpbmc7XG5cdGVtYWlsQWRkcmVzczogc3RyaW5nO1xuXHRmaXJzdE5hbWU6IHN0cmluZztcblx0bGFuZ3VhZ2VJRDogc3RyaW5nO1xuXHRsYXN0TmFtZTogc3RyaW5nO1xuXHRwaG9uZU51bWJlcjogc3RyaW5nO1xuXHRyZWZlcnJhbENvZGU6IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdHVzZXJuYW1lOiBzdHJpbmc7XG5cdHdscElEOiBzdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR1c0NpdGl6ZW46IGJvb2xlYW47XG5cdGxhc3RMb2dpbldoZW46IHN0cmluZztcblx0Y2l0aXplbnNoaXA6IHN0cmluZztcblx0YWRkcmVzc0xpbmUxOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMjogc3RyaW5nO1xuXHRjaXR5OiBzdHJpbmc7XG5cdHN0YXRlUHJvdmluY2U6IHN0cmluZztcblx0emlwUG9zdGFsQ29kZTogc3RyaW5nO1xuXHRmdWxsTmFtZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5mdWxsTmFtZSA9IGRhdGEuZmlyc3ROYW1lICsgXCIgXCIgKyBkYXRhLmxhc3ROYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBBUFBST1ZFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVKRUNURURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFVk9LRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IENMT1NFRFxuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UEVORElORzogMSxcblx0XHRBUFBST1ZFRDogMixcblx0XHRSRUpFQ1RFRDogMyxcblx0XHRSRVZPS0VEOiA0LFxuXHRcdENMT1NFRDogNSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgRE9DVU1FTlRfVFlQRVNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1Ncblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgRE9DVU1FTlRfVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRQSE9UT19JRDogXCJQaWN0dXJlIElEXCIsXG5cdFx0UFJPT0ZfT0ZfQUREUkVTUzogXCJQcm9vZiBvZiBhZGRyZXNzXCIsXG5cdFx0UEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTOiBcIlBpY3R1cmUgSURfUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEFjY291bnRzKCk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdHN0YXRpYyBnZXRTZXR0aW5ncyh1c2VySUQ6IHN0cmluZykge1xuXHRcdGNvbnN0IGtleSA9IGFyZ3VtZW50c1sxXTtcblx0XHRpZiAoIWtleSkge1xuXHRcdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHNldHRpbmcgb2YgYm9keSkge1xuXHRcdFx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZm9ybWF0dGVkRGF0YTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0Z2V0U2V0dGluZ3MoKSB7XG5cdFx0Y29uc3QgW2tleV0gPSBhcmd1bWVudHM7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0U2V0dGluZ3ModGhpcy51c2VySUQsIGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHNldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0a2V5LCB2YWx1ZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0c2V0U2V0dGluZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnNldFNldHRpbmcodGhpcy51c2VySUQsIGtleSwgdmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dW5zZXRTZXR0aW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBkZXNjcmlwdGlvbiBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvdXNlci1zdGF0dXN9XG5cdCAqL1xuXHRnZXRTdGF0dXMoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zdGF0dXNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdFNlc3Npb25zLnJlbW92ZSh0aGlzLnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5VXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgVXNlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcblx0XHRcdFx0YXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG5cdFx0XHRcdGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcblx0XHRcdFx0b3NUeXBlOiBcInVua25vd25cIixcblx0XHRcdFx0b3NWZXJzaW9uOiBcInVua25vd25cIixcblx0XHRcdFx0c2NyUmVzOiBcInVua25vd25cIixcblx0XHRcdFx0aXBBZGRyZXNzOiBcInVua25vd25cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFNlc3Npb25zLnNhdmUoYm9keS51c2VySUQsIGJvZHkuc2Vzc2lvbktleSk7XG5cdFx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRChib2R5LnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcblx0XHR9KS50aGVuKFxuXHRcdFx0KCkgPT4gZmFsc2UsXG5cdFx0XHQocmVqZWN0aW9uKSA9PiByZWplY3Rpb24uc3RhdHVzQ29kZSA9PT0gNDA0XG5cdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHQ6IFByb21pc2UucmVqZWN0KHJlamVjdGlvbiksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ2luQXV0b21hdGljYWxseSAtIElmIGZhbHNlLCBubyBzZXNzaW9uIHdpbGwgYmUgY3JlYXRlZC5cblx0ICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQgfCBVc2VyPn0gSWYgbG9naW5BdXRvbWF0aWNhbGx5IGlzIHRydWUsIGEgVXNlciB3aWxsIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcblx0XHR1dG1DYW1wYWlnbixcblx0XHR1dG1Db250ZW50LFxuXHRcdHV0bU1lZGl1bSxcblx0XHR1dG1Tb3VyY2UsXG5cdFx0dXRtVGVybSxcblx0fSwgbG9naW5BdXRvbWF0aWNhbGx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZCB8IFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHR3bHBJRDogQ29uZmlnLndscElELFxuXHRcdFx0XHRyZWZlcnJhbENvZGUsXG5cdFx0XHRcdHV0bUNhbXBhaWduLFxuXHRcdFx0XHR1dG1Db250ZW50LFxuXHRcdFx0XHR1dG1NZWRpdW0sXG5cdFx0XHRcdHV0bVNvdXJjZSxcblx0XHRcdFx0dXRtVGVybSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG5cdFx0XHRcdHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlLFxuXHR9KSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBsb2FkRG9jdW1lbnQoZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQ6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIGZvciBlc2xpbnRcblx0XHQvKiBnbG9iYWwgRm9ybURhdGEgKi9cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvZG9jdW1lbnRzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRDcmVkaXRDYXJkcyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIFVzZXIuYWRkQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZFRva2VuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0IHJldHVybiBVc2VyLnJlbW92ZUNyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHJlbW92ZUNyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkcy8ke2NhcmRJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9nZXRTZXR0aW5ncyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xufVxuXG5mdW5jdGlvbiBfZ2V0QWxsU2V0dGluZ3ModXNlcklEOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHR9KS50aGVuKGRhdGEgPT4ge1xuXHRcdGxldCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0Zm9yIChsZXQgc2V0dGluZyBvZiBkYXRhKSB7XG5cdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0fVxuXHRcdHJldHVybiBmb3JtYXR0ZWREYXRhO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gX3NldFNldHRpbmcodXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keToge1xuXHRcdFx0a2V5LCB2YWx1ZSxcblx0XHR9LFxuXHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=