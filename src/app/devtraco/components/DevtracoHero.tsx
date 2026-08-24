import Image from "next/image";
import Link from "next/link";

export default function DevtracoHero() {
  // Updated with all 5 specific properties
  const assetPortfolio = [
    "Arlo Cantonments", 
    "Forte Residences", 
    "Pelican Hotel", 
    "The Address", 
    "Devtraco Woodlands"
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 flex items-center justify-center overflow-hidden">
      
      {/* =========================================================
         CUSTOM CSS: Looping Typewriter & Ken Burns Effect
         ========================================================= */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #f97316; } 
        }
        
        /* The loop: 0% start, 40% fully typed, 60% hold, 90% cleared */
        @keyframes type-loop {
          0%, 10% { max-width: 0; }
          40%, 60% { max-width: 28ch; } 
          90%, 100% { max-width: 0; }
        }

        .typewriter h2 {
          display: inline-block;
          overflow: hidden; 
          border-right: 4px solid #f97316; 
          white-space: nowrap; 
          margin: 0 auto; 
          letter-spacing: .02em; 
          animation: 
            type-loop 8s steps(40, end) infinite,
            blink-caret .75s step-end infinite;
        }

        @keyframes kenBurns {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.1) translate(-1%, -1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-ken-burns {
          animation: kenBurns 30s ease-in-out infinite;
        }
      ` }} />

      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-blue-950">
        <Image
          src="/assets/dev.jpg" 
          alt="Devtraco Plus Luxury Developments"
          fill
          priority
          className="object-cover object-center animate-ken-burns opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40"></div>
      </div>

      {/* --- CONTENT BLOCK --- */}
      <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center w-full mt-4">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-px bg-orange-500"></span>
          <h1 className="text-sm md:text-base font-bold uppercase tracking-[.3em] text-orange-400 drop-shadow">
            Devtraco Plus
          </h1>
          <span className="w-10 h-px bg-orange-500"></span>
        </div>

        {/* Dynamic Looping Typewriter Subheading */}
        <div className="typewriter inline-block mb-6 max-w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#b5d334] leading-tight drop-shadow-lg">
            Luxury Living, Perfected.
          </h2>
        </div>

        {/* Text & Portfolio Showcase */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl mb-8 w-full max-w-3xl">
          <p className="text-blue-100 text-base md:text-lg font-light leading-relaxed mb-5">
            Connecting you to Ghana's most iconic residential addresses, 
            matched with bespoke Access Bank financing.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 pt-5 border-t border-white/10">
            <span className="text-white/60 text-xs font-semibold uppercase tracking-wider pr-2">Signature Portfolio</span>
            {assetPortfolio.map((asset, i) => (
              <span key={i} className="text-white text-sm font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                {asset}
              </span>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
          
          {/* Primary CTA */}
          <Link
            href="/register"
            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-[#b5d334] rounded-full font-bold text-base transition-all duration-300 hover:bg-orange-500 shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 border border-blue-800 hover:border-orange-400"
          >
            Begin Your Journey
            <svg 
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          {/* Secondary CTA - View Residences */}
          <a
            href="#residences"
            className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-white bg-white/10 backdrop-blur-md rounded-full font-bold text-base transition-all duration-300 hover:bg-white hover:text-blue-900 shadow-xl hover:-translate-y-1 border border-white/30"
          >
            View Residences
            <svg 
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </a>
          
        </div>
      </div>

    </section>
  );
}