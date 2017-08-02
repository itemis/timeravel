import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent}   from '../component/login/login.component';
import {AppComponent} from '../app.component'
import {AuthGuard} from './app-routing.auth-guard'

const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}