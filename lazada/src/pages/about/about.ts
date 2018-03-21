import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  map: any
  @ViewChild('mapCanvas') mapElement: ElementRef

  initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: this.map
    });
  }


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.initMap()
  }

}
