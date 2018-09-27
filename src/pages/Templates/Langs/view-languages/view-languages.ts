import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { AddlanguagesPage } from '../addlanguages/addlanguages';

@IonicPage()
@Component({
  selector: 'page-view-languages',
  templateUrl: 'view-languages.html',
})
export class ViewLanguagesPage {

  genreRef =this.db.list('Extra Data/Templates/Languages');
  languages: Array<any> = [];
  languagesLoaded: Array<any> = [];



  languagesRef = firebase.database().ref("Extra Data/Templates/Languages");

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
      this.languages = tempArray;
      this.languagesLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.languages = this.languagesLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.languages = this.languages.filter((v) => {
      if(v.Name && q) {
        if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }



  gtAddGenre(){
    let languagesAdd = this.modalCtrl.create(AddlanguagesPage,null,{enableBackdropDismiss : false});
    languagesAdd.present();
  }


  deleteGenre(cat) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Language ?',
      message: 'This language cannot be recovered again',
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


  delete(language) {

      this.languagesRef.child(language.key).remove().then(() => {
        this.presentToast('Language Deleted');
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
