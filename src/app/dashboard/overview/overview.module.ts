import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    OverviewComponent
  ]
})
export class OverviewModule { }
