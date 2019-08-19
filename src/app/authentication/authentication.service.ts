import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user:Observable<firebase.User>;
  constructor(public afAuth:AngularFireAuth) {
    this.user=afAuth.authState;
   }
   loginwithGoogle(){
     const provider= new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider);

   }
   logout(){
     this.afAuth.auth.signOut();
   }
}
