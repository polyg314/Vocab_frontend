function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dictionary-dictionary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dictionary/dictionary.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dictionary/dictionary.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDictionaryDictionaryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>My Dictionary</ion-title>\n    </ion-toolbar>\n  </ion-header>\n \n<ion-content>\n  <ion-item *ngFor=\"let word of my_dict\">{{ word.word }}</ion-item>\n\n  <!-- <ion-item-group>\n    <ion-item-divider color=\"light\">A</ion-item-divider>\n    <ion-item>Angola</ion-item>\n    <ion-item>Argentina</ion-item>\n    <ion-item>Armenia</ion-item>\n    <ion-item>Australia</ion-item>\n    <ion-item>Austria</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color=\"light\">B</ion-item-divider>\n    <ion-item>Bangladesh</ion-item>\n    <ion-item>Belarus</ion-item>\n    <ion-item>Belgium</ion-item>\n    <ion-item>Bhutan</ion-item>\n    <ion-item>Bolivia</ion-item>\n    <ion-item>Brazil</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color=\"light\">C</ion-item-divider>\n    <ion-item>Cambodia</ion-item>\n    <ion-item>Cameroon</ion-item>\n    <ion-item>Canada</ion-item>\n    <ion-item>Chile</ion-item>\n    <ion-item>China</ion-item>\n    <ion-item>Colombia</ion-item>\n    <ion-item>Costa Rica</ion-item>\n    <ion-item>Cuba</ion-item>\n    <ion-item>Cyprus</ion-item>\n    <ion-item>Czech Republic</ion-item>\n  </ion-item-group> -->\n\n</ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/dictionary/dictionary-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dictionary/dictionary-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DictionaryPageRoutingModule */

  /***/
  function srcAppPagesDictionaryDictionaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryPageRoutingModule", function () {
      return DictionaryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dictionary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dictionary.page */
    "./src/app/pages/dictionary/dictionary.page.ts");

    var routes = [{
      path: '',
      component: _dictionary_page__WEBPACK_IMPORTED_MODULE_3__["DictionaryPage"]
    }];

    var DictionaryPageRoutingModule = function DictionaryPageRoutingModule() {
      _classCallCheck(this, DictionaryPageRoutingModule);
    };

    DictionaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DictionaryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dictionary/dictionary.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/dictionary/dictionary.module.ts ***!
    \*******************************************************/

  /*! exports provided: DictionaryPageModule */

  /***/
  function srcAppPagesDictionaryDictionaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryPageModule", function () {
      return DictionaryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dictionary-routing.module */
    "./src/app/pages/dictionary/dictionary-routing.module.ts");
    /* harmony import */


    var _dictionary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dictionary.page */
    "./src/app/pages/dictionary/dictionary.page.ts");

    var DictionaryPageModule = function DictionaryPageModule() {
      _classCallCheck(this, DictionaryPageModule);
    };

    DictionaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dictionary_routing_module__WEBPACK_IMPORTED_MODULE_5__["DictionaryPageRoutingModule"]],
      declarations: [_dictionary_page__WEBPACK_IMPORTED_MODULE_6__["DictionaryPage"]]
    })], DictionaryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dictionary/dictionary.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/dictionary/dictionary.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDictionaryDictionaryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpY3Rpb25hcnkvZGljdGlvbmFyeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dictionary/dictionary.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dictionary/dictionary.page.ts ***!
    \*****************************************************/

  /*! exports provided: DictionaryPage */

  /***/
  function srcAppPagesDictionaryDictionaryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryPage", function () {
      return DictionaryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var DictionaryPage = /*#__PURE__*/function () {
      function DictionaryPage(storage) {
        _classCallCheck(this, DictionaryPage);

        this.storage = storage;
        this.my_dict = [];
      }

      _createClass(DictionaryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.storage.get('my_dict').then(function (my_dict) {
            if (my_dict) {
              if (my_dict.length > 0) {
                _this.my_dict = my_dict;
                console.log("my_dict_page");
                console.log(my_dict);
              }
            }
          });
        }
      }]);

      return DictionaryPage;
    }();

    DictionaryPage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    DictionaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dictionary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dictionary.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dictionary/dictionary.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dictionary.page.scss */
      "./src/app/pages/dictionary/dictionary.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], DictionaryPage);
    /***/
  }
}]);
//# sourceMappingURL=dictionary-dictionary-module-es5.js.map