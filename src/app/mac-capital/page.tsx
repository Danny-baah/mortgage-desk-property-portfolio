import MacCapitalHero from "./components/MacCapitalHero";
import MacCapitalAbout from "./components/MacCapitalAbout";
import MacCapitalFeatures from "./components/MacCapitalFeatures";
import MacCapitalDetails from "./components/MacCapitalDetails";
import MacCapitalGallery from "./components/MacCapitalGallery";
import CTA from "./components/MacCapitalCta";

export const metadata = {
  title: 'Mac Capital Homes | Access Bank Mortgage Portal',
  description: 'Discover premium properties by Mac Capital Homes.',
};

export default function MacCapitalPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      
      {/* Component 1: Cinematic Hero Section */}
      <MacCapitalHero />
      <MacCapitalAbout />
      <MacCapitalFeatures />
      <MacCapitalDetails />
      <MacCapitalGallery />
        <CTA />

      {/* Future components will be dropped right here one by one! */}

    </main>
  );
}