import { Component } from '@angular/core';
import {ItuneService, SearchItem} from './itune.service';
import { Observable } from 'rxjs/Observable';
import {FormGroup, FormControl} from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  filterName: string
  isLoading: boolean = false
  searchForm: FormGroup
  title = 'app';
  list: SearchItem[];
  result: Observable<SearchItem[]>

  constructor(public is: ItuneService) {
    // this.is.search('Hello').subscribe(next => {
    //   // console.log(next);
    //   this.list = next;
    // });

    this.searchForm = new FormGroup({
      search: new FormControl()
    });

    const control = this.searchForm.get('search');
    // control.valueChanges.subscribe(next=>{
    //   console.log(next)
    //   this.result = this.is.search(next)
    // })
    

    this.result = control.valueChanges
    .debounceTime(400).distinctUntilChanged()
    .do(_ => {
      console.log('Begin')
      this.isLoading = true
    })
    .switchMap((term: string) => 
       this.is.search(term)
    )
    .do(_ => {
      console.log('End')
      this.isLoading = false
    })

    // this.result = this.is.search('You');
  }
}
