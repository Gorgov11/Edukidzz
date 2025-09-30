import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Books from "@/components/Books";
import About from "@/components/About";
import EnhancedAuthorVisits from "@/components/EnhancedAuthorVisits";
import MorningPlayHub from "@/components/MorningPlayHub";
import FreeResources from "@/components/FreeResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NewsletterModal from "@/components/NewsletterModal";
import ChatAssistant from "@/components/ChatAssistant";
import Sessions from "@/components/Sessions";
import Gallery from "@/components/Gallery";

const Index = () => {
  // Main page component
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <NewsletterModal />
        <Hero />
        <Books />
        <About />
        <Sessions />
        <EnhancedAuthorVisits />
        <MorningPlayHub />
        <FreeResources />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
