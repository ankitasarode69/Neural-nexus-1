import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Database, Eye } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "AR/3D Models",
      description: "View monuments in Augmented Reality with interactive features and detailed exploration."
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Digital Twin Library",
      description: "Permanent record of monuments stored securely for future generations to access."
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Awareness Campaign",
      description: "See the difference between Preserved vs Damaged states of our heritage sites."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-stone">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 section-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="heritage-text-gradient">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technology to preserve and share our cultural heritage
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-heritage-gold/20 shadow-heritage hover:shadow-gold transition-all duration-300 hover:scale-105 section-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-heritage-gold">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl font-bold">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;