import s from "./certificate.module.css";

export const Certificate = () => (
  <section className={s.certificate}>
    <div className={s.certificate__container}>
      <div className={s.certificate__content}>
        <h2 className={s.certificate__heading}>Вручение сертификата</h2>
        <p className={s.certificate__text}>
          о прохождении летней программы, море позитивных впечатлений и
          приобретении полезных IT-навыков
        </p>
      </div>
      <img
        src="/img/certificate.png"
        alt="Образец сертификата прохождения летней IT-школы"
        className={s.certificate__image}
      />
    </div>
  </section>
);
