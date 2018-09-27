import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddGenresPage } from './add-genres';

@NgModule({
  declarations: [
    AddGenresPage,
  ],
  imports: [
    IonicPageModule.forChild(AddGenresPage),
  ],
})
export class AddGenresPageModule {}
