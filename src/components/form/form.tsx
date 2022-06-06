import cn from "classnames";
import { Button } from "../button";
import s from "./form.module.scss";

export const Form = () => (
  <form className={s.form}>
    <input
      type="text"
      placeholder="Ваше имя"
      className={cn(s.form__input, s["form__input--name"])}
    />
    <input
      type="tel"
      placeholder="Ваш телефон"
      className={cn(s.form__input, s["form__input--tel"])}
    />
    <input
      type="email"
      placeholder="Ваш e-mail"
      className={cn(s.form__input, s["form__input--email"])}
    />
    <p className={s.form__text}>
      Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с
      правилами пользования Платформой
    </p>
    <Button title="Отправить" />
  </form>
);
