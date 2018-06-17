import { Component, ViewChild } from '@angular/core';
import { App, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
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

  	  constructor(public alertCtrl: AlertController,public app: App, public navCtrl: NavController, public navParams: NavParams, private databaseprovider: DatabaseProvider) {
       this.loadcatData();
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
    addart() {
      if ( this.art['nom']!= null && this.art['categorieId'] != null && parseInt(this.art['QuantiteArt']) != null && parseInt(this.art['prixUnit']) != null){
      this.databaseprovider.addArticle(this.art['nom'], this.art['categorieId'], parseInt(this.art['QuantiteArt']), parseInt(this.art['prixUnit']))
      .then(data => {
       // this.loadartData();
        this.showAlert();
      });
     this.art = {};
    } else{
      const alert = this.alertCtrl.create({
        title: 'Information!',
        subTitle: 'Echec, le champs est vide!',
        buttons: ['OK']
      });
      alert.present();
    }
    }
    showAlert() {
      const alert = this.alertCtrl.create({
        title: 'Information!',
        subTitle: 'Enregistrer avec succès!',
        buttons: ['OK']
      });
      alert.present();
    }
}
  

