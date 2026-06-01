import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="flex flex-col min-h-screen bg-brand-light transition-colors duration-500 overflow-x-hidden"
    >
      <Navbar />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-8 pt-[140px] pb-24 flex items-center justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Side - Image */}
          <div className="relative group mx-auto md:mx-0 w-full max-w-[400px]">
            <div className="absolute inset-0 bg-brand-green-slider blur-[100px] opacity-10 dark:opacity-20 rounded-full"></div>
            <div className="relative rounded-[32px] overflow-hidden bg-zinc-100 dark:bg-zinc-900 aspect-[4/5] shadow-xl border border-zinc-200 dark:border-white/10">
              <img 
                src="/priyansh.jpg" 
                alt="Priyansh Bhatt" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  target.parentElement!.innerHTML = '<span class="text-zinc-400 text-sm p-8 text-center">Please place your photo named "priyansh.jpg" in the public folder.</span>';
                }}
              />
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-lg border border-white/10 whitespace-nowrap">
                Founder & Creator
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-start">
            <div className="inline-block bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-[11px] mb-8">
              About the Builder
            </div>

            <h1 className="text-[56px] md:text-[72px] font-extrabold text-zinc-900 dark:text-white leading-[1.05] tracking-tighter mb-6">
              Hi, I'm <br />
              <span className="text-zinc-400 dark:text-zinc-500">Priyansh Bhatt</span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-10 max-w-lg">
              I am a passionate software engineer and the creator of IntelliKey. My expertise lies in building dynamic, highly-optimized web applications that solve complex problems with elegant, minimalist design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://priyansh.framer.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-green-slider hover:bg-brand-green-accent text-black font-bold text-[16px] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Portfolio
                <ExternalLink size={18} />
              </a>
              <a 
                href="mailto:priyanshbhatt.dev@gmail.com" 
                className="flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-bold text-[16px] hover:border-brand-green-slider dark:hover:border-brand-green-slider hover:bg-brand-green-slider/5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
