import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';
import SearchBar, { SearchFilters } from '../components/SearchBar';
import DestinationCard from '../components/DestinationCard';
import { ArrowRight, CheckCircle, Star, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const Home = () => {
  const [searchResults, setSearchResults] = useState(destinations);

  const handleSearch = (filters: SearchFilters) => {
    let filtered = destinations;

    if (filters.location) {
      filtered = filtered.filter(dest => 
        dest.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        dest.state.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.budget) {
      filtered = filtered.filter(dest => dest.priceRange.min <= filters.budget);
    }

    if (filters.guests) {
      filtered = filtered.filter(dest => dest.maxGuests >= filters.guests);
    }

    setSearchResults(filtered);
  };

  const features = [
    'Verified Vendors',
    'Transparent Pricing',
    'Custom Packages',
    'Expert Support',
    'Quality Assurance',
    'Flexible Payment'
  ];

  const stats = [
    { label: 'Happy Couples', value: '1000+' },
    { label: 'Destinations', value: '50+' },
    { label: 'Vendors', value: '500+' },
    { label: 'Success Rate', value: '98%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Stronger dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
            objectPosition: 'center 60%'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}
          >
            Curated Destination
            <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Wedding Packages
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            Discover handpicked venues with verified vendors and seamless booking experience. From royal palaces to beach resorts, create your perfect celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-rose-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/packages"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover breathtaking venues that will make your special day unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.slice(0, 3).map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 font-medium"
            >
              <span>View All Destinations</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Project M?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing destination weddings by making them affordable and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature}</h3>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUp end={parseInt(stat.value)} duration={2} separator="," />+
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Couples Say</h2>
            <p className="text-xl text-gray-600">Real stories from real couples who trusted us with their special day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Project M made our dream wedding come true! The team was professional, the venue was breathtaking, and everything was perfectly organized."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Ananya & Rohit</div>
                    <div className="text-sm text-gray-500">Udaipur Wedding</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;