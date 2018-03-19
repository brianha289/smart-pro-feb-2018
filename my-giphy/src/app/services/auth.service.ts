import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  isLogin: BehaviorSubject<boolean>

  setLoginWithStatus(status: boolean) {
    this.isLogin.next(status)
  }

  doLogout() {
    this.isLogin.next(false)
  }

  constructor() {
    console.log('Initialize Auth Service')
    this.isLogin = new BehaviorSubject<boolean>(false);
  }

}
