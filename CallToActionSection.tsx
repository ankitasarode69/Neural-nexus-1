import { Button } from "@/components/ui/button";
import { Heart, Users, Globe } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Join the Mission
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Help us conserve culture for future generations. Together, we can preserve India's incredible heritage.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Heart className="h-5 w-5 text-heritage-gold" />
              <span>Preserve Heritage</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Users className="h-5 w-5 text-heritage-gold" />
              <span>Build Community</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Globe className="h-5 w-5 text-heritage-gold" />
              <span>Share Culture</span>
            </div>
          </div>
          
          <Button 
            variant="heritage" 
            size="xl"
            className="animate-glow text-lg font-semibold"
          >
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;