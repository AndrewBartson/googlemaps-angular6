import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { InputModel } from './input.model';
import { InputService } from './input.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css', './input-grid.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('tripForm') tripInput: NgForm;
  input: InputModel = {
    origin: '',
    end_point: '',
    avg_speed: 0,
    hours_driving: 0,
    miles_per_day: 0,
    options: '',
    weather: false,
    hotels: false,
    truck_stops: false
  };
  defaultDepartTime = new Date();
  adv_input_visible = false;
  submitted = false;
  showForm = true;
  showTrip = false;
  options = 'trucker';
  settings = {
    trucker: {
      avg_speed: 62,
      hours_driving: 11,
      miles_per_day: 682
    },
    average: {
      avg_speed: 65,
      hours_driving: 6,
      miles_per_day: 390
    },
    fast: {
      avg_speed: 75,
      hours_driving: 12,
      miles_per_day: 900
    }
  };

  constructor(public inputService: InputService) { }

  ngOnInit() {
  }

  onGetRoute(form: NgForm) {
    this.submitted = true;
    this.showTrip = true;
    console.log('form.value: ', form.value);
    this.showCurrentInput();
    if (form.invalid) {
      return;
    }
    Object.entries(form.value)
    .forEach(([key, inputValue]) => {
    this.input[key] = inputValue;
    });

    console.log('this.input later:', this.input);
    this.showForm = false;
    this.showTrip = true;
    this.inputService.sendTripRequest(this.input);
  }
  showMoreLess() {
    if (!this.adv_input_visible) {
      this.useQuickPick(this.settings.trucker);
      this.adv_input_visible = true;
    }
    else {
      this.adv_input_visible = false;
    }
  }
  useQuickPick(presets) {
    this.tripInput.form.patchValue(presets);
  }
  showCurrentInput() {
    this.input.origin = this.tripInput.value.origin;
    this.input.end_point = this.tripInput.value.end_point;
    this.input.avg_speed = this.tripInput.value.avg_speed;
    this.input.hours_driving = this.tripInput.value.hours_driving;
    this.input.miles_per_day = this.tripInput.value.miles_per_day;
  }
}



     // there should be a 'saveTripOptions' method in input.service.ts
