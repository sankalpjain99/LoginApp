import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./loginService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let newReq=req;
        let token = this.loginService.getToken(); 

        console.log(req.headers);

        if(token!=null){
            newReq = newReq.clone({setHeaders:{"Authorization":`Bearer ${token}`}});
        }

        if (!newReq.headers.has('Content-Type')) {
            newReq = newReq.clone({ headers: newReq.headers.set('Content-Type', 'application/json') });
        }

        newReq = newReq.clone({ headers: newReq.headers.set('Accept', 'application/json') });

        console.log(newReq.headers);

        return next.handle(newReq);
    }
    
}