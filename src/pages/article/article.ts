import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { TabsPage } from '../tabs/tabs';
import { AddarticlePage } from '../add-article/add-article';
//import { FormPage } from 'form-art';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  template: `
  <ion-header>
  <ion-toolbar>
	<button ion-button menuToggle>
      <ion-icon name="home"></ion-icon>
    </button>
    
    <ion-title>Article </ion-title>
    <ion-buttons end>
      <button ion-button icon-only color="royal" (click)="addArticle()" >
      <ion-icon name="md-add"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

   
    <ion-tabs>
      <ion-tab tabIcon="clipboard" [root]="TabsPage"></ion-tab>
      <ion-tab tabIcon="search" [root]="SearchPage">g</ion-tab>
    </ion-tabs>`

})
export class ArticlePage {
  items: Array< string>;

  TabsPage: any;
  SearchPage: any;

  	  constructor(public app: App, public navCtrl: NavController, public navParams: NavParams) {

        this.TabsPage = TabsPage;
        this.SearchPage = SearchPage;
	  this.items = [
	      'a','b','c','d'
	    ];
  	}

  addArticle(){
    
     // let nav = this.app.getRootNav();
     // nav.setRoot(AddarticlePage);
     
		  this.navCtrl.push(AddarticlePage);
		
    }
    
    SupprimerArt(){
      
    }
    ModifierArt(){
      
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
