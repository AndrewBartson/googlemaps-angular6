import { InputModel } from './input.model';
import { Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class InputService {
  private input: InputModel = {
    origin: '',
    end_point: '',
    miles_per_day: 0
  };

  constructor(private http: HttpClient) {
  }

  getInput() {
    return this.input;
  }

  setInput(input: InputModel) {
  }

  sendTripRequest(tripSettings) {
    console.log('tripSettings :', tripSettings);
    this.http.post('http://localhost:8001/trips', tripSettings)
    .subscribe(response => {
      console.log('response - ', response);
      });
  }
}
