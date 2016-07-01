import { Component, OnInit, Input } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
@Component({
  moduleId: module.id,
  selector: 'personal-page',
  templateUrl: 'personal-page.component.html',
  styleUrls: ['personal-page.component.css'],
  directives: [ MD_LIST_DIRECTIVES ]
})
export class PersonalPageComponent implements OnInit {
  @Input() userPersonal;
  constructor() {}

  ngOnInit() {
  }

}
