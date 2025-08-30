import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { trackEvent } from '@/components/GoogleAnalytics';

interface BookingService {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
  max_participants: number;
}

interface BookingFormData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  scheduled_date: string;
  scheduled_time: string;
  participant_count: number;
  special_requests: string;
}

const BookingSystem = () => {
  const [services, setServices] = useState<BookingService[]>([]);
  const [selectedService, setSelectedService] = useState<BookingService | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    scheduled_date: '',
    scheduled_time: '',
    participant_count: 1,
    special_requests: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Fetch booking services
  useState(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('booking_services')
        .select('*')
        .eq('is_active', true)
        .order('name', { ascending: true });

      if (error) {
        console.error('Error fetching services:', error);
        return;
      }

      setServices(data || []);
    };

    fetchServices();
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: BookingService) => {
    setSelectedService(service);
    setFormData(prev => ({ 
      ...prev, 
      participant_count: Math.min(prev.participant_count, service.max_participants || 99)
    }));
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedService) {
      toast({
        title: "Error",
        description: "Please select a service first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create booking inquiry record
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          service_id: selectedService.id,
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          customer_phone: formData.customer_phone,
          scheduled_date: formData.scheduled_date,
          scheduled_time: formData.scheduled_time,
          participant_count: formData.participant_count,
          total_amount: 0,
          special_requests: formData.special_requests,
          status: 'inquiry',
          payment_status: 'not_required'
        })
        .select()
        .single();

      if (bookingError) {
        throw bookingError;
      }

      trackEvent('booking_inquiry_created', 'engagement', selectedService.name);

      toast({
        title: "Inquiry Submitted!",
        description: `Your inquiry for ${selectedService.name} has been submitted. I'll contact you within 24 hours to discuss details and pricing.`,
      });

      // Reset form
      setFormData({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        scheduled_date: '',
        scheduled_time: '',
        participant_count: 1,
        special_requests: ''
      });
      setSelectedService(null);

    } catch (error: any) {
      console.error('Booking error:', error);
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Book Your Experience</h1>
        <p className="text-muted-foreground">Choose from our educational services and schedule your session</p>
      </div>

      {!selectedService ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="card-primary hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleServiceSelect(service)}>
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.duration_minutes} minutes
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Up to {service.max_participants} participants
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm font-medium">
                      Upon Request
                    </Badge>
                    <Button variant="outline" size="sm">
                      Select Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Selected Service Summary */}
          <Card className="card-primary">
            <CardHeader>
              <CardTitle>Selected Service</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setSelectedService(null)} className="w-fit">
                Change Service
              </Button>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{selectedService.name}</h3>
              <p className="text-muted-foreground mb-4">{selectedService.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{selectedService.duration_minutes} minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Pricing:</span>
                  <span>Upon Request</span>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  I'll contact you within 24 hours to discuss pricing and availability.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="card-primary">
            <CardHeader>
              <CardTitle>Booking Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="customer_name">Full Name *</Label>
                    <Input
                      id="customer_name"
                      name="customer_name"
                      value={formData.customer_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="customer_email">Email *</Label>
                    <Input
                      id="customer_email"
                      name="customer_email"
                      type="email"
                      value={formData.customer_email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="customer_phone">Phone Number</Label>
                  <Input
                    id="customer_phone"
                    name="customer_phone"
                    type="tel"
                    value={formData.customer_phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="scheduled_date">Preferred Date *</Label>
                    <Input
                      id="scheduled_date"
                      name="scheduled_date"
                      type="date"
                      value={formData.scheduled_date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="scheduled_time">Preferred Time *</Label>
                    <Input
                      id="scheduled_time"
                      name="scheduled_time"
                      type="time"
                      value={formData.scheduled_time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="participant_count">Number of Participants</Label>
                  <Input
                    id="participant_count"
                    name="participant_count"
                    type="number"
                    min="1"
                    max={selectedService.max_participants}
                    value={formData.participant_count}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="special_requests">Special Requests or Notes</Label>
                  <Textarea
                    id="special_requests"
                    name="special_requests"
                    value={formData.special_requests}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Any special requirements, age groups, or specific topics you'd like covered..."
                  />
                </div>

                <Button type="submit" className="btn-hero w-full" disabled={isLoading}>
                  {isLoading ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I'll contact you within 24 hours to discuss details and pricing.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;