import { AuthService } from './auth.service';

import { GapiServiceStub } from '../googleapi/test/stub-gapi.service';

import { User } from '../../model/user'

import { } from 'jasmine';

describe('authentication service tests without a testbed', () => {
  let authServiceTestInstance: AuthService;

  beforeEach(
    () => {
      authServiceTestInstance = new AuthService(new GapiServiceStub());

      var testUser1: User = new User();

      testUser1.token = "dummyToken1";
      testUser1.pictureUrl = "https://dummyimage.com/600x400/000/fff&text=love";
      testUser1.name = "awesome1";
      testUser1.email = "awesome1@awesomness.com";

      authServiceTestInstance.changeUser(testUser1);
    }
  );


  it('should tell if the user is signed in',
    () => {
      expect(authServiceTestInstance.isUserSignedIn()).toBeTruthy();
      var testUser: User = new User();
      authServiceTestInstance.changeUser(testUser);
      expect(authServiceTestInstance.isUserSignedIn()).toBeFalsy();
    }
  );

  it('should change the user',
    () => {
      var testUser2: User = new User();

      testUser2.token = "dummyToken2";
      testUser2.pictureUrl = "https://dummyimage.com/600x400/000/fff&text=love";
      testUser2.name = "awesome2";
      testUser2.email = "awesome2@awesomness.com";

      var testUser1: User = new User();

      testUser1.token = "dummyToken1";
      testUser1.pictureUrl = "https://dummyimage.com/600x400/000/fff&text=love";
      testUser1.name = "awesome1";
      testUser1.email = "awesome1@awesomness.com";

      authServiceTestInstance.changeUser(testUser2);
      expect(authServiceTestInstance.signedInUser).toEqual(testUser2);

      authServiceTestInstance.changeUser(testUser1);
      expect(authServiceTestInstance.signedInUser).toEqual(testUser1);
    }
  );

  it('should sign the user out',
    () => {
      var testUser2: User = new User();

      testUser2.token = "dummyToken2";
      testUser2.pictureUrl = "https://dummyimage.com/600x400/000/fff&text=love";
      testUser2.name = "awesome2";
      testUser2.email = "awesome2@awesomness.com";

      authServiceTestInstance.changeUser(testUser2);
      authServiceTestInstance.logout();

      expect(authServiceTestInstance.signedInUser).not.toEqual(testUser2);
      expect(authServiceTestInstance.isUserSignedIn()).toBeFalsy();
      expect(typeof authServiceTestInstance.signedInUser.token).toEqual("undefined");
    }
  );

});