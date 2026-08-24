"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const homeModels = [
  {
    id: "nile",
    name: "The Nile",
    tagline: "Modern Semi-Detached Living",
    size: "128 SQM / 1,377 SQFT",
    price: "$95,000",
    description:
      "Designed for the savvy homeowner, The Nile is a 2-bedroom semi-detached home that maximizes space without compromising on style. Perfect for young families or professionals, this unit features a smart layout that includes a dedicated family area separate from the main living room, offering privacy and versatility. With all bedrooms en-suite and a guest washroom, The Nile offers the convenience of a larger home in a compact, efficient footprint.",
    features: [
      "2 Spacious Bedrooms (En-suite)",
      "2.5 Bathrooms",
      "Open Living Room & Separate Family Area",
      "Fully Fitted Kitchen",
      "Fitted Wardrobes",
      "Fitted ACs",
    ],
    images: [
      {
        src: "/assets/atta-doku/The-Nile-1.jpg",
        alt: "The Nile Exterior View",
      },
      {
        src: "/assets/atta-doku/The-Nile-2.jpg",
        alt: "The Nile Elevation Perspective",
      },
      {
        src: "/assets/atta-doku/The-Nile-3.jpg",
        alt: "The Nile Interior Living Area",
      },
      {
        src: "/assets/atta-doku/The-Nile-4.jpg",
        alt: "The Nile Floor Plan / Layout",
      },
    ],
  },
  {
    id: "densu",
    name: "The Densu",
    tagline: "The Executive Detached Family Home",
    size: "245 SQM / 2,637 SQFT",
    price: "$165,000",
    description:
      "Step up to The Densu, a 4-bedroom detached residence built for growing families who value space and culinary culture. Spanning an impressive 245 sqm, this home is defined by its dual-kitchen concept, featuring both a pristine indoor fitted kitchen and a robust outdoor kitchen, perfect for heavy cooking and entertaining. With a generous family area and expansive living spaces, The Densu provides the perfect backdrop for making lasting memories.",
    features: [
      "4 Bedrooms (All En-suite)",
      "4.5 Bathrooms",
      "Dual Kitchens: Fitted Indoor & Outdoor Kitchens",
      "Expansive Living Room & Family Area",
      "Fitted Wardrobes throughout",
      "Fitted ACs",
    ],
    images: [
      {
        src: "/assets/atta-doku/1.-The-Densu.jpg",
        alt: "The Densu Premium Facade View 1",
      },
      { src: "/assets/atta-doku/2.-The-Densu.jpg", alt: "The Densu View 2" },
      {
        src: "/assets/atta-doku/3.-The-Densu.jpg",
        alt: "The Densu Exterior Angle 3",
      },
      {
        src: "/assets/atta-doku/5.-The-Densu.jpg",
        alt: "The Densu Scenic Render 5",
      },
      {
        src: "/assets/atta-doku/interior-collage-1.jpg",
        alt: "The Densu Curated Interior Showcase",
      },
    ],
  },
  {
    id: "pacific",
    name: "The Pacific",
    tagline: "The Flagship Residence with Rooftop Terrace",
    size: "325 SQM of Pure Sophistication",
    price: "$180,000",
    description:
      "Experience the pinnacle of luxury at The Pacific. This massive 4-bedroom detached home is the entertainer’s dream. It builds upon the luxury of The Densu but elevates the experience with a stunning private Rooftop Terrace. The Pacific offers unmatched grandeur and 325 sqm of pure sophistication.",
    features: [
      "4 Luxury Bedrooms (All En-suite)",
      "4.5 Bathrooms",
      "Exclusive Private Rooftop Terrace",
      "Dual Kitchens: Fitted Indoor & Outdoor Kitchens",
      "Grand Living Room & Upper-Level Family Area",
      "Walk-in / Fitted Wardrobes",
      "Fitted ACs",
    ],
    images: [
      {
        src: "/assets/atta-doku/Pacific-1.jpg",
        alt: "The Pacific Luxury Flagship Model View 1",
      },
      {
        src: "/assets/atta-doku/Pacific-2.jpg",
        alt: "The Pacific Luxury Flagship Model View 2",
      },
      {
        src: "/assets/atta-doku/Pacific-3.jpg",
        alt: "The Pacific Luxury Flagship Model View 3",
      },
      {
        src: "/assets/atta-doku/Pacific-4.jpg",
        alt: "The Pacific Luxury Flagship Model View 4",
      },
      {
        src: "/assets/atta-doku/Interior-2.jpg",
        alt: "The Pacific Elegant Interior Living Room",
      },
    ],
  },
];

export default function AttaDokuHomeTypes() {
  const [modelIndex, setModelIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentModel = homeModels[modelIndex];

  const handleModelChange = (idx: number) => {
    setModelIndex(idx);
    setSlideIndex(0);
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % currentModel.images.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prev) =>
        (prev - 1 + currentModel.images.length) % currentModel.images.length,
    );
  };

  return (
    <section
      id="models"
      className="py-24 bg-white border-t border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#b5d334]/15 px-4 py-1.5 rounded-full mb-4 border border-[#b5d334]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Curated Masterpieces
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] tracking-tight mb-4 uppercase">
            Home Types
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light">
            Explore our architectural options tailored perfectly to your
            lifestyle requirements, complete with luxurious finishes.
          </p>
        </div>

        {/* PREMIUM CONTROLS TABS BAR */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex bg-slate-100 p-2 rounded-2xl shadow-inner border border-slate-200/40 w-full max-w-2xl">
            {homeModels.map((model, idx) => (
              <button
                key={model.id}
                onClick={() => handleModelChange(idx)}
                className={`flex-1 text-center py-3 rounded-xl font-bold tracking-wide text-xs sm:text-sm uppercase transition-all duration-300 ${
                  modelIndex === idx
                    ? "bg-[#b5d334] text-black shadow-md"
                    : "text-slate-600 hover:text-black hover:bg-[#b5d334]/10"
                }`}
              >
                {model.name}
              </button>
            ))}
          </div>
        </div>

        {/* SIDE-BY-SIDE INTERACTIVE LAYOUT CONTROLLER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch bg-slate-50 p-6 sm:p-10 rounded-[36px] border border-slate-200/50 shadow-sm">
          {/* LEFT THIRD: PICTURE SLIDESHOW VISUAL MEDIA COMPONENT */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Main Active Picture Viewbox Window frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/60 group">
              <Image
                src={currentModel.images[slideIndex].src}
                alt={currentModel.images[slideIndex].alt}
                fill
                priority
                className="object-cover object-center transition-all duration-500"
              />

              {/* Floating Image Label Identifier Overlay - Kept blue as requested */}
              <div className="absolute top-4 left-4 bg-blue-950/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md">
                {currentModel.name} . View {slideIndex + 1} of{" "}
                {currentModel.images.length}
              </div>

              {/* Slider Arrow Controls Left / Right Nav vectors */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 text-black hover:bg-[#b5d334] hover:text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none"
                aria-label="Previous Slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 text-black hover:bg-[#b5d334] hover:text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-200 focus:outline-none"
                aria-label="Next Slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail Selection Indicator Strip Row below main frame */}
            <div className="grid grid-cols-5 gap-2.5">
              {currentModel.images.map((img, sIdx) => (
                <button
                  key={sIdx}
                  onClick={() => setSlideIndex(sIdx)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    slideIndex === sIdx
                      ? "border-orange-500 ring-2 ring-orange-500/20 opacity-100 scale-[1.02]"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}

              {/* Balance Grid spacer pads for items under 5 views */}
              {currentModel.images.length < 5 &&
                Array.from({ length: 5 - currentModel.images.length }).map(
                  (_, padIdx) => (
                    <div
                      key={padIdx}
                      className="hidden sm:block aspect-[4/3] bg-slate-200/40 rounded-xl border border-dashed border-slate-300/40"
                    ></div>
                  ),
                )}
            </div>
          </div>

          {/* RIGHT THIRD: CONTENT COPY DETAILS SPECIFICATIONS COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              {/* Badge & Model Metadata */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight uppercase">
                    {currentModel.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-orange-600 tracking-wider mt-0.5">
                    {currentModel.tagline}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                    Starting At
                  </span>
                  <span className="text-2xl font-black text-[#b5d334] tracking-tight">
                    {currentModel.price}
                  </span>
                </div>
              </div>

              {/* Area Dimension Label tag */}
              <div className="inline-flex items-center gap-2 bg-[#b5d334] text-black px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider mb-5">
                <svg
                  className="w-3.5 h-3.5 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
                {currentModel.size}
              </div>

              {/* Precise Property Narrative Copy */}
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed mb-6">
                {currentModel.description}
              </p>

              {/* Features Bullet layout grid */}
              <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-3.5">
                Premium Core Inclusions:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentModel.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={4}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-slate-700 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Call to Action for Property Reservation */}
            <div className="border-t border-slate-200 pt-6 mt-4">
              <Link
                href="#register"
                className="w-full bg-[#b5d334] text-black hover:bg-black hover:text-[#b5d334] font-bold tracking-wide text-xs uppercase py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 group text-center block"
              >
                <span>Reserve {currentModel.name} Unit</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
