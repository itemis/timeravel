import { Component, OnInit, NgZone} from '@angular/core';

import { AuthService } from '../../service/auth.service'

import { User } from '../../model/user';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
//, OnDestroy, AfterViewInit, AfterViewChecked
 {
 // subscription: Subscription;

  constructor(private authService: AuthService, private _ngZone: NgZone) {
    console.debug("dashboard constructor called");
  }

  ngOnInit() {
    console.debug("dashboard ngOnInitCalled");
  }

  logout() {
    this.authService.logout();
  }
}
