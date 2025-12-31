"use client";

import { useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface ProductHeroCarouselProps {
  images: { src: string; alt: string }[];
  children: ReactNode;
}

export default function ProductHeroCarousel({ images, children }: ProductHeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Carousel Images with Crossfade */}
      {images.map((image, index) => (
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
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay with prism effect for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary-light/80" />
      
      {/* Prism/glass accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-cyan-500/5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />

      {/* Content Container - Centered */}
      <div className="relative h-full flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto">
          {children}
        </div>
      </div>

      {/* Glass Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10 ring-1 ring-white/50"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all z-10 ring-1 ring-white/50"
        style={{
          boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)',
        }}
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Carousel Indicators - Centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
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
