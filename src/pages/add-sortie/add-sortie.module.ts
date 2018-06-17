import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSortiePage } from './add-sortie';

@NgModule({
  declarations: [
    AddSortiePage,
  ],
  imports: [
    IonicPageModule.forChild(AddSortiePage),
  ],
})
export class AddSortiePageModule {}
