import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  shouldShowCancel: boolean = true
  valueSearch: string = null

  constructor(public navCtrl: NavController, private location: Geolocation) {
    
  }

  setRootTab(){
    this.navCtrl.setRoot(TabsPage)
  }

  onInput(event) {
    console.log(event)
    console.log("Search keyword:" , this.valueSearch)
  }
  onCancel(event) {

  }

  ngOnInit() {
    this.location.getCurrentPosition().then(data => {
      console.log('My location: ', JSON.stringify(data))
      alert(JSON.stringify(data))
    })
  }
}
