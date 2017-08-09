import { Injectable } from '@angular/core';
import { User } from '../model/user'

declare const gapi: any;

@Injectable()
export class AuthService {

    static readonly CLIENT_ID = "131801329119-1v00skakag3jh7d3eev6va0gbr93lc11.apps.googleusercontent.com";
    gapiInstance: any;
    signedInUser: User;
    private static readonly homeUrl = "http://localhost:4200";
    private static readonly logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + AuthService.homeUrl;

    constructor() {
        this.gapiInstance = gapi;
        this.signedInUser = new User();
    }

    isUserSignedIn() {
        var isSignedIn: boolean = this.signedInUser.token && (this.signedInUser.token != "0");
        return isSignedIn;
    }

    signInUser(user: User): void {
        this.changeUser(user);
    }

    changeUser(user: User): void {
        this.signedInUser.email = user.email;
        this.signedInUser.name = user.name;
        this.signedInUser.token = user.token;
        this.signedInUser.pictureUrl = user.pictureUrl;
    }

    signOutUser(): void  {
        var user: User = new User();
        this.changeUser(user);
    }

    getGApiInstance(): any {
        return this.gapiInstance;
    }

    initGoogleApi(): void {
        this.gapiInstance.load('auth2', this.authenticateApp);
    }

    authenticateApp = (): void => {
        var auth2 = gapi.auth2.init({
            client_id: AuthService.CLIENT_ID,
            hosted_domain: "itemis.de"
        }
        )
    }

    logout(): void {
        this.signOutUser();
        document.location.href = AuthService.logoutUrl;
    }
    
    /**
     * draws the google login button on the component passed as parameter
     * @param component the component on which the google login button shall be drawn
     */
    drawSignInButton(component) : void{
        this.getGApiInstance().signin2.render(
            //the id of the div element where the google login button shall be drawn
            component.googleLoginButtonId,
            {
                onSuccess: (loggedInUser) => {
                    component._ngZone.run(
                        () => { this.onUserLogin(loggedInUser); }
                    );
                },
                "scope": 'email',
                "theme": "dark"
            });
    }

    onUserLogin = (loggedInUser): void => {
        var user: User = new User();
        user.token = loggedInUser.getAuthResponse().id_token;
        let profile = loggedInUser.getBasicProfile();
        user.pictureUrl = profile.getImageUrl();
        user.name = profile.getName();
        user.email = profile.getEmail();
        this.signInUser(user);
    }

}