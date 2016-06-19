import { Component, OnInit } from '@angular/core';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

import { DietViewComponent } from '../diet-view/';
import { LoginComponent } from '../login/';
import { SignupComponent } from '../signup/';
import { StamplayTestsComponent } from '../stamplay-tests/';

@Component({
  moduleId: module.id,
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css'],
  directives:[ MD_TABS_DIRECTIVES, LoginComponent, SignupComponent, DietViewComponent, StamplayTestsComponent]
})




export class IntroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
