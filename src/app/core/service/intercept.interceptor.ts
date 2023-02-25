import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const tocken: string = this.authService.getTocken();
    //const isExpire:boolean = this.authService.isExpireUser();
    const data: any = localStorage.getItem('user');
    const tocken = JSON.parse(data)?.accessToken;
    if (tocken) {
      let headers = request.headers.set('Authorization', `Bearer ${tocken}`);
      const dupReq = request.clone({
        headers: headers,
      });
    }
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
          }
        }
        return throwError(err);
      })
    );
  }
}
