import { Component, NgZone, OnInit, AfterViewInit } from "@angular/core";

import { User } from '../../model/user'
import { AuthService } from '../../service/authentication/auth.service'

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit, AfterViewInit {

  googleLoginButtonId = "google-login-button";
  returnUrl: string;

  constructor(
    private authService: AuthService, private _ngZone: NgZone) {
    console.debug("login constructor called");
  }

  ngOnInit() {
    console.debug("login ngOnInit called");
  }

  ngAfterViewInit() {
    this.drawSignInButton();
  }

  drawSignInButton() {
    this.authService.drawSignInButton(this);
  }

}