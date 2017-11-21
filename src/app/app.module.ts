import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import {AuthService} from './services/auth.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    routing,
    BrowserModule
  ],
  providers: [appRoutingProviders, AUTH_PROVIDERS, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
