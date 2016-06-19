import { Component, OnInit } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {PersonalComponent} from '../personal/';
import {PreferencesComponent} from '../preferences/';
import {DietBuilderComponent} from '../diet-builder/';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {FeedComponent} from '../feed/';
import {DietViewComponent} from '../diet-view/';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[ROUTER_DIRECTIVES, PersonalComponent, PreferencesComponent, MD_TABS_DIRECTIVES, MD_SIDENAV_DIRECTIVES, FeedComponent, DietViewComponent]
})
@Routes([
 {path:'/info', component:PersonalComponent},
// {path:'/sessions', component:SessionsComponent},
 {path: '/feed', component: FeedComponent},
 {path:'/diet-view', component:DietViewComponent}
])

export class HomeComponent implements OnInit {
  userdisplayName:any;
  constructor(public routesegment:RouteSegment) {
    //this.user = this._params.get('user');
    this.userdisplayName = this.routesegment.getParam('user');
  }
  menuopen:boolean=false;

  ngOnInit() {
  }

  toggleSidenav(){
    this.menuopen=!this.menuopen;
  }
}
