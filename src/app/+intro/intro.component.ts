import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';


import { LoginComponent } from '../login/';
import { SignupComponent } from '../signup/';


@Component({
  moduleId: module.id,
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css'],
  directives:[ MD_TABS_DIRECTIVES, LoginComponent, SignupComponent ]
})




export class IntroComponent implements OnInit {
  @Output() loggedin:EventEmitter<any> = new EventEmitter();
  constructor(private router : Router) {}

  ngOnInit() {
  }
  userloggedin(){
    this.loggedin.emit(null);
    this.router.navigate(['/']);
    console.log("recorded in intro component");

  }
}
