import { Component, NgZone } from "@angular/core";
import { User } from '../../model/user'

declare const gapi: any;

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  providers: [User]
})

export class LoginComponent {

  static readonly CLIENT_ID = "131801329119-1v00skakag3jh7d3eev6va0gbr93lc11.apps.googleusercontent.com";

  gapiInstance: any;
  googleLoginButtonId = "google-login-button";

  constructor(private _ngZone: NgZone, private user: User) {
    this.gapiInstance = gapi;
  }

  get getCLIENT_ID() {
    return LoginComponent.CLIENT_ID;
  }

  ngOnInit() {
    this.initGoogleApi();
  }

  ngAfterViewInit() {
    // Converts the Google login button stub to an actual button.
    this.drawSignInButton();
  }

  initGoogleApi() {
    this.gapiInstance.load('auth2',this.authenticateApp);
  }

  authenticateApp = () => {
    var auth2 = gapi.auth2.init({
      client_id: LoginComponent.CLIENT_ID,
      hosted_domain: "itemis.de"
    }
    )
  }

  drawSignInButton() {
    this.gapiInstance.signin2.render(
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
    let homeUrl = "http://localhost:4200";
    let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
    document.location.href = logoutUrl;
  }

}