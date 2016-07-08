import { Component, OnInit , Input } from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';
import  { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UserFormsService } from '../';

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
  directives:[MD_INPUT_DIRECTIVES, MD_RADIO_DIRECTIVES , MD_CARD_DIRECTIVES],
  providers : [MdRadioDispatcher]
})
export class InfoComponent implements OnInit {
  @Input() userid;
  letedit:boolean;
  firsttime:boolean;
  infoForm:ControlGroup;
  formInstance : any[] = [];
  firstName : string = '';

  goalsOptions = [{value : 'wl', label:'Weight Loss'} , {value : 'wg', label : 'Weight Gain'} , {value : 'bb',
 label : 'Body Building'} , {value : 'mt',  label : 'Muscle Toning and Sculpturing'} , {value : 'hl',  label : 'General Healthy Lifestyle'}
  , {value : 'Rwl',  label : 'Rapid Weight Loss'} ];

  ageOptions = [{value : '10to14', label:'10-14'} , {value : '15to18', label : '15-18'} , {value : '19to25',
 label : '19-25'} , {value : '26to30', label : '26-30'} , {value : '31to45', label : '31-45'}
  , {value : '46to55', label : '45-55'} , {value : '56to60', label : '56-60'} , {value : '61to70', label : '61-70'},
{value : '71to80', label : '71-80'} , {value : 'more than 80', label : '>80'}];
  personalformres:any;
//public userformservice:UserFormsService ,
  constructor( public fb:FormBuilder) {
    this.infoForm=fb.group({
      firstName:[this.firstName],
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
    Stamplay.Object("userformpersonal").get({"person" : this.userid}).then((res)=>{
      this.personalformres = res.data[0];
      if(this.personalformres.weight == undefined){
        this.firsttime = true;
        this.letedit = true;
      }
      else{
        this.firsttime =false;
        this.letedit = false;
        this.firstName = this.personalformres.firstName;
      }
    })
  }
  submitinfoForm(){
    //this.formService.change(this.formInstance);
    console.log(this.infoForm.value);
    //this.userformservice.updateUserInfo(this.infoForm.value);
    if(this.firsttime){
      Stamplay.Object("userformpersonal").save(this.infoForm.value).then((res)=>{
        console.log(res);
      })
    }
    else{
      Stamplay.Object("userpersonal").patch(this.personalformres._id, this.infoForm.value).then((res)=>{
        console.log(res);
      })
    }
  }
  editForm(){
    this.letedit=true;
  }
}
