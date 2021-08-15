import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";
  login() {
    if (this.email === "" || this.email === null) {
      alert("invalid email");
    }
    else if (this.password === "" || this.password === null) {
      alert("invalid password");
    }
    else if(this.password.length<8){
      alert("password must be greater than 8 digits")
    }
    else{
      alert("login successful");
      window.location.href="/recharge";
    }
}
}

