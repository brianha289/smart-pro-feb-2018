import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MapProvider {
  selectedType: any = 'rb-1-0'
  currentMapType: BehaviorSubject<MapType>
  types: MapType[] = []

  constructor() {
    
    this.defaultTypes()
    this.currentMapType = new BehaviorSubject<MapType>(new MapType('rb-1-0', 'RoadMap'))
    this.updateMapType(this.selectedType)
  }

  private defaultTypes() {
    this.types.push(new MapType('rb-1-0', 'RoadMap'))
    this.types.push(new MapType('rb-2-0', 'Satellite'))
    this.types.push(new MapType('rb-3-0', 'Hybrid'))
    this.types.push(new MapType('rb-4-0', 'Terrain'))
  }

  updateMapType(id) {
    this.types.forEach(e => {
      if (e.id == id) {
        this.currentMapType.next(e)
        this.selectedType = id
        return
      }
    })
  }

}

export class MapType {
  id: string
  name: string
  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}