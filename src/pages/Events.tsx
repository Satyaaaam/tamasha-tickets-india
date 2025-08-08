import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Search, Filter } from "lucide-react";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "India vs Australia Test Match",
      venue: "Eden Gardens, Kolkata",
      date: "2024-02-15",
      time: "9:30 AM",
      category: "cricket",
      price: "₹1,500",
      image: "/placeholder.svg",
      status: "available"
    },
    {
      id: 2,
      title: "Bollywood Night with Arijit Singh",
      venue: "NSCI Stadium, Mumbai",
      date: "2024-02-20",
      time: "7:00 PM",
      category: "bollywood",
      price: "₹3,000",
      image: "/placeholder.svg",
      status: "selling fast"
    },
    {
      id: 3,
      title: "Sunburn Goa Electronic Festival",
      venue: "Vagator Beach, Goa",
      date: "2024-03-01",
      time: "4:00 PM",
      category: "music",
      price: "₹2,500",
      image: "/placeholder.svg",
      status: "available"
    },
    {
      id: 4,
      title: "Kathak Classical Dance Performance",
      venue: "India Habitat Centre, Delhi",
      date: "2024-02-25",
      time: "6:30 PM",
      category: "cultural",
      price: "₹800",
      image: "/placeholder.svg",
      status: "limited"
    },
    {
      id: 5,
      title: "Comedy Night with Zakir Khan",
      venue: "Phoenix MarketCity, Bangalore",
      date: "2024-03-05",
      time: "8:00 PM",
      category: "comedy",
      price: "₹1,200",
      image: "/placeholder.svg",
      status: "available"
    },
    {
      id: 6,
      title: "Diwali Mela & Cultural Festival",
      venue: "Pragati Maidan, Delhi",
      date: "2024-10-30",
      time: "5:00 PM",
      category: "festival",
      price: "₹500",
      image: "/placeholder.svg",
      status: "early bird"
    }
  ];

  const categories = [
    { id: "all", name: "All Events" },
    { id: "cricket", name: "Cricket" },
    { id: "bollywood", name: "Bollywood" },
    { id: "music", name: "Music" },
    { id: "cultural", name: "Cultural" },
    { id: "comedy", name: "Comedy" },
    { id: "festival", name: "Festivals" }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.venue.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">Browse Events</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search events, venues, artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={event.status === "selling fast" ? "destructive" : 
                            event.status === "limited" ? "secondary" : "default"}
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {event.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm truncate">{event.venue}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span className="text-sm">{event.date} • {event.time}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-primary">{event.price}</span>
                  <Button size="sm" className="rounded-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No events found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Events;