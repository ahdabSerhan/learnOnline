import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : User;
  constructor(public AuthService:AuthenticationService) { }

  ngOnInit() {
    this.AuthService.getAuth().subscribe(user=>{
      this.user=user;
    });
    }
    login(){
      this.AuthService.loginwithGoogle();

    }
    logout(){
      this.AuthService.logout();
    }

}
