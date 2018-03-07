import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public router: Router, public authService: AuthService) {
    
  }

  doLogin() {
    this.authService.doLogin(new User('ABC', '*****'))
  }

  doLogout() {
    this.authService.doLogout()
  }
}
