import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserPrincipal} from '../../../shared/models/auth/user-principal';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginRequest} from '../../../shared/models/auth/login-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUserSubject: BehaviorSubject<UserPrincipal>;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    this.currentUserSubject = new BehaviorSubject<UserPrincipal>(null);
  }

  getCurrentUser(): Observable<UserPrincipal> {
    return this.http.get<UserPrincipal>(environment.apiBaseURL + '/me')
      .pipe(
        map(user => {
          if (user) {
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  public isUserLoggedIn(): boolean {
    return this.cookieService.check('JSESSIONID');
  }

  login(user: LoginRequest): Observable<void> {
    const encodedPassword = encodeURIComponent(user.password);
    return this.http.post<void>(environment.apiBaseURL + `/login?username=${user.email}&password=${encodedPassword}`, '');
  }

  logout(): Observable<void> {
    this.currentUserSubject = new BehaviorSubject<UserPrincipal>(null);
    console.log('LOGOUT');
    //this.cookieService.delete('JSESSIONID', '/', 'localhost');
    return this.http.get<void>(environment.apiBaseURL + '/logout');
  }

}
