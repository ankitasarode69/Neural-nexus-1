import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative">
      <div className="container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Preserve Heritage,
            <span className="block heritage-text-gradient">Save History</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience India's cultural treasures in 3D & AR
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('demo')}
            className="animate-glow"
          >
            Explore Now
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroSection;