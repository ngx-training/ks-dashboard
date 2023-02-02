import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';



@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookDetailComponent
  ]
})
export class BookDetailModule { }
