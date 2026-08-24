import Image from "next/image";

export default function PeregrinoDetails() {
  return (
    /* CHANGED: pb-24 lg:pb-32 changed to pb-12 lg:pb-16 to reduce the bottom gap */
    <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-gradient-to-br from-white to-stone-50/60 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          
          <div className="lg:col-span-6 flex flex-col space-y-12">
            
            <div className="relative pl-8 border-l border-slate-200 group">
              {/* Floating Node Accent */}
              <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-orange-500 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-orange-500">
                  01 / Spaces
                </span>
              </div>
              
              <h3 className="text-3xl font-black text-[#b5d334] mb-4 tracking-tight">
                Property Details
              </h3>
              
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                Each unit is designed to provide functional living spaces that support both relaxation and everyday activities.
              </p>
            </div>
            <div className="relative pl-8 border-l border-slate-200 group">
              {/* Floating Node Accent */}
              <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-blue-900 rounded-full transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-950">
                  02 / Aesthetics
                </span>
              </div>
              
              <h3 className="text-3xl font-black text-[#b5d334] mb-4 tracking-tight">
                Interior Highlights
              </h3>
              
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                The interiors are designed with comfort in mind, featuring well-structured living areas, practical kitchen layouts, and bedrooms that provide privacy and relaxation. The overall design ensures a seamless flow between spaces, making the home both functional and inviting.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 sm:w-4/5">
              <div className="flex items-center gap-2.5 text-slate-600 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Seamless Layout Flow
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Practical Kitchens
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Private Bedrooms
              </div>
              <div className="flex items-center gap-2.5 text-slate-600 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                Inviting Ambience
              </div>
            </div>

          </div>

          {/* =========================================================
             RIGHT SIDE: Fine-Framed Offset Image Container (Picture3)
             ========================================================= */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Outer Architectural Border */}
            <div className="relative p-4 md:p-6 border border-slate-200 rounded-[2.5rem] w-full max-w-[500px]">
              
              {/* Corner crosshairs design elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-slate-300"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-slate-300"></div>

              {/* Core Image Wrapper */}
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 group">
                <Image
                  src="/assets/peregrino/Picture3.jpg"
                  alt="Peregrino Interior Design Highlights"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Minimalist Warm Shadow Mask */}
                <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
              </div>

              {/* Floating Architectural Spec Label */}
              <div className="absolute bottom-10 right-10 left-10 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl border border-slate-100 shadow-xl flex justify-between items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-0.5">Asset View</p>
                  <p className="text-sm font-bold text-blue-950">Unit Plan & Layout Overview</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>

            </div>

          </div>

        </div>

        {/* REMOVED: The nested Bottom CTA Box that was creating layout conflicts with your main CTA section */}

      </div>
    </section>
  );
}