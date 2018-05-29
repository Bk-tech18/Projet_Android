webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorie_categorie__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historique_historique__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';


// importation des différentes pages intervenants dans cette page controller




var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'Article', component: __WEBPACK_IMPORTED_MODULE_2__article_article__["a" /* ArticlePage */], icon: 'A' },
            { title: 'Catégorie', component: __WEBPACK_IMPORTED_MODULE_3__categorie_categorie__["a" /* CategoriePage */], icon: 'C' },
            { title: 'Historique', component: __WEBPACK_IMPORTED_MODULE_4__historique_historique__["a" /* HistoriquePage */], icon: 'H' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__help_help__["a" /* HelpPage */], icon: '?' }
        ];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openPage = function (page) {
        // That's right, we're pushing to ourselves!
        //this.navCtrl.push(ListPage);
        //his.nav.setRoot(page.component);
        var nav = this.app.getRootNav();
        nav.setRoot(page.component);
    };
    HomePage.prototype.homePage = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(HomePage);
        var nav = this.app.getRootNav();
        nav.setRoot(HomePage_1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n    <ion-title>\n      SGStock\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--button ion-button icon-left>\n  <ion-icon name="home"></ion-icon>\n  Left Icon\n</button-->\n<ion-grid text-center class="couleur-bleu">\n  <ion-row >\n    <ion-col col-6 *ngFor="let p of pages">\n      <button ion-button outline (click)="openPage(p)">{{p.icon}}</button><br> {{p.title}}\n      </ion-col>\n    \n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlePage = /** @class */ (function () {
    function ArticlePage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TabsPage = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.SearchPage = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.items = [
            'a', 'b', 'c', 'd'
        ];
    }
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n	<button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>article</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--h2>Add Data</h2>\n  <form (ngSubmit)="saveData()">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime->\n    </ion-item>\n    <ion-item>\n      <ion-label>Catégorie</ion-label>\n      <ion-select  name="categorie" [(ngModel)]="categorie" required="">\n        <ion-option value="Income">Income</ion-option>\n        <ion-option value="Expense">Expense</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Désignation</ion-label>\n      <ion-input type="text" placeholder="Désignation" name="Désignation" required="" ></ion-input>\n    </ion-item>\n    \n    <button ion-button type="submit" block>Save Data</button>\n  </form-->\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>  \n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/article/article.html"*/,
            template: "\n  <ion-header>\n  <ion-toolbar>\n\t<button ion-button menuToggle>\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only color=\"royal\">\n        <ion-icon name=\"search\"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>article</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color=\"royal\">\n      <ion-icon name=\"add\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n    <ion-tabs>\n      <ion-tab tabIcon=\"heart\" [root]=\"TabsPage\"></ion-tab>\n      <ion-tab tabIcon=\"star\" [root]=\"SearchPage\"></ion-tab>\n    </ion-tabs>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object])
    ], ArticlePage);
    return ArticlePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriePage = /** @class */ (function () {
    function CategoriePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            'a', 'b', 'c', 'd'
        ];
    }
    CategoriePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriePage');
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorie',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/categorie/categorie.html"*/'<!--\n  Generated template for the CategoriePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <button ion-button menuToggle>\n        <ion-icon name="home"></ion-icon>\n      </button>\n      \n      <ion-title>categorie</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="person-add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Catégorie</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <button ion-button outline >Enregistrer</button>\n    </ion-item>\n  \n  </ion-list>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }} <!--ion-checkbox disabled="true"></ion-checkbox-->\n    </button>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/categorie/categorie.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], CategoriePage);
    return CategoriePage;
    var _a, _b;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie_categorie__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoriquePage = /** @class */ (function () {
    function HistoriquePage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    HistoriquePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__categorie_categorie__["a" /* CategoriePage */]);
        modal.present();
    };
    HistoriquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoriquePage');
    };
    HistoriquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historique',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/historique/historique.html"*/'<!--\n  Generated template for the HistoriquePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n  \n    <ion-title>historique</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/historique/historique.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _a || Object])
    ], HistoriquePage);
    return HistoriquePage;
    var _a;
}());

//# sourceMappingURL=historique.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n	<button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n  \n    <ion-title>help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_article_article__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categorie_categorie__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_historique_historique__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sqlite_sqlite__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_categorie_categorie__["a" /* CategoriePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_categorie_categorie__["a" /* CategoriePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { App, NavController, NavParams, Nav } from 'ionic-angular';



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'H' }
        ];
    }
    MyApp.prototype.homePage = function () {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        //let nav = this.app.getRootNav();
        //nav.setRoot(HomePage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item  (click)="homePage()"> \n      <!--button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"\n        {{p.title}} 	--> HOME\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/search/search.html"*/,
            template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Star</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>Tab 2</ion-content>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tabs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/tabs/tabs.html"*/,
            template: "\n  <ion-header>\n    <ion-navbar>\n      <ion-title>Heart</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>TabsPage</ion-content>"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], TabsPage);
    return TabsPage;
    var _a, _b;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SqLitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DATABASE_FILE_NAME = 'data.db';
var SQLitePage = /** @class */ (function () {
    function SQLitePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.createDatabaseFile();
    }
    SQLitePage.prototype.createDatabaseFile = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            console.log('bd creer');
            _this.db = db;
            _this.createTables();
        })
            .catch(function (e) { return console.log(e); });
    };
    SQLitePage.prototype.createTables = function () {
        var _this = this;
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIE` (`idCat`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`categorie`	TEXT)', {});
        this.db.executeSql('CREATE TABLE IF NOT EXISTS `OPERATION` (`idOp`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`typeOp`	TEXT)', {})
            .then(function () {
            console.log('CATEGORIE ET OPERATION CREER');
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `ARTICLE` (`idArt`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`designation`	TEXT,`categorieId`	INTEGER,FOREIGN KEY(`categorieId`) REFERENCES idCat)', {});
            _this.db.executeSql('CREATE TABLE IF NOT EXISTS `ARTICLEOP` (`Article`	INTEGER NOT NULL,`Operation`	INTEGER NOT NULL,`Date`	TEXT,`Quantite`	NUMERIC,PRIMARY KEY(Article,Operation),FOREIGN KEY(`Article`) REFERENCES idArt,FOREIGN KEY(`Operation`) REFERENCES idOp)', {})
                .then(function () { return console.log('ARTICLE ET ARTICLE OPERATION CREER '); })
                .catch(function (e) { return console.log(e); });
        })
            .catch(function (e) { return console.log(e); });
    };
    SQLitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SQLitePage');
    };
    SQLitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sqlite',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/sqlite/sqlite.html"*/'<!--\n  Generated template for the SqLitePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SQLitePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/sqlite/sqlite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLitePage);
    return SQLitePage;
}());

//# sourceMappingURL=sqlite.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map