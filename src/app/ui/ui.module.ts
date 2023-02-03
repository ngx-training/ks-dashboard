import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MyDirectiveDirective } from './my-directive.directive';


@NgModule({
  declarations: [
    CardComponent,
    MyDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    MyDirectiveDirective
  ]
})
export class UiModule { }
