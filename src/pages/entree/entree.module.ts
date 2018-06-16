import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntreePage } from './entree';

@NgModule({
  declarations: [
    EntreePage,
  ],
  imports: [
    IonicPageModule.forChild(EntreePage),
  ],
})
export class EntreePageModule {}
