import { NgModule } from '@angular/core';
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadComponent: () =>
      import('./search/search/search.component').then((m) => m.SearchComponent),
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then((m) => m.LoginComponent),
  },
];

import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search/search.component'; 
import { GeolocationService } from './core/geolocation.service';
import { ReactiveFormsModule } from '@angular/forms';       
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';         
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
