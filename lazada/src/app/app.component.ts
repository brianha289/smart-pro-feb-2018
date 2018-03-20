import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { IntroducePage } from '../pages/introduce/introduce';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // this.storage.get('isShowIntroducePage').then(res => {
      //   console.log('Value of isShowIntroducePage: ', res)
        // if (res === null || res === undefined) {
        //   this.rootPage = IntroducePage
        // } else {
        //   this.rootPage = TabsPage
        // }
      // });
      this.checkHasIntroduce()
    });
  }

  async checkHasIntroduce() {
    var res = await this.storage.get('isShowIntroducePage')
    console.log('My value: ', res)
    if (res === null || res === undefined) {
      this.rootPage = IntroducePage
    } else {
      this.rootPage = TabsPage
    }
  }

  //  checkHasIntroduce2(): Observable<boolean> {
  //   this.storage.get('isShowIntroducePage').then(res => {
  //     console.log('My value: ', res)
  //     if (res === null || res === undefined) {
  //       // this.rootPage = IntroducePage
  //       return Observable.of(false)
  //     } else {
  //       // this.rootPage = TabsPage
  //       return Observable.of(true)
  //     }
  //   })
  //   return Observable.of(false)
  // }

}
