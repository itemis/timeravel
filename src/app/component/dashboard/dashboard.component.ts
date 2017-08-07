import { Component, OnInit, OnDestroy, NgZone, AfterViewInit, AfterViewChecked, ChangeDetectorRef, Input, OnChanges, SimpleChanges } from '@angular/core';

import { AuthService } from '../../service/auth.service'

import { User } from '../../model/user';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  subscription: Subscription;

  constructor(private authService: AuthService, private _ngZone: NgZone, private ref: ChangeDetectorRef) {
    this.subscription = this.authService.signedInUserSubject.subscribe((signedInUser: User) => this.onAuthServiceUserchange(signedInUser));
  }

  ngOnInit() {
    this.logToConsole("dashboard ngOnInitCalled");
    this.logToConsole("logging in user: " + this.authService.signedInUser.token);
    this.subscription = this.authService.signedInUserSubject.subscribe((signedInUser: User) => this.onAuthServiceUserchange(signedInUser));
    this._ngZone.run(() => { });
  }

  ngAfterViewChecked() {
    this._ngZone.run(() => { });
  }

  ngAfterViewInit() {
    // this._ngZone.run(() => { });
    /*
    this._ngZone.run(() => { });
  */
  }

  onAuthServiceUserchange = (signedInUser: User) => {
    this.logToConsole("logging the user after its change from the dasboard component, new signed in user: " + signedInUser.token);
    /*
    this._ngZone.run(() => { });
    this.ref.markForCheck();
    */
  }

  private logToConsole(item) {
    console.error(item);
  }

  private debugLog() {
    console.debug("template works");
    this._ngZone.run(() => { });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  logout() {
    this.authService.logout();
  }
}
