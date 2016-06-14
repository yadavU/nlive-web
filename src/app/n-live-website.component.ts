import { Component } from '@angular/core';
import {IntroComponent} from './+intro/';
import {HomeComponent} from './+home/';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';



@Component({
  moduleId: module.id,
  selector: 'n-live-website-app',
  templateUrl: 'n-live-website.component.html',
  styleUrls: ['n-live-website.component.css'],
  directives:[IntroComponent, ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers:[MdIconRegistry]
})
@Routes([
  {path:'/intro', component:IntroComponent},
  {path:'/home', component:HomeComponent}
])
export class NLiveWebsiteAppComponent {
  loggedIn:boolean = false;
  title = 'n-live-website works fine!';
}
