import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AuthService:AuthenticationService) { }

  ngOnInit() {

    }
    login(){
      this.AuthService.loginwithGoogle();

    }
    logout(){
      this.AuthService.logout();
    }

}
