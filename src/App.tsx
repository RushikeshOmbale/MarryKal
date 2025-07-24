import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')", // replace with actual path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Curated Destination <br />
          <span className="text-pink-400">Wedding Packages</span>
        </h1>
        <p className="text-lg mb-6">
          Discover handpicked venues with verified vendors and seamless booking experience. From royal palaces to beach resorts, create your perfect celebration.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/destinations" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold">
            Explore Destinations →
          </Link>
          <Link to="/packages" className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-3 rounded-lg font-semibold">
            View Packages
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
