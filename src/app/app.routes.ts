import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login/login';
import { HomeLayout } from './shared/layouts/home-layout/home-layout';
import { Home } from './pages/home/home/home';
import { DashboardLayout } from './shared/layouts/dashboard-layout/dashboard-layout';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
    ],
  },
  {
    path: 'auth/login',
    component: Login,
  },
];
