
export interface ICard {
  cardNumber: number,
  isOpen: boolean,
  isSuccess: boolean,
}

export function makeCards() {
  let cardValue: number;
  let j = 0;

  const arrCard1: ICard[] = [];
  const arrCard2: ICard[] = [];
  do {
    cardValue = Math.floor(Math.random() * 8) + 1;

    if (arrCard1.map(e => e.cardNumber).indexOf(cardValue) === -1) {
      arrCard1.push({ cardNumber: cardValue, isOpen: false, isSuccess: false });
      j++;
    }

  } while (j < 8);

  j = 0;
  do {
    cardValue = Math.floor(Math.random() * 8) + 1;

    if (arrCard2.map(e => e.cardNumber).indexOf(cardValue) === -1) {
      arrCard2.push({ cardNumber: cardValue, isOpen: false, isSuccess: false });
      j++;
    }
  } while (j < 8);
  return arrCard1.concat(arrCard2);
}


