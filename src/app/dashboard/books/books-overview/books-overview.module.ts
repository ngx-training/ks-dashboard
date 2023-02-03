import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOverviewComponent } from './books-overview.component';
import { TableModule } from 'primeng/table';
import { CategoryListPipe } from 'src/app/pipes/category-list.pipe';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    BooksOverviewComponent,
    CategoryListPipe
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    BooksOverviewComponent
  ]
})
export class BooksOverviewModule { }
