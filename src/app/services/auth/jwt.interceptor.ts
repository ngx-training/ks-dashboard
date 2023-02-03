import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    apiUrl: string = 'https://ngx-training.com';
    loginUrl: string = `${this.apiUrl}/auth/local`;

    constructor(private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.userValue;
        const isLoggedIn = currentUser && currentUser.jwt;
        const isApiUrl = request.url.startsWith('https://ngx-training.com');
        if (isLoggedIn && isApiUrl && request.url !== this.loginUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.jwt}`
                }
            });
        }

        return next.handle(request);
    }
}