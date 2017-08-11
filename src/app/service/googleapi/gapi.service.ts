import { Injectable } from '@angular/core';

import { User } from '../../model/user'

declare const gapi: any;

export class GapiService {

    private static readonly CLIENT_ID = "131801329119-1v00skakag3jh7d3eev6va0gbr93lc11.apps.googleusercontent.com";
    private static readonly homeUrl = "http://localhost:4200";
    private static readonly logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + GapiService.homeUrl;

    gapiInstance: any;

    constructor() {
        this.gapiInstance = gapi;
        this.initGoogleApi();
    }

    getGApiInstance(): any {
        return this.gapiInstance;
    }

    initGoogleApi(): void {
        this.gapiInstance.load('auth2', this.authenticateApp);
    }

    authenticateApp = (): void => {
        var auth2 = gapi.auth2.init({
            client_id: GapiService.CLIENT_ID,
            hosted_domain: "itemis.de"
        }
        )
    }

    logout() {
        document.location.href = GapiService.logoutUrl;
    }

    /**
     * draws the google login button on the component passed as parameter
     * @param component the component on which the google login button shall be drawn
     * @param user reference to the user object that shall contain the information of the signed in suer on successful sign in
     */
    drawSignInButton(component, user): void {
        this.getGApiInstance().signin2.render(
            //the id of the div element where the google login button shall be drawn
            component.googleLoginButtonId,
            {
                'onSuccess': (loggedInUser) => {
                    component._ngZone.run(
                        () => { this.onUserLogin(loggedInUser, user); }
                    );
                },
                'scope': 'email',
                'theme': "dark"
            });
    }

    onUserLogin = (loggedInUser, user: User): void => {
        user.token = loggedInUser.getAuthResponse().id_token;
        let profile = loggedInUser.getBasicProfile();
        user.pictureUrl = profile.getImageUrl();
        user.name = profile.getName();
        user.email = profile.getEmail();
    }

}