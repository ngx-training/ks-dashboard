import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

import { IntroModule } from './intro/intro.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/auth/jwt.interceptor';

@NgModule({
  // Hier werden alle Komponenten, Direktiven, Pipes importiert
  declarations: [
    AppComponent,
  ],
  // Hier werden alle Module importiert
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IntroModule,
    LoginModule,
    HttpClientModule
  ],
  // Hier werden die Service, Logiken importiert
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  // Hier wird die Komponenten importiert, die für die Ausführung der Anwendung notwending
  bootstrap: [AppComponent]
})
export class AppModule { }
