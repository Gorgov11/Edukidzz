import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen } from "lucide-react";

const Gallery = () => {
  // Placeholder for book signing images - replace with actual imports when images are added
  // const bookSigningImages = [
  //   { src: "/src/assets/book-signing/sharjah-2023-1.jpg", alt: "Dina signing books at Sharjah Book Fair" },
  //   { src: "/src/assets/book-signing/sharjah-2023-2.jpg", alt: "Meet the author session" },
  //   { src: "/src/assets/book-signing/sharjah-2023-3.jpg", alt: "Children with signed copies" },
  //   { src: "/src/assets/book-signing/sharjah-2023-4.jpg", alt: "Austin Macauley Publishers booth" },
  //   { src: "/src/assets/book-signing/sharjah-2023-5.jpg", alt: "Family with signed book" },
  //   { src: "/src/assets/book-signing/sharjah-2023-6.jpg", alt: "Dina with young readers" }
  // ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-mint">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Media & <span className="text-secondary">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capturing special moments from author events, book signings, and educational sessions.
          </p>
        </div>

        {/* Sharjah International Book Fair 2023 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">November 2023</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Sharjah International Book Fair 2023
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Spark the Sparkly Dragon</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Austin Macauley Publishers</span>
              </div>
            </div>
          </div>

          <Card className="bg-background/80 backdrop-blur-sm border-border shadow-card">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In November 2023, children's author Dina Osama was proudly featured at the Sharjah International Book Fair. 
                  She hosted a book signing and meet-the-author session for her debut title, <strong>Spark the Sparkly Dragon</strong>, 
                  at the Austin Macauley Publishers booth.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The event created a heartwarming atmosphere as parents and their children stopped by to meet Dina and leave 
                  with personally signed copies of the book. Seeing families walk away with smiles and excitement made the 
                  occasion a truly memorable milestone in her author journey.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Image Grid - Placeholder for now */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder cards - replace with actual images when added */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card-primary group cursor-pointer hover:scale-105 transition-transform">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <div className="w-full h-64 bg-muted/50 flex items-center justify-center">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Book Signing Photo {i}</p>
                        <p className="text-xs text-muted-foreground/70 mt-1">Add to assets/book-signing/</p>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-accent text-accent-foreground">Sharjah 2023</Badge>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {i === 1 && "Book Signing Session"}
                    {i === 2 && "Meet the Author"}
                    {i === 3 && "Children with Signed Copies"}
                    {i === 4 && "Austin Macauley Booth"}
                    {i === 5 && "Family Moment"}
                    {i === 6 && "Young Readers"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {i === 1 && "Dina signing copies of Spark the Sparkly Dragon"}
                    {i === 2 && "Interactive meet-the-author session"}
                    {i === 3 && "Happy children with their signed books"}
                    {i === 4 && "Official publisher booth display"}
                    {i === 5 && "Heartwarming family interaction"}
                    {i === 6 && "Engaging with young book lovers"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Events Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">More Highlights Coming Soon</h3>
          <p className="text-muted-foreground mb-6">
            Stay tuned for photos from upcoming author visits, school sessions, and educational events.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">School Visits</Badge>
            <Badge variant="outline">Webinar Sessions</Badge>
            <Badge variant="outline">Workshop Events</Badge>
            <Badge variant="outline">Reading Sessions</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;





