import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Colorado",
    text: "This guide transformed my tomato garden! I went from struggling plants to abundant harvests. The troubleshooting section alone was worth the price.",
    rating: 5
  },
  {
    name: "Mike Chen",
    location: "California",
    text: "As a beginner gardener, this PDF gave me confidence. The step-by-step photos made everything clear. My tomatoes are thriving!",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    location: "Texas",
    text: "The variety recommendations were spot-on for my climate. I've never had such flavorful tomatoes. This guide pays for itself!",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join <span className="text-primary">Thousands</span> of Happy Gardeners
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers are saying about their tomato growing success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-elevated">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};