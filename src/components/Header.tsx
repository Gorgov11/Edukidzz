import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dina O. Nasr</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Children's Author & Educator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#books" className="text-foreground hover:text-primary transition-colors scroll-smooth">Books</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors scroll-smooth">About</a>
            <a href="#visits" className="text-foreground hover:text-primary transition-colors scroll-smooth">Author Visits</a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors scroll-smooth">Free Resources</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors scroll-smooth">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#visits">
              <Button className="btn-hero">Book a Visit</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#books" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Books</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="#visits" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Author Visits</a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Free Resources</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
              <a href="#visits" onClick={toggleMenu}>
                <Button className="btn-hero w-full mt-4">Book a Visit</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;