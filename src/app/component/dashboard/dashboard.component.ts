import { Component, OnInit, NgZone} from '@angular/core';

import { AuthService } from '../../service/authentication/auth.service'

import { User } from '../../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
 {

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
