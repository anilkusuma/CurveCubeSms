(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/create/create.module": [
		"./ui/app/modules/create/create.module.ts",
		"app-modules-create-create-module"
	],
	"app/modules/home/home.module": [
		"./ui/app/modules/home/home.module.ts",
		"app-modules-home-home-module"
	],
	"app/modules/login/login.module": [
		"./ui/app/modules/login/login.module.ts",
		"app-modules-login-login-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./ui/app/config/endpoint-configurations.json":
/*!****************************************************!*\
  !*** ./ui/app/config/endpoint-configurations.json ***!
  \****************************************************/
/*! exports provided: development, production, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"development\":{\"COMMONS_URL\":\"http://0.0.0.0:7102/\",\"PACKET_RECEIVER_URL\":\"http://0.0.0.0:7101/\",\"VTS_URL\":\"http://0.0.0.0:7103/\",\"SMS_URL\":\"http://0.0.0.0:7104/\"},\"production\":{\"COMMONS_URL\":\"http://commons.curvecube.in/\",\"PACKET_RECEIVER_URL\":\"http://packet.curvecube.in/\",\"VTS_URL\":\"http://vts.curvecube.com\",\"SMS_URL\":\"http://sms.curvecube.com\"}}");

/***/ }),

/***/ "./ui/app/core/api/api.service.ts":
/*!****************************************!*\
  !*** ./ui/app/core/api/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/services/endpoint-configurations.service */ "./ui/app/core/services/endpoint-configurations.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_error_handling_service_error_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/error-handling/service-error.model */ "./ui/app/core/error-handling/service-error.model.ts");








let ApiService = class ApiService {
    constructor(endpointConfigurationsService, httpClient) {
        this.httpPostOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.endpointConfigurationsService = endpointConfigurationsService;
        this.http = httpClient;
    }
    getFromCommonService(url) {
        console.log('Calling CurveCubeCommons service to get data');
        return this.http.get(this._getCommonsApiBaseURL() + 'api/' + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((data) => {
            if (!(data.responseStatus && data.responseData)) {
                throw new Error(this._getErrorDetails(data));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data.responseData;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this._handleError));
    }
    _getCommonsApiBaseURL() {
        return this.endpointConfigurationsService.getCommonsUrl('development');
    }
    _getErrorDetails(error) {
        const errorMessage = {};
        errorMessage.message = error.errorMessage;
        errorMessage.errorCode = error.errorCode;
        return JSON.stringify(errorMessage);
    }
    _handleError(error) {
        let errorMessage = {};
        if (error.error instanceof ErrorEvent) {
            errorMessage.message = error.error.message;
        }
        else if (error instanceof Error) {
            errorMessage = JSON.parse(error.message);
        }
        else {
            errorMessage.message = error.errorMessage;
            errorMessage.errorCode = error.errorCode;
        }
        const serviceError = new _app_core_error_handling_service_error_model__WEBPACK_IMPORTED_MODULE_6__["ServiceError"](errorMessage.errorCode, errorMessage.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(serviceError);
    }
};
ApiService.ctorParameters = () => [
    { type: app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_3__["EndpointConfigurationsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_3__["EndpointConfigurationsService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./ui/app/core/authentication/authentication.service.ts":
/*!**************************************************************!*\
  !*** ./ui/app/core/authentication/authentication.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/api/api.service */ "./ui/app/core/api/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var app_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/user.model */ "./ui/app/models/user.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/global/shared-data-handler.service */ "./ui/app/core/global/shared-data-handler.service.ts");
var AuthenticationService_1;








let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(apiService, cookieService, sharedDataHandlerService) {
        this.apiService = apiService;
        this.cookieService = cookieService;
        this.sharedDataHandler = sharedDataHandlerService;
    }
    static GET_VALIDATOR_COOKIE_KEY() { return 'validator'; }
    static GET_SELECTOR_COOKIE_KEY() { return 'selector'; }
    static GET_USER_ID_COOKIE_KEY() { return 'userId'; }
    getLoggedInUser() {
        if (this.isUserLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.sharedDataHandler.getLoggedInUser());
        }
        const userId = this.cookieService
            .get(AuthenticationService_1.GET_USER_ID_COOKIE_KEY());
        const selector = this.cookieService
            .get(AuthenticationService_1.GET_SELECTOR_COOKIE_KEY());
        const validator = this.cookieService
            .get(AuthenticationService_1.GET_VALIDATOR_COOKIE_KEY());
        console.log('Call for getLoggedInUser received');
        let validateUrl = 'Logins/Validate?';
        validateUrl = validateUrl.concat('userId=', userId, '&selector=', selector, '&validator=', validator);
        return this.apiService.getFromCommonService(validateUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(data => {
            return app_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"].create(data);
        }));
    }
    isUserLoggedIn() {
        if (this.sharedDataHandler.getLoggedInUser()) {
            return true;
        }
    }
    loginUserUsingCookies() {
        return this.getLoggedInUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => {
            console.log('Logged in user');
            console.log(user);
            this.sharedDataHandler.setLoggedInUser(user);
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            this.sharedDataHandler.setLoggedInUser(null);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    loginUser(userName, password, rememberMe) {
        let remember = 'N';
        let expiryDate = null;
        if (rememberMe) {
            remember = 'Y';
            expiryDate = new Date('2030');
        }
        const loginUrl = '/Logins/login?userName=' + userName
            + '&password=' + password + '&rememberMe=' + remember;
        return this.apiService.getFromCommonService(loginUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => {
            console.log(response);
            this.cookieService.set(AuthenticationService_1.GET_SELECTOR_COOKIE_KEY(), response.selector, expiryDate, '/');
            this.cookieService.set(AuthenticationService_1.GET_VALIDATOR_COOKIE_KEY(), response.validator, expiryDate, '/');
            this.cookieService.set(AuthenticationService_1.GET_USER_ID_COOKIE_KEY(), response.userId, expiryDate, '/');
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            this.clearCookies();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    logoutUser() {
        this.clearCookies();
    }
    clearCookies() {
        //this.cookieService.deleteAll('/');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: app_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataHandlerService"] }
];
AuthenticationService = AuthenticationService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [app_core_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_7__["SharedDataHandlerService"]])
], AuthenticationService);



/***/ }),

/***/ "./ui/app/core/core.module.ts":
/*!************************************!*\
  !*** ./ui/app/core/core.module.ts ***!
  \************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/services/endpoint-configurations.service */ "./ui/app/core/services/endpoint-configurations.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var app_core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/api/api.service */ "./ui/app/core/api/api.service.ts");
/* harmony import */ var _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/initialization/initialization.service */ "./ui/app/core/initialization/initialization.service.ts");
/* harmony import */ var app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/authentication/authentication.service */ "./ui/app/core/authentication/authentication.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/routes/route-handler.service */ "./ui/app/core/routes/route-handler.service.ts");









let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_2__["EndpointConfigurationsService"],
            app_core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_5__["InitializationService"],
            _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_8__["RouteHandler"]
        ],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]
    })
], CoreModule);



/***/ }),

/***/ "./ui/app/core/error-handling/error-code.model.ts":
/*!********************************************************!*\
  !*** ./ui/app/core/error-handling/error-code.model.ts ***!
  \********************************************************/
/*! exports provided: ErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return ErrorCode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AUTH_FAILURE"] = "AUTH_FAILURE";
    ErrorCode["NO_RESULT"] = "NO_RESULT";
})(ErrorCode || (ErrorCode = {}));


/***/ }),

/***/ "./ui/app/core/error-handling/service-error.model.ts":
/*!***********************************************************!*\
  !*** ./ui/app/core/error-handling/service-error.model.ts ***!
  \***********************************************************/
/*! exports provided: ServiceError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceError", function() { return ServiceError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ServiceError {
    constructor(errorCode, errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}


/***/ }),

/***/ "./ui/app/core/global/shared-data-handler.service.ts":
/*!***********************************************************!*\
  !*** ./ui/app/core/global/shared-data-handler.service.ts ***!
  \***********************************************************/
/*! exports provided: SharedDataHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataHandlerService", function() { return SharedDataHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SharedDataHandlerService = class SharedDataHandlerService {
    constructor() { }
    setLoggedInUser(user) {
        this.loggedInUser = user;
    }
    getLoggedInUser() {
        return this.loggedInUser;
    }
};
SharedDataHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SharedDataHandlerService);



/***/ }),

/***/ "./ui/app/core/global/shared-message.service.ts":
/*!******************************************************!*\
  !*** ./ui/app/core/global/shared-message.service.ts ***!
  \******************************************************/
/*! exports provided: SharedMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMessageService", function() { return SharedMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SharedMessageService = class SharedMessageService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    broadcast(type, payload) {
        this.handler.next({ type, payload });
    }
    subscribe(type, callback) {
        return this.handler.subscribe((message) => {
            if (message.type === type) {
                callback(message.payload);
            }
        });
    }
};
SharedMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SharedMessageService);



/***/ }),

/***/ "./ui/app/core/guards/auth.guard.ts":
/*!******************************************!*\
  !*** ./ui/app/core/guards/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthGuard = class AuthGuard {
    canActivate(next, state) {
        console.log('AuthGuard#canActivate called');
        return true;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./ui/app/core/index.ts":
/*!******************************!*\
  !*** ./ui/app/core/index.ts ***!
  \******************************/
/*! exports provided: ApiService, ErrorCode, ServiceError, SharedDataHandlerService, SharedMessageService, AuthGuard, RouteHandler, EndpointConfigurationsService, AuthenticationService, InitializationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_core_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/api/api.service */ "./ui/app/core/api/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _app_core_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "./ui/app/core/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });

/* harmony import */ var _app_core_error_handling_error_code_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/error-handling/error-code.model */ "./ui/app/core/error-handling/error-code.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return _app_core_error_handling_error_code_model__WEBPACK_IMPORTED_MODULE_3__["ErrorCode"]; });

/* harmony import */ var _app_core_error_handling_service_error_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/error-handling/service-error.model */ "./ui/app/core/error-handling/service-error.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceError", function() { return _app_core_error_handling_service_error_model__WEBPACK_IMPORTED_MODULE_4__["ServiceError"]; });

/* harmony import */ var _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/global/shared-data-handler.service */ "./ui/app/core/global/shared-data-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedDataHandlerService", function() { return _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataHandlerService"]; });

/* harmony import */ var _app_core_global_shared_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/global/shared-message.service */ "./ui/app/core/global/shared-message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedMessageService", function() { return _app_core_global_shared_message_service__WEBPACK_IMPORTED_MODULE_6__["SharedMessageService"]; });

/* harmony import */ var _app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/guards/auth.guard */ "./ui/app/core/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]; });

/* harmony import */ var _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/initialization/initialization.service */ "./ui/app/core/initialization/initialization.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializationService", function() { return _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_8__["InitializationService"]; });

/* harmony import */ var _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/routes/route-handler.service */ "./ui/app/core/routes/route-handler.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_9__["RouteHandler"]; });

/* harmony import */ var _app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/core/services/endpoint-configurations.service */ "./ui/app/core/services/endpoint-configurations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EndpointConfigurationsService", function() { return _app_core_services_endpoint_configurations_service__WEBPACK_IMPORTED_MODULE_10__["EndpointConfigurationsService"]; });














/***/ }),

/***/ "./ui/app/core/initialization/initialization.service.ts":
/*!**************************************************************!*\
  !*** ./ui/app/core/initialization/initialization.service.ts ***!
  \**************************************************************/
/*! exports provided: InitializationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializationService", function() { return InitializationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "./ui/app/core/authentication/authentication.service.ts");
/* harmony import */ var _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/routes/route-handler.service */ "./ui/app/core/routes/route-handler.service.ts");




let InitializationService = class InitializationService {
    constructor(auth, routeHander) {
        this.authService = auth;
        this.routeHandler = routeHander;
    }
    init() {
        this.authService.loginUserUsingCookies().subscribe((status) => {
            this.routeHandler.loadRoutes(status);
        });
    }
};
InitializationService.ctorParameters = () => [
    { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__["RouteHandler"] }
];
InitializationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__["RouteHandler"]])
], InitializationService);



/***/ }),

/***/ "./ui/app/core/routes/route-handler.service.ts":
/*!*****************************************************!*\
  !*** ./ui/app/core/routes/route-handler.service.ts ***!
  \*****************************************************/
/*! exports provided: RouteHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return RouteHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/global/shared-data-handler.service */ "./ui/app/core/global/shared-data-handler.service.ts");




let RouteHandler = class RouteHandler {
    constructor(router, sharedDataHandler) {
        this.homeRoute = [
            {
                path: '',
                loadChildren: 'app/modules/home/home.module#HomeModule',
            },
            {
                path: '**',
                redirectTo: ''
            }
        ];
        this.loginRoute = [
            {
                path: 'login',
                loadChildren: 'app/modules/login/login.module#LoginModule'
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ];
        this.router = router;
        this.sharedDataHandler = sharedDataHandler;
    }
    loadRoutes(status) {
        this.router.onSameUrlNavigation = 'reload';
        if (!status) {
            this.router.resetConfig(this.loginRoute);
            this.redirectToRoute('/login');
        }
        else {
            this.router.resetConfig(this.homeRoute);
            this.redirectToRoute(this.router.url);
        }
    }
    redirectToRoute(route, options) {
        this.router.navigateByUrl(route);
    }
};
RouteHandler.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataHandlerService"] }
];
RouteHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataHandlerService"]])
], RouteHandler);



/***/ }),

/***/ "./ui/app/core/services/endpoint-configurations.service.ts":
/*!*****************************************************************!*\
  !*** ./ui/app/core/services/endpoint-configurations.service.ts ***!
  \*****************************************************************/
/*! exports provided: EndpointConfigurationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointConfigurationsService", function() { return EndpointConfigurationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_config_endpoint_configurations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/endpoint-configurations.json */ "./ui/app/config/endpoint-configurations.json");
var app_config_endpoint_configurations_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! app/config/endpoint-configurations.json */ "./ui/app/config/endpoint-configurations.json", 1);



let EndpointConfigurationsService = class EndpointConfigurationsService {
    constructor() {
        this.endpointConfigurations = app_config_endpoint_configurations_json__WEBPACK_IMPORTED_MODULE_2___namespace;
    }
    getCommonsUrl(env) {
        return this.endpointConfigurations.default[env].COMMONS_URL;
    }
};
EndpointConfigurationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EndpointConfigurationsService);



/***/ }),

/***/ "./ui/app/models/account-status.model.ts":
/*!***********************************************!*\
  !*** ./ui/app/models/account-status.model.ts ***!
  \***********************************************/
/*! exports provided: AccountStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStatus", function() { return AccountStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["DEACTIVE"] = "DEACTIVE";
    AccountStatus["DEMO"] = "DEMO";
    AccountStatus["PAYMENT_DUE"] = "PAYMENT_DUE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
    AccountStatus["LOCKED"] = "LOCKED";
    AccountStatus["ON_HOLD"] = "ON_HOLD";
})(AccountStatus || (AccountStatus = {}));


/***/ }),

/***/ "./ui/app/models/account-type.model.ts":
/*!*********************************************!*\
  !*** ./ui/app/models/account-type.model.ts ***!
  \*********************************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AccountType;
(function (AccountType) {
    AccountType["CURVECUBE"] = "CURVECUBE";
    AccountType["PAGON"] = "PAGON";
    AccountType["DEALER"] = "DEALER";
    AccountType["VTS_DEALER"] = "VTS_DEALER";
    AccountType["SBT_DEALER"] = "SBT_DEALER";
    AccountType["TRANSPORT_COMPANY"] = "TRANSPORT_COMPANY";
    AccountType["SCHOOL_GROUP"] = "SCHOOL_GROUP";
    AccountType["SCHOOL_BRANCH"] = "SCHOOL_BRANCH";
    AccountType["SCHOOL"] = "SCHOOL";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./ui/app/models/account.model.ts":
/*!****************************************!*\
  !*** ./ui/app/models/account.model.ts ***!
  \****************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _approot_models_account_type_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @approot/models/account-type.model */ "./ui/app/models/account-type.model.ts");
/* harmony import */ var _approot_models_account_status_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @approot/models/account-status.model */ "./ui/app/models/account-status.model.ts");



class Account {
    constructor() { }
    static create(account) {
        console.log(account);
        const newAccount = new Account();
        newAccount.accountId = account.id;
        newAccount.name = account.name;
        newAccount.type = _approot_models_account_type_model__WEBPACK_IMPORTED_MODULE_1__["AccountType"][account.type];
        newAccount.displayName = account.displayName;
        newAccount.address = account.address;
        newAccount.emailId = account.emailId;
        newAccount.mobileNumber = account.mobileNumber;
        newAccount.status = _approot_models_account_status_model__WEBPACK_IMPORTED_MODULE_2__["AccountStatus"][account.status];
        newAccount.customization = account.customization;
        newAccount.parentAccountId = account.parentAccountId;
        return newAccount;
    }
}


/***/ }),

/***/ "./ui/app/models/user-status.model.ts":
/*!********************************************!*\
  !*** ./ui/app/models/user-status.model.ts ***!
  \********************************************/
/*! exports provided: UserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
    UserStatus["DELETED"] = "DELETED";
    UserStatus["LOCKED"] = "LOCKED";
})(UserStatus || (UserStatus = {}));


/***/ }),

/***/ "./ui/app/models/user-type.model.ts":
/*!******************************************!*\
  !*** ./ui/app/models/user-type.model.ts ***!
  \******************************************/
/*! exports provided: UserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserType", function() { return UserType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserType;
(function (UserType) {
    UserType["STUDENT"] = "STUDENT";
    UserType["ADMIN"] = "ADMIN";
    UserType["TRANSPORT_ADMIN"] = "TRANSPORT_ADMIN";
    UserType["TEACHER"] = "TEACHER";
    UserType["PARENT"] = "PARENT";
    UserType["VTS_USER"] = "VTS_USER";
})(UserType || (UserType = {}));


/***/ }),

/***/ "./ui/app/models/user.model.ts":
/*!*************************************!*\
  !*** ./ui/app/models/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var app_models_user_status_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/user-status.model */ "./ui/app/models/user-status.model.ts");
/* harmony import */ var app_models_user_type_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/user-type.model */ "./ui/app/models/user-type.model.ts");
/* harmony import */ var _approot_models_account_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @approot/models/account.model */ "./ui/app/models/account.model.ts");




class User {
    constructor() { }
    static create(user) {
        const newUser = new User();
        newUser.userId = user.id;
        newUser.accountId = user.accountId;
        newUser.type = app_models_user_type_model__WEBPACK_IMPORTED_MODULE_2__["UserType"][user.type];
        newUser.firstName = user.firstName;
        newUser.lastName = user.lastName;
        newUser.address = user.address;
        newUser.emailId = user.emailId;
        newUser.mobileNumber = user.mobileNumber;
        newUser.sex = user.sex;
        newUser.status = app_models_user_status_model__WEBPACK_IMPORTED_MODULE_1__["UserStatus"][user.status];
        newUser.firstTimeLogin = user.firstTimeLogin;
        newUser.forceResetPassword = user.forceResetPassword;
        if (user.account) {
            newUser.userAccount = _approot_models_account_model__WEBPACK_IMPORTED_MODULE_3__["Account"].create(user.account);
        }
        return newUser;
    }
}


/***/ }),

/***/ "./ui/app/modules/root/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./ui/app/modules/root/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_shared_components_preloader_root_preloader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/preloader/root-preloader.component */ "./ui/app/shared/components/preloader/root-preloader.component.ts");




const routes = [
    {
        path: '**',
        component: _app_shared_components_preloader_root_preloader_component__WEBPACK_IMPORTED_MODULE_3__["RootPreloaderComponent"]
    },
    {
        path: 'home',
        loadChildren: 'app/modules/home/home.module#HomeModule',
    },
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module#LoginModule'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./ui/app/modules/root/app.module.ts":
/*!*******************************************!*\
  !*** ./ui/app/modules/root/app.module.ts ***!
  \*******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./ui/app/modules/root/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app.component */ "./ui/app/modules/root/components/app.component.ts");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/core.module */ "./ui/app/core/core.module.ts");
/* harmony import */ var _app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/global/shared-data-handler.service */ "./ui/app/core/global/shared-data-handler.service.ts");
/* harmony import */ var _approot_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @approot/core */ "./ui/app/core/index.ts");
/* harmony import */ var _approot_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @approot/shared */ "./ui/app/shared/index.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _app_core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _approot_shared__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
        ],
        providers: [_app_core_global_shared_data_handler_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataHandlerService"], _approot_core__WEBPACK_IMPORTED_MODULE_7__["SharedMessageService"]],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./ui/app/modules/root/components/app.component.ts":
/*!*********************************************************!*\
  !*** ./ui/app/modules/root/components/app.component.ts ***!
  \*********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/initialization/initialization.service */ "./ui/app/core/initialization/initialization.service.ts");



let AppComponent = class AppComponent {
    constructor(initializationService) {
        this.initializationService = initializationService;
    }
    ngOnInit() {
        this.initializationService.init();
    }
};
AppComponent.ctorParameters = () => [
    { type: _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_2__["InitializationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet> </router-outlet>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_2__["InitializationService"]])
], AppComponent);



/***/ }),

/***/ "./ui/app/shared/components/input/input.model.ts":
/*!*******************************************************!*\
  !*** ./ui/app/shared/components/input/input.model.ts ***!
  \*******************************************************/
/*! exports provided: InputModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModel", function() { return InputModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class InputModel {
    constructor(id, label, type, classes, validate) {
        this.type = 'text';
        this.valueValid = false;
        this.showError = false;
        this.id = id;
        this.label = label;
        this.name = id;
        if (type) {
            this.type = type;
        }
        this.classes = [id];
        if (classes) {
            this.classes.concat(classes);
        }
        this.value = '';
        this.validate = validate;
    }
    validateInput() {
        const defaultErrorString = 'Please enter a value';
        if (!this.value.replace(/\s/g, '').length) {
            this._setAsInValid(defaultErrorString);
        }
        else {
            if (this.validate) {
                const errorString = this.validate(this.value);
                if (errorString) {
                    this._setAsInValid(errorString);
                    return false;
                }
            }
            this._setAsValid();
            return true;
        }
    }
    _setAsInValid(errorString) {
        this.errorString = errorString;
        this.valueValid = false;
        this.showError = true;
    }
    _setAsValid() {
        this.errorString = '';
        this.valueValid = true;
        this.showError = false;
    }
}


/***/ }),

/***/ "./ui/app/shared/components/input/material-input.component.css":
/*!*********************************************************************!*\
  !*** ./ui/app/shared/components/input/material-input.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".material-input-field-root {\n    margin-bottom: 20px;\n}\n.material-input-field {\n    margin-top: 20px;\n    margin-bottom: 0px !important;\n}\n.material-input-field-root {\n    margin-bottom: 20px;\n}\n.material-input-field-root input {\n    margin : 0px !important;\n    box-shadow: none !important;\n}\n.material-input-field-root .error-container {\n    font-size: smaller;\n    color: #ce0000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9tYXRlcmlhbC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InVpL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9tYXRlcmlhbC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyaWFsLWlucHV0LWZpZWxkLXJvb3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubWF0ZXJpYWwtaW5wdXQtZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWF0ZXJpYWwtaW5wdXQtZmllbGQtcm9vdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYXRlcmlhbC1pbnB1dC1maWVsZC1yb290IGlucHV0IHtcbiAgICBtYXJnaW4gOiAwcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWF0ZXJpYWwtaW5wdXQtZmllbGQtcm9vdCAuZXJyb3ItY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gICAgY29sb3I6ICNjZTAwMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./ui/app/shared/components/input/material-input.component.ts":
/*!********************************************************************!*\
  !*** ./ui/app/shared/components/input/material-input.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialInputComponent", function() { return MaterialInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_components_input_input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/input/input.model */ "./ui/app/shared/components/input/input.model.ts");



let MaterialInputComponent = class MaterialInputComponent {
    constructor() {
        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setValue(value) {
        this.input.value = value;
        this.inputChanged.emit(this.input);
        this.input.validateInput();
        console.log('New value is ' + this.input.value);
    }
    inputFocused() {
        this.input.showError = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_shared_components_input_input_model__WEBPACK_IMPORTED_MODULE_2__["InputModel"])
], MaterialInputComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MaterialInputComponent.prototype, "inputChanged", void 0);
MaterialInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material-input-field',
        template: `<div class="material-input-field-root">
            <div class="material-input-field input-field">
                <input #inputValue type="{{input.type}}" id="{{input.id}}" name="{{input.name}}" (blur)="setValue(inputValue.value)"
                       (focus)="inputFocused()">
                <label for="{{input.name}}">{{input.label}}</label>
            </div>
            <div *ngIf="input.showError" class="material-input-field-validation-error error{{input.name}} error{{input.id}}">
                <div id="{{input.id}}-error" class="error-container">
                    {{ input.errorString }}
                </div>
            </div>
        </div>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./material-input.component.css */ "./ui/app/shared/components/input/material-input.component.css")).default]
    })
], MaterialInputComponent);



/***/ }),

/***/ "./ui/app/shared/components/preloader/root-preloader.component.css":
/*!*************************************************************************!*\
  !*** ./ui/app/shared/components/preloader/root-preloader.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#RootPreloader {\n    display: flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items: center;\n    width: 100%;\n    height:100vh;\n}\n@keyframes preloader-interwind {\n    0%, 100% {\n        -webkit-animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n                animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n    }\n    50% {\n        -webkit-animation-timing-function: cubic-bezier(0, 0.2, 1, 0.8);\n                animation-timing-function: cubic-bezier(0, 0.2, 1, 0.8);\n    }\n    0% {\n        transform: rotate(0deg) translate(0, -20px) scale(0);\n    }\n    50% {\n        transform: rotate(180deg) translate(0, -20px) scale(1);\n    }\n    100% {\n        transform: rotate(360deg) translate(0, -20px) scale(0);\n    }\n}\n@-webkit-keyframes preloader-interwind {\n    0%, 100% {\n        -webkit-animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n                animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);\n    }\n    50% {\n        -webkit-animation-timing-function: cubic-bezier(0, 0.2, 1, 0.8);\n                animation-timing-function: cubic-bezier(0, 0.2, 1, 0.8);\n    }\n    0% {\n        transform: rotate(0deg) translate(0, -20px) scale(0);\n    }\n    50% {\n        transform: rotate(180deg) translate(0, -20px) scale(1);\n    }\n    100% {\n        transform: rotate(360deg) translate(0, -20px) scale(0);\n    }\n}\ndiv.root-preloader-interwind div {\n    position: absolute;\n    -webkit-animation: preloader-interwind 1.5s linear infinite;\n    animation: preloader-interwind 1.5s linear infinite;\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n    background: #2341d0;\n}\ndiv.root-preloader-interwind div:last-child {\n    -webkit-animation-delay: -0.75s;\n    animation-delay: -0.75s;\n    background: #ff499d;\n}\n.root-preloader-interwind {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100px !important;\n    height: 100px !important;\n    transform: translate(-100px, -100px) scale(1) translate(100px, 100px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmVsb2FkZXIvcm9vdC1wcmVsb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSwrREFBdUQ7Z0JBQXZELHVEQUF1RDtJQUMzRDtJQUNBO1FBQ0ksK0RBQXVEO2dCQUF2RCx1REFBdUQ7SUFDM0Q7SUFDQTtRQUVJLG9EQUFvRDtJQUN4RDtJQUNBO1FBRUksc0RBQXNEO0lBQzFEO0lBQ0E7UUFFSSxzREFBc0Q7SUFDMUQ7QUFDSjtBQUNBO0lBQ0k7UUFDSSwrREFBdUQ7Z0JBQXZELHVEQUF1RDtJQUMzRDtJQUNBO1FBQ0ksK0RBQXVEO2dCQUF2RCx1REFBdUQ7SUFDM0Q7SUFDQTtRQUVJLG9EQUFvRDtJQUN4RDtJQUNBO1FBRUksc0RBQXNEO0lBQzFEO0lBQ0E7UUFFSSxzREFBc0Q7SUFDMUQ7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFDbkQsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUV4QixxRUFBcUU7QUFDekUiLCJmaWxlIjoidWkvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByZWxvYWRlci9yb290LXByZWxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1Jvb3RQcmVsb2FkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5Aa2V5ZnJhbWVzIHByZWxvYWRlci1pbnRlcndpbmQge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMCwgMC44LCAxKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAuMiwgMSwgMC44KTtcbiAgICB9XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwLCAtMjBweCkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgwLCAtMjBweCkgc2NhbGUoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoMCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgwLCAtMjBweCkgc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlKDAsIC0yMHB4KSBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB0cmFuc2xhdGUoMCwgLTIwcHgpIHNjYWxlKDApO1xuICAgIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBwcmVsb2FkZXItaW50ZXJ3aW5kIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIsIDAsIDAuOCwgMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLjIsIDEsIDAuOCk7XG4gICAgfVxuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMCwgLTIwcHgpIHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoMCwgLTIwcHgpIHNjYWxlKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKDAsIC0yMHB4KSBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoMCwgLTIwcHgpIHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHRyYW5zbGF0ZSgwLCAtMjBweCkgc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgdHJhbnNsYXRlKDAsIC0yMHB4KSBzY2FsZSgwKTtcbiAgICB9XG59XG5kaXYucm9vdC1wcmVsb2FkZXItaW50ZXJ3aW5kIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwcmVsb2FkZXItaW50ZXJ3aW5kIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcHJlbG9hZGVyLWludGVyd2luZCAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMyMzQxZDA7XG59XG5kaXYucm9vdC1wcmVsb2FkZXItaW50ZXJ3aW5kIGRpdjpsYXN0LWNoaWxkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNzVzO1xuICAgIGJhY2tncm91bmQ6ICNmZjQ5OWQ7XG59XG4ucm9vdC1wcmVsb2FkZXItaW50ZXJ3aW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LCAtMTAwcHgpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxMDBweCwgMTAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDBweCwgLTEwMHB4KSBzY2FsZSgxKSB0cmFuc2xhdGUoMTAwcHgsIDEwMHB4KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./ui/app/shared/components/preloader/root-preloader.component.ts":
/*!************************************************************************!*\
  !*** ./ui/app/shared/components/preloader/root-preloader.component.ts ***!
  \************************************************************************/
/*! exports provided: RootPreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootPreloaderComponent", function() { return RootPreloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RootPreloaderComponent = class RootPreloaderComponent {
};
RootPreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root-preloader',
        template: `<div class="root-preloader-div" id="RootPreloader" >
            <div class="root-preloader-interwind">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./root-preloader.component.css */ "./ui/app/shared/components/preloader/root-preloader.component.css")).default]
    })
], RootPreloaderComponent);



/***/ }),

/***/ "./ui/app/shared/index.ts":
/*!********************************!*\
  !*** ./ui/app/shared/index.ts ***!
  \********************************/
/*! exports provided: MaterialInputComponent, RootPreloaderComponent, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _approot_shared_components_input_material_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @approot/shared/components/input/material-input.component */ "./ui/app/shared/components/input/material-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialInputComponent", function() { return _approot_shared_components_input_material_input_component__WEBPACK_IMPORTED_MODULE_1__["MaterialInputComponent"]; });

/* harmony import */ var _approot_shared_components_preloader_root_preloader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @approot/shared/components/preloader/root-preloader.component */ "./ui/app/shared/components/preloader/root-preloader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootPreloaderComponent", function() { return _approot_shared_components_preloader_root_preloader_component__WEBPACK_IMPORTED_MODULE_2__["RootPreloaderComponent"]; });

/* harmony import */ var _approot_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @approot/shared/shared.module */ "./ui/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _approot_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]; });







/***/ }),

/***/ "./ui/app/shared/shared.module.ts":
/*!****************************************!*\
  !*** ./ui/app/shared/shared.module.ts ***!
  \****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _approot_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @approot/shared */ "./ui/app/shared/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _approot_shared__WEBPACK_IMPORTED_MODULE_2__["RootPreloaderComponent"],
            _approot_shared__WEBPACK_IMPORTED_MODULE_2__["MaterialInputComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
        exports: [_approot_shared__WEBPACK_IMPORTED_MODULE_2__["RootPreloaderComponent"], _approot_shared__WEBPACK_IMPORTED_MODULE_2__["MaterialInputComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./ui/environments/environment.ts":
/*!****************************************!*\
  !*** ./ui/environments/environment.ts ***!
  \****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ui/main.ts":
/*!********************!*\
  !*** ./ui/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_modules_root_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/modules/root/app.module */ "./ui/app/modules/root/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./ui/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_modules_root_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./ui/main.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akkusuma/Documents/CurveCube/CurveCubeProjects/CurveCubeSms/ui/main.ts */"./ui/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map