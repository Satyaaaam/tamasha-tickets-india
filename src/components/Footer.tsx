import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                TicketBazaar
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              India's premier ticket marketplace for unforgettable experiences. 
              From cricket matches to classical concerts, find your next adventure.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sell Tickets</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cricket</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Bollywood</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Music Concerts</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Theater & Drama</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Festivals</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest events and exclusive offers delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                  Subscribe
                </Button>
              </div>
              
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3" />
                  <span>support@ticketbazaar.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3" />
                  <span>1800-123-TICKET</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 TicketBazaar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};