import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArticlePage } from '../pages/article/article';
import { CategoriePage } from '../pages/categorie/categorie';
import { HistoriquePage } from '../pages/historique/historique';
import { HelpPage } from '../pages/help/help';
import { SQLitePage } from '../pages/sqlite/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArticlePage,
    CategoriePage,
    HistoriquePage,
    HelpPage,
    SQLitePage
  ],
  imports: [
    BrowserModule,
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
    SQLitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
      ]
})
export class AppModule {}
