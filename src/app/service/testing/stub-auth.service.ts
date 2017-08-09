import { Injectable } from '@angular/core';

import { User } from '../../model/user'

import { AuthService } from '../auth.service'

@Injectable()

export class AuthServiceStub implements AuthService {

    gapiInstance: any;
    signedInUser: User;

    constructor() {
        var user: User = new User();
        this.signedInUser = new User();
        user.token = "dummyToken";
        user.pictureUrl = "https://dummyimage.com/600x400/000/fff&text=love";
        user.name = "awesome";
        user.email = "awesome@awesomness.com";
        this.signInUser(user);
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