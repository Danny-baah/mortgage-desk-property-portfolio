import PeregrinoHero from "./components/PeregrinoHero";
import PeregrinoAbout from "./components/PeregrinoAbout";
import PeregrinoFeatures from "./components/PeregrinoFeatures";
import PeregrinoDetails from "./components/PeregrinoDetails";
import CTA from "./components/PeregrinoCta";

export const metadata = {
  title: 'Peregrino Properties | Access Bank Mortgage Portal',
  description: 'Modern living. Prime locations. Smart investments.',
};

export default function PeregrinoPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <PeregrinoHero />
      <PeregrinoAbout />
      <PeregrinoFeatures />
      <PeregrinoDetails />
      <CTA />
      
      {/* We only have Picture2 and Picture3 left, we can build a slick dual-image showcase next! */}
    </main>
  );
}