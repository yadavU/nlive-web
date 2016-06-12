import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NLiveWebsiteAppComponent, environment } from './app/';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(NLiveWebsiteAppComponent,[
  ROUTER_PROVIDERS, HTTP_PROVIDERS
]);
