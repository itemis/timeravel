import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService } from './service/authentication/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
