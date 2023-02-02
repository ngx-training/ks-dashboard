import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import {CardModule} from 'primeng/card';

@NgModule({
  // Hier werden alle Komponenten, Direktiven, Pipes importiert
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ParentComponent,
    ChildOneComponent
  ],
  // Hier werden alle Module importiert
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    FormsModule,
    CardModule
  ],
  // Hier werden die Service, Logiken importiert
  providers: [],
  // Hier wird die Komponenten importiert, die für die Ausführung der Anwendung notwending
  bootstrap: [AppComponent]
})
export class AppModule { }
