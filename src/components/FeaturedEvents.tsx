import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Calendar, 
  MapPin, 
  Star, 
  Heart,
  Clock,
  Users
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  description?: string;
  venue: string;
  city: string;
  event_date: string;
  event_time?: string;
  category: string;
  image_url?: string;
  min_price?: number;
  max_price?: number;
  total_tickets: number;
  available_tickets: number;
}

export const FeaturedEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'active')
        .order('event_date', { ascending: true })
        .limit(6);

      if (error) {
        console.error('Error fetching events:', error);
        return;
      }

      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (timeString?: string) => {
    if (!timeString) return '';
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">Loading events...</div>
        </div>
      </section>
    );
  }

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
          <Link to="/events">
            <Button variant="outline" className="hidden md:flex">
              View All Events
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="group cursor-pointer hover:shadow-saffron transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-gradient-card border-0"
            >
              <div className="relative">
                <img 
                  src={event.image_url || "/placeholder.svg"} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {event.category}
                  </Badge>
                  {event.available_tickets < event.total_tickets * 0.2 && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      Limited
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
                    <span className="text-muted-foreground">4.8</span>
                  </div>
                </div>
                
                {event.description && (
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {event.description}
                  </p>
                )}
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.event_date)}</span>
                    {event.event_time && (
                      <>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{formatTime(event.event_time)}</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="truncate">{event.venue}, {event.city}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.available_tickets} available</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <div className="text-xl font-bold text-primary">
                      {event.min_price ? `₹${event.min_price}` : 'TBA'}
                    </div>
                  </div>
                  <Link to={`/event/${event.id}`}>
                    <Button size="sm" className="bg-gradient-hero hover:opacity-90">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link to="/events">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};