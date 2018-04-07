import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  todo = { title: '', isComplete: false }
  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  doSave() {
    if (this.todo.title != '') {
      // alert(JSON.stringify(this.todo))
      this.sqlite.create({ name: 'a-my-todo.db', location: 'default'}).then(
        (db: SQLiteObject) => {
        // alert('Im here')
        // SERT INTO TODO (title, isComplete) VALUES(?,?)
        db.executeSql('INSERT INTO TODO(title, isComplete) VALUES(?,?)', [this.todo.title, this.todo.isComplete]).then(res => {
          this.toast.show('Save a task successful', '4000', 'bottom').subscribe(next => {
            this.navCtrl.pop()
          })
        })
        .catch(e => {
          // alert(e)
          // this.toast.show('Save a task not successful', '4000', 'bottom')
        })
      })
      .catch(e => {
        // alert(e)
      //   this.toast.show('Cant not get database', '4000', 'bottom')
      })
    } else {
      this.toast.show('Please enter a task to save', '4000', 'bottom')
    }
  }

}
