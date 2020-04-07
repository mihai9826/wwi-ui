import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserPrincipal} from '../../../shared/models/auth/user-principal';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginRequest} from '../../../shared/models/auth/login-request';
import {CreateUserRequest} from '../../../shared/models/auth/create-user-request';

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
        map(theUser => {
          if (theUser) {
            this.currentUserSubject.next(theUser);
          }
          return theUser;
        })
      );
  }

  isUserLoggedIn(): boolean {
    return this.cookieService.check('JSESSIONID');
  }

  isUserAdmin(): boolean {
    return this.currentUserSubject.getValue() && this.currentUserSubject.getValue().theUser.role === 'ADMIN';
  }

  isUserClient(): boolean {
    return this.currentUserSubject.getValue() && this.currentUserSubject.getValue().theUser.role === 'CLIENT';
  }

  getUserId(): number {
    return this.currentUserSubject.getValue().theUser.personId;
  }

  login(user: LoginRequest): Observable<void> {
    const encodedPassword = encodeURIComponent(user.password);
    return this.http.post<void>(environment.apiBaseURL + `/login?username=${user.email}&password=${encodedPassword}`, '');
  }

  registerUser(createUserReq: CreateUserRequest): Observable<void> {
    return this.http.post<void>(environment.apiBaseURL + '/users', createUserReq);
  }

  logout(): Observable<void> {
    this.currentUserSubject = new BehaviorSubject<UserPrincipal>(null);
    return this.http.get<void>(environment.apiBaseURL + '/logout');
  }

}
