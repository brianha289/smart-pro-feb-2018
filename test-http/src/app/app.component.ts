import { Component } from '@angular/core';
import {ItuneService, SearchItem} from './itune.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  list: SearchItem[];
  result: Observable<SearchItem[]>

  constructor(public is: ItuneService) {
    // this.is.search('Hello').subscribe(next => {
    //   // console.log(next);
    //   this.list = next;
    // });

    this.result = this.is.search('You');
  }
}
