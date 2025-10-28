import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Play, 
  Camera, 
  Mic, 
  FileText, 
  Image, 
  Video, 
  Calendar,
  ExternalLink,
  Heart,
  Star,
  Users,
  BookOpen,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

// Import available images
import dinaPhotoAlt from "@/assets/author-photos/dina-author-photo-alt.jpg";
import classroomVisit from "@/assets/classroom-visit.jpg";
import billyBearCover from "@/assets/book-covers/billy-bear-cover-alt.jpg";
import sparkDragonCover from "@/assets/book-covers/spark-dragon-cover-alt.jpg";

const Media = () => {
  const pressKit = [
    {
      title: "Author Bio",
      description: "Professional biography and background information",
      type: "text",
      icon: FileText,
      download: true
    },
    {
      title: "High-Res Author Photos",
      description: "Professional headshots for press use",
      type: "image",
      icon: Camera,
      download: true,
      images: [dinaPhotoAlt]
    },
    {
      title: "Book Cover Images",
      description: "High-resolution book covers for media use",
      type: "image",
      icon: BookOpen,
      download: true,
      images: [billyBearCover, sparkDragonCover]
    },
    {
      title: "Press Release Template",
      description: "Template for book launch announcements",
      type: "text",
      icon: FileText,
      download: true
    }
  ];

  const interviews = [
    {
      title: "Early Years Education Podcast",
      description: "Discussing the importance of storytelling in early childhood development",
      date: "March 2024",
      type: "podcast",
      icon: Mic,
      platform: "Spotify",
      duration: "45 minutes",
      status: "available"
    },
    {
      title: "Author Spotlight Interview",
      description: "Behind the scenes of writing children's books",
      date: "February 2024",
      type: "video",
      icon: Video,
      platform: "YouTube",
      duration: "20 minutes",
      status: "available"
    },
    {
      title: "Parenting Today Radio",
      description: "Tips for fostering a love of reading in young children",
      date: "January 2024",
      type: "radio",
      icon: Mic,
      platform: "Radio",
      duration: "30 minutes",
      status: "available"
    },
    {
      title: "Educational Conference Panel",
      description: "The role of authors in educational settings",
      date: "December 2023",
      type: "video",
      icon: Video,
      platform: "Conference Live",
      duration: "60 minutes",
      status: "available"
    }
  ];

  const pressCoverage = [
    {
      title: "Local Author Inspires Young Readers",
      source: "UAE Today",
      date: "March 15, 2024",
      type: "article",
      icon: FileText,
      excerpt: "Dina O. Nasr's latest book 'Billy Bear's Brown Hair' continues to captivate young readers across the UAE...",
      link: "#"
    },
    {
      title: "Educational Author Visits Schools",
      source: "Education Weekly",
      date: "February 28, 2024",
      type: "article",
      icon: FileText,
      excerpt: "Author and educator Dina O. Nasr brings storytelling magic to classrooms throughout the region...",
      link: "#"
    },
    {
      title: "Children's Book Review: Spark the Sparkly Dragon",
      source: "Book Review Monthly",
      date: "February 10, 2024",
      type: "review",
      icon: Star,
      excerpt: "A delightful tale that teaches emotional literacy through the adventures of a color-changing dragon...",
      link: "#"
    },
    {
      title: "Author Interview: The Power of Storytelling",
      source: "Parenting Magazine",
      date: "January 22, 2024",
      type: "interview",
      icon: Mic,
      excerpt: "We sat down with Dina O. Nasr to discuss how stories shape young minds and build emotional intelligence...",
      link: "#"
    }
  ];

  const photos = [
    {
      title: "Author Headshot",
      description: "Professional portrait for press use",
      image: dinaPhotoAlt,
      category: "Professional",
      download: true
    },
    {
      title: "Classroom Visit",
      description: "Engaging with students during author visit",
      image: classroomVisit,
      category: "Events",
      download: true
    },
    {
      title: "Book Signing Event",
      description: "Meeting young readers at Sharjah Book Fair",
      image: classroomVisit, // Using available image as placeholder
      category: "Events",
      download: true
    }
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@dinaauthor",
      followers: "2.5K",
      icon: Camera,
      color: "bg-pink-500",
      description: "Behind-the-scenes content and book updates"
    },
    {
      platform: "Facebook",
      handle: "Dina O. Nasr Author",
      followers: "1.8K",
      icon: Users,
      color: "bg-blue-600",
      description: "Community updates and educational content"
    },
    {
      platform: "YouTube",
      handle: "@dinaauthor",
      followers: "850",
      icon: Video,
      color: "bg-red-600",
      description: "Storytelling videos and author interviews"
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
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Media Center</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Press materials, interviews, photos, and media resources for journalists, 
            bloggers, and media professionals covering children's literature and education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Download className="w-4 h-4 mr-2" />
              Download Press Kit
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              Contact Media Team
            </Button>
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Press Kit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Downloadable resources for media professionals and journalists
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressKit.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  {item.download && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Interviews */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Interviews & Appearances</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent interviews, podcasts, and media appearances
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {interviews.map((interview, index) => {
            const IconComponent = interview.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{interview.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {interview.platform}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {interview.duration}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      {interview.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{interview.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{interview.date}</span>
                    <Button variant="outline" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Watch/Listen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Press Coverage */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Press Coverage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent articles, reviews, and media mentions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pressCoverage.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {article.source}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {article.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container-width section-padding bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Photo Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-quality images available for media use
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {photo.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{photo.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{photo.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Media */}
      <section className="container-width section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Social Media</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with Dina on social media platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {socialMedia.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{social.platform}</CardTitle>
                  <CardDescription className="text-lg font-medium">{social.handle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-sm">
                      {social.followers} followers
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{social.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-width section-padding">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Media Inquiries</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For interview requests, press inquiries, or media partnerships, 
            please contact us directly. We're always happy to discuss children's 
            literature and educational topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-hero">
              <Heart className="w-4 h-4 mr-2" />
              Contact Media Team
            </Button>
            <Button variant="outline" size="lg">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-center">
                <Sparkles className="w-4 h-4 mr-2" />
                <span>Quick response guaranteed</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="w-4 h-4 mr-2" />
                <span>High-quality content available</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Flexible scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;