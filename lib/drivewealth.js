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
			value: function getSupportedCountries(cb) {
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
			key: "listCreditCards",
	
	
			/**
	   * @instance
	   */
			value: function listCreditCards() {
				return _listCreditCards(this.userID);
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
				return _addCreditCard(this.userID, cardToken);
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
				return _removeCreditCard(this.userID, cardID);
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
			key: "listCreditCards",
			value: function listCreditCards(userID) {
				return _listCreditCards(userID);
			}
		}, {
			key: "addCreditCard",
			value: function addCreditCard(userID, cardToken) {
				return _addCreditCard(userID, cardToken, cb);
			}
		}, {
			key: "removeCreditCard",
			value: function removeCreditCard(userID, cardID) {
				return _removeCreditCard(userID, cardID);
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
	
	
	function _listCreditCards(userID) {
		return (0, _request2.default)({
			method: "GET",
			endpoint: "/users/" + userID + "/credit-cards",
			sessionKey: _Sessions2.default.get(userID)
		}).then(function (_ref9) {
			var body = _ref9.body;
			return body;
		});
	}
	
	function _addCreditCard(userID, cardToken) {
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
	
	function _removeCreditCard(userID, cardID) {
		return (0, _request2.default)({
			method: "DELETE",
			endpoint: "/users/" + userID + "/credit-cards/" + cardID,
			sessionKey: _Sessions2.default.get(userID)
		}).then(function () {
			return undefined;
		});
	}
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMTdmZTdkMTVkMDQ1ODM3YTc3NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJnZXRTdWJzY3JpcHRpb24iLCJleHRyYWN0SURzIiwiYWRkU3Vic2NyaXB0aW9uIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiY2FuY2VsU3Vic2NyaXB0aW9uIiwibWV0aG9kIiwiZW5kcG9pbnQiLCJzZXNzaW9uS2V5IiwiZ2V0IiwidGhlbiIsImJvZHkiLCJvcmRlcnMiLCJtYXAiLCJvcmRlciIsInF1ZXJ5U3RyaW5nIiwibGVuZ3RoIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsInNsaWNlIiwiZ2V0RGF0ZSIsInBlcmZvcm1hbmNlIiwiYWNjb3VudCIsIlRZUEVTIiwiUFJBQ1RJQ0UiLCJyZXNwb25zZVR5cGUiLCJ0cmFuQW1vdW50IiwicGxhbklEIiwicGF5bWVudElEIiwicGFyYW1zIiwic3RhcnRzV2l0aCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJyZWR1Y2UiLCJ4IiwieSIsImNoYW5nZVN1YnNjcmlwdGlvbiIsIkJMT1RURVJfVFlQRVMiLCJDQVNIIiwiT1JERVJTIiwiVFJBTlNBQ1RJT05TIiwiUE9TSVRJT05TIiwiQUxMIiwiU1RBVFVTRVMiLCJQRU5ESU5HIiwiT1BFTiIsIk9QRU5fTk9fTkVXX1RSQURFUyIsIkNMT1NFRCIsIkxJVkUiLCJhZGRsSGVhZGVycyIsImhvc3QiLCJBUEkiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaGVhZGVyIiwiZW52IiwiSlNPTiIsInN0cmluZ2lmeSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaHR0cEltcGwiLCJzdGF0dXNDb2RlIiwicmVzSGVhZGVycyIsInJlc0JvZHkiLCJjb250ZW50VHlwZSIsImluZGV4T2YiLCJwYXJzZSIsImVyciIsIlN0cmluZyIsImVycm9yTWVzc2FnZSIsIm1lc3NhZ2UiLCJlcnJvciIsImFwcFR5cGVJRCIsImFwcFZlcnNpb24iLCJ3bHBJRCIsImFwcHNQYXJ0bmVySUQiLCJyZWZlcnJhbENvZGUiLCJBUFBTIiwiUkVQT1JUUyIsIlVBVCIsIlBST0QiLCJEcml2ZVdlYWx0aEVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJfa2V5cyIsIl9tYWluVXNlciIsInNlc3Npb25zIiwiU0VDX0ZFRV9SQVRFIiwiU0VDX0ZFRV9NSU4iLCJTRUNfRkVFX01BWCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiVEFGX0ZFRV9SQVRFIiwiVEFGX0ZFRV9NSU4iLCJUQUZfRkVFX01BWCIsInJlamVjdGlvblJlYXNvbiIsIm9yZFJlalJlYXNvbiIsInN0YXR1cyIsIm9yZFN0YXR1cyIsIm9yZFR5cGUiLCJvcmRlclR5cGUiLCJwcmljZSIsInN0b3BQcmljZSIsImxpbWl0UHJpY2UiLCJjYW5jZWwiLCJvcmRlcklEIiwiZ2V0QW55IiwidW5kZWZpbmVkIiwiaW5zdHJ1bWVudCIsInNpZGUiLCJxdHkiLCJhbW91bnRDYXNoIiwiY29tbWVudCIsImF1dG9TdG9wIiwid2FpdEZvckZpbGwiLCJmaWxsUmV0cnlJbnRlcnZhbCIsImZpbGxNYXhSZXRyaWVzIiwiTUFSS0VUIiwiaW5zdHJ1bWVudElEIiwiaWQiLCJvcmRlclF0eSIsIlNUT1AiLCJMSU1JVCIsInJldHJpZXMiLCJjaGVja1N0YXR1cyIsImdldEJ5SUQiLCJORVciLCJQQVJUSUFMX0ZJTEwiLCJzZXRUaW1lb3V0IiwiU0lERVMiLCJCVVkiLCJvcmRlclJlc3VsdHMiLCJvcmRlcnNNYXAiLCJhY2MiLCJuZXh0IiwiaWR4IiwicmVmZXJlbmNlSUQiLCJhbGwiLCJzdGF0dXNEZXRhaWxzIiwic2hvdWxkUmV0cnkiLCJyZWZlcmVuY2UiLCJ0aGlzU3RhdHVzIiwiY29tbWlzc2lvblNjaGVkdWxlIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWwiLCJ0b3RhbEZlZXNPbmx5IiwiYmFza2V0UHJpY2UiLCJiYXNrZXRTY2hlZHVsZSIsInNjaGVkdWxlIiwic2NoZWR1bGVJdGVtIiwiYmFza2V0U2l6ZSIsImJ5T3JkZXIiLCJtYXJrZXRQcmljZSIsIm9yZGVyUHJpY2UiLCJmcmFjdGlvbmFsUmF0ZSIsImJhc2VSYXRlIiwiTkVBUkVTVCIsIk1hdGgiLCJyb3VuZCIsIkNFSUwiLCJjZWlsIiwiRkxPT1IiLCJmbG9vciIsInNoYXJlQW1vdW50Um91bmRpbmciLCJtYXgiLCJiYXNlU2hhcmVzIiwiZXhjZXNzUmF0ZSIsInNlY0ZlZSIsInRhZkZlZSIsInBhc3NUaHJvdWdoRmVlcyIsIlNFTEwiLCJtaW4iLCJvcmRlclRvdGFsIiwiY29tbWlzc2lvbiIsImZlZXMiLCJzZWMiLCJ0YWYiLCJtdWx0aXBsZU9yZGVyRGVsdGEiLCJGSUxMIiwiQ0FOQ0VMRUQiLCJSRUpFQ1RFRCIsImxhbmd1YWdlIiwibWluQW1vdW50IiwibWF4QW1vdW50IiwiYW1vdW50IiwiZmlsdGVycyIsIm5hbWUiLCJjb3VudHJ5IiwiY3VycmVuY3kiLCJhbGxvd2VkIiwicHJpY2luZyIsImNvbmNhdCIsInNvcnQiLCJBTExPV0VEX1RZUEVTIiwiREVQT1NJVCIsIldJVEhEUkFXIiwiREVQT1NJVF9BTkRfV0lUSERSQVciLCJ0b0lTT1N0cmluZyIsInRyYW5zYWN0aW9uIiwidXJsIiwiY2IiLCJnZXRRdW90ZSIsInN5bWJvbCIsImNvbXByZXNzaW9uIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInN5bSIsIm9iaiIsInNwbGl0IiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIlRSQURFX1NUQVRVU0VTIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDSEFSVF9DT01QUkVTU0lPTlMiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0TGlzdEZvclVzZXJJRCIsImdldFNldHRpbmdzIiwidmFsdWUiLCJzZXRTZXR0aW5nIiwicmVtb3ZlIiwiZmlsZSIsInVwbG9hZERvY3VtZW50IiwiX2xpc3RDcmVkaXRDYXJkcyIsImNhcmRUb2tlbiIsIl9hZGRDcmVkaXRDYXJkIiwiY2FyZElEIiwiX3JlbW92ZUNyZWRpdENhcmQiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsImdldEJ5VXNlcklEIiwicmVqZWN0aW9uIiwiZW1haWwiLCJ1dG1DYW1wYWlnbiIsInV0bUNvbnRlbnQiLCJ1dG1NZWRpdW0iLCJ1dG1Tb3VyY2UiLCJ1dG1UZXJtIiwibG9naW5BdXRvbWF0aWNhbGx5IiwiZW1haWxBZGRyZXNzMSIsImxvZ2luIiwiYWRkcmVzc0xpbmUxIiwiYWRkcmVzc0xpbmUyIiwiY2l0eSIsImNvdW50cnlJRCIsInBob25lSG9tZSIsInBob25lV29yayIsInBob25lIiwic3RhdGVQcm92aW5jZSIsInppcFBvc3RhbENvZGUiLCJwaG9uZU1vYmlsZSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiQVBQUk9WRUQiLCJSRVZPS0VEIiwiRE9DVU1FTlRfVFlQRVMiLCJQSE9UT19JRCIsIlBST09GX09GX0FERFJFU1MiLCJQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1MiLCJfZ2V0U2V0dGluZ3MiLCJfZ2V0QWxsU2V0dGluZ3MiLCJfc2V0U2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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SUo0QixJQUpJLENBSUMsZ0JBQVE7QUFDZixPQUFJOE8sZ0JBQWdCLEVBQXBCO0FBRGU7QUFBQTtBQUFBOztBQUFBO0FBRWYsMEJBQW9CL1EsSUFBcEIsbUlBQTBCO0FBQUEsU0FBakJnUixPQUFpQjs7QUFDekJELG1CQUFjQyxRQUFReE4sR0FBdEIsSUFBNkJ3TixRQUFRWCxLQUFyQztBQUNBO0FBSmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZixVQUFPVSxhQUFQO0FBQ0EsR0FWTSxDQUFQO0FBV0E7O0FBRUQsVUFBU3lDLFdBQVQsQ0FBcUJuVCxNQUFyQixFQUFxQ21ELEdBQXJDLEVBQWtENk0sS0FBbEQsRUFBaUU7QUFDaEUsU0FBTyx1QkFBUTtBQUNkeE8sV0FBUSxNQURNO0FBRWRDLHlCQUFvQnpCLE1BQXBCLGNBRmM7QUFHZDBCLGVBQVksbUJBQVNDLEdBQVQsQ0FBYTNCLE1BQWIsQ0FIRTtBQUlkNkIsU0FBTTtBQUNMc0IsWUFESyxFQUNBNk07QUFEQTtBQUpRLEdBQVIsRUFPSnBPLElBUEksQ0FPQztBQUFBLFVBQU1rRyxTQUFOO0FBQUEsR0FQRCxDQUFQO0FBUUE7O21CQUVjdkksSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxN2ZlN2QxNWQwNDU4MzdhNzc3IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEVOVklST05NRU5UUyxcblx0SE9TVFMsXG5cblx0QWNjb3VudCxcblx0Q29uZmlnLFxuXHRFcnJvcixcblx0RnVuZGluZyxcblx0SW5zdHJ1bWVudCxcblx0T3JkZXIsXG5cdFJlcG9ydHMsXG5cdFVzZXIsXG5cdFNlc3Npb25zLFxuXG5cdHNldHVwLFxuXHRyZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyUGFyZW50RGV0YWlscyB9IGZyb20gXCIuL09yZGVyXCI7XG5cbmV4cG9ydCB0eXBlIENvbW1pc3Npb25TY2hlZHVsZSA9IHtcblx0YmFzZVJhdGU6IG51bWJlcixcblx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdGZyYWN0aW9uYWxSYXRlOiBudW1iZXIsXG5cdHNoYXJlQW1vdW50Um91bmRpbmc6IG51bWJlcixcblx0c3Vic2NyaXB0aW9uOiBib29sZWFuLFxuXHRiYXNrZXRTY2hlZHVsZToge1xuXHRcdGJhc2VTaGFyZXM6IG51bWJlcixcblx0XHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdFx0c2NoZWR1bGU6IEFycmF5PHtcblx0XHRcdGJhc2tldFNpemU6IG51bWJlcixcblx0XHRcdGJhc2tldFByaWNlOiBudW1iZXIsXG5cdFx0fT4sXG5cdH0sXG5cdHBhc3NUaHJvdWdoRmVlczogYm9vbGVhbixcbn07XG5cbi8qKlxuICogQGNsYXNzIEFjY291bnRcbiAqIEBkZXNjcmlwdGlvbiBBbiBhY2NvdW50IGJlbG9uZ2luZyB0byBhIFVzZXIuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2FjY291bnRzX2dldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0YWNjb3VudFR5cGU6IHN0cmluZztcblx0Y3VycmVuY3lJRDogc3RyaW5nO1xuXHRpYklEOiBzdHJpbmc7XG5cdG1hcmdpbjogc3RyaW5nO1xuXHRuaWNrbmFtZTogc3RyaW5nO1xuXHRvcGVuZWRXaGVuOiBzdHJpbmc7XG5cdHBhdHRlcm5EYXlUcmFkZXM6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHRyYWRpbmdUeXBlOiBzdHJpbmc7XG5cdGFjY291bnRNZ210VHlwZTogc3RyaW5nO1xuXHRjb21taXNzaW9uU2NoZWR1bGU6IENvbW1pc3Npb25TY2hlZHVsZTtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIEJMT1RURVJfVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVNIXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPUkRFUlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFRSQU5TQUNUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUE9TSVRJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTExcblx0ICovXG5cdHN0YXRpYyBCTE9UVEVSX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106ID9zdHJpbmd9ID0ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOX05PX05FV19UUkFERVNcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQUkFDVElDRVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTElWRVxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRCbG90dGVyKHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRCbG90dGVyKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJsb3R0ZXIodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nLCB0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRTdW1tYXJ5L2Bcblx0XHRcdFx0KyBgJHthY2NvdW50SUR9JHt0eXBlID8gXCIvXCIgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmIChib2R5Lm9yZGVycykge1xuXHRcdFx0XHRib2R5Lm9yZGVycyA9IGJvZHkub3JkZXJzLm1hcCgob3JkZXIpID0+IG5ldyBPcmRlcihvcmRlcikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHR5cGUgPyBib2R5W3R5cGVdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0Z2V0UGVyZm9ybWFuY2UoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRQZXJmb3JtYW5jZSh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIC4uLmFyZ3VtZW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdHN0YXRpYyBnZXRQZXJmb3JtYW5jZSh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSBhcmd1bWVudHNbM107XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7YWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnBlcmZvcm1hbmNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHBsYWNlT3JkZXIodHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpOiBQcm9taXNlPHN0cmluZyB8IE9iamVjdD4ge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHM6IE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0RnVuZGluZ01ldGhvZHMob3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRvcHRpb25zLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdG9wdGlvbnMuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMob3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2VuZXJhdGVEb3dubG9hZFVSTCh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIGZpbGVLZXkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRMaXN0Rm9yVXNlcklEKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9hY2NvdW50c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoYWNjb3VudCA9PiBuZXcgQWNjb3VudChhY2NvdW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjcmVhdGUodXNlcklEOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG5cdFx0aWYgKHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0UpIHtcblx0XHRcdGRhdGEgPSB7XG5cdFx0XHRcdHVzZXJJRCxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiBcImZ1bGxcIixcblx0XHRcdFx0dHJhbkFtb3VudDogZGF0YSxcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiB0eXBlID09PSBBY2NvdW50LlRZUEVTLlBSQUNUSUNFXG5cdFx0XHRcdD8gXCIvc2lnbnVwcy9wcmFjdGljZVwiXG5cdFx0XHRcdDogXCIvc2lnbnVwcy9saXZlXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IGRhdGEsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2Rcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcblx0ICovXG5cdHN0YXRpYyBjaGFuZ2VTdWJzY3JpcHRpb24obWV0aG9kOiBzdHJpbmcsIHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdHBsYW5JRCxcblx0XHRwYXltZW50SUQsXG5cdH06IHtcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRwbGFuSUQ6IHN0cmluZyxcblx0XHRwYXltZW50SUQ6IHN0cmluZyxcblx0fSk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzLyR7YWNjb3VudElEfS9zdWJzY3JpcHRpb25zYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogbWV0aG9kLnN0YXJ0c1dpdGgoXCJQXCIpICYmIHtcblx0XHRcdFx0cGxhbklELFxuXHRcdFx0XHRbcGF5bWVudElELnN0YXJ0c1dpdGgoXCJjYXJkXCIpID8gXCJjYXJkSURcIiA6IFwiYmFua0FjY291bnRJRFwiXTogcGF5bWVudElELFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHJlcXVlc3QoXG5cdFx0XHRPYmplY3Qua2V5cyhwYXJhbXMpXG5cdFx0XHRcdC5maWx0ZXIoa2V5ID0+IHBhcmFtc1trZXldKVxuXHRcdFx0XHQucmVkdWNlKCh4LCB5KSA9PiBPYmplY3QuYXNzaWduKHt9LCB4LCB7IFt5XTogcGFyYW1zW3ldIH0pLCB7fSksXG5cdFx0KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmNoYW5nZVN1YnNjcmlwdGlvbihcIkdFVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUE9TVFwiLCBvcHRpb25zKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgdXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuY2hhbmdlU3Vic2NyaXB0aW9uKFwiUFVUXCIsIG9wdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWxTdWJzY3JpcHRpb24ob3B0aW9uczogT2JqZWN0KTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jaGFuZ2VTdWJzY3JpcHRpb24oXCJERUxFVEVcIiwgb3B0aW9ucyk7XG5cdH1cblxuXHRleHRyYWN0SURzKG9wdGlvbnM6IE9iamVjdCk6IE9iamVjdCB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcblx0XHRcdHVzZXJJRDogdGhpcy51c2VySUQsXG5cdFx0XHRhY2NvdW50SUQ6IHRoaXMuYWNjb3VudElELFxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3Vic2NyaXB0aW9uKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQuZ2V0U3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcygpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGFkZFN1YnNjcmlwdGlvbihvcHRpb25zOiBPYmplY3QpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiBBY2NvdW50LmFkZFN1YnNjcmlwdGlvbih0aGlzLmV4dHJhY3RJRHMob3B0aW9ucykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBkYXRlU3Vic2NyaXB0aW9uKG9wdGlvbnM6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIEFjY291bnQudXBkYXRlU3Vic2NyaXB0aW9uKHRoaXMuZXh0cmFjdElEcyhvcHRpb25zKSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWxTdWJzY3JpcHRpb24oKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5jYW5jZWxTdWJzY3JpcHRpb24odGhpcy5leHRyYWN0SURzKCkpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY2NvdW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IERyaXZlV2VhbHRoRXJyb3IsIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIH0gZnJvbSBcIi4vRXJyb3JcIjtcblxuLyoqXG4gKiBAZnVuY3Rpb24gcmVxdWVzdFxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGx5LCBpdCBpcyB1bm5lY2Vzc2FyeSB0byB1c2UgdGhpcyBmdW5jdGlvbiBhbmQgdGhpcyBpcyBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuIENhbGwgcmVxdWVzdCgpIGlmIHlvdSBuZWVkIHRvIG1ha2UgYSBjdXN0b20gQVBJIGNhbGwgdGhhdCBpcyBub3QgY292ZXJlZCBieSBhbm90aGVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm1ldGhvZFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuZW5kcG9pbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNlc3Npb25LZXlcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJvZHlcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIHN0cmluZz59IG9wdGlvbnMuYWRkbEhlYWRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmhvc3QgLSBPbmUgb2YgQ29uZmlnLkhPU1RTXG4gKiBAcmV0dXJucyB7UHJvbWlzZS48e2JvZHk6IHN0cmluZywgc3RhdHVzQ29kZTogbnVtYmVyLCBoZWFkZXJzOiBPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fT59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVlc3Qoe1xuXHRtZXRob2QgPSBcIkdFVFwiLFxuXHRlbmRwb2ludCxcblx0c2Vzc2lvbktleSxcblx0Ym9keSxcblx0YWRkbEhlYWRlcnMgPSB7fSxcblx0aG9zdCA9IEhPU1RTLkFQSSxcbn06IHtcblx0bWV0aG9kPzogc3RyaW5nLFxuXHRlbmRwb2ludDogc3RyaW5nLFxuXHRzZXNzaW9uS2V5Pzogc3RyaW5nLFxuXHRib2R5PzogYW55LFxuXHRhZGRsSGVhZGVycz86IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9LFxuXHRob3N0Pzogc3RyaW5nLFxufSkge1xuXHRjb25zdCBoZWFkZXJzOiB7W2hlYWRlcjogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHR9O1xuXHRpZiAobWV0aG9kID09PSBcIlBPU1RcIiB8fCBtZXRob2QgPT09IFwiUFVUXCIgfHwgbWV0aG9kID09PSBcIlBBVENIXCIpIHtcblx0XHRoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5cdH1cblx0aWYgKHNlc3Npb25LZXkpIHtcblx0XHRoZWFkZXJzW1wieC1teXNvbG9tZW8tc2Vzc2lvbi1rZXlcIl0gPSBzZXNzaW9uS2V5O1xuXHR9XG5cdGZvciAoY29uc3QgaGVhZGVyIGluIGFkZGxIZWFkZXJzKSB7XG5cdFx0aGVhZGVyc1toZWFkZXJdID0gYWRkbEhlYWRlcnNbaGVhZGVyXTtcblx0fVxuXG5cdGVuZHBvaW50ID0gQ29uZmlnLmVudltob3N0XSArIGVuZHBvaW50O1xuXG5cdGlmIChoZWFkZXJzW1wiQ29udGVudC1UeXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0Q29uZmlnLmh0dHBJbXBsKG1ldGhvZCwgZW5kcG9pbnQsIGhlYWRlcnMsIGJvZHksIChzdGF0dXNDb2RlLCByZXNIZWFkZXJzLCByZXNCb2R5KSA9PiB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IHJlc0hlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gfHwgcmVzSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSB8fCBcIlwiO1xuXHRcdFx0aWYgKHJlc0JvZHkgJiYgY29udGVudFR5cGUuaW5kZXhPZihcImFwcGxpY2F0aW9uL2pzb25cIikgIT09IC0xKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmVzQm9keSA9IEpTT04ucGFyc2UocmVzQm9keSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdC8vIHJlc0JvZHkgd2lsbCByZW1haW4gYXMgaXNcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoU3RyaW5nKHN0YXR1c0NvZGUpWzBdID09PSBcIjJcIiB8fCBTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiM1wiKSB7XG5cdFx0XHRcdHJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IHJlc0JvZHksXG5cdFx0XHRcdFx0c3RhdHVzQ29kZSxcblx0XHRcdFx0XHRoZWFkZXJzOiByZXNIZWFkZXJzLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBlcnJvck1lc3NhZ2U7XG5cdFx0XHRcdGlmIChyZXNCb2R5KSB7XG5cdFx0XHRcdFx0ZXJyb3JNZXNzYWdlID0gcmVzQm9keS5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KHJlc0JvZHkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGVycm9yID0gc3RhdHVzQ29kZSA9PT0gNDAxXG5cdFx0XHRcdFx0PyBuZXcgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKVxuXHRcdFx0XHRcdDogbmV3IERyaXZlV2VhbHRoRXJyb3IoZXJyb3JNZXNzYWdlLCByZXNCb2R5LCBzdGF0dXNDb2RlLCByZXNIZWFkZXJzKTtcblx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVxdWVzdC5qcyIsIi8qKlxuICogQG5hbWVzcGFjZSBDb25maWdcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IHtcblx0ZW52OiBudWxsLFxuXHRodHRwSW1wbDogbnVsbCxcblx0YXBwVHlwZUlEOiBudWxsLFxuXHRhcHBWZXJzaW9uOiBudWxsLFxuXHR3bHBJRDogbnVsbCxcblx0YXBwc1BhcnRuZXJJRDogbnVsbCxcblx0cmVmZXJyYWxDb2RlOiBudWxsLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBIT1NUU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQSVxuICogQHByb3BlcnR5IHtzdHJpbmd9IEFQUFNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRVBPUlRTXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEhPU1RTID0ge1xuXHRBUEk6IFwiYXBpXCIsXG5cdEFQUFM6IFwiYXBwc1wiLFxuXHRSRVBPUlRTOiBcInJlcG9ydHNcIixcbn07XG5cbi8qKlxuICogU2VydmVycyB0byBzZW5kIGEgcmVxdWVzdCB0b1xuICogQG5hbWUgRU5WSVJPTk1FTlRTXG4gKiBAcHJvcGVydHkge29iamVjdH0gVUFUXG4gKiBAcHJvcGVydHkge29iamVjdH0gUFJPRFxuICogQG1lbWJlcm9mIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKi9cbmV4cG9ydCBjb25zdCBFTlZJUk9OTUVOVFMgPSB7XG5cdFVBVDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHA6Ly9hcGkuZHJpdmV3ZWFsdGguaW8vdjFcIixcblx0XHRbSE9TVFMuQVBQU106IFwiaHR0cDovL2FwcHMuZHJpdmV3ZWFsdGguaW9cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cDovL3JlcG9ydHMuZHJpdmV3ZWFsdGguaW9cIixcblx0fSxcblx0UFJPRDoge1xuXHRcdFtIT1NUUy5BUEldOiBcImh0dHBzOi8vYXBpLmRyaXZld2VhbHRoLm5ldC92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwczovL2FwcHMuZHJpdmV3ZWFsdGguY29tXCIsXG5cdFx0W0hPU1RTLlJFUE9SVFNdOiBcImh0dHBzOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5uZXRcIixcblx0fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCh7XG5cdGVudixcblx0aHR0cEltcGwsXG5cdGFwcFR5cGVJRCxcblx0YXBwVmVyc2lvbixcblx0d2xwSUQgPSBcIkRXXCIsXG5cdGFwcHNQYXJ0bmVySUQsXG5cdHJlZmVycmFsQ29kZSxcbn0pIHtcblx0Q29uZmlnLmVudiA9IGVudjtcblx0Q29uZmlnLmh0dHBJbXBsID0gaHR0cEltcGw7XG5cdENvbmZpZy5hcHBUeXBlSUQgPSBhcHBUeXBlSUQ7XG5cdENvbmZpZy5hcHBWZXJzaW9uID0gYXBwVmVyc2lvbjtcblx0Q29uZmlnLndscElEID0gd2xwSUQ7XG5cdENvbmZpZy5hcHBzUGFydG5lcklEID0gYXBwc1BhcnRuZXJJRCB8fCB3bHBJRDtcblx0Q29uZmlnLnJlZmVycmFsQ29kZSA9IHJlZmVycmFsQ29kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25maWcuanMiLCJpbXBvcnQgRXh0ZW5kYWJsZUVycm9yIGZyb20gXCJleHRlbmRhYmxlLWVycm9yLWNsYXNzXCI7XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aEVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvciBleHRlbmRzIEV4dGVuZGFibGVFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmJvZHkgPSBib2R5O1xuXHRcdHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG5cdFx0dGhpcy5oZWFkZXJzID0gaGVhZGVycztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdERyaXZlV2VhbHRoRXJyb3IsXG5cdERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRhYmxlQnVpbHRpbihjbHMpIHtcbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gUmVmbGVjdC5jb25zdHJ1Y3QoY2xzLCBBcnJheS5mcm9tKGFyZ3VtZW50cykpO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGNscy5wcm90b3R5cGUsIHtcbiAgICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgICAgIHZhbHVlOiBjbHMsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKEV4dGVuZGFibGVCdWlsdGluLCBjbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIEV4dGVuZGFibGVCdWlsdGluLl9fcHJvdG9fXyA9IGNscztcbiAgICB9XG5cbiAgICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbnZhciBFeHRlbmRhYmxlRXJyb3IgPSBmdW5jdGlvbiAoX2V4dGVuZGFibGVCdWlsdGluMikge1xuICAgIF9pbmhlcml0cyhFeHRlbmRhYmxlRXJyb3IsIF9leHRlbmRhYmxlQnVpbHRpbjIpO1xuXG4gICAgZnVuY3Rpb24gRXh0ZW5kYWJsZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4dGVuZGFibGVFcnJvcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4dGVuZGFibGVFcnJvcikuY2FsbCh0aGlzLCBtZXNzYWdlKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IF90aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgX3RoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc3RhY2sgPSBuZXcgRXJyb3IobWVzc2FnZSkuc3RhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlRXJyb3I7XG59KF9leHRlbmRhYmxlQnVpbHRpbihFcnJvcikpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4dGVuZGFibGVFcnJvcjtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZGFibGUtZXJyb3ItY2xhc3MvZGlzdC9pbmRleC5lczUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgU2Vzc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0ge307XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzYXZlKHVzZXJJRCwgc2Vzc2lvbktleSkge1xuICAgICAgICB0aGlzLl9rZXlzW3VzZXJJRF0gPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLl9tYWluVXNlciA9IHVzZXJJRDtcbiAgICB9XG5cbiAgICBnZXQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxuXG4gICAgZ2V0QW55KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2V5c1t0aGlzLl9tYWluVXNlcl07XG4gICAgfVxuXG4gICAgcmVtb3ZlKHVzZXJJRCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fa2V5c1t1c2VySURdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNlc3Npb25zID0gbmV3IFNlc3Npb25zKCk7XG5leHBvcnQgZGVmYXVsdCBzZXNzaW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZXNzaW9ucy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuaW1wb3J0IHR5cGUgeyBDb21taXNzaW9uU2NoZWR1bGUgfSBmcm9tIFwiLi9BY2NvdW50XCI7XG5pbXBvcnQgdHlwZSBJbnN0cnVtZW50IGZyb20gXCIuL0luc3RydW1lbnRcIjtcblxuY29uc3QgU0VDX0ZFRV9SQVRFID0gMC4wMDAwMjMxO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IHR5cGUgT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRhY2NvdW50SUQ6IHN0cmluZyxcblx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdHVzZXJJRDogc3RyaW5nLFxuXHRhY2NvdW50VHlwZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIE5ld09yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRzaWRlOiBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG5cdHByaWNlPzogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIE5ld0NhcnRPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIE9yZGVyXG4gKiBAZGVzY3JpcHRpb24gQW4gb3JkZXIgY3JlYXRlZCBmb3IgYW4gQWNjb3VudC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X21hcmtldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cdG9yZGVySUQ6IHN0cmluZztcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRjdW1RdHk6IG51bWJlcjtcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdGNvbW1lbnQ6IHN0cmluZztcblx0Y29tbWlzc2lvbjogbnVtYmVyO1xuXHRjcmVhdGVkQnlJRDogc3RyaW5nO1xuXHRjcmVhdGVkV2hlbjogc3RyaW5nO1xuXHRleGVjdXRlZFdoZW46IHN0cmluZztcblx0Z3Jvc3NUcmFkZUFtdDogbnVtYmVyO1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bGVhdmVzUXR5OiBzdHJpbmc7XG5cdG9yZGVyTm86IHN0cmluZztcblx0b3JkZXJRdHk6IG51bWJlcjtcblx0c2lkZTogc3RyaW5nO1xuXHRhdXRvU3RvcDogP251bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHJlamVjdGlvblJlYXNvbjogP3N0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHR5cGU6IG51bWJlcjtcblx0cHJpY2U6ID9udW1iZXI7XG5cdGVmZmVjdGl2ZVByaWNlOiA/bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU0lERVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQlVZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUxMXG5cdCAqL1xuXHRzdGF0aWMgU0lERVM6IHtbc2lkZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQVJLRVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IExJTUlUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVE9QXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTkVXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUFMX0ZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIE9yZGVyLmNhbmNlbCh0aGlzLm9yZGVySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IE9yZGVyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIElmIHdhaXRGb3JGaWxsIGlzIHRydWUsIGFuIE9yZGVyIHdpbGwgYmUgcmV0dXJuZWQuIE90aGVyd2lzZSwgYW4gb3JkZXJJRCB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZShcblx0XHR0eXBlOiBzdHJpbmcsXG5cdFx0e1xuXHRcdFx0YWNjb3VudElELFxuXHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0dXNlcklELFxuXHRcdFx0YWNjb3VudFR5cGUsXG5cdFx0fTogT3JkZXJQYXJlbnREZXRhaWxzLFxuXHRcdHtcblx0XHRcdG9yZGVyOiB7XG5cdFx0XHRcdGluc3RydW1lbnQsXG5cdFx0XHRcdHNpZGUsXG5cdFx0XHRcdHF0eSxcblx0XHRcdFx0YW1vdW50Q2FzaCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0YXV0b1N0b3AsXG5cdFx0XHRcdHByaWNlLFxuXHRcdFx0fSxcblx0XHRcdHdhaXRGb3JGaWxsID0gdHJ1ZSxcblx0XHRcdGZpbGxSZXRyeUludGVydmFsID0gMTAwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXI6IE5ld09yZGVyLFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHN0cmluZyB8IE9yZGVyPiB7XG5cdFx0aWYgKGFtb3VudENhc2ggJiYgcXR5KSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJcXFwicXR5XFxcIiBhbmQgXFxcImFtb3VudENhc2hcXFwiIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuXCIpO1xuXHRcdH1cblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUICYmICFwcmljZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcXFwicHJpY2UuXFxcIlwiKTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCAmJiBhdXRvU3RvcCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcImF1dG9TdG9wXFxcIiBpcyBvbmx5IGFsbG93ZWQgZm9yIG1hcmtldCBvcmRlcnMuXCIpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvb3JkZXJzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0aW5zdHJ1bWVudElEOiBpbnN0cnVtZW50Lmluc3RydW1lbnRJRCB8fCBpbnN0cnVtZW50LmlkIHx8IGluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiB0eXBlLFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRvcmRlclF0eTogcXR5IHx8IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogYW1vdW50Q2FzaCB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuU1RPUCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRsaW1pdFByaWNlOiB0eXBlID09PSBPcmRlci5UWVBFUy5MSU1JVCA/IHByaWNlIDogdW5kZWZpbmVkLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0aWYgKHR5cGUgIT09IE9yZGVyLlRZUEVTLk1BUktFVCkgZmlsbE1heFJldHJpZXMgPSAxO1xuXHRcdFx0aWYgKCF3YWl0Rm9yRmlsbCkgcmV0dXJuIGJvZHkub3JkZXJJRDtcblxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0bGV0IHJldHJpZXMgPSBmaWxsTWF4UmV0cmllcztcblx0XHRcdFx0Y29uc3QgY2hlY2tTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXHRcdFx0XHRcdE9yZGVyLmdldEJ5SUQoYm9keS5vcmRlcklEKS50aGVuKG9yZGVyID0+IHtcblx0XHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyKTtcblxuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHRvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLk5FV1xuXHRcdFx0XHRcdFx0XHQmJiBvcmRlci5zdGF0dXMgIT09IE9yZGVyLlNUQVRVU0VTLlBBUlRJQUxfRklMTFxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyUmVzdWx0cyk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklELCB1c2VySUQsIChlcnJvciwgc3RhdHVzRGV0YWlscykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlcnJvcikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRvcmRlcnNNYXBbb3JkZXIucmVmZXJlbmNlSURdID0gc3RhdHVzRGV0YWlscztcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSkpLFxuXHRcdFx0XHRcdCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgc2hvdWxkUmV0cnkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgcmVmZXJlbmNlIGluIG9yZGVyc01hcCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aGlzU3RhdHVzID0gb3JkZXJzTWFwW3JlZmVyZW5jZV0uc3RhdHVzO1xuXHRcdFx0XHRcdFx0XHRpZiAoIXRoaXNTdGF0dXNcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5ORVdcblx0XHRcdFx0XHRcdFx0XHR8fCB0aGlzU3RhdHVzID09PSBPcmRlci5TVEFUVVNFUy5QQVJUSUFMX0ZJTExcblx0XHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdFx0c2hvdWxkUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoc2hvdWxkUmV0cnkpIHtcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUob3JkZXJzTWFwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0c2V0VGltZW91dChjaGVja1N0YXR1cywgZmlsbFJldHJ5SW50ZXJ2YWwpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGVzdGltYXRlQ29tbWlzc2lvbihcblx0XHRvcmRlcnM6IEFycmF5PHtcblx0XHRcdHNpZGU6IHN0cmluZyxcblx0XHRcdHF0eTogbnVtYmVyLFxuXHRcdFx0bWFya2V0UHJpY2U6IG51bWJlcixcblx0XHRcdHJlZmVyZW5jZUlEOiBzdHJpbmcsXG5cdFx0fT4sXG5cdFx0Y29tbWlzc2lvblNjaGVkdWxlOiBDb21taXNzaW9uU2NoZWR1bGUsXG5cdCk6IHtcblx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdG11bHRpcGxlT3JkZXJEZWx0YTogbnVtYmVyLFxuXHRcdGJ5T3JkZXI6IHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IHtcblx0XHRcdHRvdGFsOiBudW1iZXIsXG5cdFx0XHRjb21taXNzaW9uOiBudW1iZXIsXG5cdFx0XHRmZWVzOiB7XG5cdFx0XHRcdHNlYzogbnVtYmVyLFxuXHRcdFx0XHR0YWY6IG51bWJlcixcblx0XHRcdH0sXG5cdFx0fX1cblx0fSB7XG5cdFx0b3JkZXJzID0gQXJyYXkuaXNBcnJheShvcmRlcnMpID8gb3JkZXJzIDogW29yZGVyc107XG5cdFx0bGV0IHRvdGFsID0gMDtcblx0XHRsZXQgdG90YWxGZWVzT25seSA9IDA7XG5cdFx0bGV0IGJhc2tldFByaWNlO1xuXG5cdFx0Y29uc3QgeyBiYXNrZXRTY2hlZHVsZSB9ID0gY29tbWlzc2lvblNjaGVkdWxlO1xuXHRcdGlmIChiYXNrZXRTY2hlZHVsZSAmJiBiYXNrZXRTY2hlZHVsZS5zY2hlZHVsZSkge1xuXHRcdFx0Zm9yIChjb25zdCBzY2hlZHVsZUl0ZW0gb2YgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdFx0aWYgKHNjaGVkdWxlSXRlbS5iYXNrZXRTaXplID09PSBvcmRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmFza2V0UHJpY2UgPSBzY2hlZHVsZUl0ZW0uYmFza2V0UHJpY2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBieU9yZGVyID0ge307XG5cdFx0Zm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcblx0XHRcdGNvbnN0IHsgcXR5LCBtYXJrZXRQcmljZSwgc2lkZSwgcmVmZXJlbmNlSUQgfSA9IG9yZGVyO1xuXG5cdFx0XHRsZXQgb3JkZXJQcmljZSA9IHF0eSA8IDFcblx0XHRcdFx0PyBjb21taXNzaW9uU2NoZWR1bGUuZnJhY3Rpb25hbFJhdGVcblx0XHRcdFx0OiBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVJhdGU7XG5cdFx0XHRvcmRlclByaWNlICs9IChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdE5FQVJFU1Q6IE1hdGgucm91bmQsXG5cdFx0XHRcdFx0Q0VJTDogTWF0aC5jZWlsLFxuXHRcdFx0XHRcdEZMT09SOiBNYXRoLmZsb29yLFxuXHRcdFx0XHR9W2NvbW1pc3Npb25TY2hlZHVsZS5zaGFyZUFtb3VudFJvdW5kaW5nXShcblx0XHRcdFx0XHRNYXRoLm1heCgwLCBxdHkgLSBjb21taXNzaW9uU2NoZWR1bGUuYmFzZVNoYXJlcyksXG5cdFx0XHRcdCkgKiBjb21taXNzaW9uU2NoZWR1bGUuZXhjZXNzUmF0ZVxuXHRcdFx0KTtcblxuXHRcdFx0bGV0IHNlY0ZlZSA9IDA7XG5cdFx0XHRsZXQgdGFmRmVlID0gMDtcblx0XHRcdGlmIChjb21taXNzaW9uU2NoZWR1bGUucGFzc1Rocm91Z2hGZWVzICYmIHNpZGUgPT09IE9yZGVyLlNJREVTLlNFTEwpIHtcblx0XHRcdFx0dGFmRmVlID0gcXR5ICogbWFya2V0UHJpY2UgKiBUQUZfRkVFX1JBVEU7XG5cdFx0XHRcdHRhZkZlZSA9IE1hdGgubWluKFRBRl9GRUVfTUFYLCB0YWZGZWUpO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1heChUQUZfRkVFX01JTiwgdGFmRmVlKTtcblxuXHRcdFx0XHRpZiAocXR5ID49IDEpIHtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLmZsb29yKHF0eSkgKiBtYXJrZXRQcmljZSAqIFNFQ19GRUVfUkFURTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1pbihTRUNfRkVFX01BWCwgc2VjRmVlKTtcblx0XHRcdFx0XHRzZWNGZWUgPSBNYXRoLm1heChTRUNfRkVFX01JTiwgc2VjRmVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvcmRlclRvdGFsID0gb3JkZXJQcmljZSArIHNlY0ZlZSArIHRhZkZlZTtcblx0XHRcdHRvdGFsICs9IG9yZGVyVG90YWw7XG5cdFx0XHR0b3RhbEZlZXNPbmx5ICs9IHNlY0ZlZSArIHRhZkZlZTtcblxuXHRcdFx0YnlPcmRlcltyZWZlcmVuY2VJRF0gPSB7XG5cdFx0XHRcdHRvdGFsOiBvcmRlclRvdGFsLFxuXHRcdFx0XHRjb21taXNzaW9uOiBvcmRlclByaWNlLFxuXHRcdFx0XHRmZWVzOiB7XG5cdFx0XHRcdFx0c2VjOiBzZWNGZWUsXG5cdFx0XHRcdFx0dGFmOiB0YWZGZWUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0b3RhbDogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgKyB0b3RhbEZlZXNPbmx5KSA6IHRvdGFsLFxuXHRcdFx0bXVsdGlwbGVPcmRlckRlbHRhOiBiYXNrZXRQcmljZSA/IChiYXNrZXRQcmljZSAtIHRvdGFsKSA6IDAsXG5cdFx0XHRieU9yZGVyLFxuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PcmRlci5qcyIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuXG4vKipcbiAqIEBjbGFzcyBGdW5kaW5nXG4gKiBAZGVzY3JpcHRpb24gU3RhdGljIGNsYXNzIGZvciByZXRyaWV2aW5nIGZ1bmRpbmcgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmRpbmcge1xuXHQvKipcblx0ICogQG5hbWUgQUxMT1dFRF9UWVBFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IERFUE9TSVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFdJVEhEUkFXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUX0FORF9XSVRIRFJBV1xuXHQgKi9cblx0c3RhdGljIEFMTE9XRURfVFlQRVMgPSB7XG5cdFx0REVQT1NJVDogXCJERVBPU0lUXCIsXG5cdFx0V0lUSERSQVc6IFwiV0lUSERSQVdcIixcblx0XHRERVBPU0lUX0FORF9XSVRIRFJBVzogXCJERVBPU0lUX0FORF9XSVRIRFJBV1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvZnVuZGluZy9hY2gvc3Vic2NyaXB0aW9uLXBsYW5zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Y29uc3QgcHJpY2luZyA9IGJvZHkuZGF0YS5tYXAoKHByaWNpbmcpID0+XG5cdFx0XHRcdFtdLmNvbmNhdChwcmljaW5nKVxuXHRcdFx0XHRcdC5zb3J0KCh4LCB5KSA9PiB4LmFtb3VudCAtIHkuYW1vdW50KVxuXHRcdFx0XHRcdC5tYXAocHJpY2UgPT4gT2JqZWN0LmFzc2lnbihcblx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0cHJpY2UsXG5cdFx0XHRcdFx0XHR7IGFtb3VudDogTnVtYmVyKHByaWNlLmFtb3VudCAvIDEwMCkgfSxcblx0XHRcdFx0XHQpKSxcblx0XHRcdClbMF07XG5cblx0XHRcdHJldHVybiBwcmljaW5nO1xuXHRcdH0pO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRnVuZGluZy5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgeyBDb25maWcsIEhPU1RTIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcblxuLyoqXG4gKiBAY2xhc3MgUmVwb3J0c1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBhY2NvdW50IHJlcG9ydHMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9ydHMge1xuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYW5zYWN0aW9ucyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPUZpblRyYW5zXCJcblx0XHRcdCsgXCImUmVwb3J0Rm9ybWF0PUpTT05cIlxuXHRcdFx0KyBgJkFjY291bnROdW1iZXI9JHthY2NvdW50Tm99YFxuXHRcdFx0KyBgJkRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZEYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZ3bHBJRD0ke0NvbmZpZy53bHBJRH1gXG5cdFx0XHQrIFwiJkxhbmd1YWdlSUQ9ZW5fVVNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5SRVBPUlRTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvRHJpdmVXZWFsdGgke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGJvZHk6IHt9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnRyYW5zYWN0aW9uIHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGxhY2VkT3JkZXJzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRObzogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP3Nlc3Npb25LZXk9JHtTZXNzaW9ucy5nZXQodXNlcklEKX1gXG5cdFx0XHQrIFwiJlJlcG9ydE5hbWU9T3JkZXJUcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFN0YXRlbWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDJcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRyYWRlQ29uZmlybXMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZkYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDFcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFRheERvY3VtZW50cyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9hY2NvdW50SUQ9JHthY2NvdW50SUR9YFxuXHRcdFx0KyBgJmRhdGVTdGFydD0ke3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgYCZkYXRlRW5kPSR7ZW5kRGF0ZS50b0lTT1N0cmluZygpfWBcblx0XHRcdCsgXCImdHlwZT0wM1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5IHx8IFtdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2VuZXJhdGVEb3dubG9hZFVSTChcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRmaWxlS2V5OiBzdHJpbmcsXG5cdCk6IFByb21pc2U8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3RhdGVtZW50cy8ke2FjY291bnRJRH0vJHtmaWxlS2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS51cmwpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdXBwb3J0ZWRDb3VudHJpZXMoY2IpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvY291bnRyaWVzXCIsXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXBvcnRzLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuXG5leHBvcnQgdHlwZSBRdW90ZSA9IHtcblx0YmlkOiBudW1iZXIsXG5cdGFzazogbnVtYmVyLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgSW5zdHJ1bWVudFxuICogQGRlc2NyaXB0aW9uIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2dldF9pbnN0cnVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydW1lbnQge1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRleGNoYW5nZUlEOiBzdHJpbmc7XG5cdGluc3RydW1lbnRUeXBlSUQ6IHN0cmluZztcblx0b3JkZXJTaXplTWF4OiBudW1iZXI7XG5cdG9yZGVyU2l6ZU1pbjogbnVtYmVyO1xuXHRvcmRlclNpemVTdGVwOiBudW1iZXI7XG5cdHJhdGVBc2s6IG51bWJlcjtcblx0cmF0ZUJpZDogbnVtYmVyO1xuXHRyYXRlUHJlY2lzaW9uOiBudW1iZXI7XG5cdHN5bWJvbDogc3RyaW5nO1xuXHR0cmFkZVN0YXR1czogc3RyaW5nO1xuXHR1cmxJbWFnZTogc3RyaW5nO1xuXHR1cmxJbnZlc3Rvcjogc3RyaW5nO1xuXHRjaGFpa2luUGdyOiBzdHJpbmc7XG5cdHByaW9yQ2xvc2U6IG51bWJlcjtcblx0bWFya2V0U3RhdGU6IG51bWJlcjtcblx0ZnVuZGFtZW50YWxEYXRhTW9kZWw6IE9iamVjdDtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIFRSQURFX1NUQVRVU0VTXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gSU5BQ1RJVkVcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQ0xPU0VEXG5cdCAqL1xuXHRzdGF0aWMgVFJBREVfU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdElOQUNUSVZFOiBcIjBcIixcblx0XHRBQ1RJVkU6IFwiMVwiLFxuXHRcdENMT1NFRDogXCIyXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIENIQVJUX0NPTVBSRVNTSU9OU1xuXHQgKiBAbWVtYmVyb2YgSW5zdHJ1bWVudFxuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IERBWVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzFcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV81XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMzBcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IEhPVVJcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IFdFRUtcblx0ICovXG5cdHN0YXRpYyBDSEFSVF9DT01QUkVTU0lPTlM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdERBWTogMCxcblx0XHRNSU5VVEVfMTogMSxcblx0XHRNSU5VVEVfNTogNCxcblx0XHRNSU5VVEVfMzA6IDgsXG5cdFx0SE9VUjogOSxcblx0XHRXRUVLOiAxMCxcblx0fTtcblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJ5U3ltYm9sKHN5bWJvbDogQXJyYXk8c3RyaW5nPiB8IHN0cmluZyk6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4gfCBJbnN0cnVtZW50PiB7XG5cdFx0Y29uc3Qgc3ltYm9scyA9IHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBbc3ltYm9sXSA6IHN5bWJvbDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0Ym9keSA9IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBzeW1ib2wgPT09IFwic3RyaW5nXCIgPyBib2R5WzBdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlJRChpZDogc3RyaW5nLCBpbmNsdWRlRnVuZGFtZW50YWxzOiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8SW5zdHJ1bWVudD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzLyR7aWR9JHtpbmNsdWRlRnVuZGFtZW50YWxzID8gXCI/b3B0aW9ucz1GXCIgOiBcIlwifWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gbmV3IEluc3RydW1lbnQoYm9keSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRBbGwodHJhZGVTdGF0dXM/OiBzdHJpbmcgPSBcIi0xXCIpOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/dHJhZGVTdGF0dXM9JHt0cmFkZVN0YXR1c31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2VhcmNoKGNyaXRlcmlhOiB7IG5hbWU/OiBzdHJpbmcsIHN5bWJvbD86IHN0cmluZyB9KTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50Pj4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiP1wiO1xuXHRcdGlmIChjcml0ZXJpYS5zeW1ib2wpIHF1ZXJ5U3RyaW5nICs9IGBzeW1ib2w9JHtjcml0ZXJpYS5zeW1ib2x9JmA7XG5cdFx0aWYgKGNyaXRlcmlhLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGBuYW1lPSR7Y3JpdGVyaWEubmFtZX0mYDtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL2luc3RydW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkubWFwKGluc3RydW1lbnQgPT4gbmV3IEluc3RydW1lbnQoaW5zdHJ1bWVudCkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFF1b3RlKCk6IFByb21pc2U8UXVvdGU+IHtcblx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRRdW90ZSh0aGlzLnN5bWJvbCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFF1b3RlKHN5bWJvbDogc3RyaW5nIHwgSW5zdHJ1bWVudCB8IEFycmF5PHN0cmluZz4gfCBBcnJheTxJbnN0cnVtZW50Pik6IFByb21pc2U8UXVvdGUgfCB7W3N5bWJvbDogc3RyaW5nXTogUXVvdGV9PiB7XG5cdFx0Y29uc3Qgc3ltYm9sczogQXJyYXk8c3RyaW5nPiA9IChBcnJheS5pc0FycmF5KHN5bWJvbCkgPyBzeW1ib2wgOiBbc3ltYm9sXSlcblx0XHRcdC5tYXAoc3ltID0+IHN5bSBpbnN0YW5jZW9mIEluc3RydW1lbnQgPyBzeW0uc3ltYm9sIDogc3ltKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3F1b3Rlcz9zeW1ib2xzPSR7c3ltYm9scy5qb2luKFwiLFwiKX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0XHRhZGRsSGVhZGVyczoge1xuXHRcdFx0XHRBY2NlcHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXHRcdFx0Ym9keSA9IGJvZHkuc3BsaXQoXCJ8XCIpLnNsaWNlKDEwKTtcblx0XHRcdGZvciAoY29uc3QgcmF3UXVvdGUgb2YgYm9keSkge1xuXHRcdFx0XHRjb25zdCBwYXJzZWRRdW90ZSA9IHJhd1F1b3RlLnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0b2JqW3BhcnNlZFF1b3RlWzBdXSA9IHtcblx0XHRcdFx0XHRiaWQ6IE51bWJlcihwYXJzZWRRdW90ZVsxXSksXG5cdFx0XHRcdFx0YXNrOiBOdW1iZXIocGFyc2VkUXVvdGVbMl0pLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHN5bWJvbCkpIG9iaiA9IG9ialtzeW1ib2xzWzBdXTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRnZXRDaGFydERhdGEoY29tcHJlc3Npb246IG51bWJlcikge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG5cdFx0XHRyZXR1cm4gSW5zdHJ1bWVudC5nZXRDaGFydERhdGEodGhpcy5pbnN0cnVtZW50SUQsIGNvbXByZXNzaW9uLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgY29tcHJlc3Npb24sIGFyZ3VtZW50c1sxXSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZVN0YXJ0XG5cdCAqIEBwYXJhbSB7ZGF0ZX0gZGF0ZUVuZFxuXHQgKi9cblx0LyoqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0cmFkaW5nRGF5c1xuXHQgKi9cblx0c3RhdGljIGdldENoYXJ0RGF0YShpbnN0cnVtZW50SUQ6IHN0cmluZywgY29tcHJlc3Npb246IG51bWJlcik6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuXHRcdGxldCB0aW1lUGFyYW1zO1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRjb25zdCBkYXRlU3RhcnQgPSBhcmd1bWVudHNbMl0udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdGNvbnN0IGRhdGVFbmQgPSBhcmd1bWVudHNbM10udG9JU09TdHJpbmcoKS5yZXBsYWNlKC9cXC5cXGR7M30vLCBcIlwiKTtcblx0XHRcdHRpbWVQYXJhbXMgPSBgZGF0ZVN0YXJ0PSR7ZGF0ZVN0YXJ0fSZkYXRlRW5kPSR7ZGF0ZUVuZH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aW1lUGFyYW1zID0gYHRyYWRpbmdEYXlzPSR7YXJndW1lbnRzWzJdfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvYmFycz9pbnN0cnVtZW50SUQ9JHtpbnN0cnVtZW50SUR9JmNvbXByZXNzaW9uPSR7Y29tcHJlc3Npb259JiR7dGltZVBhcmFtc31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkuZGF0YS5zcGxpdChcInxcIikpO1xuXHR9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbnN0cnVtZW50LmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5pbXBvcnQgQWNjb3VudCBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbi8qKlxuICogQGNsYXNzIFVzZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHVzZXIgb2JqZWN0LiBVc2UgdGhlIGNvbnN0cnVjdG9yIGlmIHlvdSBoYXZlIGEgZmxhdCBKU09OIG9iamVjdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFjY2VzcyBpbnN0YW5jZSBtZXRob2RzIG9uLlxuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBTZWUgcmVzcG9uc2UgYXQge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0LXVzZXJ9XG4gKi9cbmNsYXNzIFVzZXIge1xuXHRjb3VudHJ5SUQ6IHN0cmluZztcblx0ZW1haWxBZGRyZXNzOiBzdHJpbmc7XG5cdGZpcnN0TmFtZTogc3RyaW5nO1xuXHRsYW5ndWFnZUlEOiBzdHJpbmc7XG5cdGxhc3ROYW1lOiBzdHJpbmc7XG5cdHBob25lTnVtYmVyOiBzdHJpbmc7XG5cdHJlZmVycmFsQ29kZTogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0dXNlcm5hbWU6IHN0cmluZztcblx0d2xwSUQ6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHVzQ2l0aXplbjogYm9vbGVhbjtcblx0bGFzdExvZ2luV2hlbjogc3RyaW5nO1xuXHRjaXRpemVuc2hpcDogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTE6IHN0cmluZztcblx0YWRkcmVzc0xpbmUyOiBzdHJpbmc7XG5cdGNpdHk6IHN0cmluZztcblx0c3RhdGVQcm92aW5jZTogc3RyaW5nO1xuXHR6aXBQb3N0YWxDb2RlOiBzdHJpbmc7XG5cdGZ1bGxOYW1lOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoZGF0YTogT2JqZWN0KSB7XG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblx0XHR0aGlzLmZ1bGxOYW1lID0gZGF0YS5maXJzdE5hbWUgKyBcIiBcIiArIGRhdGEubGFzdE5hbWU7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFBFTkRJTkdcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IEFQUFJPVkVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRUpFQ1RFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUkVWT0tFRFxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQ0xPU0VEXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdEFQUFJPVkVEOiAyLFxuXHRcdFJFSkVDVEVEOiAzLFxuXHRcdFJFVk9LRUQ6IDQsXG5cdFx0Q0xPU0VEOiA1LFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBET0NVTUVOVF9UWVBFU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBST09GX09GX0FERFJFU1Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAbWVtYmVyb2YgVXNlclxuXHQgKiBAY29uc3RhbnRcblx0ICovXG5cdHN0YXRpYyBET0NVTUVOVF9UWVBFUzoge1t0eXBlOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdFBIT1RPX0lEOiBcIlBpY3R1cmUgSURcIixcblx0XHRQUk9PRl9PRl9BRERSRVNTOiBcIlByb29mIG9mIGFkZHJlc3NcIixcblx0XHRQSE9UT19JRF9XSVRIX1BST09GX09GX0FERFJFU1M6IFwiUGljdHVyZSBJRF9Qcm9vZiBvZiBhZGRyZXNzXCIsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0QWNjb3VudHMoKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCBhbGwgc2V0dGluZ3Ncblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHJldHVybiB7UHJvbWlzZTxPYmplY3QuPHN0cmluZywgc3RyaW5nPj59XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IHNldHRpbmcgdmFsdWVcblx0ICogQHBhcmFtICB7c3RyaW5nfSB1c2VySURcblx0ICogQHBhcmFtICB7c3RyaW5nfSBrZXlcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0c3RhdGljIGdldFNldHRpbmdzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0Y29uc3Qga2V5ID0gYXJndW1lbnRzWzFdO1xuXHRcdGlmICgha2V5KSB7XG5cdFx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0XHRcdGZvciAoY29uc3Qgc2V0dGluZyBvZiBib2R5KSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmb3JtYXR0ZWREYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS52YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRnZXRTZXR0aW5ncygpIHtcblx0XHRjb25zdCBba2V5XSA9IGFyZ3VtZW50cztcblx0XHRyZXR1cm4gVXNlci5nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRrZXksIHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRzZXRTZXR0aW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1bnNldFNldHRpbmcoa2V5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3RoaXMudXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHRoaXMudXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlc2NyaXB0aW9uIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy91c2VyLXN0YXR1c31cblx0ICovXG5cdGdldFN0YXR1cygpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dGhpcy51c2VySUR9L3N0YXR1c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGxvZ291dCgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2VyU2Vzc2lvbnMvJHtTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodGhpcy51c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMucmVtb3ZlKHRoaXMudXNlcklEKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBVc2VyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvdXNlclNlc3Npb25zXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdFx0YXBwVHlwZUlEOiBDb25maWcuYXBwVHlwZUlELFxuXHRcdFx0XHRhcHBWZXJzaW9uOiBDb25maWcuYXBwVmVyc2lvbixcblx0XHRcdFx0bGFuZ3VhZ2VJRDogXCJlbl9VU1wiLFxuXHRcdFx0XHRvc1R5cGU6IFwidW5rbm93blwiLFxuXHRcdFx0XHRvc1ZlcnNpb246IFwidW5rbm93blwiLFxuXHRcdFx0XHRzY3JSZXM6IFwidW5rbm93blwiLFxuXHRcdFx0XHRpcEFkZHJlc3M6IFwidW5rbm93blwiLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMuc2F2ZShib2R5LnVzZXJJRCwgYm9keS5zZXNzaW9uS2V5KTtcblx0XHRcdHJldHVybiBVc2VyLmdldEJ5VXNlcklEKGJvZHkudXNlcklEKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgaXNVc2VybmFtZUF2YWlsYWJsZSh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gLFxuXHRcdH0pLnRoZW4oXG5cdFx0XHQoKSA9PiBmYWxzZSxcblx0XHRcdChyZWplY3Rpb24pID0+IHJlamVjdGlvbi5zdGF0dXNDb2RlID09PSA0MDRcblx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdDogUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9naW5BdXRvbWF0aWNhbGx5IC0gSWYgZmFsc2UsIG5vIHNlc3Npb24gd2lsbCBiZSBjcmVhdGVkLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHVuZGVmaW5lZCB8IFVzZXI+fSBJZiBsb2dpbkF1dG9tYXRpY2FsbHkgaXMgdHJ1ZSwgYSBVc2VyIHdpbGwgYmUgcmVzb2x2ZWQuXG5cdCAqL1xuXHRzdGF0aWMgY3JlYXRlKHtcblx0XHR1c2VybmFtZSxcblx0XHRwYXNzd29yZCxcblx0XHRmaXJzdE5hbWUsXG5cdFx0bGFzdE5hbWUsXG5cdFx0ZW1haWwsXG5cdFx0bGFuZ3VhZ2VJRCxcblx0XHRyZWZlcnJhbENvZGUgPSBDb25maWcucmVmZXJyYWxDb2RlLFxuXHRcdHV0bUNhbXBhaWduLFxuXHRcdHV0bUNvbnRlbnQsXG5cdFx0dXRtTWVkaXVtLFxuXHRcdHV0bVNvdXJjZSxcblx0XHR1dG1UZXJtLFxuXHR9LCBsb2dpbkF1dG9tYXRpY2FsbHk6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTx2b2lkIHwgVXNlcj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvc2lnbnVwcy9saXZlXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0ZW1haWxBZGRyZXNzMTogZW1haWwsXG5cdFx0XHRcdGxhbmd1YWdlSUQsXG5cdFx0XHRcdHdscElEOiBDb25maWcud2xwSUQsXG5cdFx0XHRcdHJlZmVycmFsQ29kZSxcblx0XHRcdFx0dXRtQ2FtcGFpZ24sXG5cdFx0XHRcdHV0bUNvbnRlbnQsXG5cdFx0XHRcdHV0bU1lZGl1bSxcblx0XHRcdFx0dXRtU291cmNlLFxuXHRcdFx0XHR1dG1UZXJtLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHtcblx0XHRcdGlmIChsb2dpbkF1dG9tYXRpY2FsbHkpIHtcblx0XHRcdFx0cmV0dXJuIFVzZXIubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKi9cblx0c3RhdGljIHVwZGF0ZSh7XG5cdFx0dXNlcklELFxuXHRcdGFkZHJlc3NMaW5lMSxcblx0XHRhZGRyZXNzTGluZTIsXG5cdFx0Y2l0eSxcblx0XHRjb3VudHJ5SUQsXG5cdFx0ZW1haWwsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cGhvbmVIb21lLFxuXHRcdHBob25lV29yayxcblx0XHRwaG9uZSxcblx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdHppcFBvc3RhbENvZGUsXG5cdH0pIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGFkZHJlc3NMaW5lMSxcblx0XHRcdFx0YWRkcmVzc0xpbmUyLFxuXHRcdFx0XHRjaXR5LFxuXHRcdFx0XHRjb3VudHJ5SUQsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRmaXJzdE5hbWUsXG5cdFx0XHRcdGxhc3ROYW1lLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHRwaG9uZUhvbWUsXG5cdFx0XHRcdHBob25lV29yayxcblx0XHRcdFx0cGhvbmVNb2JpbGU6IHBob25lLFxuXHRcdFx0XHRzdGF0ZVByb3ZpbmNlLFxuXHRcdFx0XHR6aXBQb3N0YWxDb2RlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHR1cGxvYWREb2N1bWVudChmaWxlOiBGaWxlLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gVXNlci51cGxvYWREb2N1bWVudCh0aGlzLnVzZXJJRCwgZmlsZSwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwbG9hZERvY3VtZW50KHVzZXJJRDogc3RyaW5nLCBmaWxlOiBGaWxlLCB0eXBlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGxpbmUgaXMgZm9yIGVzbGludFxuXHRcdC8qIGdsb2JhbCBGb3JtRGF0YSAqL1xuXHRcdGNvbnN0IGJvZHkgPSBuZXcgRm9ybURhdGEoKTtcblx0XHRib2R5LmFwcGVuZChcInRva2VuXCIsIHVzZXJJRCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudFR5cGVcIiwgdHlwZSk7XG5cdFx0Ym9keS5hcHBlbmQoXCJkb2N1bWVudEltYWdlXCIsIGZpbGUpO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9kb2N1bWVudHNcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0YWRkbEhlYWRlcnM6IHtcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRsaXN0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIF9saXN0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBsaXN0Q3JlZGl0Q2FyZHModXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gX2xpc3RDcmVkaXRDYXJkcyh1c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHRoaXMudXNlcklELCBjYXJkVG9rZW4pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBhZGRDcmVkaXRDYXJkKHVzZXJJRDogc3RyaW5nLCBjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIF9hZGRDcmVkaXRDYXJkKHVzZXJJRCwgY2FyZFRva2VuLCBjYik7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0IHJldHVybiBfcmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gX3JlbW92ZUNyZWRpdENhcmQodXNlcklELCBjYXJkSUQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9saXN0Q3JlZGl0Q2FyZHModXNlcklEOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xufVxuXG5mdW5jdGlvbiBfYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2NyZWRpdC1jYXJkc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJERUxFVEVcIixcblx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuZnVuY3Rpb24gX2dldFNldHRpbmdzKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZykge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5ncy8ke2tleX1gLFxuXHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRBbGxTZXR0aW5ncyh1c2VySUQ6IHN0cmluZykge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9zZXR0aW5nc2AsXG5cdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdH0pLnRoZW4oZGF0YSA9PiB7XG5cdFx0bGV0IGZvcm1hdHRlZERhdGEgPSB7fTtcblx0XHRmb3IgKGxldCBzZXR0aW5nIG9mIGRhdGEpIHtcblx0XHRcdGZvcm1hdHRlZERhdGFbc2V0dGluZy5rZXldID0gc2V0dGluZy52YWx1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZvcm1hdHRlZERhdGE7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRib2R5OiB7XG5cdFx0XHRrZXksIHZhbHVlLFxuXHRcdH0sXG5cdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==