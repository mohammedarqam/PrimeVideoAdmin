import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';
import { UserOptionsPage } from '../pages/Users/user-options/user-options';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { ViewGenresPage } from '../pages/Templates/Genres/view-genres/view-genres';
import { AddGenresPage } from '../pages/Templates/Genres/add-genres/add-genres';
import { ViewLanguagesPage } from '../pages/Templates/Langs/view-languages/view-languages';
import { AddlanguagesPage } from '../pages/Templates/Langs/addlanguages/addlanguages';
import { ViewMoviePage } from '../pages/Movies/view-movie/view-movie';
import { AddMoviePage } from '../pages/Movies/add-movie/add-movie';
import { AddBannersPage } from '../pages/Extra/Banners/add-banners/add-banners';
import { BannersPage } from '../pages/Extra/Banners/banners/banners';



export const firebaseCred = {
  apiKey: "AIzaSyC_iVRm8hUe2ZBaGM68As9jZ9rb0Ve7BlM",
  authDomain: "primevideo-c14a3.firebaseapp.com",
  databaseURL: "https://primevideo-c14a3.firebaseio.com",
  projectId: "primevideo-c14a3",
  storageBucket: "primevideo-c14a3.appspot.com",
  messagingSenderId: "31035557511"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    ViewGenresPage,
    AddGenresPage,
    ViewLanguagesPage,
    AddlanguagesPage,
    ViewMoviePage,
    AddMoviePage,
    AddBannersPage,
    BannersPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
    ViewGenresPage,
    AddGenresPage,
    ViewLanguagesPage,
    AddlanguagesPage,
    ViewMoviePage,
    AddMoviePage,
    AddBannersPage,
    BannersPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
