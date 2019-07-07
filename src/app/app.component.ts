import { Component, Inject } from '@angular/core';
import { Store, AnyAction, Action } from 'redux';
import { AppState } from './app.state';
import { AppStore } from './app.store';
import { ColorChangerActions } from './color-changer.actions';
import { ThunkDispatch } from 'redux-thunk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number;
  color: string;

  constructor(@Inject(AppStore) private store: Store<AppState>, private colorActions: ColorChangerActions) {
    this.store.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    const state: AppState = this.store.getState();
    this.color = state.color;
  }

  changeColor() {
    this.store.dispatch(this.colorActions.loadColor() as {} as Action);
  }
}
