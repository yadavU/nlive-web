import { Component, OnInit, trigger, state, style, transition, animate, Input } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

import {SessionsComponent} from '../sessions/';
import {PersonalComponent} from '../personal/';
import {FeedComponent} from '../feed/';
import {DietViewComponent} from '../diet-view/';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[ROUTER_DIRECTIVES, PersonalComponent, FeedComponent, DietViewComponent, SessionsComponent, MD_TABS_DIRECTIVES, MD_SIDENAV_DIRECTIVES]
/*  animations: [
  trigger('homeState', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100%) scale(1)'}),
      animate(100)
    ]),
    transition('inactive => void', [
      animate(100, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(200)
    ]),
    transition('active => void', [
      animate(200, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
]*/

})
@Routes([
 {path:'/personal', component:PersonalComponent},
 {path:'/sessions', component:SessionsComponent},
 {path: '/feed', component: FeedComponent},
 {path:'/diet-view', component:DietViewComponent}
])

export class HomeComponent implements OnInit {
  @Input() user;
  a:number =0;
  ishtyle:any;
  state = 'active';
  constructor(public _routesegment:RouteSegment) {

//    this.user = this._routesegment.getParam('user');
  }
  //menuopen:boolean=false;

  ngOnInit() {

  }
 buttonclick(){

   this.state = (this.a%2 == 0)? 'active': 'inactive';
   this.a=this.a+1;
 }

 linktoaccount(){
   this.router.navigate(['./personal']);
 }
//  toggleSidenav(){
//    this.menuopen=!this.menuopen;
//  }
}
