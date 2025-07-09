import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import { Filter, MapPin, IndianRupee, Users, Star } from 'lucide-react';

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [filters, setFilters] = useState({
    location: '',
    budget: '',
    guests: '',
    rating: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    let filtered = destinations;
    
    if (newFilters.location) {
      filtered = filtered.filter(dest => 
        dest.state.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }
    
    if (newFilters.budget) {
      const budgetValue = parseInt(newFilters.budget);
      filtered = filtered.filter(dest => dest.priceRange.min <= budgetValue);
    }
    
    if (newFilters.guests) {
      const guestValue = parseInt(newFilters.guests);
      filtered = filtered.filter(dest => dest.maxGuests >= guestValue);
    }
    
    if (newFilters.rating) {
      const ratingValue = parseFloat(newFilters.rating);
      filtered = filtered.filter(dest => dest.rating >= ratingValue);
    }
    
    setFilteredDestinations(filtered);
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      budget: '',
      guests: '',
      rating: ''
    });
    setFilteredDestinations(destinations);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Wedding Destinations</h1>
          <p className="text-xl text-gray-600">
            Discover amazing venues for your perfect destination wedding
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-rose-600 hover:text-rose-700"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="goa">Goa</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="kerala">Kerala</option>
                    <option value="himachal">Himachal Pradesh</option>
                  </select>
                </div>

                {/* Budget Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <IndianRupee className="inline h-4 w-4 mr-1" />
                    Budget
                  </label>
                  <select
                    value={filters.budget}
                    onChange={(e) => handleFilterChange('budget', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Any Budget</option>
                    <option value="500000">Up to ₹5 Lakhs</option>
                    <option value="1000000">Up to ₹10 Lakhs</option>
                    <option value="1500000">Up to ₹15 Lakhs</option>
                    <option value="2000000">Up to ₹20 Lakhs</option>
                    <option value="3000000">₹30 Lakhs+</option>
                  </select>
                </div>

                {/* Guests Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline h-4 w-4 mr-1" />
                    Guests
                  </label>
                  <select
                    value={filters.guests}
                    onChange={(e) => handleFilterChange('guests', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Any Size</option>
                    <option value="50">50+ guests</option>
                    <option value="100">100+ guests</option>
                    <option value="200">200+ guests</option>
                    <option value="300">300+ guests</option>
                    <option value="500">500+ guests</option>
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Star className="inline h-4 w-4 mr-1" />
                    Rating
                  </label>
                  <select
                    value={filters.rating}
                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Any Rating</option>
                    <option value="4.5">4.5+ stars</option>
                    <option value="4.0">4.0+ stars</option>
                    <option value="3.5">3.5+ stars</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredDestinations.length} of {destinations.length} destinations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters to find more results
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;