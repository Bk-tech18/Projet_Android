import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the AddCategoriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-categorie',
  templateUrl: 'add-categorie.html',
})
export class AddCategoriePage {
  //public db:DatabaseProvider;
  data = {categ:"" };
  datas= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public db:DatabaseProvider ) {
  //  this.db= db;
  }
  // EnregistrerCateg(){
  //   //this.db.enregistrerCateg();
    
  //     this.db.enregistrerCateg(this.data['categ']);
  //    /* data => {
  //       this.loadDeveloperData();
  //     };*/
  //     this.data.categ = " ";
  //   }

  //   loadCategData() {
  //     this.db.listerCateg().then(data => {
  //       this.datas= data;
  //     });
  //   }
   
      

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddCategoriePage');
  // }

}
