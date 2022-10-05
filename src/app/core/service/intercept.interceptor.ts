import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const data: any = window.localStorage.getItem('user');

    const tocken = JSON.parse(data).accessToken;

    let headers = request.headers.set('Authorization', `Bearer ${tocken}`);
    const dupReq = request.clone({
      headers: headers,
    });
    return next.handle(dupReq);
  }
}
