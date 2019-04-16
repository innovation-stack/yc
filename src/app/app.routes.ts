import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
];
