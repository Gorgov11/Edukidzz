import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

type ImageEntry = {
  id: string;
  src: string;
  fileName: string;
  dir: string; // top-level folder under author-visits
};

const toTitle = (slug: string) =>
  slug
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());

const AuthorVisitsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<ImageEntry | null>(null);
  const [selectedDir, setSelectedDir] = useState<string>('all');

  // Auto-import all images under src/assets/author-visits (recursive)
  const images = useMemo(() => {
    const modules = import.meta.glob('@/assets/author-visits/**/*.{png,jpg,jpeg,JPG,JPEG,PNG}', { eager: true }) as Record<string, any>;
    const entries: ImageEntry[] = Object.keys(modules).map((key, idx) => {
      // key example: '/src/assets/author-visits/Sharjah Book Fair - 2023/IMG_3623.jpg'
      const parts = key.split('/author-visits/')[1]?.split('/') || [];
      const dir = parts.length > 1 ? parts[0] : 'misc';
      const src = (modules[key] as any).default ?? (modules[key] as any);
      const fileName = parts[parts.length - 1] || `image-${idx}`;
      return { id: `${dir}-${idx}`, src, fileName, dir };
    });
    return entries.sort((a, b) => a.fileName.localeCompare(b.fileName));
  }, []);

  const directories = useMemo(() => {
    const set = new Set(images.map((i) => i.dir));
    return ['all', ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [images]);

  const filtered = selectedDir === 'all' ? images : images.filter((i) => i.dir === selectedDir);

  const open = (img: ImageEntry) => setSelectedImage(img);
  const close = () => setSelectedImage(null);
  const navigate = (dir: 'prev' | 'next') => {
    if (!selectedImage) return;
    const list = filtered;
    const idx = list.findIndex((i) => i.id === selectedImage.id);
    const nextIdx = dir === 'prev' ? (idx > 0 ? idx - 1 : list.length - 1) : (idx < list.length - 1 ? idx + 1 : 0);
    setSelectedImage(list[nextIdx]);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Author Visits Gallery</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, auto-organized gallery of all Author Visits folders.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {directories.map((dir) => (
            <Button key={dir} size="sm" variant={selectedDir === dir ? 'default' : 'outline'} onClick={() => setSelectedDir(dir)}>
              {dir === 'all' ? 'All' : toTitle(dir)}
            </Button>
          ))}
        </div>

        {/* Grouped by directory when viewing All */}
        {selectedDir === 'all' ? (
          <div className="space-y-10">
            {directories.filter((d) => d !== 'all').map((dir) => {
              const group = images.filter((i) => i.dir === dir);
              if (group.length === 0) return null;
              return (
                <div key={dir}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{toTitle(dir)}</h3>
                    <Badge variant="secondary">{group.length} photos</Badge>
                  </div>
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"></div>
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                    {group.map((image) => (
                      <div key={image.id} className="mb-4 break-inside-avoid cursor-pointer group" onClick={() => open(image)}>
                        <img src={image.src} alt={image.fileName} className="w-full h-auto rounded-lg shadow-sm group-hover:opacity-95 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {filtered.map((image) => (
              <div key={image.id} className="mb-4 break-inside-avoid cursor-pointer group" onClick={() => open(image)}>
                <img src={image.src} alt={image.fileName} className="w-full h-auto rounded-lg shadow-sm group-hover:opacity-95 transition" />
              </div>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={close}>
            <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <Button variant="outline" size="sm" className="absolute top-4 right-4 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70" onClick={close}>
                <X className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70" onClick={() => navigate('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70" onClick={() => navigate('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <img src={selectedImage.src} alt={selectedImage.fileName} className="w-full h-full object-contain rounded-lg" />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{toTitle(selectedImage.dir)}</h3>
                <p className="text-sm opacity-90">{selectedImage.fileName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthorVisitsGallery;
