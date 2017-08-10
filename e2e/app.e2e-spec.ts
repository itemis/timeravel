import { TimeravelPage } from './app.po';
import { protractor, browser, by, element } from 'protractor';
describe('timeravel App', () => {
  let page: TimeravelPage;

  beforeEach(() => {
    page = new TimeravelPage();
  });

  it('should display welcome message', () => {
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

    var signInString = "Sign in";

    var loginButton = browser.driver.findElement(by.css(".abcRioButtonContentWrapper"));

    loginButton.click();

    browser.getAllWindowHandles().then(function (handles) {
      var popupHandle = handles[handles.length - 1];

      browser.switchTo().window(popupHandle);

      var email = browser.driver.findElement(by.id('identifierId'));
      email.sendKeys("okacimi" || process.env.GOOGLE_USER);

      var next = browser.driver.findElement(by.id('identifierNext'));
      next.click();

      browser.driver.sleep(2000);
      var passwd = browser.driver.findElement(by.name('password'));
      passwd.sendKeys("F@tim@08" || process.env.GOOGLE_PASSWORD);

      next = browser.driver.findElement(by.id('passwordNext'));
      next.click();

      browser.driver.switchTo().window(handles[0]);    
      browser.driver.sleep(2000);
      
    });


  });

});
