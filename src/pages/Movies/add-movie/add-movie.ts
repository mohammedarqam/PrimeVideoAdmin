import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-add-movie',
  templateUrl: 'add-movie.html',
})
export class AddMoviePage {
  genreTempRef =this.db.list('Extra Data/Templates/Genres');
  langTempRef =this.db.list('Extra Data/Templates/Languages');

  genres: Array<any> = [];
  languages: Array<any> = [];

  moviesRef = this.db.list("Main Data/Movies");
  genreRef = this.db.list("Categorical Data/Genre");
  langRef = this.db.list("Categorical Data/Languages");

  name : string;
  bannerLinkS : string;
  bannerLinkL : string;
  duration : number;
  year : number;
  description : string;
  genre : string;
  lang : string;
  director : string;
  s1 : string;
  s2 : string=null;
  s3 : string=null;
  sup1 : string=null;
  sup2 : string=null;

  constructor(
    public navCtrl: NavController, 
    public db : AngularFireDatabase,
    public toastCtrl : ToastController,
    public navParams: NavParams,
    ) {
      this.getGenres();
      this.getLangs();
    }

    
checkData(){
  if(this.name){
    if(this.duration){
      if(this.year){
        if(this.description){
        if(this.genre){
          if(this.lang){
            if(this.director){
              if(this.s1){
                if(this.bannerLinkS){
                  if(this.bannerLinkL){
                    this.save();
                  }else{this.presentToast("Enter the link for Large Banner")}
                }else{this.presentToast("Enter a link for Small Banner");}
              }else{this.presentToast("Enter atleast 1 Starring");}
            }else{this.presentToast("Enter the Director's Name");}
          }else{this.presentToast("Select Language");}
        }else{this.presentToast("Select a Genre");}
        }else{this.presentToast("Enter a Description");}
      }else{this.presentToast("Enter an Year")}
    }else{this.presentToast("Enter a Duration")}
  }else{this.presentToast("Enter a Valid Name");}
}



save(){
  this.moviesRef.push({
    Name : this.name,
    Duration : this.duration,
    Year : this.year,
    Description : this.description,
    Genre : this.genre,
    Language : this.lang,
    Director : this.director,
    Starrer1 : this.s1,
    Starrer2 : this.s2,
    Starrer3 : this.s3,
    Support1 : this.sup1,
    Support2 : this.sup2,
  }).then((res)=>{
    console.log(res.key);
  })
} 







presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position : "top",
    showCloseButton: false,
  });
  toast.present();
}

  getGenres(){
    this.genreTempRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.genres.push(temp);
      })
    })
  }
  getLangs(){
    this.langTempRef.snapshotChanges().subscribe(snap=>{
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        this.languages.push(temp);
      })
    })
  }

}
