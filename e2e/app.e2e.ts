import { NLiveWebsitePage } from './app.po';

describe('n-live-website App', function() {
  let page: NLiveWebsitePage;

  beforeEach(() => {
    page = new NLiveWebsitePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('n-live-website works!');
  });
});
