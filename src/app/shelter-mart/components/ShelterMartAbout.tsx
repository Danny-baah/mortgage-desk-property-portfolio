"use client";

import Image from "next/image";

export default function ShelterMartAbout() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Reveal */}
          <div className="relative group">
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#b5d334]/30 to-[#ff8200]/20 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500 ease-in-out"></div>

            <div className="relative h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/assets/shelter/Picture3.jpeg"
                alt="Shelter Mart Premium Properties"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Subtle inner overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow hidden md:flex">
              <div className="w-14 h-14 bg-[#b5d334]/10 rounded-full flex items-center justify-center text-[#b5d334]">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-black text-blue-950 leading-none">
                  100%
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mt-1">
                  Ghanaian Owned
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                Welcome To Shelter Mart
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#b5d334] leading-tight tracking-tight mb-6">
              Bringing Professionalism to <br />
              <span className="text-[#b5d334]">Real Estate Management</span>
            </h2>

            {/* Body Copy */}
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              <strong className="font-semibold text-blue-950">
                Shelter Mart Ghana Ltd
              </strong>{" "}
              is a wholly-owned Ghanaian Company specializing in a bouquet of
              property-related services, ranging from property rentals to
              property management for both residential and commercial buildings.
            </p>

            <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 border-l-4 border-[#b5d334] pl-5 italic">
              "The company’s prime objective is to bring sanity and
              professionalism to the hitherto neglected and highly degraded
              property management and rental services."
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Property Rentals",
                "Property Management",
                "Residential Buildings",
                "Commercial Spaces",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b5d334]/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-[#b5d334]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-blue-950">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
