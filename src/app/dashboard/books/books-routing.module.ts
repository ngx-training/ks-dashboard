import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksOverviewComponent } from './books-overview/books-overview.component';
import { BooksComponent } from './books.component';

const routes: Routes = [
  { 
    path: '', 
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BooksOverviewComponent
      },
      {
        path: 'create',
        component: BookCreateComponent
      },
      {
        path: 'detail/:id',
        component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
