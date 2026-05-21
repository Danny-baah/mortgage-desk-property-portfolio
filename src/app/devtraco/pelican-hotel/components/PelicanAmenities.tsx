"use client";

import Image from "next/image";

const pelicanAmenities = [
  {
    title: "Fitness Centre",
    timing: "06:00 AM – 10:00 PM",
    image: "/assets/pelican/Gym_pool_view_44a4e2b9.jpg",
    description: "A premier health club offering breathtaking visual sweeps of the property alongside cutting-edge performance training equipment."
  },
  {
    title: "Business Centre",
    timing: "08:30 AM – 05:00 PM",
    image: "/assets/pelican/Pelican_Meeting_Lounge_ORA.jpg",
    description: "A secure, elegantly soundproofed environment curated with advanced connectivity assets for executive productivity."
  },
  {
    title: "Swimming Pool",
    timing: "06:00 AM – 06:00 PM",
    image: "/assets/pelican/Pool_Main_ee6e76db.jpg",
    description: "A pristine lap and lounge oasis surrounded by designer sundecks, perfect for relaxation or low-impact wellness."
  },
  {
    title: "24-Hour Room Service",
    timing: "Available 24/7",
    image: "/assets/pelican/standard-room-1.jpg",
    description: "Gourmet in-room culinary adjustments delivered with seamless presentation straight to the comfort of your suite."
  },
  {
    title: "All-Day Dining Venues",
    timing: "Continuous Service",
    image: "/assets/pelican/the-beak-bistro.jpg",
    description: "Multiple tailored culinary experiences on-site showcasing local Ghanaian flavor profiles fused with masterclass international cuisine."
  },
  {
    title: "Bespoke Event Venues",
    timing: "By Reservation",
    image: "/assets/pelican/pelican-meeting-room.jpg",
    description: "Adaptable luxury conference configurations and gala rooms engineered to manage high-end international assemblies."
  }
];

export default function PelicanAmenities() {
  return (
    <section id="pelican-amenities" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Structural Accent Blur */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-orange-500"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              World-Class Provisions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6">
            Guest Amenities & <br />
            <span className="text-orange-500">Elite Operations</span>
          </h2>
          <p className="text-slate-600 font-light text-lg sm:text-xl leading-relaxed">
            Engineered to accommodate corporate parameters and high-end leisure fluidly. Explore the full suite of guest infrastructure at The Pelican.
          </p>
        </div>

        {/* =========================================================
            6-CARD LUXURY GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pelicanAmenities.map((amenity, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-100/80 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950/10 hover:-translate-y-1"
            >
              {/* Media Enclosure */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={amenity.image}
                  alt={`${amenity.title} at The Pelican Hotel`}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Visual Frame Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent"></div>

                {/* Dynamic Hours Badge */}
                <div className="absolute bottom-4 left-4 bg-blue-950/90 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 shadow-lg">
                  <p className="text-[10px] font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    {amenity.timing}
                  </p>
                </div>
              </div>

              {/* Text Meta Container */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Minimalist Top Bar Interactive Border */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {amenity.title}
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