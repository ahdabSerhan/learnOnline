import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../app-navbar/authentication/authentication.service';
import {User} from './authentication/user';
import { CatagoreyService } from "../catagories/catagorey.service";
import{CatagoriesListComponent} from "../catagories/catagories-list/catagories-list.component"
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
      console.log("catagorey from the app navbar");

    });
    }
    logout(){
      console.log("this is logout");
      this.AuthService.logout();

    }





}
