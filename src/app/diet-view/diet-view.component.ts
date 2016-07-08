import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
//import {InfiniteScroll} from 'angular2-infinite-scroll';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'user-diet-view',
  templateUrl: 'diet-view.component.html',
  styleUrls: ['diet-view.component.css'],
  directives:[ MD_GRID_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CHECKBOX_DIRECTIVES]
})
export class DietViewComponent implements OnInit {
  @Input() userInfo : any;
  usercategory:string = "obese";
  data:any;
//    Day=[
//      {
//      name:'Monday',
//      color:'red',
      daysmeals=[
        {
        day:'Monday',
        mealtime:'breakfast',
        name:'item1',
        quantity:3,
        quantitymeasurement:'cups',
        attributes:'protein percentage',
        checked:false,
        cols:1
        },
        {
        day:'Monday',
        mealtime:'lunch',
        name:'item2',
        quantity:2,
        quantitymeasurement:'cups',
        attributes:'fun fact',
        checked:false,
        cols:1
        },
        {
        day:'Monday',
        mealtime:'dinner',
        name:'item3',
        quantity:6,
        quantitymeasurement:'litres',
        attributes:'last time you had it was 3 months ago',
        checked:false,
        cols:1
      },

//    },
//    {
//    name:'Tuesday',
//    color:'green',
//    daymeals=[
      {
      day:'Tuesday',
      mealtime:'Breakfast',
      name:'item4',
      quantity:3,
      quantitymeasurement:'cups',
      attributes:'protein percentage',
      checked:false,
      cols:1
      },
      {
      day:'Tuesday',
      mealtime:'lunch',
      name:'item5',
      quantity:2,
      quantitymeasurement:'cups',
      attributes:'fun fact',
      checked:false,
      cols:1
      },
      {
      day:'Tuesday',
      mealtime:'Dinner',
      name:'item6',
      quantity:6,
      quantitymeasurement:'litres',
      attributes:'last time you had it was 3 months ago',
      checked:false,
      cols:1
      }
    ]
  //}
  //]
  constructor() {
  }
  clicked(){

  }
  ngOnInit() {
  }

}
