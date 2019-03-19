import { Component, OnInit } from '@angular/core';

import legs from '../../../assets/trip_legs.js';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  legs = legs;

  constructor() { }

  ngOnInit() {
  }

}
