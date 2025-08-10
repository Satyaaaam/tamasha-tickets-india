import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { User, Heart, ShoppingCart, Ticket, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: string;
  ticket_listing_id: string;
  quantity: number;
  total_amount: number;
  payment_status: string;
  status: string;
  created_at: string;
  ticket_listing: {
    title: string;
    event: {
      title: string;
      venue: string;
      event_date: string;
    };
  };
}

interface TicketListing {
  id: string;
  title: string;
  price_per_ticket: number;
  quantity: number;
  status: string;
  created_at: string;
  event: {
    title: string;
    venue: string;
    event_date: string;
  };
}

const Dashboard = () => {
  const { user, profile, signOut } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [listings, setListings] = useState<TicketListing[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    if (!profile) return;

    try {
      // Fetch user's orders
      const { data: ordersData } = await supabase
        .from('orders')
        .select(`
          *,
          ticket_listing:ticket_listings(
            title,
            event:events(title, venue, event_date)
          )
        `)
        .eq('buyer_id', profile.id)
        .order('created_at', { ascending: false });

      // Fetch user's listings if they're a seller
      const { data: listingsData } = await supabase
        .from('ticket_listings')
        .select(`
          *,
          event:events(title, venue, event_date)
        `)
        .eq('seller_id', profile.id)
        .order('created_at', { ascending: false });

      setOrders(ordersData || []);
      setListings(listingsData || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Welcome back, {profile?.first_name}!
              </h1>
              <p className="text-muted-foreground">Manage your tickets and account</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Ticket className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{orders.length}</p>
                  <p className="text-sm text-muted-foreground">Tickets Bought</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">{listings.length}</p>
                  <p className="text-sm text-muted-foreground">Tickets Listed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">5.0</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your ticket purchases</CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length === 0 ? (
                  <p className="text-muted-foreground">No orders yet. Start by buying some tickets!</p>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{order.ticket_listing?.event?.title}</h3>
                          <Badge variant={order.payment_status === 'completed' ? 'default' : 'secondary'}>
                            {order.payment_status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {order.ticket_listing?.title} • {order.quantity} ticket(s)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.ticket_listing?.event?.venue} • {new Date(order.ticket_listing?.event?.event_date).toLocaleDateString()}
                        </p>
                        <p className="font-semibold">₹{order.total_amount}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="listings" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Listings</CardTitle>
                    <CardDescription>Tickets you're selling</CardDescription>
                  </div>
                  <Button onClick={() => navigate('/sell-tickets')}>
                    List New Tickets
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {listings.length === 0 ? (
                  <p className="text-muted-foreground">No listings yet. Start selling your tickets!</p>
                ) : (
                  <div className="space-y-4">
                    {listings.map((listing) => (
                      <div key={listing.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{listing.event?.title}</h3>
                          <Badge variant={listing.status === 'available' ? 'default' : 'secondary'}>
                            {listing.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {listing.title} • {listing.quantity} ticket(s)
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {listing.event?.venue} • {new Date(listing.event?.event_date).toLocaleDateString()}
                        </p>
                        <p className="font-semibold">₹{listing.price_per_ticket} each</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-foreground">{profile?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <p className="text-foreground">
                      {profile?.first_name} {profile?.last_name}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="text-foreground">{profile?.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Seller Status</label>
                    <div className="flex items-center space-x-2">
                      <Badge variant={profile?.is_seller ? 'default' : 'secondary'}>
                        {profile?.is_seller ? 'Verified Seller' : 'Buyer'}
                      </Badge>
                      {profile?.seller_verified && (
                        <Badge variant="outline">Verified</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;