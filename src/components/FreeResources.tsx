import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Download, Gift, BookOpen, Palette, Puzzle, Music, Mail } from "lucide-react";
import { useState } from "react";
import { useEmailActions } from "@/hooks/useEmailActions";

const FreeResources = () => {
  const [email, setEmail] = useState("");
  const [selectedResource, setSelectedResource] = useState<string>("");

  const { requestFreeResource, subscribeToNewsletter, isSubmitting } = useEmailActions();

  const resources = [
    {
      title: "Weekend Play Ideas",
      icon: Gift,
      description: "Fun activities to keep little ones engaged and learning at home",
      includes: ["20+ activity ideas", "Materials list", "Age-appropriate suggestions"],
      color: "primary"
    },
    {
      title: "Literacy & Phonics Games",
      icon: BookOpen,
      description: "Playful ways to build reading skills and phonemic awareness",
      includes: ["Letter recognition games", "Sound matching activities", "Reading bingo"],
      color: "accent"
    },
    {
      title: "Creative Crafts",
      icon: Palette,
      description: "Book-themed crafts linked to Billy Bear and Spark the Dragon",
      includes: ["Step-by-step guides", "Printable templates", "Extension activities"],
      color: "secondary"
    },
    {
      title: "Emotional Learning Pack",
      icon: Puzzle,
      description: "Tools to help children understand and express their feelings",
      includes: ["Feelings wheel", "Emotion cards", "Discussion prompts"],
      color: "primary"
    }
  ];

  const handleResourceRequest = async (resourceName: string) => {
    if (!email) {
      return;
    }
    
    const result = await requestFreeResource(email, resourceName);
    
    if (result.success) {
      setEmail("");
      setSelectedResource("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    
    if (selectedResource) {
      await handleResourceRequest(selectedResource);
    } else {
      // General newsletter signup
      const result = await subscribeToNewsletter(email, "", "free_resources");
      if (result.success) {
        setEmail("");
      }
    }
  };

  return (
    <section id="resources" className="py-16 lg:py-24 bg-mint">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Free <span className="text-secondary">Activities</span> & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A treasure chest of free, play-based activities for parents and educators. 
            Download fun resources that build literacy, creativity, and emotional learning.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="card-primary h-full">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 bg-${resource.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-6 h-6 text-${resource.color}`} />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h5 className="font-semibold text-foreground mb-2">Includes:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {resource.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-${resource.color} rounded-full`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center py-2">
                      <Download className="w-4 h-4 mr-2" />
                      Free Download
                    </Badge>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedResource(resource.title)}
                      disabled={isSubmitting}
                    >
                      Select This Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Email Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Get Your Free Activity Pack
              </h3>
              <p className="text-muted-foreground">
                Join our community of parents and educators. Get instant access to all free resources 
                plus monthly tips, new activities, and exclusive content.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="btn-secondary px-8" disabled={isSubmitting}>
                  <Download className="w-4 h-4 mr-2" />
                  {selectedResource ? `Get ${selectedResource}` : "Get Free Pack"}
                  {isSubmitting && " - Sending..."}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Unsubscribe at any time. No spam, just valuable resources.
              </p>
            </form>

            <div className="mt-6 text-center">
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline">Play Ideas</Badge>
                <Badge variant="outline">Literacy Games</Badge>
                <Badge variant="outline">Craft Templates</Badge>
                <Badge variant="outline">Reading Activities</Badge>
                <Badge variant="outline">Emotional Learning</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            What Parents & Teachers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "These activities are perfect for busy parents. My daughter loves the craft ideas!",
                author: "Sarah M., Parent"
              },
              {
                quote: "The phonics games have been a game-changer in my classroom. Thank you, Dina!",
                author: "Ms. Fatima, Teacher"
              },
              {
                quote: "Finally, resources that actually work! Easy to follow and children love them.",
                author: "Ahmed K., Parent"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-background/50 p-6 rounded-xl border border-border">
                <p className="text-muted-foreground italic mb-3">"{testimonial.quote}"</p>
                <p className="text-sm font-medium text-foreground">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;