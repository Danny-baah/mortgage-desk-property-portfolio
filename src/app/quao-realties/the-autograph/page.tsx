import AutographHero from "./components/AutographHero";
import AutographAbout from "./components/AutographAbout";
import AutographAmenities from "./components/AutographAmenities";
import AutographApartments from "./components/AutographApartments";
import AutographGallery from "./components/AutographGallery";
import AutographCTA from "./components/AutographCTA";

export default function AutographPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <AutographHero />
      <AutographAbout />
      <AutographAmenities />
      <AutographApartments />
      <AutographGallery />
      <AutographCTA />
    </main>
  );
}
