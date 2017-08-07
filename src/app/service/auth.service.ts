import { Injectable } from '@angular/core';
import { User } from '../model/user'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

declare const gapi: any;

@Injectable()
export class AuthService {

    static readonly CLIENT_ID = "131801329119-1v00skakag3jh7d3eev6va0gbr93lc11.apps.googleusercontent.com";
    gapiInstance: any;
    signedInUser: User;
    
    signedInUserSubject: BehaviorSubject<User>;
    
    constructor() {
        this.gapiInstance = gapi;
        this.signedInUser = new User();
        this.signedInUserSubject= new BehaviorSubject<User>(this.signedInUser) ;
    }

    isUserSignedIn()
    {
        var isSignedIn:boolean = this.signedInUser.token && (this.signedInUser.token!="0");
        return isSignedIn;
    }

    signInUser(user:User)
    {
        this.changeUser(user);
    }

    changeUser(user: User)
    {
        this.signedInUser.email = user.email;
        this.signedInUser.name = user.name;
        this.signedInUser.token = user.token;
        this.signedInUser.pictureUrl = user.pictureUrl;
        this.signedInUserSubject.next(user);
    }

    signOutUser()
    {
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
        var auth2 = gapi.auth2.init({
            client_id: AuthService.CLIENT_ID,
            hosted_domain: "itemis.de"
        }
        )
    }

    logout() {
        this.signOutUser();
        let homeUrl = "http://localhost:4200";
        let logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + homeUrl;
        document.location.href = logoutUrl;
    }
}