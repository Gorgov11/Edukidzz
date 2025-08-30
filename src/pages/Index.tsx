import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import About from "@/components/About";
import AuthorVisits from "@/components/AuthorVisits";
import FreeResources from "@/components/FreeResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Books />
        <About />
        <AuthorVisits />
        <FreeResources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
