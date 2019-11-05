(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-create-create-module"],{

/***/ "./ui/app/modules/create/create.module.ts":
/*!************************************************!*\
  !*** ./ui/app/modules/create/create.module.ts ***!
  \************************************************/
/*! exports provided: CreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModule", function() { return CreateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _approot_modules_create_pages_student_students_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @approot/modules/create/pages/student/students.page */ "./ui/app/modules/create/pages/student/students.page.ts");






const routes = [
    { path: '**', component: _approot_modules_create_pages_student_students_page__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"] }
];
let CreateModule = class CreateModule {
};
CreateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_approot_modules_create_pages_student_students_page__WEBPACK_IMPORTED_MODULE_5__["StudentsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
    })
], CreateModule);



/***/ }),

/***/ "./ui/app/modules/create/pages/student/students.page.ts":
/*!**************************************************************!*\
  !*** ./ui/app/modules/create/pages/student/students.page.ts ***!
  \**************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _approot_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @approot/core */ "./ui/app/core/index.ts");



let StudentsComponent = class StudentsComponent {
    constructor(sharedMessageService) {
        this.messageService = sharedMessageService;
    }
    ngOnInit() {
        console.log('Students Component initialized');
        this.messageService.broadcast('SetPreloaderEvent', false);
    }
};
StudentsComponent.ctorParameters = () => [
    { type: _approot_core__WEBPACK_IMPORTED_MODULE_2__["SharedMessageService"] }
];
StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `<div> Hello Students</div>`,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_approot_core__WEBPACK_IMPORTED_MODULE_2__["SharedMessageService"]])
], StudentsComponent);



/***/ })

}]);
//# sourceMappingURL=app-modules-create-create-module.js.map