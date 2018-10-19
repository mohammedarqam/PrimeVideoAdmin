import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddMoviePage } from '../add-movie/add-movie';


@IonicPage()
@Component({
  selector: 'page-view-movie',
  templateUrl: 'view-movie.html',
})
export class ViewMoviePage {
  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public navParams: NavParams
  ) {
  }







  addMov(){
    this.navCtrl.push(AddMoviePage);
  }
}
