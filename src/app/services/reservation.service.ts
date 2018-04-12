import { IReservation } from './../models/reservation';
import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ReservationService {

    constructor( private http: Http) { }

    private BASE_URL = "http://localhost:50198";
    
    getReservations(): Observable<IReservation[]> {
        return this.http
            .get(this.BASE_URL + '/api/Bookingsapi')
            .map((res: Response) => <IReservation[]>res.json())
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

};
