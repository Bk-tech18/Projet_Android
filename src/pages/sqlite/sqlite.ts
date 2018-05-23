import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the SqLitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILE_NAME: string ='data.db';

@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SQLitePage {
	private db: SQLiteObject;
  constructor(public navCtrl: NavController, private sqlite: SQLite) {

  	this.createDatabaseFile();
  }

private createDatabaseFile():void{
			this.sqlite.create({
			name: DATABASE_FILE_NAME,
			 location: 'default'
			})
  .then((db: SQLiteObject) => {
  		console.log('bd creer');
  		this.db = db;
  		this.createTables();
   	})
  .catch(e => console.log(e));
	
	}

	private createTables(): void{

		this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIE` (`idCat`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`categorie`	TEXT)', {})

		this.db.executeSql('CREATE TABLE IF NOT EXISTS `OPERATION` (`idOp`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`typeOp`	TEXT)', {})
      	.then(() => {
	      	console.log('CATEGORIE ET OPERATION CREER');

	      	this.db.executeSql('CREATE TABLE IF NOT EXISTS `ARTICLE` (`idArt`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,`designation`	TEXT,`categorieId`	INTEGER,FOREIGN KEY(`categorieId`) REFERENCES idCat)', {})

			this.db.executeSql('CREATE TABLE IF NOT EXISTS `ARTICLEOP` (`Article`	INTEGER NOT NULL,`Operation`	INTEGER NOT NULL,`Date`	TEXT,`Quantite`	NUMERIC,PRIMARY KEY(Article,Operation),FOREIGN KEY(`Article`) REFERENCES idArt,FOREIGN KEY(`Operation`) REFERENCES idOp)', {})

			.then(()=> console.log('ARTICLE ET ARTICLE OPERATION CREER '))
			.catch(e => console.log(e));
			})

	    .catch(e => console.log(e));
      	}
	

  ionViewDidLoad() {
    console.log('ionViewDidLoad SQLitePage');
  }

}
