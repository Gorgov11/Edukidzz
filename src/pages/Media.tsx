import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Media = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-width section-padding">
        <h1 className="text-3xl font-bold mb-4">Media</h1>
        <p className="text-muted-foreground mb-6">Press coverage, interviews, and downloadable assets.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-4 border border-border rounded-lg">
            <h2 className="font-semibold mb-2">Press Kit</h2>
            <p className="text-muted-foreground">Author bio, headshots, and book covers.</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h2 className="font-semibold mb-2">Interviews</h2>
            <p className="text-muted-foreground">Podcast episodes and video interviews.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;



