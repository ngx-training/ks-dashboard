import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BooksOverviewModule } from './books-overview/books-overview.module';
import { BookCreateModule } from './book-create/book-create.module';
import { BookDetailModule } from './book-detail/book-detail.module';


@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksOverviewModule,
    BookCreateModule,
    BookDetailModule
  ]
})
export class BooksModule { }
