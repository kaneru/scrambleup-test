import cn from "classnames";
import { FacebookSocialIcon } from "../icons/facebook-social-icon";
import { InstagramSocialIcon } from "../icons/instagram-social-icon";
import { TelegramSocialIcon } from "../icons/telegram-social-icon";
import { VkSocialIcon } from "../icons/vk-social-icon";
import { YoutubeSocialIcon } from "../icons/youtube-social-icon";
import s from "./footer-desktop.module.scss";
import { LogoIcon } from "./icons/logo-icon";

export const FooterDesktop = () => (
  <footer className={s.footer}>
    <div className={s.footer__container}>
      <div className={s.footer__column}>
        <LogoIcon />
        <a
          href="tel:+78009503398"
          className={cn(s["footer__text--white"], s.footer__phoneLink)}
        >
          8 800 950-33-98
        </a>
        <p className={cn(s["footer__text--white"], s.footer__address)}>
          г. Москва, ул. Ленина, д. 50
        </p>
        <a
          href="mailto:info@hodfutureacademy.ru"
          className={cn(s["footer__text--white"], s.footer__emailLink)}
        >
          info@hodfutureacademy.ru
        </a>
        <div className={s.footer__socialIcons}>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <VkSocialIcon />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <InstagramSocialIcon />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <FacebookSocialIcon />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <YoutubeSocialIcon />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <TelegramSocialIcon />
          </a>
        </div>
        <p className={s.footer__copyrightText}>© ХОД, Future Academy</p>
      </div>
      <div className={s.footer__column}>
        <h3 className={s.column__heading}>Детям</h3>
        <ul className={s.column__list}>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Роботехника
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Создание игр
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Мультимедиа
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Soft Skills
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Шахматы
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Блогинг
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
        </ul>
      </div>
      <div className={s.footer__column}>
        <h3 className={s.column__heading}>Детям</h3>
        <ul className={s.column__list}>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Роботехника
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Создание игр
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Мультимедиа
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Soft Skills
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Шахматы
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Блогинг
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
        </ul>
      </div>
      <div className={s.footer__column}>
        <h3 className={s.column__heading}>Детям</h3>
        <ul className={s.column__list}>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Роботехника
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Создание игр
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Мультимедиа
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Soft Skills
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Шахматы
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Блогинг
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
        </ul>
      </div>
      <div className={s.footer__column}>
        <h3 className={s.column__heading}>Детям</h3>
        <ul className={s.column__list}>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Роботехника
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Создание игр
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Мультимедиа
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Soft Skills
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Шахматы
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Блогинг
            </a>
          </li>
          <li className={s.column__listItem}>
            <a href="#" className={s.listItem__link}>
              Программирование
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
