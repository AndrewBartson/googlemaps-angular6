import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastSetComponent } from './forecast-set.component';

describe('ForecastSetComponent', () => {
  let component: ForecastSetComponent;
  let fixture: ComponentFixture<ForecastSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
