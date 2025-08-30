import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Star } from "lucide-react";
import sparkDragon from "@/assets/spark-dragon.jpg";
import billyBear from "@/assets/billy-bear.jpg";

const Books = () => {
  return (
    <section id="books" className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stories That Spark <span className="text-primary">Magic</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Heartwarming tales that celebrate emotions, family bonds, and the joy of learning. 
            Perfect for storytime at home, in classrooms, and libraries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Billy Bear's Brown Hair */}
          <div className="card-primary group">
            <div className="mb-6">
              <Badge className="bg-secondary text-secondary-foreground mb-4">Latest Release</Badge>
              <img 
                src={billyBear} 
                alt="Billy Bear's Brown Hair book cover" 
                className="w-full h-64 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Billy Bear's Brown Hair</h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A warm, playful story about self-acceptance, celebrating uniqueness, and learning to see beauty in our differences. 
              A tale of honesty and emotions that teaches children about embracing who they are.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-primary border-primary/30">Self-Love</Badge>
              <Badge variant="outline" className="text-primary border-primary/30">Confidence</Badge>
              <Badge variant="outline" className="text-primary border-primary/30">Diversity</Badge>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">"Perfect for bedtime stories"</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="btn-hero flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Order Now
              </Button>
              <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Free Activities
              </Button>
            </div>
          </div>

          {/* Spark the Sparkly Dragon */}
          <div className="card-primary group">
            <div className="mb-6">
              <Badge className="bg-accent text-accent-foreground mb-4">Bestseller</Badge>
              <img 
                src={sparkDragon} 
                alt="Spark the Sparkly Dragon book cover" 
                className="w-full h-64 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">Spark the Sparkly Dragon</h3>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              An enchanting tale of friendship, honesty, and emotions featuring Spark the dragon whose colors change with feelings. 
              A story that teaches family trust, open communication, and emotional literacy.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-accent border-accent/30">Emotional Literacy</Badge>
              <Badge variant="outline" className="text-accent border-accent/30">Communication</Badge>
              <Badge variant="outline" className="text-accent border-accent/30">Honesty</Badge>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">"Children loved Spark!"</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="btn-accent flex-1">
                <ExternalLink className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
              <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Download className="w-4 h-4 mr-2" />
                Explore Activities
              </Button>
            </div>
          </div>
        </div>

        {/* Where to Buy Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Available Everywhere</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-lg">Amazon</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg">Barnes & Noble</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg">Google Play Books</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg">Apple Books</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg">Local Bookstores</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;