import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOverviewComponent } from './books-overview.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    BooksOverviewComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PipesModule,
    ConfirmDialogModule
  ],
  exports: [
    BooksOverviewComponent
  ]
})
export class BooksOverviewModule { }
