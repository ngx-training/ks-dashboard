import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/app/services/books/book';
import { BookService } from 'src/app/services/books/book.service';
import { CompCommunicationService } from 'src/app/services/comp-communication.service';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css'],
  providers: [ConfirmationService]
})
export class BooksOverviewComponent implements OnInit, OnDestroy {

  //message$!: Observable<string>;

  subscription: Subscription = new Subscription();

  books$!: Observable<Book[]>;

  constructor(
    private compCommunicationService: CompCommunicationService, 
    private bookService: BookService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.compCommunicationService.message$.subscribe(message => {
        console.log('Message: ', message);
      })
    );

    this.books$ = this.bookService.getAll();

    //this.message$ = this.compCommunicationService.message$;
  }

  showDetail(bookId: string) {
    this.router.navigate(['dashboard', 'books', 'detail', bookId]);
  }

  edit(bookId: number): void {
    this.router.navigate(['dashboard', 'books', 'edit', bookId], { queryParams: { mode: 'edit' }});
  }

  delete(bookdId: string, bookTitle: string): void {
    this.confirmationService.confirm({
      message: `Willst du das Buch "${bookTitle}" wirklich löschen?`,
      header: 'Buch löschen',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.bookService.delete(bookdId).subscribe(() => {
          this.books$ = this.bookService.getAll();
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
