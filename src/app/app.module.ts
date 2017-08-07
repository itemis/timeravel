import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './routing/app-routing.module';

import { AuthGuard } from './service/auth-guard.service'
import { AuthService } from './service/auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
    //,
    //AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  providers: [AuthService
  //  , AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
