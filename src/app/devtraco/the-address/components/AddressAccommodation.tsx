"use client";

import Image from "next/image";
import Link from "next/link";

const accommodationBlocks = [
  {
    id: "flexible-ownership",
    badge: "Operational Framework",
    title: "5-Star Services, Flexible Ownership",
    subtitle: "Adaptive Luxury Built Around Your Strategy",
    description1: "Enjoy a premium living experience backed by world-class services designed for comfort and convenience. From professional property management to hospitality-level amenities, every detail is tailored to deliver a seamless, stress-free lifestyle.",
    description2: "With flexible ownership options, you have the freedom to use your property as a personal residence, a short-stay rental, or a long-term investment. It’s a smart approach that combines luxury living with the ability to maximize returns on your terms.",
    image: "/assets/the-address/Hotel_Big-_Image.jpg",
    metrics: ["On-Site Management", "Flexible Rental Scheme", "Turnkey Asset Handover"]
  },
  {
    id: "seasoned-investor",
    badge: "Market Yields",
    title: "For The Seasoned Investor",
    subtitle: "Positioned for Steady Capital Performance",
    description1: "Built for those who recognize value beyond the surface. This opportunity offers strong potential for steady returns, driven by high demand in Accra’s growing luxury and short-stay rental market. Its prime location and premium appeal make it ideal for both long-term capital appreciation and consistent rental income.",
    description2: "With a steady flow of expats, professionals, and diaspora clients seeking quality accommodation, this investment is positioned to perform. Whether you’re expanding your portfolio or securing a high-yield asset, it delivers the balance of prestige, stability, and profitability.",
    image: "/assets/the-address/Residential_Big_Image.jpg",
    metrics: ["High Rental Demand", "Diaspora Market Target", "Strong Capital Gains"]
  },
  {
    id: "nits-tower",
    badge: "Flagship Allocation",
    title: "NITS TOWER: For The Discerning Investor",
    subtitle: "Exclusivity and Refined Portfolio Expansion",
    description1: "Designed for those who value exclusivity and refined living, NITS Tower offers a premium investment opportunity in one of Accra’s most sought-after locations. With its modern architecture, high-end finishes, and carefully curated amenities, it delivers both comfort and prestige.",
    description2: "Positioned to attract high-quality tenants such as professionals, executives, and expatriates, NITS Tower provides strong rental potential alongside long-term value appreciation. It is an ideal choice for investors seeking a sophisticated asset that combines luxury, demand, and lasting returns.",
    image: "/assets/the-address/VacationBig_Image_v.jpg",
    metrics: ["Premium Finishes", "Executive Tenant Demographics", "Maximum Long-Term Value"]
  }
];

export default function AddressAccommodation() {
  return (
    <section id="address-accommodation" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Structural Accent Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 hidden xl:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-3xl mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-blue-950"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#b5d334]">
              Residential Frameworks
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            Accommodation & <br />
            <span className="text-[#b5d334]">Investor Portfolios</span>
          </h2>
          <p className="text-slate-600 font-light text-lg leading-relaxed">
            A comprehensive breakdown of structural assets engineered to accommodate top-tier residency profiles and sophisticated international capital deployments.
          </p>
        </div>

        {/* =========================================================
            ALTERNATING CONFIGURATION GRID
            ========================================================= */}
        <div className="space-y-32 sm:space-y-44">
          {accommodationBlocks.map((block, index) => {
            const isMirrored = index % 2 !== 0;

            return (
              <div 
                key={block.id}
                className={`flex flex-col ${isMirrored ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                
                {/* VISUAL IMAGE BLOCK CONTAINER */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/5 border border-slate-100/60 group bg-slate-50">
                    <Image
                      src={block.image}
                      alt={`${block.title} - The Address Accra`}
                      fill
                      sizes="(max-w-1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    
                    {/* Architectural Shade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
                    
                    {/* Absolute Index Marker */}
                    <div className="absolute top-6 left-6 bg-blue-950/90 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                      Module 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* TEXT NARRATIVE CONTAINER */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  
                  <div className="inline-flex items-center mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 bg-orange-50 px-2.5 py-1 rounded border border-orange-100/30">
                      {block.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#b5d334] uppercase tracking-tight mb-2 leading-none">
                    {block.title}
                  </h3>
                  
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-6">
                    {block.subtitle}
                  </h4>

                  <div className="space-y-4 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-8">
                    <p>{block.description1}</p>
                    <p>{block.description2}</p>
                  </div>

                  {/* Scannable Structural Metric Tags */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                    {block.metrics.map((metric, mIdx) => (
                      <span 
                        key={mIdx}
                        className="text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200/60 rounded-md px-3 py-1.5 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        {metric}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}