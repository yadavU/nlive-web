export class NLiveWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('n-live-website-app h1')).getText();
  }
}
