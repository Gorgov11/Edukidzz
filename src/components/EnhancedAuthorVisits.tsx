import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Users, Clock, Phone, Mail, MapPin } from 'lucide-react';
import BookingSystem from './BookingSystem';

const EnhancedAuthorVisits = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const services = [
    {
      id: 'school-visit',
      name: 'School Author Visit',
      description: 'Interactive storytelling session for schools with reading activities and Q&A',
      duration: '60 minutes',
      maxParticipants: '30 students',
      highlights: ['Interactive storytelling', 'Reading activities', 'Q&A session', 'Book signing'],
      ageRange: 'Ages 4-12',
      color: 'primary'
    },
    {
      id: 'nursery-visit',
      name: 'Nursery Story Session',
      description: 'Age-appropriate storytelling for nursery children with props and activities',
      duration: '45 minutes',
      maxParticipants: '20 children',
      highlights: ['Story props', 'Action songs', 'Creative activities', 'Parent engagement'],
      ageRange: 'Ages 2-5',
      color: 'accent'
    },
    {
      id: 'library-event',
      name: 'Library Event',
      description: 'Public library storytelling event with craft activities',
      duration: '90 minutes',
      maxParticipants: '25 families',
      highlights: ['Public storytelling', 'Craft workshop', 'Family activities', 'Book sales'],
      ageRange: 'All ages',
      color: 'secondary'
    },
    {
      id: 'morning-play',
      name: 'Morning Play Hub',
      description: 'Educational play session for ages 2-5 with parent participation',
      duration: '2 hours',
      maxParticipants: '8 children + parents',
      highlights: ['STEAM activities', 'Sensory play', 'Early phonics', 'Parent guidance'],
      ageRange: 'Ages 2-5',
      color: 'primary'
    },
    {
      id: 'private-group',
      name: 'Private Group Session',
      description: 'Customized storytelling session for private groups',
      duration: '60 minutes',
      maxParticipants: '15 children',
      highlights: ['Customized content', 'Flexible timing', 'Special themes', 'Personal attention'],
      ageRange: 'Any age',
      color: 'accent'
    }
  ];

  if (showBookingForm) {
    return (
      <section id="booking" className="py-16 lg:py-24 bg-background">
        <div className="container-width section-padding">
          <div className="mb-8">
            <Button variant="outline" onClick={() => setShowBookingForm(false)}>
              ← Back to Services
            </Button>
          </div>
          <BookingSystem />
        </div>
      </section>
    );
  }

  return (
    <section id="visits" className="py-16 lg:py-24 bg-sage">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Educational <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Bring stories to life with interactive author visits, educational play sessions, 
            and memorable experiences that inspire young minds to love reading and learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-sm px-4 py-2">
              <MapPin className="h-4 w-4 mr-2" />
              UAE & Regional
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Phone className="h-4 w-4 mr-2" />
              In-Person & Virtual
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Flexible Scheduling
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.id} className="card-primary h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm font-medium">
                    Upon Request
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{service.maxParticipants}</span>
                  </div>
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-3">
                    {service.ageRange}
                  </Badge>
                  <h4 className="font-semibold mb-2">What's Included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full`}></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact & Booking */}
        <div className="bg-background/80 backdrop-blur-sm p-8 rounded-2xl border border-border shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Book Your Experience?
              </h3>
              <p className="text-muted-foreground mb-6">
                Choose your preferred service and schedule your session. 
                I'll work with you to create an unforgettable experience for your children.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">edukidzzbooks@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-sm">Quick response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarIcon className="h-5 w-5 text-secondary" />
                  <span className="text-sm">Flexible scheduling available</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                className="btn-hero w-full text-lg py-3"
                onClick={() => setShowBookingForm(true)}
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Book Now - Online Booking
              </Button>
              
              <Button variant="outline" className="w-full text-lg py-3" asChild>
                <a href="mailto:edukidzzbooks@gmail.com?subject=Author Visit Inquiry">
                  <Mail className="h-5 w-5 mr-2" />
                  Email for Custom Requests
                </a>
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Secure online booking with instant confirmation
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How far in advance should I book?",
                answer: "I recommend booking at least 2-3 weeks in advance, especially during term time. However, I'm flexible and will try to accommodate last-minute requests when possible."
              },
              {
                question: "Do you offer virtual sessions?",
                answer: "Yes! I offer both in-person and virtual sessions. Virtual sessions work great for schools that want to connect multiple classrooms or for international bookings."
              },
              {
                question: "What age groups do you cater to?",
                answer: "My sessions are designed for children aged 2-12, with content specifically tailored to each age group. I can adapt stories and activities for mixed-age audiences too."
              },
              {
                question: "What do I need to prepare?",
                answer: "Just enthusiastic children ready to learn! I bring all necessary materials, props, and books. For some activities, I might request basic classroom supplies like paper and crayons."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAuthorVisits;