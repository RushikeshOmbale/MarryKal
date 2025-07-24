import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<div className="p-10 text-center text-3xl font-bold">Destinations Page</div>} />
        <Route path="/packages" element={<div className="p-10 text-center text-3xl font-bold">Packages Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
