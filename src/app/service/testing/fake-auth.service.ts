import { Injectable } from '@angular/core';

import { User } from '../../model/user'

import { AuthService } from '../auth.service'

@Injectable()

export class FakeAuthService implements AuthService {

    gapiInstance: any;
    signedInUser: User;

    constructor() {
        this.signedInUser = new User();
    }

    isUserSignedIn() {
        var isSignedIn: boolean = this.signedInUser.token && (this.signedInUser.token != "0");
        return isSignedIn;
    }

    signInUser(user: User) {
        this.changeUser(user);
    }

    changeUser(user: User) {
        this.signedInUser.email = user.email;
        this.signedInUser.name = user.name;
        this.signedInUser.token = user.token;
        this.signedInUser.pictureUrl = user.pictureUrl;
    }

    signOutUser() {
        var user: User = new User();
        this.changeUser(user);
    }

    getGApiInstance() {
        return this.gapiInstance;
    }

    initGoogleApi() {
        this.gapiInstance.load('auth2', this.authenticateApp);
    }

    authenticateApp = () => {
    }

    logout() {
        this.signOutUser();
    }

    /**
     * draws the google login button on the component passed as parameter
     * @param component the component on which the google login button shall be drawn
     */
    drawSignInButton(component) {
        component._ngZone.run(
            () => { successfulSignInCallback(loggedInUser));
    }

    onUserLogin = (loggedInUser) => {
        var user: User = new User();
        user.token = loggedInUser.getAuthResponse().id_token;
        let profile = loggedInUser.getBasicProfile();
        user.pictureUrl = profile.getImageUrl();
        user.name = profile.getName();
        user.email = profile.getEmail();
        this.signInUser(user);
    }

}