import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,ControlGroup} from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'user-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [MD_INPUT_DIRECTIVES]
})
export class SignupComponent implements OnInit {
  registered:boolean=false;
  signupForm:ControlGroup;
  constructor(public fb:FormBuilder, public router:Router) {
    this.signupForm=fb.group({
      email:[''],
      password:[''],
      displayName:['']
    })
  }

  ngOnInit() {
  }

  submitsignupForm(){
    console.log(this.signupForm.value);
    Stamplay.User.signup(this.signupForm.value).then((res)=>{
      console.log("Registered", res);
      this.registered=true;
    },(err)=>{
      this.registered =false;
    });

  }

}
