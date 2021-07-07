import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./loginService";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.loginService.getToken(); 

        if(token!=null){    
            req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
            });
        }

        console.log(req);
        return next.handle(req);
    }
    
}