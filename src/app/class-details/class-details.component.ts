import { Component, OnInit, Input } from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';
import { Data } from '../data';


@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent implements OnInit {

  constructor() {
    Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyCaza9vVvqLPXFmL5T2Alb1h5N0KHMNPUs';
  }

  ngOnInit() {
  }

  @Input()
  data: Data;
}
