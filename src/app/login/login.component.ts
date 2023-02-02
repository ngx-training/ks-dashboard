import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor() {}

  login(formValue: any): void {
    console.log('FOrmValue: ', formValue);
  }

}
