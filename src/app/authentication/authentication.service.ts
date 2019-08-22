import { Injectable } from '@angular/core';
import {AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {User} from './user';
import {switchMap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user$:Observable<any>;
  constructor(public afAuth:AngularFireAuth,
    public afs:AngularFirestore) {
      this.user$ = this.afAuth.authState
      .pipe(switchMap(user => {
      if (user) {
      return this.afs.doc<User>(`users/$(user.uid)`).valueChanges()
      } else {
      return of(null)
      }
      }))

      }

   loginwithGoogle(){

     const provider= new firebase.auth.GoogleAuthProvider();
     return this.oAuthLogin(provider);


   }
   private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUser(credential.user)
        // this.flashMessagesService.show("Logged in", {
        //   cssClass: "alert-success",
        //   timeout: 10000
        // });
      })
      .catch(err => {
        // this.flashMessagesService.show(err.message, {
        //   cssClass: "alert-danger",
        //   timeout: 10000
        // });
        console.log(err)
      });
  }
   updateUser(user){
     const userRef: AngularFirestoreDocument<any>= this.afs.doc(`users/${user.uid}`);
    const data : User={
      uid:user.uid,
      email :user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: {
        subscriber : true,
        admin:false
      }

    }

    return  userRef.set(data).catch((err) => {
      userRef.set(data);
      console.log(err);
    });
   }
   getAuth() {
     return this.afAuth.authState;
  }
   logout(){
     this.afAuth.auth.signOut();
   }
}
