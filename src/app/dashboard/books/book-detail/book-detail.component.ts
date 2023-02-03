import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/services/books/book';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$!: Observable<Book>;
  bookId!: string;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.bookId = id;
    })
  }

  ngOnInit(): void {
    this.book$ = this.bookService.getById(this.bookId);
  }

}
