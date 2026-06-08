import GreenParkHero from "./components/Hero";
import GreenParkAbout from "./components/GreenParkAbout";
import PropertyCarousel from "./components/PropertyCarousel";
import GreenParkOngoingProjects from "./components/GreenParkOngoingProjects";
import WhyChooseGreenPark from "./components/WhyChooseGreenPark";
import GreenParkGallery from "./components/GreenParkGallery";
import CTA from "./components/CTA";




export default function GreenParkDeveloperPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <GreenParkHero />
      <GreenParkAbout />
      <PropertyCarousel />
      <GreenParkOngoingProjects />
      <WhyChooseGreenPark />
      <GreenParkGallery />
      <CTA />
    </main>
  );
}
