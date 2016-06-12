import { Component } from '@angular/core';
import {IntroComponent} from './+intro/';
import {HomeComponent} from './+home/';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'n-live-website-app',
  templateUrl: 'n-live-website.component.html',
  styleUrls: ['n-live-website.component.css'],
  directives:[IntroComponent, ROUTER_DIRECTIVES]
})
@Routes([
  {path:'/intro', component:IntroComponent},
  {path:'/home', component:HomeComponent}
])
export class NLiveWebsiteAppComponent {
  loggenIn:boolean = false;
  title = 'n-live-website works fine!';
}
