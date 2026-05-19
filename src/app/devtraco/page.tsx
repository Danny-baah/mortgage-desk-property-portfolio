import DevtracoHero from "./components/DevtracoHero";
import AboutDevtraco from "./components/AboutDevtraco";
import DevtracoResidences from "./components/DevtracoResidences";
import CTA from "./components/DevtracoCta";

export default function DevtracoPage() {
  return (
    <main className="bg-slate-50 min-h-screen flex flex-col">
      {/* 1. The Hero Section */}
      <DevtracoHero />
      <AboutDevtraco />
      <DevtracoResidences />
      <CTA />
    </main>
  );
}
