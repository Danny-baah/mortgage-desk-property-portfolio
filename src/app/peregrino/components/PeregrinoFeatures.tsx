import Image from "next/image";

export default function PeregrinoFeatures() {
  const features = [
    {
      title: "Spacious & Well-Planned",
      description:
        "Intelligently configured layouts maximizing usable space and flow.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ),
    },
    {
      title: "Modern Kitchen Design",
      description:
        "Contemporary culinary spaces fitted for both aesthetics and high functionality.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Quality Fittings & Finishes",
      description:
        "Premium materials curated to ensure lasting elegance and durability.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "Ample Natural Lighting",
      description:
        "Expansive windows designed to bathe interiors in warm, natural sunlight.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Secure & Serene Environment",
      description:
        "Peace of mind guaranteed in a highly protected, tranquil neighborhood.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Living & Investment",
      description:
        "Engineered to elevate daily lifestyle while securing long-term portfolio growth.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#b5d334] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-orange-500"></span>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">
              Signature Features
            </span>
            <span className="w-12 h-px bg-orange-500"></span>
          </div>
          {/* Main heading changed to black */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight">
            Designed for Excellence.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* LEFT SIDE: 6-Point Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-12 h-12 rounded-xl bg-blue-950 text-white flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-all duration-300 shadow-md">
                  {feature.icon}
                </div>
                {/* Feature titles changed to white */}
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-blue-950/90 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Cinematic Wide-Crop Image (Picture1) */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[400px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-blue-950">
              <Image
                src="/assets/peregrino/Picture1.jpg"
                alt="Peregrino Development Features"
                fill
                className="object-cover hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent"></div>

              {/* Bottom text overlay on the image */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-10 h-1 bg-orange-500 mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Uncompromising Standards
                </h3>
                <p className="text-sm text-slate-200 font-light">
                  Experience luxury in every square foot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
