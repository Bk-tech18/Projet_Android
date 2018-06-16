import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCategoriePage } from './add-categorie';

@NgModule({
  declarations: [
    AddCategoriePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCategoriePage),
  ],
})
export class AddCategoriePageModule {}
