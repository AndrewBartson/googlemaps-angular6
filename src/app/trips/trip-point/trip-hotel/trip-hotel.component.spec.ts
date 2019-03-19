import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHotelComponent } from './trip-hotel.component';

describe('TripHotelComponent', () => {
  let component: TripHotelComponent;
  let fixture: ComponentFixture<TripHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
