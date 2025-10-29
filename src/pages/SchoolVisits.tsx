import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthorVisitsGallery from "@/components/AuthorVisitsGallery";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Clock, 
  MapPin, 
  Video, 
  Mic, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  GraduationCap,
  Heart,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const SchoolVisits = () => {
  const visitTypes = [
    {
      title: "Assembly Presentations",
      description: "Engaging whole-school assemblies bringing stories to life",
      duration: "30-45 minutes",
      audience: "All ages",
      features: ["Interactive storytelling", "Character voices", "Q&A session", "Book signing"],
      icon: Users,
      popular: true
    },
    {
      title: "Classroom Workshops",
      description: "Intimate sessions focused on creative writing and storytelling",
      duration: "45-60 minutes",
      audience: "Single class",
      features: ["Writing exercises", "Character development", "Story structure", "Personal feedback"],
      icon: BookOpen,
      popular: false
    },
    {
      title: "Virtual Visits",
      description: "Online sessions bringing the author experience to your classroom",
      duration: "30-45 minutes",
      audience: "Flexible",
      features: ["Live interaction", "Screen sharing", "Digital resources", "Recorded sessions"],
      icon: Video,
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "Dina's visit was absolutely magical! The children were completely captivated and haven't stopped talking about it.",
      author: "Sarah Johnson",
      role: "Year 2 Teacher, St. Mary's Primary",
      rating: 5
    },
    {
      quote: "The workshop really inspired our reluctant writers. We saw immediate improvements in their creative writing.",
      author: "Michael Chen",
      role: "Literacy Coordinator, Greenfield Academy",
      rating: 5
    },
    {
      quote: "Professional, engaging, and perfectly pitched for our Early Years children. Highly recommended!",
      author: "Emma Williams",
      role: "Reception Teacher, Little Stars Nursery",
      rating: 5
    }
  ];

  const pricing = [
    {
      type: "Half Day",
      duration: "2-3 hours",
      sessions: "2-3 sessions",
      price: "Upon Request",
      includes: ["Assembly presentation", "Classroom workshop", "Book signing", "Teacher resources"],
      bestValue: false
    },
    {
      type: "Full Day",
      duration: "4-6 hours",
      sessions: "4-6 sessions",
      price: "Upon Request",
      includes: ["Multiple presentations", "Workshops", "Book signing", "Teacher resources", "Follow-up materials"],
      bestValue: true
    },
    {
      type: "Virtual Visit",
      duration: "30-45 minutes",
      sessions: "1 session",
      price: "Upon Request",
      includes: ["Live presentation", "Q&A session", "Digital resources", "Recording available"],
      bestValue: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="container-width section-padding pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">School Visits</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Bring the magic of storytelling to your school with engaging author visits that inspire creativity, 
            foster a love of reading, and ignite imaginations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/author-visit-details">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Calendar className="w-4 h-4 mr-2" />
                View Details & Pricing
              </Button>
            </Link>
            <Button size="lg" className="btn-hero w-full sm:w-auto">
              <Heart className="w-4 h-4 mr-2" />
              Book Your Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Types */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visit Formats</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the format that best suits your school's needs and schedule
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {visitTypes.map((visit, index) => {
            const IconComponent = visit.icon;
            return (
              <Card key={index} className={`relative ${visit.popular ? 'ring-2 ring-primary' : ''}`}>
                {visit.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{visit.title}</CardTitle>
                  <CardDescription className="text-base">{visit.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{visit.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{visit.audience}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {visit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* What to Expect */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What to Expect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A carefully crafted experience designed to engage, inspire, and educate
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Interactive Storytelling</h3>
            <p className="text-muted-foreground text-sm">Bringing characters to life with voices, expressions, and audience participation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Writing Workshops</h3>
            <p className="text-muted-foreground text-sm">Hands-on creative writing exercises tailored to your students' age and ability</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Q&A Sessions</h3>
            <p className="text-muted-foreground text-sm">Answering students' questions about writing, publishing, and being an author</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Book Signings</h3>
            <p className="text-muted-foreground text-sm">Personalized book signings and photo opportunities with students</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Packages & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible packages tailored to your school's needs and budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((package_, index) => (
            <Card key={index} className={`relative ${package_.bestValue ? 'ring-2 ring-primary scale-105' : ''}`}>
              {package_.bestValue && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Best Value
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{package_.type}</CardTitle>
                <div className="text-2xl font-bold text-primary">{package_.price}</div>
                <CardDescription>{package_.duration} • {package_.sessions}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {package_.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
        </ul>
                <Button className="w-full" variant={package_.bestValue ? "default" : "outline"}>
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4">
            * Travel expenses may apply for visits outside London area
          </p>
          <Link to="/author-visit-details">
            <Button variant="outline">
              View Detailed Requirements
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Author Visits Gallery */}
      <AuthorVisitsGallery />

      {/* Testimonials */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Teachers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from educators who have experienced the magic of our author visits
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-width section-padding">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Book Your Visit?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable experience for your school. Contact me to discuss your requirements 
            and find the perfect visit format for your institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Heart className="w-4 h-4 mr-2" />
              Book Your Visit
            </Button>
            <Link to="/author-visit-details">
              <Button variant="outline" size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                View Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolVisits;
