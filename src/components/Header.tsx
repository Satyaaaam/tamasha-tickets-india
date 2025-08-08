import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TicketBazaar
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Cricket</a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Bollywood</a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Concerts</a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Theater</a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">Festivals</a>
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
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};