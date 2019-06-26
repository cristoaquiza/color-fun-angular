import { InjectionToken } from '@angular/core';
import { createStore, Store } from 'redux';
import { AppState } from './app.state';
import { colorChangerReducer } from './color-changer.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore(colorChangerReducer);
}

export const appStoreProvider = [
  {
    provide: AppStore,
    useFactory: createAppStore
  }
];
