import Image from "next/image";
import Link from "next/link";

export default function AboutDevtraco() {
  const prestigiousNeighborhoods = [
    "Cantonments",
    "Airport Residential",
    "Labone",
    "Roman Ridge",
    "Dzorwulu",
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      
      {/* Custom CSS for the SLOW Slide-In From Left Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-from-left {
          animation: slideInFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0; /* Holds element hidden until animation kicks in */
        }
      ` }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* =========================================================
             LEFT SIDE: Staggered Collage + NEW Button Beneath It
             ========================================================= */}
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1 mt-12 lg:mt-0">
            
            {/* Image Wrapper Block */}
            <div className="relative h-[450px] md:h-[500px] w-full mb-8">
              {/* Background Accent Decorative Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[20px] border-slate-50 rounded-full opacity-50 z-0"></div>

              {/* Main Dominant Image (Arlo Cantonments) */}
              <div className="absolute top-0 right-0 w-[70%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/assets/arlo.jpg" 
                  alt="Arlo Cantonments Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 p-5 pt-12">
                  <p className="text-white text-xs font-bold uppercase tracking-widest opacity-80">Completed Masterpiece</p>
                  <h4 className="text-white text-xl font-bold">Arlo Cantonments</h4>
                </div>
              </div>

              {/* Overlapping Image (Forte Residences - Bottom Left) */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/assets/forte.jpg" 
                  alt="Forte Residences"
                  fill
                  className="object-cover"
                />
                 <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 p-4 pt-10">
                  <h4 className="text-white text-lg font-bold">Forte Residences</h4>
                </div>
              </div>

              {/* Small Accent Image (Woodlands - Middle Right) */}
              <div className="absolute top-[35%] -right-10 w-[35%] h-[30%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0 hidden xl:block">
                <Image
                  src="/assets/woodlans.jpg" 
                  alt="Devtraco Woodlands Greenery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* BUTTON SITUATED DIRECTLY BENEATH THE IMAGES (Slides from Left) */}
            <Link 
              href="#contact-access-bank" 
              className="animate-slide-from-left inline-flex items-center justify-center px-8 py-4 text-white bg-orange-500 rounded-full font-bold text-base transition-all duration-300 hover:bg-blue-900 shadow-xl shadow-orange-500/20 hover:-translate-y-1 self-start group ml-2"
            >
              Contact Access Bank
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

          </div>

          {/* =========================================================
             RIGHT SIDE: Editorial Text Content
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            
            {/* Header Tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-blue-900"></span>
              <span className="text-sm font-bold uppercase tracking-[.15em] text-blue-900">
                The Developer
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight tracking-tight mb-8">
              Three Decades of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
                Building Excellence
              </span>
            </h2>

            {/* Main Text Copy */}
            <div className="prose prose-lg prose-slate max-w-none text-slate-600 mb-12 space-y-6 leading-relaxed font-light">
              <p>
                Since its inception in 2012 under the <strong className="font-semibold text-slate-800">Devtraco Group</strong> — established in <strong className="font-semibold text-blue-900">1993</strong> — Devtraco has grown to become one of Accra's most trusted names in luxury real estate.
              </p>
              <p>
                With completed developments in some of the city's most prestigious neighbourhoods, including{" "}
                <strong className="font-medium text-orange-600">
                  {prestigiousNeighborhoods.join(", ")}
                </strong>
                , Devtraco brings together modern design, premium materials, and an unwavering commitment to quality.
              </p>
            </div>

            {/* Portfolio Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner mb-12">
              <div>
                <h4 className="text-blue-950 font-bold text-lg mb-3">Versatile Portfolio</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Their portfolio spans Hotel Suites, Studios, Apartments, Penthouses, and Townhouses — offering something for every discerning buyer.
                </p>
              </div>
              
              {/* Returns Box */}
              <div className="flex items-center gap-6 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                 <div className="flex flex-col text-center">
                    <span className="text-5xl font-black text-orange-500">12<span className="text-3xl">%</span></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900 mt-1">ROI (USD)</span>
                 </div>
                 <p className="text-sm text-slate-600 flex-1">
                  Current investments are generating returns estimated at <strong className="font-semibold text-blue-950">10–12% annually in USD</strong>, making Devtraco a sound financial decision.
                 </p>
              </div>
            </div>

            {/* Partner Info Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm self-start">
              <div className="relative w-16 h-8 flex-shrink-0">
                  <Image 
                    src="/assets/getsitelogo.png" 
                    alt="Access Bank Ghana" 
                    fill 
                    className="object-contain"
                  />
              </div>
              <p className="text-sm text-slate-700 font-medium">
                Backed by Access Bank Ghana mortgage financing, your Devtraco home is closer than ever.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}