import s from "./schedule-full.module.scss";

export const ScheduleFull = () => (
  <section className={s.scheduleFullSection}>
    <div className={s.scheduleFullSection__container}>
      <div className={s.scheduleFullSection__lists}>
        <div>
          <h2 className={s.scheduleFullSection__heading}>Смена полного дня</h2>
          <ul className={s.scheduleFullSection__list}>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>8:30 — 9:00</h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>Сбор детей, утренняя зарядка</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>
                9:00 — 9:40 <br />
                9:50 — 10:30
              </h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>IT-урок</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>10:30 — 10:40</h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>Перекус (чай, снеки)</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>
                9:00 — 9:40 <br />
                9:50 — 10:30
              </h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>IT-урок</p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={s.scheduleFullSection__heading}>Смена 1/2 дня</h2>
          <ul className={s.scheduleFullSection__list}>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>8:30 — 9:00</h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>Сбор детей, утренняя зарядка</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>
                9:00 — 9:40 <br />
                9:50 — 10:30
              </h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>IT-урок</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>10:30 — 10:40</h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>Перекус (чай, снеки)</p>
            </li>
            <li className={s.scheduleFullSection__listItem}>
              <h3 className={s.listItem__heading}>
                9:00 — 9:40 <br />
                9:50 — 10:30
              </h3>
              <img
                className={s.listItem__icon}
                src="/img/schedule-1.svg"
                alt=""
              />
              <p className={s.listItem__text}>IT-урок</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
