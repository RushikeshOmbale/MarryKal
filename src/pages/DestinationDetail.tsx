import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { MapPin, Star, Users, IndianRupee, Calendar, Phone, Mail, ArrowLeft, Crown, Heart, Share2 } from 'lucide-react';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = destinations.find(d => d.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Destination not found</h2>
          <Link 
            to="/destinations" 
            className="text-rose-600 hover:text-rose-700 font-medium"
          >
            Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleBooking = () => {
    setShowBookingModal(true);
  };

  const handleBookingSubmit = () => {
    // Here you would typically send the booking data to your backend
    alert('Booking request submitted! We will contact you shortly.');
    setShowBookingModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-rose-500 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-rose-500 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={destination.images[selectedImageIndex]}
              alt={destination.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="flex space-x-2 mt-4">
              {destination.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImageIndex === index ? 'border-rose-500' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{destination.name}</h1>
              <div className="flex items-center space-x-1 text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-lg font-semibold text-gray-900">{destination.rating}</span>
                <span className="text-gray-500">({destination.reviewCount} reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-gray-600 mb-6">
              <MapPin className="h-5 w-5" />
              <span>{destination.location}, {destination.state}, {destination.country}</span>
            </div>

            <p className="text-gray-700 text-lg mb-6">{destination.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Max Guests</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{destination.maxGuests}</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <IndianRupee className="h-5 w-5 text-gray-600" />
                  <span className="font-semibold text-gray-900">Starting from</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">{formatPrice(destination.priceRange.min)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleBooking}
                className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 font-medium"
              >
                Book Now
              </button>
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Contact Vendor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {destination.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Wedding Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                {pkg.isPremium && (
                  <div className="flex items-center space-x-1 text-amber-500">
                    <Crown className="h-4 w-4" />
                    <span className="text-xs font-medium">Premium</span>
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Duration:</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Max Guests:</span>
                  <span className="font-medium">{pkg.maxGuests}</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{formatPrice(pkg.price)}</span>
                  {pkg.isCustomizable && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Customizable
                    </span>
                  )}
                </div>
                <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Trusted Vendors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destination.vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{vendor.name}</h3>
                  <p className="text-sm text-gray-500 capitalize">{vendor.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <span className="text-sm font-medium">{vendor.rating}</span>
                <span className="text-sm text-gray-500">({vendor.reviewCount} reviews)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {formatPrice(vendor.pricing.min)} - {formatPrice(vendor.pricing.max)}
              </p>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                  View Details
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Phone className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Book Your Wedding</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleBookingSubmit(); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="">Select guest count</option>
                    <option value="50">50 guests</option>
                    <option value="100">100 guests</option>
                    <option value="200">200 guests</option>
                    <option value="300">300 guests</option>
                    <option value="500">500+ guests</option>
                  </select>
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetail;