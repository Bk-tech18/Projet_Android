
import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Nav } from 'ionic-angular';

// importation des différentes pages intervenants dans cette page controller
import { ArticlePage } from '../article/article';
import { CategoriePage } from '../categorie/categorie';
import { HistoriquePage } from '../historique/historique';
//import { HelpPage } from '../help/help';
import { BilanPage } from '../bilan/bilan';
import { EntreePage } from '../entree/entree';
import { SortiePage } from '../sortie/sortie';
//import { SQLitePage } from '../sqlite/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	  @ViewChild(Nav) nav: Nav;
	  pages: Array<{title: string, component: any, icon: string}>;

  	  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {

	  this.pages = [
	      { title: 'Article', component: ArticlePage, icon:'A' },
	      { title: 'Catégorie', component: CategoriePage, icon:'C' },
	      { title: 'Historique', component: HistoriquePage, icon:'H' },
      //  { title: 'Help', component: HelpPage, icon:'?' },
        { title: 'Bilan', component: BilanPage, icon:'B' },
	      { title: 'Entrées', component: EntreePage, icon:'E' },
        { title: 'Sorties', component: SortiePage, icon:'S' }
      //  { title: 'SQLite', component: SQLitePage, icon:'S' }
	    ];
  	}

  openPage(page) {
   
    let nav = this.app.getRootNav();
    nav.setRoot(page.component);
  }
   homePage(){
    
    let nav = this.app.getRootNav();
    nav.setRoot(HomePage);
    }

  //clickPage(){
  //alert("pas click");
  // app est declarer dans le constructeur et le nav est importé
  //let nav = this.app.getRootNav();
  //nav.setRoot(page.component);
  //}
}
  


