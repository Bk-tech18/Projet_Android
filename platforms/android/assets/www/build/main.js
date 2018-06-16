webpackJsonp([1],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CategoriePage } from '../../pages/categorie/categorie';
//import { Injectable } from '@angular/core';

//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';





/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DATABASE_FILE_NAME = 'data.db';
var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlitePorter, storage, sqlite, platform, http) {
        var _this = this;
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.http = http;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'developers.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (val) {
                    if (val) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.fillDatabase();
                    }
                });
            });
        });
    }
    DatabaseProvider.prototype.fillDatabase = function () {
        var _this = this;
        this.http.get('assets/dummyDump.sql')
            .map(function (res) { return res.text(); })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql)
                .then(function (data) {
                _this.databaseReady.next(true);
                _this.storage.set('database_filled', true);
            })
                .catch(function (e) { return console.error(e); });
        });
    };
    DatabaseProvider.prototype.addcateg = function (name, skill, years) {
        var data = [name, skill, years];
        return this.database.executeSql("INSERT INTO developer (name, skill, yearsOfExperience) VALUES (?, ?, ?)", data).then(function (data) {
            return data;
        }, function (err) {
            console.log('Error: ', err);
            return err;
        });
    };
    DatabaseProvider.prototype.getAllcategs = function () {
        return this.database.executeSql("SELECT * FROM developer", []).then(function (data) {
            var categs = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    categs.push({ name: data.rows.item(i).name, skill: data.rows.item(i).skill, yearsOfExperience: data.rows.item(i).yearsOfExperience });
                }
            }
            return categs;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    DatabaseProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_database_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriePage = /** @class */ (function () {
    function CategoriePage(navCtrl, databaseprovider, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.databaseprovider = databaseprovider;
        this.platform = platform;
        this.categ = {};
        this.categs = [];
        this.databaseprovider.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
                _this.loadcategData();
            }
        });
    }
    CategoriePage.prototype.loadcategData = function () {
        var _this = this;
        this.databaseprovider.getAllcategs().then(function (data) {
            _this.categs = data;
        });
    };
    CategoriePage.prototype.addcateg = function () {
        var _this = this;
        this.databaseprovider.addcateg(this.categ['name'], this.categ['skill'], parseInt(this.categ['yearsOfExperience']))
            .then(function (data) {
            _this.loadcategData();
        });
        this.categ = {};
    };
    CategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-categorie',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/categorie/categorie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Developer Data\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>What\'s your name?</ion-label>\n    <ion-input [(ngModel)]="categ.name" placeholder="categ Name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>What\'s your special skill?</ion-label>\n    <ion-input [(ngModel)]="categ.skill" placeholder="Special Skill"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>How long have you been working?</ion-label>\n    <ion-input [(ngModel)]="categ.yearsOfExperience" placeholder="Years of experience"></ion-input>\n  </ion-item>\n  <button ion-button full (click)="addcateg()">Add Developer Info</button>\n \n  <ion-list>\n    <ion-item *ngFor="let dev of categs">\n      <h2>{{ dev.name }}</h2>\n      <p>{{ dev.yearsOfExperience }} years of {{ dev.skill }} Experience!</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/categorie/categorie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */]])
    ], CategoriePage);
    return CategoriePage;
}());

//# sourceMappingURL=categorie.js.map

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-categorie/add-categorie.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_article__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorie_categorie__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historique_historique__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sqlite_sqlite__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__help_help__["a" /* HelpPage */], icon: '?' },
            { title: 'SQLite', component: __WEBPACK_IMPORTED_MODULE_6__sqlite_sqlite__["a" /* SQLitePage */], icon: 'S' }
        ];
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openPage = function (page) {
        var nav = this.app.getRootNav();
        nav.setRoot(page.component);
    };
    HomePage.prototype.homePage = function () {
        var nav = this.app.getRootNav();
        nav.setRoot(HomePage_1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n    <ion-title>\n      SGStock\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!--button ion-button icon-left>\n  <ion-icon name="home"></ion-icon>\n  Left Icon\n</button-->\n<ion-grid text-center class="couleur-bleu">\n  <ion-row >\n    <ion-col col-6 *ngFor="let p of pages">\n      <button ion-button outline (click)="openPage(p)">{{p.icon}}</button><br> {{p.title}}\n      </ion-col>\n    \n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_article_add_article__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { FormPage } from 'form-art';
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
    ArticlePage.prototype.addArticle = function () {
        // let nav = this.app.getRootNav();
        // nav.setRoot(AddarticlePage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_article_add_article__["a" /* AddarticlePage */]);
    };
    ArticlePage.prototype.SupprimerArt = function () {
    };
    ArticlePage.prototype.ModifierArt = function () {
    };
    ArticlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticlePage');
    };
    ArticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-article',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/article/article.html"*/'<!--\n  Generated template for the ArticlePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n	<button ion-button menuToggle>\n      <ion-icon name="home"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>article</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="person-add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!--h2>Add Data</h2>\n  <form (ngSubmit)="saveData()">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime->\n    </ion-item>\n    <ion-item>\n      <ion-label>Catégorie</ion-label>\n      <ion-select  name="categorie" [(ngModel)]="categorie" required="">\n        <ion-option value="Income">Income</ion-option>\n        <ion-option value="Expense">Expense</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Désignation</ion-label>\n      <ion-input type="text" placeholder="Désignation" name="Désignation" required="" ></ion-input>\n    </ion-item>\n    \n    <button ion-button type="submit" block>Save Data</button>\n  </form-->\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button>  \n  </ion-list>\n  \n</ion-content>'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/article/article.html"*/,
            template: "\n  <ion-header>\n  <ion-toolbar>\n\t<button ion-button menuToggle>\n      <ion-icon name=\"home\"></ion-icon>\n    </button>\n    \n    <ion-title>Article </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color=\"royal\" (click)=\"addArticle()\" >\n      <ion-icon name=\"md-add\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n   \n    <ion-tabs>\n      <ion-tab tabIcon=\"clipboard\" [root]=\"TabsPage\"></ion-tab>\n      <ion-tab tabIcon=\"search\" [root]=\"SearchPage\">g</ion-tab>\n    </ion-tabs>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ArticlePage);
    return ArticlePage;
}());

//# sourceMappingURL=article.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-search',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\ninterface pour effectuer de la recherche sur les articles\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n<ion-list>\n  <ion-item *ngFor="let item of items">\n    {{ item }}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ArticlePage } from '../article/article';
//import { AddarticlePage } from '../add-article/add-article';
//import { CategoriePage } from '../categorie/categorie';
// tabsPage contient la liste des articles
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, app, navParams) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.navParams = navParams;
        /*cat: CategoriePage = new CategoriePage();
        cat.detail;*/
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/tabs/tabs.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ajouter Article</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <!--button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n      {{ item }}\n    </button-->  \n    ## ici seront afficher les différents articles\n   </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddarticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// importation des différentes pages intervenants dans cette page controller
/*import { ArticlePage } from '../article/article';
import { CategoriePage } from '../categorie/categorie';
import { HistoriquePage } from '../historique/historique';
import { HelpPage } from '../help/help';
import { SQLitePage } from '../sqlite/sqlite';*/
var AddarticlePage = /** @class */ (function () {
    function AddarticlePage(app, navCtrl, navParams) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddarticlePage.prototype.EnregistrerArt = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], AddarticlePage.prototype, "nav", void 0);
    AddarticlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-article',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/add-article/add-article.html"*/'<!--\n  Generated template for the TabsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Ajouter Article</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <!--button ion-item *ngFor="let item of items" (click)="itemSelected(item)">\n        {{ item }}\n      </button-->  \n     \n      <ion-item>\n        <ion-label >Nom:</ion-label><ion-input type="text"></ion-input>\n      </ion-item>\n      \n      <ion-item> \n      <ion-label >Catégorie</ion-label>\n      <ion-select [(ngModel)]="gaming">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n        <ion-option value="ps">PlayStation</ion-option>\n        <ion-option value="genesis">Sega Genesis</ion-option>\n        <ion-option value="saturn">Sega Saturn</ion-option>\n        <ion-option value="snes">SNES</ion-option>\n      </ion-select>\n  \n      </ion-item>\n      <ion-item>\n          <ion-label >Quantité:</ion-label><ion-input type="text"></ion-input>\n          </ion-item>\n      <ion-item>\n      <ion-label >Prix Unitaire:</ion-label><ion-input type="text"></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button outline >Enregistrer</button>\n      </div>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/add-article/add-article.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddarticlePage);
    return AddarticlePage;
}());

//# sourceMappingURL=add-article.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoriquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorie_categorie__ = __webpack_require__(152);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HistoriquePage);
    return HistoriquePage;
}());

//# sourceMappingURL=historique.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(90);
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
        this.data = { categ: "" };
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
    SQLitePage.prototype.Enregistrer = function () {
        var _this = this;
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('insert into `CATEGORIE` (`categorie`) values (null,?)', [_this.data.categ]);
        }).catch(function (e) { return console.log(e); });
    };
    SQLitePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SQLitePage');
    };
    SQLitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sqlite',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/sqlite/sqlite.html"*/'<!--\n  Generated template for the SqLitePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <button ion-button menuToggle>\n        <ion-icon name="home"></ion-icon>\n      </button>\n      \n      <ion-title>SQLitePage</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="royal">\n          <ion-icon name="md-add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="Enregistrer()">\n\n    <ion-item>\n      <ion-label floating>Catégorie</ion-label>\n      <ion-input type="text" [(ngModel)]="data.categ" name="categ" required=""></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <button ion-button type="submit" outline >Enregistrer</button>\n    </ion-item>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/sqlite/sqlite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLitePage);
    return SQLitePage;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(116);
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
 * Generated class for the AddCategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCategoriePage = /** @class */ (function () {
    function AddCategoriePage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        //public db:DatabaseProvider;
        this.data = { categ: "" };
        this.datas = [];
        //  this.db= db;
    }
    AddCategoriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-categorie',template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/pages/add-categorie/add-categorie.html"*/'<!--\n  Generated template for the AddCategoriePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>add-categorie</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n hello\n <!--form (ngSubmit)="EnregistrerCateg()">\n <ion-item>\n    <ion-label >Catégorie</ion-label>\n    <ion-input type="text" [(ngModel)]="data.categ" name="categ"></ion-input>\n    </ion-item>\n <div padding>\n    <button ion-button outline type="submit">enregistrer</button>\n  </div>\n</form-->\n</ion-content>\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/pages/add-categorie/add-categorie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */]])
    ], AddCategoriePage);
    return AddCategoriePage;
}());

//# sourceMappingURL=add-categorie.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_article_article__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_categorie_categorie__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_categorie_add_categorie__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_help_help__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sqlite_sqlite__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_article_add_article__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_database_database__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_models_models__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ErrorHandler, NgModule } from '@angular/core';
//import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';

//import { BrowserModule } from '@angular/platform-browser';




//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';


//import { SQLite } from '@ionic-native/sqlite';













//import { FormPage } from '../pages/article/form-art';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_categorie_categorie__["a" /* CategoriePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_article_add_article__["a" /* AddarticlePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_categorie_add_categorie__["a" /* AddCategoriePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-categorie/add-categorie.module#AddCategoriePageModule', name: 'AddCategoriePage', segment: 'add-categorie', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_article_article__["a" /* ArticlePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_categorie_categorie__["a" /* CategoriePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_historique_historique__["a" /* HistoriquePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sqlite_sqlite__["a" /* SQLitePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_article_add_article__["a" /* AddarticlePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_categorie_add_categorie__["a" /* AddCategoriePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_19__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_models_models__["a" /* ModelsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
                //{provide: ErrorHandler, useClass: IonicErrorHandler}
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(347);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/koassa/projetMobile/SGStock/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item  (click)="homePage()"> \n      <!--button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"\n        {{p.title}} 	--> HOME\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n'/*ion-inline-end:"/home/koassa/projetMobile/SGStock/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ModelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ModelsProvider = /** @class */ (function () {
    function ModelsProvider(http) {
        this.http = http;
        console.log('Hello ModelsProvider Provider');
    }
    ModelsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ModelsProvider);
    return ModelsProvider;
}());

//# sourceMappingURL=models.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map