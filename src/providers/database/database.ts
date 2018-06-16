import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { CategoriePage } from '../../pages/categorie/categorie';
//import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const DATABASE_FILE_NAME: string ='data.db';

@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'DATABASE_FILE_NAME',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }
 
  fillDatabase() {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }
 // les categories
  addcateg(name) {
    let data = [name]
    return this.database.executeSql("INSERT INTO Categorie (name) VALUES (?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
 
  getAllcategs() {
    return this.database.executeSql("SELECT * FROM Categorie", []).then((data) => {
      let categs = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          categs.push({ name: data.rows.item(i).name });
        }
      }
      return categs;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 // les articles
// nom	TEXT, categorieId	INTEGER,QuantiteArt	NUMERIC,prixUnit NUMERIC,
 addArticle(nom, categorieId, QuantiteArt, prixUnit) {
  let data = [nom, categorieId, QuantiteArt, prixUnit]
  return this.database.executeSql("INSERT INTO  ARTICLE (nom, categorieId, QuantiteArt, prixUnit) VALUES (?,?,?,?)", data).then(data => {
    return data;
  }, err => {
    console.log('Error: ', err);
    return err;
  });
}

getArticles() {
  return this.database.executeSql("SELECT * FROM  ARTICLE", []).then((data) => {
    let categs = [];
    if (data.rows.length > 0) {
      for (var i = 0; i < data.rows.length; i++) {
        categs.push({ name: data.rows.item(i).nom });
      }
    }
    return categs;
  }, err => {
    console.log('Error: ', err);
    return [];
  });
}

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}