function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ion-page\" id=\"main-content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Search Merriam Webster</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-searchbar [(ngModel)]=\"searchQuery\" (change)=\"search($event)\" autocorrect=\"off\" animated></ion-searchbar>\n    <ion-card *ngIf=\"definitions_one.length > 0\">\n      <ion-card-header>\n        <ion-card-title>{{ searchTerm }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n      <i>1. {{ desc_definitions_one}}</i>\n      <ul>\n        <li *ngFor=\"let definition of definitions_one; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    <ion-card-content>\n      <i *ngIf=\"desc_definitions_two.length > 1\">2. {{ desc_definitions_two}}</i>\n      <ul *ngIf=\"desc_definitions_two.length > 1\">\n        <li *ngFor=\"let definition of definitions_two; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    <ion-card-content>\n      <i *ngIf=\"desc_definitions_three.length > 1\">3. {{ desc_definitions_three}}</i>\n      <ul *ngIf=\"desc_definitions_three.length > 1\">\n        <li *ngFor=\"let definition of definitions_three; let i = index\">{{definition}}</li>\n      </ul>\n    </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"full\" (click)=\"saveWord()\" *ngIf=\"definitions_one.length > 0\">Add to my dictionary</ion-button>  \n  </ion-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/search/search-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/search/search-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SearchPageRoutingModule */

  /***/
  function srcAppPagesSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
      return SearchPageRoutingModule;
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


    var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/pages/search/search.page.ts");

    var routes = [{
      path: '',
      component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }];

    var SearchPageRoutingModule = function SearchPageRoutingModule() {
      _classCallCheck(this, SearchPageRoutingModule);
    };

    SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search/search.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/search/search.module.ts ***!
    \***********************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppPagesSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
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


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/pages/search/search-routing.module.ts");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/pages/search/search.page.ts");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]],
      declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/pages/search/search.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/search/search.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-content {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsZ2F1ZGluL0Rlc2t0b3AvVm9jYWJfZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWNvbnRlbnR7XG4gICAgcGFkZGluZzoxMHB4O1xufSIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/search/search.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/search/search.page.ts ***!
    \*********************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppPagesSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts"); //import { User } from  '../auth/user';
    // import { AuthResponse } from  '../../auth/auth-response';


    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(router, http, storage, authService) {
        _classCallCheck(this, SearchPage);

        this.router = router;
        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.my_dict = [];
        this.current_search = false;
        this.definitions_one = [];
        this.definitions_two = [];
        this.definitions_three = [];
        this.AUTH_SERVER_ADDRESS = 'http://localhost:3000';
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("init");
          this.storage.get('my_dict').then(function (my_dict) {
            if (my_dict) {
              if (my_dict.length > 0) {
                _this.my_dict = my_dict;
              }
            }
          });
          this.storage.get('user_id').then(function (user_id) {
            _this.user_id = user_id;
          });
        }
      }, {
        key: "search",
        value: function search($event) {
          var _this2 = this;

          this.definitions_one = [];
          this.definitions_two = [];
          this.definitions_three = [];
          this.desc_definitions_one = '';
          this.desc_definitions_two = '';
          this.desc_definitions_three = '';
          this.current_search = true;
          this.searchTerm = this.searchQuery.toLowerCase();
          var api_key = '16ae4026-d367-49ba-a295-db9a200ef47c';
          var word_id = this.searchQuery;
          var url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word_id + '?key=' + api_key;
          this.http.get(url).subscribe(function (data) {
            console.log(data);
            _this2.definitions_one = data[0]['shortdef'];
            _this2.desc_definitions_one = data[0]['fl'];

            if (data[1]) {
              if (data[1]['shortdef'].length > 0) {
                _this2.definitions_two = data[1]['shortdef'];
                _this2.desc_definitions_two = data[1]['fl'];
              }
            }

            if (data[2]) {
              if (data[2]['shortdef'].length > 0) {
                _this2.definitions_three = data[2]['shortdef'];
                _this2.desc_definitions_three = data[2]['fl'];
              }
            }
          });
        }
      }, {
        key: "saveWord",
        value: function saveWord() {
          var my_word = {
            word: this.searchTerm,
            info: {
              one: {
                form: this.desc_definitions_one,
                defs: this.definitions_one
              }
            }
          };

          if (this.definitions_two.length > 0) {
            my_word.info["two"] = {
              form: this.desc_definitions_two,
              defs: this.definitions_two
            };
          }

          if (this.definitions_three.length > 0) {
            my_word.info["three"] = {
              form: this.desc_definitions_three,
              defs: this.definitions_three
            };
          }

          this.my_dict.push(my_word);
          console.log("this.my_dict");
          console.log(this.my_dict);
          this.storage.set("my_dict", this.my_dict); //this.user_id = this.storage.get("user_id", res.user.id)

          var current_dict_object = {
            user_id: this.user_id,
            dictionary: my_word
          }; // console.log('current_dict_object')
          // console.log(current_dict_object)

          this.authService.addToDictionary(current_dict_object).subscribe(function (res) {
            console.log("add response");
            console.log(res); //this.router.navigateByUrl('tabs/search');
          });
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search/search.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/pages/search/search.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], SearchPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-module-es5.js.map