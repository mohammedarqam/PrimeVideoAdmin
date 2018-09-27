import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import moment from 'moment';




@IonicPage()
@Component({
  selector: 'page-addlanguages',
  templateUrl: 'addlanguages.html',
})
export class AddlanguagesPage {

  name : string;
  langRef = firebase.database().ref("Extra Data/Templates/Languages");
  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public toastCtrl : ToastController,
  public navParams: NavParams
  ) {
  }


  checkData(){
    if(this.name){
      this.addCat();
    }else{  
      this.presentToast("Language Title Empty")
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addCat(){
    this.langRef.push({
      Name : this.name,
      TimeStamp : moment().format()
    }).then(()=>{
      this.close();
    })
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
