"use client";

import Image from "next/image";

const amenities = [
  {
    name: "Ultramodern Pool",
    image: "/assets/forte/pexels-paul-raymond-695495726-18205138.jpg",
    description: "A sparkling, crystal-clear aquatic escape designed for refreshing morning laps and relaxed weekend family unwinding."
  },
  {
    name: "The Gym",
    image: "/assets/forte/pexels-aj-ahamad-767001191-30147878.jpg",
    description: "A masterfully equipped, private fitness center featuring state-of-the-art cardiovascular and strength conditioning machinery."
  },
  {
    name: "Secured Children's Playground",
    image: "/assets/forte/pexels-bi-ravencrow-2154273033-33357509.jpg",
    description: "A completely monitored, safely enclosed outdoor play environment built specifically for children's active imaginations."
  }
];

export default function ForteAmenities() {
  return (
    <section id="forte-amenities" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Community Assets
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            Essential <span className="text-[#b5d334]">Comforts</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Every day within Forte is elevated by shared family provisions curated for unparalleled convenience, health, and leisure.
          </p>
        </div>

        {/* =========================================================
            AMENITIES 3-COLUMN GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={amenity.image}
                  alt={`${amenity.name} at Forte Residences`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Frame Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
              </div>

              {/* Text / Context Content */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Corner Accent Line */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <h3 className="text-xl font-black text-[#b5d334] uppercase tracking-tight mb-3">
                  {amenity.name}
                </h3>
                
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}