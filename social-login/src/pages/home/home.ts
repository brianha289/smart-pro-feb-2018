import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fb: Facebook) {

  }

  doLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email']).then((data: FacebookLoginResponse) => {
      alert(JSON.stringify(data))
    })
  }

}
