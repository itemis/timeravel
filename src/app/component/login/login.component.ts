import { Component, NgZone } from "@angular/core";
import { User } from '../../model/user'
import {AuthService} from '../../service/auth.service'

declare const gapi: any;

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  providers: [User,AuthService]
})

export class LoginComponent {

  googleLoginButtonId = "google-login-button";

  constructor(private authService: AuthService, private _ngZone: NgZone, private readonly user: User) {
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
          this.user.token = loggedInUser.getAuthResponse().id_token;
          let profile = loggedInUser.getBasicProfile();
          this.user.pictureUrl = profile.getImageUrl();
          this.user.name = profile.getName();
          this.user.email = profile.getEmail();
          this._ngZone.run(() => {
          });
        },
        "scope": 'email',
        "theme": "dark"
      });
  }

  logout() {
    this.authService.logout();
  }

}