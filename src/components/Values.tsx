"use client";

import { useEffect, useState, useRef } from "react";

export default function Values() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const qualities = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of transparency and trust in every mortgage and property transaction, ensuring you feel secure at every step.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      ),
      color: "text-[#b5d334]",
      bg: "bg-[#b5d334]/10",
      hoverColor: "group-hover:text-[#b5d334]",
    },
    {
      title: "Accessibility",
      description:
        "We are democratizing premium real estate by providing flexible, tailored Access Bank financing solutions that put your dream home within reach.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
          />
        </svg>
      ),
      color: "text-orange-500",
      bg: "bg-orange-50",
      hoverColor: "group-hover:text-orange-500",
    },
    {
      title: "Excellence",
      description:
        "From the majestic properties we curate to the dedicated customer service we provide, we refuse to compromise on quality.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      ),
      color: "text-[#b5d334]",
      bg: "bg-[#b5d334]/10",
      hoverColor: "group-hover:text-[#b5d334]",
    },
    {
      title: "Partnership",
      description:
        "We foster strong, lasting collaborations between elite developers and aspiring homeowners to ensure a seamless and successful buying journey.",
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
      color: "text-orange-500",
      bg: "bg-orange-50",
      hoverColor: "group-hover:text-orange-500",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* LEFT SIDE: Sticky Header */}
          <div
            className={`lg:w-1/3 lg:sticky lg:top-32 h-fit transform transition-all duration-[1500ms] ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-24 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-orange-500">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#b5d334] leading-tight mb-6">
              Built on a foundation of trust.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't just facilitate transactions; we build relationships.
              These core principles guide everything we do at the Ghana Mortgage
              Desk.
            </p>
          </div>

          {/* RIGHT SIDE: Flowing Timeline Layout */}
          <div className="lg:w-2/3 relative">
            {/* The Connecting Vertical Line */}
            <div
              className={`absolute left-[39px] top-8 bottom-8 w-0.5 bg-gray-100 hidden md:block z-0 transition-opacity duration-[1500ms] delay-[600ms] ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            <div className="space-y-12 md:space-y-16 relative z-10">
              {qualities.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-6 md:gap-8 group transform transition-all duration-[1200ms] ease-out ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-32 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 400 + 300}ms` }}
                >
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0 bg-white">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-lg ${item.bg} ${item.color}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center pt-2">
                    <h3
                      className={`text-2xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${item.hoverColor}`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
