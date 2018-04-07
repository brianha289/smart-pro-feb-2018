import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notifs: any[] = [{
    title: 'Xin chao 1',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 2',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 3',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 4',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 5',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 6',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 7',
    body: 'Rat vui dc biet ban'
  },
  {
    title: 'Xin chao 8',
    body: 'Rat vui dc biet ban'
  }
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  delete(i) {
    if(this.notifs.length > 0) {
      this.notifs.splice(i, 1)
    }
  }
}
