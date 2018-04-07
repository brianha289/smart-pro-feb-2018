import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapProvider, MapType } from '../../providers/map/map';
import { DetailPage } from '../detail/detail';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('mapCanvas') mapCanvas: ElementRef
  map: any

  constructor(public navCtrl: NavController, public navParams: NavParams, private mapProvider: MapProvider) {
  }

  ionViewDidLoad() {
    this.initMap()

    this.mapProvider.currentMapType.subscribe((next: MapType) => {
      let type = next.name.toLowerCase()
      console.log(type)
      this.map.setMapTypeId(type)
    })
  }

  initMap() {

    this.map = new google.maps.Map(this.mapCanvas.nativeElement, {
      zoom: 13,
      center: { lat: 59.325, lng: 18.070 }
    })

    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: { lat: 59.326153, lng: 18.069968, },
    })

    marker.setMap(this.map)

    let content = '<div class="infowindow"><p id="tap">Ha Van Hoat</p></div>';

    let infoWindow = new google.maps.InfoWindow(
      {
        closeBoxURL: "",
        content: content
      }
    );

    marker.addListener('click', function() {
      infoWindow.open(this.map, marker);
    })

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('tap').addEventListener('click', () => {
        this.showDetail(event);
      })
    })
  }

  showDetail(event) {
    console.log('A')
    this.navCtrl.push(DetailPage)
  }
}
