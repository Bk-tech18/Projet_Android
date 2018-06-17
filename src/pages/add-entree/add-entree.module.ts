import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEntreePage } from './add-entree';

@NgModule({
  declarations: [
    AddEntreePage,
  ],
  imports: [
    IonicPageModule.forChild(AddEntreePage),
  ],
})
export class AddEntreePageModule {}
