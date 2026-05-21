"use client";

const locations = [
  {
    title: "Quality Education",
    description: "Located near reputable schools, you won’t have to make long commutes, and you can spend more quality time with your children.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Quality Healthcare",
    description: "We’ve made your health a priority. Located close to top-notch health facilities to ensure that your medical care is always within reach.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0H4.5m15 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
      </svg>
    )
  },
  {
    title: "Retail Therapy",
    description: "Indulge in retail therapy without the hassle. From daily essentials to luxury splurges, everything you need is just around the corner.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    )
  },
  {
    title: "Family Environment",
    description: "Our residential complex is situated in Community 20 in Tema, a bustling yet nurturing suburb that gives you the best of both worlds.",
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  }
];

export default function ForteLocation() {
  return (
    <section id="forte-location" className="py-24 bg-white relative overflow-hidden">
      
      {/* Structural Minimalist Grid lines */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-100 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================
            HEADER BLOCK
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-slate-100 pb-16 mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded mb-4">
              <span className="text-xs font-black text-blue-950 uppercase tracking-widest">
                Connected Living
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-blue-950 uppercase tracking-tighter leading-none">
              The Connected <br />
              <span className="text-orange-500">Neighborhood</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 font-light text-base sm:text-lg lg:text-right">
              Forte Residences combines private seclusion with direct thoroughfare access to your family's core daily needs.
            </p>
          </div>
        </div>

        {/* =========================================================
            4-COLUMN FEATURES GRID
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {locations.map((loc, idx) => (
            <div key={idx} className="group flex flex-col items-start">
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-blue-950 group-hover:rotate-[360deg] transition-all duration-500 shadow-md shadow-orange-500/5 group-hover:shadow-blue-950/20">
                <div className="group-hover:text-white transition-colors duration-500">
                  {loc.icon}
                </div>
              </div>

              {/* Title Accent */}
              <h3 className="text-lg font-black text-blue-950 uppercase tracking-tight mb-3 flex items-center gap-2">
                <span className="text-xs font-bold text-slate-300">0{idx + 1}</span>
                {loc.title}
              </h3>

              {/* Description Body */}
              <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                {loc.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}