import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, IndianRupee } from 'lucide-react';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  location: string;
  dateRange: string;
  guests: number;
  budget: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    dateRange: '',
    guests: 100,
    budget: 1000000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mx-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Where to?"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Date Range */}
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="When?"
            value={filters.dateRange}
            onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
        </div>

        {/* Guests */}
        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            value={filters.guests}
            onChange={(e) => setFilters({ ...filters, guests: parseInt(e.target.value) })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent appearance-none"
          >
            <option value={50}>50 guests</option>
            <option value={100}>100 guests</option>
            <option value={200}>200 guests</option>
            <option value={300}>300 guests</option>
            <option value={500}>500+ guests</option>
          </select>
        </div>

        {/* Budget */}
        <div className="relative">
          <IndianRupee className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            value={filters.budget}
            onChange={(e) => setFilters({ ...filters, budget: parseInt(e.target.value) })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent appearance-none"
          >
            <option value={500000}>5 Lakhs</option>
            <option value={1000000}>10 Lakhs</option>
            <option value={1500000}>15 Lakhs</option>
            <option value={2000000}>20 Lakhs</option>
            <option value={3000000}>30 Lakhs+</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-rose-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
        >
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;