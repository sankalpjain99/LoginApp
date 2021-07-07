import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credentials : {
    username:string,
    password:string
  };

  constructor(private loginService:LoginService) {
    this.credentials = {
      username:'',
      password:''
    }
  }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()){
      window.location.href="/dashboard";
    }
  }

  onSubmit(){
    if(this.credentials.username!='' && this.credentials.password!=''){
      this.loginService.generateToken(this.credentials).subscribe((token:any) => {
        this.loginService.loginUser(token.jwt);
        window.location.href="/dashboard";
      },
      error => {
        console.log(error);
      });
    } else{
      alert("Values are required");
    }
  }

}
