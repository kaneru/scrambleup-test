import { Form } from "../form/form";
import s from "./form-section-mobile.module.scss";

export const FormSectionMobile = () => (
  <section className={s.formSectionMobile}>
    <div className={s.formSectionMobile__owlImage} />
    <div className={s.formSectionMobile__borderGradientWrapper}>
      <div className={s.formSectionMobile__contentWrapper}>
        <h2 className={s.formSectionMobile__heading}>Помочь с выбором?</h2>
        <p className={s.formSectionMobile__text}>Оставьте заявку и наши</p>
        <p className={s.formSectionMobile__text}>
          специалисты свяжутся с вами, ответят на все вопросы и подберут
          подходящий вариант обучения.
        </p>
      </div>
    </div>
    <Form />
  </section>
);
