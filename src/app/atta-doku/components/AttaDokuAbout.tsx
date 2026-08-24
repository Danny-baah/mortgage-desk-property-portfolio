import Image from "next/image";

export default function AttaDokuAbout() {
  return (
    <section id="explore-models" className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Architectural Image Mosaic */}
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex gap-4 md:gap-6 order-2 lg:order-1">
            
            {/* Left Tall Image (The Densu) */}
            <div className="w-1/2 h-full relative rounded-3xl overflow-hidden shadow-lg border border-white group mt-8">
              <Image
                src="/assets/atta-doku/1.-The-Densu.jpg"
                alt="The Densu Model - Atta Doku Meadows"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold uppercase tracking-widest text-white">The Densu</span>
              </div>
            </div>

            {/* Right Stacked Images (The Nile & Pacific) */}
            <div className="w-1/2 h-full flex flex-col gap-4 md:gap-6 pb-8">
              
              {/* Top Right Image (The Nile) */}
              <div className="w-full h-1/2 relative rounded-3xl overflow-hidden shadow-lg border border-white group">
                <Image
                  src="/assets/atta-doku/The-Nile-1.jpg"
                  alt="The Nile Model - Atta Doku Meadows"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">The Nile</span>
                </div>
              </div>

              {/* Bottom Right Image (Pacific) */}
              <div className="w-full h-1/2 relative rounded-3xl overflow-hidden shadow-lg border border-white group">
                <Image
                  src="/assets/atta-doku/Pacific-1.jpg"
                  alt="Pacific Model - Atta Doku Meadows"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">The Pacific</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Clean Corporate Layout Narrative */}
          <div className="flex flex-col items-start text-left order-1 lg:order-2">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                About The Community
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-[#b5d334] mb-6 leading-[1.15] tracking-tight">
              A meticulously planned <br />
              <span className="text-[#b5d334]">coastal haven.</span>
            </h2>

            <div className="space-y-5 text-slate-600 font-normal text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-blue-950 font-semibold">Atta Doku Meadows</strong> is an exclusive residential enclave thoughtfully developed by <span className="font-semibold text-blue-950">Otumi Homes</span>. Situated in the scenic coastal town of Prampram, it provides an idyllic environment just a 45-minute drive from central Accra.
              </p>
              
              <div className="pl-5 border-l-2 border-orange-500/30 text-slate-500 text-sm md:text-base">
                Our target demographic consists primarily of diaspora-based homebuyers, offering a seamless and secure bridge between cross-border aspirations and premium property ownership in Ghana.
              </div>

              <p>
                This residential estate offers luxury living entirely removed from loud, congested metropolitan areas. Here, the ocean air is cleaner, the pace is calmer, and you are positioned to comfortably build long-term generational value.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950">Secure Gated Enclave</h4>
                  <p className="text-xs text-slate-400 mt-0.5">24/7 boundary protection</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-blue-950">Diaspora Optimized</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Built for premium criteria</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}