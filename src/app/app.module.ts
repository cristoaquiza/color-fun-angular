import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { appStoreProvider } from './app.store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [appStoreProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
