import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BilanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bilan',
  templateUrl: 'bilan.html',
  /* template: `
  <ion-header>
  <ion-toolbar>
	<button ion-button menuToggle>
      <ion-icon name="home"></ion-icon>
    </button>
    
    <ion-title>Article </ion-title>
    <ion-buttons end>
      <button ion-button icon-only color="royal"  >
      <ion-icon name="md-add"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
 ` */
})
export class BilanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilanPage');
  }

}
