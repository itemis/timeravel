import { Injectable } from '@angular/core';

import {GapiService} from '../gapi.service';

import {User} from '../../../model/user';

export class GapiServiceStub implements GapiService{

    gapiInstance: any;

    constructor() {
    }

    getGApiInstance(): any {
        return this.gapiInstance;
    }

    initGoogleApi(): void {
    }

    authenticateApp = (): void => {
    }

    logout()
    {   
    }

    drawSignInButton(component, user): void {
    }

    onUserLogin = (loggedInUser, user: User): void => {
    }


}