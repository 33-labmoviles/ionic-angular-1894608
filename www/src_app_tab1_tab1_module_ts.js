"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _alumnos_alumnos_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../alumnos/alumnos.component.module */ 9292);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _alumnos_alumnos_component_module__WEBPACK_IMPORTED_MODULE_1__.AlumnosComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let Tab1Page = class Tab1Page {
    constructor() {
        this.alumnos = [
            {
                nombre: 'Christian',
                apellido: 'Ramirez',
                matricula: '1234567'
            },
            {
                nombre: 'Aaylin',
                apellido: 'Demetci',
                matricula: '1234567'
            },
            {
                nombre: 'Brian',
                apellido: 'Esquivel',
                matricula: '1234567'
            },
            {
                nombre: 'Diego',
                apellido: 'Jasso',
                matricula: '1234567'
            },
            {
                nombre: 'Jose',
                apellido: 'Vazquez',
                matricula: '1894608'
            }
        ];
        this.nombre = "";
        this.apellido = "";
        this.matricula = "";
    }
    //changes: SimpleChanges
    ngOnChanges() {
    }
    agregarAlumno() {
        var nuevoAlumno = {
            "nombre": this.nombre,
            "apellido": this.apellido,
            "matricula": this.matricula
        };
        this.alumnos.push(nuevoAlumno);
        this.alumnos.sort(function (a, b) {
            var nameA = a.nombre.toUpperCase();
            var nameB = b.nombre.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        console.log(this.alumnos);
    }
};
Tab1Page.ctorParameters = () => [];
Tab1Page.propDecorators = {
    nombre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    apellido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    matricula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7QUFDRCIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t\t<ion-title>Asistencia de alumnos</ion-title>\n\t</ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Asistencia de alumnos</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\t<ion-grid>\n\t\t<ion-row  *ngFor=\"let alumno of alumnos\">\n\t\t\t<ion-col>\n\t\t\t\t<ion-card>\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>Nombre:</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col><strong>{{alumno.nombre}}</strong></ion-col>\n\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>Apellido:</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col><strong>{{alumno.apellido}}</strong></ion-col>\n\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col>Matricula:</ion-col>\n\t\t\t\t\t\t\t\t\t\t\t<ion-col><strong>{{alumno.matricula}}</strong></ion-col>\n\t\t\t\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col class=\"logo\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/logo-fcfm.jpg\" alt=\"\" width=\"100px\">\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map