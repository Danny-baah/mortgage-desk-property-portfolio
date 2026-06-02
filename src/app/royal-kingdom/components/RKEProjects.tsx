"use client";

import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Grace City Prime (Homes)",
    category: "Luxury Homes",
    image: "/assets/grace_city_prime_homes/3_2 - Photo.jpg",
    description:
      "Premium, litigation-free homes built with unparalleled attention to detail and modern aesthetics.",
    path: "/royal-kingdom/grace-city-prime-home",
  },
  {
    id: 2,
    title: "Grace City Prime (Land)",
    category: "Serviced Plots",
    image: "/assets/grace_city_prime_land/PL1.jpeg",
    description:
      "Secure your future with our prime, litigation-free serviced plots ready for development.",
    path: "/royal-kingdom/grace-city-prime-land",
  },
  {
    id: 3,
    title: "The Decade",
    category: "Premium Apartments",
    image: "/assets/the_decade/one.jpg",
    description:
      "Exclusive short-stay and luxury apartments redefining urban comfort and elegance.",
    path: "/royal-kingdom/the-decade",
  },
  {
    id: 4,
    title: "The Future",
    category: "Master Development",
    image: "/assets/the_future/F12.png",
    description:
      "A visionary real estate development designed for the next generation of homeowners.",
    path: "/royal-kingdom/the-future",
  },
];

export default function RKEProperties() {
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-lime-50 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Small Heading - Orange */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-orange-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Our Portfolio
            </span>
            <span className="w-10 h-px bg-orange-500"></span>
          </div>

          {/* Big Heading - Lemon Green */}
          <h2 className="text-4xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-6 leading-tight">
            Featured Properties
          </h2>

          <p className="text-slate-500 font-light text-lg">
            Explore our curated selection of premium homes, serviced plots, and
            visionary developments across Ghana.
          </p>
        </div>

        {/* PROPERTIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-[#b5d334]/10 transition-all duration-500 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-200">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                    {property.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#b5d334] transition-colors duration-300">
                  {property.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {property.description}
                </p>

                {/* Action Link */}
                <Link
                  href={property.path}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors mt-auto"
                >
                  View Details
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
