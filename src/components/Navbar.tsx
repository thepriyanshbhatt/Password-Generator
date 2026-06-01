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
    <nav className="h-[80px] bg-nav-bg flex items-center justify-between px-6 md:px-12 w-full shrink-0 transition-colors duration-300">
      <div className="flex-1 flex items-center justify-start">
        <a href="/" className="text-[30px] font-bold text-text-primary tracking-tight">
          MyPass
        </a>
      </div>
      
      <div className="hidden md:flex flex-1 items-center justify-center gap-[48px]">
        <a href="#features" className="text-[15px] font-medium text-text-primary hover:text-text-secondary transition-colors">
          Features
        </a>
        <a href="#who-are-we" className="text-[15px] font-medium text-text-primary hover:text-text-secondary transition-colors">
          Who are we
        </a>
        <a href="#resources" className="text-[15px] font-medium text-text-primary hover:text-text-secondary transition-colors">
          Resources
        </a>
      </div>

      <div className="flex-1 flex items-center justify-end gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="bg-btn-bg text-btn-text w-[200px] h-[50px] rounded-full font-semibold transition-colors flex items-center justify-center text-[15px] shadow-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
