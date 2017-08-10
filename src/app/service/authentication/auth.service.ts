import { Injectable } from '@angular/core';

import { User } from '../../model/user'

import { GapiService } from '../googleapi/gapi.service'

@Injectable()
export class AuthService {

    gapiServiceInstance: GapiService;
    signedInUser: User;

    constructor(gapiService?: GapiService) {
        if (gapiService == null) {
            this.gapiServiceInstance = new GapiService();
        }
        else {
            this.gapiServiceInstance = gapiService;
        }
        this.signedInUser = new User();
    }

    isUserSignedIn() {
        var isSignedIn: boolean = (typeof this.signedInUser.token) != "undefined";
        isSignedIn = isSignedIn && (this.signedInUser.token != "0");
        return isSignedIn;
    }

    changeUser(user: User): void {
        this.signedInUser.email = user.email;
        this.signedInUser.name = user.name;
        this.signedInUser.token = user.token;
        this.signedInUser.pictureUrl = user.pictureUrl;
    }

    signOutUser(): void {
        var user: User = new User();
        this.changeUser(user);
    }

    logout(): void {
        this.signOutUser();
        this.gapiServiceInstance.logout();
    }

    /**
     * draws the google login button on the component passed as parameter
     * @param component the component on which the google login button shall be drawn
     */
    drawSignInButton(component): void {
        this.gapiServiceInstance.drawSignInButton(component, this.signedInUser);
    }

}