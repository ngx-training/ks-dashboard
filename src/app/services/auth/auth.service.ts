import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthData, JwtUser } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly loginUrl: string = 'https://ngx-training.com/auth/local';

  private currentUserSubject: BehaviorSubject<JwtUser>;

  constructor(private httpClient: HttpClient, private router: Router) {
    const initUser = JSON.parse(localStorage.getItem('currentUser') as string);
    this.currentUserSubject = new BehaviorSubject<JwtUser>(initUser);
  }

  get userValue(): JwtUser {
    return this.currentUserSubject.value;
  }

  login(authData: AuthData): void {
    this.httpClient.post<JwtUser>(this.loginUrl, authData).subscribe(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      if (user.jwt) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(<JwtUser>{});
    this.router.navigate(['/login']);
  }
}
