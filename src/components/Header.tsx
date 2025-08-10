import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Heart, ShoppingCart, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TicketBazaar
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/events" className="text-foreground/60 hover:text-foreground transition-colors">Events</Link>
            <Link to="/sell-tickets" className="text-foreground/60 hover:text-foreground transition-colors">Sell Tickets</Link>
            <Link to="/how-it-works" className="text-foreground/60 hover:text-foreground transition-colors">How it Works</Link>
            <Link to="/about" className="text-foreground/60 hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events, artists, venues..."
              className="pl-10 w-80"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};