import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  loginfailed : boolean=false;
  loginForm:ControlGroup;
  @Output() loginevent:EventEmitter<any>=new EventEmitter();

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
      this.loginevent.emit(null);

  //  Stamplay.User.login(this.loginForm.value).then((res)=>{
      let displayName = 'loginName';
      this._router.navigate(['/home', displayName]);


    this.loginfailed=false;

//}, (err)=>{
//  this.loginfailed=true;
//});
  }

}
