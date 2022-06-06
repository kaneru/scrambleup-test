import { Certificate } from "./components/certificate";
import { FooterDesktop } from "./components/footer-desktop";
import { FooterMobile } from "./components/footer-mobile";
import { FormSectionDesktop } from "./components/form-section-desktop";
import { FormSectionMobile } from "./components/form-section-mobile";
import { HeaderDesktop } from "./components/header-desktop";
import { HeaderMobile } from "./components/header-mobile";
import { JumbotronDesktop } from "./components/jumbotron-desktop";
import { JumbotronMobile } from "./components/jumbotron-mobile";
import { LessonsList } from "./components/lessons-list";
import { PhotosCarouselSection } from "./components/photos-carousel-section";
import { PrinciplesSection } from "./components/principles-section";
import { ScheduleFull } from "./components/schedule-full";
import { ScheduleHalf } from "./components/schedule-half";
import { useViewport } from "./hooks/use-viewport";

function App() {
  const { width } = useViewport();
  const breakpoint__md = 768;
  const breakpoint__lg = 1440;

  return (
    <>
      {width < breakpoint__lg ? <HeaderMobile /> : <HeaderDesktop />}
      <main className="main">
        {width < breakpoint__md ? <JumbotronMobile /> : <JumbotronDesktop />}
        <LessonsList />
        <Certificate />
        <ScheduleHalf />
        <ScheduleFull />
        <PhotosCarouselSection />
        <PrinciplesSection />
        {width < breakpoint__lg ? (
          <FormSectionMobile />
        ) : (
          <FormSectionDesktop />
        )}
      </main>
      {width < breakpoint__lg ? <FooterMobile /> : <FooterDesktop />}
    </>
  );
}

export default App;
