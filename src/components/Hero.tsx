import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Users } from "lucide-react";
import dinaPhotoAlt from "@/assets/author-photos/dina-author-photo-alt.jpg";
import sparkDragonAlt from "@/assets/book-covers/spark-dragon-cover-alt.jpg";
import sparkColoring from "@/assets/activities/spark-dragon/spark-dragon-coloring.jpg";

const Hero = () => {
  return (
    <section className="gradient-bg py-16 lg:py-24">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <BookOpen className="w-4 h-4 mr-1" />
                Author
              </Badge>
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                <Users className="w-4 h-4 mr-1" />
                Educator
              </Badge>
              <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                <Heart className="w-4 h-4 mr-1" />
                Storyteller
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stories & Play That{" "}
              <span className="text-primary">Spark</span>{" "}
              <span className="text-accent">Young Minds</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome! I'm Dina O. Nasr, an author, early years educator, and mum of three. 
              Through books, workshops, and play-based learning, I bring imagination and education together—
              nurturing confident readers and curious little learners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/#books">
                <Button className="btn-hero text-lg px-8 py-4">
                  Explore My Books
                </Button>
              </a>
              <a href="/#visits">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Book an Author Visit
                </Button>
              </a>
              <a href="/#resources">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Free Activities
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 gap-6">
              {/* Author Photo */}
              <div className="card-primary bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <img 
                    src={dinaPhotoAlt} 
                    alt="Dina O. Nasr, Children's Author" 
                    className="w-20 h-20 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground">Dina O. Nasr</h3>
                    <p className="text-sm text-muted-foreground">Children's Author • Early Years Educator</p>
                    <p className="text-sm text-primary font-medium">14+ Years Experience</p>
                  </div>
                </div>
              </div>
              
              {/* Book Preview */}
              <a href="/#books">
                <div className="card-primary bg-background/80 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img 
                        src={sparkDragonAlt} 
                        alt="Spark the Sparkly Dragon" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Latest Book</p>
                      <h4 className="font-semibold text-foreground">Spark the Sparkly Dragon</h4>
                      <p className="text-sm text-secondary font-medium">Available Now</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Activity Preview */}
              <a href="/#resources">
                <div className="card-primary bg-background/80 backdrop-blur-sm cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                        <img 
                          src={sparkColoring} 
                          alt="Spark Dragon Coloring Activity" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        FREE
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Free Activity</p>
                      <h4 className="font-semibold text-foreground">Coloring Pages</h4>
                      <p className="text-sm text-accent font-medium">Download Now</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 right-8 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;