import { Component, OnInit } from '@angular/core';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

@Component({
  moduleId: module.id,
  selector: 'comment-sec',
  templateUrl: 'comment-drop.component.html',
  styleUrls: ['comment-drop.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class CommentDropComponent implements OnInit {
  comments=[
    {text:"comment 1"},{text:"comment 2"},{text:"comment 3"}
  ];
  constructor() {}

  ngOnInit() {
  }

}
