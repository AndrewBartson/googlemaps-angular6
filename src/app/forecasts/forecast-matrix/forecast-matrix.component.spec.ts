import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastMatrixComponent } from './forecast-matrix.component';

describe('ForecastMatrixComponent', () => {
  let component: ForecastMatrixComponent;
  let fixture: ComponentFixture<ForecastMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
