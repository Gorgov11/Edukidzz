import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Images, ArrowRight } from "lucide-react";

const HomeGallery = () => {
  const modules = import.meta.glob("@/assets/author-visits/**/*.{png,jpg,jpeg,JPG,JPEG,PNG}", { eager: true }) as Record<string, any>;
  const imgs = Object.keys(modules)
    .map((k) => (modules[k] as any).default ?? (modules[k] as any))
    .slice(0, 18); // show first 18 on homepage

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container-width section-padding">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Latest Author Visit Moments</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A quick look at recent visits. Explore the full gallery for all events.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {imgs.map((src: string, i: number) => (
            <div key={i} className="mb-4 break-inside-avoid">
              <img src={src} alt={`Author visit ${i + 1}`} className="w-full h-auto rounded-lg shadow-sm" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/author-visits">
            <Button size="lg" className="btn-hero">
              <Images className="w-4 h-4 mr-2" /> View Full Author Visits Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
          <div className="mt-3">
            <Badge variant="outline">Auto-updates as you add photos</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;





