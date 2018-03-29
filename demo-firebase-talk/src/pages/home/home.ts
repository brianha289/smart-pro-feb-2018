import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public fcm: FCM) {
    this.fcm.onNotification().subscribe(data => {
      alert(data)
      if(data.wasTapped) {
        this.goto()
      }
    })

    this.fcm.getToken().then(data => {

    })

    this.fcm.onTokenRefresh().subscribe(data => {

    })

  

  }

  goto() {
    this.navCtrl.push(TestPage)
  }

}
