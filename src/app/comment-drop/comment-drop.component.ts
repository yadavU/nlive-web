import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'comment-drop',
  templateUrl: 'comment-drop.component.html',
  styleUrls: ['comment-drop.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class CommentDropComponent implements OnInit {
  @Input() post : any;
//  @Output() closecomment: EventEmitter<any> = new EventEmitter();
//  @Output() commententered: EventEmitter<any> = new EventEmitter();
//  @Output() voteup: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  upVote(){
//    this.voteup.emit(null);
  }

  comment(commenttext){
//    this.commententered.emit(commenttext);
  }

  closecommentbox(){
//    this.closecomment.emit(null);
  }

}
