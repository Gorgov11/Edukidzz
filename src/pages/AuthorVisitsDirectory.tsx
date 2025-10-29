import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Calendar,
  MapPin, 
  Users, 
  Clock, 
  Star,
  BookOpen,
  Camera,
  Heart,
  Sparkles,
  Filter,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { authorVisits } from '@/data/authorVisits';

const AuthorVisitsDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const visitTypes = [
    { id: 'all', label: 'All Visits', icon: BookOpen },
    { id: 'book-fair', label: 'Book Fairs', icon: BookOpen },
    { id: 'school-visit', label: 'School Visits', icon: Users },
    { id: 'nursery-visit', label: 'Nursery Visits', icon: Heart },
    { id: 'library-event', label: 'Library Events', icon: BookOpen },
    { id: 'media', label: 'Media', icon: Camera },
    { id: 'festival', label: 'Festivals', icon: Sparkles },
    { id: 'bookstore', label: 'Bookstores', icon: BookOpen },
    { id: 'conference', label: 'Conferences', icon: Users }
  ];

  const years = ['all', '2024', '2023', '2022'];

  const filteredVisits = useMemo(() => {
    return authorVisits.filter(visit => {
      const matchesSearch = visit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           visit.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           visit.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === 'all' || visit.type === selectedType;
      
      const matchesYear = selectedYear === 'all' || visit.date.includes(selectedYear);
      
      return matchesSearch && matchesType && matchesYear;
    });
  }, [searchTerm, selectedType, selectedYear]);

  const featuredVisits = authorVisits.filter(visit => visit.featured);
  const recentVisits = authorVisits.slice(0, 6);

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Author Visits Directory</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore our comprehensive collection of author visits, book fairs, and educational events. 
            Each visit tells a unique story of inspiration, learning, and community engagement.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{authorVisits.length}</div>
              <div className="text-sm text-muted-foreground">Total Visits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{featuredVisits.length}</div>
              <div className="text-sm text-muted-foreground">Featured Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{visitTypes.length - 1}</div>
              <div className="text-sm text-muted-foreground">Visit Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">People Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Visits */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Visits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting our most impactful and memorable author visits and events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVisits.slice(0, 6).map((visit) => {
            const TypeIcon = getTypeIcon(visit.type);
            return (
              <Card key={visit.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <Link to={`/author-visit/${visit.id}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <TypeIcon className="w-5 h-5 text-primary mr-2" />
                        <Badge className={`${getTypeColor(visit.type)} border-0 text-xs`}>
                          {visit.type.replace('-', ' ').toUpperCase()}
                        </Badge>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {visit.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {visit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{visit.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{visit.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{visit.audience}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-primary group-hover:text-primary-foreground">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container-width section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore All Visits</h2>
            <p className="text-lg text-muted-foreground">
              Search and filter through our complete collection of author visits
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search visits by title, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Type:</span>
            </div>
            {visitTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type.id)}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-3 h-3" />
                  {type.label}
                </Button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Year:</span>
            </div>
            {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
              >
                {year === 'all' ? 'All Years' : year}
              </Button>
            ))}
          </div>

          {/* Results */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredVisits.length} of {authorVisits.length} visits
            </p>
          </div>
        </div>
      </section>

      {/* All Visits Grid */}
      <section className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVisits.map((visit) => {
              const TypeIcon = getTypeIcon(visit.type);
              return (
                <Card key={visit.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={`/author-visit/${visit.id}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <TypeIcon className="w-4 h-4 text-primary mr-2" />
                          <Badge className={`${getTypeColor(visit.type)} border-0 text-xs`}>
                            {visit.type.replace('-', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        {visit.featured && (
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {visit.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {visit.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{visit.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{visit.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <span>{visit.audience}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{visit.duration}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-primary group-hover:text-primary-foreground">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              );
            })}
          </div>

          {filteredVisits.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No visits found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedYear('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-width section-padding">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Book Your Author Visit</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inspired by these visits? Let's create a memorable experience for your school, 
            library, or event. Contact me to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Heart className="w-4 h-4 mr-2" />
              Book Your Visit
            </Button>
            <Link to="/school-visits">
              <Button variant="outline" size="lg">
                <BookOpen className="w-4 h-4 mr-2" />
                View School Visits
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AuthorVisitsDirectory;
