import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html',
  styleUrls: ['preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  preferencesForm:ControlGroup;
  constructor(public fb:FormBuilder) {
    this.preferencesForm= fb.group({
      
    })
  }

  ngOnInit() {
  }

}
