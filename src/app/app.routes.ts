import { Routes } from '@angular/router';

export const routes: Routes = [
  // dashboard
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/pages.component'),
    loadChildren: () => import('./pages/pages.routes'),
  },
  // auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./nopagefound/nopagefound.component') },
];
