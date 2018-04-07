import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabBarPage } from '../pages/tab-bar/tab-bar';
import { MapProvider } from '../providers/map/map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  selectedType: string
  rootPage: any = TabBarPage;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public mapProvider: MapProvider) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // update last map type
      this.selectedType = this.mapProvider.selectedType
    });
  }

  doUpdateType(type) {
    this.mapProvider.updateMapType(this.selectedType)
  }
}
