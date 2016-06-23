import { Component, OnInit } from '@angular/core';
import { InfoComponent} from '../info/';
import { PreferencesComponent } from '../preferences/';

@Component({
  moduleId: module.id,
  selector: 'user-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives:[InfoComponent]
})
export class PersonalComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
