import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookCategory } from './book-category';

@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {

  apiUrl = 'https://ngx-training.com';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BookCategory[]> {
    const url = `${this.apiUrl}/book-categories`;
    return this.httpClient.get<BookCategory[]>(url);
  }
}
