"use client";

import Image from "next/image";

export default function AddressAbout() {
  return (
    <section id="about-address" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Structural Institutional Grid Lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Copy & Investment Case (6 Columns) */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-blue-950"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Architectural Landmark
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              Comfort, Convenience, <br />
              <span className="text-[#b5d334]">And Elegance.</span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                The Address is a premium residential development strategically located in the serene Roman Ridge area of Accra. Designed as an architectural landmark, it features <strong className="font-semibold text-blue-950">three distinct towers</strong> meticulously tailored to different lifestyle needs—offering comfort, convenience, and elegance in one secure enclave.
              </p>
              <p>
                Positioned near the international airport and key lifestyle hubs, it provides effortless access to top-tier retail, education, healthcare, and leisure facilities.
              </p>
            </div>

            {/* Investment Highlights Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
              
              <h4 className="text-xs font-black text-blue-950 uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
                The Investment Opportunity
              </h4>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                With rapidly rising demand from <span className="font-semibold text-blue-950">expats, professionals, and diaspora buyers</span>, The Address presents a unique, high-yield opportunity to enjoy true luxury living while securely investing in one of Accra’s fastest-growing property markets.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Visual Showcase (6 Columns) */}
          <div className="lg:col-span-6 relative">
            
            {/* Ambient Shadow/Glow */}
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[2.5rem] blur-xl transform -rotate-3 z-0"></div>

            {/* Image Container */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/10 border-4 border-white bg-slate-100 aspect-[4/5] w-full group">
              <Image
                src="/assets/the-address/Hotel_Big-_Image.jpg"
                alt="The Address Hotel & Residential Towers"
                fill
                sizes="(max-w-1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay Frame */}
              <div className="absolute inset-0 border border-blue-950/10 rounded-3xl pointer-events-none z-20"></div>
              
              {/* Bottom Info Banner */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white flex justify-between items-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">Scale & Scope</span>
                  <span className="block text-sm font-bold text-blue-950">Three Distinct Towers</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}