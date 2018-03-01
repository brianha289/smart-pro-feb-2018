import { Injectable } from '@angular/core';
import {Todo, TODOS} from '../model/todo';

@Injectable()
export class TaskService {
  list: Todo[]

  constructor() { }

  getTask() {
    this.list = TODOS
  }

  addTask(todo: Todo) {
    this.list.push(todo)
  }
}
