import { NgChromeExtensionPage } from './app.po';

describe('ng-chrome-extension App', () => {
  let page: NgChromeExtensionPage;

  beforeEach(() => {
    page = new NgChromeExtensionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
