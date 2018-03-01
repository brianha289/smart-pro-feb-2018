import { Component, OnInit } from '@angular/core';
import {Todo, TODOS} from '../model/todo';
// import {TODOS} from '../model/todo';
import {TaskService} from '../todo/task.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todos: Todo[]
  currentTitle: string

  constructor(public ts: TaskService) { }

  ngOnInit() {
    // this.todos = TODOS;
    this.ts.getTask()
  }
  
  addTask() {
    if(this.currentTitle !== null) {
      var task = {title: this.currentTitle, isComplete: false}
      this.ts.addTask(task)
    }
  }
  // doTask(todo: Todo) {
  //   // console.log('Change: ', todo.isComplete)
  //   // todo.isComplete = todo.isComplete
  //   console.log('Changed: ', todo.isComplete)
  // }

  // addTask() {
  //   console.log('Add :', this.currentTitle);
    // if(this.currentTitle !== null) {
    //   this.todos.push({title: this.currentTitle, isComplete: false})
    // }
    
  // }

}
