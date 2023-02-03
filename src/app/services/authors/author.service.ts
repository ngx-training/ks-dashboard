import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  apiUrl = 'https://ngx-training.com';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Author[]> {
    const url = `${this.apiUrl}/authors`;
    return this.httpClient.get<Author[]>(url);
  }
}
