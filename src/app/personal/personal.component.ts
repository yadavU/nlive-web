import { Component, OnInit } from '@angular/core';
import { InfoComponent} from '../info/';

@Component({
  moduleId: module.id,
  selector: 'app-personal',
  templateUrl: 'personal.component.html',
  styleUrls: ['personal.component.css'],
  directives:[InfoComponent]
})
export class PersonalComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
