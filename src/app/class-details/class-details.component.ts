import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  data: Data;
}
