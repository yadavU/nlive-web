import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/';
import {SignupComponent} from '../signup/';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';

@Component({
  moduleId: module.id,
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css'],
  directives:[ MD_TABS_DIRECTIVES, LoginComponent, SignupComponent]
})




export class IntroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
