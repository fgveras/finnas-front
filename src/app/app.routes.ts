import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/register/register').then(m => m.RegisterComponent)
      }
    ]
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./home/components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'gerenciar-gastos'
    , canActivate: [authGuard]
    , title: 'Gerenciar Gastos'
    , loadChildren: () =>
      import('./aplic/gerenciar-gastos/gerenciar-gastos.route').then(r => r.GERENCIAR_GASTOS_ROUTES)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];