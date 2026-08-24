"use client";

import Image from "next/image";
import Link from "next/link";

const residences = [
  {
    id: "autograph",
    name: "The Autograph",
    location: "Cantonments, Accra",
    description:
      "A signature luxury residence offering bespoke interiors and a variety of unit types tailored to modern city living. Experience elegant design, vibrant community living, and a premium suite of lifestyle amenities.",
    // Note: Adjust the filename if yours is named slightly differently (e.g., picture1.png)
    image: "/assets/quao/The-Autograph-Main-Brochure-3_page-0001-1.jpg",
    link: "/quao-realties/the-autograph",
  },
  {
    id: "manora",
    name: "Manora Residence",
    location: "Airport Residential, Accra",
    description:
      "Elegant and meticulously designed luxury apartments perfectly situated just 3 minutes from Kotoka International Airport. A sanctuary of modern comfort and world-class convenience.",
    image: "/assets/quao/Manora.jpg",
    link: "/quao-realties/manora-residence",
  },
];

export default function QuaoResidences() {
  return (
    <section id="residences" className="py-24 sm:py-32 bg-slate-50 relative">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Portfolio
              </span>
              <span className="w-8 h-px bg-orange-500"></span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#b5d334] uppercase tracking-tight">
            Our{" "}
            <span className="text-[#b5d334]">
              Residences
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Discover our collection of exclusive properties, meticulously
            crafted to redefine luxury living in Accra's most prestigious
            neighborhoods.
          </p>
        </div>

        {/* =========================================================
            RESIDENCES GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {residences.map((residence) => (
            <div
              key={residence.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={residence.image}
                  alt={residence.name}
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Floating Location Badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    {residence.location.split(",")[0]}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 sm:p-10 flex flex-col flex-grow border-t-4 border-orange-500 transform transition-transform duration-500 bg-white">
                <h3 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tight mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {residence.name}
                </h3>

                <p className="text-slate-500 font-light leading-relaxed mb-10 flex-grow text-sm sm:text-base">
                  {residence.description}
                </p>

                {/* Call to Action Button */}
                <Link
                  href={residence.link}
                  className="inline-flex items-center justify-between w-full px-8 py-4 bg-blue-50 text-blue-950 font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-orange-500/30"
                >
                  <span>View Residence</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                    <svg
                      className="w-4 h-4 text-blue-950 group-hover:text-orange-500 transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
