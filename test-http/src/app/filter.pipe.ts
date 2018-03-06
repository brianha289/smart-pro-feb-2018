import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value: any, args?: any): any[] {
    // return null;
    if(!items) {
      return []
    }
    if(!value) {
      return items
    }
    value = value.toLowerCase()
    return items.filter(next => {
      return next.artist.toLowerCase().includes(value)
    })
  }

}
