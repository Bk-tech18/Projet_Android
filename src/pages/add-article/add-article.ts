import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Nav } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
//import { CategoriePage } from '../categorie/categorie';
// importation des différentes pages intervenants dans cette page controller
/*import { ArticlePage } from '../article/article';
import { CategoriePage } from '../categorie/categorie';
import { HistoriquePage } from '../historique/historique';
import { HelpPage } from '../help/help';
import { SQLitePage } from '../sqlite/sqlite';*/

@Component({
  selector: 'page-add-article',
  templateUrl: 'add-article.html'
})
export class AddarticlePage {
  art = {};
  arts = [];
  categos = [];

	  @ViewChild(Nav) nav: Nav;
	  pages: Array<{title: string, component: any, icon: string}>;

  	  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams, private databaseprovider: DatabaseProvider) {
       
    }

    loadcatData() {
      this.databaseprovider.getAllcategs().then(data => {
        this.categos = data;
      })
    }

     loadartData() {
    this.databaseprovider.getArticles().then(data => {
      this.arts = data;
    })
  }
    addart() {//nom, categorieId, QuantiteArt, prixUnit
      this.databaseprovider.addArticle(this.art['nom'], this.art['categorieId'], this.art['QuantiteArt'], this.art['prixUnit'])
      .then(data => {
        this.loadartData();
      });
      this.art = {};
    }
}
  

