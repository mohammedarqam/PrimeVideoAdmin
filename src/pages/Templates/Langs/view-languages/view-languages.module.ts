import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewLanguagesPage } from './view-languages';

@NgModule({
  declarations: [
    ViewLanguagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewLanguagesPage),
  ],
})
export class ViewLanguagesPageModule {}
