"use client";

import Image from "next/image";

const amenities = [
  {
    title: "Infinity Pool & Relaxation Decks",
    description: "A breathtaking infinity edge pool surrounded by plush relaxation decks, designed for the ultimate unwind.",
    // FIXED: Updated to a rock-solid luxury infinity pool asset URL
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h10a4 4 0 014 4M3 19a4 4 0 014-4h10a4 4 0 014 4" />
      </svg>
    )
  },
  {
    title: "Gym & Pilates Studio",
    description: "A state-of-the-art fitness center complete with a dedicated Pilates studio to balance strength, flexibility, and wellness.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Concierge Services",
    description: "Professional, round-the-clock front desk and white-glove concierge management to ensure a seamless living experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: "Café & Co-Working Space",
    description: "A stylish blend of productivity and leisure, featuring artisanal coffee and premium remote workspace environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Rooftop Lounge",
    description: "An exclusive elevated retreat offering panoramic, uninterrupted views over the heart of Cantonments.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    )
  },
  {
    title: "Landscaped Gardens",
    description: "Beautifully curated botanical gardens and serene outdoor spaces inspired by fluid natural lines and graceful forms.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    )
  },
  {
    title: "Children’s Play Area",
    description: "A safe, engaging, and thoughtfully designed outdoor play environment dedicated to our youngest residents.",
    // FIXED: Updated to a reliable, beautifully green modern playground asset URL
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 013.337-4.167 8.25 8.25 0 003.025-.219z" />
      </svg>
    )
  },
  {
    title: "Basement Parking & EV Charging",
    description: "Secure, automated structural underground parking equipped with modern Electric Vehicle (EV) charging stations.",
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
];

export default function AutographAmenities() {
  return (
    <section id="amenities" className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[150px] opacity-40 pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-[150px] opacity-40 pointer-events-none translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Elevated Living
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#b5d334] uppercase tracking-tight">
            Curated <span className="text-[#b5d334]">Amenities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Every detail of The Autograph has been designed with a focus on community, ultimate comfort, and holistic wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-md shadow-blue-950/5 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-200">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative bg-white">
                <div className="w-10 h-10 bg-blue-50 text-blue-950 rounded-lg flex items-center justify-center mb-4 border border-blue-100/50 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">
                  {amenity.icon}
                </div>

                <h3 className="text-lg font-black text-[#b5d334] uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {amenity.title}
                </h3>
                
                <p className="text-sm text-slate-500 font-light leading-relaxed flex-grow">
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