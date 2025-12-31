"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// High-quality San Diego images
const carouselImages = [
  {
    src: "/images/hero/hero-couple-balboa.png",
    alt: "Happy couple at Balboa Park, San Diego",
    location: "Balboa Park",
  },
  {
    src: "/images/hero/hero-retirees-lajolla.png",
    alt: "Retirees enjoying La Jolla coast, San Diego",
    location: "La Jolla",
  },
  {
    src: "/images/hero/hero-family-beach.png",
    alt: "Family walking on San Diego beach at sunset",
    location: "Coronado Beach",
  },
  {
    src: "/images/hero/hero-family-home.png",
    alt: "Happy family in front of their San Diego home",
    location: "San Diego",
  },
];

const stats = [
  { label: "Families Protected", value: "100K", suffix: "+" },
  { label: "States Covered", value: "50", suffix: "" },
  { label: "Customer Satisfaction", value: "4.9", suffix: "/5" },
  { label: "Starting Price", value: "$199", suffix: "" },
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
    <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
      {/* Prism/Rainbow edge effect */}
      <div className="absolute inset-0 rounded-3xl z-10 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-500/10 via-transparent to-cyan-500/10 mix-blend-overlay" />
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-rose-400/30 via-amber-400/30 via-emerald-400/30 via-cyan-400/30 to-violet-400/30 opacity-60 blur-sm" />
      </div>

      {/* Carousel Images with Crossfade */}
      {carouselImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}

      {/* Light Warm Overlay with prism effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/10 mix-blend-overlay" />

      {/* Glass-morphism Stats Cards - Centered */}
      <div className="absolute bottom-0 inset-x-0 p-6">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-xl shadow-glass border border-white/60 hover:bg-white/80 hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
              }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}<span className="text-lg text-secondary">{stat.suffix}</span>
              </p>
              <p className="text-xs text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* San Diego Location Badge with current location */}
      <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/80 backdrop-blur-xl text-primary text-sm font-bold px-5 py-2.5 rounded-full shadow-glass border border-white/60 z-20"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
        }}
      >
        <svg
          className="w-4 h-4 text-secondary animate-pulse"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span>{carouselImages[currentIndex].location}</span>
      </div>

      {/* Carousel Indicators - Centered */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === currentIndex
                ? "bg-white w-10 shadow-lg"
                : "bg-white/50 w-2.5 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
