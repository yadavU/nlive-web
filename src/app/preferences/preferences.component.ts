import { Component, OnInit } from '@angular/core';
import {FormBuilder, ControlGroup} from '@angular/common';
import  { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'app-preferences',
  templateUrl: 'preferences.component.html',
  styleUrls: ['preferences.component.css'],
  directives : [MD_RADIO_DIRECTIVES, MD_INPUT_DIRECTIVES],
  providers : [MdRadioDispatcher]
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
//    Stamplay.Object('userpreferences').save(this.preferencesForm.value).then((res)=>{
//      console.log('succesfully stored');
//    });
  }

}
