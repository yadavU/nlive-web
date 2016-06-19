import { Component, OnInit } from '@angular/core';
//import { ControlGroup } from '@angular/common';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'stamplay-tests',
  templateUrl: 'stamplay-tests.component.html',
  styleUrls: ['stamplay-tests.component.css']
})
export class StamplayTestsComponent implements OnInit {
  cobjectid={
    selection:['']
  };
  constructor() {}

  ngOnInit() {
  }
/*  getobjectid(uniquevalobj, cobjectid){
    Stamplay.Object(cobjectid).get(uniquevlobj).then((res)=>{
      return res._id;
    });
  }
  Getcallobject(cobject){
    Stamplay.Query("object",cobjectid)
  }
  Postcall(){
  }
  postcomment(uniqueval, cobjectid, comment_text){
    let objectid=this.getobjectid(uniqueval,cobjectid);
    Stamplay.Object(cobjectid).comment(objectid, comment_text).then((res)=>{
      console.log("Success commenting");
    });
  }
  voting(isUp:boolean, cobjectid){
    let objectid=this.getobjectid(uniqueval, cobjectid);
    if(isUp){
      Stamlpay.Object(cobjectid).upVote(objectid).then((res)=>{
        console.log('Upvote recorded');
      })
    }
  }*/
}
