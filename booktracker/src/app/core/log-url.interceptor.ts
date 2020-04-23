import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LogUrlInterceptor implements HttpInterceptor{
  constructor(private readonly _loggerService: LoggerService){

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loggerService.log(`HTTP Request: ${req.url}`);

    return next.handle(req);
  }
}
