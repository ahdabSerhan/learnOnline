import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
import { SignupComponent } from './authentication/signup/signup.component';
import {LoginComponent} from './authentication/login/login.component';


//Services
import { AuthenticationService } from './authentication/authentication.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    CatagoriesListComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Connecting to Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
