import { ActionCreator, Action } from 'redux';

export const CHANGE_COLOR = 'CHANGE_COLOR';

export interface ChangeColorAction extends Action {
  color: string;
}

export const changeColor: ActionCreator<ChangeColorAction> = (
  color: string
) => ({
  type: CHANGE_COLOR,
  color
});
