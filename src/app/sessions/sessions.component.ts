import { Component, OnInit } from '@angular/core';

import { SessionsService } from '../';

@Component({
  moduleId: module.id,
  selector: 'app-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.css']
})
export class SessionsComponent implements OnInit {
  allsessions : any;
  constructor(public _sessionsService: SessionsService) {
//    this.allsessions= this._sessionsService.getallsessions();
  }

  ngOnInit() {
  }


}
