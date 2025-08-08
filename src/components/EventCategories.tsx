import { Card, CardContent } from "@/components/ui/card";
import { 
  Trophy, 
  Music, 
  Theater, 
  Mic2, 
  PartyPopper, 
  Users,
  Guitar,
  Sparkles
} from "lucide-react";

const categories = [
  {
    id: "cricket",
    name: "Cricket",
    icon: Trophy,
    description: "IPL, World Cup, Test Matches",
    gradient: "from-green-500 to-blue-600",
    count: "450+ Events"
  },
  {
    id: "bollywood",
    name: "Bollywood",
    icon: Sparkles,
    description: "Movie Premieres, Celebrity Shows",
    gradient: "from-pink-500 to-rose-600",
    count: "200+ Events"
  },
  {
    id: "concerts",
    name: "Music Concerts",
    icon: Music,
    description: "Rock, Pop, Classical, Indie",
    gradient: "from-purple-500 to-indigo-600",
    count: "300+ Events"
  },
  {
    id: "theater",
    name: "Theater & Drama",
    icon: Theater,
    description: "Plays, Musicals, Comedy Shows",
    gradient: "from-amber-500 to-orange-600",
    count: "150+ Events"
  },
  {
    id: "standup",
    name: "Stand-up Comedy",
    icon: Mic2,
    description: "Live Comedy, Open Mics",
    gradient: "from-yellow-500 to-red-500",
    count: "180+ Events"
  },
  {
    id: "festivals",
    name: "Festivals",
    icon: PartyPopper,
    description: "Cultural, Music, Food Festivals",
    gradient: "from-teal-500 to-cyan-600",
    count: "120+ Events"
  },
  {
    id: "classical",
    name: "Indian Classical",
    icon: Guitar,
    description: "Hindustani, Carnatic Music",
    gradient: "from-orange-500 to-red-600",
    count: "90+ Events"
  },
  {
    id: "community",
    name: "Community Events",
    icon: Users,
    description: "Local Events, Meetups",
    gradient: "from-blue-500 to-purple-600",
    count: "250+ Events"
  }
];

export const EventCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Explore Events by
            </span>
            <span className="text-foreground"> Category</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing events across different categories and find your perfect experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="group cursor-pointer hover:shadow-saffron transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="text-xs font-medium text-primary">
                    {category.count}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};