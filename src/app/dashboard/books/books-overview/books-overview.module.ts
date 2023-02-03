import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOverviewComponent } from './books-overview.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    BooksOverviewComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    BooksOverviewComponent
  ]
})
export class BooksOverviewModule { }
