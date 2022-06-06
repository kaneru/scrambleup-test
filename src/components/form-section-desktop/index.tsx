import { Form } from "../form/form";
import s from "./form-section-desktop.module.scss";

export const FormSectionDesktop = () => (
  <section className={s.formSectionDesktop}>
    <div className={s.formSectionDesktop__container}>
      <div className={s.formSectionDesktop__owlImage} />
      <div className={s.formSectionDesktop__borderGradientWrapper}>
        <div className={s.formSectionDesktop__contentWrapper}>
          <h2 className={s.formSectionDesktop__heading}>Помочь с выбором?</h2>
          <p className={s.formSectionDesktop__text}>
            Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
            вопросы и подберут подходящий вариант обучения.
          </p>
        </div>
      </div>
      <Form />
    </div>
  </section>
);
