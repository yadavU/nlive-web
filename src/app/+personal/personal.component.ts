import { Component, OnInit, Input } from '@angular/core';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';


import { InfoComponent } from '../info/';
import { PreferencesComponent } from '../preferences/';

@Component({
  moduleId: module.id,
  selector: 'app-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives : [ InfoComponent, PreferencesComponent , MD_TABS_DIRECTIVES ]
})

export class PersonalComponent implements OnInit {
  @Input() activeUser
  constructor() {}

  ngOnInit() {
  }

}
