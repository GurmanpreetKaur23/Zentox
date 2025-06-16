import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';

import Index from './pages/Index';
import Home from './pages/Home';
import GetHelp from './pages/GetHelp';
import NaturalCures from './pages/NaturalCures';
import Tracker from './pages/Tracker';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const App = () => (
  <BrowserRouter>
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/natural-cures" element={<NaturalCures />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
