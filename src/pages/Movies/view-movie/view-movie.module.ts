import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMoviePage } from './view-movie';

@NgModule({
  declarations: [
    ViewMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMoviePage),
  ],
})
export class ViewMoviePageModule {}
