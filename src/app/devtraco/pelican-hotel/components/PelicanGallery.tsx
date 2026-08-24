"use client";

import { useState } from "react";
import Image from "next/image";

// Dynamic Inventory of ALL provided non-amenity images.
// I have deliberately assigned specific grid spans to create a balanced architectural layout.
const pelicanGalleryImages = [
  {
    src: "/assets/pelican/the-beak-bistro.jpg",
    alt: "The Beak Bistro Culinary Space",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/pelican/standard-room-1.jpg",
    alt: "Standard Room Comfort Bedding",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/ThePelicanHotel_DLXRoom_LivingKitchenette.jpg",
    alt: "Deluxe Room Private Kitchenette",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/pelican-meeting-room.jpg",
    alt: "Pelican Executive Corporate Venue",
    className: "col-span-2 row-span-1", // Horizontal Featured
  },
  {
    src: "/assets/pelican/junior-suite-1.jpg",
    alt: "Junior Suite Separated Living Area",
    className: "col-span-1 row-span-2", // Vertical Featured
  },
  {
    src: "/assets/pelican/Exec_Suite_Bed_edb1a930.jpg",
    alt: "Executive Suite Grand Bedroom Blueprint",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Pelican_Meeting_Lounge_ORA.jpg",
    alt: "Pelican Meeting Lounge Connectivity Area",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Premier_Suite_Living_Room_Only_5a580ad5.jpg",
    alt: "Premier Suite Architectural Lounge Area",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/pelican/deluxe-room-2.jpg",
    alt: "Deluxe Room Comfort Configuration",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/ThePelicanHotel_JNRSuite_Bathtub.jpg",
    alt: "Junior Suite Luxury Deep Soak Bathtub",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/suite-kitchen.jpg",
    alt: "Standard Suite Integrated Compact Kitchenette",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Pool_Main_ee6e76db.jpg",
    alt: "Pelican Main Swimming Pool Lap Oasis",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Premier_Suite_High_Chair_Dining_Area_3a140bc2.jpg",
    alt: "Premier Suite High-Chair Dining Setup",
    className: "col-span-2 row-span-1", // Horizontal Featured
  },
  {
    src: "/assets/pelican/standard-room1.jpg",
    alt: "Standard Room Efficient Workstation",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/ThePelicanHotel_DLXRoom_Bed (1).jpg",
    alt: "Deluxe Room Premium Glazing View",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/exec-suite-kitchenette.jpg",
    alt: "Executive Suite Full Culinary Module",
    className: "col-span-1 row-span-2", // Vertical Featured
  },
  {
    src: "/assets/pelican/Premier_Suite_Bed_07772f86.jpg",
    alt: "Premier Suite Indulgent Sleeping Sanctuary",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/pelican/ThePelicanHotel_JNRSuite_LivingKitchenette (1).jpg",
    alt: "Junior Suite Dual Zone Floorplan",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Gym_pool_view_44a4e2b9.jpg",
    alt: "Pelican Fitness Centre Architectural Sweeps",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/exec-suite-living.jpg",
    alt: "Executive Suite Opulent City Views Lounge",
    className: "col-span-2 row-span-1", // Horizontal Featured
  },
  {
    src: "/assets/pelican/deluxe-room-the-pelican.jpg",
    alt: "Deluxe Room Tailored Amenities",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/premier-suite.jpg",
    alt: "Premier Suite Wide Structural Alignment",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/executive-suite-1.jpg",
    alt: "Executive Suite Grand Entrance Blueprint",
    className: "col-span-2 row-span-2", // Large Featured Image
  },
  {
    src: "/assets/pelican/Standard_Twin_Room_the_pelican.jpg",
    alt: "Standard Room Twin Bed Setup",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/ThePelicanHotel_JNRSuite_Kitchenette.jpg",
    alt: "Junior Suite Bespoke Couple's Kitchenette",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/assets/pelican/Exec_Suite_Living_Area_fa9dcdbf.jpg",
    alt: "Executive Suite VIP Hosting Zone",
    className: "col-span-2 row-span-1", // Horizontal Featured
  }
];

export default function PelicanGallery() {
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % pelicanGalleryImages.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + pelicanGalleryImages.length) % pelicanGalleryImages.length);
  };

  return (
    <section id="pelican-gallery" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
       
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Immersive Visualization
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6">
            Inside <span className="text-[#b5d334]">The Pelican</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 font-light text-lg">
            Explore the multi-award-winning architecture, curated interior elegance, and specialized functional design of Ghana's premier hotel asset.
          </p>
        </div>

        {/* =========================================================
            DYNAMIC MASONRY GRID
            ========================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px] sm:auto-rows-[180px] md:auto-rows-[220px]">
          {pelicanGalleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg shadow-blue-950/5 hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-500 bg-slate-50 border border-slate-100/50 ${image.className}`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-blue-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                 <p className="text-white font-bold text-xs uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
              
              {/* Plus Icon Accent */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>

              {/* Bottom Orange Line Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================================
          LIGHTBOX OVERLAY
          ========================================================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-lg flex flex-col justify-center items-center p-4 sm:p-8 animate-fadeIn">
          
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-110 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
            
            {/* Previous Button */}
            <button 
              onClick={prevPhoto}
              className="absolute left-0 z-110 -translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next Button */}
            <button 
              onClick={nextPhoto}
              className="absolute right-0 z-110 translate-x-1/2 w-14 h-14 rounded-full bg-white text-blue-950 hover:bg-orange-500 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hidden md:flex"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <Image
              src={pelicanGalleryImages[photoIndex].src}
              alt={pelicanGalleryImages[photoIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Counter */}
          <div className="text-center mt-8 text-white max-w-2xl px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">
              Frame {photoIndex + 1} of {pelicanGalleryImages.length}
            </p>
            <p className="text-base sm:text-lg font-light text-slate-100">
              {pelicanGalleryImages[photoIndex].alt}
            </p>
          </div>

          {/* Mobile Navigation */}
          <div className="flex gap-4 mt-6 md:hidden">
            <button onClick={prevPhoto} className="px-6 py-2 bg-white text-blue-950 rounded-full text-xs font-bold uppercase tracking-widest">Prev</button>
            <button onClick={nextPhoto} className="px-6 py-2 bg-white text-blue-950 rounded-full text-xs font-bold uppercase tracking-widest">Next</button>
          </div>

        </div>
      )}

      {/* Internal animation CSS layer */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </section>
  );
}