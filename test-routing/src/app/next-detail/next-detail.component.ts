import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next-detail',
  templateUrl: './next-detail.component.html',
  styleUrls: ['./next-detail.component.css']
})
export class NextDetailComponent implements OnInit {
  param1: string
  constructor(private activatedRouter: ActivatedRoute) { 
    this.param1 = this.activatedRouter.snapshot.paramMap.get('param1')
  }

  ngOnInit() {
    
  }

}
