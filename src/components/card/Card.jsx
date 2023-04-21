import React, {useState} from "react";
import style from "./card.module.scss";

function Card(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={`${style.card} ${checked ? style.selected : ""}`} onClick={handleChange}>
      <div className={`${style.card__header} ${props.theme.card__header}`}>
        Безлимитный {props.price}
      </div>
      <div className={`${style.card__price} ${props.theme.card__price}`}>
        <div className={style.card__textUp}>руб</div>
        <div className={style.card__value}>{props.price}</div>
        <div className={style.card__textDown}>/мес</div>
      </div>
      <div className={style.card__speed}>до {props.speed} Мбит/сек</div>
      <div className={style.card__footer}>
        Объем включенного трафика не ограничен
      </div>
    </div>
  );
}

export default Card;
