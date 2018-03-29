import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Todo } from '../../models/todo';
import { TodoProvider } from '../../providers/todo/todo';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  todo: Todo = new Todo()
  title: string
  isNew: boolean

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ts: TodoProvider) {
  }

  ionViewWillEnter() {
    let data = this.navParams.get('data')
    if (data) {
      this.todo = Object.assign(new Todo(), data)
      this.isNew = false
      this.title = "Update Todo"
    } else {
      this.isNew = true
      this.title = "Add Todo"
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  dismissView() {
    this.viewCtrl.dismiss()
  }

  doSave() {

    if (this.isNew) {
      this.ts.add(this.todo)
    } else {
      this.ts.update(this.todo)
    }
    this.dismissView()
  }
}
