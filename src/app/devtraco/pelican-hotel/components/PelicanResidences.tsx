"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const suiteData = [
  {
    id: "standard-room",
    name: "Standard Room",
    size: "25 – 30 sq. m.",
    occupancy: "Up to 2 Adults",
    tagline: "Convenience & Functional Layout",
    description: "Our Standard Rooms are designed to comfortably accommodate up to two adults. Tailored for budget-conscious travelers, this configuration offers all primary modern amenities to ensure this is one of the finest stays in Cantonments. Compact and thoughtfully arranged, it's the perfect choice if you're looking for an effortless executive experience.",
    features: ["Optimized Work Desk Corner", "Premium Bedding Architecture", "High-Speed Connectivity", "Thoughtfully Arranged Essential Storage"],
    images: [
      "/assets/pelican/standard-room-1.jpg",
      "/assets/pelican/standard-room1.jpg",
      "/assets/pelican/suite-kitchen.jpg"
    ]
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    size: "40 sq. m.",
    occupancy: "Up to 2 Adults",
    tagline: "Extra Space & Elite Comfort",
    description: "Our Deluxe Rooms feature an expansive layout accommodating up to two adults perfectly. Ideal for those seeking some more room to breathe, our Deluxe Room adds a little something special to your capital stay. Relax and enjoy a masterfully curated blend of premium comfort, high-end finishing, and localized charm.",
    features: ["Integrated Private Kitchenette", "Bright Panoramic Glazing", "Comfort Lounge Alignment", "Expanded Living Footprint"],
    images: [
      "/assets/pelican/ThePelicanHotel_DLXRoom_Bed (1).jpg",
      "/assets/pelican/ThePelicanHotel_DLXRoom_LivingKitchenette.jpg",
      "/assets/pelican/deluxe-room-2.jpg",
      "/assets/pelican/deluxe-room-the-pelican.jpg"
    ]
  },
  {
    id: "junior-suite",
    name: "Junior Suite",
    size: "Up to 50 sq. m.",
    occupancy: "Up to 2 Adults",
    tagline: "Separated Living & Ultimate Privacy",
    description: "Our Junior Suites comfortably host up to two adults within a generous floorplan. Featuring a distinctly separated living area, it provides high-tier privacy and extra space for a thoroughly relaxed, pleasant experience. Our Junior Suite is highly ideal for couples wanting a bit of extra room to spread out and enjoy an absolute treat.",
    features: ["Dedicated Living Room Separation", "Luxury Deep Soak Bathtub", "Fully Appointed Kitchenette Module", "Bespoke Couple's Retreat Elements"],
    images: [
      "/assets/pelican/junior-suite-1.jpg",
      "/assets/pelican/ThePelicanHotel_JNRSuite_Bathtub.jpg",
      "/assets/pelican/ThePelicanHotel_JNRSuite_Kitchenette.jpg",
      "/assets/pelican/ThePelicanHotel_JNRSuite_LivingKitchenette (1).jpg"
    ]
  },
  {
    id: "premier-suite",
    name: "Premier Suite",
    size: "65 sq. m.",
    occupancy: "Up to 2 Adults",
    tagline: "Indulgent Living Reimagined",
    description: "The Premier Suites provide an incredible sanctuary retreat space, perfectly suited for two adults. Our suite's wide architectural layout ensures ample space, high-end tranquility, and maximum aesthetic comfort. It is perfect if you're looking to treat yourself to a bit more indulgence, roomier structural parameters, and revel in your stay to the absolute fullest.",
    features: ["Expansive High-Chair Dining Area", "Dedicated Executive Hosting Lounge", "Grand Master Suite Blueprint", "Curated Architectural Elements"],
    images: [
      "/assets/pelican/Premier_Suite_Bed_07772f86.jpg",
      "/assets/pelican/Premier_Suite_High_Chair_Dining_Area_3a140bc2.jpg",
      "/assets/pelican/Premier_Suite_Living_Room_Only_5a580ad5.jpg",
      "/assets/pelican/premier-suite.jpg"
    ]
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    size: "Up to 68.6 sq. m.",
    occupancy: "Families & Couples",
    tagline: "The Pinnacle of Refined Opulence",
    description: "Experience exceptional comfort, grand architecture, and immaculate style in our Executive Suites. Perfect for traveling families and discerning couples, this is our most spacious and opulent structural footprint. Complete with bespoke, tailored amenities for those seeking ultimate comfort and strict exclusivity in Accra, Ghana.",
    features: ["Maximum Opulent Interior Area", "Tailored Premium VIP Guest Privileges", "Luxurious Multi-Zoned Floor Plan", "Unmatched Multi-Aspect City Sweeps"],
    images: [
      "/assets/pelican/Exec_Suite_Bed_edb1a930.jpg",
      "/assets/pelican/Exec_Suite_Living_Area_fa9dcdbf.jpg",
      "/assets/pelican/executive-suite.jpg",
      "/assets/pelican/executive-suite-1.jpg"
    ]
  }
];

export default function PelicanResidences() {
  // Store active image selections per suite block dynamically
  const [suiteViews, setSuiteViews] = useState<{ [key: string]: string }>({});

  const handlePicker = (suiteId: string, imageSrc: string) => {
    setSuiteViews((prev) => ({ ...prev, [suiteId]: imageSrc }));
  };

  return (
    <section id="pelican-rooms" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Decorative Brand Matrix */}
      <div className="absolute inset-y-0 left-0 w-px bg-slate-100 left-1/3 hidden xl:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-24">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Luxury Inventory
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter mb-6">
            Rooms, Suites & <br />
            <span className="text-orange-500">Private Havens</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Discover precision space layouts engineered with international five-star sophistication and tailored functional design.
          </p>
        </div>

        {/* =========================================================
            INVENTORY LOOP
            ========================================================= */}
        <div className="space-y-28 sm:space-y-36">
          {suiteData.map((suite, index) => {
            const isMirror = index % 2 !== 0;
            const currentView = suiteViews[suite.id] || suite.images[0];

            return (
              <div 
                key={suite.id}
                className={`flex flex-col ${isMirror ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                
                {/* GALLERY BLOCK */}
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                  {/* Hero Image Focus frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-blue-950/5 bg-slate-50 border border-slate-100/50 group">
                    <Image
                      src={currentView}
                      alt={suite.name}
                      fill
                      sizes="(max-w-1024px) 100vw, 50vw"
                      className="object-cover object-center transition-all duration-700 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent"></div>
                  </div>

                  {/* Thumbnail Swappers Matrix */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {suite.images.map((src, idx) => {
                      const isActive = currentView === src;
                      return (
                        <button
                          key={idx}
                          onClick={() => handlePicker(suite.id, src)}
                          className={`relative w-20 sm:w-24 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 bg-slate-100 ${
                            isActive 
                              ? "border-orange-500 scale-95 shadow-lg shadow-orange-500/20" 
                              : "border-transparent opacity-60 hover:opacity-100 hover:scale-95"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`${suite.name} perspective layout ${idx + 1}`}
                            fill
                            sizes="96px"
                            className="object-cover object-center"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* INFORMATION DESCRIPTION CONTENT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  
                  {/* Specs Pill Badges */}
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span className="text-[10px] font-black text-blue-950 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md border border-blue-100/40">
                      {suite.size}
                    </span>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-md border border-orange-100/40">
                      {suite.occupancy}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-blue-950 uppercase tracking-tight mb-2 leading-none">
                    {suite.name}
                  </h3>
                  
                  <h4 className="text-sm font-bold text-orange-500 tracking-wide uppercase mb-6">
                    {suite.tagline}
                  </h4>

                  <p className="text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-8">
                    {suite.description}
                  </p>

                  {/* Detailed Spec Checkpoints */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 border-t border-slate-100 pt-8">
                    {suite.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-slate-700 tracking-tight">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <Link
                      href="/register"
                      className="inline-flex items-center justify-center px-8 py-4 bg-blue-950 text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-orange-500 shadow-xl shadow-blue-950/10 hover:shadow-orange-500/30"
                    >
                      <span>Reserve Allocation</span>
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
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