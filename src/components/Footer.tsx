import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background py-32 border-t border-border/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-3xl font-display font-black tracking-tighter text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-foreground" fill="white" />
              </div>
              VOLT<span className="text-primary">SPECTACLE</span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-10 text-lg leading-relaxed">
              A traveling arena of wonder, light, and human excellence. Redefining the big top for the digital age since 2024.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-card flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all border border-border/50 hover:border-accent/40 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-xs tracking-[0.3em] text-foreground/40 uppercase mb-8">NAVIGATION</h4>
            <ul className="space-y-5 text-muted-foreground font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Tour Schedule</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Performer Registry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Arena Safety</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-xs tracking-[0.3em] text-foreground/40 uppercase mb-8">SUPPORT</h4>
            <ul className="space-y-5 text-muted-foreground font-medium">
              <li>General: help@voltspectacle.com</li>
              <li>Press: media@voltspectacle.com</li>
              <li>Tickets: 1-888-VOLT-AIR</li>
              <li>FAQ Center</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-muted-foreground/40 font-medium">
            © 2024 Volt Spectacle Productions. Built for the light.
          </p>
          <div className="flex gap-10 text-xs text-muted-foreground/40 font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
