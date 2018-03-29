import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo';
import { observable, action, computed, autorun, toJS} from 'mobx';
/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  @observable list: Todo[] = []

  constructor() {
    console.log('Hello TodoProvider Provider');
    this.syncLocalData()
  }

  @action add(todo: Todo) {
    todo.id = this.list.length + 1
    this.list.push(todo)
  }

  @action update(todo: Todo) {
    let index = this.list.findIndex( t => t.id == todo.id)
    this.list[index] = todo
  }

  @computed get listCompleted() {
    console.log('Get list')
    return this.list.filter( t => t.isComplete == true)
  }

  private syncLocalData() {
    const initData = JSON.parse(localStorage.todos || '[]')
    this.list = initData.map( t => {
      let todo = new Todo()
      todo.id = t.id
      todo.title = t.title
      todo.isComplete = t.isComplete
      return todo
    })

    autorun(() => {
      localStorage.todos = JSON.stringify(toJS(this.list))
    })
  }
}
