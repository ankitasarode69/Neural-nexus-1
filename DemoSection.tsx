import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

interface Monument {
  id: string;
  name: string;
  embedUrl: string;
  history: string;
}

const monuments: Monument[] = [
  {
    id: "tajmahal",
    name: "Taj Mahal",
    embedUrl: "https://sketchfab.com/models/1eb09052f6cd421caeaa6cb3204cb15d/embed?autostart=1&ui_theme=dark",
    history: "The Taj Mahal, built between 1631 and 1648, is a magnificent ivory-white marble mausoleum commissioned by Mughal Emperor Shah Jahan for his beloved wife Mumtaz Mahal. Located in Agra, this UNESCO World Heritage Site represents the finest example of Mughal architecture, combining elements from Islamic, Persian, Ottoman Turkish and Indian architectural styles. The monument took 22 years to complete and required over 20,000 artisans from across the empire."
  },
  {
    id: "jagannath",
    name: "Jagannath Temple, Puri",
    embedUrl: "https://sketchfab.com/models/14b7a8827443421ba8c8ec42f35d110c/embed?autostart=1&ui_theme=dark",
    history: "The Jagannath Temple in Puri, Odisha, is a 12th-century temple dedicated to Lord Jagannath, an incarnation of Lord Vishnu. Built by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty, this sacred temple is one of the Char Dham pilgrimage sites. The temple is famous for its annual Rath Yatra festival, where the deities are taken out in grand chariots. The temple's architecture showcases the Kalinga style with its towering spire reaching 214 feet."
  },
  {
    id: "konark",
    name: "Konark Sun Temple",
    embedUrl: "https://sketchfab.com/models/643007d2737946539e98be567807f478/embed?autostart=1&ui_theme=dark",
    history: "The Konark Sun Temple, built in the 13th century by King Narasimhadeva I of the Eastern Ganga Dynasty, is dedicated to the Hindu Sun God Surya. This UNESCO World Heritage Site in Odisha is designed as a massive chariot with 24 wheels, pulled by seven horses. The temple is renowned for its exquisite stone carvings depicting various aspects of life, including erotic sculptures. The temple represents the pinnacle of Kalinga architecture and is often called the Black Pagoda."
  },
  {
    id: "brihadeshwar",
    name: "Brihadeshwar Temple",
    embedUrl: "https://sketchfab.com/models/7d699c578405400684b65f5047d74509/embed?autostart=1&ui_theme=dark",
    history: "The Brihadeshwar Temple in Thanjavur, Tamil Nadu, was built by the Chola Emperor Rajaraja I between 1003 and 1010 CE. This UNESCO World Heritage Site is dedicated to Lord Shiva and is one of the largest temples in India. The temple's vimana (tower) stands 216 feet tall and is crowned with a massive granite block weighing 80 tons. The temple showcases the architectural brilliance of the Chola Dynasty and houses numerous sculptures and bronze statues."
  },
  {
    id: "hampi",
    name: "Hampi Vijayanagara",
    embedUrl: "https://sketchfab.com/models/5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a/embed?autostart=1&ui_theme=dark",
    history: "Hampi, the ruins of the Vijayanagara Empire, was once one of the richest cities in the world during the 14th-16th centuries. Located in Karnataka, this UNESCO World Heritage Site spans over 4,100 hectares and contains over 1,600 surviving remains. The Virupaksha Temple, Stone Chariot, and Vittala Temple complex are among its most famous structures. The empire was known for its patronage of arts, culture, and architecture, creating a unique blend of Dravidian and Indo-Islamic styles."
  }
];

const DemoSection = () => {
  const [selectedMonument, setSelectedMonument] = useState<Monument>(monuments[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speech, setSpeech] = useState<SpeechSynthesisUtterance | null>(null);

  const speakHistory = () => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(selectedMonument.history);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      setSpeech(utterance);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Stop speech when monument changes
    stopSpeech();
  }, [selectedMonument]);

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Try It <span className="heritage-text-gradient">Yourself</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience India's heritage monuments in immersive 3D - select, explore, and listen to their stories
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto section-fade-in">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Select value={selectedMonument.id} onValueChange={(value) => {
              const monument = monuments.find(m => m.id === value);
              if (monument) setSelectedMonument(monument);
            }}>
              <SelectTrigger className="w-full sm:w-80">
                <SelectValue placeholder="Select a monument" />
              </SelectTrigger>
              <SelectContent>
                {monuments.map((monument) => (
                  <SelectItem key={monument.id} value={monument.id}>
                    {monument.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button
              variant="heritage"
              onClick={isPlaying ? stopSpeech : speakHistory}
              className="flex items-center gap-2"
            >
              {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              {isPlaying ? "Stop Audio" : "Play History"}
            </Button>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-heritage border border-heritage-gold/20">
            <iframe 
              key={selectedMonument.id}
              title={`${selectedMonument.name} 3D Model`}
              frameBorder="0" 
              allowFullScreen 
              width="100%" 
              height="480"
              className="rounded-lg"
              src={selectedMonument.embedUrl}
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold mb-2 heritage-text-gradient">
                {selectedMonument.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive 3D model powered by Sketchfab • Click and drag to rotate • Scroll to zoom
              </p>
              <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-4">
                <p className="text-left leading-relaxed">
                  {selectedMonument.history}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;