"use client";

import React from "react";

export default function WhyChooseGreenPark() {
  // Content extracted directly from the "WHY CHOOSE GREENPARK?" section of the PDF
  const features = [
    {
      title: "Proven Track Record",
      description:
        "10+ years of excellence with multiple completed and completely sold-out developments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#b5d334]/40",
    },
    {
      title: "Zero Abandoned Projects",
      description:
        "We deliver on every single promise. Your investment is completely safe with us.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#f82000]/40",
    },
    {
      title: "Prime Accra Locations",
      description:
        "Strategically situated in East Legon, Achimota, Adjiringanor, and Tse Addo.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#b5d334]/40",
    },
    {
      title: "Flexible Payment Plans",
      description:
        "Spread your investment over 36 months with 0% interest. No large lump-sum required.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#f82000]/40",
    },
    {
      title: "Highest Rental Yields",
      description:
        "Generate sustainable income with 10–12% annual returns—the highest in Ghana.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#f82000]/40",
    },
    {
      title: "Full Property Management",
      description:
        "Earn income stress-free. We manage properties on behalf of our investor-owners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#b5d334]/40",
    },
    {
      title: "Mortgage Facilitation",
      description:
        "Seamless financial processing and mortgage facilitation with leading Ghanaian banks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#b5d334]/40",
    },
    {
      title: "Transparent Process",
      description:
        "No hidden fees, fully secured titles, and comprehensive legal support included.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
      hoverBorder: "hover:border-[#f82000]/40",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden"
    >
      {/* Subtle Dynamic Ambient Lighting Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#b5d334]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f82000]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4 justify-center w-full">
            <span className="w-8 h-px bg-[#f82000]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f82000]">
              The GreenPark Advantage
            </span>
            <span className="w-8 h-px bg-[#f82000]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter">
            Why Choose <span className="text-[#b5d334]">GreenPark?</span>
          </h2>
          <p className="mt-6 text-slate-600 text-lg font-light">
            We don't just build houses; we create long-term wealth and tailored
            living solutions. Here is why investors and homeowners trust us.
          </p>
        </div>

        {/* 4x2 Clean grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group bg-white border border-slate-200 p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${feature.hoverBorder}`}
            >
              {/* Icon Container (Set to Secondary Orange #f82000) */}
              <div className="text-[#f82000] mb-5 transition-transform duration-300 group-hover:scale-110 flex items-center justify-start">
                {feature.icon}
              </div>

              {/* Card Title (Set to Brand Primary Green #b5d334) */}
              <h3 className="text-lg font-black text-[#b5d334] mb-3 tracking-tight uppercase">
                {feature.title}
              </h3>

              {/* Description Body */}
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
