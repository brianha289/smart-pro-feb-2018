import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

canActivate(){
  return this.authSevice.isLogin.map((isLogin: boolean) => {
    if(!isLogin) {
      this.router.navigate(['/'])
      return false
    }
    return true
  })
}
  constructor(private authSevice: AuthService, private router: Router) { }

}
