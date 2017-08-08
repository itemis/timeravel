import { Component, NgZone, OnInit, AfterViewInit } from "@angular/core";

import { User } from '../../model/user'
import { AuthService } from '../../service/auth.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})

export class LoginComponent implements OnInit, AfterViewInit {

  googleLoginButtonId = "google-login-button";

  constructor(
    private authService: AuthService, private _ngZone: NgZone) {
    console.debug("login constructor called");
  }

  ngOnInit() {
    this.authService.initGoogleApi();
    console.debug("login ngOnInit called");
  }

  ngAfterViewInit() {
    this.drawSignInButton();
  }

  drawSignInButton() {
    this.authService.getGApiInstance().signin2.render(
      this.googleLoginButtonId,
      {
        onSuccess: (loggedInUser) => {
          this._ngZone.run(
            () => { this.onUserLogin(loggedInUser);}
          );
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
  }


}