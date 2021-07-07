import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:String = "http://localhost:8080/api";

  constructor(private httpClient:HttpClient) { }

  getUser(){
    return this.httpClient.get(`${this.apiUrl}/getUser`);
  }
}
