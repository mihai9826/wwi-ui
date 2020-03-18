import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router, private cookieService: CookieService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => this.interceptErrors(error)));
  }

  private interceptErrors(response: HttpErrorResponse) {

    if (response.status === 401 || response.status === 403) {
      this.cookieService.delete('JSESSIONID', '/', 'localhost', false, 'Lax');
    }
    // if (response.url.includes('http://localhost:8080/login')) {
    //   this.router.navigate(['auth/login']);
    // }
    return throwError(response);
  }
}
