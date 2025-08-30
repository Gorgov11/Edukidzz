import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Users, Globe, Award, BookOpen } from "lucide-react";
import dinaPhoto from "@/assets/dina-author-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-mint">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Dina O. Nasr</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stories are more than words on a page—they are bridges between children and the world around them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="relative mb-8">
              <img 
                src={dinaPhoto} 
                alt="Dina O. Nasr, Children's Author and Educator" 
                className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl shadow-card object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-soft">
                14+ Years Experience
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Dina O. Nasr, half Egyptian, half Norwegian, and a mum of three. With over 14 years of experience 
                in Egypt, Saudi Arabia, and the UAE, I've worked as an Early Years Educator, curriculum developer, 
                nursery manager, and trainer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a child, I filled notebooks with poems and dreamt of writing stories that would inspire. 
                Today, my books and workshops do just that—bringing joy, creativity, and meaningful learning 
                into homes, classrooms, and nurseries.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background/50 p-4 rounded-xl border border-border">
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground">PGCE</h4>
                <p className="text-sm text-muted-foreground">University of Sunderland</p>
              </div>
              
              <div className="bg-background/50 p-4 rounded-xl border border-border">
                <Award className="w-6 h-6 text-accent mb-2" />
                <h4 className="font-semibold text-foreground">CACHE Level 5</h4>
                <p className="text-sm text-muted-foreground">Early Years Diploma</p>
              </div>
              
              <div className="bg-background/50 p-4 rounded-xl border border-border">
                <Heart className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-semibold text-foreground">Child Psychology</h4>
                <p className="text-sm text-muted-foreground">Specialist Training</p>
              </div>
              
              <div className="bg-background/50 p-4 rounded-xl border border-border">
                <Globe className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground">International</h4>
                <p className="text-sm text-muted-foreground">Egypt, KSA, UAE</p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Vision
                </h4>
                <p className="text-muted-foreground">
                  A generation of children who grow up with curiosity, kindness, and a love of stories.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center">
                  <BookOpen className="w-5 h-5 text-accent mr-2" />
                  Mission
                </h4>
                <p className="text-muted-foreground">
                  To foster early literacy, creativity, and emotional development by blending story-led teaching, 
                  play-based learning, and meaningful parent–child engagement.
                </p>
              </div>
            </div>

            <a href="#contact">
              <Button className="btn-hero w-full sm:w-auto">
                Read My Full Journey
              </Button>
            </a>
          </div>
        </div>

        {/* Philosophy Pillars */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">My Philosophy</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Story-Led Teaching",
              "Play-Based Learning", 
              "Emotional Literacy",
              "Parent Partnership",
              "Inclusivity"
            ].map((pillar, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-3 py-2 text-center justify-center border-primary/30 text-primary"
              >
                {pillar}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;