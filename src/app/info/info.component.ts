import { Component, OnInit } from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';
import  { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
  directives:[MD_INPUT_DIRECTIVES]
})
export class InfoComponent implements OnInit {
  letedit:boolean = true;
  infoForm:ControlGroup;
  constructor(public fb:FormBuilder) {
    this.infoForm=fb.group({
      name:[''],
      phone:[''],
      email:[''],
      dob:[''],
      address:[''],
      height:[''],
      weight:['']
    })
  }

  ngOnInit() {
  }
  submitinfoForm(){
    console.log(this.infoForm.value);
    this.letedit=false;
  }
  editForm(){
    this.letedit=true;
  }
}
