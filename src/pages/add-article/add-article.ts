import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Nav } from 'ionic-angular';

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
	  @ViewChild(Nav) nav: Nav;
	  pages: Array<{title: string, component: any, icon: string}>;

  	  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {

	  
  	}
      EnregistrerArt(){

    }
}
  

