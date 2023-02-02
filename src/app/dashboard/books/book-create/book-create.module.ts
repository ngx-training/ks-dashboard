import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create.component';



@NgModule({
  declarations: [
    BookCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookCreateComponent
  ]
})
export class BookCreateModule { }
