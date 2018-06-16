import { BrowserModule } from '@angular/platform-browser';
//import { ErrorHandler, NgModule } from '@angular/core';
//import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
//import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 
//import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
 
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
 
//import { DatabaseProvider } from '../providers/database/database';
 
import { SQLitePorter } from '@ionic-native/sqlite-porter';
//import { SQLite } from '@ionic-native/sqlite';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArticlePage } from '../pages/article/article';
import { CategoriePage } from '../pages/categorie/categorie';
import{ AddCategoriePage} from '../pages/add-categorie/add-categorie';
import { HistoriquePage } from '../pages/historique/historique';
import { HelpPage } from '../pages/help/help';
import { SQLitePage } from '../pages/sqlite/sqlite';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { BilanPage } from '../pages/bilan/bilan';
import { EntreePage } from '../pages/entree/entree';
import { SortiePage } from '../pages/sortie/sortie';
import{ AddarticlePage } from '../pages/add-article/add-article';
import { DatabaseProvider } from '../providers/database/database';
import { ModelsProvider } from '../providers/models/models';
//import { FormPage } from '../pages/article/form-art';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArticlePage,
    CategoriePage,
    HistoriquePage,
    HelpPage,
    SQLitePage,
    SearchPage,
    AddarticlePage,
    AddCategoriePage,
    BilanPage,
    EntreePage,
    SortiePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArticlePage,
    CategoriePage,
    HistoriquePage,
    HelpPage,
    SQLitePage,
    SearchPage,
    AddarticlePage,
    AddCategoriePage,
    BilanPage,
    EntreePage,
    SortiePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SQLitePorter,
    DatabaseProvider,
    ModelsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    //{provide: ErrorHandler, useClass: IonicErrorHandler}
      ]
})
export class AppModule {}
