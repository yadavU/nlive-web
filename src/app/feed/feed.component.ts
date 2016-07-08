import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import { CommentDropComponent } from '../comment-drop/';

declare var Stamplay;

@Component({
  moduleId: module.id,
  selector: 'blog-feed',
  templateUrl: 'feed.component.html',
  styleUrls: ['feed.component.css'],
  directives:[MD_GRID_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_INPUT_DIRECTIVES, CommentDropComponent]
})
export class FeedComponent implements OnInit {
  commentText:string;
  letComment : boolean;
  blogpostresdata:any[];
  openComment:boolean;
  constructor() {}

  ngOnInit() {
    Stamplay.Object("blogposts").get({}).then((blogres)=>{

      this.blogpostresdata = blogres.data;
      console.log(this.blogpostresdata);

    });
  }


  upvote(postid){

    Stamplay.Object("blogposts").upVote(postid).then((res)=>{

    });
  }

  postComment(postid){
    Stamplay.Object("blogposts").comment(postid, this.commentText).then((res)=>{
      console.log("commented");
    });
  }



  }
