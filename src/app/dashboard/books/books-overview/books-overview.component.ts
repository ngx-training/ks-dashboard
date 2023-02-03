import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/services/books/book';
import { BookService } from 'src/app/services/books/book.service';
import { CompCommunicationService } from 'src/app/services/comp-communication.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit, OnDestroy {

  //message$!: Observable<string>;

  subscription: Subscription = new Subscription();

  books$!: Observable<Book[]>;

  constructor(private compCommunicationService: CompCommunicationService, private bookService: BookService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.compCommunicationService.message$.subscribe(message => {
        console.log('Message: ', message);
      })
    );

    this.books$ = this.bookService.getAll();

    //this.message$ = this.compCommunicationService.message$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
