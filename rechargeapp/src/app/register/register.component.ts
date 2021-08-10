import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = "";
  email: string = "";
  password: string = "";
  register() {
    if (this.name === "" || this.name === null) {
      alert("Name cannot be empty");
    }
    else if (this.email === "" || this.email === null) {
      alert("invalid email");
    }
    else if (this.password.length<8) {
      alert("password must be greater than 8 digits");
    }
    else {
      alert("registered successfully");
      window.location.href="login";
    }
  }
}
