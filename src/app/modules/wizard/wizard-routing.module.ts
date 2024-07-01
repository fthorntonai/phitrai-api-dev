import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WizardRoutingModule { }