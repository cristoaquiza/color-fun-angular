import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from './app.state';

export const CHANGE_COLOR = 'CHANGE_COLOR';

export interface ChangeColorAction extends Action {
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColorChangerActions {
  constructor(private http: HttpClient) { }

  public loadColor(): ThunkAction<void, AppState, void, AnyAction> {
    return (dispatch: Dispatch<AnyAction>) => {
      return this.http.get('http://www.colr.org/json/color/random').subscribe((response) => {
        dispatch(this.changeColor(`#${response['new_color']}`));
      });
    }
  }

  public changeColor(color: string): ChangeColorAction {
    return { type: CHANGE_COLOR, color };
  }
} 
