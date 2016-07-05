import { Component, OnInit, trigger, state, style, transition, animate, Input } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, RouteSegment, Router} from '@angular/router';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';

import {SessionsComponent} from '../sessions/';
import {FeedComponent} from '../feed/';
import {DietViewComponent} from '../diet-view/';
import { PersonalComponent } from '../personal/';
import { SessionDetailsComponent } from '../session-details/';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives:[ROUTER_DIRECTIVES, PersonalComponent, FeedComponent, DietViewComponent, SessionsComponent, MD_TABS_DIRECTIVES, MD_SIDENAV_DIRECTIVES]
/*  animations: [
  trigger('homeState', [
    state('display', style({transform: translateX(0) scale(1)})),
    state('active',   style({transform: translateX(0)})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: translateX(-100%)}),
      animate(100ms ease-out)
    ]),
    transition('inactive => void', [
      animate(100, style({transform: translateX(100%) scale(1)}))
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
  {path:'/session-details', component:SessionDetailsComponent}
])

export class HomeComponent implements OnInit {
  @Input('user') userDetails : any;
  a:number =0;


  constructor(public _routesegment:RouteSegment, public router:Router) {

//    this.user = this._routesegment.getParam('user');
  }
  //menuopen:boolean=false;

  ngOnInit() {

  }
 buttonclick(){


 }

 linktoaccount(){
   this.router.navigate(['/personal']);
 }
//  toggleSidenav(){
//    this.menuopen=!this.menuopen;
//  }
}
