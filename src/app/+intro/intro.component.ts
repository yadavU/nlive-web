import { Component, OnInit } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {LoginComponent} from '../login/';
import {SignupComponent} from '../signup/';

@Component({
  moduleId: module.id,
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/login' , component: LoginComponent},
  {path: '/signup', component: SignupComponent}
])
export class IntroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
