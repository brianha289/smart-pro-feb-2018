import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  @ViewChild('mapCanvas') mapCanvas: ElementRef
  map: GoogleMap = null


  shouldShowCancel: boolean = true
  valueSearch: string = null

  constructor(public navCtrl: NavController, private location: Geolocation) {

  }

  setRootTab() {
    this.navCtrl.setRoot(TabsPage)
  }

  onInput(event) {
    console.log(event)
    console.log("Search keyword:", this.valueSearch)
  }
  onCancel(event) {

  }

  ngOnInit() {
    // this.location.getCurrentPosition().then(data => {
    //   console.log('My location: ', JSON.stringify(data))
    //   alert(JSON.stringify(data))
    // })
    // this.loadMap()
  }

  ionViewDidLoad() {
    this.loadMap()
  }

  loadMap() {
    const option: GoogleMapOptions = {
      camera: {
        target: {
          lat: 10.8,
          lng: 106.6
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create(this.mapCanvas.nativeElement, option);

    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Lazada',
          icon: 'red',
          animation: 'DROP',
          position: {
            lat: 10.8,
            lng: 106.6
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }

}
