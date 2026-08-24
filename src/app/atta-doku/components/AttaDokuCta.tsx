"use client";

import Link from "next/link";

export default function CTA() {
  return (
    // Outer wrapper adds the "margins all around" effect so it doesn't touch the screen edges
    <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-12 w-full bg-slate-50">
      {/* Floating Green Background Container - scaled down to be "cute" */}
      <div className="max-w-4xl mx-auto bg-[#b5d334] rounded-[3rem] p-4 sm:p-6 lg:p-8 relative shadow-2xl overflow-hidden group">
        {/* Subtle pattern on the green background */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 20.5V18H0v-2h20v-2.5L22.5 16 25 13.5V0h2v13.5L29.5 16l2.5-2.5V0h2v13.5L36.5 16l2.5-2.5V0h2v15h-2v-2.5L36.5 15l-2.5 2.5V20h2v-2h20v2H20v2.5L17.5 25l-2.5 2.5V40h-2V26.5L10.5 24 8 26.5V40H6V26.5L3.5 24 1 26.5V40H-1V25h2v2.5L3.5 25l2.5-2.5V20H0v-2h20v2.5z"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </div>

        {/* Inner White Card */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center relative z-10 transform transition-transform duration-500 group-hover:scale-[1.01] shadow-lg">
          {/* Cute Orange Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">
              Let's Talk
            </span>
          </div>

          {/* Centered Heading */}
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Ready to Secure <br className="hidden sm:block" />
            <span className="text-[#b5d334]">Your Future?</span>
          </h2>

          {/* Compact Text */}
          <p className="text-slate-500 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Take the first step towards owning your dream property. Whether it's
            a luxury home or a serviced plot, we are here to help you every step
            of the way.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Contact Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 text-slate-700 font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300 hover:bg-slate-200 hover:text-slate-900 hover:-translate-y-1 shadow-sm"
            >
              Contact Us
            </Link>

            {/* Register Button */}
            <Link
              href="/register"
              className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all duration-300 hover:bg-orange-600 hover:-translate-y-1 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              Register Now
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
