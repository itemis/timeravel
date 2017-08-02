import { Component, NgZone } from "@angular/core";

import { User } from '../../model/user'
import { AuthService } from '../../service/auth.service'

declare const gapi: any;

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})

export class LoginComponent {

  googleLoginButtonId = "google-login-button";

  constructor(private authService: AuthService, private _ngZone: NgZone) {
  }

  ngOnInit() {
    this.authService.initGoogleApi();
  }

  ngAfterViewInit() {
    this.drawSignInButton();
  }

  drawSignInButton() {
    this.authService.getGApiInstance().signin2.render(
      this.googleLoginButtonId,
      {
        // Triggered after a user successfully logs in using the Google external
        // login provider.
        onSuccess: (loggedInUser) => {
          this.onUserLogin(loggedInUser);
        },
        "scope": 'email',
        "theme": "dark"
      });
  }

  onUserLogin = (loggedInUser) => {
    var user: User = new User();

    user.token = loggedInUser.getAuthResponse().id_token;
    let profile = loggedInUser.getBasicProfile();
    user.pictureUrl = profile.getImageUrl();
    user.name = profile.getName();
    user.email = profile.getEmail();

    this.authService.signInUser(user);
    this._ngZone.run(() => {
    });
  }

  logout() {
    this.authService.logout();
  }

}