import { HttpHandler,HttpEvent,HttpHeaders, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";

@Injectable()

export class token implements HttpInterceptor {
    auth_token = "acdssedswww67485vjdjskjjf";
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const newReq =  req.clone({
            url : 'https://dummyjson.com/'+req.url,
            setHeaders : {
                'content-type' : 'application/json',
                'Authorization' : `Bearer ${this.auth_token}`
             }
       })
       return next.handle(newReq).pipe(
         retry(2),
         catchError((err:HttpErrorResponse) => {
            console.log("Route to error page");
            return throwError(err.message)
         })
       )
    }
}