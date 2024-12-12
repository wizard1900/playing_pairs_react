import { Dispatch } from 'redux';
import style from './field.module.css';
import { ReactElement } from 'react';
// import reactElementToJSXString from 'react-element-to-jsx-string';
interface IProps {
  attr: Dispatch<{ type: string; }>,
  state: {
    isStart: boolean,
    overtime: boolean,
    level: string
  }

  field: {
    statecards: {
      cardNumber: number,
      isOpen: boolean,
      isSuccess: boolean,
    }[],
    win: boolean,
    step: number
  }
}
let step = 0;
let timerID = 0;
let currentTime: number;
let delay: number;
let fullTime = 90

export function Field(props: IProps) {
  const setLevel = props.state.level;
  if (setLevel === "easy") {
    fullTime = 90
  }

  if (setLevel === "medium") {
    fullTime = 45
  }
  if (setLevel === "hard") {
    fullTime = 25
  }

  // currentTime = fullTime;
  if (!props.state.isStart) {
    timerID = 0;
    currentTime = fullTime
  }
  step = props.field.step;
  function finalGame() {
    props.attr({ step, type: 'OVERTIME' });
  }

  function decTime() {
    //  console.log('Текущее время ', currentTime);
    currentTime--;
    if (props.field.win) {
      clearInterval(timerID);
    }

    if (currentTime < 1) {
      clearInterval(timerID);
      finalGame();
    }
    return currentTime;
  }

  if (props.state.isStart && !timerID) {
    timerID = window.setInterval(decTime, 1000);
  }

  function closeCard() {
    props.attr({ step, type: 'CLOSE' });
  }

  function clickCard(key: number) {
    step++;
    delay = fullTime - currentTime;
    props.attr({ key, step, delay, type: 'OPEN' });
    if (step % 2 === 0) {

      setTimeout(closeCard, 200);
    }
  }

  const cardDiv = props.field.statecards.map((element, key: number): ReactElement => {
    if (element.isOpen)
      return <div className={`${style.card} ${style.cardOpen}`} key={key}>{element.cardNumber}</div>;

    if (element.isSuccess) {
      return <div className={`${style.card} ${style.cardSuccess}`} key={key}>{element.cardNumber}</div>;
    } else
      return <div className={style.card} key={key} onClick={() => clickCard(key)}>{element.cardNumber}</div>;
  })
  let sContainer = style.container;
  if (props.state.overtime) {
    sContainer = style.container_mod
  }
  if (props.state.isStart) {
    return (
      <div className={sContainer}>
        <div className={style.cardsWrapper}>
          {cardDiv.slice(0, 4)}
        </div>
        <div className={style.cardsWrapper}>
          {cardDiv.slice(4, 8)}
        </div>
        <div className={style.cardsWrapper}>
          {cardDiv.slice(8, 12)}
        </div>
        <div className={style.cardsWrapper}>
          {cardDiv.slice(12, 16)}
        </div>
      </div>
    );
  }
}

