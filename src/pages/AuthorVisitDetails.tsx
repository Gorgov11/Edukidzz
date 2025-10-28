import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock, 
  Users, 
  MapPin, 
  Mic, 
  Wifi,
  Monitor,
  Camera,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Star,
  BookOpen,
  Heart,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const AuthorVisitDetails = () => {
  const requirements = [
    {
      category: "Technical Requirements",
      icon: Monitor,
      items: [
        "Projector or large screen/TV with HDMI connection",
        "Microphone for assemblies (lapel mic preferred)",
        "Stable internet connection for virtual visits",
        "Camera for virtual sessions (built-in or external)",
        "Power outlets near presentation area"
      ]
    },
    {
      category: "Space Requirements",
      icon: MapPin,
      items: [
        "Quiet, well-lit presentation area",
        "Seating for all participants",
        "Space for book display table",
        "Accessible entrance and facilities",
        "Parking space for author"
      ]
    },
    {
      category: "Preparation",
      icon: BookOpen,
      items: [
        "Advance book orders (optional but recommended)",
        "Student preparation materials sent 2 weeks prior",
        "Teacher resource pack provided",
        "Photography permissions arranged",
        "Schedule confirmation 1 week before"
      ]
    }
  ];

  const logistics = [
    {
      title: "Booking Process",
      steps: [
        "Initial inquiry and requirements discussion",
        "Customized proposal with pricing",
        "Contract signing and deposit payment",
        "Pre-visit preparation materials sent",
        "Final confirmation and logistics review"
      ]
    },
    {
      title: "On the Day",
      steps: [
        "Arrival 30 minutes before first session",
        "Setup and technical check",
        "Deliver scheduled sessions",
        "Book signing and photo opportunities",
        "Pack up and departure"
      ]
    },
    {
      title: "Follow-up",
      steps: [
        "Thank you email with photos",
        "Student feedback collection",
        "Teacher resource evaluation",
        "Future visit planning discussion",
        "Testimonial request"
      ]
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking 4-6 weeks in advance to ensure availability and allow time for preparation. However, I can sometimes accommodate shorter notice bookings depending on my schedule."
    },
    {
      question: "What age groups do you work with?",
      answer: "I work with children from Early Years (ages 3-5) through to Year 6 (ages 10-11). Sessions are tailored to each age group's developmental needs and interests."
    },
    {
      question: "Do you travel outside London?",
      answer: "Yes, I travel throughout the UK. Travel expenses are calculated based on distance and may include accommodation costs for visits requiring overnight stays."
    },
    {
      question: "Can sessions be adapted for SEN students?",
      answer: "Absolutely! I have extensive experience working with children with special educational needs and can adapt sessions accordingly. Please discuss specific requirements during booking."
    },
    {
      question: "What if we need to cancel?",
      answer: "Cancellations made more than 2 weeks in advance receive a full refund. Cancellations within 2 weeks may incur a 50% charge. Virtual visits can be rescheduled more flexibly."
    },
    {
      question: "Do you provide materials for teachers?",
      answer: "Yes! All visits include a comprehensive teacher resource pack with follow-up activities, writing prompts, and curriculum links to extend the learning experience."
    }
  ];

  const pricingDetails = [
    {
      type: "Half Day Visit",
      duration: "2-3 hours",
      price: "Upon Request",
      includes: [
        "2-3 sessions (assembly + workshops)",
        "Book signing time",
        "Teacher resource pack",
        "Pre-visit preparation materials",
        "Follow-up support"
      ],
      addons: [
        "Additional session: Price on request",
        "Extended book signing: Price on request",
        "Teacher training session: Price on request"
      ]
    },
    {
      type: "Full Day Visit",
      duration: "4-6 hours",
      price: "Upon Request",
      includes: [
        "4-6 sessions throughout the day",
        "Extended book signing",
        "Comprehensive teacher resources",
        "Pre-visit consultation call",
        "Follow-up materials and support",
        "Digital resources for classroom use"
      ],
      addons: [
        "Parent/teacher evening session: Price on request",
        "Staff training workshop: Price on request",
        "Custom curriculum materials: Price on request"
      ]
    },
    {
      type: "Virtual Visit",
      duration: "30-45 minutes",
      price: "Upon Request",
      includes: [
        "Live interactive presentation",
        "Q&A session",
        "Digital resources",
        "Recording of session (if requested)",
        "Follow-up activities"
      ],
      addons: [
        "Extended Q&A: Price on request",
        "Multiple class sessions: Price on request",
        "Custom digital resources: Price on request"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="container-width section-padding pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <Link to="/school-visits" className="flex items-center text-muted-foreground hover:text-primary transition-colors mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to School Visits
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Visit Details & Requirements</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Everything you need to know to plan the perfect author visit for your school. 
              From technical requirements to pricing details, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                <Heart className="w-4 h-4 mr-2" />
                Book Your Visit
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical & Space Requirements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ensuring your visit runs smoothly with the right setup and preparation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {requirements.map((requirement, index) => {
            const IconComponent = requirement.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{requirement.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Logistics */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visit Logistics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A step-by-step guide to the booking process and visit day
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {logistics.map((logistic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{logistic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {logistic.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start text-sm">
                      <Badge variant="outline" className="mr-3 mt-0.5 flex-shrink-0 w-6 h-6 p-0 flex items-center justify-center text-xs">
                        {stepIndex + 1}
                      </Badge>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Details */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Packages & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Custom packages with transparent pricing tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingDetails.map((package_, index) => (
            <Card key={index} className="relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{package_.type}</CardTitle>
                <div className="text-2xl font-bold text-primary">{package_.price}</div>
                <CardDescription>{package_.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">Includes:</h4>
                  <ul className="space-y-2">
                    {package_.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
          <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Optional Add-ons:</h4>
                  <ul className="space-y-2">
                    {package_.addons.map((addon, addonIndex) => (
                      <li key={addonIndex} className="flex items-start text-sm text-muted-foreground">
                        <AlertCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Additional Information</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Travel expenses calculated separately</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Flexible scheduling available</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions about author visits answered
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-width section-padding">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Book?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions or ready to schedule your visit? I'm here to help create the perfect 
            experience for your school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Heart className="w-4 h-4 mr-2" />
              Book Your Visit
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Call to Discuss
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Email Questions
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="w-4 h-4 mr-2" />
                <span>5-star rated visits</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Full support included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthorVisitDetails;