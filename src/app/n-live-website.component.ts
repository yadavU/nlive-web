import { Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";
import { Component, Input } from "@angular/core";
import { MD_CARD_DIRECTIVES } from "@angular2-material/card";
import { MdIcon, MdIconRegistry } from "@angular2-material/icon";
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { IntroComponent } from "./+intro/";
import { HomeComponent } from "./+home/";

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'n-live-website-app',
  templateUrl: 'n-live-website.component.html',
  styleUrls: ['n-live-website.component.css'],
  directives:[ROUTER_DIRECTIVES,IntroComponent, MD_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon],
  providers:[MdIconRegistry]
})
@Routes([
 {path:'/intro', component:IntroComponent},
  {path:'/home/:user', component:HomeComponent}
])
export class NLiveWebsiteAppComponent {
  res={
    id: 1,
    displayName:"human",
    email:"human@earth21.world"
  };
  loggedIn:boolean=false;
  loggedoutPages =['Login', 'Regsiter'];
  loggedinPages = ['View diet','View Sessions', 'Feed', 'Personal'];

  title = 'n-live-website works fine!';


  constructor( public router:Router){

    this.router.changes.subscribe((data)=>{
      console.log("changes" + data);
    });

//      this.loggedIn = this.segment.getParam('loggedIn');
//    this.loggedIn=this.routeData.get('loggedIn');

//    Stamplay.User.currentUser().then((res)=>{
//      if(res._id !== undefined)
//        {
//      var displayName= "ujjwal";
//               this.router.navigate(['./home', res.displayName]);
//      }
//    });

  }

  logout(){
    this.router.navigate(['/intro']);
    this.loggedIn= false;
  }


}
