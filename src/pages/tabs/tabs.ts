import { Component } from '@angular/core';
import { NavController , Platform } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
//import { ArticlePage } from '../article/article';
//import { AddarticlePage } from '../add-article/add-article';
//import { CategoriePage } from '../categorie/categorie';
// tabsPage contient la liste des articles

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  
})
export class TabsPage {

  art = {};
  arts = [];
 
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadartData();
      }
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
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

 
}
