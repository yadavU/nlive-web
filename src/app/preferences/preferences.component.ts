import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup} from '@angular/common';
declare var Stamplay;

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
      dietpref:[''],
      goal:[''],
      lifestyle:['']
    });
  }

  ngOnInit() {
  }
  submitpreferencesForm(){
    console.log(this.preferencesForm.value);
    Stamplay.Object('userpreferences').save(this.preferencesForm.value).then((res)=>{
      console.log('succesfully stored');
    });
  }

}
