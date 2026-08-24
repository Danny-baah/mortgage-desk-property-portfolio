"use client";

import Image from "next/image";

export default function WoodlandsAbout() {
  return (
    <section id="about-woodlands" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-22 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-orange-500"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                Ecosystem & Well-Being
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              A Peaceful Haven <br />
              <span className="text-[#b5d334]">Away From The Noise</span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Wake up each day to lush greenery and tranquil surroundings at <strong className="font-semibold text-blue-950">Devtraco Woodlands</strong>, where nature creates a peaceful and refreshing living experience. Away from the noise and congestion of the city, residents enjoy cleaner air, reduced traffic, and an environment that natively supports both mental and physical well-being.
              </p>
              <p>
                Despite its calm setting, the development offers effortless, direct access to the coast, with beautiful beaches located <strong className="font-semibold text-[#b5d334]">just a 15-minute drive away</strong>—perfect for weekend relaxation and outdoor family activities.
              </p>
              <p>
                Devtraco Woodlands also provides modern conveniences and essential infrastructure, ensuring an incredibly comfortable lifestyle while keeping you perfectly connected to the center of Accra.
              </p>
            </div>

            {/* Quick-Scan Connectivity Matrix */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div>
                <span className="block text-2xl font-black text-blue-950">15 Mins</span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">To Coastal Beaches</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#b5d334]">Pure</span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">Air & Low Density</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-orange-500">100%</span>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">Connected Layout</span>
              </div>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: CLUBHOUSE VISUAL LAYER (5 Columns)
              ========================================================= */}
          <div className="lg:col-span-5 relative">
            
            {/* Organic Floating Shadow Block */}
            <div className="absolute -inset-4 bg-emerald-600/5 rounded-[2.5rem] blur-xl transform rotate-2 z-0"></div>

            {/* Image Wrap */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/10 border-4 border-white bg-slate-50 aspect-[4/5] w-full group">
              <Image
                src="/assets/woodlands/Clubhouse.png"
                alt="Devtraco Woodlands Community Clubhouse Hub"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
              
              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white shadow-xl flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-[#b5d334]">The Social Nexus</span>
                  <span className="block text-xs font-bold text-blue-950">The Premium Clubhouse</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}