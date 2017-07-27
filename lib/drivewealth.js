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
				if (type !== Order.TYPES.MARKET && !price) {
					throw new Error("Limit and stop orders require a \"price.\"");
				}
				if (type !== Order.TYPES.MARKET && autoStop) {
					throw new Error("\"autoStop\" is only allowed for market orders.");
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
	
					if (type !== Order.TYPES.MARKET) fillMaxRetries = 1;
					if (!waitForFill) return body.orderID;
	
					return new Promise(function (resolve, reject) {
						var retries = fillMaxRetries;
						var checkStatus = function checkStatus() {
							retries -= 1;
							Order.getByID(body.orderID).then(function (order) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzM2NhMjU2MzdlZWYzMDVjYjFjZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwicGFyYW1zIiwic3RhcnRzV2l0aCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJyZWR1Y2UiLCJ4IiwieSIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwidW5kZWZpbmVkIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJBTExPV0VEX1RZUEVTIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiREVQT1NJVF9BTkRfV0lUSERSQVciLCJ0b0lTT1N0cmluZyIsInRyYW5zYWN0aW9uIiwidXJsIiwiZ2V0UXVvdGUiLCJzeW1ib2wiLCJjb21wcmVzc2lvbiIsImdldENoYXJ0RGF0YSIsInN5bWJvbHMiLCJqb2luIiwiaW5jbHVkZUZ1bmRhbWVudGFscyIsInRyYWRlU3RhdHVzIiwiY3JpdGVyaWEiLCJzeW0iLCJvYmoiLCJzcGxpdCIsInJhd1F1b3RlIiwicGFyc2VkUXVvdGUiLCJiaWQiLCJhc2siLCJ0aW1lUGFyYW1zIiwiZGF0ZVN0YXJ0IiwicmVwbGFjZSIsImRhdGVFbmQiLCJUUkFERV9TVEFUVVNFUyIsIklOQUNUSVZFIiwiQUNUSVZFIiwiQ0hBUlRfQ09NUFJFU1NJT05TIiwiREFZIiwiTUlOVVRFXzEiLCJNSU5VVEVfNSIsIk1JTlVURV8zMCIsIkhPVVIiLCJXRUVLIiwiZnVsbE5hbWUiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldExpc3RGb3JVc2VySUQiLCJnZXRTZXR0aW5ncyIsInZhbHVlIiwic2V0U2V0dGluZyIsInJlbW92ZSIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsImdldENyZWRpdENhcmRzIiwiY2FyZFRva2VuIiwiYWRkQ3JlZGl0Q2FyZCIsImNhcmRJRCIsInJlbW92ZUNyZWRpdENhcmQiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwicmVqZWN0aW9uIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiRE9DVU1FTlRfVFlQRVMiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiLCJfZ2V0U2V0dGluZ3MiLCJfZ2V0QWxsU2V0dGluZ3MiLCJfc2V0U2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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OztBQUVELFVBQVN5QyxXQUFULENBQXFCbFQsTUFBckIsRUFBcUNtRCxHQUFyQyxFQUFrRDRNLEtBQWxELEVBQWlFO0FBQ2hFLFNBQU8sdUJBQVE7QUFDZHZPLFdBQVEsTUFETTtBQUVkQyx5QkFBb0J6QixNQUFwQixjQUZjO0FBR2QwQixlQUFZLG1CQUFTQyxHQUFULENBQWEzQixNQUFiLENBSEU7QUFJZDZCLFNBQU07QUFDTHNCLFlBREssRUFDQTRNO0FBREE7QUFKUSxHQUFSLEVBT0puTyxJQVBJLENBT0M7QUFBQSxVQUFNa0csU0FBTjtBQUFBLEdBUEQsQ0FBUDtBQVFBOzttQkFFY3ZJLEkiLCJmaWxlIjoiZHJpdmV3ZWFsdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml2ZXdlYWx0aFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzM2NhMjU2MzdlZWYzMDVjYjFjZiIsImltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IEluc3RydW1lbnQgZnJvbSBcIi4vSW5zdHJ1bWVudFwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuL09yZGVyXCI7XG5pbXBvcnQgUmVwb3J0cyBmcm9tIFwiLi9SZXBvcnRzXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgc2V0dXAsIEVOVklST05NRU5UUywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFTlZJUk9OTUVOVFMsXG5cdEhPU1RTLFxuXG5cdEFjY291bnQsXG5cdENvbmZpZyxcblx0RXJyb3IsXG5cdEZ1bmRpbmcsXG5cdEluc3RydW1lbnQsXG5cdE9yZGVyLFxuXHRSZXBvcnRzLFxuXHRVc2VyLFxuXHRTZXNzaW9ucyxcblxuXHRzZXR1cCxcblx0cmVxdWVzdCxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBGdW5kaW5nIGZyb20gXCIuL0Z1bmRpbmdcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcblxuaW1wb3J0IHR5cGUgeyBPcmRlclBhcmVudERldGFpbHMgfSBmcm9tIFwiLi9PcmRlclwiO1xuXG5leHBvcnQgdHlwZSBDb21taXNzaW9uU2NoZWR1bGUgPSB7XG5cdGJhc2VSYXRlOiBudW1iZXIsXG5cdGJhc2VTaGFyZXM6IG51bWJlcixcblx0ZXhjZXNzUmF0ZTogbnVtYmVyLFxuXHRmcmFjdGlvbmFsUmF0ZTogbnVtYmVyLFxuXHRzaGFyZUFtb3VudFJvdW5kaW5nOiBudW1iZXIsXG5cdHN1YnNjcmlwdGlvbjogYm9vbGVhbixcblx0YmFza2V0U2NoZWR1bGU6IHtcblx0XHRiYXNlU2hhcmVzOiBudW1iZXIsXG5cdFx0ZXhjZXNzUmF0ZTogbnVtYmVyLFxuXHRcdHNjaGVkdWxlOiBBcnJheTx7XG5cdFx0XHRiYXNrZXRTaXplOiBudW1iZXIsXG5cdFx0XHRiYXNrZXRQcmljZTogbnVtYmVyLFxuXHRcdH0+LFxuXHR9LFxuXHRwYXNzVGhyb3VnaEZlZXM6IGJvb2xlYW4sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBBY2NvdW50XG4gKiBAZGVzY3JpcHRpb24gQW4gYWNjb3VudCBiZWxvbmdpbmcgdG8gYSBVc2VyLiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9hY2NvdW50c19nZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCB7XG5cdGFjY291bnRJRDogc3RyaW5nO1xuXHRhY2NvdW50Tm86IHN0cmluZztcblx0dXNlcklEOiBzdHJpbmc7XG5cdGFjY291bnRUeXBlOiBzdHJpbmc7XG5cdGN1cnJlbmN5SUQ6IHN0cmluZztcblx0aWJJRDogc3RyaW5nO1xuXHRtYXJnaW46IHN0cmluZztcblx0bmlja25hbWU6IHN0cmluZztcblx0b3BlbmVkV2hlbjogc3RyaW5nO1xuXHRwYXR0ZXJuRGF5VHJhZGVzOiBzdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR0cmFkaW5nVHlwZTogc3RyaW5nO1xuXHRhY2NvdW50TWdtdFR5cGU6IHN0cmluZztcblx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGU7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBCTE9UVEVSX1RZUEVTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0FTSFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gT1JERVJTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBUUkFOU0FDVElPTlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBPU0lUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUxMXG5cdCAqL1xuXHRzdGF0aWMgQkxPVFRFUl9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiA/c3RyaW5nfSA9IHtcblx0XHRDQVNIOiBcImNhc2hcIixcblx0XHRPUkRFUlM6IFwib3JkZXJzXCIsXG5cdFx0VFJBTlNBQ1RJT05TOiBcInRyYW5zYWN0aW9uc1wiLFxuXHRcdFBPU0lUSU9OUzogXCJwb3NpdGlvbnNcIixcblx0XHRBTEw6IG51bGwsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge251bWJlcn0gT1BFTlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gT1BFTl9OT19ORVdfVFJBREVTXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UEVORElORzogMSxcblx0XHRPUEVOOiAyLFxuXHRcdE9QRU5fTk9fTkVXX1RSQURFUzogMyxcblx0XHRDTE9TRUQ6IDksXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRZUEVTXG5cdCAqIEBtZW1iZXJvZiBBY2NvdW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gUFJBQ1RJQ0Vcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IExJVkVcblx0ICovXG5cdHN0YXRpYyBUWVBFUzoge1t0eXBlOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBSQUNUSUNFOiAxLFxuXHRcdExJVkU6IDIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0QmxvdHRlcih0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0QmxvdHRlcih0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCbG90dGVyKHVzZXJJRDogc3RyaW5nLCBhY2NvdW50SUQ6IHN0cmluZywgdHlwZTogP3N0cmluZyA9IG51bGwpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50U3VtbWFyeS9gXG5cdFx0XHRcdCsgYCR7YWNjb3VudElEfSR7dHlwZSA/IFwiL1wiICsgdHlwZSA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRpZiAoYm9keS5vcmRlcnMpIHtcblx0XHRcdFx0Ym9keS5vcmRlcnMgPSBib2R5Lm9yZGVycy5tYXAoKG9yZGVyKSA9PiBuZXcgT3JkZXIob3JkZXIpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0eXBlID8gYm9keVt0eXBlXSA6IGJvZHk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdGdldFBlcmZvcm1hbmNlKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0UGVyZm9ybWFuY2UodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCAuLi5hcmd1bWVudHMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gc3RhcnREYXRlXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZW5kRGF0ZVxuXHQgKi9cblx0LyoqXG5cdCAgKiBAcGFyYW0ge3N0cmluZ30gcGVyaW9kXG5cdCAgKi9cblx0LyoqXG5cdCAgKiBAZGVzY3JpcHRpb24gR2V0IHRvZGF5J3MgcGVyZm9ybWFuY2Vcblx0ICAqL1xuXHRzdGF0aWMgZ2V0UGVyZm9ybWFuY2UodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBcIlwiO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBzdGFydERhdGUgPSBhcmd1bWVudHNbMl07XG5cdFx0XHRjb25zdCBlbmREYXRlID0gYXJndW1lbnRzWzNdO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gXCIvZGF0ZVJhbmdlP1wiO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYHN0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKHN0YXJ0RGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIHN0YXJ0RGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuXHRcdFx0cXVlcnlTdHJpbmcgKz0gYCZlbmREYXRlPSR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSR7KFwiMFwiICsgKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMil9JHsoXCIwXCIgKyBlbmREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgL2hpc3Rvcnk/cGVyaW9kPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRQZXJmb3JtYW5jZS8ke2FjY291bnRJRH0ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5wZXJmb3JtYW5jZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRwbGFjZU9yZGVyKHR5cGU6IHN0cmluZywgZGF0YTogT2JqZWN0KTogUHJvbWlzZTxzdHJpbmcgfCBPYmplY3Q+IHtcblx0XHRjb25zdCBwYXJlbnREZXRhaWxzOiBPcmRlclBhcmVudERldGFpbHMgPSB7XG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vOiB0aGlzLmFjY291bnRObyxcblx0XHRcdGFjY291bnRUeXBlOiB0aGlzLmFjY291bnRUeXBlLFxuXHRcdFx0dXNlcklEOiB0aGlzLnVzZXJJRCxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIE9yZGVyLmNyZWF0ZSh0eXBlLCBwYXJlbnREZXRhaWxzLCBkYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEZ1bmRpbmdNZXRob2RzKG9wdGlvbnM6IE9iamVjdCA9IHt9KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0b3B0aW9ucy51c2VySUQgPSB0aGlzLnVzZXJJRDtcblx0XHRvcHRpb25zLmFjY291bnRJRCA9IHRoaXMuYWNjb3VudElEO1xuXHRcdHJldHVybiBGdW5kaW5nLmdldEZ1bmRpbmdNZXRob2RzKG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhbnNhY3Rpb25zKHN0YXJ0RGF0ZTogRGF0ZSwgZW5kRGF0ZTogRGF0ZSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdldFRyYW5zYWN0aW9ucyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50Tm8sIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRQbGFjZWRPcmRlcnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0UGxhY2VkT3JkZXJzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFN0YXRlbWVudHMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0U3RhdGVtZW50cyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUYXhEb2N1bWVudHMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VGF4RG9jdW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRyYWRlQ29uZmlybXMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhZGVDb25maXJtcyh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZW5lcmF0ZURvd25sb2FkVVJMKGZpbGVLZXk6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBSZXBvcnRzLmdlbmVyYXRlRG93bmxvYWRVUkwodGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBmaWxlS2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0TGlzdEZvclVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGFjY291bnQgPT4gbmV3IEFjY291bnQoYWNjb3VudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHVzZXJJRDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGRhdGE6IE9iamVjdCkge1xuXHRcdGlmICh0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFKSB7XG5cdFx0XHRkYXRhID0ge1xuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdHJlc3BvbnNlVHlwZTogXCJmdWxsXCIsXG5cdFx0XHRcdHRyYW5BbW91bnQ6IGRhdGEsXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogdHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRVxuXHRcdFx0XHQ/IFwiL3NpZ251cHMvcHJhY3RpY2VcIlxuXHRcdFx0XHQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBkYXRhLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5cdCAqL1xuXHRzdGF0aWMgY2hhbmdlU3Vic2NyaXB0aW9uKG1ldGhvZDogc3RyaW5nLCB7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0cGF5bWVudElELFxuXHR9OiB7XG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0cGxhbklEOiBzdHJpbmcsXG5cdFx0cGF5bWVudElEOiBzdHJpbmcsXG5cdH0pOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50cy8ke2FjY291bnRJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IG1ldGhvZC5zdGFydHNXaXRoKFwiUFwiKSAmJiB7XG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdFx0W3BheW1lbnRJRC5zdGFydHNXaXRoKFwiY2FyZFwiKSA/IFwiY2FyZElEXCIgOiBcImJhbmtBY2NvdW50SURcIl06IHBheW1lbnRJRCxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdHJldHVybiByZXF1ZXN0KFxuXHRcdFx0T2JqZWN0LmtleXMocGFyYW1zKVxuXHRcdFx0XHQuZmlsdGVyKGtleSA9PiBwYXJhbXNba2V5XSlcblx0XHRcdFx0LnJlZHVjZSgoeCwgeSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgeCwgeyBbeV06IHBhcmFtc1t5XSB9KSwge30pLFxuXHRcdCkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJHRVRcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBPU1RcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIlBVVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiREVMRVRFXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0ZXh0cmFjdElEcyhvcHRpb25zOiBPYmplY3QpOiBPYmplY3Qge1xuXHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0YWNjb3VudElEOiB0aGlzLmFjY291bnRJRCxcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFN1YnNjcmlwdGlvbigpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMoKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRhZGRTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5hZGRTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKG9wdGlvbnMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwZGF0ZVN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LnVwZGF0ZVN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsU3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2FuY2VsU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWNjb3VudC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgeyBEcml2ZVdlYWx0aEVycm9yLCBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbi8qKlxuICogQGZ1bmN0aW9uIHJlcXVlc3RcbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxseSwgaXQgaXMgdW5uZWNlc3NhcnkgdG8gdXNlIHRoaXMgZnVuY3Rpb24gYW5kIHRoaXMgaXMgZm9yIGludGVybmFsIHVzZSBvbmx5LiBDYWxsIHJlcXVlc3QoKSBpZiB5b3UgbmVlZCB0byBtYWtlIGEgY3VzdG9tIEFQSSBjYWxsIHRoYXQgaXMgbm90IGNvdmVyZWQgYnkgYW5vdGhlciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5tZXRob2RcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmVuZHBvaW50XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5zZXNzaW9uS2V5XG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ib2R5XG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRpb25zLmFkZGxIZWFkZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5ob3N0IC0gT25lIG9mIENvbmZpZy5IT1NUU1xuICogQHJldHVybnMge1Byb21pc2UuPHtib2R5OiBzdHJpbmcsIHN0YXR1c0NvZGU6IG51bWJlciwgaGVhZGVyczogT2JqZWN0PHN0cmluZywgc3RyaW5nPn0+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1ZXN0KHtcblx0bWV0aG9kID0gXCJHRVRcIixcblx0ZW5kcG9pbnQsXG5cdHNlc3Npb25LZXksXG5cdGJvZHksXG5cdGFkZGxIZWFkZXJzID0ge30sXG5cdGhvc3QgPSBIT1NUUy5BUEksXG59OiB7XG5cdG1ldGhvZD86IHN0cmluZyxcblx0ZW5kcG9pbnQ6IHN0cmluZyxcblx0c2Vzc2lvbktleT86IHN0cmluZyxcblx0Ym9keT86IGFueSxcblx0YWRkbEhlYWRlcnM/OiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSxcblx0aG9zdD86IHN0cmluZyxcbn0pIHtcblx0Y29uc3QgaGVhZGVyczoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0fTtcblx0aWYgKG1ldGhvZCA9PT0gXCJQT1NUXCIgfHwgbWV0aG9kID09PSBcIlBVVFwiIHx8IG1ldGhvZCA9PT0gXCJQQVRDSFwiKSB7XG5cdFx0aGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvblwiO1xuXHR9XG5cdGlmIChzZXNzaW9uS2V5KSB7XG5cdFx0aGVhZGVyc1tcIngtbXlzb2xvbWVvLXNlc3Npb24ta2V5XCJdID0gc2Vzc2lvbktleTtcblx0fVxuXHRmb3IgKGNvbnN0IGhlYWRlciBpbiBhZGRsSGVhZGVycykge1xuXHRcdGhlYWRlcnNbaGVhZGVyXSA9IGFkZGxIZWFkZXJzW2hlYWRlcl07XG5cdH1cblxuXHRlbmRwb2ludCA9IENvbmZpZy5lbnZbaG9zdF0gKyBlbmRwb2ludDtcblxuXHRpZiAoaGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIGJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdENvbmZpZy5odHRwSW1wbChtZXRob2QsIGVuZHBvaW50LCBoZWFkZXJzLCBib2R5LCAoc3RhdHVzQ29kZSwgcmVzSGVhZGVycywgcmVzQm9keSkgPT4ge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSByZXNIZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdIHx8IHJlc0hlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gfHwgXCJcIjtcblx0XHRcdGlmIChyZXNCb2R5ICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoXCJhcHBsaWNhdGlvbi9qc29uXCIpICE9PSAtMSkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJlc0JvZHkgPSBKU09OLnBhcnNlKHJlc0JvZHkpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyByZXNCb2R5IHdpbGwgcmVtYWluIGFzIGlzXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIyXCIgfHwgU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjNcIikge1xuXHRcdFx0XHRyZXNvbHZlKHtcblx0XHRcdFx0XHRib2R5OiByZXNCb2R5LFxuXHRcdFx0XHRcdHN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0aGVhZGVyczogcmVzSGVhZGVycyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZXJyb3JNZXNzYWdlO1xuXHRcdFx0XHRpZiAocmVzQm9keSkge1xuXHRcdFx0XHRcdGVycm9yTWVzc2FnZSA9IHJlc0JvZHkubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShyZXNCb2R5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBlcnJvciA9IHN0YXR1c0NvZGUgPT09IDQwMVxuXHRcdFx0XHRcdD8gbmV3IERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycylcblx0XHRcdFx0XHQ6IG5ldyBEcml2ZVdlYWx0aEVycm9yKGVycm9yTWVzc2FnZSwgcmVzQm9keSwgc3RhdHVzQ29kZSwgcmVzSGVhZGVycyk7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlcXVlc3QuanMiLCIvKipcbiAqIEBuYW1lc3BhY2UgQ29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSB7XG5cdGVudjogbnVsbCxcblx0aHR0cEltcGw6IG51bGwsXG5cdGFwcFR5cGVJRDogbnVsbCxcblx0YXBwVmVyc2lvbjogbnVsbCxcblx0d2xwSUQ6IG51bGwsXG5cdGFwcHNQYXJ0bmVySUQ6IG51bGwsXG5cdHJlZmVycmFsQ29kZTogbnVsbCxcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgSE9TVFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUElcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBUFBTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gUkVQT1JUU1xuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBIT1NUUyA9IHtcblx0QVBJOiBcImFwaVwiLFxuXHRBUFBTOiBcImFwcHNcIixcblx0UkVQT1JUUzogXCJyZXBvcnRzXCIsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEVOVklST05NRU5UU1xuICogQHByb3BlcnR5IHtvYmplY3R9IFVBVFxuICogQHByb3BlcnR5IHtvYmplY3R9IFBST0RcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgRU5WSVJPTk1FTlRTID0ge1xuXHRVQVQ6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwOi8vYXBpLmRyaXZld2VhbHRoLmlvL3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHA6Ly9hcHBzLmRyaXZld2VhbHRoLmlvXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHA6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLmlvXCIsXG5cdH0sXG5cdFBST0Q6IHtcblx0XHRbSE9TVFMuQVBJXTogXCJodHRwczovL2FwaS5kcml2ZXdlYWx0aC5uZXQvdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cHM6Ly9hcHBzLmRyaXZld2VhbHRoLmNvbVwiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwczovL3JlcG9ydHMuZHJpdmV3ZWFsdGgubmV0XCIsXG5cdH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXAoe1xuXHRlbnYsXG5cdGh0dHBJbXBsLFxuXHRhcHBUeXBlSUQsXG5cdGFwcFZlcnNpb24sXG5cdHdscElEID0gXCJEV1wiLFxuXHRhcHBzUGFydG5lcklELFxuXHRyZWZlcnJhbENvZGUsXG59KSB7XG5cdENvbmZpZy5lbnYgPSBlbnY7XG5cdENvbmZpZy5odHRwSW1wbCA9IGh0dHBJbXBsO1xuXHRDb25maWcuYXBwVHlwZUlEID0gYXBwVHlwZUlEO1xuXHRDb25maWcuYXBwVmVyc2lvbiA9IGFwcFZlcnNpb247XG5cdENvbmZpZy53bHBJRCA9IHdscElEO1xuXHRDb25maWcuYXBwc1BhcnRuZXJJRCA9IGFwcHNQYXJ0bmVySUQgfHwgd2xwSUQ7XG5cdENvbmZpZy5yZWZlcnJhbENvZGUgPSByZWZlcnJhbENvZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uZmlnLmpzIiwiaW1wb3J0IEV4dGVuZGFibGVFcnJvciBmcm9tIFwiZXh0ZW5kYWJsZS1lcnJvci1jbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhFcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgY2xhc3MgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHREcml2ZVdlYWx0aEVycm9yLFxuXHREcml2ZVdlYWx0aFNlc3Npb25FcnJvcixcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3IuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kYWJsZUJ1aWx0aW4oY2xzKSB7XG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUJ1aWx0aW4oKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IFJlZmxlY3QuY29uc3RydWN0KGNscywgQXJyYXkuZnJvbShhcmd1bWVudHMpKTtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgRXh0ZW5kYWJsZUJ1aWx0aW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShjbHMucHJvdG90eXBlLCB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogY2xzLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVCdWlsdGluO1xufVxuXG52YXIgRXh0ZW5kYWJsZUVycm9yID0gZnVuY3Rpb24gKF9leHRlbmRhYmxlQnVpbHRpbjIpIHtcbiAgICBfaW5oZXJpdHMoRXh0ZW5kYWJsZUVycm9yLCBfZXh0ZW5kYWJsZUJ1aWx0aW4yKTtcblxuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHRlbmRhYmxlRXJyb3IpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIE9iamVjdC5nZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlRXJyb3IpLmNhbGwodGhpcywgbWVzc2FnZSkpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBfdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBfdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoX3RoaXMsIF90aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUVycm9yO1xufShfZXh0ZW5kYWJsZUJ1aWx0aW4oRXJyb3IpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHRlbmRhYmxlRXJyb3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFNlc3Npb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IHt9O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IG51bGw7XG4gICAgfVxuXG4gICAgc2F2ZSh1c2VySUQsIHNlc3Npb25LZXkpIHtcbiAgICAgICAgdGhpcy5fa2V5c1t1c2VySURdID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSB1c2VySUQ7XG4gICAgfVxuXG4gICAgZ2V0KHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cblxuICAgIGdldEFueSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdGhpcy5fbWFpblVzZXJdO1xuICAgIH1cblxuICAgIHJlbW92ZSh1c2VySUQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9ucyA9IG5ldyBTZXNzaW9ucygpO1xuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbnMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWlzc2lvblNjaGVkdWxlIH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHR5cGUgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDIzMTtcbmNvbnN0IFNFQ19GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFNFQ19GRUVfTUFYID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuY29uc3QgVEFGX0ZFRV9SQVRFID0gMC4wMDAxMTk7XG5jb25zdCBUQUZfRkVFX01JTiA9IDAuMDE7XG5jb25zdCBUQUZfRkVFX01BWCA9IDUuOTU7XG5cbmV4cG9ydCB0eXBlIE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0YWNjb3VudElEOiBzdHJpbmcsXG5cdGFjY291bnRObzogc3RyaW5nLFxuXHR1c2VySUQ6IHN0cmluZyxcblx0YWNjb3VudFR5cGU6IHN0cmluZyxcbn07XG5leHBvcnQgdHlwZSBOZXdPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0c2lkZTogc3RyaW5nLFxuXHRxdHk/OiBudW1iZXIsXG5cdGFtb3VudENhc2g/OiBudW1iZXIsXG5cdGNvbW1lbnQ/OiBzdHJpbmcsXG5cdGF1dG9TdG9wPzogbnVtYmVyLFxuXHRwcmljZT86IG51bWJlcixcbn07XG5leHBvcnQgdHlwZSBOZXdDYXJ0T3JkZXIgPSB7XG5cdGluc3RydW1lbnQ6IEluc3RydW1lbnQgfCBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0cmVmZXJlbmNlSUQ6IHN0cmluZyxcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBPcmRlclxuICogQGRlc2NyaXB0aW9uIEFuIG9yZGVyIGNyZWF0ZWQgZm9yIGFuIEFjY291bnQuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9tYXJrZXRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JkZXIge1xuXHRvcmRlcklEOiBzdHJpbmc7XG5cdGFjY291bnRJRDogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0Y3VtUXR5OiBudW1iZXI7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHRjb21tZW50OiBzdHJpbmc7XG5cdGNvbW1pc3Npb246IG51bWJlcjtcblx0Y3JlYXRlZEJ5SUQ6IHN0cmluZztcblx0Y3JlYXRlZFdoZW46IHN0cmluZztcblx0ZXhlY3V0ZWRXaGVuOiBzdHJpbmc7XG5cdGdyb3NzVHJhZGVBbXQ6IG51bWJlcjtcblx0aW5zdHJ1bWVudElEOiBzdHJpbmc7XG5cdGxlYXZlc1F0eTogc3RyaW5nO1xuXHRvcmRlck5vOiBzdHJpbmc7XG5cdG9yZGVyUXR5OiBudW1iZXI7XG5cdHNpZGU6IHN0cmluZztcblx0YXV0b1N0b3A6ID9udW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHRyZWplY3Rpb25SZWFzb246ID9zdHJpbmc7XG5cdHN0YXR1czogc3RyaW5nO1xuXHR0eXBlOiBudW1iZXI7XG5cdHByaWNlOiA/bnVtYmVyO1xuXHRlZmZlY3RpdmVQcmljZTogP251bWJlcjtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMucmVqZWN0aW9uUmVhc29uID0gZGF0YS5vcmRSZWpSZWFzb247XG5cdFx0dGhpcy5zdGF0dXMgPSBkYXRhLm9yZFN0YXR1cztcblx0XHR0aGlzLnR5cGUgPSBkYXRhLm9yZFR5cGUgfHwgZGF0YS5vcmRlclR5cGU7XG5cdFx0dGhpcy5wcmljZSA9IGRhdGEuc3RvcFByaWNlIHx8IGRhdGEubGltaXRQcmljZSB8fCBkYXRhLnByaWNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNJREVTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEJVWVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU0VMTFxuXHQgKi9cblx0c3RhdGljIFNJREVTOiB7W3NpZGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0QlVZOiBcIkJcIixcblx0XHRTRUxMOiBcIlNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTUFSS0VUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBMSU1JVFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gU1RPUFxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TUFSS0VUOiBcIjFcIixcblx0XHRMSU1JVDogXCIyXCIsXG5cdFx0U1RPUDogXCIzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIFNUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBPcmRlclxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IE5FV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEFSVElBTF9GSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBGSUxMXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQU5DRUxFRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUkVKRUNURURcblx0ICovXG5cdHN0YXRpYyBTVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0TkVXOiBcIjBcIixcblx0XHRQQVJUSUFMX0ZJTEw6IFwiMVwiLFxuXHRcdEZJTEw6IFwiMlwiLFxuXHRcdENBTkNFTEVEOiBcIjRcIixcblx0XHRSRUpFQ1RFRDogXCI4XCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Y2FuY2VsKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBPcmRlci5jYW5jZWwodGhpcy5vcmRlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgY2FuY2VsKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL29yZGVycy8ke29yZGVySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChvcmRlcklEOiBzdHJpbmcpOiBQcm9taXNlPE9yZGVyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBPcmRlcihib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiBJZiB3YWl0Rm9yRmlsbCBpcyB0cnVlLCBhbiBPcmRlciB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIGFuIG9yZGVySUQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcjoge1xuXHRcdFx0XHRpbnN0cnVtZW50LFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRxdHksXG5cdFx0XHRcdGFtb3VudENhc2gsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdH0sXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyOiBOZXdPcmRlcixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTxzdHJpbmcgfCBPcmRlcj4ge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcInF0eVxcXCIgYW5kIFxcXCJhbW91bnRDYXNoXFxcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlwiKTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiAhcHJpY2UpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkxpbWl0IGFuZCBzdG9wIG9yZGVycyByZXF1aXJlIGEgXFxcInByaWNlLlxcXCJcIik7XG5cdFx0fVxuXHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQgJiYgYXV0b1N0b3ApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJhdXRvU3RvcFxcXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLlwiKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmICh0eXBlICE9PSBPcmRlci5UWVBFUy5NQVJLRVQpIGZpbGxNYXhSZXRyaWVzID0gMTtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBib2R5Lm9yZGVySUQ7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKGJvZHkub3JkZXJJRCkudGhlbihvcmRlciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gcmVzb2x2ZShvcmRlcik7XG5cblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0b3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0JiYgb3JkZXIuc3RhdHVzICE9PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShvcmRlcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHRcdFx0fSwgZXJyb3IgPT4ge1xuXHRcdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgT2JqZWN0Pj59IEFuIG9iamVjdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggZWFjaCBrZXkgc2V0IHRvIGEgcmVmZXJlbmNlSUQgcGFzc2VkIHdpdGggYW4gb3JkZXIuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlQ2FydChcblx0XHR7XG5cdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm8sXG5cdFx0XHR1c2VySUQsXG5cdFx0XHRhY2NvdW50VHlwZSxcblx0XHR9OiBPcmRlclBhcmVudERldGFpbHMsXG5cdFx0e1xuXHRcdFx0b3JkZXJzLFxuXHRcdFx0d2FpdEZvckZpbGwgPSB0cnVlLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWwgPSA1MDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyczogQXJyYXk8TmV3Q2FydE9yZGVyPixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTx7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiBPYmplY3R9PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9vcmRlcnNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogb3JkZXJzLm1hcChvcmRlciA9PiAoe1xuXHRcdFx0XHRpbnN0cnVtZW50SUQ6IG9yZGVyLmluc3RydW1lbnQuaW5zdHJ1bWVudElEXG5cdFx0XHRcdFx0fHwgb3JkZXIuaW5zdHJ1bWVudC5pZCB8fCBvcmRlci5pbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogT3JkZXIuVFlQRVMuTUFSS0VULFxuXHRcdFx0XHRzaWRlOiBPcmRlci5TSURFUy5CVVksXG5cdFx0XHRcdG9yZGVyUXR5OiBvcmRlci5xdHkgPyBvcmRlci5xdHkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IG9yZGVyLmFtb3VudENhc2ggPyBvcmRlci5hbW91bnRDYXNoIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50OiBvcmRlci5jb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcDogb3JkZXIuYXV0b1N0b3AsXG5cdFx0XHR9KSksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGxldCBvcmRlclJlc3VsdHMgPSBib2R5O1xuXHRcdFx0Y29uc3Qgb3JkZXJzTWFwID0gb3JkZXJSZXN1bHRzLnJlZHVjZShcblx0XHRcdFx0KGFjYywgbmV4dCwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBhY2MsIHtcblx0XHRcdFx0XHRbb3JkZXJzW2lkeF0ucmVmZXJlbmNlSURdOiBuZXh0LFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0e30sXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoIXdhaXRGb3JGaWxsKSByZXR1cm4gb3JkZXJzTWFwO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRsZXQgcmV0cmllcyA9IGZpbGxNYXhSZXRyaWVzO1xuXHRcdFx0XHRvcmRlclJlc3VsdHMgPSBvcmRlclJlc3VsdHMubWFwKChvcmRlciwgaWR4KSA9PiBPYmplY3QuYXNzaWduKHt9LCBvcmRlciwge1xuXHRcdFx0XHRcdHJlZmVyZW5jZUlEOiBvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRCxcblx0XHRcdFx0fSkpO1xuXHRcdFx0XHRjb25zdCBjaGVja1N0YXR1cyA9ICgpID0+IHtcblx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwKSByZXR1cm4gcmVzb2x2ZShvcmRlclJlc3VsdHMpO1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblxuXHRcdFx0XHRcdFByb21pc2UuYWxsKFxuXHRcdFx0XHRcdFx0b3JkZXJSZXN1bHRzLm1hcChvcmRlciA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQob3JkZXIub3JkZXJJRCwgdXNlcklELCAoZXJyb3IsIHN0YXR1c0RldGFpbHMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IHN0YXR1c0RldGFpbHM7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLnN0YXR1cztcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24oXG5cdFx0b3JkZXJzOiBBcnJheTx7XG5cdFx0XHRzaWRlOiBzdHJpbmcsXG5cdFx0XHRxdHk6IG51bWJlcixcblx0XHRcdG1hcmtldFByaWNlOiBudW1iZXIsXG5cdFx0XHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRcdH0+LFxuXHRcdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlLFxuXHQpOiB7XG5cdFx0dG90YWw6IG51bWJlcixcblx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IG51bWJlcixcblx0XHRieU9yZGVyOiB7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiB7XG5cdFx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdFx0Y29tbWlzc2lvbjogbnVtYmVyLFxuXHRcdFx0ZmVlczoge1xuXHRcdFx0XHRzZWM6IG51bWJlcixcblx0XHRcdFx0dGFmOiBudW1iZXIsXG5cdFx0XHR9LFxuXHRcdH19XG5cdH0ge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZTtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpLFxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwO1xuXHRcdFx0bGV0IHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuLyoqXG4gKiBAY2xhc3MgRnVuZGluZ1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBmdW5kaW5nIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblx0LyoqXG5cdCAqIEBuYW1lIEFMTE9XRURfVFlQRVNcblx0ICogQG1lbWJlcm9mIEZ1bmRpbmdcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXSVRIRFJBV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVF9BTkRfV0lUSERSQVdcblx0ICovXG5cdHN0YXRpYyBBTExPV0VEX1RZUEVTID0ge1xuXHRcdERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuXHRcdFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG5cdFx0REVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBnZXRGdW5kaW5nTWV0aG9kcyh7XG5cdFx0dXNlcklELFxuXHRcdGFjY291bnRJRCxcblx0XHRsYW5ndWFnZSxcblx0XHRtaW5BbW91bnQsXG5cdFx0bWF4QW1vdW50LFxuXHRcdGFtb3VudCxcblx0XHRmaWx0ZXJzID0ge30sXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRsYW5ndWFnZT86IHN0cmluZyxcblx0XHRtaW5BbW91bnQ/OiBudW1iZXIsXG5cdFx0bWF4QW1vdW50PzogbnVtYmVyLFxuXHRcdGFtb3VudD86IG51bWJlcixcblx0XHRmaWx0ZXJzPzoge1xuXHRcdFx0bmFtZTogc3RyaW5nLFxuXHRcdFx0Y3VycmVuY3k6IHN0cmluZyxcblx0XHRcdGNvdW50cnk6IHN0cmluZyxcblx0XHRcdGFsbG93ZWQ6IHN0cmluZyxcblx0XHR9LFxuXHR9ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRpZiAoYW1vdW50ICYmIChtaW5BbW91bnQgfHwgbWF4QW1vdW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcImFtb3VudFwiIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggXCJtaW5BbW91bnRcIiBvciBcIm1heEFtb3VudC5cImApO1xuXHRcdH1cblxuXHRcdGxldCBxdWVyeVN0cmluZyA9IGBwYXJ0bmVyPSR7Q29uZmlnLmFwcHNQYXJ0bmVySUR9JnVzZXJJRD0ke3VzZXJJRH0mYWNjb3VudElEPSR7YWNjb3VudElEfWA7XG5cdFx0aWYgKGxhbmd1YWdlKSBxdWVyeVN0cmluZyArPSBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YDtcblx0XHRpZiAobWluQW1vdW50KSBxdWVyeVN0cmluZyArPSBgJm1pbkFtb3VudD0ke21pbkFtb3VudH1gO1xuXHRcdGlmIChtYXhBbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWF4QW1vdW50PSR7bWF4QW1vdW50fWA7XG5cdFx0aWYgKGFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZhbW91bnQ9JHthbW91bnR9YDtcblx0XHRpZiAoZmlsdGVycy5uYW1lKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlcltuYW1lXT0ke2ZpbHRlcnMubmFtZX1gO1xuXHRcdGlmIChmaWx0ZXJzLmNvdW50cnkpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2NvdW50cnldPSR7ZmlsdGVycy5jb3VudHJ5fWA7XG5cdFx0aWYgKGZpbHRlcnMuY3VycmVuY3kpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2N1cnJlbmN5XT0ke2ZpbHRlcnMuY3VycmVuY3l9YDtcblx0XHRpZiAoZmlsdGVycy5hbGxvd2VkKSBxdWVyeVN0cmluZyArPSBgJmZpbHRlclthbGxvd2VkXT0ke2ZpbHRlcnMuYWxsb3dlZH1gO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuQVBQUyxcblx0XHRcdGVuZHBvaW50OiBgL2Z1bmRpbmcvbWV0aG9kcz8ke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBhc3REZXBvc2l0cyh1c2VySUQ6IHN0cmluZykge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdGVuZHBvaW50OiBcIi9mdW5kaW5nL3N0YXR1c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvblBsYW5zKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvYWNoL3N1YnNjcmlwdGlvbi1wbGFuc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGNvbnN0IHByaWNpbmcgPSBib2R5LmRhdGEubWFwKChwcmljaW5nKSA9PlxuXHRcdFx0XHRbXS5jb25jYXQocHJpY2luZylcblx0XHRcdFx0XHQuc29ydCgoeCwgeSkgPT4geC5hbW91bnQgLSB5LmFtb3VudClcblx0XHRcdFx0XHQubWFwKHByaWNlID0+IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdHByaWNlLFxuXHRcdFx0XHRcdFx0eyBhbW91bnQ6IE51bWJlcihwcmljZS5hbW91bnQgLyAxMDApIH0sXG5cdFx0XHRcdFx0KSksXG5cdFx0XHQpWzBdO1xuXG5cdFx0XHRyZXR1cm4gcHJpY2luZztcblx0XHR9KTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbi8qKlxuICogQGNsYXNzIFJlcG9ydHNcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgY2xhc3MgZm9yIHJldHJpZXZpbmcgYWNjb3VudCByZXBvcnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFuc2FjdGlvbnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1GaW5UcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBsYWNlZE9yZGVycyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPU9yZGVyVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdGF0ZW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAyXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmZGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAxXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUYXhEb2N1bWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0ZmlsZUtleTogc3RyaW5nLFxuXHQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKCkge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBcIi9jb3VudHJpZXNcIixcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCB0eXBlIFF1b3RlID0ge1xuXHRiaWQ6IG51bWJlcixcblx0YXNrOiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBJbnN0cnVtZW50XG4gKiBAZGVzY3JpcHRpb24gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X2luc3RydW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGV4Y2hhbmdlSUQ6IHN0cmluZztcblx0aW5zdHJ1bWVudFR5cGVJRDogc3RyaW5nO1xuXHRvcmRlclNpemVNYXg6IG51bWJlcjtcblx0b3JkZXJTaXplTWluOiBudW1iZXI7XG5cdG9yZGVyU2l6ZVN0ZXA6IG51bWJlcjtcblx0cmF0ZUFzazogbnVtYmVyO1xuXHRyYXRlQmlkOiBudW1iZXI7XG5cdHJhdGVQcmVjaXNpb246IG51bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHRyYWRlU3RhdHVzOiBzdHJpbmc7XG5cdHVybEltYWdlOiBzdHJpbmc7XG5cdHVybEludmVzdG9yOiBzdHJpbmc7XG5cdGNoYWlraW5QZ3I6IHN0cmluZztcblx0cHJpb3JDbG9zZTogbnVtYmVyO1xuXHRtYXJrZXRTdGF0ZTogbnVtYmVyO1xuXHRmdW5kYW1lbnRhbERhdGFNb2RlbDogT2JqZWN0O1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgVFJBREVfU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTkFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBUUkFERV9TVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0SU5BQ1RJVkU6IFwiMFwiLFxuXHRcdEFDVElWRTogXCIxXCIsXG5cdFx0Q0xPU0VEOiBcIjJcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgQ0hBUlRfQ09NUFJFU1NJT05TXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gREFZXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzVcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8zMFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gSE9VUlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gV0VFS1xuXHQgKi9cblx0c3RhdGljIENIQVJUX0NPTVBSRVNTSU9OUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0REFZOiAwLFxuXHRcdE1JTlVURV8xOiAxLFxuXHRcdE1JTlVURV81OiA0LFxuXHRcdE1JTlVURV8zMDogOCxcblx0XHRIT1VSOiA5LFxuXHRcdFdFRUs6IDEwLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50PiB8IEluc3RydW1lbnQ+IHtcblx0XHRjb25zdCBzeW1ib2xzID0gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IFtzeW1ib2xdIDogc3ltYm9sO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRib2R5ID0gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSk7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGJvZHlbMF0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKGlkOiBzdHJpbmcsIGluY2x1ZGVGdW5kYW1lbnRhbHM6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxJbnN0cnVtZW50PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyBcIj9vcHRpb25zPUZcIiA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgSW5zdHJ1bWVudChib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cz86IHN0cmluZyA9IFwiLTFcIik6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZWFyY2goY3JpdGVyaWE6IHsgbmFtZT86IHN0cmluZywgc3ltYm9sPzogc3RyaW5nIH0pOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG5cdFx0aWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcblx0XHRpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UXVvdGUoKTogUHJvbWlzZTxRdW90ZT4ge1xuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UXVvdGUoc3ltYm9sOiBzdHJpbmcgfCBJbnN0cnVtZW50IHwgQXJyYXk8c3RyaW5nPiB8IEFycmF5PEluc3RydW1lbnQ+KTogUHJvbWlzZTxRdW90ZSB8IHtbc3ltYm9sOiBzdHJpbmddOiBRdW90ZX0+IHtcblx0XHRjb25zdCBzeW1ib2xzOiBBcnJheTxzdHJpbmc+ID0gKEFycmF5LmlzQXJyYXkoc3ltYm9sKSA/IHN5bWJvbCA6IFtzeW1ib2xdKVxuXHRcdFx0Lm1hcChzeW0gPT4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW0pO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRsZXQgb2JqID0ge307XG5cdFx0XHRib2R5ID0gYm9keS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuXHRcdFx0Zm9yIChjb25zdCByYXdRdW90ZSBvZiBib2R5KSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuXHRcdFx0XHRcdGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcblx0XHRcdFx0XHRhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkgb2JqID0gb2JqW3N5bWJvbHNbMF1dO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdGdldENoYXJ0RGF0YShjb21wcmVzc2lvbjogbnVtYmVyKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgY29tcHJlc3Npb24sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEluc3RydW1lbnQuZ2V0Q2hhcnREYXRhKHRoaXMuaW5zdHJ1bWVudElELCBjb21wcmVzc2lvbiwgYXJndW1lbnRzWzFdKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRDogc3RyaW5nLCBjb21wcmVzc2lvbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0bGV0IHRpbWVQYXJhbXM7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUVuZCA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0dGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhLnNwbGl0KFwifFwiKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuLyoqXG4gKiBAY2xhc3MgVXNlclxuICogQGRlc2NyaXB0aW9uIEEgdXNlciBvYmplY3QuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXQtdXNlcn1cbiAqL1xuY2xhc3MgVXNlciB7XG5cdGNvdW50cnlJRDogc3RyaW5nO1xuXHRlbWFpbEFkZHJlc3M6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhbmd1YWdlSUQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0cGhvbmVOdW1iZXI6IHN0cmluZztcblx0cmVmZXJyYWxDb2RlOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHR3bHBJRDogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dXNDaXRpemVuOiBib29sZWFuO1xuXHRsYXN0TG9naW5XaGVuOiBzdHJpbmc7XG5cdGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMTogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTI6IHN0cmluZztcblx0Y2l0eTogc3RyaW5nO1xuXHRzdGF0ZVByb3ZpbmNlOiBzdHJpbmc7XG5cdHppcFBvc3RhbENvZGU6IHN0cmluZztcblx0ZnVsbE5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQVBQUk9WRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFSkVDVEVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRVZPS0VEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBDTE9TRURcblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0QVBQUk9WRUQ6IDIsXG5cdFx0UkVKRUNURUQ6IDMsXG5cdFx0UkVWT0tFRDogNCxcblx0XHRDTE9TRUQ6IDUsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIERPQ1VNRU5UX1RZUEVTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIERPQ1VNRU5UX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0UEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRBY2NvdW50cygpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0TGlzdEZvclVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklEOiBzdHJpbmcpIHtcblx0XHRjb25zdCBrZXkgPSBhcmd1bWVudHNbMV07XG5cdFx0aWYgKCFrZXkpIHtcblx0XHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nIG9mIGJvZHkpIHtcblx0XHRcdFx0XHRmb3JtYXR0ZWREYXRhW3NldHRpbmcua2V5XSA9IHNldHRpbmcudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZvcm1hdHRlZERhdGE7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlXG5cdCAqIEBwYXJhbSAge3N0cmluZ30ga2V5XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGdldFNldHRpbmdzKCkge1xuXHRcdGNvbnN0IFtrZXldID0gYXJndW1lbnRzO1xuXHRcdHJldHVybiBVc2VyLmdldFNldHRpbmdzKHRoaXMudXNlcklELCBrZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZXRTZXR0aW5nKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGtleSwgdmFsdWUsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHNldFNldHRpbmcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci5zZXRTZXR0aW5nKHRoaXMudXNlcklELCBrZXksIHZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVuc2V0U2V0dGluZyhrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gU2VlIHJlc3BvbnNlIGF0IHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL3VzZXItc3RhdHVzfVxuXHQgKi9cblx0Z2V0U3RhdHVzKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0bG9nb3V0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJTZXNzaW9ucy8ke1Nlc3Npb25zLmdldCh0aGlzLnVzZXJJRCl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRTZXNzaW9ucy5yZW1vdmUodGhpcy51c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeVVzZXJJRCh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IFVzZXIoYm9keSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi91c2VyU2Vzc2lvbnNcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRhcHBUeXBlSUQ6IENvbmZpZy5hcHBUeXBlSUQsXG5cdFx0XHRcdGFwcFZlcnNpb246IENvbmZpZy5hcHBWZXJzaW9uLFxuXHRcdFx0XHRsYW5ndWFnZUlEOiBcImVuX1VTXCIsXG5cdFx0XHRcdG9zVHlwZTogXCJ1bmtub3duXCIsXG5cdFx0XHRcdG9zVmVyc2lvbjogXCJ1bmtub3duXCIsXG5cdFx0XHRcdHNjclJlczogXCJ1bmtub3duXCIsXG5cdFx0XHRcdGlwQWRkcmVzczogXCJ1bmtub3duXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRTZXNzaW9ucy5zYXZlKGJvZHkudXNlcklELCBib2R5LnNlc3Npb25LZXkpO1xuXHRcdFx0cmV0dXJuIFVzZXIuZ2V0QnlVc2VySUQoYm9keS51c2VySUQpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBpc1VzZXJuYW1lQXZhaWxhYmxlKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWAsXG5cdFx0fSkudGhlbihcblx0XHRcdCgpID0+IGZhbHNlLFxuXHRcdFx0KHJlamVjdGlvbikgPT4gcmVqZWN0aW9uLnN0YXR1c0NvZGUgPT09IDQwNFxuXHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0OiBQcm9taXNlLnJlamVjdChyZWplY3Rpb24pLFxuXHRcdCk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICogQHBhcmFtIHtib29sZWFufSBsb2dpbkF1dG9tYXRpY2FsbHkgLSBJZiBmYWxzZSwgbm8gc2Vzc2lvbiB3aWxsIGJlIGNyZWF0ZWQuXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8dW5kZWZpbmVkIHwgVXNlcj59IElmIGxvZ2luQXV0b21hdGljYWxseSBpcyB0cnVlLCBhIFVzZXIgd2lsbCBiZSByZXNvbHZlZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoe1xuXHRcdHVzZXJuYW1lLFxuXHRcdHBhc3N3b3JkLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRlbWFpbCxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHJlZmVycmFsQ29kZSA9IENvbmZpZy5yZWZlcnJhbENvZGUsXG5cdFx0dXRtQ2FtcGFpZ24sXG5cdFx0dXRtQ29udGVudCxcblx0XHR1dG1NZWRpdW0sXG5cdFx0dXRtU291cmNlLFxuXHRcdHV0bVRlcm0sXG5cdH0sIGxvZ2luQXV0b21hdGljYWxseTogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQgfCBVc2VyPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9zaWdudXBzL2xpdmVcIixcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0dXNlcm5hbWUsXG5cdFx0XHRcdHBhc3N3b3JkLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0d2xwSUQ6IENvbmZpZy53bHBJRCxcblx0XHRcdFx0cmVmZXJyYWxDb2RlLFxuXHRcdFx0XHR1dG1DYW1wYWlnbixcblx0XHRcdFx0dXRtQ29udGVudCxcblx0XHRcdFx0dXRtTWVkaXVtLFxuXHRcdFx0XHR1dG1Tb3VyY2UsXG5cdFx0XHRcdHV0bVRlcm0sXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0aWYgKGxvZ2luQXV0b21hdGljYWxseSkge1xuXHRcdFx0XHRyZXR1cm4gVXNlci5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlKHtcblx0XHR1c2VySUQsXG5cdFx0YWRkcmVzc0xpbmUxLFxuXHRcdGFkZHJlc3NMaW5lMixcblx0XHRjaXR5LFxuXHRcdGNvdW50cnlJRCxcblx0XHRlbWFpbCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRwaG9uZUhvbWUsXG5cdFx0cGhvbmVXb3JrLFxuXHRcdHBob25lLFxuXHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0emlwUG9zdGFsQ29kZSxcblx0fSkge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQVVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWRkcmVzc0xpbmUxLFxuXHRcdFx0XHRhZGRyZXNzTGluZTIsXG5cdFx0XHRcdGNpdHksXG5cdFx0XHRcdGNvdW50cnlJRCxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHBob25lSG9tZSxcblx0XHRcdFx0cGhvbmVXb3JrLFxuXHRcdFx0XHRwaG9uZU1vYmlsZTogcGhvbmUsXG5cdFx0XHRcdHN0YXRlUHJvdmluY2UsXG5cdFx0XHRcdHppcFBvc3RhbENvZGUsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVwbG9hZERvY3VtZW50KGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVwbG9hZERvY3VtZW50KHRoaXMudXNlcklELCBmaWxlLCB0eXBlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBsb2FkRG9jdW1lbnQodXNlcklEOiBzdHJpbmcsIGZpbGU6IEZpbGUsIHR5cGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdC8vIFRoZSBmb2xsb3dpbmcgbGluZSBpcyBmb3IgZXNsaW50XG5cdFx0LyogZ2xvYmFsIEZvcm1EYXRhICovXG5cdFx0Y29uc3QgYm9keSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGJvZHkuYXBwZW5kKFwidG9rZW5cIiwgdXNlcklEKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50VHlwZVwiLCB0eXBlKTtcblx0XHRib2R5LmFwcGVuZChcImRvY3VtZW50SW1hZ2VcIiwgZmlsZSk7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL2RvY3VtZW50c1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcblx0XHRcdH0sXG5cdFx0XHRib2R5LFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldENyZWRpdENhcmRzKCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiBVc2VyLmdldENyZWRpdENhcmRzKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q3JlZGl0Q2FyZHModXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZENyZWRpdENhcmQoY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBVc2VyLmFkZENyZWRpdENhcmQodGhpcy51c2VySUQsIGNhcmRUb2tlbik7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGFkZENyZWRpdENhcmQodXNlcklEOiBzdHJpbmcsIGNhcmRUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHsgY2FyZFRva2VuIH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0cmVtb3ZlQ3JlZGl0Q2FyZChjYXJkSUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdCByZXR1cm4gVXNlci5yZW1vdmVDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkSUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyByZW1vdmVDcmVkaXRDYXJkKHVzZXJJRDogc3RyaW5nLCBjYXJkSUQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHMvJHtjYXJkSUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBfZ2V0U2V0dGluZ3ModXNlcklEOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcbn1cblxuZnVuY3Rpb24gX2dldEFsbFNldHRpbmdzKHVzZXJJRDogc3RyaW5nKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0fSkudGhlbihkYXRhID0+IHtcblx0XHRsZXQgZm9ybWF0dGVkRGF0YSA9IHt9O1xuXHRcdGZvciAobGV0IHNldHRpbmcgb2YgZGF0YSkge1xuXHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZm9ybWF0dGVkRGF0YTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9zZXRTZXR0aW5nKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3NgLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdGJvZHk6IHtcblx0XHRcdGtleSwgdmFsdWUsXG5cdFx0fSxcblx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiXSwic291cmNlUm9vdCI6IiJ9