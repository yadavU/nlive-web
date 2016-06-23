import { Component, OnInit } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'app-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.css']
})
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

  constructor() {
//    this.allsessions= this._sessionsService.getallsessions();
  }

  ngOnInit() {
  }


}
