import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Simulate successful form submission
      alert(`Thank you ${formData.name}! Your message has been sent. I'll get back to you within 24-48 hours at ${formData.email}.`);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a parent, school, or library—I'd love to hear from you. 
            Let's work together to bring more magic into children's lives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground mb-1">For all inquiries and bookings</p>
                  <a href="mailto:edukidzzbooks@gmail.com" className="text-primary hover:underline">
                    edukidzzbooks@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground mb-1">Based in the UAE</p>
                  <p className="text-accent">Available for visits regionally</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground mb-1">I aim to respond within 24-48 hours</p>
                  <p className="text-secondary">Looking forward to connecting!</p>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a href="#visits">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h5 className="font-semibold text-foreground mb-1">Author Visits</h5>
                    <p className="text-sm text-muted-foreground">Schools & nurseries</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="mailto:edukidzzbooks@gmail.com?subject=Morning Play Hub Inquiry">
                <Card className="border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h5 className="font-semibold text-foreground mb-1">Morning Play Hub</h5>
                    <p className="text-sm text-muted-foreground">Ages 2-5 learning</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="mailto:edukidzzbooks@gmail.com?subject=Collaboration Inquiry">
                <Card className="border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h5 className="font-semibold text-foreground mb-1">Collaborations</h5>
                    <p className="text-sm text-muted-foreground">Educational partnerships</p>
                  </CardContent>
                </Card>
              </a>
              
              <a href="mailto:edukidzzbooks@gmail.com?subject=Media Inquiry">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <h5 className="font-semibold text-foreground mb-1">Media Inquiries</h5>
                    <p className="text-sm text-muted-foreground">Press & interviews</p>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow My Journey</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/edukidzz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="https://www.facebook.com/p/edukidzz-100064141237304/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-accent" />
                </a>
                <a 
                  href="https://www.tiktok.com/@mrsdinao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me more about your inquiry..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="btn-hero w-full text-lg py-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    I respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;