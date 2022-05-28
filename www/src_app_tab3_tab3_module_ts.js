"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_1__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page.html?ngResource */ 9769);
/* harmony import */ var _tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss?ngResource */ 7087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _firebase_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-database.service */ 7687);





let Tab3Page = class Tab3Page {
    constructor(db) {
        this.db = db;
        this.nombre = "";
        this.apellido = "";
        this.matricula = "";
    }
    onSubmit(agregarAlumno) {
        this.nuevoAlumno = {
            nombre: this.nombre,
            apellido: this.apellido,
            matricula: this.matricula,
            imagen: 'assets/logo-fcfm.jpg'
        };
        this.db.agregarAlumno(this.nuevoAlumno).subscribe(res => {
            console.log('Se agrego correctamente');
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _firebase_database_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseDatabaseService }
];
Tab3Page.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    apellido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    matricula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab3',
        template: _tab3_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab3_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab3Page);



/***/ }),

/***/ 7087:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".campo-texto {\n  border: solid 1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsdUJBQUE7QUFDRCIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW1wby10ZXh0byB7XHJcblx0Ym9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbn0iXX0= */";

/***/ }),

/***/ 9769:
/*!************************************************!*\
  !*** ./src/app/tab3/tab3.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t\t<ion-title>Registro</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Registro</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<form #nuevoAlumno=\"ngForm\" (ngSubmit)=\"onSubmit(nuevoAlumno)\">\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"2\">Nombre:</ion-col>\n\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t<ion-input class=\"campo-texto\" placeholder=\"Jose\" [(ngModel)]=\"nombre\" name=\"nombre\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">Apellido:</ion-col>\n\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t<ion-input class=\"campo-texto\" placeholder=\"Vazquez\" [(ngModel)]=\"apellido\" name=\"apellido\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"2\">Matricula:</ion-col>\n\t\t\t\t<ion-col size=\"10\">\n\t\t\t\t\t<ion-input class=\"campo-texto\" placeholder=\"1894608\" [(ngModel)]=\"matricula\" name=\"matricula\"></ion-input>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"12\">\n\t\t\t\t\t<ion-button type=\"submit\">Agregar alumno</ion-button>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map