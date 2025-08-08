import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Globe, Award, Heart, Zap, TrendingUp, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10M+",
      label: "Happy Customers",
      description: "Trusted by millions across India"
    },
    {
      icon: Zap,
      number: "50K+",
      label: "Events Listed",
      description: "From cricket to concerts"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Secure Transactions",
      description: "Bank-level security guaranteed"
    },
    {
      icon: Globe,
      number: "500+",
      label: "Cities Covered",
      description: "Pan-India presence"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and transparency in all our transactions."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology and user feedback."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making entertainment accessible to everyone across India, regardless of location."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/placeholder.svg",
      description: "Former tech executive with 15+ years in Indian entertainment industry"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "/placeholder.svg", 
      description: "Tech visionary who built scalable platforms for millions of users"
    },
    {
      name: "Amit Patel",
      role: "Head of Security",
      image: "/placeholder.svg",
      description: "Cybersecurity expert ensuring safe transactions for all users"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Founded TicketBazaar",
      description: "Started with a vision to make event tickets accessible to everyone in India"
    },
    {
      year: "2020",
      title: "1 Million Users",
      description: "Reached our first million users during the challenging pandemic year"
    },
    {
      year: "2021",
      title: "Pan-India Expansion",
      description: "Expanded to cover 500+ cities across India"
    },
    {
      year: "2022",
      title: "Resale Platform Launch",
      description: "Launched secure ticket resale marketplace"
    },
    {
      year: "2023",
      title: "10 Million Tickets Sold",
      description: "Crossed the milestone of 10 million tickets sold"
    },
    {
      year: "2024",
      title: "AI-Powered Recommendations",
      description: "Introduced intelligent event recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About TicketBazaar
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            India's Most Trusted
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Ticket Marketplace</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make every event accessible to every Indian. From cricket matches in Mumbai to classical concerts in Chennai, we connect millions of event-goers with their perfect experiences.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TicketBazaar was born from a simple frustration: missing out on amazing events because tickets were sold out or too expensive on unofficial channels. Our founders, passionate about Indian culture and entertainment, saw an opportunity to create a platform that would democratize access to events.
                </p>
                <p>
                  Starting in 2019 with just cricket matches in Mumbai, we've grown to become India's largest ticket marketplace. We've helped millions of Indians experience everything from IPL finals to AR Rahman concerts, from classical dance performances to comedy shows.
                </p>
                <p>
                  Today, we're proud to be the platform that connects event organizers, official sellers, and trusted resellers with passionate fans across the country. Every ticket sold through our platform represents a memory waiting to be made.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-primary p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <TrendingUp className="h-16 w-16 mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">5 Years of Growth</h3>
                  <p className="opacity-90">From startup to India's #1 ticket marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and help us serve our customers better every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small startup to India's most trusted ticket marketplace - here's how we grew.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold z-10">
                    <Clock className="h-6 w-6" />
                  </div>
                  <Card className="flex-1 border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind TicketBazaar who work every day to make your event experiences amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 md:p-12">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Be part of India's growing entertainment community. Whether you're looking for tickets or have tickets to sell, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full">
              Explore Events
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;