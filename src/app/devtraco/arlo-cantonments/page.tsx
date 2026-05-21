import ArloHero from "./components/ArloHero";
import ArloAbout from "./components/ArloAbout";
import ArloAmenities from "./components/ArloAmenities";
import ArloApartments from "./components/ArloApartments";
import ArloGallery from "./components/ArloGallery";
import ArloCTA from "./components/ArloCTA";

export default function ArloPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <ArloHero />
      <ArloAbout />
      <ArloAmenities />
      <ArloApartments />
      <ArloGallery />
      <ArloCTA />
    </main>
  );
}