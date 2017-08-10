
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

import { AuthService } from '../../service/authentication/auth.service';
import { AuthServiceStub } from '../../service/authentication/test/stub-auth.service';

import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    let authServiceStub: AuthServiceStub = new AuthServiceStub();
    
    TestBed.configureTestingModule({

      providers: [{
        provide: AuthService, useValue: authServiceStub
      }],

      declarations: [DashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    spyOn(component, 'logout').and.callThrough();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p element with the text token', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.token'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("TOKEN: ");
  });

  it('should have a token', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.tokenVal'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("dummyToken");
  });

  it('should have a p element with the text name', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.name'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("NAME: ");
  });

  it('should have a name', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.nameVal'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("awesome");
  });

  it('should have a p element with the text email', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.email'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("EMAIL: ");
  });

  it('should have an email', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.emailVal'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("awesome@awesomness.com");
  });

  it('should have a profile pic and a profile pic element', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.profilePic'));
    let el: HTMLElement = de.nativeElement;
    expect(el).not.toBeNull;
    expect(el.attributes.getNamedItem("src").value).toEqual("https://dummyimage.com/600x400/000/fff&text=love");
  });

  it('should have a logout button', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.logoutButton'));
    let el: HTMLElement = de.nativeElement;
    expect(el.textContent).toEqual("Logout");
  });

  it('should call logout when logout is pressed', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.logoutButton'));
    let logoutButton = de.nativeElement;
    logoutButton.click();
    fixture.whenStable().then(
      () => {
        expect(component.logout).toHaveBeenCalled();
      });
  });

  it('should logout user when logout is pressed', () => {
    let de: DebugElement = fixture.debugElement.query(By.css('.logoutButton'));
    let logoutButton = de.nativeElement;
    logoutButton.click();
    fixture.detectChanges();
    fixture.whenStable().then(
      () => {
        let de: DebugElement = fixture.debugElement.query(By.css('.nameVal'));
        let el: HTMLElement = de.nativeElement;
        expect(el.textContent).toEqual("");
      });
  });

});
