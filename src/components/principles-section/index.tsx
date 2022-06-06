import s from "./principles-section.module.scss";

export const PrinciplesSection = () => (
  <section className={s.principlesSection}>
    <div className={s.principlesSection__container}>
      <h2 className={s.principlesSection__heading}>Принципы обучения</h2>
      <div className={s.principlesSection__cards}>
        <div className={s.principlesSection__card}>
          <img
            src="/img/principlesSection-1.svg"
            alt=""
            className={s.principlesSection__icon}
          />
          <p className={s.principlesSection__text}>
            Передовой подход к образовательному процессу
          </p>
        </div>
        <div className={s.principlesSection__card}>
          <img
            src="/img/principlesSection-2.svg"
            alt=""
            className={s.principlesSection__icon}
          />
          <p className={s.principlesSection__text}>
            Непрерывное усовершенствование и пополнение базы курсов
          </p>
        </div>
        <div className={s.principlesSection__card}>
          <img
            src="/img/principlesSection-3.svg"
            alt=""
            className={s.principlesSection__icon}
          />
          <p className={s.principlesSection__text}>
            Только практикующие преподаватели
          </p>
        </div>
        <div className={s.principlesSection__card}>
          <img
            src="/img/principlesSection-4.svg"
            alt=""
            className={s.principlesSection__icon}
          />
          <p className={s.principlesSection__text}>
            Сопровождение на всех этапах. От начала обучения до трудоустройства
          </p>
        </div>
      </div>
    </div>
  </section>
);
