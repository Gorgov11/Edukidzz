import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/dinaauthor", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/dinaauthor", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/@dinaauthor", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@dinaauthor.com", label: "Email" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a href="/" aria-label="Home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dina O. Nasr</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Children's Author & Early Years Educator</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <a href="/#about" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">About</a>
              <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 bg-popover text-popover-foreground border border-border rounded-md shadow-lg min-w-[200px] transition-opacity">
                <a href="/#about" className="block px-4 py-2 hover:bg-muted/70 transition-colors">About Me</a>
                <a href="/#books" className="block px-4 py-2 hover:bg-muted/70 transition-colors">Books</a>
                <a href="/#sessions" className="block px-4 py-2 hover:bg-muted/70 transition-colors">Services</a>
              </div>
            </div>
            <div className="relative group">
              <a href="/#visits" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">Author Visits</a>
              <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 bg-popover text-popover-foreground border border-border rounded-md shadow-lg min-w-[200px] transition-opacity">
                <a href="/school-visits" className="block px-4 py-2 hover:bg-muted/70 transition-colors">School Visits</a>
                <a href="/author-visit-details" className="block px-4 py-2 hover:bg-muted/70 transition-colors">Details</a>
              </div>
            </div>
            <a href="/media" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">Media</a>
            <a href="/#resources" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">Free Resources</a>
            <a href="/#gallery" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">Gallery</a>
            <a href="/#contact" className="text-foreground/90 hover:text-accent font-semibold text-sm lg:text-[15px] tracking-wide transition-colors">Contact</a>
          </nav>

          {/* Social Media Links & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
            
            {/* Divider */}
            <div className="w-px h-6 bg-border"></div>
            
            {/* CTA Button */}
            <a href="/#visits">
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
          <div className="md:hidden py-3 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <a href="/#books" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Books</a>
              <a href="/#about" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
              <a href="/#sessions" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Webinars & Sessions</a>
              <div className="space-y-1">
                <span className="text-foreground font-semibold text-base">About</span>
                <div className="ml-3 flex flex-col">
                  <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>About Me</a>
                  <a href="/#books" className="text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Books</a>
                  <a href="/#sessions" className="text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Services</a>
                </div>
              </div>

              <div className="space-y-1">
                <a href="/#visits" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Author Visits</a>
                <div className="ml-3 flex flex-col">
                  <a href="/school-visits" className="text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>School Visits</a>
                  <a href="/author-visit-details" className="text-muted-foreground hover:text-primary transition-colors" onClick={toggleMenu}>Details</a>
                </div>
              </div>

              <a href="/media" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Media</a>
              <a href="/#resources" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Free Resources</a>
              <a href="/#gallery" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Gallery</a>
              <a href="/#contact" className="text-foreground font-semibold text-base hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
              
              {/* Mobile Social Media Links */}
              <div className="flex items-center justify-center space-x-4 py-3 border-t border-border/50 mt-2">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </a>
                  );
                })}
              </div>
              
              <a href="/#visits" onClick={toggleMenu}>
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