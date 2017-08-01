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

  userAuthToken = null;
  userDisplayName = "empty";

  get getCLIENT_ID() {
    return LoginComponent.CLIENT_ID;
  }

  ngOnInit() {
  }

  constructor(private user: User) {
    this.gapiInstance = gapi;
    /*
    this.getData();
    */
  }

  // Angular hook that allows for interaction with elements inserted by the
  // rendering of a view.
  ngAfterViewInit() {
    // Converts the Google login button stub to an actual button.
    this.drawSignInButton();
  }

  drawSignInButton() {
    this.gapiInstance.signin2.render(
      this.googleLoginButtonId,
      {
        // Triggered after a user successfully logs in using the Google external
        // login provider.
        "onSuccess": (loggedInUser) => {
          this.user.token = loggedInUser.getAuthResponse().id_token;
          let profile = loggedInUser.getBasicProfile();
          this.user.pictureUrl = profile.getImageUrl();
          this.user.name = profile.getName();
          this.user.email = profile.getEmail();
        },
        "scope": "profile",
        "theme": "dark"
      });
  }

  logout() {
    //You will be redirected to this URL after logging out from Google.
    let homeUrl = "http://localhost:4200";
    let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
    document.location.href = logoutUrl;
  }
/*
  getData() {
    gapi.load('auth2', () =>{
      var auth2 = gapi.auth2.init({
        client_id: LoginComponent.CLIENT_ID
      }
      ).then(() =>{
        auth2 = gapi.auth2.getAuthInstance();
        if (auth2.isSignedIn.get()) {
          var profile = auth2.currentUser.get().getBasicProfile();
          
          console.log('ID: ' + profile.getId());
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log('Image URL: ' + profile.getImageUrl());
        }
      })

    });


  }
*/

}