import React from 'react';
import { AppleCardsCarousel, Card } from '@/components/ui/apple-cards-carousel';

const PERFORMERS_DATA = [
  {
    category: "Aerial Mastery",
    title: "The Neon Flyers",
    src: "/images/performer-1.jpg",
    content: <div className="p-4 bg-card rounded-xl border border-border mt-4 text-sm text-muted-foreground">Watch as the flyers defy gravity under thousands of LED beams. Every swing is synchronized to a pulse-pounding electronic score.</div>,
  },
  {
    category: "Kinetic Force",
    title: "Voltage Acrobats",
    src: "/images/performer-2.jpg",
    content: <div className="p-4 bg-card rounded-xl border border-border mt-4 text-sm text-muted-foreground">Incredible strength meets electric precision. This team of 12 acrobats performs stunts that push the absolute limits of human physics.</div>,
  },
  {
    category: "Luminous Danger",
    title: "Plasma Breath",
    src: "/images/performer-3.jpg",
    content: <div className="p-4 bg-card rounded-xl border border-border mt-4 text-sm text-muted-foreground">Traditional fire arts reimagined. Our masters use reactive chemical plasma to create flames that dance in vibrant purples and cyans.</div>,
  },
  {
    category: "Precision",
    title: "Cyber Cyclists",
    src: "/images/performer-1.jpg",
    content: <div className="p-4 bg-card rounded-xl border border-border mt-4 text-sm text-muted-foreground">Precision BMX and wheel acts inside the Sphere of Spark. High-speed orbits illuminated by reactive floor plates.</div>,
  },
  {
    category: "Illusions",
    title: "The Prism Mage",
    src: "/images/performer-2.jpg",
    content: <div className="p-4 bg-card rounded-xl border border-border mt-4 text-sm text-muted-foreground">A digital illusionist bending light and perception. Where does the holographic projection end and reality begin?</div>,
  },
];

export const Performers = () => {
  const cards = PERFORMERS_DATA.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <section id="performers" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container px-4 mx-auto">
        <div className="mb-16">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">The Talent</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4">
            FEATURED <span className="text-primary italic">ACTS</span>
          </h2>
          <div className="h-1 w-24 bg-accent rounded-full" />
        </div>
        <AppleCardsCarousel items={cards} />
      </div>
    </section>
  );
};

export default Performers;
