import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const httpRequestInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const baseUrl = 'http://localhost:3000';
    const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
    return next(apiReq);
  };