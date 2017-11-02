import { TimeravelPage } from './app.po';
import { protractor, browser, by, element } from 'protractor';

const dummyUserCredentials: any = require('../src/assets/test/e2e/testGoogleCredentials.json');

describe('timeravel App', () => {
  let page: TimeravelPage;

  beforeEach(() => {
    page = new TimeravelPage();
  });

  function clickGoogleLoginButton() {
    var loginButton = browser.driver.findElement(by.css(".abcRioButtonContentWrapper"));
    loginButton.click();
  }

  function signInGoogleUser(handles) {
    var popupHandle = handles[handles.length - 1];

    browser.switchTo().window(popupHandle);

    browser.driver.findElement(by.id('identifierLink')).then(function (webElement) {
      var useAnotherAccountButton = webElement.findElement(by.xpath(".."));
      if (useAnotherAccountButton) {
        useAnotherAccountButton.click();
      }
    }, function (err) {
      console.log("the Use another account element is not present on the google sign in page ");
    });


    browser.driver.sleep(2000);

    var email = browser.driver.findElement(by.id('identifierId'));

    email.sendKeys( dummyUserCredentials.username || process.env.GOOGLE_USER);

    var next = browser.driver.findElement(by.id('identifierNext'));
    next.click();

    browser.driver.sleep(2000);
    var passwd = browser.driver.findElement(by.name('password'));
    passwd.sendKeys( dummyUserCredentials.password || process.env.GOOGLE_PASSWORD);

    next = browser.driver.findElement(by.id('passwordNext'));
    next.click();

    browser.driver.switchTo().window(handles[0]);
    browser.driver.sleep(2000);
  }

  function signOutGoogleUser() {
    var logoutButton = browser.driver.findElement(by.css(".logoutButton"));
    logoutButton.click();
  }

  it('should display title', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Time and travel expenses reporting app');
  });

  it('should display google login button', () => {
    page.navigateTo();
    var googleLoginButtonElement = element(by.id("google-login-button"));
    expect(googleLoginButtonElement.isDisplayed()).toBeTruthy();
  });

  it('should signin when user logs in', () => {
    page.navigateTo();
    clickGoogleLoginButton();
    browser.getAllWindowHandles().then(function (handles) {
      signInGoogleUser(handles);
      var emailValElement = browser.driver.findElement(by.css(".emailVal"));
      expect<any>(emailValElement.getText()).toEqual(dummyUserCredentials.username+"@itemis.de");
    });
  });

  it('should sign out when user logs out', () => {
    page.navigateTo();

    clickGoogleLoginButton();

    browser.getAllWindowHandles().then(function (handles) {
      signInGoogleUser(handles);
      signOutGoogleUser();

      browser.driver.sleep(4000);
      var loginButton = browser.driver.findElement(by.css(".abcRioButtonContentWrapper"));
      expect<any>(browser.isElementPresent(loginButton)).toBeTruthy();

    });

  });


});
