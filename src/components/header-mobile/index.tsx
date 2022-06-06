import s from "./header-mobile.module.css";
import { HamburgerIcon } from "./icons/hamburger-icon";
import { LogoIcon } from "./icons/logo-icon";

export const HeaderMobile = () => {
  return (
    <header className={s.header}>
      <LogoIcon />
      <HamburgerIcon />
    </header>
  );
};
