import { browser, by, element } from 'protractor';

export class TimeravelPage {

  private static readonly logoutUrl = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=" + "/";

  navigateTo() {
    return browser.driver.get(TimeravelPage.logoutUrl).then(()=>{browser.get('/')});
  }
  
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
