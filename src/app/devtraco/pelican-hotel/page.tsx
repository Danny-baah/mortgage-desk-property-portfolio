import PelicanHero from "./components/PelicanHero";
import PelicanAbout from "./components/PelicanAbout";
import PelicanAmenities from "./components/PelicanAmenities";
import PelicanResidences from "./components/PelicanResidences";
import PelicanGallery from "./components/PelicanGallery";
import PelicanCTA from "./components/PelicanCTA";

export default function PelicanHotelPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <PelicanHero />
      <PelicanAbout />
      <PelicanAmenities />
      <PelicanResidences />
      <PelicanGallery />
      <PelicanCTA />
    </main>
  );
}
