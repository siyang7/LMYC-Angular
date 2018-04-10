import { Observable } from 'rxjs/Observable';
import { IAuthentication, IUser } from './../models/user';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private BASE_URL = "http://localhost:50198";

  accessToken = "";

  constructor(private http: Http) { }
  private JsonHeader: Headers = new Headers({ 'Content-Type': 'application/json' });
  private FormHeader: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

  //check if user logged in
  isAuthenticated(): boolean {
    var accessToken = sessionStorage.getItem('access_token');
    if (this.isTokenExpired() || accessToken == null) {
      //console.log("false")
      this.resetToken();
      return false;
    }

    return true;
  }

  //check if the token that stored in session is expired
  isTokenExpired(): boolean {
    var expiration = new Date(parseInt(sessionStorage.getItem('expires_in')));
    return expiration < new Date();
  }

  //reset the token in session to null
  private resetToken(): void {
    sessionStorage.removeItem('tokenType');
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('expires_in');
  }

  //Set tokens with authentication informations
  private setToken(auth: IAuthentication): void {
    sessionStorage.setItem('tokenType', auth.token_type);
    sessionStorage.setItem('access_token', auth.access_token);
    var expiry = new Date();
    expiry.setSeconds(expiry.getTime() + auth.expires_in);
    sessionStorage.setItem('expires_in', expiry.getTime().toString());
  }
  
  login(username, password, grant_type): Observable<IAuthentication> {
    let url: string = this.BASE_URL + '/connect/token';

    var credential = {
      username: username,
      password: password,
      grant_type: grant_type
    };

    var body = "";

    for (var key in credential) {
      if (body.length) {
        body += "&";
      }

      body += key + "=";
      body += encodeURIComponent(credential[key]);
    }

    return this.http.post(url, body, { headers: this.FormHeader })
      .map(res => {
        this.setToken(res.json() as IAuthentication);
      }).catch(this.handleError);
  }

  //take an user for sign up
  signup(newUser: IUser) {
    let url: string = this.BASE_URL + '/api/AccountAPI/Register';
    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    return this.http.post(url, JSON.stringify(newUser), options)
      .map(res => {
        console.log(res.json());
        return res.json();
      }).catch(this.handleError);
  }

  //logout when user hit logout button
  logout(): void {
    this.resetToken();
  }
  //Handling the error when api failed
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
