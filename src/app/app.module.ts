import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MaterialModule } from './material.module';
import { Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { HeaderComponent } from './main-area/header/header.component';
import { InputComponent } from './input/input.component';
import { TripsComponent } from './trips/trips.component';
import { TripLegComponent } from './trips/trip-leg/trip-leg.component';
import { TripListComponent } from './trips/trip-list/trip-list.component';
import { TripOverviewComponent } from './trips/trip-overview/trip-overview.component';
import { TripPointComponent } from './trips/trip-point/trip-point.component';
import { TripPointInfoComponent } from './trips/trip-point/trip-point-info/trip-point-info.component';
import { TripHotelComponent } from './trips/trip-point/trip-hotel/trip-hotel.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { ForecastItemComponent } from './forecasts/forecast-item/forecast-item.component';
import { ForecastSetComponent } from './forecasts/forecast-set/forecast-set.component';
import { ForecastMatrixComponent } from './forecasts/forecast-matrix/forecast-matrix.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainAreaComponent,
    HeaderComponent,
    InputComponent,
    TripsComponent,
    TripLegComponent,
    TripListComponent,
    TripOverviewComponent,
    TripPointComponent,
    TripPointInfoComponent,
    TripHotelComponent,
    ForecastsComponent,
    ForecastItemComponent,
    ForecastSetComponent,
    ForecastMatrixComponent,
    // Validators
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAd0ZZdBnJftinI-qHnPoP9kq5Mtkey6Ac'
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
