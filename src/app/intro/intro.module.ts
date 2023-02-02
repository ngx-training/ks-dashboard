import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ParentComponent } from './parent/parent.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { IntroComponent } from './intro.component';

@NgModule({
  declarations: [
    ChildOneComponent,
    ChildTwoComponent,
    ParentComponent,
    SecondComponent,
    FirstComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    FormsModule,
    CardModule,
  ],
  exports: [
    ParentComponent,
    FirstComponent
  ]
})
export class IntroModule { }
