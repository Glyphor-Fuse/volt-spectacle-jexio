import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

export const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <BackgroundBeamsWithCollision>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
              The Future of the Big Top
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter text-foreground mb-6 leading-[0.9]">
              VOLT <span className="text-accent">SPECTACLE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light">
              Witness the collision of human peak performance and electric innovation. 
              A pulse-pounding arena experience that redefines the circus for a new era.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-[0_0_20px_rgba(188,44,255,0.4)] transition-all hover:scale-105 active:scale-95">
                GET TICKETS NOW
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-accent/30 text-accent hover:bg-accent/10 rounded-full transition-all hover:scale-105 active:scale-95">
                WATCH TRAILER
              </Button>
            </div>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
      </div>
    </div>
  );
};

export default Hero;
