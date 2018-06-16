import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
 
@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html'
})
export class CategoriePage {
  categ = {};
  categs = [];
 
  constructor(public navCtrl: NavController, private databaseprovider: DatabaseProvider, private platform: Platform) {
    this.databaseprovider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadcategData();
      }
    })
  }
 
  loadcategData() {
    this.databaseprovider.getAllcategs().then(data => {
      this.categs = data;
    })
  }
 
  addcateg() {
    this.databaseprovider.addcateg(this.categ['name'])
    .then(data => {
      this.loadcategData();
    });
    this.categ = {};
  }
 
}