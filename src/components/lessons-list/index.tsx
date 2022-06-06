import s from "./lessons-list.module.scss";

export const LessonsList = () => (
  <section className={s.lessonsList}>
    <div className={s.lessonsList__container}>
      <div className={s.lessonList__headingWrapper}>
        <h2 className={s.lessonList__heading}>
          С нами у детей будет продуктивное IT-лето
        </h2>
        <div className={s.lessonList__owlImage} />
      </div>
      <div className={s.lessonsList__lists}>
        <ul className={s.lessonsList__list}>
          <li className={s.lessonsList__listItem}>Программирование</li>
          <li className={s.lessonsList__listItem}>Робототехника</li>
          <li className={s.lessonsList__listItem}>3D-моделирование</li>
          <li className={s.lessonsList__listItem}>Создание игр</li>
          <li className={s.lessonsList__listItem}>Анимация</li>
        </ul>
        <ul className={s.lessonsList__list}>
          <li className={s.lessonsList__listItem}>Шахматы</li>
          <li className={s.lessonsList__listItem}>Блогинг</li>
          <li className={s.lessonsList__listItem}>Прогулки</li>
          <li className={s.lessonsList__listItem}>Игровые активности</li>
          <li className={s.lessonsList__listItem}>Английский язык</li>
        </ul>
      </div>
    </div>
  </section>
);
