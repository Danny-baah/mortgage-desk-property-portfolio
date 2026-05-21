"use client";

import Image from "next/image";

const amenities = [
  {
    title: "Infinity Pool & Kids’ Pool",
    description: "A breathtaking rooftop infinity pool designed for relaxation, paired with a safe, dedicated shallow swimming area for children.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 014-4h10a4 4 0 014 4M3 19a4 4 0 014-4h10a4 4 0 014 4" />
      </svg>
    )
  },
  {
    title: "Fully Equipped Gymnasium",
    description: "State-of-the-art cardiovascular and strength training equipment to fulfill all your personal health and fitness goals.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Concierge Services",
    description: "Professional, round-the-clock front desk and white-glove concierge management to attend to your everyday requests.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: "Café & Co-Working Spaces",
    description: "An incredibly styled shared workspace environment paired with an artisanal coffee bar for modern remote work efficiency.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Meeting Rooms & Lounge",
    description: "Sophisticated executive meeting centers and an ultra-exclusive private residential social club lounge.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21 Gram-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: "Restaurant & Rooftop Bar",
    description: "World-class dining alternatives and open-air rooftop cocktail spaces overlooking the stunning Accra skyline.",
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    )
  },
  {
    title: "Games Room & Indoor Play Area",
    description: "Recreational facilities equipped with classic table games, alongside an engaging indoor soft-play sanctuary for children.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.283 8.283 0 013.337-4.167 8.25 8.25 0 003.025-.219z" />
      </svg>
    )
  },
  {
    title: "Secured Parking & Utilities",
    description: "Safe, underground automated structural vehicle parking backed up by consistent industrial power and water security grids.",
    // FIXED: Updated to a premium, highly stable modern underground parking asset URL
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
      </svg>
    )
  }
];

export default function ManoraAmenities() {
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
                Resort-Style Comfort
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 uppercase tracking-tight">
            World-Class <span className="text-orange-500">Amenities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Every square inch of Manora Residences is purposefully crafted to create an effortless environment of luxury, productivity, and modern safety.
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

                <h3 className="text-lg font-black text-blue-950 uppercase tracking-tight mb-2 group-hover:text-orange-500 transition-colors duration-300">
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