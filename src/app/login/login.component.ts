import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router} from '@angular/router';
import { ControlGroup, FormBuilder } from '@angular/common';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

declare var Stamplay;
declare var require;

@Component({
  moduleId: module.id,
  selector: 'user-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives : [ MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LoginComponent implements OnInit {
  loginfailed : boolean=false;
  loginForm:ControlGroup;
  @Output() loginevent:EventEmitter<any>=new EventEmitter();

  constructor(public fb:FormBuilder, public router:Router) {
    this.loginForm=fb.group({

      email:[''],
      password:[''],
  })
  }

  ngOnInit() {
  }

  submitloginForm(){
    Stamplay.User.login(this.loginForm.value).then((res)=>{
      console.log(res);
      this.loginevent.emit(res.displayName);

      this.loginfailed=false;
  }, (err)=>{
    this.loginfailed=true;
    console.log(err);

    });
  }

}
