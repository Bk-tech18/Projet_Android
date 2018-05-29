import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CategoriePage } from '../categorie/categorie';



@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {

  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(CategoriePage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriquePage');
  }

}
