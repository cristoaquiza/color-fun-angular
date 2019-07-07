import { InjectionToken } from '@angular/core';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './app.state';
import { colorChangerReducer } from './color-changer.reducer';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppState> {
  return createStore(colorChangerReducer, applyMiddleware(thunk));
}

export const appStoreProvider = [
  {
    provide: AppStore,
    useFactory: createAppStore
  }
];
