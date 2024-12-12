import { Dispatch } from 'redux';
import './App.css'
import { Level } from './Level/Level';
import { Button } from './Button/Button';
import { Field } from './Field/Field';
import { StartImage } from './StartImage/StartImage';
import { makeCards } from '../Redux/logic';

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

makeCards();

function App(props: IProps) {

  return (
    <div className='appContainer'>
      <h1 className='mainTitle'>Игра в пары</h1>
      <StartImage state={props.state.isStart} />
      <Field attr={props.attr} state={props.state} field={props.field} />
      <Level attr={props.attr} state={props.state} />
      <Button attr={props.attr} state={props.state} field={props.field} />
    </div>
  )
}


export default App
