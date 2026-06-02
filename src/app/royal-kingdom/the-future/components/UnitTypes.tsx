"use client";

import React from "react";
import Image from "next/image";

interface UnitType {
  id: string;
  category: string;
  type: string;
  areaSqm: string;
  areaSqft: string;
  imageSrc: string;
  description: string;
}

const unitData: UnitType[] = [
  {
    id: "studio-exec",
    category: "Studios",
    type: "Executive",
    areaSqm: "46.22",
    areaSqft: "497.50",
    imageSrc: "/assets/the_future/Picture66.jpg",
    description:
      "An efficiently designed executive studio that maximizes both space and functionality. Featuring a seamless flow between the living, dining, and sleeping areas, this layout is perfect for young professionals or investors seeking a high-yield, modern living space. Includes a dedicated balcony and premium bathroom finishes.",
  },
  {
    id: "1bed-std",
    category: "1-Bedroom",
    type: "Standard",
    areaSqm: "57.51",
    areaSqft: "619.03",
    imageSrc: "/assets/the_future/Picture66.jpg",
    description:
      "Our standard 1-bedroom unit offers a perfect balance of privacy and open-concept living. The spacious central living and dining area connects to a well-appointed kitchen, while the separate bedroom ensures a quiet retreat. Complete with a private balcony to enjoy natural light and fresh air.",
  },
  {
    id: "1bed-exec",
    category: "1-Bedroom",
    type: "Executive",
    areaSqm: "71.02",
    areaSqft: "764.45",
    imageSrc: "/assets/the_future/Picture67.jpg",
    description:
      "Elevate your lifestyle with the 1-Bedroom Executive suite. Boasting an expanded floor plan, this unit features a generous living area, a larger master bedroom, and the luxurious addition of a powder room for guests. Dual balconies provide extended outdoor living spaces from both the lounge and bedroom.",
  },
  {
    id: "2bed-std",
    category: "2-Bedroom",
    type: "Standard",
    areaSqm: "104.16",
    areaSqft: "1,121.17",
    imageSrc: "/assets/the_future/Picture69.jpg",
    description:
      "Ideal for small families or professionals needing a home office, this 2-bedroom standard layout offers well-proportioned rooms and excellent privacy. Features include a large open-plan kitchen and living area, two full bathrooms (including a master ensuite), and a thoughtfully designed corridor separating the living and sleeping quarters.",
  },
  {
    id: "2bed-exec",
    category: "2-Bedroom",
    type: "Executive",
    areaSqm: "115.22",
    areaSqft: "1,240.22",
    imageSrc: "/assets/the_future/Picture70.jpg",
    description:
      "The 2-Bedroom Executive layout is crafted for those who desire extra room to breathe. It features expansive living and dining zones perfect for entertaining, a master suite with a walk-in-style closet area, a spacious second bedroom, and a guest powder room. The wide balcony serves as a beautiful extension of the indoor living space.",
  },
  {
    id: "2bed-prest",
    category: "2-Bedroom",
    type: "Prestige",
    areaSqm: "124.49",
    areaSqft: "1,339.99",
    imageSrc: "/assets/the_future/Picture71.jpg",
    description:
      "The pinnacle of luxury in our portfolio. The Prestige 2-bedroom unit features an incredibly expansive, angled living and dining area that is an entertainer’s dream. Enjoy absolute privacy with distinctly separated bedrooms, multiple high-end bathrooms, premium kitchen fixtures, and multiple balconies offering sweeping views.",
  },
];

export default function UnitTypes() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Section */}
        <div className="text-center mb-20">
          {/* Small Heading: Orange */}
          <p className="text-sm md:text-base font-bold tracking-widest uppercase text-[#ff8200] mb-2">
            Our Portfolio Varieties
          </p>
          {/* Big Sub-heading: Dominant Green */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#b5d334]">
            Unit Types & Layouts
          </h2>
          <div className="w-16 h-1 bg-[#ff8200] mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Review our comprehensive portfolio of floor plans below. Each layout
            is meticulously crafted to blend modern aesthetics with functional,
            comfortable living.
          </p>
        </div>

        {/* Units List - Side-by-Side Layout */}
        <div className="space-y-20 md:space-y-32">
          {unitData.map((unit, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={unit.id}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-white rounded-2xl shadow-lg border-2 border-[#b5d334] overflow-hidden p-6">
                    <Image
                      src={unit.imageSrc}
                      alt={`${unit.category} - ${unit.type} Floor Plan`}
                      fill
                      className="object-contain p-4"
                      sizes="(max-w-1024px) 100vw, 50vw"
                    />
                    {/* Floating Category Badge */}
                    <div className="absolute top-6 left-6 bg-[#b5d334] text-white px-5 py-1.5 rounded-md font-bold text-sm tracking-widest uppercase shadow-md">
                      {unit.category}
                    </div>
                  </div>
                </div>

                {/* Text & Description Container */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  {/* Small Card Heading: Orange */}
                  <div className="inline-block mb-3">
                    <span className="text-sm font-semibold tracking-wider text-[#ff8200] uppercase bg-[#ff8200]/10 px-3 py-1 rounded-full">
                      {unit.type} Edition
                    </span>
                  </div>

                  {/* Big Card Subheading: Green */}
                  <h3 className="text-3xl md:text-4xl font-bold text-[#b5d334] mb-6">
                    {unit.category}{" "}
                    <span className="text-gray-400 font-light">|</span>{" "}
                    {unit.type}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {unit.description}
                  </p>

                  {/* Floor Area Specs Box */}
                  <div className="bg-white border-l-4 border-[#b5d334] p-5 rounded-r-lg shadow-sm">
                    <div className="flex items-center text-gray-800">
                      {/* Total Floor Area Icon: Orange */}
                      <svg
                        className="w-6 h-6 mr-4 text-[#ff8200]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-[#ff8200] font-medium uppercase tracking-wider mb-1">
                          Total Floor Area
                        </p>
                        <p className="text-xl font-bold">
                          {unit.areaSqm} m²{" "}
                          <span className="text-[#ff8200] mx-2">/</span>{" "}
                          {unit.areaSqft} ft²
                        </p>
                      </div>
                    </div>
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
