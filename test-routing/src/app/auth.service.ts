import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  login: Observable<boolean> = Observable.of(false)

  get isLogin() {
    return this.login
  }

  doLogin(user: User) {
    if(user.userName !== '' && user.password !== '') {
      this.login = Observable.of(true)
    }
  }

  doLogout() {
    this.login = Observable.of(false)
  }

  constructor(private router: Router) { }

}
