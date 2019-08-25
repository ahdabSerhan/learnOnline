import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../app-navbar/authentication/authentication.service';
import {User} from '../app-navbar/authentication/user';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  user : User;
  constructor(public AuthService:AuthenticationService) { }

  ngOnInit() {
    this.AuthService.getAuth().subscribe(user=>{
      this.user=user;
    });
    }
    logout(){
      console.log("this is logout");
      this.AuthService.logout();

    }





}
