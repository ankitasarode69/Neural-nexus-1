import { useState } from "react";
import damagedMonument from "@/assets/damaged-monument.jpg";
import preservedMonument from "@/assets/preserved-monument.jpg";

const AwarenessSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id="awareness" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Choice Is <span className="heritage-text-gradient">Ours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the stark difference between preservation and neglect
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Without Preservation */}
          <div className="section-fade-in">
            <div 
              className="relative overflow-hidden rounded-lg shadow-heritage cursor-pointer transition-transform hover:scale-105"
              onClick={() => toggleSection('without')}
            >
              <img 
                src={damagedMonument} 
                alt="Damaged monument showing effects of neglect"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 text-red-400">
                    What if we don't preserve?
                  </h3>
                  <p className="text-sm opacity-90">
                    Click to see the consequences...
                  </p>
                </div>
              </div>
            </div>
            
            {expandedSection === 'without' && (
              <div className="mt-4 p-6 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-800 animate-fade-in">
                <h4 className="text-lg font-bold text-red-600 dark:text-red-400 mb-3">
                  The Cost of Neglect
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Physical Deterioration:</strong> Weather, pollution, and time cause irreversible damage to stone carvings and structures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Lost Knowledge:</strong> Ancient construction techniques and cultural stories disappear forever.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Cultural Identity Crisis:</strong> Future generations lose connection to their heritage and roots.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Economic Loss:</strong> Tourism revenue decreases as monuments become unsafe or unattractive.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Educational Void:</strong> Students and researchers lose access to authentic historical resources.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          
          {/* With Digital Preservation */}
          <div className="section-fade-in">
            <div 
              className="relative overflow-hidden rounded-lg shadow-gold animate-glow cursor-pointer transition-transform hover:scale-105"
              onClick={() => toggleSection('with')}
            >
              <img 
                src={preservedMonument} 
                alt="Beautiful preserved monument showcasing digital preservation"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-gold/80 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    With digital preservation
                  </h3>
                  <p className="text-sm opacity-90">
                    Click to explore the benefits...
                  </p>
                </div>
              </div>
            </div>
            
            {expandedSection === 'with' && (
              <div className="mt-4 p-6 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800 animate-fade-in">
                <h4 className="text-lg font-bold text-green-600 dark:text-green-400 mb-3">
                  The Power of Digital Preservation
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Eternal Conservation:</strong> 3D models and AR experiences preserve monuments forever, unaffected by physical decay.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Global Accessibility:</strong> Anyone, anywhere can explore our heritage through virtual reality and augmented reality.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Enhanced Learning:</strong> Interactive 3D models provide immersive educational experiences for students worldwide.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Restoration Reference:</strong> Digital twins serve as perfect blueprints for physical restoration projects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Cultural Sharing:</strong> Share India's rich heritage with the world, promoting cultural understanding and tourism.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Future Innovation:</strong> AI and machine learning can analyze patterns and predict conservation needs.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessSection;