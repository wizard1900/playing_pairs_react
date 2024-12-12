import { RESTART } from "./field-reducer";

export const START = 'START';
export const HOME = 'HOME';
export const FINISH = 'FINISH';
export const OVERTIME = 'OVERTIME';
export const LEVEL = 'LEVEL';

interface IState {
  isStart: boolean,
  overtime: boolean,
  level: string
}

const initialState: IState = {
  isStart: false,
  overtime: false,
  level: 'easy'
}

export const startReducer = (state: { isStart: boolean, overtime: boolean, level: string } = initialState
  , action: {
    value?: string,
    type: string
  }) => {
  if (action.type === START) {
    state.isStart = true;
  }

  if (action.type === LEVEL) {
    if (action.value) state.level = action.value;
  }

  if (action.type === OVERTIME) {
    state.overtime = true;
  }

  if (action.type === RESTART) {
    state.overtime = false;
  }

  if (action.type === HOME) {
    state.isStart = false;
  }

  return state;
}