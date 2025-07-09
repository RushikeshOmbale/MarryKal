export interface Destination {
  id: string;
  name: string;
  location: string;
  state: string;
  country: string;
  images: string[];
  description: string;
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  reviewCount: number;
  features: string[];
  accommodation: {
    available: boolean;
    types: string[];
    pricePerNight: number;
  };
  seasons: {
    peak: string[];
    offSeason: string[];
  };
  maxGuests: number;
  vendors: Vendor[];
  packages: Package[];
}

export interface Vendor {
  id: string;
  name: string;
  type: 'catering' | 'decoration' | 'photography' | 'entertainment' | 'transport';
  rating: number;
  reviewCount: number;
  pricing: {
    min: number;
    max: number;
  };
  image: string;
  services: string[];
  tier: 'basic' | 'verified' | 'elite';
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  maxGuests: number;
  includes: string[];
  isCustomizable: boolean;
  isPremium: boolean;
}

export interface BookingForm {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  budget: number;
  foodPreference: 'veg' | 'non-veg' | 'both';
  customizations: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isPremium: boolean;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  userId: string;
  destinationId: string;
  packageId: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalAmount: number;
  bookingDate: string;
  eventDate: string;
  guests: number;
  customizations: string[];
}