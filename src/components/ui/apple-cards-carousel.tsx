import React, { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface CardProps {
  card: {
    category: string;
    title: string;
    src: string;
    content: React.ReactNode;
  };
  index: number;
}

export const Card = ({ card, index }: CardProps) => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${card.title}`}
              className="relative w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden"
            >
              <button 
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="h-64 md:h-96 w-full relative">
                <img src={card.src} alt={card.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8">
                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">{card.category}</p>
                <h3 className="text-4xl font-display font-bold text-foreground mb-6">{card.title}</h3>
                <div className="text-muted-foreground leading-relaxed text-lg">
                  {card.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${card.title}`}
        onClick={() => setOpen(true)}
        className="relative flex-shrink-0 w-80 md:w-96 h-[500px] rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
      >
        <img 
          src={card.src} 
          alt={card.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <p className="text-accent font-bold text-xs tracking-widest uppercase mb-2">{card.category}</p>
          <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{card.title}</h3>
        </div>
      </motion.div>
    </>
  );
};

export const AppleCardsCarousel = ({ items }: { items: React.ReactNode[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto pb-10 scroll-smooth no-scrollbar px-4"
      >
        {items}
      </div>
    </div>
  );
};
