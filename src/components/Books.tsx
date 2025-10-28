import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Star } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import sparkDragonAlt from "@/assets/book-covers/spark-dragon-cover-alt.jpg";
import billyBearAlt from "@/assets/book-covers/billy-bear-cover-alt.jpg";

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
              <div className="rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 bg-muted">
                <AspectRatio ratio={1}>
                  <img 
                    src={billyBearAlt} 
                    alt="Billy Bear's Brown Hair book cover" 
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
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
              <Button className="btn-hero w-full" disabled>
                <ExternalLink className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
              <a href="/#resources" className="flex-1">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Free Activities
                </Button>
              </a>
            </div>

            {/* Billy Bear Purchase Links */}
            <div className="mt-6 p-4 bg-mint rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">📦 Availability</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">🛒 Coming Soon</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      Available Soon
                    </span>
                    <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                      Contact for Updates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spark the Sparkly Dragon */}
          <div className="card-primary group">
            <div className="mb-6">
              <Badge className="bg-accent text-accent-foreground mb-4">Bestseller</Badge>
              <div className="rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300 bg-muted">
                <AspectRatio ratio={1}>
                  <img 
                    src={sparkDragonAlt} 
                    alt="Spark the Sparkly Dragon book cover" 
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>
              </div>
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
              <Button className="btn-accent w-full" disabled>
                <ExternalLink className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
              <a href="/#resources" className="flex-1">
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Explore Activities
                </Button>
              </a>
            </div>

            {/* Spark Dragon Purchase Links */}
            <div className="mt-6 p-4 bg-accent-light rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">📦 Availability</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">🛒 Coming Soon</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                      Available Soon
                    </span>
                    <span className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full">
                      Contact for Updates
                    </span>
                  </div>
                </div>
              </div>
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