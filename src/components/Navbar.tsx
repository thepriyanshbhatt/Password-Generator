import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial system preference or saved preference
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const scrollToFeatures = () => {
    const target = document.getElementById('features');
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // faster, non-bouncy scroll
    let start: number | null = null;

    // easeOutQuart for a fast, smooth swipe effect without bouncing
    const easeOutQuart = (t: number) => {
      return 1 - Math.pow(1 - t, 4);
    };

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeOutQuart(percentage));
      
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return (
    <div className="fixed top-4 md:top-6 z-50 w-full px-4 md:px-8 flex justify-center">
      <nav className="h-[72px] max-w-4xl w-full bg-white/70 dark:bg-[#1A1A1A]/80 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-full flex items-center justify-between px-6 md:px-8 shadow-sm transition-all duration-500 relative">
        <div className="flex-1 flex items-center justify-start">
        <a href="/" className="flex items-center gap-3 text-[32px] font-extrabold text-text-primary tracking-tight leading-none">
          <img src="/vaultr-logo.png" alt="Vaultr Logo" className="w-[32px] h-[32px] object-contain drop-shadow-sm" />
          Vaultr
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 items-center justify-center gap-[48px]">
        <button onClick={scrollToFeatures} className="text-[17px] font-semibold text-text-secondary hover:text-text-primary transition-colors">
          Features
        </button>
        <button className="text-[17px] font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-default">
          About
        </button>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-text-primary hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
