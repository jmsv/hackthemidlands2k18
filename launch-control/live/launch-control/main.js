(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'control',
        component: _control_control_component__WEBPACK_IMPORTED_MODULE_2__["ControlComponent"],
        data: { title: 'Control' }
    },
    {
        path: '',
        redirectTo: '/control',
        pathMatch: 'full'
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"half\">\n  <h1>Welcome back, James</h1>\n\n  <mat-toolbar color=primary>Your Siege Dashboard</mat-toolbar>\n\n  <p style=\"width:68%;\">From this dashboard you can control your fleet of IoT-powered siege devices!</p>\n\n  <br>\n  <hr>\n\n  <mat-card class=\"trebuchet\">\n\n    <h2 style=\"display:inline-block;\">Your Trebuchet</h2>\n    <mat-chip-list class=\"chippy\">\n      <mat-chip>NEW!</mat-chip>\n    </mat-chip-list>\n\n    <p class=\"description\">The superior siege weapon</p>\n\n    <p>Use the panel on the right to control your weapon</p>\n\n  </mat-card>\n</div>\n\n<div class=\"half\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half {\n  width: calc(40% - 8px);\n  float: left;\n  padding: 5%;\n  border: solid #464646 4px;\n  min-height: calc(80% - 8px); }\n\n.chippy {\n  float: right; }\n\n.trebuchet {\n  margin-top: 5%; }\n\n.description {\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbWVzL2hhY2t0aGVtaWRsYW5kczJrMTgvbGF1bmNoLWNvbnRyb2wvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLFlBQVc7RUFDWCwwQkFBaUM7RUFDakMsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYge1xuICB3aWR0aDogY2FsYyg0MCUgLSA4cHgpO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNSU7XG4gIGJvcmRlcjogc29saWQgcmdiKDcwLCA3MCwgNzApIDRweDtcbiAgbWluLWhlaWdodDogY2FsYyg4MCUgLSA4cHgpO1xufVxuXG4uY2hpcHB5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udHJlYnVjaGV0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'launch-control';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _control_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./control/control.component */ "./src/app/control/control.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _control_control_component__WEBPACK_IMPORTED_MODULE_7__["ControlComponent"],
                _control_control_component__WEBPACK_IMPORTED_MODULE_7__["Dialog2FAComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["default"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_control_control_component__WEBPACK_IMPORTED_MODULE_7__["ControlComponent"], _control_control_component__WEBPACK_IMPORTED_MODULE_7__["Dialog2FAComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/control/2fa-dialog.css":
/*!****************************************!*\
  !*** ./src/app/control/2fa-dialog.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbC8yZmEtZGlhbG9nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2wvMmZhLWRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/control/2fa-dialog.html":
/*!*****************************************!*\
  !*** ./src/app/control/2fa-dialog.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>2FA</h1>\n<div mat-dialog-content>\n  <p>To fire your trebuchet, please supply your 2FA token; we've texted you a code</p>\n\n  <p>Thank you for securing your IoT Trebuchet™ - you're helping prevent war amongst our village!</p>\n  <mat-form-field class=\"full-width\">\n    <input cdkFocusInitial matInput [(ngModel)]=\"data.token\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onNoClick()\">Retreat</button>\n  <button mat-button [mat-dialog-close]=\"data\">FIRE!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/control/control.component.html":
/*!************************************************!*\
  !*** ./src/app/control/control.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n\n  <mat-form-field class=\"launch-code\">\n    <input matInput placeholder=\"LAUNCH CODE\" [(ngModel)]=\"launchCode\" />\n  </mat-form-field>\n\n  <div class=\"fire-button-container\">\n    <div class=\"fire-button\" [class.active]=\"fireSelected\" (mousedown)=\"trigger($event)\" (mouseup)=\"trigger($event)\">\n      <div>FIRE</div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/control/control.component.scss":
/*!************************************************!*\
  !*** ./src/app/control/control.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Podkova:700\");\n.controls {\n  height: 80%; }\n.launch-code {\n  width: 300px;\n  margin: auto;\n  margin-top: 10px; }\n.fire-button-container {\n  position: relative;\n  display: inline-block;\n  margin-top: 40px; }\n.fire-button {\n  margin: auto;\n  width: 300px;\n  height: 270px;\n  line-height: 270px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 50%;\n  background: #e71818;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e71818), color-stop(100%, #db3338));\n  box-shadow: 0 15px #c90d0d; }\n.fire-button div {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 80px;\n    color: white;\n    font-family: 'Podkova', serif; }\n.fire-button.active {\n    box-shadow: 0 0 #c90d0d;\n    -webkit-transform: translate(0px, 15px);\n            transform: translate(0px, 15px);\n    transition: 0.1s all ease-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phbWVzL2hhY2t0aGVtaWRsYW5kczJrMTgvbGF1bmNoLWNvbnRyb2wvc3JjL2FwcC9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUVBQVk7QUFFWjtFQUNFLFlBQVcsRUFDWjtBQUVEO0VBQ0UsYUFBWTtFQUNaLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7QUFRRDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxhQUFZO0VBQ1osYUFkVTtFQWVWLGNBQXdCO0VBQ3hCLG1CQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsb0JBbEJhO0VBMkJiLHNIQUFvSDtFQUVwSCwyQkEzQmlCLEVBa0NsQjtBQTFCRDtJQVdJLDBCQUFpQjtPQUFqQix1QkFBaUI7UUFBakIsc0JBQWlCO1lBQWpCLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLGFBQVk7SUFDWiw4QkFBNkIsRUFDOUI7QUFmSDtJQXNCSSx3QkE5QmU7SUErQmYsd0NBQW9DO1lBQXBDLGdDQUFvQztJQUNwQyw4QkFBNkIsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvZGtvdmE6NzAwJyk7XG5cbi5jb250cm9scyB7XG4gIGhlaWdodDogODAlO1xufVxuXG4ubGF1bmNoLWNvZGUge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuJHNpemU6IDMwMHB4O1xuJGRyb3BTaXplOiAxNXB4O1xuJGNvbG9yOiAjZTcxODE4O1xuJGNvbG9yMjogI2RiMzMzODtcbiRkcm9wQ29sb3I6ICNjOTBkMGQ7XG5cbi5maXJlLWJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmZpcmUtYnV0dG9uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogJHNpemU7XG4gIGhlaWdodDogJHNpemUgLSAkc2l6ZS8xMDtcbiAgbGluZS1oZWlnaHQ6ICRzaXplKjAuOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xuXG4gIGRpdiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1BvZGtvdmEnLCBzZXJpZjtcbiAgfVxuXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICRjb2xvciksIGNvbG9yLXN0b3AoMTAwJSwgJGNvbG9yMikpO1xuXG4gIGJveC1zaGFkb3c6IDAgJGRyb3BTaXplICRkcm9wQ29sb3I7XG5cbiAgJi5hY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAkZHJvcENvbG9yO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgJGRyb3BTaXplKTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCBlYXNlLW91dDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/control/control.component.ts":
/*!**********************************************!*\
  !*** ./src/app/control/control.component.ts ***!
  \**********************************************/
/*! exports provided: ControlComponent, Dialog2FAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog2FAComponent", function() { return Dialog2FAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ControlComponent = /** @class */ (function () {
    function ControlComponent(dialog) {
        this.dialog = dialog;
        this.launchCode = '';
        this.fireSelected = false;
        this.primingToken = '';
        this.requestId = '';
    }
    ControlComponent.prototype.finalise = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://internet-of-flings.com/api/verifyCode', {
            tfa_code: this.token,
            request_id: this.requestId
        })
            .then(function (res) {
            console.log(res.data);
            if (res.data.message === 'TFA code is correct') {
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://internet-of-flings.com/api/enable', {
                    tfa_token: res.data.tfa_token,
                    priming_token: _this.primingToken
                })
                    .then(function (res2) {
                    console.log(res2.data);
                    console.log('trebuchet fired! maybe');
                });
            }
        });
    };
    ControlComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(Dialog2FAComponent, {
            width: '600px',
            data: { name: this.token }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed with', result);
            if (result) {
                _this.token = result.token;
                _this.finalise();
            }
        });
    };
    ControlComponent.prototype.trigger = function (event) {
        if (event.type === 'mousedown'
            || event.type === 'keydown'
                && event.code === 'Enter') {
            console.log('fire!');
            this.fire();
        }
        else {
            this.unfire();
        }
    };
    ControlComponent.prototype.fire = function () {
        var _this = this;
        this.fireSelected = true;
        setTimeout(function () {
            _this.openDialog();
            _this.fireSelected = false;
        }, 200);
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://internet-of-flings.com/api/getToken', {
            priming_code: this.launchCode
        }).then(function (res) {
            console.log(res.data);
            _this.primingToken = res.data.priming_token;
        });
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://internet-of-flings.com/api/getCode')
            .then(function (res) {
            console.log(res.data);
            _this.requestId = res.data.request_id;
        });
    };
    ControlComponent.prototype.unfire = function () {
        this.fireSelected = false;
    };
    ControlComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ControlComponent.prototype, "trigger", null);
    ControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.scss */ "./src/app/control/control.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ControlComponent);
    return ControlComponent;
}());

var Dialog2FAComponent = /** @class */ (function () {
    function Dialog2FAComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    Dialog2FAComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    Dialog2FAComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-2fa-dialog',
            styles: [__webpack_require__(/*! ./2fa-dialog.css */ "./src/app/control/2fa-dialog.css")],
            template: __webpack_require__(/*! ./2fa-dialog.html */ "./src/app/control/2fa-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], Dialog2FAComponent);
    return Dialog2FAComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
/* harmony default export */ __webpack_exports__["default"] = (MaterialModule);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/james/hackthemidlands2k18/launch-control/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map