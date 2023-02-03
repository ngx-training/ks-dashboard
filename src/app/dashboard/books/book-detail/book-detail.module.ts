import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';
import { PanelModule } from 'primeng/panel';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    PipesModule,
    ChipModule,
    TagModule
  ],
  exports: [
    BookDetailComponent
  ]
})
export class BookDetailModule { }
