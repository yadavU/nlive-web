import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { SessionDetailsComponent } from '../session-details/';

@Component({
  moduleId: module.id,
  selector: 'app-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.css']
})
//@Routes([
//  {path : '/details', component : SessionDetailsComponent}
//])
export class SessionsComponent implements OnInit {
  filter:any;
  allsessions : any=[
    {
      name : 'Session1',
      details : 'This is session detail for session1',
      time : '6pm - 10pm',
      data : '20th October 2016'
    },
    {
      name : 'Session2',
      details : 'This is session detail for session2',
      time : '6am - 10am',
      data : '21st October 2016'
    }
  ];

  constructor(public router : Router) {

  }

  ngOnInit() {
  }
  openSession(session){
    console.log(session);
  //  this.router.navigate(['./details']);
  }
}
