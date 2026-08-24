"use client";

import Image from "next/image";

const towerClassifications = [
  {
    title: "Serviced Apartments",
    tagline: "Premium Corporate Living",
    image: "/assets/the-address/Hotel_Big-_Image.jpg",
    description: "Fully managed, high-end suites tailored for executive stays and long-term professional assignments. Engineered for maximum yield and effortless asset management."
  },
  {
    title: "Residential Apartments",
    tagline: "Unmatched Urban Elegance",
    image: "/assets/the-address/Residential_Big_Image.jpg",
    description: "Spacious, masterfully appointed permanent residences. Designed for families and professionals seeking a secure, luxury enclave in the heart of Roman Ridge."
  },
  {
    title: "Vacation Units",
    tagline: "High-Yield Leisure Assets",
    image: "/assets/the-address/VacationBig_Image_v.jpg",
    description: "Optimized layouts catering to the surging short-term rental and diaspora market. A perfect blend of resort-style amenities and strategic investment potential."
  }
];

export default function AddressAmenities() {
  return (
    <section id="address-amenities" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      
      {/* Background Architectural Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-950/5 skew-x-12 translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Three Towers
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            Asset <span className="text-[#b5d334]">Classifications</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Choose from three tailored real estate configurations, each designed to maximize lifestyle comfort and long-term capital appreciation.
          </p>
        </div>

        {/* =========================================================
            3-COLUMN INSTITUTIONAL GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {towerClassifications.map((tower, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-950/15 hover:-translate-y-2"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                <Image
                  src={tower.image}
                  alt={`${tower.title} at The Address`}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Visual Frame Overlays */}
                <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-blue-950/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-black text-xl shadow-lg">
                  0{idx + 1}
                </div>

                {/* Title overlay integrated into the image bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-400 block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {tower.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-none">
                    {tower.title}
                  </h3>
                </div>
              </div>

              {/* Text Description Box */}
              <div className="p-8 flex flex-col flex-grow relative bg-white">
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {tower.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}