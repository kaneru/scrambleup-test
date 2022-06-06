import cn from "classnames";
import s from "./button.module.scss";

type Props = {
  title: string;
  className?: string;
};

export const Button = ({ title, className }: Props) => (
  <button
    type="button"
    className={cn(s.button, className)}
    onClick={() => null}
  >
    {title}
  </button>
);
