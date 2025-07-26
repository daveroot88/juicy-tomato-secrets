import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tomato-botanical-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/75" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Ultimate
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Tomato Guide
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Everything you need to grow, harvest, and enjoy the perfect tomatoes. 
          From seed to sauce, master the art of tomato cultivation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Get Your Guide - Only $1
          </Button>
          <p className="text-muted-foreground text-sm">
            ⭐ Instant PDF Download • 💯 Money-Back Guarantee
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>🍅 50+ Tomato Varieties</span>
          <span>🌱 Step-by-Step Growing Tips</span>
          <span>📋 Troubleshooting Guide</span>
          <span>🥗 Recipe Collection</span>
        </div>
      </div>
    </section>
  );
};