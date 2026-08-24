import Image from "next/image";

export default function MacCapitalGallery() {
  // Array of your 8 images with custom grid-spanning classes for a beautiful layout
  const galleryImages = [
    {
      src: "/assets/mac capital/Picture1.jpg",
      alt: "Mac Capital Exterior Front",
      className: "md:col-span-2 md:row-span-2", // Large anchor image
    },
    {
      src: "/assets/mac capital/Picture2.jpg",
      alt: "Mac Capital Interior Details",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/mac capital/Picture3.png",
      alt: "Mac Capital Architecture",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/mac capital/Picture4.png",
      alt: "Mac Capital Open Living Area",
      className: "md:col-span-1 md:row-span-2", // Tall portrait image
    },
    {
      src: "/assets/mac capital/Picture5.jpg",
      alt: "Mac Capital Bedroom",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/mac capital/Picture6.jpg",
      alt: "Mac Capital Bathroom",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      src: "/assets/mac capital/Picture2.jpg",
      alt: "Mac Capital Kitchen Setup",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/assets/mac capital/Picture8.jpg",
      alt: "Mac Capital Details",
      className: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-orange-500"></span>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Visual Tour
            </span>
            <span className="w-8 h-px bg-orange-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#b5d334] mb-6 tracking-tight">
            Property Gallery
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Take a closer look at the exceptional attention to detail, premium
            finishes, and expansive living spaces that define our Amrahia
            residences.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 bg-slate-200 ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Dark Overlay on Hover */}
              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/30 transition-colors duration-500 flex items-center justify-center">
                {/* Optional Expand Icon that appears on hover */}
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-900 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 delay-100">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
