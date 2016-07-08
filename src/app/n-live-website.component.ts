import { ROUTER_DIRECTIVES, Router, RouterConfig } from "@angular/router";
import { Component, OnInit, EventEmitter, Input, Output, trigger, animate, state, style, transition } from "@angular/core";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { MdIcon, MdIconRegistry } from "@angular2-material/icon";
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';


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
  directives:[ROUTER_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers:[MdIconRegistry]
})


export class NLiveWebsiteAppComponent implements OnInit{
  ToolbarDisplayText : string;
  showintro: boolean= false ;
  // Change toolbar display when loggedIn
  //logState: string = "loggedOut";//to animate the toolbar
  userInfo: any;
  displayName:string;
  title = 'n-live-website works fine!';

  constructor( public router:Router){

  }

  ngOnInit(){
    Stamplay.User.currentUser().then((res)=>{
      console.log(res.user._id);
      if(res.user._id != undefined){
        this.ToolbarDisplayText = "Hi" + res.user.displayName;
      }
      else{
        this.ToolbarDisplayText = "Not Logged In or Registered";
      }
    });
  }

  ngOnChanges(){
    Stamplay.User.currentUser().then((res)=>{

      if(res.user._id != undefined){
        this.ToolbarDisplayText = "Hi , " + res.user.displayName;
      }
      else{
        this.ToolbarDisplayText = "Not Logged In or Registered";
      }
    });
  }



  check(){
    console.log("No user event recorded");
  }

  logout(){

    Stamplay.User.logout();
    this.router.navigate(['/intro']);
    //this.toolbarstate= "loggedOut";
  }
 showcurrentuser(){
   Stamplay.User.currentUser().then((res)=>{
     console.log(res);
   })
 }

}
