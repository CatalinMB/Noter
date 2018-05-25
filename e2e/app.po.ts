import { browser, by, element } from 'protractor';

export class AppPage {

  private regCredentias = {
    email : 'test@test.com',
    username: 'test',
    password: 'test'
  };

  private logCredentias = {
    email : 'test@test.com',
    password: 'test'
  };

  navigateTo(route: string) {
    return browser.get(route);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  fillLogCredentials(credentias: any = this.logCredentias) {
    element(by.id('email-field')).sendKeys(credentias.email);
    element(by.id('password-field')).sendKeys(credentias.password);
    element(by.id('submitButton')).click();
    console.log('---------Login succeed!-----------');
  }

  fillRegCredentials(credentias: any = this.regCredentias) {
    element(by.id('semail-field')).sendKeys(credentias.email);
    element(by.id('susername-field')).sendKeys(credentias.username);
    element(by.id('spassword-field')).sendKeys(credentias.password);
    element(by.id('submitButton')).click();
    console.log('---------Register succeed!-----------');
  }

  getHeaderText() {
    return element(by.id('text-header')).getText();
  }
}
