import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '../services/auth/auth';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  identifier!: string;
  password!: string;

  constructor(private router: Router, private authService: AuthService) {}

  login(authData: AuthData): void {
    this.authService.login(authData);
  }

}
