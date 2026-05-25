"use client";

import Image from "next/image";

const amenitiesData = [
  { title: "The Clubhouse", src: "/assets/woodlands/Clubhouse.png" },
  { title: "Swimming Pools", src: "/assets/woodlands/Swimming-Pool.png" },
  { title: "Lawn Tennis Court", src: "/assets/woodlands/Lawn-Tennis.png" },
  { title: "5-Aside Football Court", src: "/assets/woodlands/Football-Court.png" },
  { title: "Serene Green Spaces", src: "/assets/woodlands/Gardens.png" },
  { title: "Fitness Gym", src: "/assets/woodlands/Gym.png" },
  { title: "Basketball Court", src: "/assets/woodlands/Basketball-Court.png" },
  { title: "Convenience Retail", src: "/assets/woodlands/Retail-Spaces.png" },
  { title: "Scenic Walking Trail", src: "/assets/woodlands/Walking-Trail.png" },
  { title: "Medical Center", src: "/assets/woodlands/Medical-Centre.png" },
  { title: "Kids Playground", src: "/assets/woodlands/Kids-Playground.jpg" }
];

export default function WoodlandsAmenities() {
  return (
    <section id="woodlands-amenities" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Organic Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
         <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-b from-emerald-100/50 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-600"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                Ecosystem Master Plan
              </span>
              <span className="w-8 h-px bg-emerald-600"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6">
            A Self-Sustaining <br />
            <span className="text-orange-500">Community</span>
          </h2>
          <p className="text-slate-600 font-light text-lg">
            Every facility has been integrated into the natural landscape to support your well-being, recreation, and everyday convenience.
          </p>
        </div>

        {/* =========================================================
            AMENITIES MASONRY/GRID
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {amenitiesData.map((amenity, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3] shadow-md shadow-blue-950/5 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 border border-slate-200/60"
            >
              {/* Main Image */}
              <Image
                src={amenity.src}
                alt={amenity.title}
                fill
                sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Architectural Shadow Gradient for Text Legibility - Updated to Blue */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text Anchor */}
              <div className="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-6 h-1 bg-orange-500 mb-3 transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <h3 className="text-white font-black text-lg sm:text-xl uppercase tracking-tight leading-none">
                  {amenity.title}
                </h3>
              </div>

              {/* Minimal Hover Plus Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <span className="text-white font-black text-xs">+</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}