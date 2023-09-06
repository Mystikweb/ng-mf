import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'modulea',
    loadChildren: () =>
      loadRemoteModule('modulea', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'moduleb',
    loadChildren: () =>
      loadRemoteModule('moduleb', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
