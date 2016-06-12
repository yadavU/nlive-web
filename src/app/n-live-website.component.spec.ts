import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NLiveWebsiteAppComponent } from '../app/n-live-website.component';

beforeEachProviders(() => [NLiveWebsiteAppComponent]);

describe('App: NLiveWebsite', () => {
  it('should create the app',
      inject([NLiveWebsiteAppComponent], (app: NLiveWebsiteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'n-live-website works!\'',
      inject([NLiveWebsiteAppComponent], (app: NLiveWebsiteAppComponent) => {
    expect(app.title).toEqual('n-live-website works!');
  }));
});
