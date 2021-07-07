import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl:String = "http://localhost:8080/api";

  constructor(private httpClientModule: HttpClient) { }

  generateToken(credentials:any){
    return this.httpClientModule.post(`${this.apiUrl}/authenticate`, credentials);
  }

  loginUser(token:string):boolean{
    localStorage.setItem("Token", token);
    return true;
  }

  isLoggedIn():boolean{
    let token = localStorage.getItem("Token");
    if(token==undefined || token=='' || token==null){
      return false;
    } else{
      return true;
    } 
  }

  logoutUser():boolean{
    localStorage.removeItem("Token");
    return true;
  }

  getToken(){
    return localStorage.getItem("Token");
  }
}
