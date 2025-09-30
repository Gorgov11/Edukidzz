import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SchoolVisits = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container-width section-padding">
        <h1 className="text-3xl font-bold mb-4">School Visits</h1>
        <p className="text-muted-foreground mb-6">
          Book engaging author-led sessions tailored for primary and early years. Assemblies, workshops, and Q&A available.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Interactive readings and storytelling</li>
          <li>Creative writing and character workshops</li>
          <li>Teacher resources and follow-up activities</li>
          <li>Flexible session formats: in-person and virtual</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolVisits;



