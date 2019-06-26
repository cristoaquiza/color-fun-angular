import { Component, Inject } from '@angular/core';
import { Store } from 'redux';
import { AppStore } from './app.store';
import { AppState } from './app.state';
import { changeColor } from './color-changer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  color: string;

  constructor(@Inject(AppStore) private store: Store<AppState>) {
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState();
    this.color = state.color;
  }

  changeColor() {
    console.log('changing color', this.color);
    this.store.dispatch(changeColor(this.color));
  }
}
