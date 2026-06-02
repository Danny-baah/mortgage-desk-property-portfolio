'use client';

import React, { useState } from 'react';

// --- TYPES ---
type Unit = {
  id: number;
  title: string;
  description: string;
  features: string[];
  images: string[];
};

// --- DATA ---
const unitsData: Unit[] = [
  {
    id: 1,
    title: '2 Bedroom Semi-Detached',
    description: 'A functional and elegant home perfect for young professionals or small families seeking the premium Grace City lifestyle.',
    features: ['Modern Open-Concept Layout', 'En-suite Master Bedroom', 'Private Green Garden Area', 'Energy Efficient Design'],
    images: [
     '/assets/grace_city_prime_homes/Picture33.jpg',
      '/assets/grace_city_prime_homes/Picture34.jpg',
      '/assets/grace_city_prime_homes/Picture35.jpg',
    ],
  },
  {
    id: 2,
    title: '3 Bedroom Bungalow Detached',
    description: 'Designed for those who appreciate single-level living without compromising on space or luxury. Enjoy a seamless indoor-outdoor flow.',
    features: ['Detached for maximum privacy', 'Spacious living & dining area', 'Smart-home ready infrastructure', 'Wide compound'],
    images: [
      '/assets/grace_city_prime_homes/Picture37.jpg',
      '/assets/grace_city_prime_homes/Picture38.jpg',
    ],
  },
  {
    id: 3,
    title: '3 Bedroom Storey Semi-Detached',
    description: 'Vertical luxury that maximizes floor area while providing distinct spaces for living and relaxation across two levels.',
    features: ['Ground Floor Living & Dining', 'Private Upper Floor Bedrooms', 'Large Windows for Natural Light', 'Signature Modern Aesthetic'],
    images: [
       '/assets/grace_city_prime_homes/Picture39.jpg',
      '/assets/grace_city_prime_homes/Picture40.jpg',
    ],
  },
  {
    id: 4,
    title: '3 Bedroom Storey Detached',
    description: 'The pinnacle of functional family living, offering complete independence within our secure gated environment.',
    features: ['Fully Detached Structure', 'Generous Plot Size', 'Premium Internal Finishes', 'Starter Solar 10kVA Included'],
    images: [
      '/assets/grace_city_prime_homes/Picture41.jpg',
      '/assets/grace_city_prime_homes/Picture42.jpg',
    ],
  },
  {
    id: 5,
    title: '4 Bedroom Storey Detached',
    description: 'Our most spacious and prestigious residence, designed for the modern family that values space, comfort, and security.',
    features: ['Four En-suite Bedrooms', 'Expansive Master Suite', 'Dedicated Workspace Area', 'Enhanced Private Garden'],
    images: [
       '/assets/grace_city_prime_homes/Picture43.jpg',
      '/assets/grace_city_prime_homes/Picture44.jpg',
    ],
  },
];

const UnitSection = ({ unit, index }: { unit: Unit; index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const isEven = index % 2 === 0;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % unit.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? unit.images.length - 1 : prev - 1));

  return (
    <div className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-32`}>
      
      {/* --- PREMIUM CAROUSEL LAYOUT --- */}
      <div className="w-full lg:w-2/3 relative z-10 group">
        <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gray-100 aspect-[16/10]">
          <img
            src={unit.images[currentImage]}
            alt={unit.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Slider Controls (Deep Blue Theme) */}
          <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevImage}
              className="w-12 h-12 flex items-center justify-center bg-white/90 text-[#003883] backdrop-blur-sm rounded-full shadow-lg hover:bg-[#003883] hover:text-white transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="w-12 h-12 flex items-center justify-center bg-white/90 text-[#003883] backdrop-blur-sm rounded-full shadow-lg hover:bg-[#003883] hover:text-white transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Active Navigation Indicators (Orange Accent) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {unit.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentImage === idx ? 'w-8 h-2' : 'w-2 h-2 bg-white/70 hover:bg-white'
                }`}
                style={currentImage === idx ? { backgroundColor: '#ff8200' } : {}}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={`w-[92%] lg:w-5/12 relative z-20 bg-white p-10 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-gray-100/50 rounded-sm
        -mt-12 lg:mt-0 ${isEven ? 'lg:-ml-24 lg:mr-0' : 'lg:-mr-24 lg:ml-0'}
      `}>
        {/* Unit Type Headings set STRICTLY to Orange via inline styles */}
        <span 
          className="block font-bold tracking-[0.25em] uppercase text-xs mb-3"
          style={{ color: '#ff8200' }}
        >
          Unit Type 0{unit.id}
        </span>
        
        {/* Subheadings set STRICTLY to Green via inline styles */}
        <h2 
          className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6"
          style={{ color: '#b5d334' }}
        >
          {unit.title}
        </h2>
        
        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 font-light">
          {unit.description}
        </p>
        
        <div className="h-[2px] w-16 mb-8" style={{ backgroundColor: 'rgba(255, 130, 0, 0.2)' }}></div>
        
        {/* Features List with Deep Blue (#003883) Bullet Fills */}
        <ul className="space-y-4 mb-10">
          {unit.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-gray-700 text-sm md:text-base font-medium">
              <span className="mr-4 mt-0.5 flex-shrink-0" style={{ color: '#003883' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#003883" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.14-.082l4-5.6z" clipRule="evenodd" />
                </svg>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function GraceCityUnitTypes() {
  return (
    <section className="py-28 px-4 sm:px-8 md:px-16 lg:px-24 bg-[#fafafa] overflow-hidden relative">
      
      {/* Decorative Subtle Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gray-100/60 to-transparent z-0"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-28 max-w-3xl mx-auto space-y-2">
          {/* Grace City Prime Homes Heading set STRICTLY to Orange via inline styles */}
          <span 
            className="block font-bold tracking-[0.25em] uppercase text-sm"
            style={{ color: '#ff8200' }}
          >
            Grace City Prime Homes
          </span>
          {/* Main Title / Subheading set STRICTLY to Green via inline styles */}
          <h1 
            className="text-4xl md:text-6xl font-serif font-bold tracking-tight"
            style={{ color: '#b5d334' }}
          >
            Explore Our Residences
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 font-light pt-4 text-base md:text-lg">
            Discover layouts built to blend modern luxury with sustainable living in the serene hills of Aburi.
          </p>
        </div>

        {/* REPEATING UNIT SECTIONS */}
        <div className="flex flex-col">
          {unitsData.map((unit, index) => (
            <UnitSection key={unit.id} unit={unit} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}