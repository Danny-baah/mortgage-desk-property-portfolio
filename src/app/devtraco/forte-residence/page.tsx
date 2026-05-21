import ForteHero from "./components/ForteHero";
import ForteAbout from "./components/ForteAbout";
import ForteAmenities from "./components/ForteAmenities";
import ForteLocation from "./components/ForteLocation";
import ForteGallery from "./components/ForteGallery";
import ForteCTA from "./components/ForteCTA";

export default function FortePage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <ForteHero />
      <ForteAbout />
      <ForteAmenities />
      <ForteLocation />
      <ForteGallery />
      <ForteCTA />
    </main>
  );
}
