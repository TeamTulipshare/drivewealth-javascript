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
			key: "updateSubscription",
			value: function updateSubscription(_ref5) {
				var subscriptionID = _ref5.subscriptionID,
				    planID = _ref5.planID,
				    bankAccountID = _ref5.bankAccountID,
				    cardID = _ref5.cardID;
	
				return (0, _request2.default)({
					method: "PATCH",
					endpoint: "/subscriptions/" + subscriptionID,
					sessionKey: _Sessions2.default.getAny(),
					body: {
						bankAccountID: bankAccountID,
						cardID: cardID,
						planID: planID
					}
				}).then(function (_ref6) {
					var body = _ref6.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "getSubscription",
			value: function getSubscription(userID, accountID) {
				return (0, _request2.default)({
					method: "GET",
					endpoint: "/users/" + userID + "/subscriptions",
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref7) {
					var body = _ref7.body;
					return body.filter(function (sub) {
						return sub.accountDetails.accountID === accountID;
					}).sort(function (a, b) {
						return new Date(b).getTime() - new Date(a).getTime();
					})[0];
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "addSubscription",
			value: function addSubscription(_ref8) {
				var accountID = _ref8.accountID,
				    planID = _ref8.planID,
				    bankAccountID = _ref8.bankAccountID,
				    cardID = _ref8.cardID;
	
				return (0, _request2.default)({
					method: "POST",
					endpoint: "/subscriptions",
					sessionKey: _Sessions2.default.getAny(),
					body: {
						accountID: accountID,
						bankAccountID: bankAccountID,
						cardID: cardID,
						planID: planID
					}
				}).then(function (_ref9) {
					var body = _ref9.body;
					return body;
				});
			}
	
			/**
	   * @static
	   */
	
		}, {
			key: "cancelSubscription",
			value: function cancelSubscription(subscriptionID) {
				return (0, _request2.default)({
					method: "DELETE",
					endpoint: "/subscriptions/" + subscriptionID,
					sessionKey: _Sessions2.default.getAny()
				}).then(function (_ref10) {
					var body = _ref10.body;
					return body;
				});
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
					endpoint: "/subscriptions/plans",
					sessionKey: _Sessions2.default.get(userID)
				}).then(function (_ref4) {
					var body = _ref4.body;
	
					var pricing = [].concat(body).sort(function (x, y) {
						return x.amount - y.amount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2OTA2NDgxYzdiNDlkZTgyZTA4NCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9leHRlbmRhYmxlLWVycm9yLWNsYXNzL2Rpc3QvaW5kZXguZXM1LmpzIiwid2VicGFjazovLy8uL3NyYy9TZXNzaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Z1bmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlcG9ydHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luc3RydW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiXSwibmFtZXMiOlsiRU5WSVJPTk1FTlRTIiwiSE9TVFMiLCJBY2NvdW50IiwiQ29uZmlnIiwiRXJyb3IiLCJGdW5kaW5nIiwiSW5zdHJ1bWVudCIsIk9yZGVyIiwiUmVwb3J0cyIsIlVzZXIiLCJTZXNzaW9ucyIsInNldHVwIiwicmVxdWVzdCIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiZ2V0QmxvdHRlciIsInVzZXJJRCIsImFjY291bnRJRCIsImdldFBlcmZvcm1hbmNlIiwiYXJndW1lbnRzIiwicGFyZW50RGV0YWlscyIsImFjY291bnRObyIsImFjY291bnRUeXBlIiwiY3JlYXRlIiwib3B0aW9ucyIsImdldEZ1bmRpbmdNZXRob2RzIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImdldFRyYW5zYWN0aW9ucyIsImdldFBsYWNlZE9yZGVycyIsImdldFN0YXRlbWVudHMiLCJnZXRUYXhEb2N1bWVudHMiLCJnZXRUcmFkZUNvbmZpcm1zIiwiZmlsZUtleSIsImdlbmVyYXRlRG93bmxvYWRVUkwiLCJtZXRob2QiLCJlbmRwb2ludCIsInNlc3Npb25LZXkiLCJnZXQiLCJ0aGVuIiwiYm9keSIsIm9yZGVycyIsIm1hcCIsIm9yZGVyIiwicXVlcnlTdHJpbmciLCJsZW5ndGgiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwic2xpY2UiLCJnZXREYXRlIiwicGVyZm9ybWFuY2UiLCJhY2NvdW50IiwiVFlQRVMiLCJQUkFDVElDRSIsInJlc3BvbnNlVHlwZSIsInRyYW5BbW91bnQiLCJzdWJzY3JpcHRpb25JRCIsInBsYW5JRCIsImJhbmtBY2NvdW50SUQiLCJjYXJkSUQiLCJnZXRBbnkiLCJmaWx0ZXIiLCJzdWIiLCJhY2NvdW50RGV0YWlscyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJnZXRUaW1lIiwiQkxPVFRFUl9UWVBFUyIsIkNBU0giLCJPUkRFUlMiLCJUUkFOU0FDVElPTlMiLCJQT1NJVElPTlMiLCJBTEwiLCJTVEFUVVNFUyIsIlBFTkRJTkciLCJPUEVOIiwiT1BFTl9OT19ORVdfVFJBREVTIiwiQ0xPU0VEIiwiTElWRSIsImFkZGxIZWFkZXJzIiwiaG9zdCIsIkFQSSIsImhlYWRlcnMiLCJBY2NlcHQiLCJoZWFkZXIiLCJlbnYiLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJodHRwSW1wbCIsInN0YXR1c0NvZGUiLCJyZXNIZWFkZXJzIiwicmVzQm9keSIsImNvbnRlbnRUeXBlIiwiaW5kZXhPZiIsInBhcnNlIiwiZXJyIiwiU3RyaW5nIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImVycm9yIiwiRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IiLCJEcml2ZVdlYWx0aEVycm9yIiwiYXBwVHlwZUlEIiwiYXBwVmVyc2lvbiIsIndscElEIiwiYXBwc1BhcnRuZXJJRCIsInJlZmVycmFsQ29kZSIsIkFQUFMiLCJSRVBPUlRTIiwiVUFUIiwiUFJPRCIsIkV4dGVuZGFibGVFcnJvciIsIl9rZXlzIiwiX21haW5Vc2VyIiwic2Vzc2lvbnMiLCJTRUNfRkVFX1JBVEUiLCJTRUNfRkVFX01JTiIsIlNFQ19GRUVfTUFYIiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJUQUZfRkVFX1JBVEUiLCJUQUZfRkVFX01JTiIsIlRBRl9GRUVfTUFYIiwicmVqZWN0aW9uUmVhc29uIiwib3JkUmVqUmVhc29uIiwic3RhdHVzIiwib3JkU3RhdHVzIiwib3JkVHlwZSIsIm9yZGVyVHlwZSIsInByaWNlIiwic3RvcFByaWNlIiwibGltaXRQcmljZSIsImNhbmNlbCIsIm9yZGVySUQiLCJ1bmRlZmluZWQiLCJpbnN0cnVtZW50Iiwic2lkZSIsInF0eSIsImFtb3VudENhc2giLCJjb21tZW50IiwiYXV0b1N0b3AiLCJ3YWl0Rm9yRmlsbCIsImZpbGxSZXRyeUludGVydmFsIiwiZmlsbE1heFJldHJpZXMiLCJNQVJLRVQiLCJpbnN0cnVtZW50SUQiLCJpZCIsIm9yZGVyUXR5IiwiU1RPUCIsIkxJTUlUIiwicmV0cmllcyIsImNoZWNrU3RhdHVzIiwiZ2V0QnlJRCIsImlzRmlsbGVkIiwiTkVXIiwiUEFSVElBTF9GSUxMIiwic2V0VGltZW91dCIsImNvZGUiLCJTSURFUyIsIkJVWSIsIm9yZGVyUmVzdWx0cyIsIm9yZGVyc01hcCIsInJlZHVjZSIsImFjYyIsIm5leHQiLCJpZHgiLCJyZWZlcmVuY2VJRCIsImFsbCIsIm9yZGVyQ3VycmVudCIsInNob3VsZFJldHJ5IiwicmVmZXJlbmNlIiwidGhpc1N0YXR1cyIsImNvbW1pc3Npb25TY2hlZHVsZSIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsIiwidG90YWxGZWVzT25seSIsImJhc2tldFByaWNlIiwiYmFza2V0U2NoZWR1bGUiLCJzY2hlZHVsZSIsInNjaGVkdWxlSXRlbSIsImJhc2tldFNpemUiLCJieU9yZGVyIiwibWFya2V0UHJpY2UiLCJvcmRlclByaWNlIiwiZnJhY3Rpb25hbFJhdGUiLCJiYXNlUmF0ZSIsIk5FQVJFU1QiLCJNYXRoIiwicm91bmQiLCJDRUlMIiwiY2VpbCIsIkZMT09SIiwiZmxvb3IiLCJzaGFyZUFtb3VudFJvdW5kaW5nIiwibWF4IiwiYmFzZVNoYXJlcyIsImV4Y2Vzc1JhdGUiLCJzZWNGZWUiLCJ0YWZGZWUiLCJwYXNzVGhyb3VnaEZlZXMiLCJTRUxMIiwibWluIiwib3JkZXJUb3RhbCIsImNvbW1pc3Npb24iLCJmZWVzIiwic2VjIiwidGFmIiwibXVsdGlwbGVPcmRlckRlbHRhIiwiRklMTCIsIkNBTkNFTEVEIiwiUkVKRUNURUQiLCJsYW5ndWFnZSIsIm1pbkFtb3VudCIsIm1heEFtb3VudCIsImFtb3VudCIsImZpbHRlcnMiLCJuYW1lIiwiY291bnRyeSIsImN1cnJlbmN5IiwiYWxsb3dlZCIsInByaWNpbmciLCJjb25jYXQiLCJ4IiwieSIsImRlcG9zaXRJRCIsIkFMTE9XRURfVFlQRVMiLCJERVBPU0lUIiwiV0lUSERSQVciLCJERVBPU0lUX0FORF9XSVRIRFJBVyIsIkRFUE9TSVRfRlJFUVVFTkNJRVMiLCJCSVdFRUtMWSIsIk1PTlRITFlfRklSU1QiLCJNT05USExZX01JRERMRSIsIlFVQVJURVJMWSIsInRvSVNPU3RyaW5nIiwidHJhbnNhY3Rpb24iLCJ1cmwiLCJnZXRRdW90ZSIsInN5bWJvbCIsImNvbXByZXNzaW9uIiwiZ2V0Q2hhcnREYXRhIiwic3ltYm9scyIsImpvaW4iLCJpbmNsdWRlRnVuZGFtZW50YWxzIiwidHJhZGVTdGF0dXMiLCJjcml0ZXJpYSIsInN5bSIsIm9iaiIsInNwbGl0IiwicmF3UXVvdGUiLCJwYXJzZWRRdW90ZSIsImJpZCIsImFzayIsInRpbWVQYXJhbXMiLCJkYXRlU3RhcnQiLCJyZXBsYWNlIiwiZGF0ZUVuZCIsIlRSQURFX1NUQVRVU0VTIiwiSU5BQ1RJVkUiLCJBQ1RJVkUiLCJDSEFSVF9DT01QUkVTU0lPTlMiLCJEQVkiLCJNSU5VVEVfMSIsIk1JTlVURV81IiwiTUlOVVRFXzMwIiwiSE9VUiIsIldFRUsiLCJmdWxsTmFtZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0TGlzdEZvclVzZXJJRCIsImtleSIsImdldFNldHRpbmdzIiwidmFsdWUiLCJzZXRTZXR0aW5nIiwidW5zZXRTZXR0aW5nIiwibG9nb3V0IiwiZ2V0QnlVc2VySUQiLCJ1cGRhdGUiLCJlbWFpbCIsImVtYWlsQWRkcmVzcyIsImZpbGUiLCJ1cGxvYWREb2N1bWVudCIsImdldENyZWRpdENhcmRzIiwiY2FyZFRva2VuIiwiYWRkQ3JlZGl0Q2FyZCIsInJlbW92ZUNyZWRpdENhcmQiLCJmb3JtYXR0ZWREYXRhIiwic2V0dGluZyIsInJlbW92ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsYW5ndWFnZUlEIiwib3NUeXBlIiwib3NWZXJzaW9uIiwic2NyUmVzIiwiaXBBZGRyZXNzIiwic2F2ZSIsInJlamVjdGlvbiIsInV0bUNhbXBhaWduIiwidXRtQ29udGVudCIsInV0bU1lZGl1bSIsInV0bVNvdXJjZSIsInV0bVRlcm0iLCJsb2dpbkF1dG9tYXRpY2FsbHkiLCJlbWFpbEFkZHJlc3MxIiwibG9naW4iLCJhZGRyZXNzTGluZTEiLCJhZGRyZXNzTGluZTIiLCJjaXR5IiwiY291bnRyeUlEIiwicGhvbmVIb21lIiwicGhvbmVXb3JrIiwicGhvbmUiLCJzdGF0ZVByb3ZpbmNlIiwiemlwUG9zdGFsQ29kZSIsInBob25lTW9iaWxlIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwYXNzd29yZFJlc2V0SUQiLCJBUFBST1ZFRCIsIlJFVk9LRUQiLCJET0NVTUVOVF9UWVBFUyIsIlBIT1RPX0lEIiwiUFJPT0ZfT0ZfQUREUkVTUyIsIlBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFF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QVk3QixtQkFBUzhCLEdBQVQsQ0FBYXRCLE1BQWI7QUFIRSxLQUFSLEVBSUp1QixJQUpJLENBSUM7QUFBQSxZQUFNb0csU0FBTjtBQUFBLEtBSkQsQ0FBUDtBQUtBOztBQUVEOzs7Ozs7a0NBR3NCNkosUSxFQUFtQztBQUN4RCxXQUFPLHVCQUFRO0FBQ2RyUSxhQUFRLE1BRE07QUFFZEMsZUFBVSxrQkFGSTtBQUdkSSxXQUFNO0FBQ0xnUTtBQURLO0FBSFEsS0FBUixFQU1KalEsSUFOSSxDQU1DO0FBQUEsU0FBR0MsSUFBSCxVQUFHQSxJQUFIO0FBQUEsWUFBY0EsS0FBSzZSLGVBQW5CO0FBQUEsS0FORCxDQUFQO0FBT0E7O0FBRUQ7Ozs7OztpQ0FHcUJBLGUsRUFBeUJuSyxJLEVBQWN1SSxRLEVBQWlDO0FBQzVGLFdBQU8sdUJBQVE7QUFDZHRRLGFBQVEsS0FETTtBQUVkQyxxQ0FBOEJpUyxlQUZoQjtBQUdkN1IsV0FBTTtBQUNMMEgsZ0JBREs7QUFFTG1LLHNDQUZLO0FBR0w1QjtBQUhLO0FBSFEsS0FBUixDQUFQO0FBU0E7Ozs7OztBQWhjSWxTLEssQ0FxQ0VvRSxRLEdBQXVDO0FBQzdDQyxXQUFTLENBRG9DO0FBRTdDMFAsWUFBVSxDQUZtQztBQUc3QzlHLFlBQVUsQ0FIbUM7QUFJN0MrRyxXQUFTLENBSm9DO0FBSzdDeFAsVUFBUTtBQUxxQyxFO0FBckN6Q3hFLEssQ0FxREVpVSxjLEdBQTJDO0FBQ2pEQyxZQUFVLFlBRHVDO0FBRWpEQyxvQkFBa0Isa0JBRitCO0FBR2pEQyxrQ0FBZ0M7QUFIaUIsRTttQkE4WXBDcFUsSSIsImZpbGUiOiJkcml2ZXdlYWx0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRyaXZld2VhbHRoXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5MDY0ODFjN2I0OWRlODJlMDg0IiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgRnVuZGluZyBmcm9tIFwiLi9GdW5kaW5nXCI7XG5pbXBvcnQgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5pbXBvcnQgT3JkZXIgZnJvbSBcIi4vT3JkZXJcIjtcbmltcG9ydCBSZXBvcnRzIGZyb20gXCIuL1JlcG9ydHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29uZmlnLCBzZXR1cCwgRU5WSVJPTk1FTlRTLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEVOVklST05NRU5UUyxcblx0SE9TVFMsXG5cblx0QWNjb3VudCxcblx0Q29uZmlnLFxuXHRFcnJvcixcblx0RnVuZGluZyxcblx0SW5zdHJ1bWVudCxcblx0T3JkZXIsXG5cdFJlcG9ydHMsXG5cdFVzZXIsXG5cdFNlc3Npb25zLFxuXG5cdHNldHVwLFxuXHRyZXF1ZXN0LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qIEBmbG93ICovXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBPcmRlciBmcm9tIFwiLi9PcmRlclwiO1xuaW1wb3J0IEZ1bmRpbmcgZnJvbSBcIi4vRnVuZGluZ1wiO1xuaW1wb3J0IFJlcG9ydHMgZnJvbSBcIi4vUmVwb3J0c1wiO1xuXG5pbXBvcnQgdHlwZSB7IE9yZGVyUGFyZW50RGV0YWlscyB9IGZyb20gXCIuL09yZGVyXCI7XG5cbmV4cG9ydCB0eXBlIENvbW1pc3Npb25TY2hlZHVsZSA9IHtcblx0YmFzZVJhdGU6IG51bWJlcixcblx0YmFzZVNoYXJlczogbnVtYmVyLFxuXHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdGZyYWN0aW9uYWxSYXRlOiBudW1iZXIsXG5cdHNoYXJlQW1vdW50Um91bmRpbmc6IG51bWJlcixcblx0c3Vic2NyaXB0aW9uOiBib29sZWFuLFxuXHRiYXNrZXRTY2hlZHVsZToge1xuXHRcdGJhc2VTaGFyZXM6IG51bWJlcixcblx0XHRleGNlc3NSYXRlOiBudW1iZXIsXG5cdFx0c2NoZWR1bGU6IEFycmF5PHtcblx0XHRcdGJhc2tldFNpemU6IG51bWJlcixcblx0XHRcdGJhc2tldFByaWNlOiBudW1iZXIsXG5cdFx0fT4sXG5cdH0sXG5cdHBhc3NUaHJvdWdoRmVlczogYm9vbGVhbixcbn07XG5cbi8qKlxuICogQGNsYXNzIEFjY291bnRcbiAqIEBkZXNjcmlwdGlvbiBBbiBhY2NvdW50IGJlbG9uZ2luZyB0byBhIFVzZXIuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL2FjY291bnRzX2dldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IHtcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdGFjY291bnRObzogc3RyaW5nO1xuXHR1c2VySUQ6IHN0cmluZztcblx0YWNjb3VudFR5cGU6IHN0cmluZztcblx0Y3VycmVuY3lJRDogc3RyaW5nO1xuXHRpYklEOiBzdHJpbmc7XG5cdG1hcmdpbjogc3RyaW5nO1xuXHRuaWNrbmFtZTogc3RyaW5nO1xuXHRvcGVuZWRXaGVuOiBzdHJpbmc7XG5cdHBhdHRlcm5EYXlUcmFkZXM6IHN0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHRyYWRpbmdUeXBlOiBzdHJpbmc7XG5cdGFjY291bnRNZ210VHlwZTogc3RyaW5nO1xuXHRjb21taXNzaW9uU2NoZWR1bGU6IENvbW1pc3Npb25TY2hlZHVsZTtcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBuYW1lIEJMT1RURVJfVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDQVNIXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBPUkRFUlNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IFRSQU5TQUNUSU9OU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUE9TSVRJT05TXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBBTExcblx0ICovXG5cdHN0YXRpYyBCTE9UVEVSX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106ID9zdHJpbmd9ID0ge1xuXHRcdENBU0g6IFwiY2FzaFwiLFxuXHRcdE9SREVSUzogXCJvcmRlcnNcIixcblx0XHRUUkFOU0FDVElPTlM6IFwidHJhbnNhY3Rpb25zXCIsXG5cdFx0UE9TSVRJT05TOiBcInBvc2l0aW9uc1wiLFxuXHRcdEFMTDogbnVsbCxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQRU5ESU5HXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPUEVOX05PX05FV19UUkFERVNcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IENMT1NFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogbnVtYmVyfSA9IHtcblx0XHRQRU5ESU5HOiAxLFxuXHRcdE9QRU46IDIsXG5cdFx0T1BFTl9OT19ORVdfVFJBREVTOiAzLFxuXHRcdENMT1NFRDogOSxcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgVFlQRVNcblx0ICogQG1lbWJlcm9mIEFjY291bnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQUkFDVElDRVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTElWRVxuXHQgKi9cblx0c3RhdGljIFRZUEVTOiB7W3R5cGU6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0UFJBQ1RJQ0U6IDEsXG5cdFx0TElWRTogMixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRCbG90dGVyKHR5cGU6ID9zdHJpbmcgPSBudWxsKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRCbG90dGVyKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgdHlwZSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEJsb3R0ZXIodXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nLCB0eXBlOiA/c3RyaW5nID0gbnVsbCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRTdW1tYXJ5L2Bcblx0XHRcdFx0KyBgJHthY2NvdW50SUR9JHt0eXBlID8gXCIvXCIgKyB0eXBlIDogXCJcIn1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmIChib2R5Lm9yZGVycykge1xuXHRcdFx0XHRib2R5Lm9yZGVycyA9IGJvZHkub3JkZXJzLm1hcCgob3JkZXIpID0+IG5ldyBPcmRlcihvcmRlcikpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHR5cGUgPyBib2R5W3R5cGVdIDogYm9keTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0RhdGV9IHN0YXJ0RGF0ZVxuXHQgKiBAcGFyYW0ge0RhdGV9IGVuZERhdGVcblx0ICovXG5cdC8qKlxuXHQgICogQHBhcmFtIHtzdHJpbmd9IHBlcmlvZFxuXHQgICovXG5cdC8qKlxuXHQgICogQGRlc2NyaXB0aW9uIEdldCB0b2RheSdzIHBlcmZvcm1hbmNlXG5cdCAgKi9cblx0Z2V0UGVyZm9ybWFuY2UoKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRQZXJmb3JtYW5jZSh0aGlzLnVzZXJJRCwgdGhpcy5hY2NvdW50SUQsIC4uLmFyZ3VtZW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtEYXRlfSBzdGFydERhdGVcblx0ICogQHBhcmFtIHtEYXRlfSBlbmREYXRlXG5cdCAqL1xuXHQvKipcblx0ICAqIEBwYXJhbSB7c3RyaW5nfSBwZXJpb2Rcblx0ICAqL1xuXHQvKipcblx0ICAqIEBkZXNjcmlwdGlvbiBHZXQgdG9kYXkncyBwZXJmb3JtYW5jZVxuXHQgICovXG5cdHN0YXRpYyBnZXRQZXJmb3JtYW5jZSh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdGxldCBxdWVyeVN0cmluZyA9IFwiXCI7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IHN0YXJ0RGF0ZSA9IGFyZ3VtZW50c1syXTtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSBhcmd1bWVudHNbM107XG5cdFx0XHRxdWVyeVN0cmluZyArPSBcIi9kYXRlUmFuZ2U/XCI7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgc3RhcnREYXRlPSR7c3RhcnREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoc3RhcnREYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfSR7KFwiMFwiICsgc3RhcnREYXRlLmdldERhdGUoKSkuc2xpY2UoLTIpfWA7XG5cdFx0XHRxdWVyeVN0cmluZyArPSBgJmVuZERhdGU9JHtlbmREYXRlLmdldEZ1bGxZZWFyKCl9JHsoXCIwXCIgKyAoZW5kRGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKX0keyhcIjBcIiArIGVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblx0XHR9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHF1ZXJ5U3RyaW5nICs9IGAvaGlzdG9yeT9wZXJpb2Q9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudFBlcmZvcm1hbmNlLyR7YWNjb3VudElEfSR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5LnBlcmZvcm1hbmNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHBsYWNlT3JkZXIodHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpOiBQcm9taXNlPHN0cmluZyB8IE9iamVjdD4ge1xuXHRcdGNvbnN0IHBhcmVudERldGFpbHM6IE9yZGVyUGFyZW50RGV0YWlscyA9IHtcblx0XHRcdGFjY291bnRJRDogdGhpcy5hY2NvdW50SUQsXG5cdFx0XHRhY2NvdW50Tm86IHRoaXMuYWNjb3VudE5vLFxuXHRcdFx0YWNjb3VudFR5cGU6IHRoaXMuYWNjb3VudFR5cGUsXG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdH07XG5cblx0XHRyZXR1cm4gT3JkZXIuY3JlYXRlKHR5cGUsIHBhcmVudERldGFpbHMsIGRhdGEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0RnVuZGluZ01ldGhvZHMob3B0aW9uczogT2JqZWN0ID0ge30pOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRvcHRpb25zLnVzZXJJRCA9IHRoaXMudXNlcklEO1xuXHRcdG9wdGlvbnMuYWNjb3VudElEID0gdGhpcy5hY2NvdW50SUQ7XG5cdFx0cmV0dXJuIEZ1bmRpbmcuZ2V0RnVuZGluZ01ldGhvZHMob3B0aW9ucyk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRnZXRUcmFuc2FjdGlvbnMoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFJlcG9ydHMuZ2V0VHJhbnNhY3Rpb25zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRObywgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFBsYWNlZE9yZGVycyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRQbGFjZWRPcmRlcnModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudE5vLCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0U3RhdGVtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRTdGF0ZW1lbnRzKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldFRheERvY3VtZW50cyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUYXhEb2N1bWVudHModGhpcy51c2VySUQsIHRoaXMuYWNjb3VudElELCBzdGFydERhdGUsIGVuZERhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0VHJhZGVDb25maXJtcyhzdGFydERhdGU6IERhdGUsIGVuZERhdGU6IERhdGUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZXRUcmFkZUNvbmZpcm1zKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgc3RhcnREYXRlLCBlbmREYXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdlbmVyYXRlRG93bmxvYWRVUkwoZmlsZUtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gUmVwb3J0cy5nZW5lcmF0ZURvd25sb2FkVVJMKHRoaXMudXNlcklELCB0aGlzLmFjY291bnRJRCwgZmlsZUtleSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldExpc3RGb3JVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PEFjY291bnQ+PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L2FjY291bnRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5Lm1hcChhY2NvdW50ID0+IG5ldyBBY2NvdW50KGFjY291bnQpKSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh1c2VySUQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcblx0XHRpZiAodHlwZSA9PT0gQWNjb3VudC5UWVBFUy5QUkFDVElDRSkge1xuXHRcdFx0ZGF0YSA9IHtcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiZnVsbFwiLFxuXHRcdFx0XHR0cmFuQW1vdW50OiBkYXRhLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IHR5cGUgPT09IEFjY291bnQuVFlQRVMuUFJBQ1RJQ0Vcblx0XHRcdFx0PyBcIi9zaWdudXBzL3ByYWN0aWNlXCJcblx0XHRcdFx0OiBcIi9zaWdudXBzL2xpdmVcIixcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVN1YnNjcmlwdGlvbih7XG5cdFx0c3Vic2NyaXB0aW9uSUQsXG5cdFx0cGxhbklELFxuXHRcdGJhbmtBY2NvdW50SUQsXG5cdFx0Y2FyZElELFxuXHR9OiB7XG5cdFx0c3Vic2NyaXB0aW9uSUQ6IHN0cmluZyxcblx0XHRwbGFuSUQ6IHN0cmluZyxcblx0XHRiYW5rQWNjb3VudElEPzogc3RyaW5nLFxuXHRcdGNhcmRJRD86IHN0cmluZyxcblx0fSk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBBVENIXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdWJzY3JpcHRpb25zLyR7c3Vic2NyaXB0aW9uSUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRiYW5rQWNjb3VudElELFxuXHRcdFx0XHRjYXJkSUQsXG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdWJzY3JpcHRpb24odXNlcklEOiBzdHJpbmcsIGFjY291bnRJRDogc3RyaW5nKTogUHJvbWlzZTxPYmplY3Q+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc3Vic2NyaXB0aW9uc2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT5cblx0XHRcdGJvZHlcblx0XHRcdFx0LmZpbHRlcihzdWIgPT4gc3ViLmFjY291bnREZXRhaWxzLmFjY291bnRJRCA9PT0gYWNjb3VudElEKVxuXHRcdFx0XHQuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYikuZ2V0VGltZSgpIC0gbmV3IERhdGUoYSkuZ2V0VGltZSgpKVswXSxcblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBhZGRTdWJzY3JpcHRpb24oe1xuXHRcdGFjY291bnRJRCxcblx0XHRwbGFuSUQsXG5cdFx0YmFua0FjY291bnRJRCxcblx0XHRjYXJkSUQsXG5cdH06IHtcblx0XHRhY2NvdW50SUQ6IHN0cmluZyxcblx0XHRwbGFuSUQ6IHN0cmluZyxcblx0XHRiYW5rQWNjb3VudElEPzogc3RyaW5nLFxuXHRcdGNhcmRJRD86IHN0cmluZyxcblx0fSk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGVuZHBvaW50OiBcIi9zdWJzY3JpcHRpb25zXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0YWNjb3VudElELFxuXHRcdFx0XHRiYW5rQWNjb3VudElELFxuXHRcdFx0XHRjYXJkSUQsXG5cdFx0XHRcdHBsYW5JRCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWxTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uSUQ6IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvc3Vic2NyaXB0aW9ucy8ke3N1YnNjcmlwdGlvbklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciwgRHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IgfSBmcm9tIFwiLi9FcnJvclwiO1xuXG4vKipcbiAqIEBmdW5jdGlvbiByZXF1ZXN0XG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsbHksIGl0IGlzIHVubmVjZXNzYXJ5IHRvIHVzZSB0aGlzIGZ1bmN0aW9uIGFuZCB0aGlzIGlzIGZvciBpbnRlcm5hbCB1c2Ugb25seS4gQ2FsbCByZXF1ZXN0KCkgaWYgeW91IG5lZWQgdG8gbWFrZSBhIGN1c3RvbSBBUEkgY2FsbCB0aGF0IGlzIG5vdCBjb3ZlcmVkIGJ5IGFub3RoZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubWV0aG9kXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5lbmRwb2ludFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2Vzc2lvbktleVxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYm9keVxuICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nPn0gb3B0aW9ucy5hZGRsSGVhZGVyc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaG9zdCAtIE9uZSBvZiBDb25maWcuSE9TVFNcbiAqIEByZXR1cm5zIHtQcm9taXNlLjx7Ym9keTogc3RyaW5nLCBzdGF0dXNDb2RlOiBudW1iZXIsIGhlYWRlcnM6IE9iamVjdDxzdHJpbmcsIHN0cmluZz59Pn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWVzdCh7XG5cdG1ldGhvZCA9IFwiR0VUXCIsXG5cdGVuZHBvaW50LFxuXHRzZXNzaW9uS2V5LFxuXHRib2R5LFxuXHRhZGRsSGVhZGVycyA9IHt9LFxuXHRob3N0ID0gSE9TVFMuQVBJLFxufToge1xuXHRtZXRob2Q/OiBzdHJpbmcsXG5cdGVuZHBvaW50OiBzdHJpbmcsXG5cdHNlc3Npb25LZXk/OiBzdHJpbmcsXG5cdGJvZHk/OiBhbnksXG5cdGFkZGxIZWFkZXJzPzoge1toZWFkZXI6IHN0cmluZ106IHN0cmluZ30sXG5cdGhvc3Q/OiBzdHJpbmcsXG59KSB7XG5cdGNvbnN0IGhlYWRlcnM6IHtbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuXHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdH07XG5cdGlmIChtZXRob2QgPT09IFwiUE9TVFwiIHx8IG1ldGhvZCA9PT0gXCJQVVRcIiB8fCBtZXRob2QgPT09IFwiUEFUQ0hcIikge1xuXHRcdGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb25cIjtcblx0fVxuXHRpZiAoc2Vzc2lvbktleSkge1xuXHRcdGhlYWRlcnNbXCJ4LW15c29sb21lby1zZXNzaW9uLWtleVwiXSA9IHNlc3Npb25LZXk7XG5cdH1cblx0Zm9yIChjb25zdCBoZWFkZXIgaW4gYWRkbEhlYWRlcnMpIHtcblx0XHRoZWFkZXJzW2hlYWRlcl0gPSBhZGRsSGVhZGVyc1toZWFkZXJdO1xuXHR9XG5cblx0ZW5kcG9pbnQgPSBDb25maWcuZW52W2hvc3RdICsgZW5kcG9pbnQ7XG5cblx0aWYgKGhlYWRlcnNbXCJDb250ZW50LVR5cGVcIl0gPT09IFwiYXBwbGljYXRpb24vanNvblwiKSBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRDb25maWcuaHR0cEltcGwobWV0aG9kLCBlbmRwb2ludCwgaGVhZGVycywgYm9keSwgKHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMsIHJlc0JvZHkpID0+IHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzSGVhZGVyc1tcIkNvbnRlbnQtVHlwZVwiXSB8fCByZXNIZWFkZXJzW1wiY29udGVudC10eXBlXCJdIHx8IFwiXCI7XG5cdFx0XHRpZiAocmVzQm9keSAmJiBjb250ZW50VHlwZS5pbmRleE9mKFwiYXBwbGljYXRpb24vanNvblwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRyZXNCb2R5ID0gSlNPTi5wYXJzZShyZXNCb2R5KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gcmVzQm9keSB3aWxsIHJlbWFpbiBhcyBpc1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChTdHJpbmcoc3RhdHVzQ29kZSlbMF0gPT09IFwiMlwiIHx8IFN0cmluZyhzdGF0dXNDb2RlKVswXSA9PT0gXCIzXCIpIHtcblx0XHRcdFx0cmVzb2x2ZSh7XG5cdFx0XHRcdFx0Ym9keTogcmVzQm9keSxcblx0XHRcdFx0XHRzdGF0dXNDb2RlLFxuXHRcdFx0XHRcdGhlYWRlcnM6IHJlc0hlYWRlcnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGVycm9yTWVzc2FnZTtcblx0XHRcdFx0aWYgKHJlc0JvZHkpIHtcblx0XHRcdFx0XHRlcnJvck1lc3NhZ2UgPSByZXNCb2R5Lm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkocmVzQm9keSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXJyb3IgPSBzdGF0dXNDb2RlID09PSA0MDFcblx0XHRcdFx0XHQ/IG5ldyBEcml2ZVdlYWx0aFNlc3Npb25FcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpXG5cdFx0XHRcdFx0OiBuZXcgRHJpdmVXZWFsdGhFcnJvcihlcnJvck1lc3NhZ2UsIHJlc0JvZHksIHN0YXR1c0NvZGUsIHJlc0hlYWRlcnMpO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZXF1ZXN0LmpzIiwiLyoqXG4gKiBAbmFtZXNwYWNlIENvbmZpZ1xuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0ge1xuXHRlbnY6IG51bGwsXG5cdGh0dHBJbXBsOiBudWxsLFxuXHRhcHBUeXBlSUQ6IG51bGwsXG5cdGFwcFZlcnNpb246IG51bGwsXG5cdHdscElEOiBudWxsLFxuXHRhcHBzUGFydG5lcklEOiBudWxsLFxuXHRyZWZlcnJhbENvZGU6IG51bGwsXG59O1xuXG4vKipcbiAqIFNlcnZlcnMgdG8gc2VuZCBhIHJlcXVlc3QgdG9cbiAqIEBuYW1lIEhPU1RTXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBJXG4gKiBAcHJvcGVydHkge3N0cmluZ30gQVBQU1xuICogQHByb3BlcnR5IHtzdHJpbmd9IFJFUE9SVFNcbiAqIEBtZW1iZXJvZiBDb25maWdcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgSE9TVFMgPSB7XG5cdEFQSTogXCJhcGlcIixcblx0QVBQUzogXCJhcHBzXCIsXG5cdFJFUE9SVFM6IFwicmVwb3J0c1wiLFxufTtcblxuLyoqXG4gKiBTZXJ2ZXJzIHRvIHNlbmQgYSByZXF1ZXN0IHRvXG4gKiBAbmFtZSBFTlZJUk9OTUVOVFNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBVQVRcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBQUk9EXG4gKiBAbWVtYmVyb2YgQ29uZmlnXG4gKiBAY29uc3RhbnRcbiAqL1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UUyA9IHtcblx0VUFUOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cDovL2FwaS5kcml2ZXdlYWx0aC5pby92MVwiLFxuXHRcdFtIT1NUUy5BUFBTXTogXCJodHRwOi8vYXBwcy5kcml2ZXdlYWx0aC5pb1wiLFxuXHRcdFtIT1NUUy5SRVBPUlRTXTogXCJodHRwOi8vcmVwb3J0cy5kcml2ZXdlYWx0aC5pb1wiLFxuXHR9LFxuXHRQUk9EOiB7XG5cdFx0W0hPU1RTLkFQSV06IFwiaHR0cHM6Ly9hcGkuZHJpdmV3ZWFsdGgubmV0L3YxXCIsXG5cdFx0W0hPU1RTLkFQUFNdOiBcImh0dHBzOi8vYXBwcy5kcml2ZXdlYWx0aC5jb21cIixcblx0XHRbSE9TVFMuUkVQT1JUU106IFwiaHR0cHM6Ly9yZXBvcnRzLmRyaXZld2VhbHRoLm5ldFwiLFxuXHR9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKHtcblx0ZW52LFxuXHRodHRwSW1wbCxcblx0YXBwVHlwZUlELFxuXHRhcHBWZXJzaW9uLFxuXHR3bHBJRCA9IFwiRFdcIixcblx0YXBwc1BhcnRuZXJJRCxcblx0cmVmZXJyYWxDb2RlLFxufSkge1xuXHRDb25maWcuZW52ID0gZW52O1xuXHRDb25maWcuaHR0cEltcGwgPSBodHRwSW1wbDtcblx0Q29uZmlnLmFwcFR5cGVJRCA9IGFwcFR5cGVJRDtcblx0Q29uZmlnLmFwcFZlcnNpb24gPSBhcHBWZXJzaW9uO1xuXHRDb25maWcud2xwSUQgPSB3bHBJRDtcblx0Q29uZmlnLmFwcHNQYXJ0bmVySUQgPSBhcHBzUGFydG5lcklEIHx8IHdscElEO1xuXHRDb25maWcucmVmZXJyYWxDb2RlID0gcmVmZXJyYWxDb2RlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbmZpZy5qcyIsImltcG9ydCBFeHRlbmRhYmxlRXJyb3IgZnJvbSBcImV4dGVuZGFibGUtZXJyb3ItY2xhc3NcIjtcblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoRXJyb3IgZXh0ZW5kcyBFeHRlbmRhYmxlRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5ib2R5ID0gYm9keTtcblx0XHR0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuXHRcdHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIERyaXZlV2VhbHRoU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgYm9keSwgc3RhdHVzQ29kZSwgaGVhZGVycykge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuYm9keSA9IGJvZHk7XG5cdFx0dGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcblx0XHR0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RHJpdmVXZWFsdGhFcnJvcixcblx0RHJpdmVXZWFsdGhTZXNzaW9uRXJyb3IsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICAgIGZ1bmN0aW9uIEV4dGVuZGFibGVCdWlsdGluKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgICAgdmFsdWU6IGNscyxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUJ1aWx0aW4sIGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXh0ZW5kYWJsZUJ1aWx0aW4uX19wcm90b19fID0gY2xzO1xuICAgIH1cblxuICAgIHJldHVybiBFeHRlbmRhYmxlQnVpbHRpbjtcbn1cblxudmFyIEV4dGVuZGFibGVFcnJvciA9IGZ1bmN0aW9uIChfZXh0ZW5kYWJsZUJ1aWx0aW4yKSB7XG4gICAgX2luaGVyaXRzKEV4dGVuZGFibGVFcnJvciwgX2V4dGVuZGFibGVCdWlsdGluMik7XG5cbiAgICBmdW5jdGlvbiBFeHRlbmRhYmxlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXh0ZW5kYWJsZUVycm9yKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRXh0ZW5kYWJsZUVycm9yKS5jYWxsKHRoaXMsIG1lc3NhZ2UpKTtcblxuICAgICAgICBfdGhpcy5uYW1lID0gX3RoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgX3RoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKF90aGlzLCBfdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5zdGFjayA9IG5ldyBFcnJvcihtZXNzYWdlKS5zdGFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIEV4dGVuZGFibGVFcnJvcjtcbn0oX2V4dGVuZGFibGVCdWlsdGluKEVycm9yKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXh0ZW5kYWJsZUVycm9yO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kYWJsZS1lcnJvci1jbGFzcy9kaXN0L2luZGV4LmVzNS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjbGFzcyBTZXNzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSB7fTtcbiAgICAgICAgdGhpcy5fbWFpblVzZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNhdmUodXNlcklELCBzZXNzaW9uS2V5KSB7XG4gICAgICAgIHRoaXMuX2tleXNbdXNlcklEXSA9IHNlc3Npb25LZXk7XG4gICAgICAgIHRoaXMuX21haW5Vc2VyID0gdXNlcklEO1xuICAgIH1cblxuICAgIGdldCh1c2VySUQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2tleXNbdXNlcklEXTtcbiAgICB9XG5cbiAgICBnZXRBbnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzW3RoaXMuX21haW5Vc2VyXTtcbiAgICB9XG5cbiAgICByZW1vdmUodXNlcklEKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzW3VzZXJJRF07XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3Qgc2Vzc2lvbnMgPSBuZXcgU2Vzc2lvbnMoKTtcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Nlc3Npb25zLmpzIiwiLyogQGZsb3cgKi9cbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBTZXNzaW9ucyBmcm9tIFwiLi9TZXNzaW9uc1wiO1xuaW1wb3J0IHsgRHJpdmVXZWFsdGhFcnJvciB9IGZyb20gXCIuL0Vycm9yXCI7XG5cbmltcG9ydCB0eXBlIHsgQ29tbWlzc2lvblNjaGVkdWxlIH0gZnJvbSBcIi4vQWNjb3VudFwiO1xuaW1wb3J0IHR5cGUgSW5zdHJ1bWVudCBmcm9tIFwiLi9JbnN0cnVtZW50XCI7XG5cbmNvbnN0IFNFQ19GRUVfUkFURSA9IDAuMDAwMDEzO1xuY29uc3QgU0VDX0ZFRV9NSU4gPSAwLjAxO1xuY29uc3QgU0VDX0ZFRV9NQVggPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5jb25zdCBUQUZfRkVFX1JBVEUgPSAwLjAwMDExOTtcbmNvbnN0IFRBRl9GRUVfTUlOID0gMC4wMTtcbmNvbnN0IFRBRl9GRUVfTUFYID0gNS45NTtcblxuZXhwb3J0IHR5cGUgT3JkZXJQYXJlbnREZXRhaWxzID0ge1xuXHRhY2NvdW50SUQ6IHN0cmluZyxcblx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdHVzZXJJRDogc3RyaW5nLFxuXHRhY2NvdW50VHlwZTogc3RyaW5nLFxufTtcbmV4cG9ydCB0eXBlIE5ld09yZGVyID0ge1xuXHRpbnN0cnVtZW50OiBJbnN0cnVtZW50IHwgc3RyaW5nLFxuXHRzaWRlOiBzdHJpbmcsXG5cdHF0eT86IG51bWJlcixcblx0YW1vdW50Q2FzaD86IG51bWJlcixcblx0Y29tbWVudD86IHN0cmluZyxcblx0YXV0b1N0b3A/OiBudW1iZXIsXG5cdHByaWNlPzogbnVtYmVyLFxufTtcbmV4cG9ydCB0eXBlIE5ld0NhcnRPcmRlciA9IHtcblx0aW5zdHJ1bWVudDogSW5zdHJ1bWVudCB8IHN0cmluZyxcblx0cXR5PzogbnVtYmVyLFxuXHRhbW91bnRDYXNoPzogbnVtYmVyLFxuXHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRjb21tZW50Pzogc3RyaW5nLFxuXHRhdXRvU3RvcD86IG51bWJlcixcbn07XG5cbi8qKlxuICogQGNsYXNzIE9yZGVyXG4gKiBAZGVzY3JpcHRpb24gQW4gb3JkZXIgY3JlYXRlZCBmb3IgYW4gQWNjb3VudC4gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X21hcmtldFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciB7XG5cdG9yZGVySUQ6IHN0cmluZztcblx0YWNjb3VudElEOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHRjdW1RdHk6IG51bWJlcjtcblx0YWNjb3VudE5vOiBzdHJpbmc7XG5cdGNvbW1lbnQ6IHN0cmluZztcblx0Y29tbWlzc2lvbjogbnVtYmVyO1xuXHRjcmVhdGVkQnlJRDogc3RyaW5nO1xuXHRjcmVhdGVkV2hlbjogc3RyaW5nO1xuXHRleGVjdXRlZFdoZW46IHN0cmluZztcblx0Z3Jvc3NUcmFkZUFtdDogbnVtYmVyO1xuXHRpbnN0cnVtZW50SUQ6IHN0cmluZztcblx0bGVhdmVzUXR5OiBzdHJpbmc7XG5cdG9yZGVyTm86IHN0cmluZztcblx0b3JkZXJRdHk6IG51bWJlcjtcblx0c2lkZTogc3RyaW5nO1xuXHRhdXRvU3RvcDogP251bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHJlamVjdGlvblJlYXNvbjogP3N0cmluZztcblx0c3RhdHVzOiBzdHJpbmc7XG5cdHR5cGU6IG51bWJlcjtcblx0cHJpY2U6ID9udW1iZXI7XG5cdGVmZmVjdGl2ZVByaWNlOiA/bnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdFx0dGhpcy5yZWplY3Rpb25SZWFzb24gPSBkYXRhLm9yZFJlalJlYXNvbjtcblx0XHR0aGlzLnN0YXR1cyA9IGRhdGEub3JkU3RhdHVzO1xuXHRcdHRoaXMudHlwZSA9IGRhdGEub3JkVHlwZSB8fCBkYXRhLm9yZGVyVHlwZTtcblx0XHR0aGlzLnByaWNlID0gZGF0YS5zdG9wUHJpY2UgfHwgZGF0YS5saW1pdFByaWNlIHx8IGRhdGEucHJpY2U7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgU0lERVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQlVZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTRUxMXG5cdCAqL1xuXHRzdGF0aWMgU0lERVM6IHtbc2lkZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRCVVk6IFwiQlwiLFxuXHRcdFNFTEw6IFwiU1wiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbmFtZSBUWVBFU1xuXHQgKiBAbWVtYmVyb2YgT3JkZXJcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNQVJLRVRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IExJTUlUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBTVE9QXG5cdCAqL1xuXHRzdGF0aWMgVFlQRVM6IHtbdHlwZTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRNQVJLRVQ6IFwiMVwiLFxuXHRcdExJTUlUOiBcIjJcIixcblx0XHRTVE9QOiBcIjNcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIE9yZGVyXG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gTkVXXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQQVJUSUFMX0ZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEZJTExcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IENBTkNFTEVEXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBSRUpFQ1RFRFxuXHQgKi9cblx0c3RhdGljIFNUQVRVU0VTOiB7W3N0YXR1czogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0XHRORVc6IFwiMFwiLFxuXHRcdFBBUlRJQUxfRklMTDogXCIxXCIsXG5cdFx0RklMTDogXCIyXCIsXG5cdFx0Q0FOQ0VMRUQ6IFwiNFwiLFxuXHRcdFJFSkVDVEVEOiBcIjhcIixcblx0fTtcblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRjYW5jZWwoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIE9yZGVyLmNhbmNlbCh0aGlzLm9yZGVySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBjYW5jZWwob3JkZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvb3JkZXJzLyR7b3JkZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0QW55KCksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKG9yZGVySUQ6IHN0cmluZyk6IFByb21pc2U8T3JkZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9vcmRlcnMvJHtvcmRlcklEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHksIHN0YXR1c0NvZGUsIGhlYWRlcnMgfSkgPT4ge1xuXHRcdFx0aWYgKGJvZHkub3JkUmVqUmVhc29uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFxuXHRcdFx0XHRcdG5ldyBEcml2ZVdlYWx0aEVycm9yKGJvZHkub3JkUmVqUmVhc29uLCBib2R5LCBzdGF0dXNDb2RlLCBoZWFkZXJzKSxcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT3JkZXIoYm9keSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcblx0ICogQHBhcmFtIHtPYmplY3R9IHBhcmVudEluZm9cblx0ICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcblx0ICogQHJldHVybiBJZiB3YWl0Rm9yRmlsbCBpcyB0cnVlLCBhbiBPcmRlciB3aWxsIGJlIHJldHVybmVkLiBPdGhlcndpc2UsIGFuIG9yZGVySUQgd2lsbCBiZSByZXR1cm5lZC5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGUoXG5cdFx0dHlwZTogc3RyaW5nLFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcjoge1xuXHRcdFx0XHRpbnN0cnVtZW50LFxuXHRcdFx0XHRzaWRlLFxuXHRcdFx0XHRxdHksXG5cdFx0XHRcdGFtb3VudENhc2gsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wLFxuXHRcdFx0XHRwcmljZSxcblx0XHRcdH0sXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDEwMDAsXG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDEwLFxuXHRcdH06IHtcblx0XHRcdG9yZGVyOiBOZXdPcmRlcixcblx0XHRcdHdhaXRGb3JGaWxsPzogYm9vbGVhbixcblx0XHRcdGZpbGxSZXRyeUludGVydmFsPzogbnVtYmVyLFxuXHRcdFx0ZmlsbE1heFJldHJpZXM/OiBudW1iZXIsXG5cdFx0fSxcblx0KTogUHJvbWlzZTxzdHJpbmcgfCBPcmRlcj4ge1xuXHRcdGlmIChhbW91bnRDYXNoICYmIHF0eSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcInF0eVxcXCIgYW5kIFxcXCJhbW91bnRDYXNoXFxcIiBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLlwiKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZSAhPT0gT3JkZXIuVFlQRVMuTUFSS0VUKSB7XG5cdFx0XHRmaWxsTWF4UmV0cmllcyA9IDI7XG5cblx0XHRcdGlmICghcHJpY2UpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTGltaXQgYW5kIHN0b3Agb3JkZXJzIHJlcXVpcmUgYSBcXFwicHJpY2UuXFxcIlwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGF1dG9TdG9wKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlxcXCJhdXRvU3RvcFxcXCIgaXMgb25seSBhbGxvd2VkIGZvciBtYXJrZXQgb3JkZXJzLlwiKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogaW5zdHJ1bWVudC5pbnN0cnVtZW50SUQgfHwgaW5zdHJ1bWVudC5pZCB8fCBpbnN0cnVtZW50LFxuXHRcdFx0XHRhY2NvdW50SUQsXG5cdFx0XHRcdGFjY291bnRObyxcblx0XHRcdFx0dXNlcklELFxuXHRcdFx0XHRhY2NvdW50VHlwZSxcblx0XHRcdFx0b3JkVHlwZTogdHlwZSxcblx0XHRcdFx0c2lkZSxcblx0XHRcdFx0b3JkZXJRdHk6IHF0eSB8fCB1bmRlZmluZWQsXG5cdFx0XHRcdGFtb3VudENhc2g6IGFtb3VudENhc2ggfHwgdW5kZWZpbmVkLFxuXHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRhdXRvU3RvcCxcblx0XHRcdFx0cHJpY2U6IHR5cGUgPT09IE9yZGVyLlRZUEVTLlNUT1AgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0bGltaXRQcmljZTogdHlwZSA9PT0gT3JkZXIuVFlQRVMuTElNSVQgPyBwcmljZSA6IHVuZGVmaW5lZCxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBib2R5Lm9yZGVySUQ7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdHJldHJpZXMgLT0gMTtcblx0XHRcdFx0XHRPcmRlci5nZXRCeUlEKGJvZHkub3JkZXJJRCkudGhlbihvcmRlciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBpc0ZpbGxlZCA9IG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuTkVXICYmXG5cdFx0XHRcdFx0XHRcdG9yZGVyLnN0YXR1cyAhPT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMO1xuXG5cdFx0XHRcdFx0XHRpZiAocmV0cmllcyA8PSAwIHx8IGlzRmlsbGVkKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHR9LCBlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyb3IuYm9keS5jb2RlID09PSA0MDQgJiYgcmV0cmllcyA+IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzZXRUaW1lb3V0KGNoZWNrU3RhdHVzLCBmaWxsUmV0cnlJbnRlcnZhbCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcGFyZW50SW5mb1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBPYmplY3Q+Pn0gQW4gb2JqZWN0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBlYWNoIGtleSBzZXQgdG8gYSByZWZlcmVuY2VJRCBwYXNzZWQgd2l0aCBhbiBvcmRlci5cblx0ICovXG5cdHN0YXRpYyBjcmVhdGVDYXJ0KFxuXHRcdHtcblx0XHRcdGFjY291bnRJRCxcblx0XHRcdGFjY291bnRObyxcblx0XHRcdHVzZXJJRCxcblx0XHRcdGFjY291bnRUeXBlLFxuXHRcdH06IE9yZGVyUGFyZW50RGV0YWlscyxcblx0XHR7XG5cdFx0XHRvcmRlcnMsXG5cdFx0XHR3YWl0Rm9yRmlsbCA9IHRydWUsXG5cdFx0XHRmaWxsUmV0cnlJbnRlcnZhbCA9IDUwMCxcblx0XHRcdGZpbGxNYXhSZXRyaWVzID0gMTAsXG5cdFx0fToge1xuXHRcdFx0b3JkZXJzOiBBcnJheTxOZXdDYXJ0T3JkZXI+LFxuXHRcdFx0d2FpdEZvckZpbGw/OiBib29sZWFuLFxuXHRcdFx0ZmlsbFJldHJ5SW50ZXJ2YWw/OiBudW1iZXIsXG5cdFx0XHRmaWxsTWF4UmV0cmllcz86IG51bWJlcixcblx0XHR9LFxuXHQpOiBQcm9taXNlPHtbcmVmZXJlbmNlSUQ6IHN0cmluZ106IE9iamVjdH0+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL29yZGVyc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiBvcmRlcnMubWFwKG9yZGVyID0+ICh7XG5cdFx0XHRcdGluc3RydW1lbnRJRDogb3JkZXIuaW5zdHJ1bWVudC5pbnN0cnVtZW50SURcblx0XHRcdFx0XHR8fCBvcmRlci5pbnN0cnVtZW50LmlkIHx8IG9yZGVyLmluc3RydW1lbnQsXG5cdFx0XHRcdGFjY291bnRJRCxcblx0XHRcdFx0YWNjb3VudE5vLFxuXHRcdFx0XHR1c2VySUQsXG5cdFx0XHRcdGFjY291bnRUeXBlLFxuXHRcdFx0XHRvcmRUeXBlOiBPcmRlci5UWVBFUy5NQVJLRVQsXG5cdFx0XHRcdHNpZGU6IE9yZGVyLlNJREVTLkJVWSxcblx0XHRcdFx0b3JkZXJRdHk6IG9yZGVyLnF0eSA/IG9yZGVyLnF0eSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0YW1vdW50Q2FzaDogb3JkZXIuYW1vdW50Q2FzaCA/IG9yZGVyLmFtb3VudENhc2ggOiB1bmRlZmluZWQsXG5cdFx0XHRcdGNvbW1lbnQ6IG9yZGVyLmNvbW1lbnQsXG5cdFx0XHRcdGF1dG9TdG9wOiBvcmRlci5hdXRvU3RvcCxcblx0XHRcdH0pKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0bGV0IG9yZGVyUmVzdWx0cyA9IGJvZHk7XG5cdFx0XHRjb25zdCBvcmRlcnNNYXAgPSBvcmRlclJlc3VsdHMucmVkdWNlKFxuXHRcdFx0XHQoYWNjLCBuZXh0LCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuXHRcdFx0XHRcdFtvcmRlcnNbaWR4XS5yZWZlcmVuY2VJRF06IG5leHQsXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR7fSxcblx0XHRcdCk7XG5cblx0XHRcdGlmICghd2FpdEZvckZpbGwpIHJldHVybiBvcmRlcnNNYXA7XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGxldCByZXRyaWVzID0gZmlsbE1heFJldHJpZXM7XG5cdFx0XHRcdG9yZGVyUmVzdWx0cyA9IG9yZGVyUmVzdWx0cy5tYXAoKG9yZGVyLCBpZHgpID0+IE9iamVjdC5hc3NpZ24oe30sIG9yZGVyLCB7XG5cdFx0XHRcdFx0cmVmZXJlbmNlSUQ6IG9yZGVyc1tpZHhdLnJlZmVyZW5jZUlELFxuXHRcdFx0XHR9KSk7XG5cdFx0XHRcdGNvbnN0IGNoZWNrU3RhdHVzID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXRyaWVzIDw9IDApIHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0cmV0cmllcyAtPSAxO1xuXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0XHRvcmRlclJlc3VsdHMubWFwKG9yZGVyID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0XHRcdFx0T3JkZXIuZ2V0QnlJRChvcmRlci5vcmRlcklEKS50aGVuKG9yZGVyQ3VycmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IG9yZGVyQ3VycmVudDtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdFx0XHRcdH0sIGVycm9yID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyb3IuYm9keSAmJiBlcnJvci5ib2R5Lm9yZFJlalJlYXNvbikge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3JkZXJzTWFwW29yZGVyLnJlZmVyZW5jZUlEXSA9IG5ldyBPcmRlcihlcnJvci5ib2R5KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pKSxcblx0XHRcdFx0XHQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IHNob3VsZFJldHJ5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHJlZmVyZW5jZSBpbiBvcmRlcnNNYXApIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGhpc1N0YXR1cyA9IG9yZGVyc01hcFtyZWZlcmVuY2VdLm9yZFN0YXR1cztcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzU3RhdHVzXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuTkVXXG5cdFx0XHRcdFx0XHRcdFx0fHwgdGhpc1N0YXR1cyA9PT0gT3JkZXIuU1RBVFVTRVMuUEFSVElBTF9GSUxMXG5cdFx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRcdHNob3VsZFJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHNob3VsZFJldHJ5KSB7XG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKG9yZGVyc01hcCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHNldFRpbWVvdXQoY2hlY2tTdGF0dXMsIGZpbGxSZXRyeUludGVydmFsKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBlc3RpbWF0ZUNvbW1pc3Npb24oXG5cdFx0b3JkZXJzOiBBcnJheTx7XG5cdFx0XHRzaWRlOiBzdHJpbmcsXG5cdFx0XHRxdHk6IG51bWJlcixcblx0XHRcdG1hcmtldFByaWNlOiBudW1iZXIsXG5cdFx0XHRyZWZlcmVuY2VJRDogc3RyaW5nLFxuXHRcdH0+LFxuXHRcdGNvbW1pc3Npb25TY2hlZHVsZTogQ29tbWlzc2lvblNjaGVkdWxlLFxuXHQpOiB7XG5cdFx0dG90YWw6IG51bWJlcixcblx0XHRtdWx0aXBsZU9yZGVyRGVsdGE6IG51bWJlcixcblx0XHRieU9yZGVyOiB7W3JlZmVyZW5jZUlEOiBzdHJpbmddOiB7XG5cdFx0XHR0b3RhbDogbnVtYmVyLFxuXHRcdFx0Y29tbWlzc2lvbjogbnVtYmVyLFxuXHRcdFx0ZmVlczoge1xuXHRcdFx0XHRzZWM6IG51bWJlcixcblx0XHRcdFx0dGFmOiBudW1iZXIsXG5cdFx0XHR9LFxuXHRcdH19XG5cdH0ge1xuXHRcdG9yZGVycyA9IEFycmF5LmlzQXJyYXkob3JkZXJzKSA/IG9yZGVycyA6IFtvcmRlcnNdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IHRvdGFsRmVlc09ubHkgPSAwO1xuXHRcdGxldCBiYXNrZXRQcmljZTtcblxuXHRcdGNvbnN0IHsgYmFza2V0U2NoZWR1bGUgfSA9IGNvbW1pc3Npb25TY2hlZHVsZTtcblx0XHRpZiAoYmFza2V0U2NoZWR1bGUgJiYgYmFza2V0U2NoZWR1bGUuc2NoZWR1bGUpIHtcblx0XHRcdGZvciAoY29uc3Qgc2NoZWR1bGVJdGVtIG9mIGJhc2tldFNjaGVkdWxlLnNjaGVkdWxlKSB7XG5cdFx0XHRcdGlmIChzY2hlZHVsZUl0ZW0uYmFza2V0U2l6ZSA9PT0gb3JkZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJhc2tldFByaWNlID0gc2NoZWR1bGVJdGVtLmJhc2tldFByaWNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgYnlPcmRlciA9IHt9O1xuXHRcdGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG5cdFx0XHRjb25zdCB7IHF0eSwgbWFya2V0UHJpY2UsIHNpZGUsIHJlZmVyZW5jZUlEIH0gPSBvcmRlcjtcblxuXHRcdFx0bGV0IG9yZGVyUHJpY2UgPSBxdHkgPCAxXG5cdFx0XHRcdD8gY29tbWlzc2lvblNjaGVkdWxlLmZyYWN0aW9uYWxSYXRlXG5cdFx0XHRcdDogY29tbWlzc2lvblNjaGVkdWxlLmJhc2VSYXRlO1xuXHRcdFx0b3JkZXJQcmljZSArPSAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRORUFSRVNUOiBNYXRoLnJvdW5kLFxuXHRcdFx0XHRcdENFSUw6IE1hdGguY2VpbCxcblx0XHRcdFx0XHRGTE9PUjogTWF0aC5mbG9vcixcblx0XHRcdFx0fVtjb21taXNzaW9uU2NoZWR1bGUuc2hhcmVBbW91bnRSb3VuZGluZ10oXG5cdFx0XHRcdFx0TWF0aC5tYXgoMCwgcXR5IC0gY29tbWlzc2lvblNjaGVkdWxlLmJhc2VTaGFyZXMpLFxuXHRcdFx0XHQpICogY29tbWlzc2lvblNjaGVkdWxlLmV4Y2Vzc1JhdGVcblx0XHRcdCk7XG5cblx0XHRcdGxldCBzZWNGZWUgPSAwO1xuXHRcdFx0bGV0IHRhZkZlZSA9IDA7XG5cdFx0XHRpZiAoY29tbWlzc2lvblNjaGVkdWxlLnBhc3NUaHJvdWdoRmVlcyAmJiBzaWRlID09PSBPcmRlci5TSURFUy5TRUxMKSB7XG5cdFx0XHRcdHRhZkZlZSA9IHF0eSAqIG1hcmtldFByaWNlICogVEFGX0ZFRV9SQVRFO1xuXHRcdFx0XHR0YWZGZWUgPSBNYXRoLm1pbihUQUZfRkVFX01BWCwgdGFmRmVlKTtcblx0XHRcdFx0dGFmRmVlID0gTWF0aC5tYXgoVEFGX0ZFRV9NSU4sIHRhZkZlZSk7XG5cblx0XHRcdFx0aWYgKHF0eSA+PSAxKSB7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5mbG9vcihxdHkpICogbWFya2V0UHJpY2UgKiBTRUNfRkVFX1JBVEU7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5taW4oU0VDX0ZFRV9NQVgsIHNlY0ZlZSk7XG5cdFx0XHRcdFx0c2VjRmVlID0gTWF0aC5tYXgoU0VDX0ZFRV9NSU4sIHNlY0ZlZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb3JkZXJUb3RhbCA9IG9yZGVyUHJpY2UgKyBzZWNGZWUgKyB0YWZGZWU7XG5cdFx0XHR0b3RhbCArPSBvcmRlclRvdGFsO1xuXHRcdFx0dG90YWxGZWVzT25seSArPSBzZWNGZWUgKyB0YWZGZWU7XG5cblx0XHRcdGJ5T3JkZXJbcmVmZXJlbmNlSURdID0ge1xuXHRcdFx0XHR0b3RhbDogb3JkZXJUb3RhbCxcblx0XHRcdFx0Y29tbWlzc2lvbjogb3JkZXJQcmljZSxcblx0XHRcdFx0ZmVlczoge1xuXHRcdFx0XHRcdHNlYzogc2VjRmVlLFxuXHRcdFx0XHRcdHRhZjogdGFmRmVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dG90YWw6IGJhc2tldFByaWNlID8gKGJhc2tldFByaWNlICsgdG90YWxGZWVzT25seSkgOiB0b3RhbCxcblx0XHRcdG11bHRpcGxlT3JkZXJEZWx0YTogYmFza2V0UHJpY2UgPyAoYmFza2V0UHJpY2UgLSB0b3RhbCkgOiAwLFxuXHRcdFx0YnlPcmRlcixcblx0XHR9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT3JkZXIuanMiLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCB7IENvbmZpZywgSE9TVFMgfSBmcm9tIFwiLi9Db25maWdcIjtcblxuLyoqXG4gKiBAY2xhc3MgRnVuZGluZ1xuICogQGRlc2NyaXB0aW9uIFN0YXRpYyBjbGFzcyBmb3IgcmV0cmlldmluZyBmdW5kaW5nIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5kaW5nIHtcblx0LyoqXG5cdCAqIEBuYW1lIEFMTE9XRURfVFlQRVNcblx0ICogQG1lbWJlcm9mIEZ1bmRpbmdcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBERVBPU0lUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBXSVRIRFJBV1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gREVQT1NJVF9BTkRfV0lUSERSQVdcblx0ICovXG5cdHN0YXRpYyBBTExPV0VEX1RZUEVTID0ge1xuXHRcdERFUE9TSVQ6IFwiREVQT1NJVFwiLFxuXHRcdFdJVEhEUkFXOiBcIldJVEhEUkFXXCIsXG5cdFx0REVQT1NJVF9BTkRfV0lUSERSQVc6IFwiREVQT1NJVF9BTkRfV0lUSERSQVdcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgREVQT1NJVF9GUkVRVUVOQ0lFU1xuXHQgKiBAbWVtYmVyb2YgRnVuZGluZ1xuXHQgKiBAY29uc3RhbnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IEJJV0VFS0xZXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNT05USExZX0ZJUlNUXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNT05USExZX01JRERMRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUVVBUlRFUkxZXG5cdCAqL1xuXHRzdGF0aWMgREVQT1NJVF9GUkVRVUVOQ0lFUyA9IHtcblx0XHRCSVdFRUtMWTogXCJCSVdFRUtMWVwiLFxuXHRcdE1PTlRITFlfRklSU1Q6IFwiTU9OVEhMWV9GSVJTVFwiLFxuXHRcdE1PTlRITFlfTUlERExFOiBcIk1PTlRITFlfTUlERExFXCIsXG5cdFx0UVVBUlRFUkxZOiBcIlFVQVJURVJMWVwiLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuXHQgKi9cblx0c3RhdGljIGdldEZ1bmRpbmdNZXRob2RzKHtcblx0XHR1c2VySUQsXG5cdFx0YWNjb3VudElELFxuXHRcdGxhbmd1YWdlLFxuXHRcdG1pbkFtb3VudCxcblx0XHRtYXhBbW91bnQsXG5cdFx0YW1vdW50LFxuXHRcdGZpbHRlcnMgPSB7fSxcblx0fToge1xuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdGxhbmd1YWdlPzogc3RyaW5nLFxuXHRcdG1pbkFtb3VudD86IG51bWJlcixcblx0XHRtYXhBbW91bnQ/OiBudW1iZXIsXG5cdFx0YW1vdW50PzogbnVtYmVyLFxuXHRcdGZpbHRlcnM/OiB7XG5cdFx0XHRuYW1lOiBzdHJpbmcsXG5cdFx0XHRjdXJyZW5jeTogc3RyaW5nLFxuXHRcdFx0Y291bnRyeTogc3RyaW5nLFxuXHRcdFx0YWxsb3dlZDogc3RyaW5nLFxuXHRcdH0sXG5cdH0gPSB7fSk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGlmIChhbW91bnQgJiYgKG1pbkFtb3VudCB8fCBtYXhBbW91bnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFwiYW1vdW50XCIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCBcIm1pbkFtb3VudFwiIG9yIFwibWF4QW1vdW50LlwiYCk7XG5cdFx0fVxuXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gYHBhcnRuZXI9JHtDb25maWcuYXBwc1BhcnRuZXJJRH0mdXNlcklEPSR7dXNlcklEfSZhY2NvdW50SUQ9JHthY2NvdW50SUR9YDtcblx0XHRpZiAobGFuZ3VhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gO1xuXHRcdGlmIChtaW5BbW91bnQpIHF1ZXJ5U3RyaW5nICs9IGAmbWluQW1vdW50PSR7bWluQW1vdW50fWA7XG5cdFx0aWYgKG1heEFtb3VudCkgcXVlcnlTdHJpbmcgKz0gYCZtYXhBbW91bnQ9JHttYXhBbW91bnR9YDtcblx0XHRpZiAoYW1vdW50KSBxdWVyeVN0cmluZyArPSBgJmFtb3VudD0ke2Ftb3VudH1gO1xuXHRcdGlmIChmaWx0ZXJzLm5hbWUpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW25hbWVdPSR7ZmlsdGVycy5uYW1lfWA7XG5cdFx0aWYgKGZpbHRlcnMuY291bnRyeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY291bnRyeV09JHtmaWx0ZXJzLmNvdW50cnl9YDtcblx0XHRpZiAoZmlsdGVycy5jdXJyZW5jeSkgcXVlcnlTdHJpbmcgKz0gYCZmaWx0ZXJbY3VycmVuY3ldPSR7ZmlsdGVycy5jdXJyZW5jeX1gO1xuXHRcdGlmIChmaWx0ZXJzLmFsbG93ZWQpIHF1ZXJ5U3RyaW5nICs9IGAmZmlsdGVyW2FsbG93ZWRdPSR7ZmlsdGVycy5hbGxvd2VkfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRob3N0OiBIT1NUUy5BUFBTLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9tZXRob2RzPyR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UGFzdERlcG9zaXRzKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IFwiL2Z1bmRpbmcvc3RhdHVzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uUGxhbnModXNlcklEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogXCIvc3Vic2NyaXB0aW9ucy9wbGFuc1wiLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdGNvbnN0IHByaWNpbmcgPSBbXS5jb25jYXQoYm9keSlcblx0XHRcdFx0LnNvcnQoKHgsIHkpID0+IHguYW1vdW50IC0geS5hbW91bnQpO1xuXG5cdFx0XHRyZXR1cm4gcHJpY2luZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UmVjdXJyaW5nRGVwb3NpdChpZDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IGAvZnVuZGluZy9hY2gvcmVjdXJyaW5nLWRlcG9zaXRzLyR7aWR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBib2R5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UmVjdXJyaW5nRGVwb3NpdHNGb3JVc2VyKHVzZXJJRDogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3JlY3VycmluZy1kZXBvc2l0c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFJlY3VycmluZ0RlcG9zaXRzRm9yQWNjb3VudCh1c2VySUQ6IHN0cmluZywgYWNjb3VudElEOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vYWNjb3VudHMvJHthY2NvdW50SUR9L3JlY3VycmluZy1kZXBvc2l0c2AsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIHVwZGF0ZVJlY3VycmluZ0RlcG9zaXQoZGVwb3NpdElEOiBzdHJpbmcsIGRhdGE6IE9iamVjdCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBBVENIXCIsXG5cdFx0XHRlbmRwb2ludDogYC9mdW5kaW5nL2FjaC9yZWN1cnJpbmctZGVwb3NpdHMvJHtkZXBvc2l0SUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdFx0Ym9keTogZGF0YSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGRlbGV0ZVJlY3VycmluZ0RlcG9zaXQoZGVwb3NpdElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC9mdW5kaW5nL2FjaC9yZWN1cnJpbmctZGVwb3NpdHMvJHtkZXBvc2l0SUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Z1bmRpbmcuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnLCBIT1NUUyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbi8qKlxuICogQGNsYXNzIFJlcG9ydHNcbiAqIEBkZXNjcmlwdGlvbiBTdGF0aWMgY2xhc3MgZm9yIHJldHJpZXZpbmcgYWNjb3VudCByZXBvcnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvcnRzIHtcblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFuc2FjdGlvbnMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudE5vOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/c2Vzc2lvbktleT0ke1Nlc3Npb25zLmdldCh1c2VySUQpfWBcblx0XHRcdCsgXCImUmVwb3J0TmFtZT1GaW5UcmFuc1wiXG5cdFx0XHQrIFwiJlJlcG9ydEZvcm1hdD1KU09OXCJcblx0XHRcdCsgYCZBY2NvdW50TnVtYmVyPSR7YWNjb3VudE5vfWBcblx0XHRcdCsgYCZEYXRlU3RhcnQ9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmRGF0ZUVuZD0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmd2xwSUQ9JHtDb25maWcud2xwSUR9YFxuXHRcdFx0KyBcIiZMYW5ndWFnZUlEPWVuX1VTXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aG9zdDogSE9TVFMuUkVQT1JUUyxcblx0XHRcdGVuZHBvaW50OiBgL0RyaXZlV2VhbHRoJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHRib2R5OiB7fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS50cmFuc2FjdGlvbiB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldFBsYWNlZE9yZGVycyhcblx0XHR1c2VySUQ6IHN0cmluZyxcblx0XHRhY2NvdW50Tm86IHN0cmluZyxcblx0XHRzdGFydERhdGU6IERhdGUsXG5cdFx0ZW5kRGF0ZTogRGF0ZSxcblx0KTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0Y29uc3QgcXVlcnlTdHJpbmcgPVxuXHRcdFx0YD9zZXNzaW9uS2V5PSR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YFxuXHRcdFx0KyBcIiZSZXBvcnROYW1lPU9yZGVyVHJhbnNcIlxuXHRcdFx0KyBcIiZSZXBvcnRGb3JtYXQ9SlNPTlwiXG5cdFx0XHQrIGAmQWNjb3VudE51bWJlcj0ke2FjY291bnROb31gXG5cdFx0XHQrIGAmRGF0ZVN0YXJ0PSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJkRhdGVFbmQ9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJndscElEPSR7Q29uZmlnLndscElEfWBcblx0XHRcdCsgXCImTGFuZ3VhZ2VJRD1lbl9VU1wiO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdGhvc3Q6IEhPU1RTLlJFUE9SVFMsXG5cdFx0XHRlbmRwb2ludDogYC9Ecml2ZVdlYWx0aCR7cXVlcnlTdHJpbmd9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge30sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudHJhbnNhY3Rpb24gfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRTdGF0ZW1lbnRzKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmc3RhcnREYXRlPSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmVuZERhdGU9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAyXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUcmFkZUNvbmZpcm1zKFxuXHRcdHVzZXJJRDogc3RyaW5nLFxuXHRcdGFjY291bnRJRDogc3RyaW5nLFxuXHRcdHN0YXJ0RGF0ZTogRGF0ZSxcblx0XHRlbmREYXRlOiBEYXRlLFxuXHQpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcblx0XHRjb25zdCBxdWVyeVN0cmluZyA9XG5cdFx0XHRgP2FjY291bnRJRD0ke2FjY291bnRJRH1gXG5cdFx0XHQrIGAmc3RhcnREYXRlPSR7c3RhcnREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBgJmVuZERhdGU9JHtlbmREYXRlLnRvSVNPU3RyaW5nKCl9YFxuXHRcdFx0KyBcIiZ0eXBlPTAxXCI7XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9zdGF0ZW1lbnRzJHtxdWVyeVN0cmluZ31gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkgfHwgW10pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRUYXhEb2N1bWVudHMoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0c3RhcnREYXRlOiBEYXRlLFxuXHRcdGVuZERhdGU6IERhdGUsXG5cdCk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID1cblx0XHRcdGA/YWNjb3VudElEPSR7YWNjb3VudElEfWBcblx0XHRcdCsgYCZzdGFydERhdGU9JHtzdGFydERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIGAmZW5kRGF0ZT0ke2VuZERhdGUudG9JU09TdHJpbmcoKX1gXG5cdFx0XHQrIFwiJnR5cGU9MDNcIjtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdlbmVyYXRlRG93bmxvYWRVUkwoXG5cdFx0dXNlcklEOiBzdHJpbmcsXG5cdFx0YWNjb3VudElEOiBzdHJpbmcsXG5cdFx0ZmlsZUtleTogc3RyaW5nLFxuXHQpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3N0YXRlbWVudHMvJHthY2NvdW50SUR9LyR7ZmlsZUtleX1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkudXJsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0U3VwcG9ydGVkQ291bnRyaWVzKCkge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBcIi9jb3VudHJpZXNcIixcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSB8fCBbXSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlcG9ydHMuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IFNlc3Npb25zIGZyb20gXCIuL1Nlc3Npb25zXCI7XG5cbmV4cG9ydCB0eXBlIFF1b3RlID0ge1xuXHRiaWQ6IG51bWJlcixcblx0YXNrOiBudW1iZXIsXG59O1xuXG4vKipcbiAqIEBjbGFzcyBJbnN0cnVtZW50XG4gKiBAZGVzY3JpcHRpb24gVXNlIHRoZSBjb25zdHJ1Y3RvciBpZiB5b3UgaGF2ZSBhIGZsYXQgSlNPTiBvYmplY3QgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhY2Nlc3MgaW5zdGFuY2UgbWV0aG9kcyBvbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gU2VlIHJlc3BvbnNlIGF0IGh0dHA6Ly9kZXZlbG9wZXIuZHJpdmV3ZWFsdGguY29tL2RvY3MvZ2V0X2luc3RydW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1bWVudCB7XG5cdGluc3RydW1lbnRJRDogc3RyaW5nO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGV4Y2hhbmdlSUQ6IHN0cmluZztcblx0aW5zdHJ1bWVudFR5cGVJRDogc3RyaW5nO1xuXHRvcmRlclNpemVNYXg6IG51bWJlcjtcblx0b3JkZXJTaXplTWluOiBudW1iZXI7XG5cdG9yZGVyU2l6ZVN0ZXA6IG51bWJlcjtcblx0cmF0ZUFzazogbnVtYmVyO1xuXHRyYXRlQmlkOiBudW1iZXI7XG5cdHJhdGVQcmVjaXNpb246IG51bWJlcjtcblx0c3ltYm9sOiBzdHJpbmc7XG5cdHRyYWRlU3RhdHVzOiBzdHJpbmc7XG5cdHVybEltYWdlOiBzdHJpbmc7XG5cdHVybEludmVzdG9yOiBzdHJpbmc7XG5cdGNoYWlraW5QZ3I6IHN0cmluZztcblx0cHJpb3JDbG9zZTogbnVtYmVyO1xuXHRtYXJrZXRTdGF0ZTogbnVtYmVyO1xuXHRmdW5kYW1lbnRhbERhdGFNb2RlbDogT2JqZWN0O1xuXG5cdGNvbnN0cnVjdG9yKGRhdGE6IE9iamVjdCkge1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cdH1cblxuXHQvKipcblx0ICogQG5hbWUgVFJBREVfU1RBVFVTRVNcblx0ICogQG1lbWJlcm9mIEluc3RydW1lbnRcblx0ICogQGNvbnN0YW50XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBJTkFDVElWRVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gQUNUSVZFXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBDTE9TRURcblx0ICovXG5cdHN0YXRpYyBUUkFERV9TVEFUVVNFUzoge1tzdGF0dXM6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0SU5BQ1RJVkU6IFwiMFwiLFxuXHRcdEFDVElWRTogXCIxXCIsXG5cdFx0Q0xPU0VEOiBcIjJcIixcblx0fTtcblxuXHQvKipcblx0ICogQG5hbWUgQ0hBUlRfQ09NUFJFU1NJT05TXG5cdCAqIEBtZW1iZXJvZiBJbnN0cnVtZW50XG5cdCAqIEBjb25zdGFudFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gREFZXG5cdCAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNSU5VVEVfMVxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gTUlOVVRFXzVcblx0ICogQHByb3BlcnR5IHtudW1iZXJ9IE1JTlVURV8zMFxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gSE9VUlxuXHQgKiBAcHJvcGVydHkge251bWJlcn0gV0VFS1xuXHQgKi9cblx0c3RhdGljIENIQVJUX0NPTVBSRVNTSU9OUzoge1tzdGF0dXM6IHN0cmluZ106IG51bWJlcn0gPSB7XG5cdFx0REFZOiAwLFxuXHRcdE1JTlVURV8xOiAxLFxuXHRcdE1JTlVURV81OiA0LFxuXHRcdE1JTlVURV8zMDogOCxcblx0XHRIT1VSOiA5LFxuXHRcdFdFRUs6IDEwLFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlTeW1ib2woc3ltYm9sOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nKTogUHJvbWlzZTxBcnJheTxJbnN0cnVtZW50PiB8IEluc3RydW1lbnQ+IHtcblx0XHRjb25zdCBzeW1ib2xzID0gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IFtzeW1ib2xdIDogc3ltYm9sO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHM/c3ltYm9scz0ke3N5bWJvbHMuam9pbihcIixcIil9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRib2R5ID0gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSk7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHN5bWJvbCA9PT0gXCJzdHJpbmdcIiA/IGJvZHlbMF0gOiBib2R5O1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRCeUlEKGlkOiBzdHJpbmcsIGluY2x1ZGVGdW5kYW1lbnRhbHM6IGJvb2xlYW4gPSB0cnVlKTogUHJvbWlzZTxJbnN0cnVtZW50PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMvJHtpZH0ke2luY2x1ZGVGdW5kYW1lbnRhbHMgPyBcIj9vcHRpb25zPUZcIiA6IFwiXCJ9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldEFueSgpLFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiBuZXcgSW5zdHJ1bWVudChib2R5KSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFsbCh0cmFkZVN0YXR1cz86IHN0cmluZyA9IFwiLTFcIik6IFByb21pc2U8QXJyYXk8SW5zdHJ1bWVudD4+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9pbnN0cnVtZW50cz90cmFkZVN0YXR1cz0ke3RyYWRlU3RhdHVzfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBzZWFyY2goY3JpdGVyaWE6IHsgbmFtZT86IHN0cmluZywgc3ltYm9sPzogc3RyaW5nIH0pOiBQcm9taXNlPEFycmF5PEluc3RydW1lbnQ+PiB7XG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gXCI/XCI7XG5cdFx0aWYgKGNyaXRlcmlhLnN5bWJvbCkgcXVlcnlTdHJpbmcgKz0gYHN5bWJvbD0ke2NyaXRlcmlhLnN5bWJvbH0mYDtcblx0XHRpZiAoY3JpdGVyaWEubmFtZSkgcXVlcnlTdHJpbmcgKz0gYG5hbWU9JHtjcml0ZXJpYS5uYW1lfSZgO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvaW5zdHJ1bWVudHMke3F1ZXJ5U3RyaW5nfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5tYXAoaW5zdHJ1bWVudCA9PiBuZXcgSW5zdHJ1bWVudChpbnN0cnVtZW50KSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0UXVvdGUoKTogUHJvbWlzZTxRdW90ZT4ge1xuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldFF1b3RlKHRoaXMuc3ltYm9sKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0UXVvdGUoXG5cdFx0c3ltYm9sOiBzdHJpbmcgfCBJbnN0cnVtZW50IHwgQXJyYXk8c3RyaW5nIHwgSW5zdHJ1bWVudD4sXG5cdC8vICRGbG93Rml4TWVcblx0KTogUHJvbWlzZTxRdW90ZSB8IHtbc3ltYm9sOiBzdHJpbmddOiBRdW90ZX0+IHtcblx0XHRjb25zdCBzeW1ib2xzOiBBcnJheTxzdHJpbmc+ID0gKEFycmF5LmlzQXJyYXkoc3ltYm9sKSA/IHN5bWJvbCA6IFtzeW1ib2xdKVxuXHRcdFx0Lm1hcChzeW0gPT4gc3ltIGluc3RhbmNlb2YgSW5zdHJ1bWVudCA/IHN5bS5zeW1ib2wgOiBzeW0pO1xuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvcXVvdGVzP3N5bWJvbHM9JHtzeW1ib2xzLmpvaW4oXCIsXCIpfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdEFjY2VwdDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHR9LFxuXHRcdH0pLnRoZW4oKHsgYm9keSB9KSA9PiB7XG5cdFx0XHRsZXQgb2JqID0ge307XG5cdFx0XHRib2R5ID0gYm9keS5zcGxpdChcInxcIikuc2xpY2UoMTApO1xuXHRcdFx0Zm9yIChjb25zdCByYXdRdW90ZSBvZiBib2R5KSB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFF1b3RlID0gcmF3UXVvdGUuc3BsaXQoXCIsXCIpO1xuXHRcdFx0XHRvYmpbcGFyc2VkUXVvdGVbMF1dID0ge1xuXHRcdFx0XHRcdGJpZDogTnVtYmVyKHBhcnNlZFF1b3RlWzFdKSxcblx0XHRcdFx0XHRhc2s6IE51bWJlcihwYXJzZWRRdW90ZVsyXSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc3ltYm9sKSkgb2JqID0gb2JqW3N5bWJvbHNbMF1dO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVTdGFydFxuXHQgKiBAcGFyYW0ge2RhdGV9IGRhdGVFbmRcblx0ICovXG5cdC8qKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gdHJhZGluZ0RheXNcblx0ICovXG5cdGdldENoYXJ0RGF0YShjb21wcmVzc2lvbjogbnVtYmVyKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YShcblx0XHRcdFx0dGhpcy5pbnN0cnVtZW50SUQsXG5cdFx0XHRcdGNvbXByZXNzaW9uLFxuXHRcdFx0XHRhcmd1bWVudHNbMV0sXG5cdFx0XHRcdGFyZ3VtZW50c1syXSxcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBJbnN0cnVtZW50LmdldENoYXJ0RGF0YSh0aGlzLmluc3RydW1lbnRJRCwgY29tcHJlc3Npb24sIGFyZ3VtZW50c1sxXSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlU3RhcnRcblx0ICogQHBhcmFtIHtkYXRlfSBkYXRlRW5kXG5cdCAqL1xuXHQvKipcblx0ICogQHBhcmFtIHtudW1iZXJ9IHRyYWRpbmdEYXlzXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Q2hhcnREYXRhKGluc3RydW1lbnRJRDogc3RyaW5nLCBjb21wcmVzc2lvbjogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG5cdFx0bGV0IHRpbWVQYXJhbXM7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDQpIHtcblx0XHRcdGNvbnN0IGRhdGVTdGFydCA9IGFyZ3VtZW50c1syXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0Y29uc3QgZGF0ZUVuZCA9IGFyZ3VtZW50c1szXS50b0lTT1N0cmluZygpLnJlcGxhY2UoL1xcLlxcZHszfS8sIFwiXCIpO1xuXHRcdFx0dGltZVBhcmFtcyA9IGBkYXRlU3RhcnQ9JHtkYXRlU3RhcnR9JmRhdGVFbmQ9JHtkYXRlRW5kfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpbWVQYXJhbXMgPSBgdHJhZGluZ0RheXM9JHthcmd1bWVudHNbMl19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC9iYXJzP2luc3RydW1lbnRJRD0ke2luc3RydW1lbnRJRH0mY29tcHJlc3Npb249JHtjb21wcmVzc2lvbn0mJHt0aW1lUGFyYW1zfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXRBbnkoKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5kYXRhLnNwbGl0KFwifFwiKSk7XG5cdH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luc3RydW1lbnQuanMiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XG5pbXBvcnQgU2Vzc2lvbnMgZnJvbSBcIi4vU2Vzc2lvbnNcIjtcbmltcG9ydCBBY2NvdW50IGZyb20gXCIuL0FjY291bnRcIjtcblxuLyoqXG4gKiBAY2xhc3MgVXNlclxuICogQGRlc2NyaXB0aW9uIEEgdXNlciBvYmplY3QuIFVzZSB0aGUgY29uc3RydWN0b3IgaWYgeW91IGhhdmUgYSBmbGF0IEpTT04gb2JqZWN0IHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYWNjZXNzIGluc3RhbmNlIG1ldGhvZHMgb24uXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFNlZSByZXNwb25zZSBhdCB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5kcml2ZXdlYWx0aC5jb20vZG9jcy9nZXQtdXNlcn1cbiAqL1xuY2xhc3MgVXNlciB7XG5cdGNvdW50cnlJRDogc3RyaW5nO1xuXHRlbWFpbEFkZHJlc3M6IHN0cmluZztcblx0Zmlyc3ROYW1lOiBzdHJpbmc7XG5cdGxhbmd1YWdlSUQ6IHN0cmluZztcblx0bGFzdE5hbWU6IHN0cmluZztcblx0cGhvbmVOdW1iZXI6IHN0cmluZztcblx0cmVmZXJyYWxDb2RlOiBzdHJpbmc7XG5cdHVzZXJJRDogc3RyaW5nO1xuXHR1c2VybmFtZTogc3RyaW5nO1xuXHR3bHBJRDogc3RyaW5nO1xuXHRzdGF0dXM6IHN0cmluZztcblx0dXNDaXRpemVuOiBib29sZWFuO1xuXHRsYXN0TG9naW5XaGVuOiBzdHJpbmc7XG5cdGNpdGl6ZW5zaGlwOiBzdHJpbmc7XG5cdGFkZHJlc3NMaW5lMTogc3RyaW5nO1xuXHRhZGRyZXNzTGluZTI6IHN0cmluZztcblx0Y2l0eTogc3RyaW5nO1xuXHRzdGF0ZVByb3ZpbmNlOiBzdHJpbmc7XG5cdHppcFBvc3RhbENvZGU6IHN0cmluZztcblx0ZnVsbE5hbWU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihkYXRhOiBPYmplY3QpIHtcblx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXHRcdHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZpcnN0TmFtZSArIFwiIFwiICsgZGF0YS5sYXN0TmFtZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAbmFtZSBTVEFUVVNFU1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gUEVORElOR1xuXHQgKiBAcHJvcGVydHkge051bWJlcn0gQVBQUk9WRURcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IFJFSkVDVEVEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBSRVZPS0VEXG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBDTE9TRURcblx0ICogQG1lbWJlcm9mIFVzZXJcblx0ICogQGNvbnN0YW50XG5cdCAqL1xuXHRzdGF0aWMgU1RBVFVTRVM6IHtbc3RhdHVzOiBzdHJpbmddOiBudW1iZXJ9ID0ge1xuXHRcdFBFTkRJTkc6IDEsXG5cdFx0QVBQUk9WRUQ6IDIsXG5cdFx0UkVKRUNURUQ6IDMsXG5cdFx0UkVWT0tFRDogNCxcblx0XHRDTE9TRUQ6IDUsXG5cdH07XG5cblx0LyoqXG5cdCAqIEBuYW1lIERPQ1VNRU5UX1RZUEVTXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBQSE9UT19JRFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUFJPT0ZfT0ZfQUREUkVTU1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gUEhPVE9fSURfV0lUSF9QUk9PRl9PRl9BRERSRVNTXG5cdCAqIEBtZW1iZXJvZiBVc2VyXG5cdCAqIEBjb25zdGFudFxuXHQgKi9cblx0c3RhdGljIERPQ1VNRU5UX1RZUEVTOiB7W3R5cGU6IHN0cmluZ106IHN0cmluZ30gPSB7XG5cdFx0UEhPVE9fSUQ6IFwiUGljdHVyZSBJRFwiLFxuXHRcdFBST09GX09GX0FERFJFU1M6IFwiUHJvb2Ygb2YgYWRkcmVzc1wiLFxuXHRcdFBIT1RPX0lEX1dJVEhfUFJPT0ZfT0ZfQUREUkVTUzogXCJQaWN0dXJlIElEX1Byb29mIG9mIGFkZHJlc3NcIixcblx0fTtcblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGdldEFjY291bnRzKHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxBcnJheTxBY2NvdW50Pj4ge1xuXHRcdHJldHVybiBBY2NvdW50LmdldExpc3RGb3JVc2VySUQodXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldEFjY291bnRzKCk6IFByb21pc2U8QXJyYXk8QWNjb3VudD4+IHtcblx0XHRyZXR1cm4gQWNjb3VudC5nZXRMaXN0Rm9yVXNlcklEKHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgYWxsIHNldHRpbmdzXG5cdCAqIEBwYXJhbSAge3N0cmluZ30gdXNlcklEXG5cdCAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0LjxzdHJpbmcsIHN0cmluZz4+fVxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBzZXR0aW5nIHZhbHVlIGJ5IGtleVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJJRFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRzdGF0aWMgZ2V0U2V0dGluZ3ModXNlcklEOiBzdHJpbmcsIGtleT86IHN0cmluZykge1xuXHRcdGlmICgha2V5KSB7XG5cdFx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZWREYXRhID0ge307XG5cdFx0XHRcdGZvciAoY29uc3Qgc2V0dGluZyBvZiBib2R5KSB7XG5cdFx0XHRcdFx0Zm9ybWF0dGVkRGF0YVtzZXR0aW5nLmtleV0gPSBzZXR0aW5nLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmb3JtYXR0ZWREYXRhO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzLyR7a2V5fWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS52YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IGFsbCBzZXR0aW5nc1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdC48c3RyaW5nLCBzdHJpbmc+Pn1cblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgc2V0dGluZyB2YWx1ZVxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9IGtleVxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRnZXRTZXR0aW5ncyhrZXk/OiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gVXNlci5nZXRTZXR0aW5ncyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgc2V0U2V0dGluZyh1c2VySUQ6IHN0cmluZywga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9L3NldHRpbmdzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRrZXksIHZhbHVlLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRzZXRTZXR0aW5nKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5LCB2YWx1ZSk7XG5cdH1cblxuXHRzdGF0aWMgdW5zZXRTZXR0aW5nKHVzZXJJRDogc3RyaW5nLCBrZXk6IHN0cmluZykgOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vc2V0dGluZ3MvJHtrZXl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4gdW5kZWZpbmVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdHVuc2V0U2V0dGluZyhrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVuc2V0U2V0dGluZyh0aGlzLnVzZXJJRCwga2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVzY3JpcHRpb24gU2VlIHJlc3BvbnNlIGF0IHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLmRyaXZld2VhbHRoLmNvbS9kb2NzL3VzZXItc3RhdHVzfVxuXHQgKi9cblx0Z2V0U3RhdHVzKCk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt0aGlzLnVzZXJJRH0vc3RhdHVzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh0aGlzLnVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqICBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgbG9nb3V0KHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIkRFTEVURVwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlclNlc3Npb25zLyR7U2Vzc2lvbnMuZ2V0KHVzZXJJRCl9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdH0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0U2Vzc2lvbnMucmVtb3ZlKHVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRsb2dvdXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIubG9nb3V0KHRoaXMudXNlcklEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgZ2V0QnlVc2VySUQodXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH1gLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IG5ldyBVc2VyKGJvZHkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAaW5zdGFuY2Vcblx0ICovXG5cdGdldCgpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRCh0aGlzLnVzZXJJRCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3VzZXJTZXNzaW9uc1wiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGFwcFR5cGVJRDogQ29uZmlnLmFwcFR5cGVJRCxcblx0XHRcdFx0YXBwVmVyc2lvbjogQ29uZmlnLmFwcFZlcnNpb24sXG5cdFx0XHRcdGxhbmd1YWdlSUQ6IFwiZW5fVVNcIixcblx0XHRcdFx0b3NUeXBlOiBcInVua25vd25cIixcblx0XHRcdFx0b3NWZXJzaW9uOiBcInVua25vd25cIixcblx0XHRcdFx0c2NyUmVzOiBcInVua25vd25cIixcblx0XHRcdFx0aXBBZGRyZXNzOiBcInVua25vd25cIixcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IHtcblx0XHRcdFNlc3Npb25zLnNhdmUoYm9keS51c2VySUQsIGJvZHkuc2Vzc2lvbktleSk7XG5cdFx0XHRyZXR1cm4gVXNlci5nZXRCeVVzZXJJRChib2R5LnVzZXJJRCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGlzVXNlcm5hbWVBdmFpbGFibGUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YCxcblx0XHR9KS50aGVuKFxuXHRcdFx0KCkgPT4gZmFsc2UsXG5cdFx0XHQocmVqZWN0aW9uKSA9PiByZWplY3Rpb24uc3RhdHVzQ29kZSA9PT0gNDA0XG5cdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHQ6IFByb21pc2UucmVqZWN0KHJlamVjdGlvbiksXG5cdFx0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGxvZ2luQXV0b21hdGljYWxseSAtIElmIGZhbHNlLCBubyBzZXNzaW9uIHdpbGwgYmUgY3JlYXRlZC5cblx0ICogQHJldHVybiB7UHJvbWlzZTx1bmRlZmluZWQgfCBVc2VyPn0gSWYgbG9naW5BdXRvbWF0aWNhbGx5IGlzIHRydWUsIGEgVXNlciB3aWxsIGJlIHJlc29sdmVkLlxuXHQgKi9cblx0c3RhdGljIGNyZWF0ZSh7XG5cdFx0dXNlcm5hbWUsXG5cdFx0cGFzc3dvcmQsXG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGxhc3ROYW1lLFxuXHRcdGVtYWlsLFxuXHRcdGxhbmd1YWdlSUQsXG5cdFx0cmVmZXJyYWxDb2RlID0gQ29uZmlnLnJlZmVycmFsQ29kZSxcblx0XHR1dG1DYW1wYWlnbixcblx0XHR1dG1Db250ZW50LFxuXHRcdHV0bU1lZGl1bSxcblx0XHR1dG1Tb3VyY2UsXG5cdFx0dXRtVGVybSxcblx0fSwgbG9naW5BdXRvbWF0aWNhbGx5OiBib29sZWFuID0gdHJ1ZSk6IFByb21pc2U8dm9pZCB8IFVzZXI+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IFwiL3NpZ251cHMvbGl2ZVwiLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHR1c2VybmFtZSxcblx0XHRcdFx0cGFzc3dvcmQsXG5cdFx0XHRcdGZpcnN0TmFtZSxcblx0XHRcdFx0bGFzdE5hbWUsXG5cdFx0XHRcdGVtYWlsQWRkcmVzczE6IGVtYWlsLFxuXHRcdFx0XHRsYW5ndWFnZUlELFxuXHRcdFx0XHR3bHBJRDogQ29uZmlnLndscElELFxuXHRcdFx0XHRyZWZlcnJhbENvZGUsXG5cdFx0XHRcdHV0bUNhbXBhaWduLFxuXHRcdFx0XHR1dG1Db250ZW50LFxuXHRcdFx0XHR1dG1NZWRpdW0sXG5cdFx0XHRcdHV0bVNvdXJjZSxcblx0XHRcdFx0dXRtVGVybSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAobG9naW5BdXRvbWF0aWNhbGx5KSB7XG5cdFx0XHRcdHJldHVybiBVc2VyLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGFcblx0ICovXG5cdHN0YXRpYyB1cGRhdGUoe1xuXHRcdHVzZXJJRCxcblx0XHRhZGRyZXNzTGluZTEsXG5cdFx0YWRkcmVzc0xpbmUyLFxuXHRcdGNpdHksXG5cdFx0Y291bnRyeUlELFxuXHRcdGVtYWlsLFxuXHRcdGZpcnN0TmFtZSxcblx0XHRsYXN0TmFtZSxcblx0XHRsYW5ndWFnZUlELFxuXHRcdHBob25lSG9tZSxcblx0XHRwaG9uZVdvcmssXG5cdFx0cGhvbmUsXG5cdFx0c3RhdGVQcm92aW5jZSxcblx0XHR6aXBQb3N0YWxDb2RlLFxuXHR9KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0ZW5kcG9pbnQ6IGAvdXNlcnMvJHt1c2VySUR9YCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keToge1xuXHRcdFx0XHRhZGRyZXNzTGluZTEsXG5cdFx0XHRcdGFkZHJlc3NMaW5lMixcblx0XHRcdFx0Y2l0eSxcblx0XHRcdFx0Y291bnRyeUlELFxuXHRcdFx0XHRlbWFpbEFkZHJlc3MxOiBlbWFpbCxcblx0XHRcdFx0Zmlyc3ROYW1lLFxuXHRcdFx0XHRsYXN0TmFtZSxcblx0XHRcdFx0bGFuZ3VhZ2VJRCxcblx0XHRcdFx0cGhvbmVIb21lLFxuXHRcdFx0XHRwaG9uZVdvcmssXG5cdFx0XHRcdHBob25lTW9iaWxlOiBwaG9uZSxcblx0XHRcdFx0c3RhdGVQcm92aW5jZSxcblx0XHRcdFx0emlwUG9zdGFsQ29kZSxcblx0XHRcdH0sXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBkYXRlKGRhdGE6IE9iamVjdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdHJldHVybiBVc2VyLnVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG5cdFx0XHR1c2VySUQ6IHRoaXMudXNlcklELFxuXHRcdFx0ZW1haWw6IGRhdGEuZW1haWwgfHwgdGhpcy5lbWFpbEFkZHJlc3MsXG5cdFx0fSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyB1cGxvYWREb2N1bWVudCh1c2VySUQ6IHN0cmluZywgZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBsaW5lIGlzIGZvciBlc2xpbnRcblx0XHQvKiBnbG9iYWwgRm9ybURhdGEgKi9cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Ym9keS5hcHBlbmQoXCJ0b2tlblwiLCB1c2VySUQpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRUeXBlXCIsIHR5cGUpO1xuXHRcdGJvZHkuYXBwZW5kKFwiZG9jdW1lbnRJbWFnZVwiLCBmaWxlKTtcblxuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvZG9jdW1lbnRzXCIsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHRcdGFkZGxIZWFkZXJzOiB7XG5cdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuXHRcdFx0fSxcblx0XHRcdGJvZHksXG5cdFx0fSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0dXBsb2FkRG9jdW1lbnQoZmlsZTogRmlsZSwgdHlwZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIudXBsb2FkRG9jdW1lbnQodGhpcy51c2VySUQsIGZpbGUsIHR5cGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0Z2V0Q3JlZGl0Q2FyZHMoKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XG5cdFx0cmV0dXJuIFVzZXIuZ2V0Q3JlZGl0Q2FyZHModGhpcy51c2VySUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyBnZXRDcmVkaXRDYXJkcyh1c2VySUQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8T2JqZWN0Pj4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcblx0XHRcdGVuZHBvaW50OiBgL3VzZXJzLyR7dXNlcklEfS9jcmVkaXQtY2FyZHNgLFxuXHRcdFx0c2Vzc2lvbktleTogU2Vzc2lvbnMuZ2V0KHVzZXJJRCksXG5cdFx0fSkudGhlbigoeyBib2R5IH0pID0+IGJvZHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBpbnN0YW5jZVxuXHQgKi9cblx0YWRkQ3JlZGl0Q2FyZChjYXJkVG9rZW46IHN0cmluZyk6IFByb21pc2U8T2JqZWN0PiB7XG5cdFx0cmV0dXJuIFVzZXIuYWRkQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZFRva2VuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgYWRkQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPE9iamVjdD4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzYCxcblx0XHRcdHNlc3Npb25LZXk6IFNlc3Npb25zLmdldCh1c2VySUQpLFxuXHRcdFx0Ym9keTogeyBjYXJkVG9rZW4gfSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keSk7XG5cdH1cblxuXHQvKipcblx0ICogQGluc3RhbmNlXG5cdCAqL1xuXHRyZW1vdmVDcmVkaXRDYXJkKGNhcmRJRDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0cmV0dXJuIFVzZXIucmVtb3ZlQ3JlZGl0Q2FyZCh0aGlzLnVzZXJJRCwgY2FyZElEKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAc3RhdGljXG5cdCAqL1xuXHRzdGF0aWMgcmVtb3ZlQ3JlZGl0Q2FyZCh1c2VySUQ6IHN0cmluZywgY2FyZElEOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiREVMRVRFXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy8ke3VzZXJJRH0vY3JlZGl0LWNhcmRzLyR7Y2FyZElEfWAsXG5cdFx0XHRzZXNzaW9uS2V5OiBTZXNzaW9ucy5nZXQodXNlcklEKSxcblx0XHR9KS50aGVuKCgpID0+IHVuZGVmaW5lZCk7XG5cdH1cblxuXHQvKipcblx0ICogQHN0YXRpY1xuXHQgKi9cblx0c3RhdGljIGZvcmdvdFBhc3N3b3JkKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuXHRcdHJldHVybiByZXF1ZXN0KHtcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsXG5cdFx0XHRlbmRwb2ludDogXCIvdXNlcnMvcGFzc3dvcmRzXCIsXG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdHVzZXJuYW1lLFxuXHRcdFx0fSxcblx0XHR9KS50aGVuKCh7IGJvZHkgfSkgPT4gYm9keS5wYXNzd29yZFJlc2V0SUQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBzdGF0aWNcblx0ICovXG5cdHN0YXRpYyByZXNldFBhc3N3b3JkKHBhc3N3b3JkUmVzZXRJRDogc3RyaW5nLCBjb2RlOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHRtZXRob2Q6IFwiUFVUXCIsXG5cdFx0XHRlbmRwb2ludDogYC91c2Vycy9wYXNzd29yZHMvJHtwYXNzd29yZFJlc2V0SUR9YCxcblx0XHRcdGJvZHk6IHtcblx0XHRcdFx0Y29kZSxcblx0XHRcdFx0cGFzc3dvcmRSZXNldElELFxuXHRcdFx0XHRwYXNzd29yZCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==