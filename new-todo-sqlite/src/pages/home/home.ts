import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos: any = []

  constructor(public navCtrl: NavController,
    private sqlite: SQLite, private toast: Toast) {


  }

  ionViewWillEnter() {
    // alert('A')
    this.sqlite.create({ name: 'a-my-todo.db', location: 'default' }).then((db: SQLiteObject) => {
      //'CREATE TABLE IF NOT EXISTS TODO(rowid INTEGER PRIMARY KEY, title TEXT, isComplete INT)', {}
      db.executeSql('CREATE TABLE IF NOT EXISTS TODO(myid INTEGER PRIMARY KEY, title TEXT, isComplete INT)', {}).then(_ => {
        // alert('Success')

        db.executeSql('SELECT * FROM TODO', {}).then(res => {
          if (res.rows.length > 0) {
            this.todos = []
            for (var i = 0; i < res.rows.length; i++) {
              let todo = {
                title: res.rows.item(i).title,
                isComplete: res.rows.item(i).isComplete
              }
              this.todos.push(todo)
            }
          }
        })
        
      }).catch(e=>{
        // alert(e)
      })

      // db.executeSql('SELECT * FROM TODO', {}).then(res => {
      //   if (res.rows.length > 0) {
      //     this.todos = []
      //     for (var i = 0; i < res.rows.length; i++) {
      //       let todo = {
      //         title: res.rows.item(i).title,
      //         isComplete: res.rows.item(i).isComplete
      //       }
      //       this.todos.push(todo)
      //     }
      //   }
      // })


    }).catch(e => {
      this.toast.show('Create database is not success', '4000', 'bottom')
    })
  }

  doAdd() {
    this.navCtrl.push(AddPage)
  }

}
