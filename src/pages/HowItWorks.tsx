import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, CreditCard, Ticket, Shield, Users, Zap, Heart, Star } from "lucide-react";

const HowItWorks = () => {
  const buyingSteps = [
    {
      icon: Search,
      title: "Browse Events",
      description: "Search through thousands of events across India. From cricket matches to Bollywood concerts, find exactly what you're looking for."
    },
    {
      icon: Ticket,
      title: "Choose Your Tickets",
      description: "Select your preferred seats and ticket type. Compare prices from different sellers to get the best deal."
    },
    {
      icon: CreditCard,
      title: "Secure Checkout",
      description: "Pay safely with our secure payment system. We accept cards, UPI, and all major payment methods."
    },
    {
      icon: Heart,
      title: "Enjoy the Event",
      description: "Receive your tickets instantly and enjoy your event. Our customer support is available 24/7 if you need help."
    }
  ];

  const sellingSteps = [
    {
      icon: Ticket,
      title: "List Your Tickets",
      description: "Upload your ticket details and set your price. It takes less than 5 minutes to create a listing."
    },
    {
      icon: Users,
      title: "Reach Millions",
      description: "Your tickets are instantly visible to millions of potential buyers across India."
    },
    {
      icon: Shield,
      title: "Secure Sale",
      description: "We handle the payment and transfer process safely. Your payment is guaranteed once the sale is complete."
    },
    {
      icon: Zap,
      title: "Get Paid Fast",
      description: "Receive your money within 24 hours of the successful ticket transfer."
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "All transactions are protected with bank-level security",
      color: "bg-green-500"
    },
    {
      icon: Star,
      title: "Verified Tickets",
      description: "Every ticket is verified to ensure authenticity",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your tickets immediately after purchase",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Customer support available round the clock",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How TicketBazaar Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's most trusted ticket marketplace makes buying and selling tickets simple, secure, and fast.
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Buying Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              For Buyers
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How to Buy Tickets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get tickets to your favorite events in just a few simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyingSteps.map((step, index) => (
              <Card key={index} className="relative border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Selling Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              For Sellers
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How to Sell Tickets
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turn your unused tickets into cash with our simple selling process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellingSteps.map((step, index) => (
              <Card key={index} className="relative border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4 relative">
                    <step.icon className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-secondary rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-secondary">{index + 1}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Is it safe to buy tickets here?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, absolutely! We use bank-level security for all transactions and verify every ticket before it's listed. Plus, we offer buyer protection on all purchases.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How do I receive my tickets?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You'll receive your tickets instantly via email or SMS after purchase. You can also access them anytime through your account dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">What if an event is cancelled?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If an event is officially cancelled, you'll receive a full refund automatically. For rescheduled events, your tickets remain valid for the new date.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">How much commission do you charge?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We charge a 10% commission on successful sales. This covers payment processing, fraud protection, and customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Join millions of Indians who trust TicketBazaar for their event tickets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full">
              Browse Events
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
              Sell Tickets
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;