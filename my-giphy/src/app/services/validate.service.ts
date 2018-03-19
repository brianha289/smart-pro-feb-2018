import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ValidateService {

  constructor() {
  }

  isValidEmail(next): boolean {
    if (!next.includes(' ')
      && next !== ''
      && this.validateEmail(next)) {
      return true
    }
    return false
  }

  isValidPassword(next): boolean {
    if (!next.includes(' ') && next !== '' && next.length >= 8) {
      return true
    }
    return false
  }

  private validateEmail(email): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

}
