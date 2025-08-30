import { BookOpen, Heart, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dina O. Nasr</h3>
                <p className="text-sm opacity-80">Children's Author & Educator</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4 max-w-md">
              Bringing imagination, learning, and conversations to life through stories and play. 
              Inspiring confident readers and curious little learners across the UAE and beyond.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Dina</a></li>
              <li><a href="#books" className="hover:opacity-100 transition-opacity">My Books</a></li>
              <li><a href="#visits" className="hover:opacity-100 transition-opacity">Author Visits</a></li>
              <li><a href="#resources" className="hover:opacity-100 transition-opacity">Free Resources</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100 transition-opacity">School Visits</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Nursery Sessions</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Morning Play Hub</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Teacher Workshops</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Collaborations</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm opacity-80">
              <span>© 2024 Dina O. Nasr. All rights reserved.</span>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm opacity-80">
              <Mail className="w-4 h-4" />
              <a href="mailto:edukidzzbooks@gmail.com" className="hover:opacity-100 transition-opacity">
                edukidzzbooks@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm opacity-60">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> for young minds everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;