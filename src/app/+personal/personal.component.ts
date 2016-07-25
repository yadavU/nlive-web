import { Component, OnInit, Input } from '@angular/core';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';


import { InfoComponent } from '../info/';
import { PreferencesComponent } from '../preferences/';

declare var require;

@Component({
  moduleId: module.id,
  selector: 'app-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives : [ InfoComponent, PreferencesComponent , MD_TABS_DIRECTIVES ]
})

export class PersonalRoute implements OnInit {
  @Input() activeUser
  constructor() {}

  ngOnInit() {
  }

}
