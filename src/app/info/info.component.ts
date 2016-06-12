import { Component, OnInit } from '@angular/core';
import {FormBuilder,ControlGroup} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'user-info',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.css'],
})
export class InfoComponent implements OnInit {
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
  }
}
