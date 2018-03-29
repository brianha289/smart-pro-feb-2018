import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo';
import { Todo } from '../../models/todo';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public ts: TodoProvider, public modalCtrl: ModalController) {

  }

  showDetail(todo: Todo) {
     this.modalCtrl.create(DetailsPage, {data: todo}).present()


    // this.navCtrl.push(DetailsPage, {data: todo})
  }
}
