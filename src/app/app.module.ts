import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { CatagoriesListComponent } from './catagories/catagories-list/catagories-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CatagoriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Connecting to Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
