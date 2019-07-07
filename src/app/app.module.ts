import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appStoreProvider } from './app.store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,],
  providers: [appStoreProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
