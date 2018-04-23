import { IRoleMember } from './../models/IRoleMember';
import { IReservation } from './../models/reservation';
import { Http, Response } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable()
export class ReservationService {

    constructor( private http: Http) { }

    private BASE_URL = "https://lmyc-server.azurewebsites.net";

    getReservations(): Observable<IReservation[]> {
        return this.http
          .get(this.BASE_URL + '/api/Bookingsapi')
          .map((res: Response) => <IReservation[]>res.json())
          .catch((err: Error) => this.handleError(Error))
    }

    getMembers():Observable<IRoleMember[]> {
      return this.http
        .get(this.BASE_URL + '/api/MembersAPI')
        .map((res: Response) => <IRoleMember[]>res.json())
        .do(data => console.log(data))
        .catch((err: Error) => this.handleError(Error))
    }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

};
