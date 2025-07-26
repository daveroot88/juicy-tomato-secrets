import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PricingSection = () => {
  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Your Tomato Guide
            <span className="text-primary"> Today</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need for just the price of a coffee
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card className="border-primary border-2 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold">
              BEST VALUE
            </div>
            
            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl font-bold mb-4">Complete Tomato Guide</CardTitle>
              <div className="text-center">
                <span className="text-5xl font-bold text-primary">$1</span>
                <p className="text-muted-foreground mt-2">One-time payment</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Complete 50+ page PDF guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>50+ tomato variety profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Step-by-step growing instructions</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Problem-solving troubleshooting guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>25+ delicious tomato recipes</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Seasonal planting calendar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>Instant PDF download</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✓</span>
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6 h-auto"
              >
                Get Instant Access - $1
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>🔒 Secure payment • 📧 Instant email delivery</p>
                <p className="mt-2">💯 30-day money-back guarantee</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};