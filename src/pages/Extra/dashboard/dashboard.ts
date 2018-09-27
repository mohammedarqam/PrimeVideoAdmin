import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users : number = 0;
  genres : number = 0;
  langs : number = 0;
  banners : number = 0;

  usersRef = this.db.list("User Data/Users");
  genresRef = this.db.list("Extra Data/Templates/Genres");
  langsRef = this.db.list("Extra Data/Templates/Languages");
  bannersRef = this.db.list("Extra Data/Banners");


  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getUsers();
      this.getGenres();
      this.getLangs();
      this.getBanners();
    }
    
    getUsers(){
      this.usersRef.snapshotChanges().subscribe(snap=>{
        this.users = snap.length;
      })
    }

    getGenres(){
      this.genresRef.snapshotChanges().subscribe(snap=>{
        this.genres = snap.length;
      })
    }
    getLangs(){
      this.langsRef.snapshotChanges().subscribe(snap=>{
        this.langs = snap.length;
      })
    }
    getBanners(){
      this.bannersRef.snapshotChanges().subscribe(snap=>{
        this.banners = snap.length;
      })
    }
}
