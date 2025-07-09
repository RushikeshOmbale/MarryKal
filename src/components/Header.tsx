import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, User, Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    navigate('/auth');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-rose-500 to-purple-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Project M
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-500 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-rose-500 transition-colors">
              Destinations
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-rose-500 transition-colors">
              Packages
            </Link>
            <Link to="/vendors" className="text-gray-700 hover:text-rose-500 transition-colors">
              Vendors
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-500 transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Auth & Premium */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/premium" 
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200"
            >
              <Crown className="h-4 w-4" />
              <span className="font-medium">Premium</span>
            </Link>
            <button
              onClick={handleAuthClick}
              className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-rose-500 transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="block py-2 text-gray-700 hover:text-rose-500 transition-colors">
              Destinations
            </Link>
            <Link to="/packages" className="block py-2 text-gray-700 hover:text-rose-500 transition-colors">
              Packages
            </Link>
            <Link to="/vendors" className="block py-2 text-gray-700 hover:text-rose-500 transition-colors">
              Vendors
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-rose-500 transition-colors">
              About
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Link 
                to="/premium" 
                className="flex items-center space-x-2 py-2 text-amber-600 hover:text-amber-700 transition-colors"
              >
                <Crown className="h-4 w-4" />
                <span>Premium</span>
              </Link>
              <button
                onClick={handleAuthClick}
                className="flex items-center space-x-2 py-2 text-gray-700 hover:text-rose-500 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;