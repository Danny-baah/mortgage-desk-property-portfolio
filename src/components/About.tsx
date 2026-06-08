"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Very faint background pattern/color to break up the solid white */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT SIDE: Creative Image Display */}
          <div className="relative">
            {/* Decorative colored boxes using the brand palette behind the image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ff8200] rounded-tl-3xl rounded-br-3xl opacity-20 -z-10 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#b5d334] rounded-tr-3xl rounded-bl-3xl opacity-10 -z-10" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Handing over house keys"
                width={800}
                height={600}
                className="object-cover w-full h-[400px] lg:h-[550px] hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge on top of the image */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#b5d334]">
                <p className="text-[#b5d334] font-black text-xl">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Secure Financing
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Small subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#ff8200]"></span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#ff8200]">
                About The Platform
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-black text-[#b5d334] leading-tight mb-6">
              Become a house owner today.
            </h2>

            {/* Paragraph Text */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The{" "}
              <strong className="text-[#b5d334]">Ghana Mortgage Desk</strong> is
              Access Bank Ghana's dedicated property and mortgage platform —
              connecting homebuyers with premium residential developments from
              trusted developer partners.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b5d334] flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Browse premium properties tailored to your lifestyle.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b5d334] flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Explore exclusive, flexible Access Bank financing options.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#b5d334] flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">
                  Take the first confident step toward owning your dream home.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#b5d334] hover:bg-[#b5d334]/90 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Your Journey
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
