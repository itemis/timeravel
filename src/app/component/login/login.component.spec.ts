import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { AuthService } from '../../service/authentication/auth.service';
import { AuthServiceStub } from '../../service/authentication/test/stub-auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule
      ],
      providers: [{
        provide: AuthService, useClass: AuthServiceStub
      }],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with the element googlebutton id', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').id).toEqual(component.googleLoginButtonId);
  });

});