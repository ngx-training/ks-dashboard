import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroModule } from './intro/intro.module';
import { LoginModule } from './login/login.module';

@NgModule({
  // Hier werden alle Komponenten, Direktiven, Pipes importiert
  declarations: [
    AppComponent,
  ],
  // Hier werden alle Module importiert
  imports: [
    BrowserModule,
    AppRoutingModule,
    IntroModule,
    LoginModule
  ],
  // Hier werden die Service, Logiken importiert
  providers: [],
  // Hier wird die Komponenten importiert, die für die Ausführung der Anwendung notwending
  bootstrap: [AppComponent]
})
export class AppModule { }
