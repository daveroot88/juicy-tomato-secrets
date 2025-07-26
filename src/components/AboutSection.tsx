import { Card, CardContent } from "@/components/ui/card";
import varietiesImage from "@/assets/tomato-varieties.jpg";
import growthImage from "@/assets/tomato-growth.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            A Complete Guide to
            <span className="text-primary"> Tomato Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based on decades of gardening experience and scientific research, 
            this guide contains everything you need to become a tomato expert.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <img 
              src={varietiesImage} 
              alt="Botanical illustration of tomato varieties" 
              className="w-full rounded-lg shadow-elevated"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">50+ Tomato Varieties</h3>
            <p className="text-muted-foreground leading-relaxed">
              Discover the perfect tomato for every purpose - from tiny cherry tomatoes 
              perfect for snacking to massive beefsteaks ideal for sandwiches. Each variety 
              includes detailed growing requirements, flavor profiles, and best uses.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Heritage and heirloom varieties</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Disease-resistant modern hybrids</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Climate-specific recommendations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mt-20">
          <div className="space-y-6 md:order-2">
            <h3 className="text-2xl font-bold text-foreground">From Seed to Harvest</h3>
            <p className="text-muted-foreground leading-relaxed">
              Follow our step-by-step growing guide with detailed illustrations showing 
              exactly what to do at each stage. No guesswork - just proven methods that 
              work in any garden.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Seed starting and transplanting</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Pruning and support techniques</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent text-xl">✓</span>
                <span>Harvest timing and storage</span>
              </li>
            </ul>
          </div>
          <div className="md:order-1">
            <img 
              src={growthImage} 
              alt="Botanical illustration of tomato plant growth stages" 
              className="w-full rounded-lg shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};