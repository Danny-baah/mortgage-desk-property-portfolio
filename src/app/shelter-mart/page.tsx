import ShelterMartHero from "./components/ShelterMartHero";
import ShelterMartAbout from "./components/ShelterMartAbout";
import ShelterMartProperties from "./components/ShelterMartProperties";
import ShelterMartGallery from "./components/ShelterMartGallery";
import CTA from "./components/CTA";




export const metadata = {
  title: "Mac Capital Homes | Access Bank Mortgage Portal",
  description: "Discover premium properties by Mac Capital Homes.",
};

export default function MacCapitalPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <ShelterMartHero />
      <ShelterMartAbout />
       <ShelterMartProperties />
       <ShelterMartGallery />
       <CTA />
    </main>
  );
}
