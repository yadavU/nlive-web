import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';

import { SessionDetailsComponent } from '../session-details/';

declare var Stamplay;
declare var require;

@Component({
  moduleId: module.id,
  selector: 'app-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.css']
})

export class SessionsComponent implements OnInit {
  @Input() userInfo : any;
  filter:any;
  sessionresdata : any[];

  constructor(public router : Router) {

  }

  ngOnInit() {
    Stamplay.Object("sessions").get({}).then((sessionres)=>{
      this.sessionresdata = sessionres.data;
      console.log(this.sessionresdata[0]);

    },(err)=>{
      console.log("sessionres error" , err);
    });
  }
  openSession(session){
    console.log(session);
    this.router.navigate(['/session-details']);
  }
}
