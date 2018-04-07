import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabBarPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-bar',
  templateUrl: 'tab-bar.html'
})
export class TabBarPage {

  mapRoot = 'MapPage'
  notificationRoot = 'NotificationPage'


  constructor(public navCtrl: NavController) {}

}
