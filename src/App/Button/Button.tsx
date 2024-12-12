import { Dispatch } from 'redux';
import style from './button.module.css';
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
      isSuccess: boolean
    }[],
    win: boolean,
    step: number,
    delay: number
  }
}

export function Button(props: IProps) {
  function playGame() {
    props.attr({ type: 'START' });
  }

  function restartGame() {
    props.attr({ type: 'RESTART' });
    props.attr({ type: 'HOME' });
  }

  // if (props.field.win && !props.state.overtime) {
  //   props.attr({ type: 'OVERTIME' });
  // }

  if (!props.state.isStart) {
    return (

      <div>
        <button className={style.button} onClick={playGame}>
          Начать игру
        </button>
      </div>
    )
  }

  if (props.field.win) {
    const step = Math.floor(props.field.step / 2);

    const saveTime = localStorage.getItem('time');
    const saveStep = localStorage.getItem('step');

    if ((!saveStep || !saveTime) || (parseInt(saveStep) > step) || (parseInt(saveStep) === step) && (props.field.delay < parseInt(saveTime))) {
      localStorage.setItem('step', step.toString());
      localStorage.setItem('time', props.field.delay.toString());
    }
    return (
      <div>
        <div className={style.win}>
          Вы выиграли за {step} ходов Затратили {props.field.delay}с
        </div>
        <div className={style.best}>
          Лучший результат {localStorage.getItem('step')} ходов
        </div>

        <button className={style.button} onClick={restartGame}>
          Играть снова?
        </button>
      </div>
    )
  } else if (props.state.overtime) {
    return (

      <div>
        <div className={style.win}>
          Время закончилось. Вы проиграли!
        </div>
        <button className={style.button} onClick={restartGame}>
          Играть снова?
        </button>
      </div>
    )
  }
}

