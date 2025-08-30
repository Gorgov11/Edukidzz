import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, MapPin, BookOpen, Palette, Gamepad2, MessageSquare } from "lucide-react";
import classroomVisit from "@/assets/classroom-visit.jpg";

const AuthorVisits = () => {
  const packages = [
    {
      title: "Mini Storytime",
      duration: "30-40 minutes",
      icon: BookOpen,
      description: "Interactive storytelling session with one of my books",
      includes: ["Read-aloud session", "Q&A with children", "Signed bookplates"],
      ages: "Ages 2-8"
    },
    {
      title: "Story + Craft",
      duration: "60 minutes",
      icon: Palette,
      description: "Storytelling followed by themed craft activity",
      includes: ["Interactive storytelling", "Hands-on craft", "Take-home activities", "Signed bookplates"],
      ages: "Ages 3-8"
    },
    {
      title: "Half-Day Workshop",
      duration: "2-3 hours",
      icon: Gamepad2,
      description: "Comprehensive literacy and play-based learning session",
      includes: ["Multiple story sessions", "Craft activities", "Literacy games", "Teacher resources"],
      ages: "Ages 2-8"
    },
    {
      title: "Parent/Teacher Session",
      duration: "30-45 minutes",
      icon: MessageSquare,
      description: "Educational workshop for adults",
      includes: ["Literacy strategies", "Play-based learning tips", "Q&A session", "Resource pack"],
      ages: "Adults"
    }
  ];

  return (
    <section id="visits" className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bringing Stories to <span className="text-primary">Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interactive storytelling sessions that combine read-aloud magic with hands-on, play-based activities—
            perfect for nurseries, schools, and libraries.
          </p>
        </div>

        {/* Hero Image and Why Invite Dina */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div>
            <img 
              src={classroomVisit} 
              alt="Children engaged in storytelling session with Dina" 
              className="w-full h-80 object-cover rounded-2xl shadow-card"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Invite Ms. Dina?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Interactive Storytelling</h4>
                  <p className="text-muted-foreground">Engaging, fun, and educational sessions that captivate young minds</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Palette className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Hands-On Activities</h4>
                  <p className="text-muted-foreground">Crafts, sensory play, and literacy games that extend learning</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Tailored Sessions</h4>
                  <p className="text-muted-foreground">Age-appropriate content designed for your specific group</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Professional Development</h4>
                  <p className="text-muted-foreground">Optional workshops for teachers and parents included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Visit Packages</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card key={index} className="card-primary h-full">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{pkg.title}</CardTitle>
                    <CardDescription className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <Badge className="mb-4">{pkg.ages}</Badge>
                    <div className="text-left">
                      <h5 className="font-semibold text-foreground mb-2">Includes:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {pkg.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Location and Booking */}
        <div className="text-center">
          <div className="bg-mint p-8 rounded-2xl mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Available in the UAE & Regionally</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Currently accepting bookings for schools, nurseries, and libraries across the UAE, 
              with regional travel available upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero text-lg px-8 py-4">
                Book a Visit Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Request Information
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Contact: <a href="mailto:edukidzzbooks@gmail.com" className="text-primary hover:underline">edukidzzbooks@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthorVisits;