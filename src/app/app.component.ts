import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

import best_options from '../assets/map_styles.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  markerTypes = [
    { text: 'Parking', value: 'parking_lot_maps.png' },
    { text: 'Library', value: 'library_maps.png' },
    { text: 'Information', value: 'info-i_maps.png'}
  ];

  selectedMarkerType = 'parking_lot_maps.png';
  // for toggling the map
  isHidden = false;

  ngOnInit() { }

  ngAfterContentInit() {
    const mapProp = {
      center: new google.maps.LatLng(38.617319, -98.0),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      options: best_options,
      mapTypeControl: false
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    const location = new google.maps.LatLng(this.latitude, this.longitude);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
    const location = new google.maps.LatLng(this.latitude, this.longitude);
    // console.log(`selected marker: ${this.selectedMarkerType}`);

    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
    });
  }

  toggleMap() {
    this.isHidden = !this.isHidden;
    this.gmapElement.nativeElement.hidden = this.isHidden;
  }
}
