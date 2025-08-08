import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, IndianRupee, Calendar, MapPin, Ticket, Shield, Zap } from "lucide-react";

const SellTickets = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Your payments are protected with bank-level security"
    },
    {
      icon: Zap,
      title: "Instant Listing",
      description: "List your tickets and start selling within minutes"
    },
    {
      icon: IndianRupee,
      title: "Best Prices",
      description: "Set your own price and maximize your earnings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sell Your Tickets Safely
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your unused tickets into cash. List them on India's most trusted ticket marketplace.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Listing Form */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Ticket className="h-6 w-6 text-primary" />
                List Your Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="event-name">Event Name</Label>
                <Input 
                  id="event-name" 
                  placeholder="e.g., India vs Australia Test Match"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="event-date">Event Date</Label>
                  <Input 
                    id="event-date" 
                    type="date"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-time">Event Time</Label>
                  <Input 
                    id="event-time" 
                    type="time"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input 
                  id="venue" 
                  placeholder="e.g., Eden Gardens, Kolkata"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Event Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="bollywood">Bollywood</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="section">Section/Block</Label>
                  <Input 
                    id="section" 
                    placeholder="e.g., Block A, VIP Section"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seats">Number of Tickets</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Ticket</SelectItem>
                      <SelectItem value="2">2 Tickets</SelectItem>
                      <SelectItem value="3">3 Tickets</SelectItem>
                      <SelectItem value="4">4 Tickets</SelectItem>
                      <SelectItem value="5">5+ Tickets</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price per Ticket (₹)</Label>
                <div className="relative">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="price" 
                    type="number"
                    placeholder="2500"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Additional Details</Label>
                <Textarea 
                  id="description" 
                  placeholder="Any additional information about the tickets (original price, seat details, etc.)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-image">Upload Ticket Images</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Drag and drop your ticket images here
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG up to 10MB
                  </p>
                </div>
              </div>

              <Button className="w-full rounded-full" size="lg">
                List My Tickets
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By listing your tickets, you agree to our Terms of Service and acknowledge our commission fee of 10%.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <div className="space-y-6">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">List Your Tickets</h4>
                    <p className="text-sm text-muted-foreground">Fill out the form with your event and ticket details</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Set Your Price</h4>
                    <p className="text-sm text-muted-foreground">Choose a competitive price for your tickets</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Get Paid</h4>
                    <p className="text-sm text-muted-foreground">Receive payment instantly when your tickets sell</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Seller Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Secure Payments</p>
                    <p className="text-xs text-muted-foreground">All transactions are protected and guaranteed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Fraud Protection</p>
                    <p className="text-xs text-muted-foreground">We verify all buyers to prevent fraudulent purchases</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-foreground font-medium">Customer Support</p>
                    <p className="text-xs text-muted-foreground">24/7 support to help with any issues</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellTickets;