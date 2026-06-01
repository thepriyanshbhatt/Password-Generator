import React from 'react';
import Navbar from '../components/Navbar';
import HeroLeft from '../components/HeroLeft';
import HeroRight from '../components/HeroRight';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="flex flex-col min-h-screen relative bg-brand-light transition-colors duration-500 overflow-hidden"
    >
      <Navbar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <HeroLeft />
        <HeroRight />
      </main>
      <Features />
      <Footer />
    </motion.div>
  );
};

export default Home;
