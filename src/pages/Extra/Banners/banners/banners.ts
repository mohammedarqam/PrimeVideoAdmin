import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
import { AddBannersPage } from '../add-banners/add-banners';



@IonicPage()
@Component({
  selector: 'page-banners',
  templateUrl: 'banners.html',
})
export class BannersPage {

  public banners: Array<any> = [];


  bannerRef = firebase.database().ref("Extra Data/Banners");


  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController, ) {
  }

  ionViewDidLoad() {
    this.getBanners();
  }
  getBanners() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.bannerRef.once('value', itemSnapshot => {
      this.banners = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.banners.push(temp);
        return false;
      });
    }).then(() => {
      loading.dismiss();
    });
  }

  gtAddBanner(){
    this.navCtrl.push(AddBannersPage);
  }



  deleteBanner(banner) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Banner ?',
      message: 'This banner cannot be recovered again',
      buttons: [
        {
          text: 'No, Its a mistake',
          handler: () => {

          }
        },
        {
          text: 'Yes, I understand',
          handler: () => {
            this.delete(banner);
          }
        }
      ]
    });
    confirm.present();
  }


  delete(banner) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    firebase.storage().ref("Extra Data/Banners/").child(banner.Name).delete().then(() => {
      this.bannerRef.child(banner.key).remove().then(() => {
        this.getBanners();
        this.presentToast();
      }).then(()=>{
        loading.dismiss();
      }) ;
  
    });
 }




/*  delete(banner) {
  }
*/



  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Banner Deleted',
      duration: 4000,
    });
    toast.present();
  }

}
