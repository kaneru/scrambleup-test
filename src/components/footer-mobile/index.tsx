import cn from "classnames";
import { FacebookSocialIcon } from "../icons/facebook-social-icon";
import { InstagramSocialIcon } from "../icons/instagram-social-icon";
import { TelegramSocialIcon } from "../icons/telegram-social-icon";
import { VkSocialIcon } from "../icons/vk-social-icon";
import { YandexDzenIcon } from "../icons/yandex-dzen-icon";
import { YoutubeSocialIcon } from "../icons/youtube-social-icon";
import s from "./footer-mobile.module.css";

export const FooterMobile = () => (
  <footer className={s.footer}>
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
    <a href="https://yandex.ru" target="_blank" rel="noopener noreferrer">
      <YandexDzenIcon />
    </a>
    <p className={s.footer__copyrightText}>© ХОД, Future Academy</p>
  </footer>
);
