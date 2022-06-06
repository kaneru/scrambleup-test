import { Carousel } from "../carousel";
import s from "./photos-carousel-section.module.scss";

export const PhotosCarouselSection = () => (
  <section className={s.photosCarouselSection}>
    <div className={s.photosCarouselSection__container}>
      <h2 className={s.photosCarouselSection__heading}>Занятия проходят</h2>
      <p className={s.photosCarouselSection__text}>
        в современных аудиториях <br />с удобством, комфортом и заботой о
        студентах
      </p>
      <Carousel />
    </div>
  </section>
);
