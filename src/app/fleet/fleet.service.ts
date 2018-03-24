import { BoatStatus } from './../models/boat';
import { Injectable } from '@angular/core';
import { Boat } from '../models/boat';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { BOATS } from './mock-boats';

@Injectable()
export class FleetService {

  constructor() { }
  
  getFleets(): Observable<Boat[]> {
    return of(BOATS)
  }

}
