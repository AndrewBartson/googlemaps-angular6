import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  @Input() enableInput = true;
  @Input() enableTrips = false;

  constructor() { }

  ngOnInit() { }

}
