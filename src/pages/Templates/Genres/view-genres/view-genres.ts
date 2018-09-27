import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AddGenresPage } from '../add-genres/add-genres';


@IonicPage()
@Component({
  selector: 'page-view-genres',
  templateUrl: 'view-genres.html',
})
export class ViewGenresPage {

  genreRef =this.db.list('Extra Data/Templates/Genres');
  genres: Array<any> = [];
  genresLoaded: Array<any> = [];



  genresRef = firebase.database().ref("Extra Data/Templates/Genres");

  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public toastCtrl : ToastController,
  public alertCtrl: AlertController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
    this.getCats();
  }

  getCats(){
    this.genreRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.genres = tempArray;
      this.genresLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.genres = this.genresLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.genres = this.genres.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddGenre(){
    let genresAdd = this.modalCtrl.create(AddGenresPage,null,{enableBackdropDismiss : false});
    genresAdd.present();
  }


  deleteGenre(cat) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Genre ?',
      message: 'This genre cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(cat);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(genre) {

      this.genresRef.child(genre.key).remove().then(() => {
        this.presentToast('Genre Deleted');
      });
 }

 presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position :"bottom"
    
  });
  toast.present();
}



}
