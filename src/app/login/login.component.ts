import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ControlGroup, FormBuilder} from '@angular/common';
declare var Stamplay;
@Component({
  moduleId: module.id,
  selector: 'user-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  notRegistered : boolean;
  loginForm:ControlGroup;
  constructor(public fb:FormBuilder, public _router:Router) {
    this.loginForm=fb.group({
      email:[''],
      password:[''],

    })
  }

  ngOnInit() {
  }

  submitloginForm(){
    console.log(this.loginForm.value);


    Stamplay.User.login(this.loginForm.value).then((res)=>{
    if(res.emailVerified == true){
      this._router.navigate(['home',{data: res.displayName}]);
  }
  else{
    this._router.navigate(['./signup']);
  }
});
  }

}
