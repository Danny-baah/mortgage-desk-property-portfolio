"use client";

// Replace these filenames with the exact ones you chose in your assets folder
const galleryImages = [
  {
    id: 1,
    src: "/assets/grace_city_prime_land/PL1.jpeg",
    alt: "Grace City Prime Land View 1",
  },
  {
    id: 2,
    src: "/assets/grace_city_prime_land/PL2.png",
    alt: "Grace City Prime Land View 2",
  },
  {
    id: 3,
    src: "/assets/grace_city_prime_land/PL3.jpeg",
    alt: "Grace City Prime Land View 3",
  },
  {
    id: 4,
    src: "/assets/grace_city_prime_land/PL4.jpeg",
    alt: "Grace City Prime Land View 4",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-stone-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Small Heading - Orange */}
          <div className="inline-flex items-center gap-3 mb-4 justify-center">
            <span className="w-8 h-px bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              Media Showcase
            </span>
            <span className="w-8 h-px bg-orange-500" />
          </div>

          {/* Main Heading - Dominant Lemon Green */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#b5d334] leading-tight mb-4">
            Project Gallery
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            A visual overview of the development layouts, pristine landscape
            environment, and structural progress on-site at Aburi.
          </p>
        </div>

        {/* IMAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden bg-stone-200 aspect-[4/3] rounded-3xl shadow-md border-2 border-transparent hover:border-[#b5d334] transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Clean Overlay Accent Border on Hover */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/40 rounded-3xl pointer-events-none transition-all duration-300 m-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
