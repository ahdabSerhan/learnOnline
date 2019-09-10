import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import { Router, Params } from '@angular/router';
import{User} from '../user';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor( private formBuilder: FormBuilder, private router: Router,  private authenticationService: AuthenticationService,) {
    this.createForm();


     }
     createForm() {
      this.registerForm = this.formBuilder.group({
        email: [null, [Validators.required]],
        password: [null,Validators.required]
      });
    }


    tryGoogleLogin(){
      this.authenticationService.loginwithGoogle()
      .then(res =>{
        this.router.navigate(['/user']);
      }, err => console.log(err)
      )
    }
  ngOnInit() {

  }
  tryRegister(value){
    this.authenticationService.register(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
  get f() { return this.registerForm.controls; }


}
