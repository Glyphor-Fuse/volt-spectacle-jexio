import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const TIERS = [
  {
    name: "Standard Pulse",
    price: "$49",
    description: "Main arena seating with excellent sightlines of the central stage and all side projections.",
    features: ["Standard Arena Seating", "Interactive App Access", "Digital Souvenir Program", "Standard Entrance"],
    accent: "accent",
  },
  {
    name: "VIP Voltage",
    price: "$129",
    description: "Premium ringside seating and exclusive access to the Volt Lounge for pre-show tech demos.",
    features: ["Front Row VIP Seating", "Backstage Quick-Look", "Volt Lounge Access", "Complimentary Drinks", "Priority Lane Entry"],
    accent: "primary",
    popular: true,
  },
  {
    name: "Supernova Box",
    price: "$249",
    description: "Private luxury box for groups, including dedicated service and premium curated treats.",
    features: ["Private Box (4-6 people)", "Dedicated Concierge", "Gourmet Catering", "Meet & Greet Opportunity", "Souvenir Tech-Kit"],
    accent: "accent",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-muted relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,231,255,0.05),transparent)] pointer-events-none" />
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-20">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Pricing Plans</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-8">
            CHOOSE YOUR <span className="text-accent italic">EXPERIENCE</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From ringside adrenaline to family-friendly arena views, we have the perfect package for your night at the Volt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TIERS.map((tier) => (
            <CardSpotlight 
              key={tier.name}
              className={`p-10 flex flex-col items-start text-left bg-background/50 backdrop-blur-md border ${
                tier.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(188,44,255,0.1)]' : 'border-border/50'
              } rounded-[2.5rem] relative overflow-hidden group hover:border-accent/40 transition-all duration-500`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 p-6">
                  <SparklesCore className="w-6 h-6 text-primary animate-pulse" />
                </div>
              )}
              
              <div className="mb-10 w-full">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">/ seat</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-10 min-h-[72px] font-body">
                {tier.description}
              </p>

              <div className="space-y-5 mb-12 w-full flex-grow">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 text-sm text-foreground/90 font-medium">
                    <div className={`p-1 rounded-full ${tier.accent === 'primary' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"}
                className={`w-full font-black text-sm tracking-widest h-14 rounded-2xl transition-all duration-300 ${
                  tier.popular 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105' 
                  : 'border-accent/30 text-accent hover:bg-accent/10 hover:border-accent'
                }`}
              >
                SECURE THIS TIER
              </Button>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
