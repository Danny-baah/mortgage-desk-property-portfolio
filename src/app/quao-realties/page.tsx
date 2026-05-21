import QuaoHero from "./components/QuaoHero";
import QuaoAbout from "./components/QuaoAbout";
import QuaoResidences from "./components/QuaoResidences";
import CTA from "./components/QuaoCta";

export const metadata = {
  title: 'Quao Realty | Luxury Real Estate Development',
  description: "It's where you belong. Leading luxury real estate developers in Africa.",
};

export default function QuaoRealtyPage() {
  return (
    <main className="bg-stone-950 min-h-screen text-stone-100 font-sans">
      <QuaoHero />
      <QuaoAbout />
      <QuaoResidences />
      <CTA />
    </main>
  );
}