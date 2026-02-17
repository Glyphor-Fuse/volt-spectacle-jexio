import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Performers } from "@/components/Performers";
import { TourPulse } from "@/components/TourPulse";
import { Pricing } from "@/components/Pricing";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
          <Navbar />
          <Hero />
          <Performers />
          <TourPulse />
          <Pricing />
          <Gallery />
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
