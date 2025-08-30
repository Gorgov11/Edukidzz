import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Users } from "lucide-react";
import dinaPhoto from "@/assets/dina-author-photo.jpg";
import sparkDragon from "@/assets/spark-dragon.jpg";

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
              <Button className="btn-hero text-lg px-8 py-4">
                Explore My Books
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                Book an Author Visit
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Free Activities
              </Button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative z-10 grid grid-cols-1 gap-6">
              {/* Author Photo */}
              <div className="card-primary bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <img 
                    src={dinaPhoto} 
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
              <div className="card-primary bg-background/80 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <img 
                    src={sparkDragon} 
                    alt="Spark the Sparkly Dragon" 
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Latest Book</p>
                    <h4 className="font-semibold text-foreground">Spark the Sparkly Dragon</h4>
                    <p className="text-sm text-secondary font-medium">Available Now</p>
                  </div>
                </div>
              </div>
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