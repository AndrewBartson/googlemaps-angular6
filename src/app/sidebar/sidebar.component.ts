import { Component, OnInit } from '@angular/core';

import legs from '../../assets/trip_legs.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  enableShow = false;
  enableErase = false;
  legs = legs;

  constructor() { }

  ngOnInit() {
  }

}
