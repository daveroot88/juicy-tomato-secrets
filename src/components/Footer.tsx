import logoImage from "@/assets/louis-george-logo.png";

export const Footer = () => {
  console.log('Footer mounted, logo path:', logoImage);
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <img 
            src={logoImage} 
            alt="Louis and George's Logo" 
            className="w-24 h-24 mx-auto mb-4"
            onLoad={() => console.log('Footer logo loaded:', logoImage)}
            onError={(e) => console.log('Footer logo error:', e, logoImage)}
          />
          <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
            Louis and George's Ultimate Tomato Guide
          </h3>
          <p className="text-muted-foreground mb-6 font-playfair">
            Everything you need to grow perfect tomatoes
          </p>
          
          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Louis and George's Ultimate Tomato Guide. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Questions? Contact us at hello@tomatoguide.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};