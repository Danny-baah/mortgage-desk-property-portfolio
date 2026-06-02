import RKEHero from "./components/RKEHero";
import RKEAbout from "./components/RKEAbout";
import RKEProjects from "./components/RKEProjects";
import RKEServices from "./components/RKEServices";
import  RKECTA from "./components/RKECTA";

export default function RoyalKingdomPage() {
  return (
    <main className="bg-white min-h-screen font-sans overflow-hidden">
      <RKEHero />
      <RKEAbout />
       <RKEServices />
      <RKEProjects />
      <RKECTA />
    </main>
  );
}
