import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    CheckboxModule,
    MultiSelectModule,
    CalendarModule,
    InputNumberModule
  ],
  exports: [
    BookCreateComponent
  ]
})
export class BookCreateModule { }
