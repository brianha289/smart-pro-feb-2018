import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  info: string = 'Angular 5'
  constructor(private location: Location, private router: Router, private authService: AuthService) { 
    
  }

  ngOnInit() {
  
  }

  goBack() {
    // this.location.back()
    this.router.navigate(['/'])
  }

}
