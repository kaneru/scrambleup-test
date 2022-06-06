import cn from "classnames";
import { Button } from "../button";
import s from "./jumbotron-desktop.module.scss";

export const JumbotronDesktop = () => (
  <section className={s.jumbotron}>
    <div className={s.jumbotron__content}>
      <h1 className={s.jumbotron__heading}>
        Летний городской лагерь в Академии Будущего Ход
      </h1>
      <div className={s.jumbotron__texts}>
        <div className={s.jumbotron__upperTexts}>
          <p className={cn(s.jumbotron__text)}>Смены полного дня</p>
          <p className={cn(s.jumbotron__text)}>Смены 1/2 дня</p>
        </div>
        <p className={cn(s.jumbotron__text, s["jumbotron__text--large"])}>
          от 4 350 ₽ в месяц
        </p>
      </div>
      <div className={s.jumbtron__footer}>
        <p className={s.footer__text}>Открой своё IT-лето!</p>
        <Button title="Записаться" className={s.footer__button} />
      </div>
    </div>
  </section>
);
