import React from 'react';
import Navbar from './components/Navbar';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <HeroLeft />
        <HeroRight />
      </main>
    </div>
  );
}

export default App;
