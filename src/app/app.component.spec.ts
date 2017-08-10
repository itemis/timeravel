import {NO_ERRORS_SCHEMA} from '@angular/core';

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import {LoginComponent} from './component/login/login.component'
import {DashboardComponent} from './component/dashboard/dashboard.component'

import {AuthService} from './service/authentication/auth.service';
import {AuthServiceStub} from './service/authentication/test/stub-auth.service';

import {} from 'jasmine';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[{
        provide: AuthService, useClass: AuthServiceStub
      }],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent, LoginComponent,DashboardComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Time and travel expenses reporting app');
  }));
});
