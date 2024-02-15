import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if(localStorage.getItem('login')){
      const  authReq = request.clone({
        headers : request.headers.set('Authorization', atob(localStorage.getItem( 'token' )!) )
      })

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}

export const InterceptorProvider= {
  provide: HTTP_INTERCEPTORS, 
  useClass: AuthInterceptor, 
  multi: true 
}
