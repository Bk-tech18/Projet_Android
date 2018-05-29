import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {

  items: Array< string>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
        
	  this.items = [
	      'a','b','c','d'
	    ];
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriePage');
  }

}
