import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authData = window.btoa("demo" + ":" + "iyAkQN24Vo");
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${authData}`,
      },
    });
    return next.handle(request);
  }
}
