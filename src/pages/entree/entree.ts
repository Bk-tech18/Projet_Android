import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entree',
  templateUrl: 'entree.html',
 /*  template: `
  <ion-header>
  <ion-toolbar>
	<button ion-button menuToggle>
      <ion-icon name="home"></ion-icon>
    </button>
    
    <ion-title>Entrées </ion-title>
    <ion-buttons end>
      <button ion-button icon-only color="royal"  >
      <ion-icon name="md-add"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
 ` */
})
export class EntreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntreePage');
  }

}
