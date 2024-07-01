import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'wizard', loadChildren: () => import('./modules/wizard/wizard-routing.module').then(m => m.WizardRoutingModule) }
];
