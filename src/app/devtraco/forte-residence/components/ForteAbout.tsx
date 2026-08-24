"use client";

export default function ForteAbout() {
  return (
    <section id="about-forte" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Structural Accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] pointer-events-none opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Copy Content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-orange-500"></span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                The Enclave Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#b5d334] uppercase tracking-tighter mb-8 leading-tight">
              An Unparalleled <br />
              <span className="text-[#b5d334]">
                Family Sanctuary
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Forte Residences welcomes you to an unparalleled living experience within an exclusive gated community of <strong className="font-semibold text-blue-950">eighteen contemporary townhouses</strong>. 
              </p>
              <p>
                Strategically positioned in the vibrant and nurturing suburb of Community 20 in Tema, this residential enclave is masterfully designed to offer families ideal living spaces, lavish interiors, striking facades, and essential amenities for a comfortable and convenient lifestyle.
              </p>
              <p className="border-l-4 border-blue-950 pl-4 italic text-slate-500 bg-slate-50 py-2 rounded-r-lg">
                Providing an enriching living environment with comfort, security, and a strong sense of community. Each of our townhouses is meticulously crafted to offer not just a dwelling but a home.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-8 border-t border-slate-150">
              <div>
                <span className="block text-4xl font-black text-[#b5d334] tracking-tighter">18</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Exclusive Townhouses</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-[#b5d334] tracking-tighter">Gated</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">24/7 Premium Security</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Video Framework Showcase */}
          <div className="relative group w-full">
            {/* Geometric shadow block */}
            <div className="absolute -inset-4 bg-blue-950 rounded-2xl transform translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1 z-0 shadow-xl shadow-blue-950/10"></div>
            
            {/* Video container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl z-10 bg-slate-900 border border-blue-900/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              >
                <source src="/assets/forte/Forte Video Update B.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Soft visual lens layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}