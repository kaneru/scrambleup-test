import cn from "classnames";
import s from "./header-desktop.module.scss";
import { AllIcon } from "./icons/all-icon";
import { GeoIcon } from "./icons/geo-icon";
import { LogoIcon } from "./icons/logo-icon";
import { UserIcon } from "./icons/user-icon";

export const HeaderDesktop = () => (
  <header className={s.header}>
    <nav className={s.header__nav}>
      <LogoIcon />
      <ul className={s.header__menuList}>
        <li className={s.header__menuListItem}>
          <AllIcon />
          <a href="#" className={s.header__link}>
            Все курсы
          </a>
        </li>
        <li className={s.header__menuListItem}>
          <a href="#" className={s.header__link}>
            Мероприятия
          </a>
        </li>
        <li className={s.header__menuListItem}>
          <a href="#" className={s.header__link}>
            Базы знаний
          </a>
        </li>
        <li className={s.header__menuListItem}>
          <a href="#" className={s.header__link}>
            Карьера
          </a>
        </li>
      </ul>
      <div className={s.header__extra}>
        <div className={s.header__citySelectWrapper}>
          <GeoIcon />
          <select className={s.header__citySelect}>
            <option>Москва</option>
            <option>Санкт-Петербург</option>
          </select>
        </div>
        <a
          href="tel:tel:+78009503398"
          className={cn(s.header__link, s.header__phoneLink)}
        >
          8 800 950-33-98
        </a>
        <a href="/login" className={cn(s.header__link, s.header__userLink)}>
          <UserIcon />
          Войти
        </a>
      </div>
    </nav>
  </header>
);
