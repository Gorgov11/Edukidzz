import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  MapPin, 
  Users, 
  Clock, 
  Star,
  ArrowLeft,
  BookOpen,
  Camera,
  Heart,
  Sparkles,
  CheckCircle,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { authorVisits } from '@/data/authorVisits';

const AuthorVisitPage = () => {
  const { id } = useParams<{ id: string }>();
  const visit = authorVisits.find(v => v.id === id);

  if (!visit) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />
        <div className="container-width section-padding pt-20 pb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Visit Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">The requested author visit could not be found.</p>
          <Link to="/school-visits">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to School Visits
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book-fair': return BookOpen;
      case 'school-visit': return Users;
      case 'nursery-visit': return Heart;
      case 'library-event': return BookOpen;
      case 'media': return Camera;
      case 'festival': return Sparkles;
      case 'bookstore': return BookOpen;
      case 'conference': return Users;
      default: return BookOpen;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book-fair': return 'bg-blue-100 text-blue-800';
      case 'school-visit': return 'bg-green-100 text-green-800';
      case 'nursery-visit': return 'bg-pink-100 text-pink-800';
      case 'library-event': return 'bg-purple-100 text-purple-800';
      case 'media': return 'bg-orange-100 text-orange-800';
      case 'festival': return 'bg-yellow-100 text-yellow-800';
      case 'bookstore': return 'bg-indigo-100 text-indigo-800';
      case 'conference': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const TypeIcon = getTypeIcon(visit.type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      {/* Hero Section */}
      <section className="container-width section-padding pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/school-visits">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Visits
              </Button>
            </Link>
          </div>

          {/* Visit Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <TypeIcon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{visit.title}</h1>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Badge className={`${getTypeColor(visit.type)} border-0`}>
                    {visit.type.replace('-', ' ').toUpperCase()}
                  </Badge>
                  {visit.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {visit.description}
            </p>

            {/* Visit Details */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <div className="text-center">
                  <div className="font-semibold text-foreground">{visit.date}</div>
                  <div className="text-sm text-muted-foreground">Date</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <div className="text-center">
                  <div className="font-semibold text-foreground">{visit.location}</div>
                  <div className="text-sm text-muted-foreground">Location</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-5 h-5 text-primary mr-2" />
                <div className="text-center">
                  <div className="font-semibold text-foreground">{visit.audience}</div>
                  <div className="text-sm text-muted-foreground">Audience</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary mr-2" />
                <div className="text-center">
                  <div className="font-semibold text-foreground">{visit.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visit Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {visit.highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Moments */}
      <section className="container-width section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Key Moments</h2>
          <div className="space-y-6">
            {visit.keyMoments.map((moment, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{moment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary mr-2" />
                Visit Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">{visit.impact}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      {visit.testimonials && visit.testimonials.length > 0 && (
        <section className="container-width section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">What People Said</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {visit.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4 italic">
                      <Quote className="w-4 h-4 inline mr-1" />
                      {testimonial.quote}
                    </blockquote>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container-width section-padding">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Book a Similar Visit</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in hosting a similar author visit at your school, library, or event? 
            Let's create an unforgettable experience for your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Heart className="w-4 h-4 mr-2" />
              Book Your Visit
            </Button>
            <Link to="/school-visits">
              <Button variant="outline" size="lg">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Visits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthorVisitPage;
