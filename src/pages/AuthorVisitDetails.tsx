import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AuthorVisitDetails = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-width section-padding">
        <h1 className="text-3xl font-bold mb-4">Author Visit Details</h1>
        <p className="text-muted-foreground mb-6">
          Everything you need to know about hosting an author visit: formats, duration, group sizes, AV requirements, and fees.
        </p>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Formats</h2>
            <p className="text-muted-foreground">Assemblies, class workshops, and virtual sessions.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Duration</h2>
            <p className="text-muted-foreground">30–60 minutes per session; flexible scheduling available.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Requirements</h2>
            <p className="text-muted-foreground">Projector/HDMI, microphone for large halls, and reading area.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorVisitDetails;



