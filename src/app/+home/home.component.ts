import { Component, OnInit } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {PersonalComponent} from '../personal/';
import {DietBuilderComponent} from '../diet-builder/';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@Routes([
  {path:'/personal', component:PersonalComponent},
  {path:'/diet-builder', component:DietBuilderComponent}
])

export class HomeComponent implements OnInit {
  user:any;
  constructor(public routesegment:RouteSegment) {
    //this.user = this._params.get('user');
    this.user = this.routesegment.getParam('user');
  }

  ngOnInit() {
  }

}
