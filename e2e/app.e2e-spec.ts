import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('noter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should register an user', () => {
    page.navigateTo('/signup');
    page.fillRegCredentials();
    expect(page.getHeaderText()).toEqual('Register');

  });

  it('should login with the user info', () => {
    page.navigateTo('/login');
    page.fillLogCredentials();
    expect(page.getHeaderText()).toEqual('Welcome!');
  });

  it('shouldn\'t allow to navigate through other routes', () =>{
    page.navigateTo('/');
    page.navigateTo('/todo');
    page.navigateTo('/welcome');
    page.navigateTo('/note');
    page.navigateTo('/reminder');
    expect(page.getHeaderText()).toEqual('Welcome!');
  });

});
