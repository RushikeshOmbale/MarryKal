import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Royal Palace Resort',
    location: 'Udaipur',
    state: 'Rajasthan',
    country: 'India',
    images: [
      'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Experience the grandeur of Rajasthan with a magical lakeside wedding at the Royal Palace Resort. Surrounded by the stunning Lake Pichola, this venue offers an enchanting blend of royal heritage and modern luxury.',
    priceRange: {
      min: 800000,
      max: 2000000
    },
    rating: 4.8,
    reviewCount: 156,
    features: ['Lake View', 'Royal Architecture', 'Heritage Ambiance', 'Luxury Accommodation', 'Professional Photography'],
    accommodation: {
      available: true,
      types: ['Palace Suites', 'Luxury Rooms', 'Royal Cottages'],
      pricePerNight: 15000
    },
    seasons: {
      peak: ['November', 'December', 'January', 'February'],
      offSeason: ['June', 'July', 'August', 'September']
    },
    maxGuests: 500,
    vendors: [
      {
        id: 'v1',
        name: 'Royal Caterers',
        type: 'catering',
        rating: 4.9,
        reviewCount: 89,
        pricing: { min: 1500, max: 3000 },
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['Rajasthani Cuisine', 'Multi-cuisine', 'Live Counters', 'Dessert Bar'],
        tier: 'elite'
      },
      {
        id: 'v2',
        name: 'Majestic Decorators',
        type: 'decoration',
        rating: 4.7,
        reviewCount: 67,
        pricing: { min: 200000, max: 500000 },
        image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['Floral Arrangements', 'Stage Design', 'Lighting', 'Mandap Setup'],
        tier: 'verified'
      }
    ],
    packages: [
      {
        id: 'p1',
        name: 'Royal Heritage Package',
        description: 'Complete 3-day wedding celebration with traditional Rajasthani touch',
        price: 1200000,
        duration: '3 Days',
        maxGuests: 300,
        includes: ['Venue', 'Catering', 'Decoration', 'Photography', 'Accommodation'],
        isCustomizable: true,
        isPremium: false
      }
    ]
  },
  {
    id: '2',
    name: 'Tropical Beach Resort',
    location: 'Goa',
    state: 'Goa',
    country: 'India',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Say your vows with the ocean as your backdrop at this stunning beachfront resort. Perfect for couples seeking a romantic, intimate celebration with tropical vibes.',
    priceRange: {
      min: 600000,
      max: 1500000
    },
    rating: 4.6,
    reviewCount: 203,
    features: ['Beach Access', 'Ocean Views', 'Tropical Gardens', 'Water Sports', 'Sunset Ceremonies'],
    accommodation: {
      available: true,
      types: ['Beach Villas', 'Ocean Suites', 'Garden Rooms'],
      pricePerNight: 8000
    },
    seasons: {
      peak: ['November', 'December', 'January', 'February', 'March'],
      offSeason: ['June', 'July', 'August', 'September']
    },
    maxGuests: 200,
    vendors: [
      {
        id: 'v3',
        name: 'Coastal Cuisine',
        type: 'catering',
        rating: 4.5,
        reviewCount: 124,
        pricing: { min: 1200, max: 2500 },
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['Seafood Specialties', 'Goan Cuisine', 'Beach BBQ', 'Cocktail Bar'],
        tier: 'verified'
      }
    ],
    packages: [
      {
        id: 'p2',
        name: 'Beach Bliss Package',
        description: 'Intimate beach wedding with sunset ceremony and reception',
        price: 800000,
        duration: '2 Days',
        maxGuests: 150,
        includes: ['Beach Venue', 'Catering', 'Decoration', 'Photography', 'Music'],
        isCustomizable: true,
        isPremium: false
      }
    ]
  },
  {
    id: '3',
    name: 'Mountain Paradise Resort',
    location: 'Coorg',
    state: 'Karnataka',
    country: 'India',
    images: [
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Nestled in the Western Ghats, this mountain resort offers breathtaking views and a serene atmosphere perfect for an intimate wedding celebration.',
    priceRange: {
      min: 400000,
      max: 1000000
    },
    rating: 4.4,
    reviewCount: 87,
    features: ['Mountain Views', 'Coffee Plantations', 'Nature Trails', 'Spa Services', 'Adventure Activities'],
    accommodation: {
      available: true,
      types: ['Mountain Cottages', 'Valley View Rooms', 'Treehouse Suites'],
      pricePerNight: 6000
    },
    seasons: {
      peak: ['October', 'November', 'December', 'January', 'February'],
      offSeason: ['June', 'July', 'August']
    },
    maxGuests: 150,
    vendors: [
      {
        id: 'v4',
        name: 'Mountain Feast',
        type: 'catering',
        rating: 4.3,
        reviewCount: 56,
        pricing: { min: 1000, max: 2000 },
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
        services: ['South Indian Cuisine', 'Coffee Bar', 'Organic Menu', 'Local Specialties'],
        tier: 'verified'
      }
    ],
    packages: [
      {
        id: 'p3',
        name: 'Mountain Serenity Package',
        description: 'Peaceful mountain wedding with nature-inspired decor',
        price: 600000,
        duration: '2 Days',
        maxGuests: 100,
        includes: ['Mountain Venue', 'Catering', 'Nature Decor', 'Photography', 'Bonfire'],
        isCustomizable: false,
        isPremium: false
      }
    ]
  }
];