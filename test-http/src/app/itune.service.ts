import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItuneService {
  
  apiURL: string = 'https://itunes.apple.com/search'

  constructor(public http: HttpClient) { }

  search(keyword: string): Observable<SearchItem[]> {
    
    let endpoint = `${this.apiURL}?term=${keyword}&media=music&limit=3`
    
    console.log('Request from API', endpoint);

    return this.http.get(endpoint).map(res => {
      
       return res['results'].map(item => { // or res.results
         return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl100,
            item.artistId,
            item.previewUrl
        )
      })

    })
  
  }
}

export class SearchItem {

  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string,
              public audioURL: string
            ) {}
}
