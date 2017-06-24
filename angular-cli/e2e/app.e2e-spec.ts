import { PotatoPage } from './app.po';

describe('potato App', () => {
  let page: PotatoPage;

  beforeEach(() => {
    page = new PotatoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
