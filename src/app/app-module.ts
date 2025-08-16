import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Heroes } from './heroes/heroes';

@NgModule({
  declarations: [
    App,
    Heroes
  ],
  imports: [
    FormsModule,
    NgFor,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
