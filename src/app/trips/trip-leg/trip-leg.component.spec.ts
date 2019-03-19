import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripLegComponent } from './trip-leg.component';

describe('TripLegComponent', () => {
  let component: TripLegComponent;
  let fixture: ComponentFixture<TripLegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripLegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripLegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
