import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-[80px] bg-white flex items-center justify-between px-6 md:px-12 w-full shrink-0">
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

      <div className="flex-1 flex items-center justify-end">
        <button className="bg-black text-white w-[200px] h-[50px] rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center text-[15px]">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
