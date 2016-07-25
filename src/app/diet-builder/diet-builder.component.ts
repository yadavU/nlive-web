import { Component, OnInit } from '@angular/core';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

declare var require;

@Component({
  moduleId: module.id,
  selector: 'app-diet-builder',
  templateUrl: 'diet-builder.component.html',
  styleUrls: ['diet-builder.component.css'],
  directives:[MD_GRID_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class DietBuilderComponent implements OnInit {
  weakmeal={
    breakfast:{
    mon:'item1',
    tue:'item2',
    wed:'item3',
    thu:'item4',
    fri:'item5'
  }
};
  constructor() {}

  ngOnInit() {
  }

}
//service which provides with information on diet cycles
