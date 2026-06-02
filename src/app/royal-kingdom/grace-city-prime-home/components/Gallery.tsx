'use client';

import React, { useState } from 'react';

// --- GALLERY DATA ---
// Replace the 'YOUR_IMAGE_X.jpg' with your actual file names.
// The 'spanClass' property creates that premium, dynamic masonry grid look on larger screens.
const galleryImages = [
  {
    id: 1,
    src: '/assets/grace_city_prime_homes/5_3 - Photo.jpg',
    spanClass: 'md:col-span-2 md:row-span-2', 
    alt: 'Grace City Prime Homes Exterior',
  },
  {
    id: 2,
    src: '/assets/grace_city_prime_homes/Picture40.jpg',
    spanClass: 'md:col-span-1 md:row-span-1',
    alt: 'Living Room Interior',
  },
  {
    id: 3,
    src: '/assets/grace_city_prime_homes/Picture41.jpg',
    spanClass: 'md:col-span-1 md:row-span-1',
    alt: 'Modern Kitchen Layout',
  },
  {
    id: 4,
    src: '/assets/grace_city_prime_homes/Picture44.jpg',
    spanClass: 'md:col-span-1 md:row-span-2',
    alt: 'Master Bedroom',
  },
  {
    id: 5,
    src: '/assets/grace_city_prime_homes/NP4_7 - Photo.jpg.jpeg',
    spanClass: 'md:col-span-2 md:row-span-1',
    alt: 'Garden and Outdoor Area',
  },
  {
    id: 6,
    src: '/assets/grace_city_prime_homes/Picture33.jpg',
    spanClass: 'md:col-span-1 md:row-span-1',
    alt: 'Aerial View of Estate',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox when clicking the escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#fafafa]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 max-w-2xl mx-auto space-y-3">
          {/* Strict Orange (#ff8200) */}
          <span 
            className="block font-bold tracking-[0.25em] uppercase text-sm"
            style={{ color: '#ff8200' }}
          >
            Visual Tour
          </span>
          {/* Strict Green (#b5d334) */}
          <h2 
            className="text-4xl md:text-5xl font-serif font-bold tracking-tight"
            style={{ color: '#b5d334' }}
          >
            A Glimpse of Grace City
          </h2>
          <p className="text-gray-500 font-light text-base md:text-lg pt-2">
            Explore the architectural elegance, lush surroundings, and premium finishes that make up our exclusive enclave.
          </p>
        </div>

        {/* MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative group overflow-hidden rounded-xl bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${image.spanClass}`}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#003883]/0 group-hover:bg-[#003883]/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-[#003883] p-3 rounded-full inline-block shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Expanded Image */}
          <img
            src={selectedImage}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
          />
        </div>
      )}
    </section>
  );
}