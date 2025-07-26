import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Complete Growing Guide",
    description: "From seedling to harvest, learn the exact steps to grow perfect tomatoes in any climate.",
    icon: "🌱"
  },
  {
    title: "50+ Variety Profiles",
    description: "Detailed profiles of the best tomato varieties for every taste and growing condition.",
    icon: "🍅"
  },
  {
    title: "Problem-Solving Toolkit",
    description: "Identify and fix common issues like blight, cracking, and pests with our visual guide.",
    icon: "🔧"
  },
  {
    title: "Harvest & Storage Tips",
    description: "Maximize your yield and keep tomatoes fresh longer with professional techniques.",
    icon: "🧺"
  },
  {
    title: "Recipe Collection",
    description: "Transform your harvest into delicious meals with 25+ tried-and-tested recipes.",
    icon: "👨‍🍳"
  },
  {
    title: "Seasonal Calendar",
    description: "Never miss the right timing with our comprehensive planting and care schedule.",
    icon: "📅"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need to Know About
            <span className="text-primary"> Tomatoes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive guide covers every aspect of tomato cultivation, 
            from basic gardening to advanced techniques used by professionals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-elevated hover:shadow-glow transition-smooth hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};