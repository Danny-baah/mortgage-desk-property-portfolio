import WoodlandsHero from "./components/WoodlandsHero";
import WoodlandsAbout from "./components/WoodlandsAbout";
import WoodlandsAmenities from "./components/WoodlandsAmenities";
import WoodlandsServices from "./components/WoodlandsServices";
import WoodlandsGallery from "./components/WoodlandsGallery";
import WoodlandsCTA from "./components/WoodlandsCTA";

export default function DevtracoWoodlandsPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <WoodlandsHero />
      <WoodlandsAbout />
       <WoodlandsAmenities />
       <WoodlandsServices />
        <WoodlandsGallery />
        <WoodlandsCTA />
    </main>
  );
}