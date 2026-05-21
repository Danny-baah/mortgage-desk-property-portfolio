import ManoraHero from "./components/ManoraHero";
import ManoraAbout from "./components/ManoraAbout";
import ManoraAmenities from "./components/ManoraAmenities";
import ManoraApartments from "./components/ManoraApartments";
import ManoraGallery from "./components/ManoraGallery";
import ManoraCTA from "./components/ManoraCTA";

export default function ManoraPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      {/* This is the main hero section for the Manora page.
        As we build more components (like the About Manora lifestyle section, 
        amenities, floor plans, etc.), you will import and stack them right here below the hero!
      */}
      <ManoraHero />
      <ManoraAbout />
      <ManoraAmenities />
      <ManoraApartments />
      <ManoraGallery />
      <ManoraCTA />
    </main>
  );
}