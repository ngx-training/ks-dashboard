import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOverviewComponent } from './books-overview.component';



@NgModule({
  declarations: [
    BooksOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BooksOverviewComponent
  ]
})
export class BooksOverviewModule { }
