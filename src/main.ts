import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import {AppComponent} from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
  ]
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

