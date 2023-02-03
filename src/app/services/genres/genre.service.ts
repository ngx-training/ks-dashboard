import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from './genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl = 'https://ngx-training.com';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Genre[]> {
    const url = `${this.apiUrl}/genres`;
    return this.httpClient.get<Genre[]>(url);
  }
}
