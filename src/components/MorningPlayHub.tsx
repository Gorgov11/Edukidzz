import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Palette, Music, PuzzleIcon as Puzzle, Heart } from "lucide-react";

const MorningPlayHub = () => {
  return (
    <section id="playhub" className="py-16 lg:py-24 bg-secondary-light">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Morning <span className="text-secondary">Play Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A creative space for children ages 2–5 to explore phonics, maths, sensory play, and storytelling. 
            Learn through play in a safe, nurturing environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background/80 p-4 rounded-xl border border-border">
                <Palette className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-semibold text-foreground">Sensory Play</h4>
                <p className="text-sm text-muted-foreground">Hands-on exploration activities</p>
              </div>
              
              <div className="bg-background/80 p-4 rounded-xl border border-border">
                <Puzzle className="w-6 h-6 text-accent mb-2" />
                <h4 className="font-semibold text-foreground">Early Phonics</h4>
                <p className="text-sm text-muted-foreground">Letter sounds & recognition</p>
              </div>
              
              <div className="bg-background/80 p-4 rounded-xl border border-border">
                <Play className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground">STEAM Play</h4>
                <p className="text-sm text-muted-foreground">Science, tech, arts & maths</p>
              </div>
              
              <div className="bg-background/80 p-4 rounded-xl border border-border">
                <Heart className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-semibold text-foreground">Storytelling</h4>
                <p className="text-sm text-muted-foreground">Circle time & book adventures</p>
              </div>
            </div>
          </div>

          <div className="bg-background/80 p-8 rounded-2xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">Parent Benefits</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <span className="text-muted-foreground">Progress notes after each session</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <span className="text-muted-foreground">At-home extension activities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <span className="text-muted-foreground">Monthly parent Q&A sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <span className="text-muted-foreground">Small group sizes (max 6 children)</span>
              </li>
            </ul>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Available Options:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-secondary text-secondary">Taster Session</Badge>
                <Badge variant="outline" className="border-secondary text-secondary">Weekly Program</Badge>
                <Badge variant="outline" className="border-secondary text-secondary">Monthly Package</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-background/80 p-8 rounded-2xl border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6">
              Located in the UAE. Contact me to discuss your child's learning journey and schedule a visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:edukidzzbooks@gmail.com?subject=Morning Play Hub - Register Interest">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Register Interest
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="text-lg px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MorningPlayHub;