"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselImages = [
  {
    src: "/images/san-diego/skyline.jpg",
    alt: "San Diego skyline at sunset",
  },
  {
    src: "/images/san-diego/coronado-beach.jpg",
    alt: "Beautiful Coronado Beach, San Diego",
  },
  {
    src: "/images/hero/family-beach.jpg",
    alt: "Happy family enjoying San Diego beach",
  },
  {
    src: "/images/hero/family-sunset.jpg",
    alt: "Family watching sunset together",
  },
];

// Compact stats for mobile
const stats = [
  { label: "Families", value: "100K", suffix: "+", fullLabel: "Families Protected" },
  { label: "States", value: "50", suffix: "", fullLabel: "States Covered" },
  { label: "Rating", value: "4.9", suffix: "★", fullLabel: "Customer Rating" },
  { label: "From", value: "$199", suffix: "", fullLabel: "Starting Price" },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
      {/* Carousel Images with Crossfade */}
      {carouselImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 520px"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Glass-morphism Stats Cards - More compact on mobile */}
      <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 lg:p-5">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-1.5 px-1 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-md shadow-sm sm:shadow-glass"
            >
              <p className="text-sm sm:text-lg lg:text-2xl font-bold text-primary leading-none">
                {stat.value}<span className="text-xs sm:text-sm text-secondary">{stat.suffix}</span>
              </p>
              <p className="text-[8px] sm:text-[10px] lg:text-xs text-foreground/60 font-medium mt-0.5 leading-tight">
                <span className="sm:hidden">{stat.label}</span>
                <span className="hidden sm:inline">{stat.fullLabel}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* San Diego Location Badge - Smaller on mobile */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 flex items-center gap-1 sm:gap-1.5 bg-white/90 backdrop-blur-md text-primary text-[10px] sm:text-xs lg:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm">
        <svg
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-secondary"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="hidden sm:inline">San Diego Based</span>
        <span className="sm:hidden">San Diego</span>
      </div>

      {/* Carousel Indicators - Repositioned for compact layout */}
      <div className="absolute bottom-[52px] sm:bottom-[70px] lg:bottom-[90px] left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-4 sm:w-6"
                : "bg-white/50 hover:bg-white/75 w-1 sm:w-1.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
