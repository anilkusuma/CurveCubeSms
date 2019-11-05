(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/login/pages/login.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/login/pages/login.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"LoginPage\">\n    <section class=\"login-section\">\n        <div class=\"card login-div\">\n            <div class=\"pagon-logo login-logo\">\n                <img src=\"./assets/images/pagon-logo-title.png\" alt=\"Pagon logo\">\n            </div>\n            <div class=\"login-input-divs-container\">\n                <app-material-input-field [(input)]=\"userNameInput\" > </app-material-input-field>\n\n                <app-material-input-field [(input)]=\"passwordInput\" > </app-material-input-field>\n\n                <div class=\"remember-me-div\">\n                    <label for=\"rememberMe\">\n                        <input type=\"checkbox\" class=\"filled-in\"  name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\"/>\n                        <span>Remember me</span>\n                    </label>\n                </div>\n\n                <div class=\"login-button-div\">\n                    <button class=\"btn login-button\" type=\"button\" (click)=\"login()\">Login</button>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n");

/***/ }),

/***/ "./ui/app/modules/login/login.module.ts":
/*!**********************************************!*\
  !*** ./ui/app/modules/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login.page */ "./ui/app/modules/login/pages/login.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _approot_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @approot/shared */ "./ui/app/shared/index.ts");







const routes = [
    {
        path: '',
        component: _pages_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        pathMatch: 'full'
    }
];
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_login_page__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _approot_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
    })
], LoginModule);



/***/ }),

/***/ "./ui/app/modules/login/pages/login.page.css":
/*!***************************************************!*\
  !*** ./ui/app/modules/login/pages/login.page.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#LoginPage {\n    display: flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items: center;\n    width: 100%;\n    height:100vh;\n}\n.login-section {\n    display: flex;\n    min-width: 50%;\n}\n.login-logo {\n    background-color: #58d6d1;\n    border-top-left-radius: 30px;\n    border-top-right-radius: 30px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.login-logo img {\n    height: 100px;\n    width: 300px;\n}\n.login-div {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    border-radius: 30px !important;\n    background-color: #fcfcfc !important;\n}\n.remember-me-div {\n    margin-bottom: 50px;\n}\n.login-input-divs-container {\n    padding: 30px 30px;\n}\n.help-block{\n    margin : 0px;\n}\n.login-button-div {\n    text-align: right;\n}\n.login-button {\n    font-weight: 500;\n    background-color: #fd3891 !important;\n}\n.login-button:hover{\n    background-color: #ff0676 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9tb2R1bGVzL2xvZ2luL3BhZ2VzL2xvZ2luLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoidWkvYXBwL21vZHVsZXMvbG9naW4vcGFnZXMvbG9naW4ucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNMb2dpblBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG4ubG9naW4tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDUwJTtcbn1cbi5sb2dpbi1sb2dvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThkNmQxO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbi5sb2dpbi1kaXYge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYyAhaW1wb3J0YW50O1xufVxuLnJlbWVtYmVyLW1lLWRpdiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5sb2dpbi1pbnB1dC1kaXZzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xufVxuLmhlbHAtYmxvY2t7XG4gICAgbWFyZ2luIDogMHB4O1xufVxuLmxvZ2luLWJ1dHRvbi1kaXYge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmxvZ2luLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQzODkxICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjA2NzYgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./ui/app/modules/login/pages/login.page.ts":
/*!**************************************************!*\
  !*** ./ui/app/modules/login/pages/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_components_input_input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/input/input.model */ "./ui/app/shared/components/input/input.model.ts");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "./ui/app/core/authentication/authentication.service.ts");
/* harmony import */ var _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/routes/route-handler.service */ "./ui/app/core/routes/route-handler.service.ts");
/* harmony import */ var _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/initialization/initialization.service */ "./ui/app/core/initialization/initialization.service.ts");






let LoginComponent = class LoginComponent {
    constructor(authenticationService, routeHandler, initializationService) {
        this.userNameInput = new _app_shared_components_input_input_model__WEBPACK_IMPORTED_MODULE_2__["InputModel"]('userName', 'Username');
        this.passwordInput = new _app_shared_components_input_input_model__WEBPACK_IMPORTED_MODULE_2__["InputModel"]('userPassword', 'Password', 'password');
        this.rememberMe = false;
        this.authentication = authenticationService;
        this.routeHandler = routeHandler;
        this.initializationHandler = initializationService;
    }
    ngOnInit() {
        console.log('Login Component initialized ');
        // if (this.authentication.isUserLoggedIn()) { this.routeHandler.redirectToRoute('home'); }
    }
    login() {
        if (!this.isValidInput()) {
            return;
        }
        this.authentication.loginUser(this.userNameInput.value, this.passwordInput.value, this.rememberMe).subscribe((loginStatus) => {
            if (!loginStatus) {
                this.handleInvalidCredentials();
                return;
            }
            this.initializationHandler.init();
        });
    }
    isValidInput() {
        const userNameValid = this.userNameInput.validateInput();
        const passwordValid = this.passwordInput.validateInput();
        return (userNameValid && passwordValid);
    }
    handleInvalidCredentials() {
        const errorString = 'Invalid Username and Password';
        this.passwordInput.value = '';
        this.passwordInput.errorString = errorString;
        this.userNameInput.errorString = errorString;
        this.userNameInput.showError = true;
        this.passwordInput.showError = true;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_4__["RouteHandler"] },
    { type: _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_5__["InitializationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/login/pages/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.css */ "./ui/app/modules/login/pages/login.page.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_4__["RouteHandler"],
        _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_5__["InitializationService"]])
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=app-modules-login-login-module.js.map