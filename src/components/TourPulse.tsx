import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SHOWS = [
  { city: "New York", dates: "Oct 12 - Oct 25", status: "Filling Fast", seats: 120, venue: "Skyline Arena" },
  { city: "Chicago", dates: "Nov 02 - Nov 15", status: "Available", seats: 450, venue: "Neon Dome" },
  { city: "Los Angeles", dates: "Dec 01 - Dec 14", status: "Limited", seats: 45, venue: "Pacific Pulse" },
  { city: "Miami", dates: "Jan 05 - Jan 18", status: "Available", seats: 600, venue: "Cyber Coast" },
  { city: "Austin", dates: "Feb 10 - Feb 23", status: "Available", seats: 320, venue: "Volt Center" },
  { city: "Seattle", dates: "Mar 05 - Mar 18", status: "Presale", seats: 1000, venue: "Aurora Hall" },
];

export const TourPulse = () => {
  return (
    <section id="schedule" className="py-32 bg-background text-foreground-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-background-50 skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">On The Road</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground-950 mb-6">
              TOUR <span className="text-primary underline decoration-primary/20 underline-offset-8">PULSE</span>
            </h2>
            <p className="text-foreground-600 max-w-lg font-body text-lg leading-relaxed">
              Experience the spectacle in your city. Our touring arena brings the future of entertainment to your doorstep.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-background-100 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold text-foreground-800">Live Booking Active</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar"
          >
            {SHOWS.map((show, idx) => (
              <motion.div
                key={show.city}
                whileHover={{ y: -12 }}
                className="flex-shrink-0 w-[340px] bg-background border border-border-200 rounded-[2rem] p-8 snap-start shadow-xl shadow-slate-200/50 transition-all hover:border-primary/30"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 rounded-2xl bg-background-50 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full ${
                    show.status === 'Limited' || show.status === 'Filling Fast' 
                    ? 'bg-red-50 text-red-600' 
                    : 'bg-primary/10 text-primary'
                  }`}>
                    {show.status}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-bold text-foreground-950 mb-2">{show.city}</h3>
                <p className="text-sm text-foreground-500 font-medium mb-8 uppercase tracking-wider">{show.venue}</p>

                <div className="space-y-4 mb-10 text-foreground-700">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-primary/60" />
                    <span className="font-semibold">{show.dates}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Users className="w-5 h-5 text-primary/60" />
                    <span className="font-semibold">{show.seats} seats available</span>
                  </div>
                </div>

                <div className="w-full h-2 bg-background-100 rounded-full mb-10 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(15, (show.seats / 1000) * 100)}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary shadow-[0_0_10px_rgba(188,44,255,0.4)]"
                  />
                </div>

                <Button className="w-full h-14 bg-background-950 hover:bg-primary text-foreground font-black text-sm tracking-widest transition-all rounded-2xl group border-none">
                  BOOK TICKETS 
                  <Star className="ml-2 w-4 h-4 transition-transform group-hover:rotate-12" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TourPulse;
