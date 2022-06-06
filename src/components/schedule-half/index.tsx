import { Button } from "../button";
import s from "./schedule-half.module.scss";

export const ScheduleHalf = () => (
  <section className={s.scheduleHalf}>
    <div className={s.scheduleHalf__container}>
      <h2 className={s.scheduleHalf__heading}>Смены полного и 1/2 дня</h2>
      <div className={s.scheduleHalf__lists}>
        <ul className={s.scheduleHalf__list}>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
        </ul>
        <ul className={s.scheduleHalf__list}>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
          <li className={s.scheduleHalf__listItem}>30.05.2022 — 10.06.2022</li>
        </ul>
      </div>
      <Button title="Подать заявку" className={s.scheduleHalf__button} />
    </div>
  </section>
);
