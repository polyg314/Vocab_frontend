function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesExploreExplorePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Explore</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <h3>Add \"Explore\" Section (more on this to come)</h3>\n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/explore/explore-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/explore/explore-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ExplorePageRoutingModule */

  /***/
  function srcAppPagesExploreExploreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function () {
      return ExplorePageRoutingModule;
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


    var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./explore.page */
    "./src/app/pages/explore/explore.page.ts");

    var routes = [{
      path: '',
      component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
    }];

    var ExplorePageRoutingModule = function ExplorePageRoutingModule() {
      _classCallCheck(this, ExplorePageRoutingModule);
    };

    ExplorePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExplorePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/explore/explore.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/explore/explore.module.ts ***!
    \*************************************************/

  /*! exports provided: ExplorePageModule */

  /***/
  function srcAppPagesExploreExploreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function () {
      return ExplorePageModule;
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


    var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./explore-routing.module */
    "./src/app/pages/explore/explore-routing.module.ts");
    /* harmony import */


    var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./explore.page */
    "./src/app/pages/explore/explore.page.ts");

    var ExplorePageModule = function ExplorePageModule() {
      _classCallCheck(this, ExplorePageModule);
    };

    ExplorePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]],
      declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
    })], ExplorePageModule);
    /***/
  },

  /***/
  "./src/app/pages/explore/explore.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/explore/explore.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesExploreExplorePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/explore/explore.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/explore/explore.page.ts ***!
    \***********************************************/

  /*! exports provided: ExplorePage */

  /***/
  function srcAppPagesExploreExplorePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExplorePage", function () {
      return ExplorePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExplorePage = /*#__PURE__*/function () {
      function ExplorePage() {
        _classCallCheck(this, ExplorePage);
      }

      _createClass(ExplorePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExplorePage;
    }();

    ExplorePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-explore',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./explore.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./explore.page.scss */
      "./src/app/pages/explore/explore.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExplorePage);
    /***/
  }
}]);
//# sourceMappingURL=explore-explore-module-es5.js.map