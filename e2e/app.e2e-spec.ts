import { TimeravelPage } from './app.po';

describe('timeravel App', () => {
  let page: TimeravelPage;

  beforeEach(() => {
    page = new TimeravelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
