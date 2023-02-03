import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'https://ngx-training.com';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.apiUrl + '/books');
  }

  getById(bookId: string): Observable<Book> {
    const url = `${this.apiUrl}/books/${bookId}`;
    return this.httpClient.get<Book>(url);
  }
}
