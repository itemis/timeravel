import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../service/auth.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;

  constructor(private authService: AuthService, private _ngZone: NgZone) { 
    this.subscription = this.authService.signedInUserSubject.subscribe(() => this.onAuthServiceUserchange());
  }

  ngOnInit() {
    this.subscription = this.authService.signedInUserSubject.subscribe(() => this.onAuthServiceUserchange());
  }

  onAuthServiceUserchange = () => {
    this._ngZone.run(() => { });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  logout() {
    this.authService.logout();
  }
}
