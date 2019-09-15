import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
import { SignupComponent } from './app-navbar/authentication/signup/signup.component';
import {LoginComponent} from './app-navbar/authentication/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

//Services
import { AuthenticationService } from './app-navbar/authentication/authentication.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmbedVideo } from 'ngx-embed-video';

import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

import { SafePipeModule } from 'safe-pipe';

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SearchComponent } from './app-navbar/search/search.component';
import { CribsComponent } from './cribs/cribs.component';
import { CribsListingComponent } from './cribs/cribs-listing/cribs-listing.component';
import { CribCardComponent } from './cribs/crib-card/crib-card.component';
import { CribsService } from './cribs/cribs.service';
import { AddCribComponent } from './cribs/add-crib/add-crib.component';
@NgModule({
  declarations: [
    AppComponent,
    CatagoriesListComponent,
    SignupComponent,
    LoginComponent,
    AppNavbarComponent,
    HomePageComponent,
    SearchComponent,
    CribsComponent,
    CribsListingComponent,
    CribCardComponent,
    AddCribComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    // Connecting to Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    SafePipeModule,
    FormsModule



  ],
  providers: [AuthenticationService, CribsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
