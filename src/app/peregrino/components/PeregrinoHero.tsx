"use client";

import Image from "next/image";
import Link from "next/link";

export default function PeregrinoHero() {
  return (
    <section className="relative w-full min-h-[85vh] bg-slate-50 flex items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideRight {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideLeft {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-slide-right-1 { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.1s; }
        .animate-slide-right-2 { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.3s; }
        .animate-slide-right-3 { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.5s; }
        
        .animate-slide-left { animation: slideLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; animation-delay: 0.2s; }
        
        .animate-float { animation: float 4s ease-in-out infinite; }
      `,
        }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-blue-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start pt-10 lg:pt-0 order-2 lg:order-1">
            {/* Tagline: Exclusive Developer adjusted to orange-500 */}
            <div className="animate-slide-right-1 flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                Exclusive Developer
              </span>
            </div>

            {/* Title: Peregrino Properties. assigned to dominant brand color #b5d334 */}
            <h1 className="animate-slide-right-2 text-5xl md:text-7xl lg:text-[5rem] font-black text-[#b5d334] leading-[1.05] tracking-tighter mb-8">
              Peregrino <br />
              Properties.
            </h1>

            {/* Subheadings: Smart investments. updated to blue-950 */}
            <p className="animate-slide-right-3 text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 border-l-4 border-slate-200 pl-6">
              Modern living. <br />
              Prime locations. <br />
              <span className="font-semibold text-blue-950">
                Smart investments.
              </span>
            </p>

            {/* Button Actions Matrix */}
            <div className="animate-slide-right-3 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* First Button: Dominant Color background with high-contrast hover */}
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#b5d334] text-white rounded-xl font-bold transition-all duration-300 hover:bg-blue-950 shadow-xl hover:-translate-y-1 group"
              >
                Register Interest
                <svg
                  className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              {/* Second Button: Transparent background with orange-500 border and accents */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-500 border-2 border-orange-500 rounded-xl font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:-translate-y-1 shadow-md"
              >
                Contact Bank Advisor
              </Link>
            </div>
          </div>

          {/* Media Column */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-left">
            {/* The Arch Container */}
            <div className="relative w-full max-w-[450px] aspect-[3/4] lg:aspect-[4/5] rounded-t-[15rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
              <Image
                src="/assets/peregrino/Picture3.jpg"
                alt="Peregrino Properties Modern Living"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-blue-950/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Floating Information Badge */}
            <div className="animate-float absolute bottom-10 -left-6 md:-left-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50 max-w-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                  High Yield
                </span>
              </div>
              <p className="text-sm font-bold text-blue-950 leading-tight">
                Engineered for smart property investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
