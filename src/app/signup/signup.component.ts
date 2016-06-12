import { Component, OnInit } from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'user-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:ControlGroup;
  constructor(public fb:FormBuilder) {
    this.signupForm=fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {
  }

  submitsignupForm(){
    console.log(this.signupForm.value);
/*    Stamplay.User.signup(this.signupForm.value).then((res)=>{
      console.log(res);
    });
*/  }

}
