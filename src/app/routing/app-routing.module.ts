import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent}   from '../component/login/login.component';
import{DashboardComponent} from '../component/dashboard/dashboard.component'
import {AppComponent} from '../app.component'


import {AuthGuard} from '../service/auth-guard.service'

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}