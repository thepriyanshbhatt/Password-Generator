import React from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';

import Features from './components/Features';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative bg-brand-light transition-colors duration-500 overflow-hidden">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <HeroLeft />
        <HeroRight />
      </main>
      <Features />
    </div>
  );
}

export default App;
