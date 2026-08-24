"use client";

import Image from "next/image";

export default function PelicanAbout() {
  const awards = [
    "Best Architecture Multiple Residence – Africa",
    "Best Architecture Multiple Residence – Ghana (5 STAR Award)",
    "Best Mixed-use Architecture – Ghana (5 STAR Award)"
  ];

  return (
    <section id="about-pelican" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Narrative Text & Laurels (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Capital Landmark
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-none">
              A New Standard in <br />
              <span className="text-[#b5d334]">
                Global Hospitality
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed mb-12">
              <p>
                The Pelican Hotel, located in the prestigious <strong className="font-semibold text-blue-950">Cantonments</strong> area of Accra, offers a seamless blend of modern luxury and impressive architecture. Developed by the esteemed real estate innovators, Devtraco Plus, the hotel features <strong className="font-semibold text-blue-950">134 rooms and suites</strong> that cater expertly to both short and long-term stays.
              </p>
              <p>
                With a deliberate focus on comfort, elegance, and hyper-functional design, The Pelican Hotel sets a bold new benchmark in Ghana’s hospitality and real estate industry. Dedicated to offering personalized service and an authentic Ghanaian experience, it remains the ultimate destination for discerning global travelers.
              </p>
            </div>

            {/* Architectural Accolades Grid */}
            <div className="border-t border-slate-100 pt-8">
              <h4 className="text-xs font-black text-blue-950 uppercase tracking-widest mb-6 flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                International Architecture Accolades
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-xs">
                      ★
                    </span>
                    <p className="text-sm md:text-base font-medium text-blue-950">
                      {award}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Dual Layered Images Showcase (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full lg:pt-4">
            
            {/* Image 1: The Beak Bistro */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-100 bg-slate-50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/pelican/the-beak-bistro.jpg"
                  alt="The Beak Bistro Culinary Space"
                  fill
                  sizes="(max-w-1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-blue-950 text-white flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">The Beak Bistro</span>
                <span className="text-[10px] text-orange-400 font-semibold uppercase tracking-widest">Fine Dining</span>
              </div>
            </div>

            {/* Image 2: Pelican Meeting Room */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl shadow-blue-950/5 border border-slate-100 bg-slate-50 lg:translate-x-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/pelican/pelican-meeting-room.jpg"
                  alt="Pelican Corporate Meeting Room"
                  fill
                  sizes="(max-w-1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 text-blue-950 flex justify-between items-center shadow-inner">
                <span className="text-xs font-black uppercase tracking-wider">Executive Boardrooms</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Corporate</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}