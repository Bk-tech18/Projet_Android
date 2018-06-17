import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBilanPage } from './add-bilan';

@NgModule({
  declarations: [
    AddBilanPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBilanPage),
  ],
})
export class AddBilanPageModule {}
