import {observable} from 'mobx';

export class Todo {
  id: number
  @observable title: string
  @observable isComplete: boolean
}

