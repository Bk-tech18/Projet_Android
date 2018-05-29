import { Component } from '@angular/core';
import { NavController,App, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
  template: `
  <ion-header>
  <ion-toolbar>
	<button ion-button menuToggle>
      <ion-icon name="home"></ion-icon>
    </button>
    <ion-buttons start>
      <button ion-button icon-only color="royal">
        <ion-icon name="search"></ion-icon>
      </button>
    </ion-buttons>
    <ion-title>article</ion-title>
    <ion-buttons end>
      <button ion-button icon-only color="royal">
      <ion-icon name="add"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
    <ion-tabs>
      <ion-tab tabIcon="heart" [root]="TabsPage"></ion-tab>
      <ion-tab tabIcon="star" [root]="SearchPage"></ion-tab>
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

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

}
