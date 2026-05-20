import AttaDokuHero from "./components/AttaDokuHero";
import AttaDokuAbout from "./components/AttaDokuAbout";
import AttaDokuAmenities from "./components/AttaDokuAmenities";
import AttaDokuHomeTypes from "./components/AttaDokuHomeTypes";
import AttaDokuGallery from "./components/AttaDokuGallery";
import CTA from "./components/AttaDokuCta";

export const metadata = {
  title: 'Atta Doku Meadows | Access Bank Mortgage Portal',
  description: 'Luxury coastal sanctuaries in Prampram, Greater Accra.',
};

export default function AttaDokuPage() {
  return (
    <main className="bg-slate-950 min-h-screen flex flex-col text-white">
      <AttaDokuHero />
      <AttaDokuAbout />
      <AttaDokuAmenities />
      <AttaDokuHomeTypes />
      <AttaDokuGallery />
      <CTA />
      {/* We are ready to build the next sections (About the Community, Models, Pricing, Discounts)! Let me know what information or picture we cook next! */}
    </main>
  );
}