import { Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
    path: 'progress',
    loadComponent: () => import('./progress/progress.component')
  },
  {
    path: 'grafica1',
    loadComponent: () => import('./grafica1/grafica1.component')
  },
];

export default routes;
