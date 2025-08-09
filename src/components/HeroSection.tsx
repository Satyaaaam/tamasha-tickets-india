import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Experience India's
            </span>
            <br />
            <span className="text-foreground">
              Greatest Events
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From cricket matches to Bollywood concerts, discover and book tickets for the most amazing events across India
          </p>
          
          {/* Search Box */}
          <div className="bg-card/80 backdrop-blur rounded-xl p-6 shadow-elegant max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search for events, artists, teams..."
                  className="pl-12 h-12 text-lg"
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
                <Select>
                  <SelectTrigger className="pl-12 h-12">
                    <SelectValue placeholder="Select city..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="kolkata">Kolkata</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="gurgaon">Gurgaon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="h-12 text-lg font-semibold bg-gradient-hero hover:opacity-90 transition-opacity" asChild>
                <a href="/events">Find Tickets</a>
              </Button>
            </div>
          </div>
          
          {/* Popular Categories */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Cricket World Cup', 'AR Rahman Concert', 'IPL 2024', 'Bollywood Night', 'Classical Music'].map((category) => (
              <Button
                key={category}
                variant="secondary"
                className="bg-card/60 backdrop-blur hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};