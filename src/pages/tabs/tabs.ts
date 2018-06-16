import { Component } from '@angular/core';
import { NavController, NavParams ,App} from 'ionic-angular';
//import { ArticlePage } from '../article/article';
//import { AddarticlePage } from '../add-article/add-article';
//import { CategoriePage } from '../categorie/categorie';
// tabsPage contient la liste des articles

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
  
})
export class TabsPage {

  constructor(public navCtrl: NavController,public app: App, public navParams: NavParams) {
    /*cat: CategoriePage = new CategoriePage();
    cat.detail;*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

 
}
