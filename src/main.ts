import {bootstrap} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";
import {NLiveWebsiteAppComponent, environment} from "./app/";
import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTE_PROVIDERS } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(NLiveWebsiteAppComponent,[
  APP_ROUTE_PROVIDERS , HTTP_PROVIDERS
]);
