import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ControlGroup, FormBuilder} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:ControlGroup;
  constructor(public fb:FormBuilder, public _router:Router) {
    this.loginForm=fb.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit() {
  }

  submitloginForm(){
    console.log(this.loginForm.value);
    this._router.navigate(['home']);
    /*Stamplay.User.login(this.loginForm.value).then((res)=>{
    if(res.emailVerified){
      this._router.navigate(['home',{data: res})
  }
});*/
  }

}
