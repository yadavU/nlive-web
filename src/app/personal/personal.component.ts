import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { PersonalPageComponent } from '../personal-page/';
import { PreferencesComponent } from '../preferences/';
import { UserFormsService } from '../';

@Component({
  moduleId: module.id,
  selector: 'user-personal-display',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives:[ PersonalPageComponent, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES ]
})
export class PersonalComponent implements OnInit {
      UserPersonal = {
        name: 'name',
        dob : 'dob',
        address: 'address'

    };
    UserPreferences = {
      healthcondition: 'healthcondition',
      blogpostpreferences: 'blogpreferences'
    };


  //public formservice:UserFormsService
  constructor() {}

  ngOnInit() {
  //  this.displayInfo = this.formservice.getuserFormInfo();
  }



}
