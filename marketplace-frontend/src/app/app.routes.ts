import { NgModule } from '@angular/core';
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
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
