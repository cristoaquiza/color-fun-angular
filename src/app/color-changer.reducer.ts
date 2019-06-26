import { AppState } from './app.state';
import { Reducer, Action } from 'redux';
import { ChangeColorAction, CHANGE_COLOR } from './color-changer.actions';

const initialState: AppState = { color: 'red' };

export const colorChangerReducer: Reducer<AppState> = (
  state: AppState = initialState,
  action: Action
): AppState => {
  if (action.type === CHANGE_COLOR) {
    const color: string = (action as ChangeColorAction).color;
    return { ...state, color };
  } else {
    return state;
  }
};
