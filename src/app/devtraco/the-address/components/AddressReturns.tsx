"use client";

import Image from "next/image";

export default function AddressReturns() {
  const investmentPillars = [
    {
      type: "Serviced Apartments",
      benefit: "Hands-off, fully managed corporate asset yielding immediate occupancy returns.",
    },
    {
      type: "Vacation Apartments",
      benefit: "Optimized for high short-term turnover targeting expats and seasonal diaspora.",
    },
    {
      type: "Residential Apartments",
      benefit: "Premium multi-room footprints complete with exclusive private pools.",
    }
  ];

  return (
    <section id="address-returns" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* =========================================================
              LEFT COLUMN: INVESTMENT VALUE PROP (5 Columns)
              ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500 bg-orange-50 px-3 py-1 rounded">
                Portfolio Diversification
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-none">
              Three Towers <br />
              <span className="text-[#b5d334]">
                Serving as a Powerful Vehicle for
              </span> <br />
              <span className="text-[#b5d334]">Lasting Returns</span>
            </h2>

            <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              Enjoy consistent rental income and strong capital growth while owning a residence rooted in deep regional prestige. The Address is designed strictly to grow your wealth, diversify your portfolio, and elevate your lifestyle with three elite paths:
            </p>

            {/* Custom Premium List Elements */}
            <div className="space-y-4">
              {investmentPillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-950/5 hover:border-slate-200"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center text-white text-xs font-black shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#b5d334] uppercase tracking-tight mb-1">
                      {pillar.type}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {pillar.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: DUAL LANDSCAPE SHOWCASE (7 Columns)
              Now stacked to balance height.
              ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            
            {/* 1. Day View */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-100 group bg-slate-100">
              <Image
                src="/assets/the-address/The Address Hotel_ORA_ Exterior 02 Landscape_Day.jpg"
                alt="The Address Architectural Exterior - Day View"
                fill
                sizes="(max-w-1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 bg-blue-950/80 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Day Perspective
                </p>
              </div>
            </div>

            {/* 2. Night View - Added to balance layout */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl shadow-blue-950/10 border border-slate-100 group bg-slate-100">
              <Image
                src="/assets/the-address/The Address Hotel_ORA_ Exterior 02 Landscape_Night.jpg"
                alt="The Address Architectural Exterior illumination - Night View"
                fill
                sizes="(max-w-1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent"></div>
              
              {/* Corner Asset Tag */}
              <div className="absolute bottom-5 left-5 bg-orange-500 px-3 py-1.5 rounded shadow-lg">
                <p className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Night illumination
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}