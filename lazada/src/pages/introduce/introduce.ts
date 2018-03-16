import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the IntroducePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introduce',
  templateUrl: 'introduce.html',
  // styles: ['introduce.scss'],
})
export class IntroducePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController, private storage: Storage) {

    console.log('A')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroducePage');
  }

  ionViewDidLeave(){
    console.log('Leave');
  }

  async skipToTabsPage() {
    // this.storage.set('isShowIntroducePage', true).then(() => {
    //   this.navCtrl.setRoot(TabsPage)
    // })

    // console.log('1');
    // var test = await this.storage.set('isShowIntroducePage', true)
    // console.log('2');
    // this.navCtrl.setRoot(TabsPage)
    // console.log('3');

    console.log('1');
    var test =  this.storage.set('isShowIntroducePage', true).then(_ => {
      console.log('4s');
    })
    console.log('2');
    this.navCtrl.setRoot(TabsPage)
    console.log('3');
  }
}
