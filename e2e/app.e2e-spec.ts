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

  it('should signin when user logs in', () =>{
    //Check to see if button exists       
    page.navigateTo();
    /*
    var findByText = function() {
      var using = arguments[0] || document;
      var text = arguments[1];
      var matches = [];
      function addMatchingLeaves(element) {
        if (element.children.length === 0 && element.textContent.match(text)) {
          matches.push(element);
        }
        for (var i = 0; i < element.children.length; ++i) {
          addMatchingLeaves(element.children[i]);
        }
      }
      addMatchingLeaves(using);
      return matches;
    };
    */
    var signInString = "Sign in";
    
    var loginButton = browser.driver.findElement(by.css(".abcRioButtonContentWrapper"));

    
    //    browser.driver.wait(function () {
    //      return loginButton.isPresent() && loginButton.isDisplayed()  && loginButton.isEnabled()  ;
    //   }, 5000);

    //Click the button     
    loginButton.click();

    // browser.pause();

    //Sign in with to popup    
    
    browser.getAllWindowHandles().then(function (handles) {
      var popupHandle = handles[handles.length - 1];

      browser.switchTo().window(popupHandle);

      // var useAnotherAccount = browser.driver.findElement(by.xpath("//*[text()='Use another account']"));
      // useAnotherAccount.click();
      // browser.driver.sleep(2000);
      
      var email = browser.driver.findElement(by.id('identifierId'));
      email.sendKeys("okacimi" || process.env.GOOGLE_USER);

      var next = browser.driver.findElement(by.id('identifierNext'));
      next.click();

      browser.driver.sleep(2000);
      var passwd = browser.driver.findElement(by.id('password'));
      passwd.sendKeys("bla" || process.env.GOOGLE_PASSWORD);

      next = browser.driver.findElement(by.id('identifierNext'));
      next.click();

      browser.driver.sleep(2000);
      var acceptButtonExists = by.id('submit_approve_access');

      browser.driver.wait(
        function ()
        { return browser.driver.isElementPresent(acceptButtonExists); },
        5000);

      var acceptButton = element(by.id('submit_approve_access'));

      acceptButton.click();
      browser.driver.switchTo().window(handles[0]);

    });
    

  });

});
