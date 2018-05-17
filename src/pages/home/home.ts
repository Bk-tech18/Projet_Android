//import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Nav } from 'ionic-angular';

// importation des différentes pages intervenants dans cette page controller
import { ArticlePage } from '../article/article';
import { CategoriePage } from '../categorie/categorie';
import { HistoriquePage } from '../historique/historique';
import { HelpPage } from '../help/help';

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
        { title: 'Help', component: HelpPage, icon:'?' }
	    ];
  	}

  openPage(page) {
    // That's right, we're pushing to ourselves!
    //this.navCtrl.push(ListPage);
    //his.nav.setRoot(page.component);
    let nav = this.app.getRootNav();
    nav.setRoot(page.component);
  }
   homePage(){
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(HomePage);
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
  


