import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Camera, Calendar, MapPin, Star, ArrowRight, Images, BookOpen, Users, Info } from 'lucide-react';
import AuthorVisitsGallery from '@/components/AuthorVisitsGallery';
import { authorVisits } from '@/data/authorVisits';

// Import a small set of known featured images for the slider
import slide1 from '@/assets/author-visits/2003d5cb-f336-4021-a165-b0dbce4d88ca.jpg';
import slide2 from '@/assets/author-visits/IMG_3623.jpg';
import slide3 from '@/assets/author-visits/IMG_3632.jpg';
import slide4 from '@/assets/author-visits/Sharjah book fair 2023-book signing.png';

const AuthorVisitsHub = () => {
  const slides = useMemo(() => [
    { src: slide1, title: 'Sharjah Book Fair 2023', subtitle: 'Book Signing', tag: 'Featured' },
    { src: slide2, title: 'Sharjah Book Fair 2023', subtitle: 'Meet & Greet', tag: 'Featured' },
    { src: slide3, title: 'Sharjah Book Fair 2023', subtitle: 'Readers & Families', tag: 'Featured' },
    { src: slide4, title: 'Sharjah Book Fair 2023', subtitle: 'Event Highlight', tag: 'Featured' },
  ], []);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  const featured = authorVisits.filter(v => v.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      {/* Hero with Auto Slider */}
      <section className="container-width section-padding pt-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-2xl bg-muted">
            {/* Slides */}
            <div className="relative h-72 md:h-96">
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.src}
                  alt={s.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}

              {/* Overlay content */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Camera className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide">{slides[active]?.tag}</span>
                </div>
                <div className="text-lg font-semibold">{slides[active]?.title}</div>
                <div className="text-sm opacity-90">{slides[active]?.subtitle}</div>
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} className={`w-2 h-2 rounded-full ${i === active ? 'bg-white' : 'bg-white/50'}`} onClick={() => setActive(i)} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Author Visits Hub</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore featured moments, browse the full directory, and view detailed information about school visits and author visit logistics.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/author-visits"><Button className="w-full"><Images className="w-4 h-4 mr-2" />All Visits Directory</Button></Link>
              <Link to="/school-visits"><Button variant="outline" className="w-full"><Users className="w-4 h-4 mr-2" />School Visits</Button></Link>
              <Link to="/author-visit-details"><Button variant="outline" className="w-full"><Info className="w-4 h-4 mr-2" />Visit Details</Button></Link>
              <Link to="/"><Button variant="outline" className="w-full"><BookOpen className="w-4 h-4 mr-2" />Author Visits Home</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Visits Cards */}
      <section className="container-width section-padding">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">Featured Visits</h2>
          <p className="text-muted-foreground">A selection of highlighted events with impact, reach, and great photos</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((v) => (
            <Card key={v.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-primary-foreground"><Star className="w-3 h-3 mr-1" />Featured</Badge>
                    <span className="text-sm text-muted-foreground flex items-center"><Calendar className="w-3 h-3 mr-1" />{v.date}</span>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center"><MapPin className="w-3 h-3 mr-1" />{v.location}</span>
                </div>
                <div className="font-semibold text-foreground mb-1">{v.title}</div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{v.description}</p>
                <Link to={`/author-visit/${v.id}`} className="inline-flex items-center text-primary">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Full Gallery */}
      <AuthorVisitsGallery />

      <Footer />
    </div>
  );
};

export default AuthorVisitsHub;
