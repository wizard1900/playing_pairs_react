import style from './startimage.module.css';
import startPicture from '/start.webp';
interface IProps {
  state: boolean
}

export function StartImage(props: IProps) {
  if (!props.state) {
    return (
      <div className={style.container}>
        <img src={startPicture} alt="" />
      </div>
    );
  }
}