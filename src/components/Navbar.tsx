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

  return (
    <div className="fixed top-4 md:top-6 z-50 w-full px-4 md:px-8 flex justify-center">
      <nav className="h-[72px] max-w-6xl w-full bg-white/70 dark:bg-[#1A1A1A]/80 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-full flex items-center justify-between px-6 md:px-8 shadow-sm transition-all duration-500 relative">
        <div className="flex-1 flex items-center justify-start">
        <a href="/" className="text-[28px] font-bold text-text-primary tracking-tight">
          MyPass
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 items-center justify-center gap-[48px]">
        <span className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-default">
          Features
        </span>
        <span className="text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-default">
          Who are we
        </span>
      </div>

      <div className="flex-1 flex items-center justify-end gap-6">
        <button 
          onClick={toggleTheme}
          className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 text-text-primary hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="bg-btn-bg text-btn-text w-[160px] h-[44px] rounded-full font-medium transition-all duration-300 flex items-center justify-center text-[15px] hover:scale-105 active:scale-95 shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.05)]">
          Get Started
        </button>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
