-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  avatar_url TEXT,
  is_seller BOOLEAN DEFAULT false,
  seller_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  venue TEXT NOT NULL,
  address TEXT,
  city TEXT NOT NULL,
  country TEXT DEFAULT 'India',
  event_date TIMESTAMPTZ NOT NULL,
  event_time TIME,
  category TEXT NOT NULL,
  image_url TEXT,
  organizer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  total_tickets INTEGER DEFAULT 0,
  available_tickets INTEGER DEFAULT 0,
  min_price DECIMAL(10,2),
  max_price DECIMAL(10,2),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'completed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create ticket_listings table
CREATE TABLE public.ticket_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  seller_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  section TEXT,
  row_number TEXT,
  seat_numbers TEXT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  price_per_ticket DECIMAL(10,2) NOT NULL CHECK (price_per_ticket > 0),
  total_price DECIMAL(10,2) GENERATED ALWAYS AS (quantity * price_per_ticket) STORED,
  ticket_type TEXT NOT NULL CHECK (ticket_type IN ('general', 'vip', 'premium', 'student')),
  delivery_method TEXT DEFAULT 'electronic' CHECK (delivery_method IN ('electronic', 'physical', 'mobile')),
  description TEXT,
  status TEXT DEFAULT 'available' CHECK (status IN ('available', 'sold', 'reserved', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  ticket_listing_id UUID REFERENCES public.ticket_listings(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price DECIMAL(10,2) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  fees DECIMAL(10,2) DEFAULT 0,
  final_amount DECIMAL(10,2) NOT NULL,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  stripe_session_id TEXT UNIQUE,
  buyer_email TEXT NOT NULL,
  buyer_phone TEXT,
  delivery_address TEXT,
  status TEXT DEFAULT 'confirmed' CHECK (status IN ('confirmed', 'delivered', 'cancelled')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  seller_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- RLS Policies for events
CREATE POLICY "Anyone can view active events" ON public.events
  FOR SELECT USING (status = 'active');

CREATE POLICY "Organizers can manage their events" ON public.events
  FOR ALL USING (organizer_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- RLS Policies for ticket_listings
CREATE POLICY "Anyone can view available listings" ON public.ticket_listings
  FOR SELECT USING (status = 'available');

CREATE POLICY "Sellers can manage their listings" ON public.ticket_listings
  FOR ALL USING (seller_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- RLS Policies for orders
CREATE POLICY "Users can view their orders" ON public.orders
  FOR SELECT USING (buyer_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Users can create orders" ON public.orders
  FOR INSERT WITH CHECK (buyer_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

CREATE POLICY "Sellers can view orders for their listings" ON public.orders
  FOR SELECT USING (
    ticket_listing_id IN (
      SELECT id FROM public.ticket_listings 
      WHERE seller_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid())
    )
  );

-- RLS Policies for reviews
CREATE POLICY "Anyone can view reviews" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create reviews for their orders" ON public.reviews
  FOR INSERT WITH CHECK (reviewer_id IN (SELECT id FROM public.profiles WHERE user_id = auth.uid()));

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at columns
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ticket_listings_updated_at BEFORE UPDATE ON public.ticket_listings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_events_date_city ON public.events(event_date, city);
CREATE INDEX idx_events_category ON public.events(category);
CREATE INDEX idx_ticket_listings_event ON public.ticket_listings(event_id);
CREATE INDEX idx_ticket_listings_status ON public.ticket_listings(status);
CREATE INDEX idx_orders_buyer ON public.orders(buyer_id);
CREATE INDEX idx_orders_listing ON public.orders(ticket_listing_id);

-- Insert sample data for development
INSERT INTO public.events (title, description, venue, address, city, event_date, event_time, category, image_url, total_tickets, available_tickets, min_price, max_price) VALUES
('Bollywood Night Live', 'An evening of Bollywood music and dance performances', 'Jawaharlal Nehru Stadium', 'Pragati Vihar, New Delhi', 'New Delhi', '2024-02-15 19:30:00+05:30', '19:30', 'Music', '/placeholder.svg', 5000, 3500, 500.00, 2500.00),
('Mumbai Comedy Festival', 'Stand-up comedy show featuring top Indian comedians', 'NCPA Mumbai', 'Nariman Point, Mumbai', 'Mumbai', '2024-02-20 20:00:00+05:30', '20:00', 'Comedy', '/placeholder.svg', 1200, 800, 800.00, 1500.00),
('Classical Music Concert', 'Traditional Indian classical music performance', 'Music Academy', 'T. T. K. Road, Chennai', 'Chennai', '2024-02-25 18:00:00+05:30', '18:00', 'Music', '/placeholder.svg', 800, 600, 300.00, 1000.00),
('Tech Conference 2024', 'Annual technology conference with industry leaders', 'Bangalore International Exhibition Centre', 'Tumkur Road, Bangalore', 'Bangalore', '2024-03-01 09:00:00+05:30', '09:00', 'Conference', '/placeholder.svg', 2000, 1500, 1000.00, 3000.00),
('IPL Match: RCB vs MI', 'Indian Premier League cricket match', 'M. Chinnaswamy Stadium', 'Cubbon Park, Bangalore', 'Bangalore', '2024-03-10 19:30:00+05:30', '19:30', 'Sports', '/placeholder.svg', 40000, 25000, 1500.00, 8000.00);