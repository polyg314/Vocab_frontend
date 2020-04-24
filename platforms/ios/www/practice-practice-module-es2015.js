(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["practice-practice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/practice/practice.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/practice/practice.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Practice</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <h3 *ngIf=\"my_dict.length === 0\">No words added to your dictionary yet. Please add via search page</h3>\n    <ion-card *ngIf=\"my_dict.length > 0\">\n      <ion-card-header>\n        <ion-card-title *ngIf=\"practicing === true\">{{ current_word }}</ion-card-title>\n        <ion-button *ngIf=\"practicing === false\"  expand=\"block\" (click)=\"beginPractice()\">Go Through Flashcards</ion-button> \n        \n        <ion-button *ngIf=\"onlyWord === true\"  expand=\"block\" (click)=\"showDefinitions()\">Show Definition(s)</ion-button>       \n      </ion-card-header>      \n      <ion-card-content *ngIf=\"defs_shown === true\">\n      <i>1. {{ desc_definitions_one}}</i>\n      <ul>\n        <li *ngFor=\"let definition of definitions_one; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"defs_shown === true\">\n      <i *ngIf=\"desc_definitions_two.length > 1\">2. {{ desc_definitions_two}}</i>\n      <ul *ngIf=\"desc_definitions_two.length > 1\">\n        <li *ngFor=\"let definition of definitions_two; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    <ion-card-content *ngIf=\"defs_shown === true\">\n      <i *ngIf=\"desc_definitions_three.length > 1\">3. {{ desc_definitions_three}}</i>\n      <ul *ngIf=\"desc_definitions_three.length > 1\">\n        <li *ngFor=\"let definition of definitions_three; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    <ion-button *ngIf=\"defs_shown === true && final_word === false\"  expand=\"block\" (click)=\"showNextCard()\">Next Word</ion-button>\n    <ion-button *ngIf=\"defs_shown === true && final_word === true\"  expand=\"block\" (click)=\"finishStack()\">Finish</ion-button>  \n    </ion-card>\n  </ion-content>\n</div>");

/***/ }),

/***/ "./src/app/pages/practice/practice-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/practice/practice-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PracticePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticePageRoutingModule", function() { return PracticePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _practice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practice.page */ "./src/app/pages/practice/practice.page.ts");




const routes = [
    {
        path: '',
        component: _practice_page__WEBPACK_IMPORTED_MODULE_3__["PracticePage"]
    }
];
let PracticePageRoutingModule = class PracticePageRoutingModule {
};
PracticePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PracticePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/practice/practice.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/practice/practice.module.ts ***!
  \***************************************************/
/*! exports provided: PracticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticePageModule", function() { return PracticePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _practice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./practice-routing.module */ "./src/app/pages/practice/practice-routing.module.ts");
/* harmony import */ var _practice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./practice.page */ "./src/app/pages/practice/practice.page.ts");







let PracticePageModule = class PracticePageModule {
};
PracticePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _practice_routing_module__WEBPACK_IMPORTED_MODULE_5__["PracticePageRoutingModule"]
        ],
        declarations: [_practice_page__WEBPACK_IMPORTED_MODULE_6__["PracticePage"]]
    })
], PracticePageModule);



/***/ }),

/***/ "./src/app/pages/practice/practice.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/practice/practice.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByYWN0aWNlL3ByYWN0aWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/practice/practice.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/practice/practice.page.ts ***!
  \*************************************************/
/*! exports provided: PracticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticePage", function() { return PracticePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let PracticePage = class PracticePage {
    constructor(storage) {
        this.storage = storage;
        this.my_dict = [];
        this.practicing = false;
        this.count_array = [];
        this.current_index = 0;
        this.onlyWord = false;
        this.defs_shown = false;
        this.definitions_one = [];
        this.definitions_two = [];
        this.definitions_three = [];
        this.desc_definitions_one = '';
        this.desc_definitions_two = '';
        this.desc_definitions_three = '';
        this.final_word = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('my_dict').then((my_dict) => {
            if (my_dict) {
                if (my_dict.length > 0) {
                    this.my_dict = my_dict;
                }
            }
        });
    }
    beginPractice() {
        this.practicing = true;
        this.createCountArray();
        this.showNextCard();
        console.log("begin");
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    createCountArray() {
        this.dict_length = this.my_dict.length;
        this.count_array = [];
        for (var i = 0; i < this.dict_length; i++) {
            this.count_array.push(i);
        }
        this.count_array = this.shuffle(this.count_array);
        for (var j = 0; j < this.dict_length; j++) {
            console.log(this.count_array[j]);
        }
    }
    showNextCard() {
        this.defs_shown = false;
        this.onlyWord = true;
        this.current_word = this.my_dict[this.count_array[this.current_index]].word;
    }
    showDefinitions() {
        this.defs_shown = true;
        this.onlyWord = false;
        this.definitions_one = [];
        this.definitions_two = [];
        this.definitions_three = [];
        this.desc_definitions_one = '';
        this.desc_definitions_two = '';
        this.desc_definitions_three = '';
        this.definitions_one = this.my_dict[this.count_array[this.current_index]].info.one.defs;
        this.desc_definitions_one = this.my_dict[this.count_array[this.current_index]].info.one.form;
        if (this.my_dict[this.count_array[this.current_index]].info.two) {
            this.definitions_two = this.my_dict[this.count_array[this.current_index]].info.two.defs;
            this.desc_definitions_two = this.my_dict[this.count_array[this.current_index]].info.two.form;
        }
        ;
        if (this.my_dict[this.count_array[this.current_index]].info.three) {
            this.definitions_three = this.my_dict[this.count_array[this.current_index]].info.three.defs;
            this.desc_definitions_three = this.my_dict[this.count_array[this.current_index]].info.three.form;
        }
        ;
        if (this.current_index === this.dict_length - 1) {
            this.final_word = true;
        }
        else {
            this.current_index = this.current_index + 1;
        }
    }
    finishStack() {
        this.current_index = 0;
        this.practicing = false;
        this.defs_shown = false;
        this.onlyWord = false;
        this.final_word = false;
    }
};
PracticePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
PracticePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-practice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./practice.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/practice/practice.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./practice.page.scss */ "./src/app/pages/practice/practice.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], PracticePage);



/***/ })

}]);
//# sourceMappingURL=practice-practice-module-es2015.js.map