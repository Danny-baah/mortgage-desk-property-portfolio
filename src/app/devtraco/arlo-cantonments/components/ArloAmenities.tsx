"use client";

import Image from "next/image";

const floors = [
  {
    id: "floor-1",
    level: "1st Floor",
    title: "Commerce & Collaboration",
    description: "A dynamic ground-level ecosystem designed for productivity and social connection.",
    amenities: [
      { name: "Co-working Spaces", image: "/assets/arlo/co-working.jpg" },
      { name: "Café", image: "/assets/arlo/cafe.jpg" },
      { name: "Shops & Offices", image: "/assets/arlo/shops.jpg" },
    ]
  },
  {
    id: "floor-2",
    level: "2nd Floor",
    title: "Wellness & Recreation",
    description: "Your private sanctuary for relaxation, beauty, and family time.",
    amenities: [
      { name: "Amphitheatre", image: "/assets/arlo/Amphitheatre.png" },
      { name: "Spa", image: "/assets/arlo/Spa.png" },
      { name: "Salon", image: "/assets/arlo/saloon.jpg" },
      { name: "Kids Playroom", image: "/assets/arlo/kids.jpg" },
      { name: "Zen Garden", image: "/assets/arlo/Terrace-Garden.png" },
    ]
  },
  {
    id: "rooftop",
    level: "Rooftop (18th Floor)",
    title: "The Summit",
    description: "Elevated living at its peak. Breathtaking views meets high-energy living.",
    amenities: [
      { name: "Gym", image: "/assets/arlo/Gym.png" },
      { name: "Padel Court", image: "/assets/arlo/court.jpg" },
      { name: "Infinity Pool", image: "/assets/arlo/pool.jpg" },
      { name: "Indoor & Outdoor Lounge", image: "/assets/arlo/Lounge-.png" },
      { name: "Firepit", image: "/assets/arlo/fire.jpg" },
      { name: "BBQ Area", image: "/assets/arlo/BBQ-Area.png" },
    ]
  }
];

export default function ArloAmenities() {
  return (
    <section id="arlo-amenities" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Curated Amenities
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6">
            A Tiered Lifestyle <br className="hidden sm:block" />
            <span className="text-orange-500">Experience</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Deliberately designed spaces spread across strategic levels, ensuring that whether you are working, relaxing, or entertaining, perfection is only an elevator ride away.
          </p>
        </div>

        {/* FLOORS LAYOUT */}
        <div className="space-y-24">
          {floors.map((floor) => (
            <div key={floor.id} className="relative">
              
              {/* Floor Header Info */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-blue-950 pb-6 mb-10 gap-4">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-blue-950 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                    {floor.level}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight">
                    {floor.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-light max-w-md text-sm sm:text-base md:text-right">
                  {floor.description}
                </p>
              </div>

              {/* Amenities Grid for this specific floor */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {floor.amenities.map((amenity, index) => (
                  <div 
                    key={index} 
                    className="group relative overflow-hidden rounded-xl bg-white shadow-md shadow-blue-950/5 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col h-full"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                      <Image
                        src={amenity.image}
                        alt={`${amenity.name} at Arlo`}
                        fill
                        sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                      
                      {/* Name overlay at the bottom of the image */}
                      <div className="absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300">
                        <h4 className="text-white font-bold tracking-wide text-sm sm:text-base drop-shadow-md">
                          {amenity.name}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Hover Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}