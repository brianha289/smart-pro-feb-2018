import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.setLoginWithStatus(false)
  }

  doLogout() {
    this.authService.doLogout()
  }

}
