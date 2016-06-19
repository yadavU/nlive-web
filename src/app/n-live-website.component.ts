//import { Routes, ROUTER_DIRECTIVES } from "@angular/router";
import { Component } from "@angular/core";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { MdIcon, MdIconRegistry } from "@angular2-material/icon";
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { IntroComponent } from "./+intro/";
import { HomeComponent } from "./+home/";

@Component({
  moduleId: module.id,
  selector: 'n-live-website-app',
  templateUrl: 'n-live-website.component.html',
  styleUrls: ['n-live-website.component.css'],
  directives:[IntroComponent, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers:[MdIconRegistry]
})
//@Routes([
//  {path:'/intro', component:IntroComponent},
//  {path:'/home', component:HomeComponent}
//])
export class NLiveWebsiteAppComponent {
  loggedoutPages =['Login', 'Regsiter'];
  loggedinPages = ['View diet','View Sessions', 'Feed', 'Personal'];
  title = 'n-live-website works fine!';
  clickedPage(page){

  }
}
