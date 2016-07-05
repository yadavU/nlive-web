import { Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";
import { Component, OnInit, EventEmitter, Input, Output, trigger, animate, state, style, transition } from "@angular/core";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { MdIcon, MdIconRegistry } from "@angular2-material/icon";
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { PersonalComponent } from './+personal';
import { IntroComponent } from "./+intro/";
import { HomeComponent } from "./+home/";

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'n-live-website-app',
  templateUrl: 'n-live-website.component.html',
  styleUrls: ['n-live-website.component.css'],
/*  animations:[
    trigger('toolbarstate',[
      state('loggedIn',style({
        backgroundColor:'#FF5722',
        opacity: 1
      })),
      state('loggedOut',style({
        backgroundColor:'#FFAB91',
        opactiy: 1

      })),
      transition('loggedOut=>loggedIn', animate('100ms ease-in')),
      transition('loggedIn=>loggedOut', animate('100ms eas-out'))
    ])

  ],*/
  directives:[ROUTER_DIRECTIVES,IntroComponent, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers:[MdIconRegistry]
})
@Routes([
  {path:'/intro', component:IntroComponent},
  {path:'/home/:user', component:HomeComponent},
  {path: '/personal', component: PersonalComponent}

])
export class NLiveWebsiteAppComponent implements OnInit{
  showintro: boolean ;// Change toolbar display when loggedIn
  //logState: string = "loggedOut";//to animate the toolbar
  userInfo: any;
  displayName:string;
  title = 'n-live-website works fine!';
  @Output() nouser : EventEmitter<any> = new EventEmitter();
  @Output() founduser : EventEmitter<any> = new EventEmitter();
  constructor( public router:Router){

  }

  ngOnInit(){
    Stamplay.User.currentUser().then((res)=>{
      this.userInfo = res.user;

      if(this.userInfo == undefined)
        {
          this.nouser.emit(null);
          }
      else{
        this.founduser.emit(null);

        console.log("executed else");
      }
    });
  }

  loggedin(value){
    console.log("recorded in main comp");
    this.showintro=false;
    console.log(value);
  }

  logout(){
    this.showintro = true;
    //Stamplay.User.logout();
    this.router.navigate(['/intro']);
    //this.toolbarstate= "loggedOut";
  }


}
