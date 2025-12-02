import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import MissionPage from './pages/MissionPage';

function App() {
  return (
    <div className="min-h-screen bg-storm-bg text-white font-sans selection:bg-storm-pink selection:text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<MissionPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

