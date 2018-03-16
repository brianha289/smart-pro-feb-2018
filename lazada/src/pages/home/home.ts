import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shouldShowCancel: boolean = true
  valueSearch: string = null

  constructor(public navCtrl: NavController) {
    
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
}
