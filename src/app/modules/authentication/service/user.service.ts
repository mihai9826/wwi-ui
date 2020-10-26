import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserPrincipal} from '../../../shared/models/auth/user-principal';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {LoginRequest} from '../../../shared/models/auth/login-request';
import {CreateUserRequest} from '../../../shared/models/auth/create-user-request';
import {PasswordTokenInitializationRequest} from '../../../shared/models/auth/password-token-initialization-request';
import {PasswordTokenConfirmationRequest} from '../../../shared/models/auth/password-token-confirmation-request';
import {EditUserRequest} from '../../../shared/models/auth/edit-user-request';
import {Product} from '../../../shared/models/product/product';

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

  editUserData(id: number, editUserRequest: EditUserRequest): Observable<void> {
    return this.http.put<void>(environment.apiBaseURL + `/users/${id}`, editUserRequest);
  }

  createPasswordToken(passwordToken: PasswordTokenInitializationRequest): Observable<void> {
    return this.http.post<void>(environment.apiBaseURL + '/password-token', passwordToken);
  }

  confirmPasswordReset(passwordResetConfirmationRequest: PasswordTokenConfirmationRequest, token: string): Observable<void> {
    return this.http.put<void>(environment.apiBaseURL + `/password?token=${token}`, passwordResetConfirmationRequest);
  }

  logout(): Observable<void> {
    this.currentUserSubject = new BehaviorSubject<UserPrincipal>(null);
    return this.http.get<void>(environment.apiBaseURL + '/logout');
  }

  getFavoriteItems(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiBaseURL + `/client/users/${this.getUserId()}/favorites`);
  }

  deleteFavoriteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(environment.apiBaseURL + `/client/users/${this.getUserId()}/favorites/${itemId}`);
  }

  addItemToFavorite(itemId: number): Observable<void> {
    return this.http.put<void>(environment.apiBaseURL + `/client/users/${this.getUserId()}/favorites`, itemId);
  }

}
