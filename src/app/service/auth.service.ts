import { Injectable } from '@angular/core';
import { User } from '../model/user'

declare const gapi: any;

@Injectable()
export class AuthService {

    static readonly CLIENT_ID = "131801329119-1v00skakag3jh7d3eev6va0gbr93lc11.apps.googleusercontent.com";
    gapiInstance: any;
    private readonly signedInUser: User
    
    constructor() {
        this.gapiInstance = gapi;
        this.signedInUser = new User();
    }

    isUserSignedIn()
    {
        return this.signedInUser.token;
    }

    signInUser(user: User)
    {
        this.signedInUser.email = user.email;
        this.signedInUser.name = user.name;
        this.signedInUser.token = user.token;
        this.signedInUser.pictureUrl = user.pictureUrl;
    }

    getGApiInstance() {
        return this.gapiInstance;
    }

    get getCLIENT_ID() {
        return AuthService.CLIENT_ID;
    }

    initGoogleApi() {
        this.gapiInstance.load('auth2', this.authenticateApp);
    }

    authenticateApp = () => {
        var auth2 = gapi.auth2.init({
            client_id: AuthService.CLIENT_ID,
            hosted_domain: "itemis.de"
        }
        )
    }

    logout() {
        let homeUrl = "http://localhost:4200";
        let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
        document.location.href = logoutUrl;
    }
}