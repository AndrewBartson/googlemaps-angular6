import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPointInfoComponent } from './trip-point-info.component';

describe('TripPointInfoComponent', () => {
  let component: TripPointInfoComponent;
  let fixture: ComponentFixture<TripPointInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPointInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPointInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
