import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Heart,
  Clock,
  Users
} from "lucide-react";

const featuredEvents = [
  {
    id: 1,
    title: "IPL Final 2024",
    subtitle: "Mumbai Indians vs Chennai Super Kings",
    venue: "Wankhede Stadium, Mumbai",
    date: "May 26, 2024",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: "₹2,500",
    category: "Cricket",
    rating: 4.8,
    trending: true,
    attendees: "45K+"
  },
  {
    id: 2,
    title: "AR Rahman Live in Concert",
    subtitle: "Symphony of Dreams Tour",
    venue: "NSCI Dome, Mumbai",
    date: "June 15, 2024",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: "₹1,999",
    category: "Music",
    rating: 4.9,
    trending: false,
    attendees: "12K+"
  },
  {
    id: 3,
    title: "Bollywood Night Extravaganza",
    subtitle: "Featuring Top Playback Singers",
    venue: "Jawaharlal Nehru Stadium, Delhi",
    date: "July 8, 2024",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: "₹999",
    category: "Bollywood",
    rating: 4.7,
    trending: true,
    attendees: "25K+"
  },
  {
    id: 4,
    title: "Classical Music Festival",
    subtitle: "Ragas Under the Stars",
    venue: "Chowdiah Memorial Hall, Bangalore",
    date: "June 22, 2024",
    time: "6:30 PM",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    price: "₹799",
    category: "Classical",
    rating: 4.6,
    trending: false,
    attendees: "3K+"
  }
];

export const FeaturedEvents = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss these incredible events happening near you
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            View All Events
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredEvents.map((event) => (
            <Card 
              key={event.id}
              className="group cursor-pointer hover:shadow-saffron transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-card border-0"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {event.category}
                  </Badge>
                  {event.trending && (
                    <Badge className="bg-secondary text-secondary-foreground">
                      Trending
                    </Badge>
                  )}
                </div>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-muted-foreground">{event.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {event.subtitle}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold text-primary">
                      {event.price}
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};