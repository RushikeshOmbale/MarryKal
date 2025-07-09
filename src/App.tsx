import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Premium from './pages/Premium';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/auth" element={<Auth />} />
            {/* Placeholder routes */}
            <Route path="/packages" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">Packages Page Coming Soon</h1></div>} />
            <Route path="/vendors" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">Vendors Page Coming Soon</h1></div>} />
            <Route path="/about" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-3xl font-bold">About Page Coming Soon</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;