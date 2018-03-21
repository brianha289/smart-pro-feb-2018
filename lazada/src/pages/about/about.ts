import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: any
  start = 'TP Hồ Chí Minh';
  end = 'Cần Thơ';
  directionsService = new google.maps.DirectionsService
  directionsDisplay = new google.maps.DirectionsRenderer

  @ViewChild('mapCanvas') mapElement: ElementRef

  // initMap() {
  //   var uluru = {lat: 10.363, lng: 106.044};
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: this.map
  //   });
  // }

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.initMap()
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {
        lat: 10.8,
        lng: 106.6
      },
      zoom: 18,
      tilt: 30
    });

    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute()
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}
