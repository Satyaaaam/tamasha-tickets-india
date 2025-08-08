import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin, Clock, Users, Star, Heart, Share2, Ticket } from "lucide-react";

const EventDetails = () => {
  const { id } = useParams();
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);

  // Mock event data - in real app, this would be fetched based on ID
  const event = {
    id: 1,
    title: "India vs Australia Test Match",
    venue: "Eden Gardens, Kolkata",
    address: "Eden Gardens Rd, Maidan, Kolkata, West Bengal 700021",
    date: "2024-02-15",
    time: "9:30 AM",
    duration: "5 days",
    category: "Cricket",
    description: "Experience the thrill of Test cricket as India takes on Australia in this highly anticipated match at the iconic Eden Gardens. Watch the world's best cricketers battle it out in this traditional format of the game.",
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 1247,
    organizer: "BCCI",
    minAge: "All ages welcome"
  };

  const ticketTypes = [
    {
      id: "general",
      name: "General Admission",
      price: 1500,
      originalPrice: 2000,
      description: "General seating with great view of the match",
      available: 45,
      features: ["Stadium entry", "Basic seating", "Food court access"]
    },
    {
      id: "premium",
      name: "Premium Stand",
      price: 3500,
      originalPrice: 4500,
      description: "Premium seating with better view and amenities",
      available: 12,
      features: ["Premium seating", "Complimentary refreshments", "Air-conditioned lounge"]
    },
    {
      id: "vip",
      name: "VIP Box",
      price: 8000,
      originalPrice: 10000,
      description: "Exclusive VIP experience with luxury amenities",
      available: 3,
      features: ["Private box", "Catering included", "Meet & greet opportunities", "Valet parking"]
    }
  ];

  const toggleTicketSelection = (ticketId: string) => {
    setSelectedTickets(prev => 
      prev.includes(ticketId) 
        ? prev.filter(id => id !== ticketId)
        : [...prev, ticketId]
    );
  };

  const getTotalPrice = () => {
    return selectedTickets.reduce((total, ticketId) => {
      const ticket = ticketTypes.find(t => t.id === ticketId);
      return total + (ticket?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Header */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-background/90 backdrop-blur-sm text-foreground">
                    {event.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {event.title}
                  </h1>
                  <div className="flex items-center gap-2 text-white/90">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{event.rating} ({event.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Event Details */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Event Details</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{event.time}</p>
                      <p className="text-sm text-muted-foreground">IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{event.venue}</p>
                      <p className="text-sm text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{event.organizer}</p>
                      <p className="text-sm text-muted-foreground">Organizer</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-semibold mb-2">About This Event</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Important Information</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Minimum age: {event.minAge}</li>
                    <li>• Gates open 1 hour before start time</li>
                    <li>• Valid ID required for entry</li>
                    <li>• No outside food or beverages allowed</li>
                    <li>• Tickets are non-refundable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ticket Selection Sidebar */}
          <div className="space-y-4">
            <Card className="border-0 bg-card/50 backdrop-blur-sm sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-primary" />
                  Select Tickets
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {ticketTypes.map((ticket) => (
                  <div 
                    key={ticket.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      selectedTickets.includes(ticket.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => toggleTicketSelection(ticket.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{ticket.name}</h4>
                        <p className="text-sm text-muted-foreground">{ticket.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">₹{ticket.price.toLocaleString()}</p>
                        {ticket.originalPrice > ticket.price && (
                          <p className="text-sm text-muted-foreground line-through">
                            ₹{ticket.originalPrice.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className={ticket.available < 10 ? 'text-destructive' : 'text-muted-foreground'}>
                        {ticket.available} available
                      </span>
                      {ticket.available < 10 && (
                        <Badge variant="destructive" className="text-xs">
                          Limited
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-2">
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {ticket.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
                
                {selectedTickets.length > 0 && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total ({selectedTickets.length} tickets)</span>
                        <span className="font-bold text-lg text-primary">
                          ₹{getTotalPrice().toLocaleString()}
                        </span>
                      </div>
                      <Button className="w-full rounded-full" size="lg">
                        Buy Now
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Secure checkout with multiple payment options
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetails;