import Image from "next/image";

export default function PeregrinoAbout() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative flex flex-col lg:block">
          
          {/* =========================================================
             LEFT SIDE: Massive Anchor Image
             ========================================================= */}
          <div className="w-full lg:w-[65%] h-[450px] md:h-[550px] lg:h-[700px] relative rounded-[2.5rem] overflow-hidden shadow-2xl z-0">
            <Image 
              src="/assets/peregrino/Picture2.jpg" 
              alt="Peregrino Properties Development" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle overlay to enhance contrast */}
            <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply transition-colors hover:bg-transparent duration-700"></div>
          </div>

          {/* =========================================================
             RIGHT SIDE: Overlapping Floating Content Card
             ========================================================= */}
          <div className="w-[90%] md:w-[80%] lg:w-[45%] mx-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-slate-100 z-10 -mt-24 lg:mt-0 relative">
            
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-12 w-24 h-1.5 bg-orange-500 rounded-b-md"></div>

            <div className="flex items-center gap-3 mb-4 pt-4">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                About the development
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-8 leading-tight tracking-tight">
              Built for comfort and <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                everyday living.
              </span>
            </h2>

            <div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed">
              <p>
                Peregrino Properties delivers thoughtfully designed homes that combine comfort, style, and long-term value. Located in a well-connected and accessible area, each development is positioned to offer both convenience and a peaceful living environment.
              </p>
              
              <div className="pl-6 border-l-2 border-orange-200">
                <p>
                  With a focus on functionality, space, and contemporary finishes, these homes are ideal for modern living—whether you’re buying your first home or making a smart investment. Every detail is carefully considered to create a space that supports your lifestyle while offering lasting value.
                </p>
              </div>
            </div>

            {/* Value Props Mini-Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-slate-100">
              <div className="flex flex-col gap-2">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="font-bold text-sm text-blue-950">Contemporary Finishes</span>
              </div>
              <div className="flex flex-col gap-2">
                <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-bold text-sm text-blue-950">Smart Investment</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}