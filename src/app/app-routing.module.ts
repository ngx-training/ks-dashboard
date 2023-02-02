import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'intro'
  },
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  { path: 'books', loadChildren: () => import('./dashboard/books/books.module').then(m => m.BooksModule) },
  {
    path: '**',
    redirectTo: 'intro'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
