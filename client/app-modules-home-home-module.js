(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/footer/footer.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/footer/footer.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"FooterComponent\">\n    <footer class=\"page-footer\">\n        <div class=\"footer-copyright indigo darken-4\">\n            <div class=\"container\">\n                Copyright 2015 <a class=\"grey-text text-lighten-4\" href=\"http://www.pagon.in\" target=\"_blank\">Pagon</a> All rights reserved.\n                <span class=\"right\"> Design and Developed by <a class=\"grey-text text-lighten-4\" href=\"http://pagon.in/\">Pagon</a></span>\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/header/header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/header/header.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"HeaderComponent\">\n    <header id=\"header\" class=\"page-topbar\">\n        <div class=\"navbar-fixed\">\n            <nav class=\"indigo darken-4\">\n                <div class=\"nav-wrapper\">\n                    <ul class=\"left\">\n                        <li>\n                            <h1 class=\"logo-wrapper\">\n                                <a href=\"/\" class=\"brand-logo darken-1\">\n                                    <img src=\"/assets/images/pagon-logo-title.png\" alt=\"Pagon logo\">\n                                </a>\n                            </h1>\n                        </li>\n                    </ul>\n                    <ul class=\"right hide-on-med-and-down\">\n                        <li>\n                            <a class=\"waves-effect waves-block account-icon waves-light\">\n                                <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n                            </a>\n                        </li>\n                        <li>\n                            <a data-activates=\"chat-out\" class=\"waves-effect waves-block waves-light chat-collapse\">\n                                <i class=\"fa fa-bell\" aria-hidden=\"true\">\n                                    <span class=\"count-badge\">4</span>\n                                </i>\n                            </a>\n                        </li>\n                        <li>\n                            <a id=\"logout_button\" ng-click=\"logout()\" class=\"waves-effect waves-block waves-light\">\n                                <i class=\"fas fa-sign-out-alt\"></i>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </header>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/navigation/navigation.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"NavigationComponent\">\n    <aside id=\"left-sidebar-nav\">\n        <ul id=\"slide-out\" class=\"sidenav side-nav sidenav-fixed z-depth-3 leftside-navigation\">\n            <li class=\"user-details indigo darken-4\">\n                <div class=\"row\">\n                    <div class=\"col s4 m4 l4\">\n                        <img src=\"/assets/images/dudp.jpg\" id=\"userProfileImage\" alt=\"\" class=\"circle responsive-img valign profile-image\">\n                    </div>\n                    <div class=\"col s8 m8 l8\">\n                        <a class=\"btn-flat dropdown-button waves-effect waves-light white-text profile-btn\" data-activates=\"profile-dropdown\"><i class=\"mdi-navigation-arrow-drop-down right\"></i>username</a>\n                        <ul id=\"profile-dropdown\" class=\"dropdown-content\">\n                            <li><a href=\"profile\"><i class=\"mdi-action-account-circle\"></i>Profile</a>\n                            </li>\n                            <li><a ng-click=\"logout()\"><i class=\"mdi-hardware-keyboard-tab\"></i>Logout</a>\n                            </li>\n                        </ul>\n                        <p class=\"user-roal\">userRoal</p>\n                    </div>\n                </div>\n            </li>\n            <li class=\"no-padding\" ng-if=\"userType || adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold tracking-li\">\n                        <a id=\"tracking\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-map-marker-alt\"></i>Tracking</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li live-li active\" ng-if=\"userType || adminType || companyType\"><a href=\"live\" id=\"liveTracking\"><i class=\"fa fa-location-arrow\"></i>Live</a>\n                                </li>\n                                <li class=\"nav-li history-li\" ng-if=\"adminType || companyType\"><a id=\"historyTracking\" href=\"history\"><i class=\"fa fa-history\"></i>History</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold create-li\">\n                        <a id=\"create\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"fa fa-plus\"></i>Create</a>\n                        <div class=\"collapsible-body\">\n                            <ul>\n                                <li class=\"nav-li vehicles-li bold\" ng-if=\"adminType || companyType || userType\">\n                                    <a id=\"vehicles\" href=\"vehicles\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-bus\"></i>Vehicles\n                                    </a>\n                                </li>\n                                <li class=\"nav-li students-li bold\" ng-if=\"companyType \">\n                                    <a id=\"students\" href=\"students\" class=\"waves-effect waves-cyan\">\n                                        <i class=\"fa fa-user-graduate\"></i>Students\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"no-padding\" ng-if=\"adminType || companyType\">\n                <ul class=\"collapsible\" data-collapsible=\"accordian\">\n                    <li class=\"nav-li bold reports-li\">\n                        <a id=\"reprots\" class=\"collapsible-header waves-effect waves-cyan\"><i class=\"mdi-editor-insert-chart\"></i>Reports</a>\n                        <div class=\"collapsible-body\" style=\"display:none\">\n                            <ul>\n                                <li class=\"nav-li dayreport-li\" ng-if=\"adminType || companyType || userType\"><a id=\"dailyReports\" href=\"/reports/general\" class=\"waves-effect waves-cyan\">General Day Report</a>\n                                </li>\n                                <li class=\"nav-li detaildayreport-li\" ng-if=\"adminType || companyType || userType\"><a id=\"detailDetailReports\" href=\"/reports/detail\" class=\"waves-effect waves-cyan\" >Detailed Day Report</a>\n                                </li>\n                                <li class=\"nav-li stoppagereport-li\" ng-if=\"adminType || companyType || userType\" ><a id=\"stoppageReports\" href=\"reports/stoppage\" class=\"waves-effect waves-cyan\">Stoppage Report</a>\n                                </li>\n                                <li class=\"nav-li distancereports-li\" ng-if=\"adminType || companyType || userType\"><a id=\"distanceReports\" href=\"/reports/distance\" class=\"waves-effect waves-cyan\">Distance Report</a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </li>\n            <li class=\"nav-li settings-li bold\" ng-if=\"adminType || companyType \">\n                <a id=\"settings\" href=\"/settings\" class=\"waves-effect waves-cyan\">\n                    <i class=\"fa fa-pencil\"></i>Settings\n                </a>\n            </li>\n            <li class=\"li-hover\"><div class=\"divider\"></div></li>\n            <li class=\"li-hover\"><p class=\"ultra-small margin more-text\">PAGON</p></li>\n            <li><a href=\"http://www.pagon.in\" target=\"_blank\"><i class=\"mdi-action-info\"></i>About</a>\n            </li>\n            <li><a href=\"help\"><i class=\"mdi-action-help\"></i>Help</a>\n            </li>\n            <li><a href=\"reportBug\"><i class=\"mdi-action-bug-report\"></i>Report Bug</a>\n            </li>\n            <li><a href=\"https://play.google.com/store/apps/details?id=apps.curvecube.vts\" target=\"_blank\"><i class=\"mdi-file-cloud-download\"></i>Download App</a>\n            </li>\n        </ul>\n        <a href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger btn-floating btn-medium waves-effect waves-light hide-on-large-only indigo darken-4\">\n            <i class=\"fas fa-bars\"></i>\n        </a>\n    </aside>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/pages/home.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/pages/home.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"HomePage\">\n    <app-home-header> </app-home-header>\n\n    <div id=\"main\">\n        <app-home-navigation-bar> </app-home-navigation-bar>\n        <div class=\"home-page-router-content\">\n            <div class=\"home-page-loaded-content\" [hidden]=\"showRootPreloader\">\n                <app-root-preloader> </app-root-preloader>\n            </div>\n            <div class=\"home-page-main-content\" [hidden]=\"!showRootPreloader\">\n                <router-outlet> </router-outlet>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./ui/app/modules/home/components/footer/footer.component.css":
/*!********************************************************************!*\
  !*** ./ui/app/modules/home/components/footer/footer.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./ui/app/modules/home/components/footer/footer.component.ts":
/*!*******************************************************************!*\
  !*** ./ui/app/modules/home/components/footer/footer.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./ui/app/modules/home/components/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./ui/app/modules/home/components/header/header.component.css":
/*!********************************************************************!*\
  !*** ./ui/app/modules/home/components/header/header.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*=================================================================================\n    Header\n====================================================================================*/\n#HeaderComponent nav {\n    height: 64px !important;\n}\n#HeaderComponent nav ul a {\n    padding: 0 20px;\n    height: 64px !important;\n}\n#HeaderComponent nav ul a:hover {\n    background-color: rgba(255, 255, 255, 0.1) !important;\n}\n#HeaderComponent h1.logo-wrapper{\n    margin: 0px 0px;\n}\n#HeaderComponent header .brand-logo {\n    margin: 1px 0px;\n    padding: 0 20px;\n}\n#HeaderComponent header .brand-logo img{\n    width: 172px;\n}\n#HeaderComponent header .brand-logo img {\n    width: 200px !important;\n}\n#HeaderComponent .logo-wrapper img{\n    width: 800px;\n    height: 64px;\n}\nheader .count-badge {\n    background-color: #ff0000;\n    color: #ffffff;\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    font-weight: bold;\n    line-height: 1;\n    vertical-align: baseline;\n    white-space: nowrap;\n    text-align: center;\n    border-radius: 10px;\n    margin-left: -5px;\n    position: absolute;\n    font-size: 13px;\n    top: 12px;\n    right: 12px;\n    margin-right: -5px;\n}\n@media only screen and (max-width: 992px) {\n    nav .nav-wrapper {\n        text-align: center;\n        height: 64px;\n        line-height: 64px;\n    }\n    nav .nav-wrapper a.page-title {\n        font-size: 36px;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O3FGQUVxRjtBQUNyRjtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InVpL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEhlYWRlclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiNIZWFkZXJDb21wb25lbnQgbmF2IHtcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbn1cbiNIZWFkZXJDb21wb25lbnQgbmF2IHVsIGEge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbn1cbiNIZWFkZXJDb21wb25lbnQgbmF2IHVsIGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xufVxuI0hlYWRlckNvbXBvbmVudCBoMS5sb2dvLXdyYXBwZXJ7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xufVxuI0hlYWRlckNvbXBvbmVudCBoZWFkZXIgLmJyYW5kLWxvZ28ge1xuICAgIG1hcmdpbjogMXB4IDBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG59XG4jSGVhZGVyQ29tcG9uZW50IGhlYWRlciAuYnJhbmQtbG9nbyBpbWd7XG4gICAgd2lkdGg6IDE3MnB4O1xufVxuI0hlYWRlckNvbXBvbmVudCBoZWFkZXIgLmJyYW5kLWxvZ28gaW1nIHtcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cbiNIZWFkZXJDb21wb25lbnQgLmxvZ28td3JhcHBlciBpbWd7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGhlaWdodDogNjRweDtcbn1cbmhlYWRlciAuY291bnQtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1pbi13aWR0aDogMTBweDtcbiAgICBwYWRkaW5nOiAzcHggN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgdG9wOiAxMnB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBuYXYgLm5hdi13cmFwcGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIH1cbiAgICBuYXYgLm5hdi13cmFwcGVyIGEucGFnZS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./ui/app/modules/home/components/header/header.component.ts":
/*!*******************************************************************!*\
  !*** ./ui/app/modules/home/components/header/header.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./ui/app/modules/home/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./ui/app/modules/home/components/navigation/navigation.component.css":
/*!****************************************************************************!*\
  !*** ./ui/app/modules/home/components/navigation/navigation.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#NavigationComponent, #left-sidebar-nav{\n    height: 100%;\n}\n#slide-out {\n    width: 240px;\n}\n.side-nav.fixed a {\n    display: block;\n    padding: 0 15px;\n    color: #444;\n}\n#NavigationComponent .sidenav {\n    position: relative !important;\n    height: 100% !important;\n}\n@media only screen and (max-width: 992px) {\n    ul.side-nav.leftside-navigation {\n        top: 0px;\n    }\n\n    #NavigationComponent .sidenav {\n        position: fixed !important;\n    }\n}\nul.side-nav.leftside-navigation hr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #e0e0e0;\n    margin: 1em 0;\n    padding: 0;\n}\n#slide-out li a i {\n    line-height: inherit;\n    width: 2rem;\n    font-size: 1.3rem;\n    display: block;\n    float: left;\n    text-align: center;\n    margin-right: 1rem;\n    color: #212121;\n}\n#slide-out ul.side-nav li {\n    padding: 0px !important;\n}\nul.side-nav li {\n    padding: 0;\n}\nul.side-nav .collapsible-header {\n    margin: 0;\n}\n.caption {\n    font-size: 1.25rem;\n    font-weight: 300;\n    margin-bottom: 30px;\n}\n.caption-uppercase {\n    font-size: 1.25rem;\n    font-weight: 300;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n}\nul.side-nav.leftside-navigation {\n    overflow: overlay;\n}\nul.side-nav.leftside-navigation li {\n    line-height: 44px;\n}\nul.side-nav.leftside-navigation li:hover,\nul.side-nav.leftside-navigation li.active {\n    background-color: rgba(0, 0, 0, 0.05);\n}\nul.side-nav.leftside-navigation li a {\n    font-size: 14px;\n    font-weight: 400;\n    padding: 0 16px;\n}\n.side-nav.leftside-navigation .collapsible-body li.active,\n.side-nav.fixed.leftside-navigation .collapsible-body li.active{\n    background-color: #FAFAFA;\n}\n.side-nav.leftside-navigation .collapsible-body li.active a,\n.side-nav.fixed.leftside-navigation .collapsible-body li.active a{\n    color: #444;\n}\n.side-nav .collapsible-body li a{\n    margin: 0 1rem 0 3rem;\n}\nul.side-nav.leftside-navigation ul.collapsible-accordion {\n    background-color: #FFF;\n}\nul.side-nav.leftside-navigation li.user-details {\n    background-color: #ffea43 !important;\n    background-size: cover;\n    margin-bottom: 15px;\n    padding: 15px 0px 0px 15px;\n}\n.user-details .row {\n    margin: 0;\n}\n.user-task, .user-time {\n    margin: 0;\n    font-size: 13px;\n    color: #fff;\n}\nul.side-nav.leftside-navigation .profile-image {\n    /*height: 50px;*/\n}\nul.side-nav.leftside-navigation .profile-btn {\n    color: black !important;\n    font-weight: 500;\n    margin: 0;\n    text-transform: capitalize;\n    padding: 0;\n    font-size: 15px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.user-roal {\n    color: black;\n    margin-top: -16px;\n    font-size: 13px;\n    overflow-y: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n.bold > a {\n    font-weight: bold;\n}\nnav.top-nav {\n    height: 122px;\n    box-shadow: none;\n}\nnav.top-nav a.page-title {\n    line-height: 122px;\n    font-size: 48px;\n}\n#slide-out .nav-li a {\n    font-family: 'Merriweather', serif;\n    font-weight: 500;\n}\n.sidenav-trigger {\n    position: fixed;\n    left: 8px;\n    display: flex;\n    top: 10px;\n    width: 45px;\n    height: 45px;\n    padding: 0px 4px;\n    color: black !important;\n    justify-content: center;\n    -webit-justify-content: center;\n    align-items: center;\n    -webkit-align-items: center;\n    box-shadow: none !important;\n    z-index: 998;\n}\n#sidenav-overlay {\n    background-color: transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUkscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSx5QkFBeUI7QUFDN0I7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFJcEMsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUdiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakMiLCJmaWxlIjoidWkvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI05hdmlnYXRpb25Db21wb25lbnQsICNsZWZ0LXNpZGViYXItbmF2e1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiNzbGlkZS1vdXQge1xuICAgIHdpZHRoOiAyNDBweDtcbn1cbi5zaWRlLW5hdi5maXhlZCBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgY29sb3I6ICM0NDQ7XG59XG4jTmF2aWdhdGlvbkNvbXBvbmVudCAuc2lkZW5hdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgdWwuc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiB7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cblxuICAgICNOYXZpZ2F0aW9uQ29tcG9uZW50IC5zaWRlbmF2IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgfVxufVxudWwuc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiBociB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgcGFkZGluZzogMDtcbn1cbiNzbGlkZS1vdXQgbGkgYSBpIHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiAjMjEyMTIxO1xufVxuI3NsaWRlLW91dCB1bC5zaWRlLW5hdiBsaSB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG51bC5zaWRlLW5hdiBsaSB7XG4gICAgcGFkZGluZzogMDtcbn1cbnVsLnNpZGUtbmF2IC5jb2xsYXBzaWJsZS1oZWFkZXIge1xuICAgIG1hcmdpbjogMDtcbn1cbi5jYXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNhcHRpb24tdXBwZXJjYXNlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxudWwuc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiB7XG4gICAgb3ZlcmZsb3c6IG92ZXJsYXk7XG59XG51bC5zaWRlLW5hdi5sZWZ0c2lkZS1uYXZpZ2F0aW9uIGxpIHtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbn1cbnVsLnNpZGUtbmF2LmxlZnRzaWRlLW5hdmlnYXRpb24gbGk6aG92ZXIsXG51bC5zaWRlLW5hdi5sZWZ0c2lkZS1uYXZpZ2F0aW9uIGxpLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbnVsLnNpZGUtbmF2LmxlZnRzaWRlLW5hdmlnYXRpb24gbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMCAxNnB4O1xufVxuLnNpZGUtbmF2LmxlZnRzaWRlLW5hdmlnYXRpb24gLmNvbGxhcHNpYmxlLWJvZHkgbGkuYWN0aXZlLFxuLnNpZGUtbmF2LmZpeGVkLmxlZnRzaWRlLW5hdmlnYXRpb24gLmNvbGxhcHNpYmxlLWJvZHkgbGkuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4uc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiAuY29sbGFwc2libGUtYm9keSBsaS5hY3RpdmUgYSxcbi5zaWRlLW5hdi5maXhlZC5sZWZ0c2lkZS1uYXZpZ2F0aW9uIC5jb2xsYXBzaWJsZS1ib2R5IGxpLmFjdGl2ZSBhe1xuICAgIGNvbG9yOiAjNDQ0O1xufVxuLnNpZGUtbmF2IC5jb2xsYXBzaWJsZS1ib2R5IGxpIGF7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAzcmVtO1xufVxudWwuc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiB1bC5jb2xsYXBzaWJsZS1hY2NvcmRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG51bC5zaWRlLW5hdi5sZWZ0c2lkZS1uYXZpZ2F0aW9uIGxpLnVzZXItZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWE0MyAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZzogMTVweCAwcHggMHB4IDE1cHg7XG59XG4udXNlci1kZXRhaWxzIC5yb3cge1xuICAgIG1hcmdpbjogMDtcbn1cbi51c2VyLXRhc2ssIC51c2VyLXRpbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG51bC5zaWRlLW5hdi5sZWZ0c2lkZS1uYXZpZ2F0aW9uIC5wcm9maWxlLWltYWdlIHtcbiAgICAvKmhlaWdodDogNTBweDsqL1xufVxudWwuc2lkZS1uYXYubGVmdHNpZGUtbmF2aWdhdGlvbiAucHJvZmlsZS1idG4ge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udXNlci1yb2FsIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmJvbGQgPiBhIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbm5hdi50b3AtbmF2IHtcbiAgICBoZWlnaHQ6IDEyMnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbm5hdi50b3AtbmF2IGEucGFnZS10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDEyMnB4O1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbn1cbiNzbGlkZS1vdXQgLm5hdi1saSBhIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2lkZW5hdi10cmlnZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiAwcHggNHB4O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk4O1xufVxuI3NpZGVuYXYtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./ui/app/modules/home/components/navigation/navigation.component.ts":
/*!***************************************************************************!*\
  !*** ./ui/app/modules/home/components/navigation/navigation.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationComponent = class NavigationComponent {
    ngOnInit() {
        setTimeout(() => {
            $('.sidenav').sidenav();
            $('.collapsible').collapsible({
                accordion: true
            });
        }, 0, true);
    }
};
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-navigation-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/components/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./ui/app/modules/home/components/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./ui/app/modules/home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./ui/app/modules/home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _approot_modules_home_pages_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @approot/modules/home/pages/home.page */ "./ui/app/modules/home/pages/home.page.ts");




const routes = [
    {
        path: 'home',
        component: _approot_modules_home_pages_home_page__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'students',
                loadChildren: 'app/modules/create/create.module#CreateModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./ui/app/modules/home/home.module.ts":
/*!********************************************!*\
  !*** ./ui/app/modules/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @approot/modules/home */ "./ui/app/modules/home/index.ts");
/* harmony import */ var _approot_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @approot/shared */ "./ui/app/shared/index.ts");






let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _approot_modules_home__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _approot_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })
], HomeModule);



/***/ }),

/***/ "./ui/app/modules/home/index.ts":
/*!**************************************!*\
  !*** ./ui/app/modules/home/index.ts ***!
  \**************************************/
/*! exports provided: FooterComponent, HeaderComponent, NavigationComponent, HomeComponent, HomeModule, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ "./ui/app/modules/home/components/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });

/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "./ui/app/modules/home/components/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./ui/app/modules/home/components/navigation/navigation.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"]; });

/* harmony import */ var _pages_home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home.page */ "./ui/app/modules/home/pages/home.page.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _pages_home_page__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]; });

/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.module */ "./ui/app/modules/home/home.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return _home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]; });

/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./ui/app/modules/home/home-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomeRoutingModule"]; });










/***/ }),

/***/ "./ui/app/modules/home/pages/home.page.css":
/*!*************************************************!*\
  !*** ./ui/app/modules/home/pages/home.page.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-content {\n    padding-top: 10px;\n}\n\n#HomePage {\n    height:100vh;\n    overflow: hidden;\n}\n\n#HomePage #main {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n}\n\n#HomePage .home-page-router-content {\n    flex: 1 0;\n    overflow-y: scroll;\n    margin: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvaG9tZS5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoidWkvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiNIb21lUGFnZSB7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNIb21lUGFnZSAjbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI0hvbWVQYWdlIC5ob21lLXBhZ2Utcm91dGVyLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./ui/app/modules/home/pages/home.page.ts":
/*!************************************************!*\
  !*** ./ui/app/modules/home/pages/home.page.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "./ui/app/core/authentication/authentication.service.ts");
/* harmony import */ var _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/routes/route-handler.service */ "./ui/app/core/routes/route-handler.service.ts");
/* harmony import */ var _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/initialization/initialization.service */ "./ui/app/core/initialization/initialization.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _approot_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @approot/core */ "./ui/app/core/index.ts");







let HomeComponent = class HomeComponent {
    constructor(authenticationService, routeHandler, initializationService, router, sharedMessageService) {
        this.showRootPreloader = true;
        this.authentication = authenticationService;
        this.routeHandler = routeHandler;
        this.initializationHandler = initializationService;
        this.router = router;
        this.sharedMessageService = sharedMessageService;
    }
    ngOnInit() {
        console.log('Home Component initialized ');
        this.sharedMessageService.subscribe('SetPreloaderEvent', this._setPreloader);
        this.routerEventSubscription =
            this.router.events.subscribe(this.handlerRouterEvents);
    }
    ngOnDestroy() {
        this.routerEventSubscription.unsubscribe();
    }
    handlerRouterEvents(event) {
        switch (true) {
            case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]: {
                this.showRootPreloader = true;
                break;
            }
            default: {
                break;
            }
        }
    }
    _setPreloader(showPreloader) {
        this.showRootPreloader = showPreloader;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__["RouteHandler"] },
    { type: _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_4__["InitializationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _approot_core__WEBPACK_IMPORTED_MODULE_6__["SharedMessageService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./ui/app/modules/home/pages/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.css */ "./ui/app/modules/home/pages/home.page.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _app_core_routes_route_handler_service__WEBPACK_IMPORTED_MODULE_3__["RouteHandler"],
        _app_core_initialization_initialization_service__WEBPACK_IMPORTED_MODULE_4__["InitializationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _approot_core__WEBPACK_IMPORTED_MODULE_6__["SharedMessageService"]])
], HomeComponent);



/***/ })

}]);
//# sourceMappingURL=app-modules-home-home-module.js.map