import Hero from "./components/Hero";
import About from "./components/About";
import Ameneties from "./components/Ameneties";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";



export default function TheDecadePage() {
  return (
    <main className="bg-white min-h-screen text-slate-800 antialiased selection:bg-[#b5d334] selection:text-black">
      <Hero />
      <About />
      <Ameneties />
      <Location /> 
      <Gallery />   
      <CTA />     
    </main>
  );
}
