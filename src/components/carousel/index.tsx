import s from "./carousel.module.css";

export const Carousel = () => {
  return (
    <div className={s.scrollableContainer}>
      <ul className={s.list}>
        <li className={s.item}>1</li>
        <li className={s.item}>2</li>
        <li className={s.item}>3</li>
        <li className={s.item}>4</li>
        <li className={s.item}>5</li>
        <li className={s.item}>6</li>
        <li className={s.item}>7</li>
        <li className={s.item}>8</li>
        <li className={s.item}>9</li>
        <li className={s.item}>10</li>
        <li className={s.item}>11</li>
      </ul>
    </div>
  );
};
