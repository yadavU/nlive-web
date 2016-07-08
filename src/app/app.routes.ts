import { provideRouter, RouterConfig } from '@angular/router';

import { IntroComponent } from './+intro/';
import { HomeComponent } from './+home/';
import { PersonalRoute } from './+personal';
import { SessionsComponent } from './sessions/';
import { FeedComponent } from './feed/';
import { DietViewComponent } from './diet-view/';
import { PersonalComponent } from './personal/';
import { SessionDetailsComponent } from './session-details/';
import { NLiveWebsiteAppComponent } from './';
import { LoginAuth, UserActiveAuth } from './';


export const routes  : RouterConfig = [
  {path : '', redirectTo : '/intro', pathMatch : 'full'},
  {path : 'personal', component : PersonalRoute , canActivate : [LoginAuth]},
  {path : 'intro', component: IntroComponent  },
  {path : 'home' , component: HomeComponent , canActivate :[ LoginAuth ]}
];

export const APP_ROUTE_PROVIDERS = [
  provideRouter(routes),
  LoginAuth
];
