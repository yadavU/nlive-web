import { Component, OnInit } from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';
import  { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';

import { UserFormsService } from '../';

@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
  directives:[MD_INPUT_DIRECTIVES, MD_RADIO_DIRECTIVES],
  providers : [MdRadioDispatcher]
})
export class InfoComponent implements OnInit {
  letedit:boolean = true;
  infoForm:ControlGroup;
  formInstance : any[] = [];
  displayName : string = '';

  goalsOptions = [{value : 'wl', label:'Weight Loss'} , {value : 'wg', label : 'Weight Gain'} , {value : 'bb',
 label : 'Body Building'} , {value : 'mt',  label : 'Muscle Toning and Sculpturing'} , {value : 'hl',  label : 'General Healthy Lifestyle'}
  , {value : 'Rwl',  label : 'Rapid Weight Loss'} ];

  ageOptions = [{value : '10to14', label:'10-14'} , {value : '15to18', label : '15-18'} , {value : '19to25',
 label : '19-25'} , {value : '26to30', label : '26-30'} , {value : '31to45', label : '31-45'}
  , {value : '46to55', label : '45-55'} , {value : '56to60', label : '56-60'} , {value : '61to70', label : '61-70'},
{value : '71to80', label : '71-80'} , {value : 'more than 80', label : '>80'}];

//public userformservice:UserFormsService ,
  constructor( public fb:FormBuilder) {
    this.infoForm=fb.group({
      firstName:[this.displayName],
      lastName:[''],
      phoneNumber:[''],
      address:[''],
      height : [''],
      age :[''],
      weight:[''],
      goalsChoice : ['']
    })
  }

  ngOnInit() {

  }
  submitinfoForm(){
    //this.formService.change(this.formInstance);
    console.log(this.infoForm.value);
    //this.userformservice.updateUserInfo(this.infoForm.value);
  }
  editForm(){
    this.letedit=true;
  }
}
