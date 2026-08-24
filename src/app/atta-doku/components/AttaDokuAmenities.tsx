"use client";

import Image from "next/image";

export default function AttaDokuAmenities() {
  const homeInclusions = [
    "Energy-efficient appliances",
    "Modern kitchen appliances",
    "Fitted closets",
    "Fitted Airconditioners",
    "Private outdoor space",
    "Generator Wiring",
    "Open Floor concepts",
  ];

  return (
    <section id="amenities" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-950/5 px-4 py-1.5 rounded-full mb-4 border border-blue-950/10">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Resort-Style Living
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#b5d334] tracking-tight mb-3">
            Remarkable Features
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Indulge yourself in our state-of-the-art amenities meant to make your living enjoyable, serene, and completely effortless.
          </p>
        </div>

        {/* AMENITIES VISUAL GRID CONTAINER */}
        <div className="space-y-16">
          
          {/* =========================================================
             TRIPLE AMENITY BLOCK: Picture 4 (Clubhouse, Pool, Fitness)
             ========================================================= */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 group">
            
            {/* Native Un-cropped Image Container */}
            <div className="w-full relative bg-white block">
              <Image
                src="/assets/atta-doku/Picture4.png"
                alt="Clubhouse, Swimming Pool, and Fitness Centre Amenities"
                width={1500} 
                height={500}
                priority
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.005]"
              />
            </div>
            
            {/* Perfectly Synchronized 3-Column Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 bg-white">
              {/* Part 1: Clubhouse (Left Third of Picture4) */}
              <div className="p-6 sm:p-8 text-center md:text-left">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  01 . Premier Hub
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] uppercase tracking-tight">
                  Clubhouse With <br className="hidden md:block"/> Event Space
                </h3>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                  A sophisticated multi-purpose gathering venue designed for private celebrations, corporate events, and neighborhood bonding.
                </p>
              </div>

              {/* Part 2: Swimming Pool (Center Third of Picture4) */}
              <div className="p-6 sm:p-8 text-center md:text-left bg-slate-50/30">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  02 . Oasis Retreat
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] uppercase tracking-tight">
                  Swimming <br className="hidden md:block"/> Pool
                </h3>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                  Crystal clear, resort-style waters optimized for cooling off from the coastal sun, leisure swimming, and early morning laps.
                </p>
              </div>

              {/* Part 3: Fitness Centre (Right Third of Picture4) */}
              <div className="p-6 sm:p-8 text-center md:text-left">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  03 . Active Wellness
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] uppercase tracking-tight">
                  Fitness <br className="hidden md:block"/> Centre
                </h3>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                  Fully equipped strength and cardio studio to prioritize your physical health and lifestyle wellness steps away from home.
                </p>
              </div>
            </div>
          </div>


          {/* =========================================================
             DUAL AMENITY BLOCK: Picture 5 (Community Garden, Management)
             ========================================================= */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 group">
            
            {/* Native Un-cropped Image Container */}
            <div className="w-full relative bg-white block">
              <Image
                src="/assets/atta-doku/Picture5.png"
                alt="Community Gardens and On-Site Maintenance Services"
                width={1500}
                height={500}
                className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.005]"
              />
            </div>
            
            {/* Perfectly Synchronized 2-Column Text Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 bg-white">
              {/* Part 1: Community Garden (Left Half of Picture5) */}
              <div className="p-6 sm:p-8 text-center md:text-left">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  04 . Green Sanctuary
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] uppercase tracking-tight">
                  Community Gardens
                </h3>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                  Manicured walkways, beautiful sitting benches, and vibrant flora designed to align your mind, body, and connection with nature.
                </p>
              </div>

              {/* Part 2: Maintenance (Right Half of Picture5) */}
              <div className="p-6 sm:p-8 text-center md:text-left bg-slate-50/30">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-orange-600 mb-1">
                  05 . Premium Care
                </div>
                <h3 className="text-lg font-bold text-[#b5d334] uppercase tracking-tight">
                  On-Site Management & Maintenance
                </h3>
                <p className="text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                  Round-the-clock facility support, pristine estate keeping, landscaping, and prompt concierge service for seamless living.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
           ALL HOMES INCLUDE SPECIFICATIONS
           ========================================================= */}
        <div className="mt-20 bg-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.1),transparent_60%)] pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header Info */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Standard Turnkey Specifications
              </span>
              <h4 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-[#b5d334]">
                All Homes <br /> Include:
              </h4>
              <div className="w-12 h-1 bg-orange-500 rounded-full mt-4"></div>
            </div>

            {/* Right Standard List Layout Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {homeInclusions.map((inclusion, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3.5 bg-blue-900/30 border border-blue-800/40 px-5 py-3.5 rounded-xl transition-transform duration-300 hover:translate-x-0.5"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-blue-50/90">
                    {inclusion}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}