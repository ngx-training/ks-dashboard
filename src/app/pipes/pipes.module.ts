import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListPipe } from './category-list.pipe';



@NgModule({
  declarations: [
    CategoryListPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryListPipe
  ]
})
export class PipesModule { }
