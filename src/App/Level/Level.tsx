import { useState } from 'react';
import style from './level.module.css';
import { Dispatch } from 'redux';
interface IProps {
  attr: Dispatch<{ value?: string, type: string; }>,
  state: {
    isStart: boolean,
    overtime: boolean,
    level: string
  }
}

export function Level(props: IProps) {
  const [level, setLevel] = useState(props.state.level);
  function levelChoise(level: string) {
    setLevel(level)
    props.attr({ value: level, type: 'LEVEL' })
  }

  if (!props.state.isStart) {
    return (
      <div className={style.level}>
        <span className={style.labelLevel}>
          Выбрать уровень
        </span>
        <select id='level' name='level' className={style.inputLevel} value={level} onChange={(e) => levelChoise(e.target.value)}>
          <option value="easy">Легкий (90c)</option>
          <option value="medium" >Средний(45c)</option>
          <option value="hard">Сложный(25c)</option>
        </select>
      </div>
    );
  }
}

