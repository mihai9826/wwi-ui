import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {UserService} from '../../modules/authentication/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.userService.getCurrentUser()
      .pipe(
        map(user => {
          if (!user) {
            this.router.navigate(['/auth/login']);
          }
          return !!user;
        }),
        catchError(
          err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.router.navigate(['/auth/login'], {
                  queryParams: {
                    redirect: state.url
                  }
                });
              } else if (err.status === 404) {
                this.router.navigate(['/auth/404']);
              }
            }

            return throwError(err);
          }
        )
      );
  }
}
