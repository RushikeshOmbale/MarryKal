import React from 'react';
import { MapPin, Star, Users, IndianRupee, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative">
        <img
          src={destination.images[0]}
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-rose-500" />
        </button>
        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          <span className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{destination.location}, {destination.state}</span>
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
          <div className="flex items-center space-x-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
            <span className="text-sm text-gray-500">({destination.reviewCount})</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {destination.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Up to {destination.maxGuests}</span>
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-lg font-bold text-gray-900">
              <IndianRupee className="h-4 w-4" />
              <span>{formatPrice(destination.priceRange.min)}</span>
            </div>
            <p className="text-xs text-gray-500">Starting from</p>
          </div>
        </div>

        <Link
          to={`/destinations/${destination.id}`}
          className="block w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white text-center py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;