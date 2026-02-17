import React from 'react';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';

const GALLERY_IMAGES = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/performer-1.jpg",
  "/images/gallery-3.jpg",
  "/images/performer-2.jpg",
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/performer-3.jpg",
  "/images/gallery-3.jpg",
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container px-4 mx-auto mb-20 text-center">
        <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Visual Journey</span>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
          CAPTURED <span className="text-primary italic">ENERGY</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A glimpse into the luminous world of Volt Spectacle. Every frame captures the high-speed collision of light, sound, and peak human performance.
        </p>
      </div>
      
      <div className="h-[900px] w-full overflow-hidden px-4 md:px-10">
        <ParallaxScroll images={GALLERY_IMAGES} />
      </div>
    </section>
  );
};

export default Gallery;
