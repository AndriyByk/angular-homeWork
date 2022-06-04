import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {AuthorisationService} from "./services/authorisation.service";
import {Router} from "@angular/router";

@Injectable()
export class CarsInterceptor implements HttpInterceptor {

  constructor(private authorisationService: AuthorisationService,
              private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAuthorized = this.authorisationService.isAuthorized();

    if (isAuthorized) {
      request = this.addToken(request, this.authorisationService.getToken());
    }
    return next.handle(request).pipe(
      // @ts-ignore
      catchError((response: HttpErrorResponse) => {
        if (response && response.error && response.status === 401) {
          this.authorisationService.deleteToken();
          this.router.navigate(['login']);
        }
      })
    );
  }


  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    console.log( "interceptor..........  " + token);
    return request.clone({
      setHeaders: {Authorisation: `Bearer ${token}`}
    });
  }
}
