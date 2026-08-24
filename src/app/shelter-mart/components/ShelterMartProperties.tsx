"use client";

import Image from "next/image";
import Link from "next/link";

interface PropertyCategory {
  title: string;
  type: "FOR SALE" | "FOR RENT";
  description: string;
  link: string;
  imageName: string;
}

export default function ShelterMartProperties() {
  const categories: PropertyCategory[] = [
    {
      title: "Houses",
      type: "FOR SALE",
      description:
        "Discover premium standalone homes, luxury villas, and family residences available for outright purchase.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrLy7vrupGXMr403",
      imageName: "Picture19.jpeg",
    },
    {
      title: "Unfurnished Houses",
      type: "FOR RENT",
      description:
        "Spacious multi-bedroom houses and townhomes ready to customize with your own design styles.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shr53Qe8uZawf71iO",
      imageName: "Picture12.jpeg",
    },
    {
      title: "Unfurnished Apartments",
      type: "FOR RENT",
      description:
        "Modern apartments in prime urban locations, offering flexible lease terms for long-term comfort.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrCKDyUW2zDXmAdW",
      imageName: "Picture24.jpeg",
    },
    {
      title: "Furnished Apartments",
      type: "FOR RENT",
      description:
        "Turnkey luxury apartments fully fitted with premium appliances, interior decor, and utilities.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrIdG5UAZsuStXbi",
      imageName: "Picture5.jpeg",
    },
    {
      title: "Lands",
      type: "FOR SALE",
      description:
        "Secured, litigation-free demarcated plots in fast-developing premium residential and commercial zones.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shr9oVh6m1W5oAvEN",
      imageName: "Picture22.jpeg",
    },
    {
      title: "Commercial Spaces",
      type: "FOR RENT",
      description:
        "Corporate office spaces, customized corporate floors, and business hubs tailored for production.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrmt1K5L6mfnTRhF",
      imageName: "Picture7.jpeg",
    },
    {
      title: "Apartments",
      type: "FOR SALE",
      description:
        "High-yield residential apartments perfect for investment portfolios or premium high-rise urban living.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrk8Putm8xWQ6my9",
      imageName: "Picture1.jpeg",
    },
    {
      title: "Furnished Houses",
      type: "FOR RENT",
      description:
        "Exquisite standalone multi-room residences with ready state-of-the-art staging, interior items, and furniture.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrLdwwoVJ7V2QukA",
      imageName: "Picture2.jpeg",
    },
    {
      title: "Shops",
      type: "FOR RENT",
      description:
        "Prime high-footfall retail storefronts, commercial spaces, and showrooms designed to grow business visibility.",
      link: "https://airtable.com/appCEXxqDsgQPcpSB/shrDZARuymZ22ATt0/tblqD7llbiy5hV7yA",
      imageName: "Picture10.jpeg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Explore Our Portfolio
            </span>
            <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#b5d334] tracking-tight mb-6">
            Property Categories
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Browse our up-to-date real estate catalogs curated to bring ultimate
            professionalism and structural efficiency to your property search.
          </p>
        </div>

        {/* Categories Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Visible Image Header Container positioned strictly on top */}
                <div className="relative w-full aspect-[16/10] bg-gray-200 overflow-hidden border-b border-gray-100">
                  <Image
                    src={`/assets/shelter/${item.imageName}`}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    priority={idx < 3}
                  />

                  {/* Overlay shadow for style depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40"></div>

                  {/* Status Badge styled beautifully with bg-blue-950 */}
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-md text-white bg-blue-950 z-10">
                    {item.type}
                  </span>
                </div>

                {/* Card Text Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3 group-hover:text-[#b5d334] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link Row */}
              <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-5 py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#b5d334] hover:text-neutral-900 hover:border-[#b5d334] group/btn"
                >
                  View Listings Directory
                  <svg
                    className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
