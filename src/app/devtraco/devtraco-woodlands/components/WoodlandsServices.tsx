"use client";

import Image from "next/image";

const servicesData = [
  {
    title: "Tared Roads",
    description: "Meticulously demarcated asphalt roads built for durability, guaranteeing seamless and secure transportation for all.",
    image: "/assets/woodlands/Services-Asphalt-Roads-New.png"
  },
  {
    title: "Security Systems",
    description: "With a dedicated team of trained professionals and state-of-the-art surveillance systems, we are committed to providing a secure environment where you can live and thrive without worry. From 24/7 patrols to access control measures.",
    image: "/assets/woodlands/Security-Systems.png"
  },
  {
    title: "Connection For Ghana Water",
    description: "Provisions to access Ghana Water supply, ensuring convenient availability of clean water.",
    image: "/assets/woodlands/Borehole.png"
  },
  {
    title: "Facilities & Community Management",
    description: "Experience seamless operations and community maintenance with our onsite facility management services at Devtraco Woodlands. From security to landscaping and beyond, we ensure that your community functions flawlessly.",
    image: "/assets/woodlands/Facility-Management-new.png"
  },
  {
    title: "Electrical Power Supply",
    description: "Seamlessly integrate into a modern community with provisions for connecting to the ECG electrical supply. Enjoy reliable and uninterrupted access to electricity, empowering you to create your ideal living environment.",
    image: "/assets/woodlands/Power-Supply-1.png"
  },
  {
    title: "Street Lighting",
    description: "An extensive street lighting system committed to offering safety and enhanced visibility for all residents and visitors navigating the neighborhood.",
    image: "/assets/woodlands/Street-Lights-1.png"
  },
  {
    title: "Police Station",
    description: "Through a partnership with law enforcement, a dedicated police station will be located within Devtraco Woodlands. With a permanent police presence on-site, residents can be assured, knowing that help is always close at hand in case of emergencies. This proactive approach to safety enhances peace of mind and fosters a strong sense of community and cooperation.",
    image: "/assets/woodlands/Security-Systems.png"
  },
  {
    title: "Fire Station",
    description: "At Devtraco Woodlands, we are taking proactive measures to ensure a rapid response to fire emergencies by creating a dedicated fire station within our community. Through partnerships with the Ghana Fire Service, trained firefighters and state-of-the-art equipment will be on standby to handle any fire-related incidents swiftly and effectively.",
    image: "/assets/woodlands/manometer-to-inflate-the-wheels-of-emergency-vehic-2023-11-27-05-05-57-utc.jpg"
  }
];

export default function WoodlandsServices() {
  return (
    <section id="woodlands-services" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Structural Decorative Elements for Balance */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            CENTERED MASTER HEADER (Symmetrical & Balanced)
            ========================================================= */}
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-emerald-600"></span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600">
                Core Infrastructure
              </span>
              <span className="w-8 h-px bg-emerald-600"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6 leading-tight">
            Engineered For <span className="text-orange-500">Uncompromised</span> Living
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-slate-600 font-light text-base sm:text-lg max-w-2xl mx-auto">
            Beyond the natural surroundings, Devtraco Woodlands is reinforced by an advanced, synchronized framework of civil systems designed for long-term reliability and asset protection.
          </p>
        </div>

        {/* =========================================================
            SYMMETRICAL 2-COLUMN BALANCED MATRIX
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {servicesData.map((service, idx) => (
            <div 
              key={idx}
              className="group flex flex-col sm:flex-row gap-6 md:gap-8 items-start pb-8 border-b border-slate-100"
            >
              
              {/* Perfectly Proportioned Geometric Image Window */}
              <div className="relative w-full sm:w-44 md:w-52 aspect-[4/3] sm:aspect-square shrink-0 rounded-2xl overflow-hidden bg-slate-50 shadow-sm border border-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w-640px) 100vw, 208px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Elegant overlay matching our primary brand blue */}
                <div className="absolute inset-0 bg-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Layout Content Stream */}
              <div className="flex-1 w-full pt-1">
                
                {/* Module Identifiers using Emerald Branding */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">
                    SYS-MODULE // 0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-orange-500 transition-colors duration-300"></div>
                </div>

                <h3 className="text-lg md:text-xl font-black text-blue-950 uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}