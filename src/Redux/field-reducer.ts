import { ICard, makeCards } from "./logic";
export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const RESTART = 'RESTART';
export const SUCCESS = 'SUCCESS';
const initialState: { statecards: ICard[], win: boolean, step: number, delay: number } = { statecards: makeCards(), win: false, step: 0, delay: 0 };
let firstCard: ICard;
let secondCard: ICard;
let total = 0;

export const fieldReducer = (state: { statecards: ICard[], win: boolean, step: number, delay: number },
  action: {
    key: number,
    step: number,
    type: string,
    delay: number
  }) => {

  if (action.type === 'RESTART') {
    state.statecards = makeCards();
    state.win = false;
    state.step = 0;

    secondCard = {
      cardNumber: 0,
      isOpen: false,
      isSuccess: false,
    }

    firstCard = {
      cardNumber: 0,
      isOpen: false,
      isSuccess: false,
    }
    total = 0;
  }

  if (action.type === OPEN) {
    state.step = action.step;
    if (action.step % 2) {
      firstCard = state.statecards[action.key];
      secondCard = {
        cardNumber: 0,
        isOpen: false,
        isSuccess: false,
      }
      firstCard.isOpen = true
    } else {
      secondCard = state.statecards[action.key];
      secondCard.isOpen = true;
      if (firstCard.cardNumber === secondCard.cardNumber) {
        firstCard.isOpen = false;
        secondCard.isOpen = false;
        firstCard.isSuccess = true;
        secondCard.isSuccess = true;
        total++;
        if (total === 8) {
          state.win = true;
          state.delay = action.delay;
        }
      }
    }
  }
  if ((action.type === CLOSE) && (firstCard.cardNumber !== secondCard.cardNumber)) {
    firstCard.isOpen = false;
    secondCard.isOpen = false;
  }

  else state = initialState;

  return state;
}
